import { Platform, FolderSetting } from "./types";
import { SYNC_OPTIONS } from "./constants";
import { Notice } from "obsidian";

export class ScriptEngine {

    static generate(
        platform: Platform, 
        rootSettings: Record<string, string>,
        vaultSettings: Record<string, any>,
        folderSettings: FolderSetting[]
    ): string {
        let script = "<%*\n";
        const varName = platform.toLowerCase();
        
        // Root variables mapping
        const platformRootVars: Record<Platform, string[]> = {
            "Airtable": ["airtableAPIKeyForSync", "airtableBaseIDForSync", "airtableTableIDForSync"],
            "Feishu": ["feishuAppIDForSync", "feishuAppSecretForSync", "feishuBaseIDForSync", "feishuTableIDForSync"],
            "Vika": ["vikaAPIKeyForSync", "vikaTableIDForSync"],
            "Lark": ["larkAppIDForSync", "larkAppSecretForSync", "larkBaseIDForSync", "larkTableIDForSync"],
            "WPS": ["wpsAppIDForSync", "wpsAppSecretForSync", "wpsBaseIDForSync", "wpsTableIDForSync"],
            "Ding": ["dingAppIDForSync", "dingAppSecretForSync", "dingBaseIDForSync", "dingTableIDForSync", "dingViewIDForSync"]
        };

        const rootVars = platformRootVars[platform] || [];
        if (rootVars.length > 0) {
            script += `const {${rootVars.join(", ")}} = app.plugins.plugins[\"ioto-settings\"].settings;\n\n`;
        }

        script += `const ${varName} = {\n`;

        // Root Settings
        const rootOptions = SYNC_OPTIONS.filter(o => o.level === "Root" && (o.platforms.includes(platform)));
        rootOptions.forEach(opt => {
            const varMapping: Record<string, string> = {
                "apiKey": platform === "Airtable" ? "airtableAPIKeyForSync" : "vikaAPIKeyForSync",
                "defaultBaseID": platform === "Airtable" ? "airtableBaseIDForSync" : "dingBaseIDForSync",
                "defaultTableID": platform === "Airtable" ? "airtableTableIDForSync" : (platform === "Feishu" ? "feishuTableIDForSync" : (platform === "Lark" ? "larkTableIDForSync" : (platform === "WPS" ? "wpsTableIDForSync" : (platform === "Ding" ? "dingTableIDForSync" : "vikaTableIDForSync")))),
                "appID": platform === "Feishu" ? "feishuAppIDForSync" : (platform === "Lark" ? "larkAppIDForSync" : (platform === "WPS" ? "wpsAppIDForSync" : "dingAppIDForSync")),
                "appSecret": platform === "Feishu" ? "feishuAppSecretForSync" : (platform === "Lark" ? "larkAppSecretForSync" : "dingAppSecretForSync"),
                "defaultAppToken": platform === "Feishu" ? "feishuBaseIDForSync" : "larkBaseIDForSync",
            };
            const mappedVar = varMapping[opt.name];
            
            const userVal = rootSettings[opt.name];
            
            if (userVal && userVal !== (opt.defaultValue === "无" ? "" : opt.defaultValue)) {
                script += "    " + opt.name + ": " + JSON.stringify(userVal) + ",\n";
            } else if (mappedVar) {
                script += "    " + opt.name + ": `${" + mappedVar + "}`,\n";
            } else {
                let val = opt.defaultValue === "无" ? "" : opt.defaultValue;
                script += "    " + opt.name + ": " + JSON.stringify(val) + ",\n";
            }
        });

        // Vault Settings
        const vaultOptions = SYNC_OPTIONS.filter(o => o.level === "Vault" && (o.platforms.includes(platform) || o.platforms.length === 0));
        if (vaultOptions.length > 0) {
            script += "\n    // Vault Settings\n";
            script += "    syncSettings: {\n";
            vaultOptions.forEach((opt) => {
                 let val = vaultSettings[opt.name];
                 if (val === undefined) {
                     // Parse default value if necessary
                     if (opt.valueType === "array" && typeof opt.defaultValue === "string" && opt.defaultValue.startsWith("[")) {
                        try { val = JSON.parse(opt.defaultValue); } catch(e) { val = []; }
                     } else if (opt.valueType === "object" && typeof opt.defaultValue === "string" && opt.defaultValue.startsWith("{")) {
                        try { val = JSON.parse(opt.defaultValue); } catch(e) { val = {}; }
                     } else if (opt.valueType === "boolean") {
                        val = opt.defaultValue === "true";
                     } else {
                        val = opt.defaultValue === "无" ? "" : opt.defaultValue;
                     }
                 }
                 
                 if (val !== undefined) {
                     script += "        " + opt.name + ": " + JSON.stringify(val, null, 4) + ",\n";
                 }
            });
            script += "    },\n";
        }

        // Folder Settings
        if (folderSettings.length > 0) {
            script += "\n    // Folders Settings\n";
            script += "    tables: [\n";
            folderSettings.forEach((folder, i) => {
                script += "        {\n";
                const entries = Object.entries(folder);
                entries.forEach(([key, val], j) => {
                    if (key === "collapsed") return; 
                    script += "            " + key + ": " + JSON.stringify(val) + (j < entries.length - 1 ? ",\n" : "\n");
                });
                script += "        }" + (i < folderSettings.length - 1 ? ",\n" : "\n");
            });
            script += "    ]\n";
        }
        
        script += "};\n\n";

        const methodName = "ObSync" + platform;
        script += "await tp.user." + methodName + "(tp, this.app, " + varName + ");\n";
        script += "_%>\n";

        return script;
    }

    static parse(content: string): { 
        platform: Platform | null, 
        rootSettings: Record<string, string>,
        vaultSettings: Record<string, any>,
        folderSettings: FolderSetting[] 
    } {
        let platform: Platform | null = null;
        let rootSettings: Record<string, string> = {};
        let vaultSettings: Record<string, any> = {};
        let folderSettings: FolderSetting[] = [];

        // 1. Detect Platform
        const platformMatch = content.match(/await tp\.user\.ObSync(\w+)\(/);
        if (platformMatch && platformMatch[1]) {
            const parsedPlatform = platformMatch[1] as Platform;
            if (["Airtable", "Feishu", "Vika", "Lark", "WPS", "Ding"].includes(parsedPlatform)) {
                platform = parsedPlatform;
            }
        }

        if (!platform) return { platform, rootSettings, vaultSettings, folderSettings };

        // 2. Extract Main Config Object
        const varName = platform.toLowerCase();
        const configBlockRegex = new RegExp(`const ${varName}\\s*=\\s*\{`, "m");
        const match = content.match(configBlockRegex);
        
        if (match) {
            const startObj = match.index! + match[0].length - 1; // index of '{'
            const endObj = this.findMatchingBracket(content, startObj);
            
            if (endObj !== -1) {
                const configBody = content.substring(startObj + 1, endObj);

                // 3. Extract Tables
                const tablesIndex = configBody.indexOf("tables:");
                if (tablesIndex !== -1) {
                    const openBracket = configBody.indexOf("[", tablesIndex);
                    if (openBracket !== -1) {
                        const closeBracket = this.findMatchingBracket(configBody, openBracket);
                        if (closeBracket !== -1) {
                            const tablesStr = configBody.substring(openBracket, closeBracket + 1);
                            const sanitizedTables = tablesStr.replace(/`([\s\S]*?)`/g, (match, p1) => {
                                return '"' + p1.replace(/"/g, '\\"').replace(/\n/g, '\\n') + '"';
                            });
                            
                            try {
                                folderSettings = new Function("return " + sanitizedTables)();
                            } catch (e) {
                                console.error("Failed to parse folder settings", e);
                                new Notice("Warning: Could not parse folder settings.");
                            }
                        }
                    }
                }

                // 4. Extract Vault Settings
                const syncIndex = configBody.indexOf("syncSettings:");
                if (syncIndex !== -1) {
                    const openBrace = configBody.indexOf("{", syncIndex);
                    if (openBrace !== -1) {
                        const closeBrace = this.findMatchingBracket(configBody, openBrace);
                        if (closeBrace !== -1) {
                            const syncStr = configBody.substring(openBrace, closeBrace + 1);
                            const sanitizedSync = syncStr.replace(/`([\s\S]*?)`/g, (match, p1) => {
                                return '"' + p1.replace(/"/g, '\\"').replace(/\n/g, '\\n') + '"';
                            });
                            
                            try {
                                vaultSettings = new Function("return " + sanitizedSync)();
                            } catch (e) {
                                console.error("Failed to parse vault settings", e);
                                new Notice("Warning: Could not parse vault settings.");
                            }
                        }
                    }
                }

                // 5. Extract Root Settings
                const rootLines = configBody.split("\n");
                const rootKeys = SYNC_OPTIONS.filter(o => o.level === "Root").map(o => o.name);

                rootLines.forEach(line => {
                    const keyMatch = line.match(/^\s*(\w+):\s*(.*?),?\s*$/);
                    if (keyMatch && keyMatch[1]) {
                        const key = keyMatch[1];
                        if (rootKeys.includes(key)) {
                            let val = keyMatch[2] || "";
                            if (val.startsWith('"') && val.endsWith('"')) {
                                val = val.slice(1, -1);
                            } else if (val.startsWith("`") && val.endsWith("`")) {
                                if (val.includes("${ ")) return; 
                                val = val.slice(1, -1);
                            }
                            rootSettings[key] = val;
                        }
                    }
                });
            }
        }

        return { platform, rootSettings, vaultSettings, folderSettings };
    }

    private static findMatchingBracket(text: string, start: number): number {
        let count = 0;
        const open = text[start];
        const close = open === '[' ? ']' : '}';
        
        for (let i = start; i < text.length; i++) {
            if (text[i] === open) count++;
            else if (text[i] === close) count--;
            
            if (count === 0) return i;
        }
        return -1;
    }
}