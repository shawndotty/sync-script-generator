import { App, Modal, Setting, Notice, TFile } from "obsidian";
import { EditorView, keymap } from "@codemirror/view";
import { EditorState } from "@codemirror/state";
import { javascript } from "@codemirror/lang-javascript";
import { oneDark } from "@codemirror/theme-one-dark";
import { defaultKeymap } from "@codemirror/commands";
import { t } from "../lang/helpers";
import { SyncScriptGeneratorSettings } from "settings";

export class ScriptPreviewModal extends Modal {
	private script: string;
	private platform: string;
	private importedFile: TFile | null;
	private settings: SyncScriptGeneratorSettings;
	private prefix: string;
	private type: string;
	private templateName: string;
	private targetFilePath: string;

	constructor(
		app: App,
		settings: SyncScriptGeneratorSettings,
		script: string,
		platform: string,
		type: string,
		importedFile: TFile | null,
	) {
		super(app);
		this.script = script;
		this.platform = platform;
		this.importedFile = importedFile;
		this.settings = settings;
		this.type = type;

		this.prefix =
			this.settings.syncPlatform === "IOTO"
				? this.app.plugins.plugins["ioto-settings"].settings
						.userTemplatePrefix || ""
				: this.app.plugins.plugins["ob-sync-with-mdb"].settings
						.userTemplatePrefix || "";
		this.makeTemplateName();
		this.makeTargetFilePath();
	}

	onOpen() {
		this.modalEl.addClass("mod-script-preview");
		this.titleEl.setText(t("SCRIPT_PREVIEW_TITLE"));

		const editorContainer = this.contentEl.createDiv({
			cls: "script-editor-container",
		});

		const state = EditorState.create({
			doc: this.script,
			extensions: [
				keymap.of(defaultKeymap),
				javascript(),
				oneDark,
				EditorView.lineWrapping,
			],
		});

		const view = new EditorView({
			state,
			parent: editorContainer,
		});

		new Setting(this.contentEl)
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
				btn.setButtonText(t("SCRIPT_PREVIEW_BTN_COPY")).onClick(() => {
					const content = view.state.doc.toString();
					navigator.clipboard.writeText(content);
					new Notice(t("SCRIPT_PREVIEW_NOTICE_COPIED"));
				});
			})
			.addButton((btn) => {
				const label = this.importedFile
					? t("SCRIPT_PREVIEW_BTN_UPDATE").replace(
							"${file}",
							this.importedFile.basename,
						)
					: t("SCRIPT_PREVIEW_BTN_SAVE_AS");
				btn.setButtonText(label)
					.setCta()
					.onClick(async () => {
						const content = view.state.doc.toString();
						if (this.importedFile) {
							await this.app.vault.modify(
								this.importedFile,
								content,
							);
							new Notice(
								t("SCRIPT_PREVIEW_NOTICE_UPDATED").replace(
									"${path}",
									this.importedFile.path,
								),
							);
						} else {
							await this.app.vault.create(
								this.targetFilePath,
								content,
							);
							new Notice(
								t("SCRIPT_PREVIEW_NOTICE_SAVED").replace(
									"${file}",
									this.targetFilePath,
								),
							);
						}
						this.close();
					});
			});
	}

	makeTemplateName() {
		if (this.importedFile) {
			this.templateName = `${this.importedFile.basename}`;
		} else {
			const fileNamePrefix = this.prefix ? `${this.prefix}-` : "";
			this.templateName = `${fileNamePrefix}TP-OB${this.type}${
				this.platform
			}-${Date.now()}`;
		}
	}

	makeTargetFilePath() {
		if (this.importedFile) {
			this.targetFilePath = this.importedFile.path;
		} else {
			const folderPath =
				this.type === "Sync"
					? this.settings.syncTemplateFolder || ""
					: this.settings.fetchTemplateFolder || "";
			this.targetFilePath = `${folderPath}/${this.templateName}.md`;
		}
	}

	onClose() {
		this.contentEl.empty();
	}
}
