import { App, PluginSettingTab, Setting } from "obsidian";
import MyPlugin from "./main";
import { ConfigPreset } from "./types";

export interface SyncScriptGeneratorSettings {
	mySetting: string;
	presets: ConfigPreset[];
}

export const DEFAULT_SETTINGS: SyncScriptGeneratorSettings = {
	mySetting: "default",
	presets: [],
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
