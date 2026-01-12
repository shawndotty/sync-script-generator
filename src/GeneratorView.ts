import {
	App,
	ItemView,
	WorkspaceLeaf,
	Setting,
	Notice,
	TextAreaComponent,
	ButtonComponent,
	setIcon,
} from "obsidian";
import { Platform, SyncOption, FolderSetting } from "./types";
import { SYNC_OPTIONS, GENERATOR_VIEW_TYPE } from "./constants";
import { Modal } from "obsidian";

export class GeneratorView extends ItemView {
	platform: Platform = "Airtable";
	rootSettings: Record<string, string> = {};
	vaultSettings: Record<string, any> = {};
	folderSettings: FolderSetting[] = [];
	activeOption: SyncOption | null = null;

	// UI Elements
	middleContainer: HTMLElement;
	rightContainer: HTMLElement;

	constructor(leaf: WorkspaceLeaf) {
		super(leaf);
	}

	getViewType() {
		return GENERATOR_VIEW_TYPE;
	}

	getDisplayText() {
		return "Sync Script Generator";
	}

	getIcon() {
		return "dice";
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
		container.createEl("h3", { text: "Platforms" });
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
				container
					.findAll(".platform-item")
					.forEach((el) => el.removeClass("is-active"));
				item.addClass("is-active");
				this.renderMiddleColumn();
				this.activeOption = null; // Clear help on platform switch
				this.renderRightColumn();
			};
		});
	}

	renderMiddleColumn() {
		this.middleContainer.empty();
		this.middleContainer.createEl("h2", {
			text: `${this.platform} Settings`,
		});

		// Action Bar
		const actionBar = this.middleContainer.createDiv({ cls: "action-bar" });
		new ButtonComponent(actionBar)
			.setButtonText("Generate Script")
			.setCta()
			.onClick(() => this.generateScript());

		const formContainer = this.middleContainer.createDiv({
			cls: "settings-form",
		});

		// Root Settings
		formContainer.createEl("h3", { text: "Root Settings" });
		const rootOptions = SYNC_OPTIONS.filter(
			(o) =>
				o.level === "Root" &&
				(o.platforms.includes(this.platform) ||
					o.platforms.length === 0)
		);
		rootOptions.forEach((opt) => {
			this.renderOption(formContainer, opt, this.rootSettings, "Root");
		});

		// Vault Settings
		formContainer.createEl("h3", { text: "Vault Settings" });
		const vaultOptions = SYNC_OPTIONS.filter(
			(o) =>
				o.level === "Vault" &&
				(o.platforms.includes(this.platform) ||
					o.platforms.length === 0)
		);
		vaultOptions.forEach((opt) => {
			this.renderOption(formContainer, opt, this.vaultSettings, "Vault");
		});

		// Folder Settings
		formContainer.createEl("h3", { text: "Folder Settings" });
		const addButton = formContainer.createEl("button", {
			text: "Add Folder Setting",
			cls: "mod-cta",
		});
		addButton.onclick = () => {
			this.folderSettings.push({ folderName: "" });
			this.renderMiddleColumn();
		};

        this.folderSettings.forEach((folder, index) => {
            const folderDiv = formContainer.createDiv({ cls: "folder-setting-block" });
            if (folder.collapsed) folderDiv.addClass("is-collapsed");
            
            const header = folderDiv.createDiv({ cls: "folder-header" });
            const titleContainer = header.createDiv({ cls: "folder-title" });
            
            const iconSpan = titleContainer.createSpan({ cls: "folder-toggle-icon" });
            setIcon(iconSpan, "chevron-down");
            
            titleContainer.createEl("span", { text: `Folder ${index + 1}` + (folder.folderName ? `: ${folder.folderName}` : "") });

            header.onclick = (e) => {
                // Avoid toggling when clicking remove button
                if ((e.target as HTMLElement).tagName === "BUTTON") return;
                folder.collapsed = !folder.collapsed;
                this.renderMiddleColumn();
            };

            const removeBtn = header.createEl("button", { text: "Remove" });
            removeBtn.onclick = (e) => {
                e.stopPropagation();
                this.folderSettings.splice(index, 1);
                this.renderMiddleColumn();
            };

            const contentDiv = folderDiv.createDiv({ cls: "folder-content" });

            new Setting(contentDiv)
                .setName("Folder Path")
                .addText(text => {
                    text.setPlaceholder("Folder Path")
                        .setValue(folder.folderName)
                        .onChange(val => folder.folderName = val);
                    this.addFocusListener(text.inputEl, { 
                        name: "Folder Path", 
                        description: "The path to the folder you want to sync.", 
                        example: "Example: MyVault/Projects/Active",
                        platforms: [], level: "Folder", required: true, defaultValue: "", valueType: "string"
                    });
                });

            const folderOptions = SYNC_OPTIONS.filter(o => o.level === "Folder" && (o.platforms.includes(this.platform) || o.platforms.length === 0));
            folderOptions.forEach(opt => {
                if (opt.name === "folderName") return;
                this.renderOption(contentDiv, opt, folder, "Folder");
            });
        });
	}

	renderOption(
		container: HTMLElement,
		opt: SyncOption,
		target: any,
		section: string
	) {
		const s = new Setting(container).setName(opt.name);

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
		} else if (opt.valueType === "array" || opt.valueType === "object") {
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
							new Notice(`Invalid JSON for ${opt.name}`);
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
		this.rightContainer.createEl("h3", { text: "Description" });

		if (this.activeOption) {
			const wrapper = this.rightContainer.createDiv({
				cls: "help-content",
			});
			wrapper.createEl("h4", {
				text: this.activeOption.name,
				cls: "help-title",
			});

			const badge = wrapper.createSpan({ cls: "help-badge" });
			badge.setText(this.activeOption.level);

			wrapper.createEl("div", {
				text: this.activeOption.description,
				cls: "help-desc",
			});

			if (this.activeOption.example) {
				wrapper.createEl("h5", { text: "Example/Usage:" });
				wrapper.createEl("pre", {
					text: this.activeOption.example,
					cls: "help-example",
				});
			}
		} else {
			this.rightContainer.createEl("p", {
				text: "Select a setting field to see its description here.",
				cls: "help-placeholder",
			});
		}
	}

	generateScript() {
		let script = "<%*\n";
		const varName = this.platform.toLowerCase();

		// Root variables mapping
		const platformRootVars: Record<Platform, string[]> = {
			Airtable: [
				"airtableAPIKeyForSync",
				"airtableBaseIDForSync",
				"airtableTableIDForSync",
			],
			Feishu: [
				"feishuAppIDForSync",
				"feishuAppSecretForSync",
				"feishuBaseIDForSync",
				"feishuTableIDForSync",
			],
			Vika: ["vikaAPIKeyForSync", "vikaTableIDForSync"],
			Lark: [
				"larkAppIDForSync",
				"larkAppSecretForSync",
				"larkBaseIDForSync",
				"larkTableIDForSync",
			],
			WPS: [
				"wpsAppIDForSync",
				"wpsAppSecretForSync",
				"wpsBaseIDForSync",
				"wpsTableIDForSync",
			],
			Ding: [
				"dingAppIDForSync",
				"dingAppSecretForSync",
				"dingBaseIDForSync",
				"dingTableIDForSync",
				"dingViewIDForSync",
			],
		};

		const rootVars = platformRootVars[this.platform] || [];
		if (rootVars.length > 0) {
			script += `const {${rootVars.join(
				", "
			)}} = app.plugins.plugins[\"ioto-settings\"].settings;\n\n`;
		}

		script += `const ${varName} = {\n`;

		// Root Settings in Object
		const rootOptions = SYNC_OPTIONS.filter(
			(o) => o.level === "Root" && o.platforms.includes(this.platform)
		);
		rootOptions.forEach((opt) => {
			const varMapping: Record<string, string> = {
				apiKey:
					this.platform === "Airtable"
						? "airtableAPIKeyForSync"
						: "vikaAPIKeyForSync",
				defaultBaseID:
					this.platform === "Airtable"
						? "airtableBaseIDForSync"
						: "dingBaseIDForSync",
				defaultTableID:
					this.platform === "Airtable"
						? "airtableTableIDForSync"
						: this.platform === "Feishu"
						? "feishuTableIDForSync"
						: this.platform === "Lark"
						? "larkTableIDForSync"
						: this.platform === "WPS"
						? "wpsTableIDForSync"
						: this.platform === "Ding"
						? "dingTableIDForSync"
						: "vikaTableIDForSync",
				appID:
					this.platform === "Feishu"
						? "feishuAppIDForSync"
						: this.platform === "Lark"
						? "larkAppIDForSync"
						: this.platform === "WPS"
						? "wpsAppIDForSync"
						: "dingAppIDForSync",
				appSecret:
					this.platform === "Feishu"
						? "feishuAppSecretForSync"
						: this.platform === "Lark"
						? "larkAppSecretForSync"
						: "dingAppSecretForSync",
				defaultAppToken:
					this.platform === "Feishu"
						? "feishuBaseIDForSync"
						: "larkBaseIDForSync",
			};
			const mappedVar = varMapping[opt.name];

			const userVal = this.rootSettings[opt.name];

			if (
				userVal &&
				userVal !== (opt.defaultValue === "无" ? "" : opt.defaultValue)
			) {
				script +=
					"    " + opt.name + ": " + JSON.stringify(userVal) + ",\n";
			} else if (mappedVar) {
				script += "    " + opt.name + ": `${" + mappedVar + "}`,";
			} else {
				let val = opt.defaultValue === "无" ? "" : opt.defaultValue;
				script +=
					"    " + opt.name + ": " + JSON.stringify(val) + ",\n";
			}
		});

		// Vault Settings
		const vaultOptions = SYNC_OPTIONS.filter(
			(o) =>
				o.level === "Vault" &&
				(o.platforms.includes(this.platform) ||
					o.platforms.length === 0)
		);
		if (vaultOptions.length > 0) {
			script += "\n    // Vault Settings\n";
			script += "    syncSettings: {\n";
			vaultOptions.forEach((opt) => {
				let val = this.vaultSettings[opt.name];
				if (val === undefined) {
					// Parse default value if necessary
					if (
						opt.valueType === "array" &&
						typeof opt.defaultValue === "string" &&
						opt.defaultValue.startsWith("[")
					) {
						try {
							val = JSON.parse(opt.defaultValue);
						} catch (e) {
							val = [];
						}
					} else if (
						opt.valueType === "object" &&
						typeof opt.defaultValue === "string" &&
						opt.defaultValue.startsWith("{")
					) {
						try {
							val = JSON.parse(opt.defaultValue);
						} catch (e) {
							val = {};
						}
					} else if (opt.valueType === "boolean") {
						val = opt.defaultValue === "true";
					} else {
						val = opt.defaultValue === "无" ? "" : opt.defaultValue;
					}
				}

				// Skip empty strings if they are optional? No, keep all to be safe and complete as per options.csv
				if (val !== undefined) {
					script +=
						"        " +
						opt.name +
						": " +
						JSON.stringify(val, null, 4) +
						",\n";
				}
			});
			script += "    },\n";
		}

		// Folder Settings
		if (this.folderSettings.length > 0) {
			script += "\n    // Folders Settings\n";
			script += "    tables: [\n";
			this.folderSettings.forEach((folder, i) => {
				script += "        {\n";
				const entries = Object.entries(folder);
				entries.forEach(([key, val], j) => {
					script +=
						"            " +
						key +
						": " +
						JSON.stringify(val) +
						(j < entries.length - 1 ? ",\n" : "\n");
				});
				script +=
					"        }" +
					(i < this.folderSettings.length - 1 ? ",\n" : "\n");
			});
			script += "    ]\n";
		}

		script += "};\n\n";

		const methodName = "ObSync" + this.platform;
		script +=
			"await tp.user." +
			methodName +
			"(tp, this.app, " +
			varName +
			");\n";
		script += "_%>\n";

		this.showPreview(script);
	}

	showPreview(script: string) {
		const previewModal = new Modal(this.app);
		previewModal.onOpen = () => {
			previewModal.contentEl.createEl("h2", { text: "Generated Script" });
			const textArea = new TextAreaComponent(previewModal.contentEl);
			textArea.inputEl.style.width = "100%";
			textArea.inputEl.style.height = "400px";
			textArea.setValue(script);

			new Setting(previewModal.contentEl)
				.addButton((btn) => {
					btn.setButtonText("Copy to Clipboard").onClick(() => {
						navigator.clipboard.writeText(script);
						new Notice("Copied to clipboard");
					});
				})
				.addButton((btn) => {
					btn.setButtonText("Save as File")
						.setCta()
						.onClick(async () => {
							const fileName = `SyncScript-${
								this.platform
							}-${Date.now()}.md`;
							await this.app.vault.create(fileName, script);
							new Notice(`Saved to vault as ${fileName}`);
							previewModal.close();
						});
				});
		};
		previewModal.open();
	}
}
