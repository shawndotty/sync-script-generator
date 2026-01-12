export type Platform = "Airtable" | "Feishu" | "Vika" | "Lark" | "WPS" | "Ding";

export interface SyncOption {
    name: string;
    platforms: Platform[];
    level: "Root" | "Vault" | "Folder" | "Note";
    required: boolean;
    defaultValue: any;
    valueType: "string" | "boolean" | "array" | "object" | "number";
    description: string;
    example?: string;
}

export interface FolderSetting {
    folderName: string;
    [key: string]: any;
}

export interface SyncScriptSettings {
    platform: Platform;
    rootSettings: Record<string, string>;
    vaultSettings: Record<string, any>;
    folderSettings: FolderSetting[];
}
