import {
	ItemView,
	WorkspaceLeaf,
	Setting,
	Notice,
	ButtonComponent,
	setIcon,
	TFile,
} from "obsidian";
import { Platform, SyncOption, FolderSetting, ConfigPreset } from "./types";
import { SYNC_OPTIONS, GENERATOR_VIEW_TYPE } from "./constants";
import { ImportModal } from "./ImportModal";
import { ScriptPreviewModal } from "./ScriptPreviewModal";
import { ObjectEditModal } from "./ObjectEditModal";
import { ArrayEditModal } from "./ArrayEditModal";
import { ScriptEngine } from "./ScriptEngine";
import { FolderPickerModal } from "./ui/pickers/folder-picker";
import { PresetManagerModal } from "./PresetManagerModal";
import MyPlugin from "./main";
import { t } from "./lang/helpers";

export class GeneratorView extends ItemView {
	platform: Platform = "Airtable";
	rootSettings: Record<string, string> = {};
	vaultSettings: Record<string, any> = {};
	folderSettings: FolderSetting[] = [];
	activeOption: SyncOption | null = null;
	importedFile: TFile | null = null;
	activeTab: "Root" | "Vault" | "Folder" = "Root";
	plugin: MyPlugin;

	// UI Elements
	middleContainer: HTMLElement;
	rightContainer: HTMLElement;

	constructor(leaf: WorkspaceLeaf, plugin: MyPlugin) {
		super(leaf);
		this.plugin = plugin;
	}

	getViewType() {
		return GENERATOR_VIEW_TYPE;
	}

	getDisplayText() {
		return t("GENERATOR_VIEW_TITLE");
	}

	getIcon() {
		return "arrow-down-up";
	}

	async onOpen() {
		const container = this.contentEl;
		container.empty();
		container.addClass("sync-generator-container");

		const grid = container.createDiv({ cls: "sync-generator-grid" });

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
		container.createEl("h3", { text: t("GENERATOR_VIEW_PLATFORMS_TITLE") });
		const list = container.createEl("ul", { cls: "platform-list" });
		const platforms: Platform[] = [
			"Airtable",
			"Feishu",
			"Vika",
			"Lark",
			"WPS",
			"Ding",
		];

		platforms.forEach((p) => {
			const item = list.createEl("li", { text: p, cls: "platform-item" });
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
			text: `${this.platform} ${t("GENERATOR_VIEW_SETTINGS_SUFFIX")}`,
		});

		// Action Bar
		const actionBar = this.middleContainer.createDiv({ cls: "action-bar" });
		new ButtonComponent(actionBar)
			.setButtonText(t("GENERATOR_VIEW_BTN_IMPORT_TEMPLATE"))
			.onClick(() => this.openImportModal());

		// Load Default Template button (only show if default template is set)
		const defaultTemplatePath = this.getDefaultTemplatePath();
		if (defaultTemplatePath) {
			new ButtonComponent(actionBar)
				.setButtonText(t("GENERATOR_VIEW_BTN_LOAD_DEFAULT"))
				.setIcon("file-down")
				.onClick(() => this.loadDefaultTemplate());
		}

		new ButtonComponent(actionBar)
			.setButtonText(t("GENERATOR_VIEW_BTN_PRESETS"))
			.setIcon("bookmark")
			.onClick(() => this.openPresetManager());

		new ButtonComponent(actionBar)
			.setButtonText(t("GENERATOR_VIEW_BTN_GENERATE"))
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
			Root: t("GENERATOR_VIEW_TAB_ROOT"),
			Vault: t("GENERATOR_VIEW_TAB_VAULT"),
			Folder: t("GENERATOR_VIEW_TAB_FOLDER"),
		};

		tabs.forEach((tab) => {
			const tabBtn = tabsContainer.createEl("button", {
				text: `${tabNames[tab]} ${t("GENERATOR_VIEW_SETTINGS_SUFFIX")}`,
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
			const rootOptions = SYNC_OPTIONS.filter(
				(o) =>
					o.level === "Root" &&
					(o.platforms.includes(this.platform) ||
						o.platforms.length === 0)
			);
			rootOptions.forEach((opt) => {
				this.renderOption(
					formContainer,
					opt,
					this.rootSettings,
					"Root"
				);
			});
		}

		if (this.activeTab === "Vault") {
			const vaultOptions = SYNC_OPTIONS.filter(
				(o) =>
					o.level === "Vault" &&
					(o.platforms.includes(this.platform) ||
						o.platforms.length === 0)
			).sort((a, b) => (a.groupOrder || 0) - (b.groupOrder || 0));

			// Group options by group
			const groupedOptions: Record<string, SyncOption[]> = {};
			vaultOptions.forEach((opt) => {
				let groupName = opt.group || "Other";
				if (groupName === "Basic")
					groupName = t("GENERATOR_VIEW_GROUP_BASIC");
				else if (groupName === "Advanced")
					groupName = t("GENERATOR_VIEW_GROUP_ADVANCED");
				else if (groupName === "Extract")
					groupName = t("GENERATOR_VIEW_GROUP_EXTRACT");
				else if (groupName === "Other")
					groupName = t("GENERATOR_VIEW_GROUP_OTHER");

				if (!groupedOptions[groupName]) {
					groupedOptions[groupName] = [];
				}
				groupedOptions[groupName]?.push(opt);
			});

			// Render groups
			Object.entries(groupedOptions).forEach(([groupName, options]) => {
				const groupDiv = formContainer.createDiv({
					cls: "folder-group-block",
				});
				const collapsedKey = `_group_collapsed_${groupName}`;
				if (this.vaultSettings[collapsedKey]) {
					groupDiv.addClass("is-collapsed");
				}

				const groupHeader = groupDiv.createDiv({
					cls: "folder-group-header",
				});

				const titleContainer = groupHeader.createDiv({
					cls: "folder-group-title",
				});

				const iconSpan = titleContainer.createSpan({
					cls: "folder-group-toggle-icon",
				});
				setIcon(iconSpan, "chevron-down");

				titleContainer.createEl("span", { text: groupName });

				groupHeader.onclick = () => {
					this.vaultSettings[collapsedKey] =
						!this.vaultSettings[collapsedKey];
					this.renderMiddleColumn();
				};

				const groupContent = groupDiv.createDiv({
					cls: "folder-group-content",
				});

				options.forEach((opt) => {
					this.renderOption(
						groupContent,
						opt,
						this.vaultSettings,
						"Vault"
					);
				});
			});
		}

		if (this.activeTab === "Folder") {
			const addButton = formContainer.createEl("button", {
				text: t("GENERATOR_VIEW_BTN_ADD_FOLDER"),
				cls: "mod-cta",
			});
			addButton.style.marginBottom = "20px";
			addButton.onclick = () => {
				this.folderSettings.push({ folderName: "" });
				this.renderMiddleColumn();
			};

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
						`${t("GENERATOR_VIEW_FOLDER_LABEL")} ${index + 1}` +
						(folder.folderName ? `: ${folder.folderName}` : ""),
				});

				header.onclick = (e) => {
					if ((e.target as HTMLElement).tagName === "BUTTON") return;
					folder.collapsed = !folder.collapsed;
					this.renderMiddleColumn();
				};

				const removeBtn = header.createEl("button", {
					text: t("GENERATOR_VIEW_BTN_REMOVE"),
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
					.setName(t("GENERATOR_VIEW_FOLDER_PATH_NAME"))
					.addText((text) => {
						text.setPlaceholder(
							t("GENERATOR_VIEW_FOLDER_PATH_NAME")
						)
							.setValue(folder.folderName)
							.onChange((val) => (folder.folderName = val));
						this.addFocusListener(text.inputEl, {
							name: "folderName",
							title: t("GENERATOR_VIEW_FOLDER_PATH_NAME"),
							description: t("GENERATOR_VIEW_FOLDER_PATH_DESC"),
							example: t("GENERATOR_VIEW_FOLDER_PATH_EXAMPLE"),
							platforms: [],
							level: "Folder",
							required: true,
							defaultValue: "",
							valueType: "string",
						});
					})
					.addButton((button) => {
						button
							.setButtonText(t("GENERATOR_VIEW_BTN_BROWSE"))
							.setIcon("folder")
							.onClick(() => {
								new FolderPickerModal(
									this.app,
									(selectedFolder) => {
										folder.folderName = selectedFolder.path;
										this.renderMiddleColumn();
									}
								).open();
							});
					});

				const folderOptions = SYNC_OPTIONS.filter(
					(o) =>
						o.level === "Folder" &&
						(o.platforms.includes(this.platform) ||
							o.platforms.length === 0)
				).sort((a, b) => (a.groupOrder || 0) - (b.groupOrder || 0));

				// Group options by group
				const groupedOptions: Record<string, SyncOption[]> = {};
				folderOptions.forEach((opt) => {
					if (opt.name === "folderName") return;
					let groupName = opt.group || "Other";
					if (groupName === "Basic")
						groupName = t("GENERATOR_VIEW_GROUP_BASIC");
					else if (groupName === "Advanced")
						groupName = t("GENERATOR_VIEW_GROUP_ADVANCED");
					else if (groupName === "Extract")
						groupName = t("GENERATOR_VIEW_GROUP_EXTRACT");
					else if (groupName === "Other")
						groupName = t("GENERATOR_VIEW_GROUP_OTHER");

					if (!groupedOptions[groupName]) {
						groupedOptions[groupName] = [];
					}
					groupedOptions[groupName]?.push(opt);
				});

				// Render groups
				Object.entries(groupedOptions).forEach(
					([groupName, options]) => {
						const groupDiv = contentDiv.createDiv({
							cls: "folder-group-block",
						});
						const collapsedKey = `_group_collapsed_${groupName}`;
						if (folder[collapsedKey]) {
							groupDiv.addClass("is-collapsed");
						}

						const groupHeader = groupDiv.createDiv({
							cls: "folder-group-header",
						});

						const titleContainer = groupHeader.createDiv({
							cls: "folder-group-title",
						});

						const iconSpan = titleContainer.createSpan({
							cls: "folder-group-toggle-icon",
						});
						setIcon(iconSpan, "chevron-down");

						titleContainer.createEl("span", { text: groupName });

						groupHeader.onclick = () => {
							folder[collapsedKey] = !folder[collapsedKey];
							this.renderMiddleColumn();
						};

						const groupContent = groupDiv.createDiv({
							cls: "folder-group-content",
						});

						options.forEach((opt) => {
							this.renderOption(
								groupContent,
								opt,
								folder,
								"Folder"
							);
						});
					}
				);
			});
		}
	}

	renderOption(
		container: HTMLElement,
		opt: SyncOption,
		target: any,
		section: string
	) {
		const s = new Setting(container).setName(opt.title || opt.name);

		const handleFocus = (el: HTMLElement) => {
			this.addFocusListener(el, opt);
		};

		if (opt.valueType === "boolean") {
			s.addToggle((toggle) => {
				toggle
					.setValue(target[opt.name] ?? opt.defaultValue === "true")
					.onChange((val) => (target[opt.name] = val));
				handleFocus(toggle.toggleEl);
			});
		} else if (opt.valueType === "object") {
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
							}
						).open();
					});
			});

			s.addTextArea((text) => {
				text.setPlaceholder(opt.example || "")
					.setValue(
						target[opt.name]
							? JSON.stringify(target[opt.name], null, 2)
							: ""
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
		} else if (opt.valueType === "array") {
			s.addExtraButton((btn) => {
				btn.setIcon("pencil")
					.setTooltip(t("GENERATOR_VIEW_TOOLTIP_EDIT_ARRAY"))
					.onClick(() => {
						let currentData = target[opt.name];
						if (typeof currentData === "string") {
							try {
								currentData = JSON.parse(currentData);
							} catch {
								currentData = [];
							}
						}
						if (!Array.isArray(currentData)) {
							currentData = [];
						}

						new ArrayEditModal(
							this.app,
							opt.title || opt.name,
							currentData,
							(result) => {
								target[opt.name] = result;
								this.renderMiddleColumn();
							}
						).open();
					});
			});

			s.addTextArea((text) => {
				text.setPlaceholder(opt.example || "")
					.setValue(
						target[opt.name]
							? JSON.stringify(target[opt.name], null, 2)
							: ""
					)
					.onChange((val) => {
						try {
							target[opt.name] = JSON.parse(val);
						} catch (e) {
							// Silent failure
						}
					});
				handleFocus(text.inputEl);
			});
		} else {
			s.addText((text) => {
				text.setValue(
					target[opt.name] ||
						(opt.defaultValue === "无" ? "" : opt.defaultValue) ||
						""
				).onChange((val) => (target[opt.name] = val));
				handleFocus(text.inputEl);
			});
		}
	}

	addFocusListener(el: HTMLElement, opt: SyncOption) {
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
		this.rightContainer.empty();
		this.rightContainer.createEl("h3", {
			text: t("GENERATOR_VIEW_DESC_TITLE"),
		});

		if (this.activeOption) {
			const wrapper = this.rightContainer.createDiv({
				cls: "help-content",
			});
			wrapper.createEl("h4", {
				text: this.activeOption.name,
				cls: "help-title",
			});

			const badge = wrapper.createSpan({ cls: "help-badge" });
			const levelMap: Record<string, string> = {
				Root: t("GENERATOR_VIEW_TAB_ROOT"),
				Vault: t("GENERATOR_VIEW_TAB_VAULT"),
				Folder: t("GENERATOR_VIEW_TAB_FOLDER"),
			};
			badge.setText(
				levelMap[this.activeOption.level] || this.activeOption.level
			);

			wrapper.createEl("div", {
				text: this.activeOption.description,
				cls: "help-desc",
			});

			if (this.activeOption.example) {
				wrapper.createEl("h5", {
					text: t("GENERATOR_VIEW_EXAMPLE_USAGE_TITLE"),
				});
				wrapper.createEl("pre", {
					text: this.activeOption.example,
					cls: "help-example",
				});
			}
		} else {
			this.rightContainer.createEl("p", {
				text: t("GENERATOR_VIEW_DESC_PLACEHOLDER"),
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

		const result = ScriptEngine.parse(content);

		if (result.platform) {
			this.platform = result.platform;
			this.rootSettings = result.rootSettings;
			this.vaultSettings = result.vaultSettings;
			this.folderSettings = result.folderSettings;

			new Notice(
				t("GENERATOR_VIEW_NOTICE_IMPORTED").replace(
					"${file}",
					file.basename
				)
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
			new Notice(t("GENERATOR_VIEW_NOTICE_NO_PLATFORM"));
		}
	}

	generateScript() {
		const script = ScriptEngine.generate(
			this.platform,
			this.rootSettings,
			this.vaultSettings,
			this.folderSettings,
			this.plugin.settings.syncPlatform || "IOTO"
		);
		new ScriptPreviewModal(
			this.app,
			script,
			this.platform,
			this.importedFile
		).open();
	}

	openPresetManager() {
		const currentSettings = {
			platform: this.platform,
			rootSettings: this.rootSettings,
			vaultSettings: this.vaultSettings,
			folderSettings: this.folderSettings,
		};

		new PresetManagerModal(
			this.app,
			this.plugin.settings.presets || [],
			currentSettings,
			(preset) => this.savePreset(preset),
			(preset) => this.loadPreset(preset),
			(presetId) => this.deletePreset(presetId)
		).open();
	}

	async savePreset(preset: ConfigPreset) {
		if (!this.plugin.settings.presets) {
			this.plugin.settings.presets = [];
		}
		this.plugin.settings.presets.push(preset);
		await this.plugin.saveSettings();
	}

	async loadPreset(preset: ConfigPreset) {
		this.platform = preset.platform;
		this.rootSettings = { ...preset.rootSettings };
		this.vaultSettings = { ...preset.vaultSettings };
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
		if (!this.plugin.settings.presets) return;
		this.plugin.settings.presets = this.plugin.settings.presets.filter(
			(p) => p.id !== presetId
		);
		await this.plugin.saveSettings();
	}

	private getDefaultTemplatePath(): string {
		const platformSettingsMap: Record<
			Platform,
			keyof typeof this.plugin.settings
		> = {
			Airtable: "defaultSyncTemplateAirtable",
			Feishu: "defaultSyncTemplateFeishu",
			Vika: "defaultSyncTemplateVika",
			Lark: "defaultSyncTemplateLark",
			WPS: "defaultSyncTemplateWPS",
			Ding: "defaultSyncTemplateDing",
		};

		const key = platformSettingsMap[this.platform];
		const path = (this.plugin.settings[key] as string) || "";
		return path.trim();
	}

	async loadDefaultTemplate() {
		const templatePath = this.getDefaultTemplatePath();
		if (!templatePath) {
			new Notice(t("GENERATOR_VIEW_NOTICE_NO_DEFAULT"));
			return;
		}

		try {
			const file = this.app.vault.getAbstractFileByPath(templatePath);
			if (!file || !(file instanceof TFile)) {
				new Notice(
					t("GENERATOR_VIEW_NOTICE_TEMPLATE_NOT_FOUND").replace(
						"${path}",
						templatePath
					)
				);
				return;
			}

			await this.importTemplate(file);
		} catch (error) {
			new Notice(
				t("GENERATOR_VIEW_NOTICE_LOAD_FAILED").replace(
					"${error}",
					String(error)
				)
			);
		}
	}
}
