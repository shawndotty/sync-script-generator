import { App, PluginSettingTab, Setting } from "obsidian";
import MyPlugin from "./main";

export interface SyncScriptGeneratorSettings {
	mySetting: string;
}

export const DEFAULT_SETTINGS: SyncScriptGeneratorSettings = {
	mySetting: "default",
};

export class SyncScriptGeneratorSettingTab extends PluginSettingTab {
	plugin: MyPlugin;

	constructor(app: App, plugin: MyPlugin) {
		super(app, plugin);
		this.plugin = plugin;
	}

	display(): void {
		const { containerEl } = this;

		containerEl.empty();
	}
}
