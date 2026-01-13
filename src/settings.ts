import { App, PluginSettingTab, Setting, TFile } from "obsidian";
import MyPlugin from "./main";
import { ConfigPreset, Platform } from "./types";
import { ImportModal } from "./ImportModal";

export interface SyncScriptGeneratorSettings {
	mySetting: string;
	presets: ConfigPreset[];
	defaultSyncTemplateAirtable: string;
	defaultSyncTemplateFeishu: string;
	defaultSyncTemplateVika: string;
	defaultSyncTemplateLark: string;
	defaultSyncTemplateWPS: string;
	defaultSyncTemplateDing: string;
}

export const DEFAULT_SETTINGS: SyncScriptGeneratorSettings = {
	mySetting: "default",
	presets: [],
	defaultSyncTemplateAirtable: "",
	defaultSyncTemplateFeishu: "",
	defaultSyncTemplateVika: "",
	defaultSyncTemplateLark: "",
	defaultSyncTemplateWPS: "",
	defaultSyncTemplateDing: "",
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

	display(): void {
		const { containerEl } = this;

		containerEl.empty();

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
	}
}
