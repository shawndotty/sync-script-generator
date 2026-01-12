import { App, Editor, MarkdownView, Modal, Notice, Plugin } from "obsidian";
import {
	DEFAULT_SETTINGS,
	SyncScriptGeneratorSettings,
	SyncScriptGeneratorSettingTab,
} from "./settings";

// Remember to rename these classes and interfaces!

export default class SyncScriptGeneratorPlugin extends Plugin {
	settings: SyncScriptGeneratorSettings;

	async onload() {
		await this.loadSettings();
	}

	onunload() {}

	async loadSettings() {
		this.settings = Object.assign(
			{},
			DEFAULT_SETTINGS,
			(await this.loadData()) as Partial<SyncScriptGeneratorSettings>
		);
	}

	async saveSettings() {
		await this.saveData(this.settings);
	}
}
