import { App, PluginSettingTab, Setting, TFile } from "obsidian";
import MyPlugin from "./main";
import { ConfigPreset, FetchConfigPreset, Platform } from "./types";
import { ImportModal } from "./ImportModal";

export interface SyncScriptGeneratorSettings {
	mySetting: string;
	presets: ConfigPreset[];
	fetchPresets: FetchConfigPreset[];
	syncPlatform: "IOTO" | "obSyncWithMDB";
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
			.setName("同步平台")
			.setDesc("选择同步平台")
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

		containerEl.createEl("h2", { text: "Default Sync Templates" });

		containerEl.createEl("p", {
			text: "Set default template files for each platform. These templates will be used when importing configurations.",
			cls: "setting-item-description",
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
				.setName(`${platform} Default Template`)
				.setDesc(`Default template file path for ${platform} platform`)
				.addText((text) => {
					text.setPlaceholder("No template selected")
						.setValue(currentValue)
						.onChange(async (value) => {
							this.setTemplatePath(platform, value);
							await this.plugin.saveSettings();
						});
					text.inputEl.style.width = "100%";
				})
				.addButton((button) => {
					button
						.setButtonText("Browse")
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
						.setTooltip("Clear")
						.onClick(async () => {
							this.setTemplatePath(platform, "");
							await this.plugin.saveSettings();
							this.display(); // Refresh to show updated value
						});
				});
		});

		containerEl.createEl("h2", { text: "Default Fetch Templates" });

		containerEl.createEl("p", {
			text: "Set default fetch template files for each platform. These templates will be used when importing fetch configurations.",
			cls: "setting-item-description",
		});

		platforms.forEach((platform) => {
			const currentValue = this.getFetchTemplatePath(platform);

			new Setting(containerEl)
				.setName(`${platform} Default Fetch Template`)
				.setDesc(
					`Default fetch template file path for ${platform} platform`
				)
				.addText((text) => {
					text.setPlaceholder("No template selected")
						.setValue(currentValue)
						.onChange(async (value) => {
							this.setFetchTemplatePath(platform, value);
							await this.plugin.saveSettings();
						});
					text.inputEl.style.width = "100%";
				})
				.addButton((button) => {
					button
						.setButtonText("Browse")
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
						.setTooltip("Clear")
						.onClick(async () => {
							this.setFetchTemplatePath(platform, "");
							await this.plugin.saveSettings();
							this.display(); // Refresh to show updated value
						});
				});
		});
	}
}
