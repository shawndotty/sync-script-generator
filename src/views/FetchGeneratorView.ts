import {
	ItemView,
	WorkspaceLeaf,
	Setting,
	Notice,
	ButtonComponent,
	setIcon,
	TFile,
} from "obsidian";
import {
	Platform,
	FetchOption,
	FetchFolderSetting,
	FetchConfigPreset,
} from "../types/types";
import {
	FETCH_OPTIONS,
	FETCH_SCRIPT_GENERATOR_VIEW_TYPE,
} from "../models/constantsFetch";
import { ImportModal } from "../modals/ImportModal";
import { ScriptPreviewModal } from "../modals/ScriptPreviewModal";
import { FetchScriptEngine } from "../processors/FetchScriptEngine";
import { FolderPickerModal } from "../ui/pickers/folder-picker";
import { FetchPresetLoadModal } from "../modals/FetchPresetLoadModal";
import { FetchPresetSaveModal } from "../modals/FetchPresetSaveModal";
import SyncScriptGeneratorPlugin from "../main";
import { t } from "../lang/helpers";
import { ObjectEditModal } from "../modals/ObjectEditModal";

export class FetchGeneratorView extends ItemView {
	platform: Platform = "Airtable";
	rootSettings: Record<string, string> = {};
	vaultSettings: Record<string, any> = {};
	folderSettings: FetchFolderSetting[] = [];
	activeOption: FetchOption | null = null;
	importedFile: TFile | null = null;
	activeTab: "Root" | "Vault" | "Folder" = "Root";
	plugin: SyncScriptGeneratorPlugin;
	platformListCollapsed = false;
	rightPanelCollapsed = false;

	// UI Elements
	middleContainer: HTMLElement;
	rightContainer: HTMLElement;

	constructor(leaf: WorkspaceLeaf, plugin: SyncScriptGeneratorPlugin) {
		super(leaf);
		this.plugin = plugin;
	}

	getViewType() {
		return FETCH_SCRIPT_GENERATOR_VIEW_TYPE;
	}

	getDisplayText() {
		return t("FETCH_GENERATOR_VIEW_TITLE");
	}

	getIcon() {
		return "arrow-down-to-line";
	}

	async onOpen() {
		const container = this.contentEl;
		container.empty();
		container.addClass("sync-generator-container");

		const grid = container.createDiv({ cls: "sync-generator-grid" });
		if (this.platformListCollapsed) {
			grid.addClass("platforms-collapsed");
		}
		if (this.rightPanelCollapsed) {
			grid.addClass("right-collapsed");
		}

		// Left Column: Platform List
		const leftCol = grid.createDiv({ cls: "sync-generator-left" });
		this.renderPlatformList(leftCol);

		// Middle Column: Settings Form
		this.middleContainer = grid.createDiv({ cls: "sync-generator-middle" });

		// Right Column: Help/Description
		this.rightContainer = grid.createDiv({ cls: "sync-generator-right" });

		this.renderMiddleColumn();
		this.renderRightColumn();
	}

	renderPlatformList(container: HTMLElement) {
		container.empty();
		const header = container.createDiv({ cls: "platform-header" });
		if (!this.platformListCollapsed) {
			header.createEl("h3", {
				text: t("FETCH_GENERATOR_VIEW_PLATFORMS_TITLE"),
			});
		}
		const toggle = header.createEl("button", {
			cls: "platform-toggle",
		});
		setIcon(
			toggle,
			this.platformListCollapsed ? "chevrons-right" : "chevrons-left",
		);
		toggle.onclick = () => {
			const grid = container.closest(".sync-generator-grid");
			this.platformListCollapsed = !this.platformListCollapsed;
			if (grid) {
				if (this.platformListCollapsed) {
					grid.addClass("platforms-collapsed");
				} else {
					grid.removeClass("platforms-collapsed");
				}
			}
			this.renderPlatformList(container);
		};
		const list = container.createEl("ul", {
			cls: this.platformListCollapsed
				? "platform-list platform-list-collapsed"
				: "platform-list",
		});
		const platforms: Platform[] = [
			"Airtable",
			"Feishu",
			"Vika",
			"Lark",
			"WPS",
			"Ding",
		];

		platforms.forEach((p) => {
			const label = this.platformListCollapsed ? p.charAt(0) : p;
			const item = list.createEl("li", {
				text: label,
				cls: "platform-item",
			});
			if (p === this.platform) item.addClass("is-active");

			item.onclick = () => {
				this.platform = p;
				// Reset imported file context when switching platforms manually
				this.importedFile = null;
				this.rootSettings = {};
				this.vaultSettings = {};
				this.folderSettings = [];

				container
					.findAll(".platform-item")
					.forEach((el) => el.removeClass("is-active"));
				item.addClass("is-active");
				this.renderMiddleColumn();
				this.activeOption = null;
				this.renderRightColumn();
			};
		});
	}

	renderMiddleColumn() {
		this.middleContainer.empty();
		this.middleContainer.createEl("h2", {
			text: `${this.platform} ${t(
				"FETCH_GENERATOR_VIEW_SETTINGS_TITLE_SUFFIX",
			)}`,
		});

		// Action Bar
		const actionBar = this.middleContainer.createDiv({ cls: "action-bar" });
		new ButtonComponent(actionBar)
			.setButtonText(t("FETCH_GENERATOR_VIEW_BTN_IMPORT_TEMPLATE"))
			.setIcon("import")
			.setTooltip(t("FETCH_GENERATOR_VIEW_BTN_IMPORT_TEMPLATE"))
			.onClick(() => this.openImportModal());

		// Load Default Template button (only show if default template is set)
		const defaultTemplatePath = this.getDefaultTemplatePath();
		if (defaultTemplatePath) {
			new ButtonComponent(actionBar)
				.setButtonText(t("FETCH_GENERATOR_VIEW_BTN_LOAD_DEFAULT"))
				.setIcon("file-down")
				.setTooltip(t("FETCH_GENERATOR_VIEW_BTN_LOAD_DEFAULT"))
				.onClick(() => this.loadDefaultTemplate());
		}

		new ButtonComponent(actionBar)
			.setButtonText(t("FETCH_GENERATOR_VIEW_BTN_PRESETS"))
			.setIcon("bookmark")
			.setTooltip(t("FETCH_GENERATOR_VIEW_BTN_PRESETS"))
			.onClick(() => this.openPresetLoadModal());

		new ButtonComponent(actionBar)
			.setButtonText(t("FETCH_GENERATOR_VIEW_BTN_SAVE_PRESET"))
			.setIcon("save")
			.setTooltip(t("FETCH_GENERATOR_VIEW_BTN_SAVE_PRESET"))
			.onClick(() => this.openPresetSaveModal());

		new ButtonComponent(actionBar)
			.setButtonText(t("FETCH_GENERATOR_VIEW_BTN_GENERATE"))
			.setCta()
			.onClick(() => this.generateScript());

		// Tabs
		const tabsContainer = this.middleContainer.createDiv({
			cls: "settings-tabs",
		});
		const tabs: ("Root" | "Vault" | "Folder")[] = [
			"Root",
			"Vault",
			"Folder",
		];

		const tabNames: Record<string, string> = {
			Root: t("FETCH_GENERATOR_VIEW_TAB_ROOT"),
			Vault: t("FETCH_GENERATOR_VIEW_TAB_VAULT"),
			Folder: t("FETCH_GENERATOR_VIEW_TAB_FOLDER"),
		};

		tabs.forEach((tab) => {
			const tabBtn = tabsContainer.createEl("button", {
				text: `${tabNames[tab]} ${t(
					"FETCH_GENERATOR_VIEW_SETTINGS_SUFFIX",
				)}`,
				cls: "settings-tab-btn",
			});
			if (this.activeTab === tab) tabBtn.addClass("is-active");

			tabBtn.onclick = () => {
				this.activeTab = tab;
				this.renderMiddleColumn();
			};
		});

		const formContainer = this.middleContainer.createDiv({
			cls: "settings-form",
		});

		if (this.activeTab === "Root") {
			const rootOptions = FETCH_OPTIONS.filter(
				(o) =>
					o.level === "Root" &&
					(o.platforms.includes(this.platform) ||
						o.platforms.length === 0),
			);
			rootOptions.forEach((opt) => {
				this.renderOption(
					formContainer,
					opt,
					this.rootSettings,
					"Root",
				);
			});
		}

		if (this.activeTab === "Vault") {
			const vaultOptions = FETCH_OPTIONS.filter(
				(o) =>
					o.level === "Vault" &&
					(o.platforms.includes(this.platform) ||
						o.platforms.length === 0),
			);

			vaultOptions.forEach((opt) => {
				this.renderOption(
					formContainer,
					opt,
					this.vaultSettings,
					"Vault",
				);
			});
		}

		if (this.activeTab === "Folder") {
			const folderActionsContainer = formContainer.createEl("div", {
				cls: "ssg-folder-action-container",
			});
			const addButton = folderActionsContainer.createEl("button", {
				text: t("FETCH_GENERATOR_VIEW_BTN_ADD_FOLDER"),
				cls: "mod-cta",
			});
			addButton.style.marginBottom = "20px";
			addButton.onclick = () => {
				this.folderSettings.push({ targetFolderPath: "" });
				this.renderMiddleColumn();
			};

			if (this.folderSettings.length > 4) {
				const toggleAllButton = folderActionsContainer.createEl(
					"button",
					{
						text: t("FETCH_GENERATOR_VIEW_BTN_TOGGLE_ALL_FOLDERS"),
					},
				);
				toggleAllButton.style.marginLeft = "8px";
				toggleAllButton.onclick = () => {
					const allCollapsed = this.folderSettings.every(
						(folder) => folder.collapsed,
					);
					this.folderSettings.forEach((folder) => {
						folder.collapsed = !allCollapsed;
					});
					this.renderMiddleColumn();
				};
			}

			this.folderSettings.forEach((folder, index) => {
				const folderDiv = formContainer.createDiv({
					cls: "folder-setting-block",
				});
				if (folder.collapsed) folderDiv.addClass("is-collapsed");

				const header = folderDiv.createDiv({ cls: "folder-header" });
				const titleContainer = header.createDiv({
					cls: "folder-title",
				});

				const iconSpan = titleContainer.createSpan({
					cls: "folder-toggle-icon",
				});
				setIcon(iconSpan, "chevron-down");

				titleContainer.createEl("span", {
					text:
						`${t("FETCH_GENERATOR_VIEW_FOLDER_HEADER_PREFIX")} ${
							index + 1
						}` +
						(folder.targetFolderPath
							? `: ${folder.targetFolderPath}`
							: ""),
				});

				header.onclick = (e) => {
					if ((e.target as HTMLElement).tagName === "BUTTON") return;
					folder.collapsed = !folder.collapsed;
					this.renderMiddleColumn();
				};

				const removeBtn = header.createEl("button", {
					text: t("FETCH_GENERATOR_VIEW_BTN_REMOVE"),
				});
				removeBtn.onclick = (e) => {
					e.stopPropagation();
					this.folderSettings.splice(index, 1);
					this.renderMiddleColumn();
				};

				const contentDiv = folderDiv.createDiv({
					cls: "folder-content",
				});

				const folderPathSetting = new Setting(contentDiv)
					.setName(t("FETCH_GENERATOR_VIEW_TARGET_FOLDER_NAME"))
					.addText((text) => {
						text.setPlaceholder(
							t("FETCH_GENERATOR_VIEW_TARGET_FOLDER_PLACEHOLDER"),
						)
							.setValue(folder.targetFolderPath || "")
							.onChange((val) => (folder.targetFolderPath = val));
						this.addFocusListener(text.inputEl, {
							name: "targetFolderPath",
							title: t("FETCH_GENERATOR_VIEW_TARGET_FOLDER_NAME"),
							description: t(
								"FETCH_GENERATOR_VIEW_TARGET_FOLDER_DESC",
							),
							example: t(
								"FETCH_GENERATOR_VIEW_TARGET_FOLDER_EXAMPLE",
							),
							platforms: [this.platform],
							level: "Folder",
							required: true,
							defaultValue: "",
							valueType: "string",
						});
					})
					.addButton((button) => {
						button
							.setButtonText(t("FETCH_GENERATOR_VIEW_BTN_BROWSE"))
							.setIcon("folder")
							.onClick(() => {
								new FolderPickerModal(
									this.app,
									(selectedFolder) => {
										folder.targetFolderPath =
											selectedFolder.path;
										this.renderMiddleColumn();
									},
								).open();
							});
					});

				const folderOptions = FETCH_OPTIONS.filter(
					(o) =>
						o.level === "Folder" &&
						(o.platforms.includes(this.platform) ||
							o.platforms.length === 0),
				);

				folderOptions.forEach((opt) => {
					if (opt.name === "targetFolderPath") return;
					this.renderOption(contentDiv, opt, folder, "Folder");
				});
			});
		}
	}

	renderOption(
		container: HTMLElement,
		opt: FetchOption,
		target: any,
		section: string,
	) {
		const s = new Setting(container).setName(opt.title || opt.name);

		const handleFocus = (el: HTMLElement) => {
			this.addFocusListener(el, opt);
		};

		if (opt.valueType === "object") {
			s.addExtraButton((btn) => {
				btn.setIcon("pencil")
					.setTooltip(t("GENERATOR_VIEW_TOOLTIP_EDIT_OBJECT"))
					.onClick(() => {
						let currentData = target[opt.name];
						if (typeof currentData === "string") {
							try {
								currentData = JSON.parse(currentData);
							} catch {
								currentData = {};
							}
						}
						if (
							!currentData ||
							typeof currentData !== "object" ||
							Array.isArray(currentData)
						) {
							currentData = {};
						}

						new ObjectEditModal(
							this.app,
							opt.title || opt.name,
							currentData,
							(result) => {
								target[opt.name] = result;
								this.renderMiddleColumn();
							},
						).open();
					});
			});

			s.addTextArea((text) => {
				text.setPlaceholder(opt.example || "")
					.setValue(
						target[opt.name]
							? JSON.stringify(target[opt.name], null, 2)
							: "",
					)
					.onChange((val) => {
						try {
							target[opt.name] = JSON.parse(val);
						} catch (e) {
							// Silent failure for partial JSON input
						}
					});
				handleFocus(text.inputEl);
			});
		} else {
			s.addText((text) => {
				text.setValue(
					target[opt.name] ||
						(opt.defaultValue === "无" ? "" : opt.defaultValue) ||
						"",
				).onChange((val) => (target[opt.name] = val));
				handleFocus(text.inputEl);
			});
		}
	}

	addFocusListener(el: HTMLElement, opt: FetchOption) {
		el.addEventListener("focus", () => {
			this.activeOption = opt;
			this.renderRightColumn();
		});
		el.addEventListener("click", () => {
			this.activeOption = opt;
			this.renderRightColumn();
		});
	}

	renderRightColumn() {
		const grid = this.rightContainer.closest(".sync-generator-grid");
		if (grid) {
			if (this.rightPanelCollapsed) {
				grid.addClass("right-collapsed");
			} else {
				grid.removeClass("right-collapsed");
			}
		}

		this.rightContainer.empty();

		if (this.rightPanelCollapsed) {
			this.rightContainer.addClass("is-collapsed");
			const toggleOnly = this.rightContainer.createEl("button", {
				cls: "help-toggle-only",
			});
			setIcon(toggleOnly, "chevrons-left");
			toggleOnly.onclick = () => {
				this.rightPanelCollapsed = false;
				this.renderRightColumn();
			};
			return;
		}

		this.rightContainer.removeClass("is-collapsed");

		const header = this.rightContainer.createDiv({ cls: "help-header" });
		header.createEl("h3", {
			text: t("FETCH_GENERATOR_VIEW_DESC_TITLE"),
		});
		const toggle = header.createEl("button", {
			cls: "help-toggle",
		});
		setIcon(toggle, "chevrons-right");
		toggle.onclick = () => {
			this.rightPanelCollapsed = true;
			this.renderRightColumn();
		};

		if (this.activeOption) {
			const wrapper = this.rightContainer.createDiv({
				cls: "help-content",
			});
			wrapper.createEl("h4", {
				text: this.activeOption.name,
				cls: "help-title",
			});

			const badge = wrapper.createSpan({ cls: "help-badge" });
			const levelKey =
				this.activeOption.level === "Root"
					? "FETCH_GENERATOR_VIEW_TAB_ROOT"
					: "FETCH_GENERATOR_VIEW_TAB_FOLDER";
			badge.setText(t(levelKey));

			wrapper.createEl("div", {
				text: this.activeOption.description,
				cls: "help-desc",
			});

			if (this.activeOption.example) {
				wrapper.createEl("h5", {
					text: t("FETCH_GENERATOR_VIEW_EXAMPLE_USAGE_TITLE"),
				});
				wrapper.createEl("pre", {
					text: this.activeOption.example,
					cls: "help-example",
				});
			}
		} else {
			this.rightContainer.createEl("p", {
				text: t("FETCH_GENERATOR_VIEW_DESC_PLACEHOLDER"),
				cls: "help-placeholder",
			});
		}
	}

	openImportModal() {
		new ImportModal(this.app, (file) => this.importTemplate(file)).open();
	}

	async importTemplate(file: TFile) {
		const content = await this.app.vault.read(file);
		this.importedFile = file;

		const result = FetchScriptEngine.parse(content);

		if (result.platform) {
			this.platform = result.platform;
			this.rootSettings = result.rootSettings;
			this.vaultSettings = result.vaultSettings;
			this.folderSettings = result.folderSettings;

			new Notice(
				t("FETCH_GENERATOR_VIEW_NOTICE_IMPORTED").replace(
					"${file}",
					file.basename,
				),
			);

			// Update UI list active state
			const platformList =
				this.containerEl.querySelector(".platform-list");
			if (platformList) {
				platformList.findAll(".platform-item").forEach((el) => {
					el.removeClass("is-active");
					if (el.textContent === this.platform)
						el.addClass("is-active");
				});
			}

			this.renderMiddleColumn();
		} else {
			new Notice(t("FETCH_GENERATOR_VIEW_NOTICE_NO_PLATFORM"));
		}
	}

	generateScript() {
		const script = FetchScriptEngine.generate(
			this.platform,
			this.rootSettings,
			this.vaultSettings,
			this.folderSettings,
			this.plugin.settings.syncPlatform || "IOTO",
			this.plugin.settings.scriptPrependContent || "",
		);
		new ScriptPreviewModal(
			this.app,
			script,
			this.platform,
			this.importedFile,
		).open();
	}

	openPresetSaveModal() {
		const currentSettings = {
			platform: this.platform,
			rootSettings: this.rootSettings,
			folderSettings: this.folderSettings,
		};

		new FetchPresetSaveModal(
			this.app,
			this.plugin.settings.fetchPresets || [],
			currentSettings,
			(preset) => this.savePreset(preset),
		).open();
	}

	openPresetLoadModal() {
		new FetchPresetLoadModal(
			this.app,
			this.plugin.settings.fetchPresets || [],
			(preset) => this.loadPreset(preset),
			(presetId) => this.deletePreset(presetId),
		).open();
	}

	async savePreset(preset: FetchConfigPreset) {
		if (!this.plugin.settings.fetchPresets) {
			this.plugin.settings.fetchPresets = [];
		}
		this.plugin.settings.fetchPresets.push(preset);
		await this.plugin.saveSettings();
	}

	async loadPreset(preset: FetchConfigPreset) {
		this.platform = preset.platform;
		this.rootSettings = { ...preset.rootSettings };
		this.folderSettings = JSON.parse(JSON.stringify(preset.folderSettings)); // Deep copy
		this.importedFile = null; // Clear imported file context

		// Update UI
		const platformList = this.containerEl.querySelector(".platform-list");
		if (platformList) {
			platformList.findAll(".platform-item").forEach((el) => {
				el.removeClass("is-active");
				if (el.textContent === this.platform) el.addClass("is-active");
			});
		}

		this.renderMiddleColumn();
		this.activeOption = null;
		this.renderRightColumn();
	}

	async deletePreset(presetId: string) {
		if (!this.plugin.settings.fetchPresets) return;
		this.plugin.settings.fetchPresets =
			this.plugin.settings.fetchPresets.filter((p) => p.id !== presetId);
		await this.plugin.saveSettings();
	}

	private getDefaultTemplatePath(): string {
		const platformSettingsMap: Record<
			Platform,
			keyof typeof this.plugin.settings
		> = {
			Airtable: "defaultFetchTemplateAirtable",
			Feishu: "defaultFetchTemplateFeishu",
			Vika: "defaultFetchTemplateVika",
			Lark: "defaultFetchTemplateLark",
			WPS: "defaultFetchTemplateWPS",
			Ding: "defaultFetchTemplateDing",
		};

		const key = platformSettingsMap[this.platform];
		const path = (this.plugin.settings[key] as string) || "";
		return path.trim();
	}

	async loadDefaultTemplate() {
		const templatePath = this.getDefaultTemplatePath();
		if (!templatePath) {
			new Notice(t("FETCH_GENERATOR_VIEW_NOTICE_NO_DEFAULT"));
			return;
		}

		try {
			const file = this.app.vault.getAbstractFileByPath(templatePath);
			if (!file || !(file instanceof TFile)) {
				new Notice(
					t("FETCH_GENERATOR_VIEW_NOTICE_TEMPLATE_NOT_FOUND").replace(
						"${path}",
						templatePath,
					),
				);
				return;
			}

			await this.importTemplate(file);
		} catch (error) {
			new Notice(
				t("FETCH_GENERATOR_VIEW_NOTICE_LOAD_FAILED").replace(
					"${error}",
					String(error),
				),
			);
		}
	}
}
