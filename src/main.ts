import {
	App,
	Editor,
	MarkdownView,
	Modal,
	Notice,
	Plugin,
	WorkspaceLeaf,
} from "obsidian";
import {
	DEFAULT_SETTINGS,
	SyncScriptGeneratorSettings,
	SyncScriptGeneratorSettingTab,
} from "./settings";
import { GeneratorView } from "./views/GeneratorView";
import { GENERATOR_VIEW_TYPE } from "./models/constants";
import { FetchGeneratorView } from "./views/FetchGeneratorView";
import { FETCH_SCRIPT_GENERATOR_VIEW_TYPE } from "./models/constantsFetch";
import { t } from "./lang/helpers";
import { IotoSettingsService } from "services/ioto-settings-services";
import { ObSyncMDBService } from "services/ob-sync-mdb-services";

export default class SyncScriptGeneratorPlugin extends Plugin {
	settings: SyncScriptGeneratorSettings;

	async onload() {
		await this.loadSettings();

		this.registerView(
			GENERATOR_VIEW_TYPE,
			(leaf) => new GeneratorView(leaf, this),
		);

		this.registerView(
			FETCH_SCRIPT_GENERATOR_VIEW_TYPE,
			(leaf) => new FetchGeneratorView(leaf, this),
		);

		// This creates an icon in the left ribbon.
		this.addRibbonIcon(
			"arrow-down-up",
			t("MAIN_RIBBON_SYNC"),
			(evt: MouseEvent) => {
				if (evt.shiftKey) {
					this.activateView(true);
				} else {
					this.activateView();
				}
			},
		);

		// This creates an icon in the left ribbon for Fetch Generator.
		this.addRibbonIcon(
			"arrow-down-to-line",
			t("MAIN_RIBBON_FETCH"),
			(evt: MouseEvent) => {
				if (evt.shiftKey) {
					this.activateFetchView(true);
				} else {
					this.activateFetchView();
				}
			},
		);

		// This adds a simple command that can be triggered anywhere
		this.addCommand({
			id: "open-sync-script-generator",
			name: t("MAIN_CMD_OPEN_SYNC"),
			callback: () => {
				this.activateView();
			},
		});

		// This adds a command for Fetch Script Generator
		this.addCommand({
			id: "open-fetch-script-generator",
			name: t("MAIN_CMD_OPEN_FETCH"),
			callback: () => {
				this.activateFetchView();
			},
		});

		// This adds a settings tab so the user can configure various aspects of the plugin
		this.addSettingTab(new SyncScriptGeneratorSettingTab(this.app, this));
	}

	async activateView(openInNewWindow = false) {
		const { workspace } = this.app;

		if (openInNewWindow) {
			const leaf = workspace.getLeaf("window");
			await leaf.setViewState({
				type: GENERATOR_VIEW_TYPE,
				active: true,
			});
			workspace.revealLeaf(leaf);
			return;
		}

		let leaf: WorkspaceLeaf | null = null;
		const leaves = workspace.getLeavesOfType(GENERATOR_VIEW_TYPE);

		if (leaves.length > 0) {
			// A leaf with our view already exists, use that
			leaf = leaves[0] as WorkspaceLeaf;
		} else {
			// Our view could not be found in the workspace, create a new leaf
			// in the right sidebar for default, or main area if preferred.
			// The user requested a main workspace leaf item view.
			leaf = workspace.getLeaf("tab");
			await leaf.setViewState({
				type: GENERATOR_VIEW_TYPE,
				active: true,
			});
		}

		// "Reveal" the leaf in case it is in a collapsed sidebar
		if (leaf) {
			workspace.revealLeaf(leaf);
		}
	}

	async activateFetchView(openInNewWindow = false) {
		const { workspace } = this.app;

		if (openInNewWindow) {
			const leaf = workspace.getLeaf("window");
			await leaf.setViewState({
				type: FETCH_SCRIPT_GENERATOR_VIEW_TYPE,
				active: true,
			});
			workspace.revealLeaf(leaf);
			return;
		}

		let leaf: WorkspaceLeaf | null = null;
		const leaves = workspace.getLeavesOfType(
			FETCH_SCRIPT_GENERATOR_VIEW_TYPE,
		);

		if (leaves.length > 0) {
			// A leaf with our view already exists, use that
			leaf = leaves[0] as WorkspaceLeaf;
		} else {
			// Our view could not be found in the workspace, create a new leaf
			// in the right sidebar for default, or main area if preferred.
			// The user requested a main workspace leaf item view.
			leaf = workspace.getLeaf("tab");
			await leaf.setViewState({
				type: FETCH_SCRIPT_GENERATOR_VIEW_TYPE,
				active: true,
			});
		}

		// "Reveal" the leaf in case it is in a collapsed sidebar
		if (leaf) {
			workspace.revealLeaf(leaf);
		}
	}

	onunload() {}

	async loadSettings() {
		const loadedData = await this.loadData();
		this.settings = Object.assign(
			{},
			DEFAULT_SETTINGS,
			loadedData as Partial<SyncScriptGeneratorSettings>,
		);

		if (!loadedData) {
			const iotoSettingsService = new IotoSettingsService(this.app);
			const obSyncMDBService = new ObSyncMDBService(this.app);

			try {
				// 统一获取 IOTO 设置，避免重复调用
				if (iotoSettingsService.isAvailable()) {
					const iotoSettings = iotoSettingsService.getSettings();
					const base = iotoSettings?.extraFolder;
					if (base) {
						const paths = {
							syncTemplateFolder: `${base}/IOTO/Templates/Templater/MyIOTO/${t("SYNC_TEMPLATE_FOLDER_NAME")}`,
							fetchTemplateFolder: `${base}/IOTO/Templates/Templater/MyIOTO/${t("FETCH_TEMPLATE_FOLDER_NAME")}`,
						} as const;

						(
							Object.keys(paths) as Array<keyof typeof paths>
						).forEach((key) => {
							if (!this.settings[key]) {
								this.settings[key] = paths[key];
							}
						});
					}
				}

				// 统一获取 ObSyncMDB 设置，避免重复调用
				if (obSyncMDBService.isAvailable()) {
					const obSyncMDB = obSyncMDBService.getSettings();
					const base = obSyncMDB?.templaterTemplatesFolder;
					if (base) {
						const paths = {
							syncTemplateFolder: `${base}/OBSyncDB/Sync`,
							fetchTemplateFolder: `${base}/OBSyncDB/Fetch`,
						} as const;

						(
							Object.keys(paths) as Array<keyof typeof paths>
						).forEach((key) => {
							if (!this.settings[key]) {
								this.settings[key] = paths[key];
							}
						});
					}
				}
			} catch (error) {
				console.warn(
					"Sync Script Generator: Failed to load IOTO Settings",
					error,
				);
			}
		}
	}

	async saveSettings() {
		await this.saveData(this.settings);
	}
}
