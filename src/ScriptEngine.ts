import { Platform, FolderSetting } from "./types";
import { SYNC_OPTIONS } from "./constants";
import { Notice } from "obsidian";

export class ScriptEngine {
	static generate(
		platform: Platform,
		rootSettings: Record<string, string>,
		vaultSettings: Record<string, any>,
		folderSettings: FolderSetting[],
		syncPlatform: "IOTO" | "obSyncWithMDB" = "IOTO"
	): string {
		let script = "";
		const varName = platform.toLowerCase();

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

		const rootVars = platformRootVars[platform] || [];
		if (rootVars.length > 0) {
			const pluginName =
				syncPlatform === "IOTO" ? "ioto-settings" : "ob-sync-with-mdb";
			script += `const {${rootVars.join(
				", "
			)}} = app.plugins.plugins[\"${pluginName}\"].settings;\n\n`;
		}

		script += `const ${varName} = {\n`;

		// Root Settings
		const rootOptions = SYNC_OPTIONS.filter(
			(o) => o.level === "Root" && o.platforms.includes(platform)
		);
		rootOptions.forEach((opt) => {
			const varMapping: Record<string, string> = {
				apiKey:
					platform === "Airtable"
						? "airtableAPIKeyForSync"
						: "vikaAPIKeyForSync",
				defaultBaseID:
					platform === "Airtable"
						? "airtableBaseIDForSync"
						: "dingBaseIDForSync",
				defaultTableID:
					platform === "Airtable"
						? "airtableTableIDForSync"
						: platform === "Feishu"
						? "feishuTableIDForSync"
						: platform === "Lark"
						? "larkTableIDForSync"
						: platform === "WPS"
						? "wpsTableIDForSync"
						: platform === "Ding"
						? "dingTableIDForSync"
						: "vikaTableIDForSync",
				appID:
					platform === "Feishu"
						? "feishuAppIDForSync"
						: platform === "Lark"
						? "larkAppIDForSync"
						: platform === "WPS"
						? "wpsAppIDForSync"
						: "dingAppIDForSync",
				appSecret:
					platform === "Feishu"
						? "feishuAppSecretForSync"
						: platform === "Lark"
						? "larkAppSecretForSync"
						: "dingAppSecretForSync",
				defaultAppToken:
					platform === "Feishu"
						? "feishuBaseIDForSync"
						: "larkBaseIDForSync",
			};
			const mappedVar = varMapping[opt.name];

			const userVal = rootSettings[opt.name];

			if (
				userVal &&
				userVal !== (opt.defaultValue === "无" ? "" : opt.defaultValue)
			) {
				script +=
					"    " + opt.name + ": " + JSON.stringify(userVal) + ",\n";
			} else if (mappedVar) {
				script +=
					"    " + opt.name + ": `$" + "{" + mappedVar + "}`,\n";
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
				(o.platforms.includes(platform) || o.platforms.length === 0)
		);
		if (vaultOptions.length > 0) {
			script += "\n    // Vault Settings\n";
			script += "    syncSettings: {\n";
			vaultOptions.forEach((opt) => {
				let val = vaultSettings[opt.name];
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

				if (val !== undefined) {
					script +=
						"        " +
						opt.name +
						": " +
						this.indentMultiline(
							JSON.stringify(val, null, 4),
							"        "
						) +
						",\n";
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
					script +=
						"            " +
						key +
						": " +
						this.indentMultiline(
							JSON.stringify(val, null, 4),
							"            "
						) +
						(j < entries.length - 1 ? ",\n" : "\n");
				});
				script +=
					"        }" +
					(i < folderSettings.length - 1 ? ",\n" : "\n");
			});
			script += "    ]\n";
		}

		script += "};\n\n";

		const methodName = "ObSync" + platform;
		script +=
			"await tp.user." +
			methodName +
			"(tp, this.app, " +
			varName +
			");\n";

		// 格式化缩进：保留原有缩进结构，整体向右缩进 4 格
		const formatted = script
			.trim()
			.split("\n")
			.map((line) => (line ? "    " + line : ""))
			.join("\n");
		return "<%*\n" + formatted + "\n_%>";
	}

	static parse(content: string): {
		platform: Platform | null;
		rootSettings: Record<string, string>;
		vaultSettings: Record<string, any>;
		folderSettings: FolderSetting[];
	} {
		let platform: Platform | null = null;
		let rootSettings: Record<string, string> = {};
		let vaultSettings: Record<string, any> = {};
		let folderSettings: FolderSetting[] = [];

		// 1. Detect Platform
		const platformMatch = content.match(/await tp\.user\.ObSync(\w+)\(/);
		if (platformMatch && platformMatch[1]) {
			const parsedPlatform = platformMatch[1] as Platform;
			if (
				["Airtable", "Feishu", "Vika", "Lark", "WPS", "Ding"].includes(
					parsedPlatform
				)
			) {
				platform = parsedPlatform;
			}
		}

		if (!platform)
			return { platform, rootSettings, vaultSettings, folderSettings };

		// 2. Extract Main Config Object
		const varName = platform.toLowerCase();
		const configBlockRegex = new RegExp(
			`const ${varName}\\s*=\\s*\\{`,
			"m"
		);

		const match = content.match(configBlockRegex);

		if (match) {
			const startObj = match.index! + match[0].length - 1; // index of '{'

			const endObj = this.findMatchingBracket(content, startObj);

			if (endObj !== -1) {
				const configStr = content.substring(startObj, endObj + 1);

				// Sanitize template literals to strings to avoid ReferenceError
				// Replace `...` with "..." and escape internal quotes/newlines
				const sanitizedConfig = configStr.replace(
					/`([\s\S]*?)`/g,
					(match, p1) => {
						return (
							'"' +
							p1.replace(/"/g, '\\"').replace(/\n/g, "\\n") +
							'"'
						);
					}
				);

				try {
					// Parse the sanitized object string
					const configObj = new Function(
						"return " + sanitizedConfig
					)();

					// Extract Folder Settings (tables)
					if (Array.isArray(configObj.tables)) {
						folderSettings = configObj.tables;
					}

					// Extract Vault Settings (syncSettings)
					if (
						configObj.syncSettings &&
						typeof configObj.syncSettings === "object"
					) {
						vaultSettings = configObj.syncSettings;
					}

					// Extract Root Settings
					const rootKeys = SYNC_OPTIONS.filter(
						(o) => o.level === "Root"
					).map((o) => o.name);

					for (const key in configObj) {
						if (key === "tables" || key === "syncSettings")
							continue;

						if (rootKeys.includes(key)) {
							const val = configObj[key];
							if (typeof val === "string") {
								// If it's a template variable reference (e.g. "${apiKey}"), don't import it as a value
								// because the generator will supply the default variable reference if the field is empty.
								if (val.includes("${")) continue;
								rootSettings[key] = val;
							} else if (val !== undefined && val !== null) {
								rootSettings[key] = String(val);
							}
						}
					}
				} catch (e) {
					console.error("Failed to parse configuration object", e);
					new Notice(
						"Warning: Could not parse configuration from template."
					);
				}
			}
		}

		console.dir({ platform, rootSettings, vaultSettings, folderSettings });

		return { platform, rootSettings, vaultSettings, folderSettings };
	}

	private static findMatchingBracket(text: string, start: number): number {
		let count = 0;
		const open = text[start];
		const close = open === "[" ? "]" : "}";

		for (let i = start; i < text.length; i++) {
			if (text[i] === open) count++;
			else if (text[i] === close) count--;

			if (count === 0) return i;
		}
		return -1;
	}

	private static indentMultiline(str: string, spaces: string): string {
		return str
			.split("\n")
			.map((line, i) => (i === 0 ? line : spaces + line))
			.join("\n");
	}
}
