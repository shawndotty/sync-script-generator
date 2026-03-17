import {
	App,
	Modal,
	Setting,
	Notice,
	MarkdownRenderer,
	Component,
} from "obsidian";
import { t } from "../lang/helpers";
import { RelationshipGraph } from "../models/relationship";

export class RelationshipDiagramModal extends Modal {
	private mermaidText: string;
	private graph: RelationshipGraph;
	private titleText: string;
	private targetFileName: string;
	private targetFolder: string;
	private rendererComponent: Component;
	private currentScale = 1;
	private svgElement: SVGSVGElement | null = null;
	private baseViewBox: SVGRect | null = null;

	constructor(
		app: App,
		titleText: string,
		mermaidText: string,
		graph: RelationshipGraph,
		options?: { defaultFolder?: string; defaultFileName?: string },
	) {
		super(app);
		this.titleText = titleText;
		this.mermaidText = mermaidText;
		this.graph = graph;
		this.targetFolder = options?.defaultFolder || "";
		this.targetFileName =
			options?.defaultFileName ||
			`Relations-${new Date().toISOString().slice(0, 10)}`;
		this.rendererComponent = new Component();
	}

	onOpen() {
		this.modalEl.addClass("mod-relationship-diagram");
		this.titleEl.setText(this.titleText);

		const mdContainer = this.contentEl.createDiv({
			cls: "relationship-mermaid-container",
		});

		MarkdownRenderer.render(
			this.app,
			this.mermaidText,
			mdContainer,
			"",
			this.rendererComponent,
		).then(() => {
			this.attachMermaidInteraction(mdContainer);
		});

		const toolbar = new Setting(this.contentEl);
		toolbar.infoEl.hide();
		toolbar
			.addText((text) => {
				text.setPlaceholder(this.targetFileName)
					.setValue(this.targetFileName)
					.onChange((v) => (this.targetFileName = v));
				text.inputEl.style.width = "100%";
			})
			.addButton((btn) => {
				btn.setIcon("zoom-in")
					.setTooltip(
						t("SCRIPT_PREVIEW_BTN_MAXIMIZE") === "最大化"
							? "放大"
							: "Zoom In",
					)
					.onClick(() => {
						this.currentScale *= 1.2;
						this.updateSvgTransform();
					});
			})
			.addButton((btn) => {
				btn.setIcon("zoom-out")
					.setTooltip(
						t("SCRIPT_PREVIEW_BTN_MAXIMIZE") === "最大化"
							? "缩小"
							: "Zoom Out",
					)
					.onClick(() => {
						this.currentScale /= 1.2;
						this.updateSvgTransform();
					});
			})
			.addButton((btn) => {
				btn.setButtonText(t("SCRIPT_PREVIEW_BTN_MAXIMIZE")).onClick(
					() => {
						if (this.modalEl.hasClass("is-maximized")) {
							this.modalEl.removeClass("is-maximized");
							btn.setButtonText(t("SCRIPT_PREVIEW_BTN_MAXIMIZE"));
						} else {
							this.modalEl.addClass("is-maximized");
							btn.setButtonText(t("SCRIPT_PREVIEW_BTN_RESTORE"));
						}
						setTimeout(() => this.fitToContainer(mdContainer), 300);
					},
				);
			})
			.addButton((btn) => {
				btn.setButtonText(t("diagram.copy")).onClick(async () => {
					await navigator.clipboard.writeText(this.mermaidText);
					new Notice(t("SCRIPT_PREVIEW_NOTICE_COPIED"));
				});
			})
			.addButton((btn) => {
				btn.setButtonText(t("diagram.export"))
					.setCta()
					.onClick(async () => {
						const baseName =
							this.targetFileName && this.targetFileName.trim()
								? this.targetFileName.trim()
								: `Relations-${Date.now()}`;
						const targetPath =
							(this.targetFolder || "") + "/" + baseName + ".md";
						const content = this.mermaidText;
						await this.app.vault.create(targetPath, content);
						new Notice(
							t("SCRIPT_PREVIEW_NOTICE_SAVED").replace(
								"${file}",
								targetPath,
							),
						);
						this.close();
					});
			})
			.addButton((btn) => {
				btn.setButtonText(t("diagram.refresh")).onClick(() => {
					mdContainer.empty();
					MarkdownRenderer.render(
						this.app,
						this.mermaidText,
						mdContainer,
						"",
						this.rendererComponent,
					);
				});
			});
	}

	onClose() {
		this.contentEl.empty();
		if (this.rendererComponent) {
			this.rendererComponent.unload();
		}
	}

	private attachMermaidInteraction(container: HTMLElement) {
		// 监听容器内的点击/悬停事件，实现高亮效果
		// 由于 MarkdownRenderer 异步渲染，这里设置一个轮询检测 SVG 是否生成
		const checkSvg = setInterval(() => {
			const svg = container.querySelector("svg");
			if (svg) {
				clearInterval(checkSvg);
				this.svgElement = svg;
				if (svg.viewBox && svg.viewBox.baseVal) {
					this.baseViewBox = svg.viewBox.baseVal;
				} else {
					const b = svg.getBBox();
					this.baseViewBox = {
						x: b.x,
						y: b.y,
						width: b.width,
						height: b.height,
					} as any;
				}

				// Remove fixed size to allow scaling
				svg.removeAttribute("width");
				svg.removeAttribute("height");
				svg.style.maxWidth = "none";

				// Initial Fit
				this.fitToContainer(container);

				this.setupInteractiveSvg(svg as unknown as HTMLElement);
			}
		}, 100);

		// 5秒后停止检测，防止死循环
		setTimeout(() => clearInterval(checkSvg), 5000);
	}

	private fitToContainer(container: HTMLElement) {
		if (!this.svgElement || !this.baseViewBox) return;

		const containerRect = container.getBoundingClientRect();
		// Avoid zero size
		if (containerRect.width === 0 || containerRect.height === 0) return;

		const wRatio = (containerRect.width - 40) / this.baseViewBox.width;
		const hRatio = (containerRect.height - 40) / this.baseViewBox.height;

		// Use the smaller ratio to fit both dimensions
		this.currentScale = Math.min(wRatio, hRatio);
		this.updateSvgTransform();
	}

	private updateSvgTransform() {
		if (!this.svgElement || !this.baseViewBox) return;

		const newWidth = this.baseViewBox.width * this.currentScale;
		const newHeight = this.baseViewBox.height * this.currentScale;

		this.svgElement.style.width = `${newWidth}px`;
		this.svgElement.style.height = `${newHeight}px`;
	}

	private setupInteractiveSvg(svg: HTMLElement) {
		const nodes = svg.querySelectorAll(".node");
		const edges = svg.querySelectorAll(".edgePaths path");

		// 存储节点ID到边索引的映射
		// Mermaid 生成的 edge id 通常不直观，需要根据 path 坐标或附加属性判定
		// 简单方案：点击/悬停时，dim 所有元素，然后 restore 目标及其邻居

		// 为每个节点添加事件
		nodes.forEach((node) => {
			const nodeId = node.id; // Mermaid 生成的 dom id

			node.addEventListener("mouseenter", () => {
				this.highlightRelated(svg, node as HTMLElement);
			});
			node.addEventListener("mouseleave", () => {
				this.resetHighlight(svg);
			});
		});
	}

	private highlightRelated(svg: HTMLElement, targetNode: HTMLElement) {
		svg.classList.add("interaction-active");
		targetNode.classList.add("active");

		const targetId = extractId(targetNode.id);
		if (!targetId) return;

		// 反向查找：根据 DOM ID 还原原始 Graph Node ID
		const originalNode = this.graph.nodes.find(
			(n) => targetId === sanitizeId(n.id),
		);

		if (!originalNode) {
			return;
		}

		// 查找与该节点相连的所有边（入边和出边）
		const relatedEdges = this.graph.edges.filter(
			(e) => e.from === originalNode.id || e.to === originalNode.id,
		);

		// 收集相关联的节点 ID（原始 ID）
		const relatedNodeIds = new Set<string>();
		relatedEdges.forEach((e) => {
			if (e.from === originalNode.id) relatedNodeIds.add(e.to);
			else relatedNodeIds.add(e.from);
		});

		// 将原始 ID 转换为 DOM ID
		const relatedDomIds = new Set<string>();
		relatedNodeIds.forEach((nid) => {
			relatedDomIds.add(sanitizeId(nid));
		});

		// 高亮关联的节点（本次修改：移除高亮邻居节点，只高亮当前节点）
		const allNodes = svg.querySelectorAll(".node");
		allNodes.forEach((node) => {
			// 如果 node.id 包含 relatedDomIds 中的任意一个 id，则添加 active 类
			const shouldActive = Array.from(relatedDomIds).some(
				(id) => extractId(node.id) === id,
			);
			if (shouldActive) {
				node.classList.add("active");
			}
		});

		// 高亮关联的边：基于索引匹配
		// 1. 计算关联边在 graph.edges 中的索引
		const edgeIndices = new Set<number>();
		this.graph.edges.forEach((e, index) => {
			if (e.from === originalNode.id || e.to === originalNode.id) {
				edgeIndices.add(index);
			}
		});

		// 2. 找到 DOM 中的所有 edge 元素
		// Mermaid 的 edge 通常直接位于 .edgePaths 容器下，可能是 path 或 g
		// 不依赖特定的 class (如 .edgePath)，而是直接取子元素，这样更稳健且顺序对应更准确
		const edgeContainer = svg.querySelector(".edgePaths");
		if (edgeContainer) {
			const edgeElements = Array.from(edgeContainer.children);

			edgeElements.forEach((el, index) => {
				if (edgeIndices.has(index)) {
					el.classList.add("active");
					// 如果是 group，也给内部 path 加 active，以防 CSS 选择器需要
					const innerPath = el.querySelector("path");
					if (innerPath) innerPath.classList.add("active");
				}
			});
		}
	}

	private resetHighlight(svg: HTMLElement) {
		svg.classList.remove("interaction-active");
		svg.querySelectorAll(".active").forEach((el) =>
			el.classList.remove("active"),
		);
	}
}

function sanitizeId(s: string): string {
	return s.replace(/[^a-zA-Z0-9_\u4e00-\u9fa5]/g, "_");
}

function extractId(s: string): string {
	return s.match(/flowchart-(.*?)-/)?.[1] || "";
}
