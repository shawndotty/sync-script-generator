import { App, Modal, Setting, Notice, MarkdownRenderer } from "obsidian";
import { t } from "../lang/helpers";
import { RelationshipGraph } from "../models/relationship";

export class RelationshipDiagramModal extends Modal {
	private mermaidText: string;
	private graph: RelationshipGraph;
	private titleText: string;
	private targetFileName: string;
	private targetFolder: string;

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
			this as any,
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
				btn.setButtonText(t("SCRIPT_PREVIEW_BTN_MAXIMIZE")).onClick(
					() => {
						if (this.modalEl.hasClass("is-maximized")) {
							this.modalEl.removeClass("is-maximized");
							btn.setButtonText(t("SCRIPT_PREVIEW_BTN_MAXIMIZE"));
						} else {
							this.modalEl.addClass("is-maximized");
							btn.setButtonText(t("SCRIPT_PREVIEW_BTN_RESTORE"));
						}
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
						this as any,
					);
				});
			});
	}

	onClose() {
		this.contentEl.empty();
	}

	private attachMermaidInteraction(container: HTMLElement) {
		// 监听容器内的点击/悬停事件，实现高亮效果
		// 由于 MarkdownRenderer 异步渲染，这里设置一个轮询检测 SVG 是否生成
		const checkSvg = setInterval(() => {
			const svg = container.querySelector("svg");
			if (svg) {
				clearInterval(checkSvg);
				this.setupInteractiveSvg(svg as unknown as HTMLElement);
			}
		}, 100);

		// 5秒后停止检测，防止死循环
		setTimeout(() => clearInterval(checkSvg), 5000);
	}

	private setupInteractiveSvg(svg: HTMLElement) {
		const nodes = svg.querySelectorAll(".node");
		const edges = svg.querySelectorAll(".edgePaths .edgePath");
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

		const targetId = targetNode.id;
		if (!targetId) return;

		// 反向查找：根据 DOM ID 还原原始 Graph Node ID
		const originalNode = this.graph.nodes.find(
			(n) => sanitizeId(n.id) === targetId,
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

		// 高亮关联的节点
		const allNodes = svg.querySelectorAll(".node");
		allNodes.forEach((node) => {
			if (relatedDomIds.has(node.id)) {
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

		// 2. 找到 DOM 中的所有 edgePath
		// 注意：Mermaid 渲染的 edgePath 顺序通常与定义的顺序一致
		// 但如果使用了 subgraph，可能会影响 DOM 结构顺序？
		// 实测 flowchart LR 中 edgePaths 都在一个 <g class="edgePaths"> 容器内，顺序通常是添加顺序。
		// 唯一的变数是 invisible link (~~~) 是否生成 path。
		// 在 Mermaid 10+ 中，~~~ 通常不会生成 visible path，或者生成 opacity:0 的 path。
		// 我们在 mermaid.ts 中把 invisible link 放在了最后。
		// 所以前面的 edgePath 应该一一对应 graph.edges。

		const allEdgePaths = svg.querySelectorAll(".edgePaths .edgePath");

		allEdgePaths.forEach((path, index) => {
			// graph.edges 的长度应该 <= allEdgePaths.length
			// 如果有隐形边生成了 path，它会在最后。
			if (edgeIndices.has(index)) {
				path.classList.add("active");
			}
		});
	}

	private resetHighlight(svg: HTMLElement) {
		svg.classList.remove("interaction-active");
		svg.querySelectorAll(".active").forEach((el) =>
			el.classList.remove("active"),
		);
	}
}

function sanitizeId(s: string): string {
	return s.replace(/[^a-zA-Z0-9_]/g, "_");
}
