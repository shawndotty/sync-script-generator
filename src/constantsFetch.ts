import { FetchOption } from "./types";

export const FETCH_SCRIPT_GENERATOR_VIEW_TYPE = "fetch-script-generator-view";

export const FETCH_OPTIONS: FetchOption[] = [
	{
		name: "accessToken",

		title: "Access Token",
		platforms: ["WPS"],
		level: "Root",
		required: true,
		defaultValue: "无",
		valueType: "string",
		description: "WPS的用户Access Token",
		example:
			"同步设置时使用：\n${wpsUserTokenForSync}\n\nFetch设置时使用：\n${wpsUserTokenForFetch}",
	},
	{
		name: "apiKey",

		title: "Api Key",
		platforms: ["Airtable"],
		level: "Root",
		required: true,
		defaultValue: "无",
		valueType: "string",
		description:
			"同步到Airtable或者Vika时，必须提供一个相应的API Key。\n\n其中，Airtable的API Key，已经升级为Personal Access Token。",
		example:
			"同步设置时使用：\n${airtableAPIKeyForSync}\n\nFetch设置时使用：\n${airtableAPIKeyForFetch}",
	},
	{
		name: "apiKey",

		title: "Api Key",
		platforms: ["Vika"],
		level: "Root",
		required: true,
		defaultValue: "无",
		valueType: "string",
		description: "同步到Vika时，使用的API Key。",
		example:
			"同步设置时使用：\n${vikaAPIKeyForSync}\n\nFetch设置时使用：\n${vikaAPIKeyForFetch}",
	},
	{
		name: "appID",

		title: "App ID",
		platforms: ["Feishu"],
		level: "Root",
		required: true,
		defaultValue: "无",
		valueType: "string",
		description: "同步到飞书时，需要提供自建应用的APP ID",
		example:
			"同步设置时使用：\n${feishuAppIDForSync}\n\nFetch设置时使用：\n${feishuAppIDForFetch}",
	},
	{
		name: "appID",

		title: "App ID",
		platforms: ["Ding"],
		level: "Root",
		required: true,
		defaultValue: "无",
		valueType: "string",
		description: "钉钉自建应用的App ID",
		example:
			"同步设置时使用：\n${dingAppIDForSync}\n\nFetch设置时使用：\n${dingAppIDForFetch}",
	},
	{
		name: "appID",

		title: "App ID",
		platforms: ["WPS"],
		level: "Root",
		required: true,
		defaultValue: "无",
		valueType: "string",
		description: "WPS自建应用的App ID",
		example:
			"同步设置时使用：\n${wpsAppIDForSync}\n\nFetch设置时使用：\n${wpsAppIDForFetch}",
	},
	{
		name: "appID",

		title: "App ID",
		platforms: ["Lark"],
		level: "Root",
		required: true,
		defaultValue: "无",
		valueType: "string",
		description: "同步到Lark时，需要提供自建应用的APP ID",
		example:
			"同步设置时使用：\n${larkAppIDForSync}\n\nFetch设置时使用：\n${larkAppIDForFetch}",
	},
	{
		name: "appKey",

		title: "App Key",
		platforms: ["WPS"],
		level: "Root",
		required: true,
		defaultValue: "无",
		valueType: "string",
		description: "WPS自建应用的APP Key",
		example:
			"同步设置时使用：\n${wpsAppSecretForSync}\n\nFetch设置时使用：\n${wpsAppSecretForFetch}",
	},
	{
		name: "appSecret",

		title: "App Secret",
		platforms: ["Feishu"],
		level: "Root",
		required: true,
		defaultValue: "无",
		valueType: "string",
		description: "同步到飞书时，需要提供自建应用的APP Secret",
		example:
			"同步设置时使用：\n${feishuAppSecretForSync}\n\nFetch设置时使用：\n${feishuAppSecretForFetch}",
	},
	{
		name: "appSecret",

		title: "App Secret",
		platforms: ["Ding"],
		level: "Root",
		required: true,
		defaultValue: "无",
		valueType: "string",
		description: "钉钉自建应用的App Secrect",
		example:
			"同步设置时使用：\n${dingAppSecretForSync}\n\nFetch设置时使用：\n${dingAppSecretForFetch}",
	},
	{
		name: "appSecret",

		title: "App Secret",
		platforms: ["Lark"],
		level: "Root",
		required: true,
		defaultValue: "无",
		valueType: "string",
		description: "同步到Lark时，需要提供自建应用的APP Secret",
		example:
			"同步设置时使用：\n${larkAppSecretForSync}\n\nFetch设置时使用：\n${larkAppSecretForFetch}",
	},
	{
		name: "defaultAppToken",

		title: "Default App Token",
		platforms: ["Feishu"],
		level: "Root",
		required: true,
		defaultValue: "无",
		valueType: "string",
		description:
			"同步到飞书时，默认使用的多维表的App Token。\n\n多维表的App Token，相当于Airtable中的Base ID。",
		example:
			"同步设置时使用：\n${feishuBaseIDForSync}\n\nFetch设置时使用：\n${feishuBaseIDForFetch}",
	},
	{
		name: "defaultAppToken",

		title: "Default App Token",
		platforms: ["Lark"],
		level: "Root",
		required: true,
		defaultValue: "无",
		valueType: "string",
		description:
			"同步到Lark时，默认使用的多维表的App Token。\n\n多维表的App Token，相当于Airtable中的Base ID。",
		example:
			"同步设置时使用：\n${larkBaseIDForSync}\n\nFetch设置时使用：\n${larkBaseIDForFetch}",
	},
	{
		name: "defaultBaseID",

		title: "Default Base ID",
		platforms: ["Airtable"],
		level: "Root",
		required: true,
		defaultValue: "无",
		valueType: "string",
		description: "同步到Airtable时，默认使用的Base ID。",
		example:
			"同步设置时使用：\n${airtableBaseIDForSync}\n\nFetch设置时使用：\n${airtableBaseIDForFetch}",
	},
	{
		name: "defaultBaseID",

		title: "Default Base ID",
		platforms: ["Ding"],
		level: "Root",
		required: true,
		defaultValue: "无",
		valueType: "string",
		description: "默认的钉钉AI表格的Base ID",
		example:
			"同步设置时使用：\n${dingBaseIDForSync}\n\nFetch设置时使用：\n${dingBaseIDForFetch}",
	},
	{
		name: "defaultFileID",

		title: "Default File ID",
		platforms: ["WPS"],
		level: "Root",
		required: true,
		defaultValue: "无",
		valueType: "string",
		description: "默认的WPS多维表文件ID",
		example:
			"同步设置时使用：\n${wpsBaseIDForSync}\n\nFetch设置时使用：\n${wpsBaseIDForFetch}",
	},
	{
		name: "defaultSheetID",

		title: "Default Sheet ID",
		platforms: ["Ding"],
		level: "Root",
		required: true,
		defaultValue: "无",
		valueType: "string",
		description: "默认的钉钉AI表格的Sheet ID",
		example:
			"同步设置时使用：\n${dingTableIDForSync}\n\nFetch设置时使用：\n${dingTableIDForFetch}",
	},
	{
		name: "defaultSheetID",

		title: "Default Sheet ID",
		platforms: ["WPS"],
		level: "Root",
		required: true,
		defaultValue: "无",
		valueType: "string",
		description: "默认的WPS多维表Sheet ID",
		example:
			"同步设置时使用：\n${wpsTableIDForSync}\n\nFetch设置时使用：\n${wpsTableIDForFetch}",
	},
	{
		name: "defaultTableID",

		title: "Default Table ID",
		platforms: ["Airtable"],
		level: "Root",
		required: true,
		defaultValue: "无",
		valueType: "string",
		description: "同步到Airtable时，默认使用的Table ID。",
		example:
			"同步设置时使用：\n${airtableTableIDForSync}\n\nFetch设置时使用：\n${airtableTableIDForFetch}",
	},
	{
		name: "defaultTableID",

		title: "Default Table ID",
		platforms: ["Feishu"],
		level: "Root",
		required: true,
		defaultValue: "无",
		valueType: "string",
		description: "同步到飞书时，默认使用的Table ID。",
		example:
			"同步设置时使用：\n${feishuTableIDForSync}\n\nFetch设置时使用：\n${feishuTableIDForFetch}",
	},
	{
		name: "defaultTableID",

		title: "Default Table ID",
		platforms: ["Vika"],
		level: "Root",
		required: true,
		defaultValue: "无",
		valueType: "string",
		description: "同步到Vika时，默认使用的Table ID。",
		example:
			"同步设置时使用：\n${vikaTableIDForSync}\n\nFetch设置时使用：\n${vikaTableIDForFetch}",
	},
	{
		name: "defaultTableID",

		title: "Default Table ID",
		platforms: ["Lark"],
		level: "Root",
		required: true,
		defaultValue: "无",
		valueType: "string",
		description: "同步到Lark时，默认使用的Table ID。",
		example:
			"同步设置时使用：\n${larkTableIDForSync}\n\nFetch设置时使用：\n${larkTableIDForFetch}",
	},
	{
		name: "defaultViewID",

		title: "Default View ID",
		platforms: ["Ding"],
		level: "Root",
		required: true,
		defaultValue: "无",
		valueType: "string",
		description: "默认的钉钉AI表格的View ID",
		example:
			"同步设置时使用：\n${dingViewIDForSync}\n\nFetch设置时使用：\n${dingViewIDForFetch}",
	},
	{
		name: "userID",

		title: "User ID",
		platforms: ["Ding"],
		level: "Root",
		required: true,
		defaultValue: "无",
		valueType: "string",
		description: "钉钉通讯录中的用户ID",
		example:
			"同步设置时使用：\n${dingUserIDForSync}\n\nFetch设置时使用：\n${dingUserIDForFetch}",
	},
	{
		name: "sourceName",

		title: "Source Name",
		platforms: ["Airtable", "Feishu", "Vika", "Lark", "WPS", "Ding"],
		level: "Folder",
		required: true,
		defaultValue: "无",
		valueType: "string",
		description: "钉钉通讯录中的用户ID",
		example:
			"同步设置时使用：\n${dingUserIDForSync}\n\nFetch设置时使用：\n${dingUserIDForFetch}",
	},
	{
		name: "targetFolder",

		title: "Target Folder",
		platforms: ["Airtable", "Feishu", "Vika", "Lark", "WPS", "Ding"],
		level: "Folder",
		required: true,
		defaultValue: "无",
		valueType: "string",
		description: "钉钉通讯录中的用户ID",
		example:
			"同步设置时使用：\n${dingUserIDForSync}\n\nFetch设置时使用：\n${dingUserIDForFetch}",
	},
	{
		name: "baseID",

		title: "Base ID",
		platforms: ["Airtable"],
		level: "Folder",
		required: true,
		defaultValue: "无",
		valueType: "string",
		description: "Airtable Base ID for this folder",
		example:
			"同步设置时使用：\n${airtableBaseIDForSync}\n\nFetch设置时使用：\n${airtableBaseIDForFetch}",
	},
	{
		name: "appToken",

		title: "App Token",
		platforms: ["Feishu"],
		level: "Folder",
		required: true,
		defaultValue: "无",
		valueType: "string",
		description: "钉钉通讯录中的用户ID",
		example:
			"同步设置时使用：\n${dingUserIDForSync}\n\nFetch设置时使用：\n${dingUserIDForFetch}",
	},
	{
		name: "tableID",

		title: "Table ID",
		platforms: ["Airtable", "Vika", "Feishu"],
		level: "Folder",
		required: true,
		defaultValue: "无",
		valueType: "string",
		description: "钉钉通讯录中的用户ID",
		example:
			"同步设置时使用：\n${dingUserIDForSync}\n\nFetch设置时使用：\n${dingUserIDForFetch}",
	},
	{
		name: "viewID",

		title: "View ID",
		platforms: ["Airtable", "Vika", "Feishu"],
		level: "Folder",
		required: true,
		defaultValue: "无",
		valueType: "string",
		description: "钉钉通讯录中的用户ID",
		example:
			"同步设置时使用：\n${dingUserIDForSync}\n\nFetch设置时使用：\n${dingUserIDForFetch}",
	},
];
