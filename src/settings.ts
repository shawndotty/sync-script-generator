import { App, PluginSettingTab, Setting, TFile } from "obsidian";
import MyPlugin from "./main";
import { ConfigPreset, FetchConfigPreset, Platform } from "./types";
import { ImportModal } from "./ImportModal";
import { t } from "./lang/helpers";

export interface SyncScriptGeneratorSettings {
	mySetting: string;
	presets: ConfigPreset[];
	fetchPresets: FetchConfigPreset[];
	syncPlatform: "IOTO" | "obSyncWithMDB";
	scriptPrependContent: string;
	defaultSyncTemplateAirtable: string;
	defaultSyncTemplateFeishu: string;
	defaultSyncTemplateVika: string;
	defaultSyncTemplateLark: string;
	defaultSyncTemplateWPS: string;
	defaultSyncTemplateDing: string;
	defaultFetchTemplateAirtable: string;
	defaultFetchTemplateFeishu: string;
	defaultFetchTemplateVika: string;
	defaultFetchTemplateLark: string;
	defaultFetchTemplateWPS: string;
	defaultFetchTemplateDing: string;
}

export const DEFAULT_SETTINGS: SyncScriptGeneratorSettings = {
	mySetting: "default",
	presets: [],
	fetchPresets: [],
	syncPlatform: "IOTO",
	scriptPrependContent: "",
	defaultSyncTemplateAirtable: "",
	defaultSyncTemplateFeishu: "",
	defaultSyncTemplateVika: "",
	defaultSyncTemplateLark: "",
	defaultSyncTemplateWPS: "",
	defaultSyncTemplateDing: "",
	defaultFetchTemplateAirtable: "",
	defaultFetchTemplateFeishu: "",
	defaultFetchTemplateVika: "",
	defaultFetchTemplateLark: "",
	defaultFetchTemplateWPS: "",
	defaultFetchTemplateDing: "",
};

export class SyncScriptGeneratorSettingTab extends PluginSettingTab {
	plugin: MyPlugin;

	private readonly platformSettingsMap: Record<
		Platform,
		keyof Pick<
			SyncScriptGeneratorSettings,
			| "defaultSyncTemplateAirtable"
			| "defaultSyncTemplateFeishu"
			| "defaultSyncTemplateVika"
			| "defaultSyncTemplateLark"
			| "defaultSyncTemplateWPS"
			| "defaultSyncTemplateDing"
		>
	> = {
		Airtable: "defaultSyncTemplateAirtable",
		Feishu: "defaultSyncTemplateFeishu",
		Vika: "defaultSyncTemplateVika",
		Lark: "defaultSyncTemplateLark",
		WPS: "defaultSyncTemplateWPS",
		Ding: "defaultSyncTemplateDing",
	};

	private readonly fetchPlatformSettingsMap: Record<
		Platform,
		keyof Pick<
			SyncScriptGeneratorSettings,
			| "defaultFetchTemplateAirtable"
			| "defaultFetchTemplateFeishu"
			| "defaultFetchTemplateVika"
			| "defaultFetchTemplateLark"
			| "defaultFetchTemplateWPS"
			| "defaultFetchTemplateDing"
		>
	> = {
		Airtable: "defaultFetchTemplateAirtable",
		Feishu: "defaultFetchTemplateFeishu",
		Vika: "defaultFetchTemplateVika",
		Lark: "defaultFetchTemplateLark",
		WPS: "defaultFetchTemplateWPS",
		Ding: "defaultFetchTemplateDing",
	};

	constructor(app: App, plugin: MyPlugin) {
		super(app, plugin);
		this.plugin = plugin;
	}

	private setTemplatePath(platform: Platform, path: string): void {
		const key = this.platformSettingsMap[platform];
		(this.plugin.settings[key] as string) = path;
	}

	private getTemplatePath(platform: Platform): string {
		const key = this.platformSettingsMap[platform];
		return (this.plugin.settings[key] as string) || "";
	}

	private setFetchTemplatePath(platform: Platform, path: string): void {
		const key = this.fetchPlatformSettingsMap[platform];
		(this.plugin.settings[key] as string) = path;
	}

	private getFetchTemplatePath(platform: Platform): string {
		const key = this.fetchPlatformSettingsMap[platform];
		return (this.plugin.settings[key] as string) || "";
	}

	display(): void {
		const { containerEl } = this;

		containerEl.empty();

		// Sync Platform Setting
		new Setting(containerEl)
			.setName(t("SETTINGS_SYNC_PLATFORM_NAME"))
			.setDesc(t("SETTINGS_SYNC_PLATFORM_DESC"))
			.addDropdown((dropdown) => {
				dropdown
					.addOption("IOTO", "IOTO")
					.addOption("obSyncWithMDB", "obSyncWithMDB")
					.setValue(this.plugin.settings.syncPlatform || "IOTO")
					.onChange(async (value: "IOTO" | "obSyncWithMDB") => {
						this.plugin.settings.syncPlatform = value;
						await this.plugin.saveSettings();
					});
			});

		new Setting(containerEl)
			.setName(t("SETTINGS_SCRIPT_PREPEND_CONTENT_NAME"))
			.setDesc(t("SETTINGS_SCRIPT_PREPEND_CONTENT_DESC"))
			.addTextArea((text) => {
				text.setPlaceholder(
					t("SETTINGS_SCRIPT_PREPEND_CONTENT_PLACEHOLDER")
				)
					.setValue(this.plugin.settings.scriptPrependContent || "")
					.onChange(async (value) => {
						this.plugin.settings.scriptPrependContent = value;
						await this.plugin.saveSettings();
					});
				text.inputEl.style.width = "100%";
				text.inputEl.rows = 4;
			});

		containerEl.createEl("h2", {
			text: t("SETTINGS_DEFAULT_SYNC_TEMPLATES_TITLE"),
		});

		containerEl.createEl("p", {
			text: t("SETTINGS_DEFAULT_SYNC_TEMPLATES_DESC"),
			cls: "setting-item-description ssg-setting-description",
		});

		const platforms: Platform[] = [
			"Airtable",
			"Feishu",
			"Vika",
			"Lark",
			"WPS",
			"Ding",
		];

		platforms.forEach((platform) => {
			const currentValue = this.getTemplatePath(platform);

			new Setting(containerEl)
				.setName(
					t("SETTINGS_DEFAULT_TEMPLATE_NAME").replace(
						"${platform}",
						platform
					)
				)
				.setDesc(
					t("SETTINGS_DEFAULT_TEMPLATE_DESC").replace(
						"${platform}",
						platform
					)
				)
				.addText((text) => {
					text.setPlaceholder(
						t("SETTINGS_DEFAULT_TEMPLATE_PLACEHOLDER")
					)
						.setValue(currentValue)
						.onChange(async (value) => {
							this.setTemplatePath(platform, value);
							await this.plugin.saveSettings();
						});
					text.inputEl.style.width = "100%";
				})
				.addButton((button) => {
					button
						.setButtonText(t("SETTINGS_BTN_BROWSE"))
						.setIcon("folder")
						.onClick(() => {
							new ImportModal(this.app, async (file: TFile) => {
								this.setTemplatePath(platform, file.path);
								await this.plugin.saveSettings();
								this.display(); // Refresh to show updated value
							}).open();
						});
				})
				.addExtraButton((button) => {
					button
						.setIcon("cross")
						.setTooltip(t("SETTINGS_TOOLTIP_CLEAR"))
						.onClick(async () => {
							this.setTemplatePath(platform, "");
							await this.plugin.saveSettings();
							this.display(); // Refresh to show updated value
						});
				});
		});

		containerEl.createEl("h2", {
			text: t("SETTINGS_DEFAULT_FETCH_TEMPLATES_TITLE"),
		});

		containerEl.createEl("p", {
			text: t("SETTINGS_DEFAULT_FETCH_TEMPLATES_DESC"),
			cls: "setting-item-description ssg-setting-description",
		});

		platforms.forEach((platform) => {
			const currentValue = this.getFetchTemplatePath(platform);

			new Setting(containerEl)
				.setName(
					t("SETTINGS_DEFAULT_FETCH_TEMPLATE_NAME").replace(
						"${platform}",
						platform
					)
				)
				.setDesc(
					t("SETTINGS_DEFAULT_FETCH_TEMPLATE_DESC").replace(
						"${platform}",
						platform
					)
				)
				.addText((text) => {
					text.setPlaceholder(
						t("SETTINGS_DEFAULT_TEMPLATE_PLACEHOLDER")
					)
						.setValue(currentValue)
						.onChange(async (value) => {
							this.setFetchTemplatePath(platform, value);
							await this.plugin.saveSettings();
						});
					text.inputEl.style.width = "100%";
				})
				.addButton((button) => {
					button
						.setButtonText(t("SETTINGS_BTN_BROWSE"))
						.setIcon("folder")
						.onClick(() => {
							new ImportModal(this.app, async (file: TFile) => {
								this.setFetchTemplatePath(platform, file.path);
								await this.plugin.saveSettings();
								this.display(); // Refresh to show updated value
							}).open();
						});
				})
				.addExtraButton((button) => {
					button
						.setIcon("cross")
						.setTooltip(t("SETTINGS_TOOLTIP_CLEAR"))
						.onClick(async () => {
							this.setFetchTemplatePath(platform, "");
							await this.plugin.saveSettings();
							this.display(); // Refresh to show updated value
						});
				});
		});
	}
}
