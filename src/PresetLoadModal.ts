import {
	App,
	Modal,
	ButtonComponent,
	Notice,
} from "obsidian";
import { ConfigPreset, Platform } from "./types";
import { t } from "./lang/helpers";

export class PresetLoadModal extends Modal {
	private presets: ConfigPreset[];
	private onLoadPreset: (preset: ConfigPreset) => void;
	private onDeletePreset: (presetId: string) => void;

	constructor(
		app: App,
		presets: ConfigPreset[],
		onLoadPreset: (preset: ConfigPreset) => void,
		onDeletePreset: (presetId: string) => void
	) {
		super(app);
		this.presets = presets;
		this.onLoadPreset = onLoadPreset;
		this.onDeletePreset = onDeletePreset;
	}

	onOpen() {
		const { contentEl } = this;
		this.modalEl.addClass("mod-preset-manager"); // Reusing style for now
		contentEl.empty();
		contentEl.addClass("preset-manager-modal"); // Reusing style for now

		contentEl.createEl("h2", { text: t("PRESET_MANAGER_LOAD_TITLE") });

		const loadSection = contentEl.createDiv({
			cls: "preset-load-section",
		});

		if (this.presets.length === 0) {
			loadSection.createEl("p", {
				text: t("PRESET_MANAGER_LOAD_EMPTY"),
				cls: "preset-empty-message",
			});
		} else {
			const presetsList = loadSection.createDiv({ cls: "presets-list" });

			// Group presets by platform
			const presetsByPlatform: Record<Platform, ConfigPreset[]> = {
				Airtable: [],
				Feishu: [],
				Vika: [],
				Lark: [],
				WPS: [],
				Ding: [],
			};

			this.presets.forEach((preset) => {
				if (presetsByPlatform[preset.platform]) {
					presetsByPlatform[preset.platform].push(preset);
				}
			});

			Object.entries(presetsByPlatform).forEach(([platform, presets]) => {
				if (presets.length === 0) return;

				const platformGroup = presetsList.createDiv({
					cls: "preset-platform-group",
				});
				platformGroup.createEl("h4", { text: platform });

				presets.forEach((preset) => {
					const presetItem = platformGroup.createDiv({
						cls: "preset-item",
					});

					const presetInfo = presetItem.createDiv({
						cls: "preset-info",
					});
					presetInfo.createEl("div", {
						text: preset.name,
						cls: "preset-name",
					});
					presetInfo.createEl("div", {
						text: new Date(preset.updatedAt).toLocaleDateString(),
						cls: "preset-date",
					});

					const presetActions = presetItem.createDiv({
						cls: "preset-actions",
					});

					const loadBtn = new ButtonComponent(presetActions);
					loadBtn
						.setButtonText(t("PRESET_MANAGER_BTN_LOAD"))
						.setCta();
					loadBtn.onClick(() => {
						this.onLoadPreset(preset);
						new Notice(
							t("PRESET_MANAGER_NOTICE_LOADED").replace(
								"${name}",
								preset.name
							)
						);
						this.close();
					});

					const deleteBtn = new ButtonComponent(presetActions);
					deleteBtn
						.setButtonText(t("PRESET_MANAGER_BTN_DELETE"))
						.setWarning();
					deleteBtn.onClick(() => {
						if (
							confirm(
								t("PRESET_MANAGER_CONFIRM_DELETE").replace(
									"${name}",
									preset.name
								)
							)
						) {
							this.onDeletePreset(preset.id);
							new Notice(
								t("PRESET_MANAGER_NOTICE_DELETED").replace(
									"${name}",
									preset.name
								)
							);
							this.close();
						}
					});
				});
			});
		}

		// Footer
		const footer = contentEl.createDiv({ cls: "preset-modal-footer" });
		new ButtonComponent(footer)
			.setButtonText(t("PRESET_MANAGER_BTN_CLOSE"))
			.onClick(() => this.close());
	}

	onClose() {
		this.contentEl.empty();
	}
}
