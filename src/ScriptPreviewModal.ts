import { App, Modal, Setting, Notice, TFile } from "obsidian";
import { EditorView, keymap } from "@codemirror/view";
import { EditorState } from "@codemirror/state";
import { javascript } from "@codemirror/lang-javascript";
import { oneDark } from "@codemirror/theme-one-dark";
import { defaultKeymap } from "@codemirror/commands";

export class ScriptPreviewModal extends Modal {
    private script: string;
    private platform: string;
    private importedFile: TFile | null;

    constructor(app: App, script: string, platform: string, importedFile: TFile | null) {
        super(app);
        this.script = script;
        this.platform = platform;
        this.importedFile = importedFile;
    }

    onOpen() {
        this.contentEl.createEl("h2", { text: "Generated Script" });
        
        const editorContainer = this.contentEl.createDiv({ cls: "script-editor-container" });
        editorContainer.style.height = "400px";
        editorContainer.style.overflow = "hidden";
        editorContainer.style.border = "1px solid var(--background-modifier-border)";
        editorContainer.style.borderRadius = "4px";

        const state = EditorState.create({
            doc: this.script,
            extensions: [
                keymap.of(defaultKeymap),
                javascript(),
                oneDark,
                EditorView.lineWrapping
            ]
        });

        const view = new EditorView({
            state,
            parent: editorContainer
        });

        new Setting(this.contentEl)
            .addButton(btn => {
                btn.setButtonText("Copy to Clipboard").onClick(() => {
                    const content = view.state.doc.toString();
                    navigator.clipboard.writeText(content);
                    new Notice("Copied to clipboard");
                });
            })
            .addButton(btn => {
                const label = this.importedFile ? `Update ${this.importedFile.basename}` : "Save as File";
                btn.setButtonText(label).setCta().onClick(async () => {
                    const content = view.state.doc.toString();
                    if (this.importedFile) {
                            await this.app.vault.modify(this.importedFile, content);
                            new Notice(`Updated ${this.importedFile.path}`);
                    } else {
                        const fileName = `SyncScript-${this.platform}-${Date.now()}.md`;
                        await this.app.vault.create(fileName, content);
                        new Notice(`Saved to vault as ${fileName}`);
                    }
                    this.close();
                });
            });
    }

    onClose() {
        this.contentEl.empty();
    }
}
