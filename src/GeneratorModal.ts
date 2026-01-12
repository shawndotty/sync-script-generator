import { App, Modal, Setting, Notice, TextAreaComponent } from "obsidian";
import { Platform, SyncOption, FolderSetting } from "./types";
import { SYNC_OPTIONS } from "./constants";

export class GeneratorModal extends Modal {
    platform: Platform = "Airtable";
    rootSettings: Record<string, string> = {};
    vaultSettings: Record<string, any> = {};
    folderSettings: FolderSetting[] = [];
    
    constructor(app: App) {
        super(app);
    }

    onOpen() {
        const { contentEl } = this;
        contentEl.empty();
        contentEl.createEl("h2", { text: "Sync Script Generator" });

        this.renderPlatformSelector();
        this.renderSettings();
    }

    renderPlatformSelector() {
        new Setting(this.contentEl)
            .setName("Target Platform")
            .setDesc("Select the platform you want to generate a sync script for.")
            .addDropdown(dropdown => {
                const platforms: Platform[] = ["Airtable", "Feishu", "Vika", "Lark", "WPS", "Ding"];
                platforms.forEach(p => dropdown.addOption(p, p));
                dropdown.setValue(this.platform);
                dropdown.onChange(value => {
                    this.platform = value as Platform;
                    this.renderSettings();
                });
            });
    }

    renderSettings() {
        // Clear previous settings except platform selector
        const settingsContainer = this.contentEl.createDiv();
        this.renderSettingsInContainer(settingsContainer);
    }

    renderSettingsInContainer(container: HTMLDivElement) {
        container.empty();

        container.createEl("h3", { text: "Root Settings" });
        const rootOptions = SYNC_OPTIONS.filter(o => o.level === "Root" && (o.platforms.includes(this.platform) || o.platforms.length === 0));
        rootOptions.forEach(opt => {
            new Setting(container)
                .setName(opt.name)
                .setDesc(opt.description)
                .addText(text => {
                    text.setValue(this.rootSettings[opt.name] || opt.defaultValue || "")
                        .onChange(val => this.rootSettings[opt.name] = val);
                });
        });

        container.createEl("h3", { text: "Vault Settings" });
        const vaultOptions = SYNC_OPTIONS.filter(o => o.level === "Vault" && (o.platforms.includes(this.platform) || o.platforms.length === 0));
        vaultOptions.forEach(opt => {
            this.renderOption(container, opt, this.vaultSettings);
        });

        container.createEl("h3", { text: "Folder Settings" });
        const addButton = container.createEl("button", { text: "Add Folder Setting" });
        addButton.onclick = () => {
            this.folderSettings.push({ folderName: "" });
            this.renderSettingsInContainer(container);
        };

        this.folderSettings.forEach((folder, index) => {
            const folderDiv = container.createDiv({ cls: "folder-setting-block" });
            folderDiv.style.border = "1px solid var(--background-modifier-border)";
            folderDiv.style.padding = "10px";
            folderDiv.style.marginBottom = "10px";

            new Setting(folderDiv)
                .setName(`Folder ${index + 1}`)
                .addText(text => {
                    text.setPlaceholder("Folder Path")
                        .setValue(folder.folderName)
                        .onChange(val => folder.folderName = val);
                })
                .addButton(btn => {
                    btn.setButtonText("Remove").setWarning().onClick(() => {
                        this.folderSettings.splice(index, 1);
                        this.renderSettingsInContainer(container);
                    });
                });

            const folderOptions = SYNC_OPTIONS.filter(o => o.level === "Folder" && (o.platforms.includes(this.platform) || o.platforms.length === 0));
            folderOptions.forEach(opt => {
                if (opt.name === "folderName") return;
                this.renderOption(folderDiv, opt, folder);
            });
        });

        const actionDiv = container.createDiv();
        actionDiv.style.marginTop = "20px";
        new Setting(actionDiv)
            .addButton(btn => {
                btn.setButtonText("Generate Script")
                   .setCta()
                   .onClick(() => this.generateScript());
            });
    }

    renderOption(container: HTMLElement, opt: SyncOption, target: any) {
        const s = new Setting(container)
            .setName(opt.name)
            .setDesc(opt.description);

        if (opt.valueType === "boolean") {
            s.addToggle(toggle => {
                toggle.setValue(target[opt.name] ?? (opt.defaultValue === "true"))
                      .onChange(val => target[opt.name] = val);
            });
        } else if (opt.valueType === "array" || opt.valueType === "object") {
            s.addTextArea(text => {
                text.setPlaceholder(opt.example || "")
                    .setValue(target[opt.name] ? JSON.stringify(target[opt.name], null, 2) : "")
                    .onChange(val => {
                        try {
                            target[opt.name] = JSON.parse(val);
                        } catch (e) {
                            // Silently fail or show error
                        }
                    });
            });
        } else {
            s.addText(text => {
                text.setValue(target[opt.name] || (opt.defaultValue === "无" ? "" : opt.defaultValue) || "")
                    .onChange(val => target[opt.name] = val);
            });
        }
    }

    generateScript() {
        let script = "<%*\n";
        const varName = this.platform.toLowerCase();
        
        // Root variables mapping
        const platformRootVars: Record<Platform, string[]> = {
            "Airtable": ["airtableAPIKeyForSync", "airtableBaseIDForSync", "airtableTableIDForSync"],
            "Feishu": ["feishuAppIDForSync", "feishuAppSecretForSync", "feishuBaseIDForSync", "feishuTableIDForSync"],
            "Vika": ["vikaAPIKeyForSync", "vikaTableIDForSync"],
            "Lark": ["larkAppIDForSync", "larkAppSecretForSync", "larkBaseIDForSync", "larkTableIDForSync"],
            "WPS": ["wpsAppIDForSync", "wpsAppSecretForSync", "wpsBaseIDForSync", "wpsTableIDForSync"],
            "Ding": ["dingAppIDForSync", "dingAppSecretForSync", "dingBaseIDForSync", "dingTableIDForSync", "dingViewIDForSync"]
        };

        const rootVars = platformRootVars[this.platform] || [];
        if (rootVars.length > 0) {
            script += `const {${rootVars.join(", ")}} = app.plugins.plugins[\"ioto-settings\"].settings;\n\n`;
        }

        script += `const ${varName} = {\n`;

        // Root Settings in Object
        const rootOptions = SYNC_OPTIONS.filter(o => o.level === "Root" && (o.platforms.includes(this.platform)));
        rootOptions.forEach(opt => {
            const varMapping: Record<string, string> = {
                "apiKey": this.platform === "Airtable" ? "airtableAPIKeyForSync" : "vikaAPIKeyForSync",
                "defaultBaseID": this.platform === "Airtable" ? "airtableBaseIDForSync" : "dingBaseIDForSync",
                "defaultTableID": this.platform === "Airtable" ? "airtableTableIDForSync" : (this.platform === "Feishu" ? "feishuTableIDForSync" : (this.platform === "Lark" ? "larkTableIDForSync" : (this.platform === "WPS" ? "wpsTableIDForSync" : (this.platform === "Ding" ? "dingTableIDForSync" : "vikaTableIDForSync")))),
                "appID": this.platform === "Feishu" ? "feishuAppIDForSync" : (this.platform === "Lark" ? "larkAppIDForSync" : (this.platform === "WPS" ? "wpsAppIDForSync" : "dingAppIDForSync")),
                "appSecret": this.platform === "Feishu" ? "feishuAppSecretForSync" : (this.platform === "Lark" ? "larkAppSecretForSync" : "dingAppSecretForSync"),
                "defaultAppToken": this.platform === "Feishu" ? "feishuBaseIDForSync" : "larkBaseIDForSync",
            };
            const mappedVar = varMapping[opt.name];
            if (mappedVar) {
                // Use double quotes for the property value and template literal string inside
                script += "    " + opt.name + ": `${" + mappedVar + "}`,\n";
            } else {
                script += "    " + opt.name + ": " + JSON.stringify(this.rootSettings[opt.name] || opt.defaultValue) + ",\n";
            }
        });

        // Vault Settings
        if (Object.keys(this.vaultSettings).length > 0) {
            script += "\n    // Vault Settings\n";
            script += "    syncSettings: {\n";
            const entries = Object.entries(this.vaultSettings);
            entries.forEach(([key, val], i) => {
                script += "        " + key + ": " + JSON.stringify(val, null, 12) + (i < entries.length - 1 ? ",\n" : "\n");
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
                    script += "            " + key + ": " + JSON.stringify(val) + (j < entries.length - 1 ? ",\n" : "\n");
                });
                script += "        }" + (i < this.folderSettings.length - 1 ? ",\n" : "\n");
            });
            script += "    ]\n";
        }
        
        script += "};\n\n";

        const methodName = "ObSync" + this.platform;
        script += "await tp.user." + methodName + "(tp, this.app, " + varName + ");\n";
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
                .addButton(btn => {
                    btn.setButtonText("Copy to Clipboard").onClick(() => {
                        navigator.clipboard.writeText(script);
                        new Notice("Copied to clipboard");
                    });
                })
                .addButton(btn => {
                    btn.setButtonText("Save as File").setCta().onClick(async () => {
                        const fileName = `SyncScript-${this.platform}-${Date.now()}.md`;
                        await this.app.vault.create(fileName, script);
                        new Notice(`Saved to vault as ${fileName}`);
                        previewModal.close();
                    });
                });
        };
        previewModal.open();
    }

    onClose() {
        const { contentEl } = this;
        contentEl.empty();
    }
}
