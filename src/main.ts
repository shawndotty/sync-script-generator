import { App, Editor, MarkdownView, Modal, Notice, Plugin } from "obsidian";
import {
	DEFAULT_SETTINGS,
	SyncScriptGeneratorSettings,
	SyncScriptGeneratorSettingTab,
} from "./settings";
import { GeneratorModal } from "./GeneratorModal";

export default class SyncScriptGeneratorPlugin extends Plugin {
	settings: SyncScriptGeneratorSettings;

	async onload() {
		await this.loadSettings();

		// This creates an icon in the left ribbon.
		this.addRibbonIcon("dice", "Sync Script Generator", (evt: MouseEvent) => {
			new GeneratorModal(this.app).open();
		});

		// This adds a simple command that can be triggered anywhere
		this.addCommand({
			id: "open-sync-script-generator",
			name: "Open Sync Script Generator",
			callback: () => {
				new GeneratorModal(this.app).open();
			},
		});

		// This adds a settings tab so the user can configure various aspects of the plugin
		this.addSettingTab(new SyncScriptGeneratorSettingTab(this.app, this));
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
