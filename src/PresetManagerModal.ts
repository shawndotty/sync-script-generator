import {
	App,
	Modal,
	ButtonComponent,
	TextComponent,
	Notice,
	DropdownComponent,
} from "obsidian";
import { ConfigPreset, Platform, SyncScriptSettings } from "./types";
import { t } from "./lang/helpers";

export class PresetManagerModal extends Modal {
	private presets: ConfigPreset[];
	private onSavePreset: (preset: ConfigPreset) => void;
	private onLoadPreset: (preset: ConfigPreset) => void;
	private onDeletePreset: (presetId: string) => void;
	private currentSettings: SyncScriptSettings;
	private activeTab: "Save" | "Load" = "Load";
	private tabContentContainer: HTMLElement;

	constructor(
		app: App,
		presets: ConfigPreset[],
		currentSettings: SyncScriptSettings,
		onSavePreset: (preset: ConfigPreset) => void,
		onLoadPreset: (preset: ConfigPreset) => void,
		onDeletePreset: (presetId: string) => void
	) {
		super(app);
		this.presets = presets;
		this.currentSettings = currentSettings;
		this.onSavePreset = onSavePreset;
		this.onLoadPreset = onLoadPreset;
		this.onDeletePreset = onDeletePreset;
	}

	onOpen() {
		const { contentEl } = this;
		this.modalEl.addClass("mod-preset-manager");
		contentEl.empty();
		contentEl.addClass("preset-manager-modal");

		contentEl.createEl("h2", { text: t("PRESET_MANAGER_TITLE") });

		// Tabs Container
		const tabsContainer = contentEl.createDiv({
			cls: "settings-tabs",
		});
		const tabs: ("Save" | "Load")[] = ["Save", "Load"];

		tabs.forEach((tab) => {
			const tabBtn = tabsContainer.createEl("button", {
				text:
					tab === "Save"
						? t("PRESET_MANAGER_TAB_SAVE")
						: t("PRESET_MANAGER_TAB_LOAD"),
				cls: "settings-tab-btn",
			});
			if (this.activeTab === tab) tabBtn.addClass("is-active");

			tabBtn.onclick = () => {
				this.activeTab = tab;
				this.renderTabs(tabsContainer);
				this.renderTabContent();
			};
		});

		// Tab Content Container
		this.tabContentContainer = contentEl.createDiv({
			cls: "preset-tab-content",
		});

		// Initial render
		this.renderTabs(tabsContainer);
		this.renderTabContent();

		// Footer
		const footer = contentEl.createDiv({ cls: "preset-modal-footer" });
		new ButtonComponent(footer)
			.setButtonText(t("PRESET_MANAGER_BTN_CLOSE"))
			.onClick(() => this.close());
	}

	private renderTabs(tabsContainer: HTMLElement) {
		const tabs: ("Save" | "Load")[] = ["Save", "Load"];
		tabsContainer.findAll(".settings-tab-btn").forEach((btn, index) => {
			const tab = tabs[index];
			if (this.activeTab === tab) {
				btn.addClass("is-active");
			} else {
				btn.removeClass("is-active");
			}
		});
	}

	private renderTabContent() {
		this.tabContentContainer.empty();

		if (this.activeTab === "Save") {
			this.renderSaveTab();
		} else {
			this.renderLoadTab();
		}
	}

	private renderSaveTab() {
		const saveSection = this.tabContentContainer.createDiv({
			cls: "preset-save-section",
		});
		saveSection.createEl("h3", { text: t("PRESET_MANAGER_SAVE_TITLE") });

		const saveContainer = saveSection.createDiv({
			cls: "preset-save-form",
		});
		const nameInput = new TextComponent(saveContainer);
		nameInput.inputEl.style.width = "100%";
		nameInput.inputEl.style.marginBottom = "10px";
		nameInput.setPlaceholder(t("PRESET_MANAGER_SAVE_PLACEHOLDER"));

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
			Object.fromEntries(platforms.map((p) => [p, p]))
		);
		platformDropdown.setValue(this.currentSettings.platform);

		const saveButton = new ButtonComponent(saveContainer);
		saveButton.setButtonText(t("PRESET_MANAGER_SAVE_BTN")).setCta();
		saveButton.onClick(() => {
			const name = nameInput.getValue().trim();
			if (!name) {
				new Notice(t("PRESET_MANAGER_NOTICE_ENTER_NAME"));
				return;
			}

			// Check for duplicate name
			if (this.presets.some((p) => p.name === name)) {
				new Notice(t("PRESET_MANAGER_NOTICE_DUPLICATE"));
				return;
			}

			const preset: ConfigPreset = {
				id: Math.random().toString(36).substr(2, 9),
				name,
				platform: platformDropdown.getValue() as Platform,
				rootSettings: { ...this.currentSettings.rootSettings },
				vaultSettings: { ...this.currentSettings.vaultSettings },
				folderSettings: JSON.parse(
					JSON.stringify(this.currentSettings.folderSettings)
				), // Deep copy
				createdAt: Date.now(),
				updatedAt: Date.now(),
			};

			this.onSavePreset(preset);
			new Notice(
				t("PRESET_MANAGER_NOTICE_SAVED").replace("${name}", name)
			);
			this.close();
		});
	}

	private renderLoadTab() {
		const loadSection = this.tabContentContainer.createDiv({
			cls: "preset-load-section",
		});
		loadSection.createEl("h3", { text: t("PRESET_MANAGER_LOAD_TITLE") });

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
	}

	onClose() {
		this.contentEl.empty();
	}
}
