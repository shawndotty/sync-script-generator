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
		);

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
}
