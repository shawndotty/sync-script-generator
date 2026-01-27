import {
	App,
	Modal,
	Setting,
	Notice,
	TFile,
	Modifier,
	Platform,
	ButtonComponent,
} from "obsidian";
import { EditorView, keymap } from "@codemirror/view";
import { EditorState } from "@codemirror/state";
import { javascript } from "@codemirror/lang-javascript";
import { oneDark } from "@codemirror/theme-one-dark";
import { defaultKeymap } from "@codemirror/commands";
import { t } from "../lang/helpers";
import { SyncScriptGeneratorSettings } from "settings";
import { GENERATOR_VIEW_TYPE } from "models/constants";
import { FETCH_SCRIPT_GENERATOR_VIEW_TYPE } from "models/constantsFetch";

import { TemplaterServices } from "../services/templater-services";
import { HotkeyService, HotkeyEntry } from "../services/hotkey-services";

export class ScriptPreviewModal extends Modal {
	private script: string;
	private platform: string;
	private importedFile: TFile | null;
	private settings: SyncScriptGeneratorSettings;
	private prefix: string;
	private type: string;
	private templateName: string;
	private targetFilePath: string;
	private hotkey?: HotkeyEntry | null;
	private isRecordingHotkey = false;
	private hotkeyBtn: ButtonComponent;

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

		const previewSetting = new Setting(this.contentEl);
		previewSetting.infoEl.hide();

		if (!this.importedFile) {
			previewSetting.addText(
				(text) =>
					(text
						.setPlaceholder(this.templateName)
						.setValue(this.templateName)
						.onChange((value) => {
							this.templateName = value;
							this.makeTargetFilePath();
						}).inputEl.style.width = "100%"),
			);
		}

		previewSetting.addButton((btn) => {
			this.hotkeyBtn = btn;
			this.updateHotkeyButton();
			btn.onClick(() => this.toggleHotkeyRecording());
		});

		previewSetting
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

							const hotkey = this.hotkey;
							if (
								hotkey &&
								typeof hotkey === "object" &&
								hotkey.key
							) {
								try {
									const modifiers = (hotkey.modifiers || [
										"Alt",
									]) as Modifier[];
									const key = hotkey.key as string;

									// 1. Add to Templater
									const templaterService =
										new TemplaterServices(this.app);
									await templaterService.addTemplaterHotkeys([
										this.targetFilePath,
									]);

									// 2. Add hotkey
									await HotkeyService.addTemplaterHotkey(
										this.app,
										this.targetFilePath,
										modifiers,
										key,
									);
								} catch (error) {
									console.error(
										"Failed to add hotkey",
										error,
									);
								}
							}
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

	updateHotkeyButton() {
		if (!this.hotkeyBtn) return;

		const btnEl = this.hotkeyBtn.buttonEl;
		btnEl.removeClass("mod-warning");

		if (this.isRecordingHotkey) {
			this.hotkeyBtn.setButtonText(t("SCRIPT_PREVIEW_BTN_PRESS_HOTKEY"));
			this.hotkeyBtn.setCta();
		} else if (this.hotkey) {
			const modifiers = this.hotkey.modifiers.join("+");
			const key = this.hotkey.key.toUpperCase();
			this.hotkeyBtn.setButtonText(`${modifiers}+${key}`);
			this.hotkeyBtn.removeCta();
		} else {
			this.hotkeyBtn.setButtonText(t("SCRIPT_PREVIEW_BTN_ADD_HOTKEY"));
			this.hotkeyBtn.removeCta();
		}
	}

	toggleHotkeyRecording() {
		if (this.isRecordingHotkey) {
			this.stopRecording();
		} else {
			this.startRecording();
		}
	}

	startRecording() {
		this.isRecordingHotkey = true;
		this.updateHotkeyButton();
		document.addEventListener("keydown", this.handleKeyDown);
	}

	stopRecording() {
		this.isRecordingHotkey = false;
		document.removeEventListener("keydown", this.handleKeyDown);
		this.updateHotkeyButton();
	}

	handleKeyDown = async (e: KeyboardEvent) => {
		e.preventDefault();
		e.stopPropagation();

		if (["Control", "Shift", "Alt", "Meta"].includes(e.key)) return;

		const finalModifiers: Modifier[] = [];

		if (Platform.isMacOS) {
			if (e.metaKey) finalModifiers.push("Mod");
			if (e.ctrlKey) finalModifiers.push("Ctrl");
			if (e.altKey) finalModifiers.push("Alt");
			if (e.shiftKey) finalModifiers.push("Shift");
		} else {
			if (e.ctrlKey) finalModifiers.push("Mod");
			if (e.metaKey) finalModifiers.push("Meta");
			if (e.altKey) finalModifiers.push("Alt");
			if (e.shiftKey) finalModifiers.push("Shift");
		}

		let key = e.key.toUpperCase();

		// Handle Alt+Key behavior on macOS where it produces special characters
		if (e.code.startsWith("Digit")) {
			key = e.code.replace("Digit", "");
		} else if (e.code.startsWith("Key")) {
			key = e.code.replace("Key", "");
		} else if (e.code.startsWith("Numpad")) {
			key = e.code.replace("Numpad", "");
		} else if (e.code === "Minus") {
			key = "-";
		} else if (e.code === "Equal") {
			key = "=";
		} else if (e.code === "BracketLeft") {
			key = "[";
		} else if (e.code === "BracketRight") {
			key = "]";
		} else if (e.code === "Backslash") {
			key = "\\";
		} else if (e.code === "Semicolon") {
			key = ";";
		} else if (e.code === "Quote") {
			key = "'";
		} else if (e.code === "Comma") {
			key = ",";
		} else if (e.code === "Period") {
			key = ".";
		} else if (e.code === "Slash") {
			key = "/";
		} else if (e.code === "Backquote") {
			key = "`";
		}

		const conflict = await HotkeyService.checkHotkeyConflict(
			this.app,
			finalModifiers,
			key,
			`templater-obsidian:${this.targetFilePath}`,
		);

		if (conflict) {
			this.hotkey = { modifiers: finalModifiers, key };
			this.stopRecording();
			this.hotkeyBtn.buttonEl.addClass("mod-warning");
			new Notice(t("SCRIPT_PREVIEW_HOTKEY_CONFLICT"));
		} else {
			this.hotkey = { modifiers: finalModifiers, key };
			this.stopRecording();
		}
	};

	onClose() {
		document.removeEventListener("keydown", this.handleKeyDown);
		this.contentEl.empty();
	}
}
