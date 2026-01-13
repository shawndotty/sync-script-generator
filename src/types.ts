declare module "obsidian" {
	interface App {
		commands: {
			executeCommandById(id: string): void;
		};
		plugins: {
			plugins: {
				[key: string]: any;
			};
		};
		dom: {
			appContainerEl: HTMLElement;
		};
	}
}

export type Platform = "Airtable" | "Feishu" | "Vika" | "Lark" | "WPS" | "Ding";

export interface SyncOption {
	name: string;
	group?: string;
	groupOrder?: number;
	title: string;
	platforms: Platform[];
	level: "Root" | "Vault" | "Folder" | "Note";
	required: boolean;
	defaultValue: any;
	valueType: "string" | "boolean" | "array" | "object" | "number";
	description: string;
	example?: string;
}

export interface FetchOption {
	name: string;
	title: string;
	platforms: Platform[];
	level: "Root" | "Folder";
	required: boolean;
	defaultValue: any;
	valueType: "string";
	description: string;
	example?: string;
}

export interface FolderSetting {
	folderName: string;
	collapsed?: boolean;
	[key: string]: any;
}

export interface SyncScriptSettings {
	platform: Platform;
	rootSettings: Record<string, string>;
	vaultSettings: Record<string, any>;
	folderSettings: FolderSetting[];
}

export interface ConfigPreset {
	id: string;
	name: string;
	platform: Platform;
	rootSettings: Record<string, string>;
	vaultSettings: Record<string, any>;
	folderSettings: FolderSetting[];
	createdAt: number;
	updatedAt: number;
}

export interface FetchScriptSettings {
	platform: Platform;
	rootSettings: Record<string, string>;
	folderSettings: FolderSetting[];
}

export interface FetchConfigPreset {
	id: string;
	name: string;
	platform: Platform;
	rootSettings: Record<string, string>;
	folderSettings: FolderSetting[];
	createdAt: number;
	updatedAt: number;
}
