import { App, Modal, Setting, Notice, MarkdownRenderer } from "obsidian";
import { t } from "../lang/helpers";

export class RelationshipDiagramModal extends Modal {
	private mermaidText: string;
	private titleText: string;
	private targetFileName: string;
	private targetFolder: string;

	constructor(
		app: App,
		titleText: string,
		mermaidText: string,
		options?: { defaultFolder?: string; defaultFileName?: string },
	) {
		super(app);
		this.titleText = titleText;
		this.mermaidText = mermaidText;
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

		// Mermaid SVG 结构中，edgePaths 位于 .edgePaths 组，且 id 通常形如 L_start_end_index
		// 尝试根据 id 匹配相关边
		// 节点 ID: 例如 folder_0____IOTO
		// 边 ID: L_folder_0____IOTO_remote_Airtable_1234_0 (示例)
		// 因此可以简单查找包含节点 ID 的边路径

		const targetId = targetNode.id;
		if (!targetId) return;

		const edges = svg.querySelectorAll(".edgePaths .edgePath");
		edges.forEach((edge) => {
			if (edge.id.includes(targetId)) {
				edge.classList.add("active");
				// 尝试高亮另一端的节点
				// 从 edge id 中解析出另一端 id 比较困难，因为 id 可能包含下划线
				// 但我们可以反过来遍历所有节点，看该边是否包含其 id
				const allNodes = svg.querySelectorAll(".node");
				allNodes.forEach((otherNode) => {
					if (
						otherNode.id &&
						otherNode.id !== targetId &&
						edge.id.includes(otherNode.id)
					) {
						otherNode.classList.add("active");
					}
				});
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
