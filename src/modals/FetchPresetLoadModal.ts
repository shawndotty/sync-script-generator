import { App, Modal, ButtonComponent, Notice } from "obsidian";
import { FetchConfigPreset, Platform } from "../types/types";
import { t } from "../lang/helpers";

class FetchPresetDeleteConfirmModal extends Modal {
	private message: string;
	private onConfirm: () => void;

	constructor(app: App, message: string, onConfirm: () => void) {
		super(app);
		this.message = message;
		this.onConfirm = onConfirm;
	}

	onOpen() {
		const { contentEl } = this;
		contentEl.empty();
		this.titleEl.setText(t("FETCH_PRESET_MANAGER_TITLE"));
		contentEl.addClass("preset-manager-modal");

		contentEl.createEl("p", {
			text: this.message,
			cls: "preset-confirm-message",
		});

		const footer = contentEl.createDiv({ cls: "preset-modal-footer" });

		new ButtonComponent(footer)
			.setButtonText(t("FETCH_PRESET_MANAGER_BTN_CLOSE"))
			.onClick(() => this.close());

		new ButtonComponent(footer)
			.setButtonText(t("FETCH_PRESET_MANAGER_BTN_DELETE"))
			.setWarning()
			.setCta()
			.onClick(() => {
				this.onConfirm();
				this.close();
			});
	}
}

export class FetchPresetLoadModal extends Modal {
	private presets: FetchConfigPreset[];
	private onLoadPreset: (preset: FetchConfigPreset) => void;
	private onDeletePreset: (presetId: string) => void;

	constructor(
		app: App,
		presets: FetchConfigPreset[],
		onLoadPreset: (preset: FetchConfigPreset) => void,
		onDeletePreset: (presetId: string) => void,
	) {
		super(app);
		this.presets = presets;
		this.onLoadPreset = onLoadPreset;
		this.onDeletePreset = onDeletePreset;
	}

	onOpen() {
		const { contentEl } = this;
		this.modalEl.addClass("mod-preset-manager");
		this.titleEl.setText(t("FETCH_PRESET_MANAGER_TITLE"));

		contentEl.empty();
		contentEl.addClass("preset-manager-modal");

		const loadSection = contentEl.createDiv({
			cls: "preset-load-section",
		});
		// loadSection.createEl("h3", {
		// 	text: t("FETCH_PRESET_MANAGER_LOAD_TITLE"),
		// });

		if (this.presets.length === 0) {
			loadSection.createEl("p", {
				text: t("FETCH_PRESET_MANAGER_LOAD_EMPTY"),
				cls: "preset-empty-message",
			});
		} else {
			const presetsList = loadSection.createDiv({ cls: "presets-list" });

			// Group presets by platform
			const presetsByPlatform: Record<Platform, FetchConfigPreset[]> = {
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
						.setButtonText(t("FETCH_PRESET_MANAGER_BTN_LOAD"))
						.setCta();
					loadBtn.onClick(() => {
						this.onLoadPreset(preset);
						new Notice(
							t("FETCH_PRESET_MANAGER_NOTICE_LOADED").replace(
								"${name}",
								preset.name,
							),
						);
						this.close();
					});

					const deleteBtn = new ButtonComponent(presetActions);
					deleteBtn
						.setButtonText(t("FETCH_PRESET_MANAGER_BTN_DELETE"))
						.setWarning();
					deleteBtn.onClick(() => {
						const message = t(
							"FETCH_PRESET_MANAGER_CONFIRM_DELETE",
						).replace("${name}", preset.name);

						new FetchPresetDeleteConfirmModal(
							this.app,
							message,
							() => {
								this.onDeletePreset(preset.id);
								new Notice(
									t(
										"FETCH_PRESET_MANAGER_NOTICE_DELETED",
									).replace("${name}", preset.name),
								);
								this.close();
							},
						).open();
					});
				});
			});
		}

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
