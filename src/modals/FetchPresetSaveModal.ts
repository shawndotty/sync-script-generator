import {
	App,
	Modal,
	ButtonComponent,
	TextComponent,
	Notice,
	DropdownComponent,
} from "obsidian";
import {
	FetchConfigPreset,
	Platform,
	FetchScriptSettings,
} from "../types/types";
import { t } from "../lang/helpers";

export class FetchPresetSaveModal extends Modal {
	private presets: FetchConfigPreset[];
	private onSavePreset: (preset: FetchConfigPreset) => void;
	private currentSettings: FetchScriptSettings;

	constructor(
		app: App,
		presets: FetchConfigPreset[],
		currentSettings: FetchScriptSettings,
		onSavePreset: (preset: FetchConfigPreset) => void,
	) {
		super(app);
		this.presets = presets;
		this.currentSettings = currentSettings;
		this.onSavePreset = onSavePreset;
	}

	onOpen() {
		const { contentEl } = this;
		this.modalEl.addClass("mod-preset-manager");
		this.titleEl.setText(t("FETCH_PRESET_MANAGER_SAVE_TITLE"));
		contentEl.empty();
		contentEl.addClass("preset-manager-modal");

		// contentEl.createEl("h2", { text: t("FETCH_PRESET_MANAGER_TITLE") });

		const saveSection = contentEl.createDiv({
			cls: "preset-save-section",
		});

		const saveContainer = saveSection.createDiv({
			cls: "preset-save-form",
		});
		const nameInput = new TextComponent(saveContainer);
		nameInput.inputEl.style.width = "100%";
		nameInput.inputEl.style.marginBottom = "10px";
		nameInput.setPlaceholder(t("FETCH_PRESET_MANAGER_SAVE_PLACEHOLDER"));

		const platformDropdown = new DropdownComponent(saveContainer);
		platformDropdown.selectEl.style.width = "100%";
		platformDropdown.selectEl.style.marginBottom = "10px";
		const platforms: Platform[] = [
			"Airtable",
			"Feishu",
			"Vika",
			"Lark",
			"WPS",
			"Ding",
		];
		platformDropdown.addOptions(
			Object.fromEntries(platforms.map((p) => [p, p])),
		);
		platformDropdown.setValue(this.currentSettings.platform);

		const saveButton = new ButtonComponent(saveContainer);
		saveButton.setButtonText(t("FETCH_PRESET_MANAGER_SAVE_BTN")).setCta();
		saveButton.onClick(() => {
			const name = nameInput.getValue().trim();
			if (!name) {
				new Notice(t("FETCH_PRESET_MANAGER_NOTICE_ENTER_NAME"));
				return;
			}

			// Check for duplicate name
			if (this.presets.some((p) => p.name === name)) {
				new Notice(t("FETCH_PRESET_MANAGER_NOTICE_DUPLICATE"));
				return;
			}

			const preset: FetchConfigPreset = {
				id: Math.random().toString(36).substr(2, 9),
				name,
				platform: platformDropdown.getValue() as Platform,
				rootSettings: { ...this.currentSettings.rootSettings },
				folderSettings: JSON.parse(
					JSON.stringify(this.currentSettings.folderSettings),
				), // Deep copy
				createdAt: Date.now(),
				updatedAt: Date.now(),
			};

			this.onSavePreset(preset);
			new Notice(
				t("FETCH_PRESET_MANAGER_NOTICE_SAVED").replace("${name}", name),
			);
			this.close();
		});

		// Footer
		// const footer = contentEl.createDiv({ cls: "preset-modal-footer" });
		// new ButtonComponent(footer)
		// 	.setButtonText(t("FETCH_PRESET_MANAGER_BTN_CLOSE"))
		// 	.onClick(() => this.close());
	}

	onClose() {
		this.contentEl.empty();
	}
}
