export default {
	ACCESS_TOKEN_ROOT_WPS_DESC: "WPS user access token",
	ACCESS_TOKEN_ROOT_WPS_EXAMPLE:
		"When the input is empty, the default will be used:\n${wpsUserTokenForSync}\n\nIf you enter it yourself, please obtain your own user access token in WPS.",
	ACCESS_TOKEN_ROOT_WPS_TITLE: "Access token",
	API_KEY_ROOT_AIRTABLE_DESC:
		'API Key used for syncing to Airtable.\nAirtable"s API Key has been upgraded to a Personal Access Token.\nYou can obtain your Personal Access Token at https://airtable.com/create/tokens.',
	API_KEY_ROOT_AIRTABLE_EXAMPLE:
		"When the input is empty, the default is:\n${airtableAPIKeyForSync}\n\nIf you enter it yourself, please obtain your Personal Access Token from Airtable now.",
	API_KEY_ROOT_AIRTABLE_TITLE: "Airtable PAT key",
	API_KEY_ROOT_VIKA_DESC: "API Key used when syncing to Vika.",
	API_KEY_ROOT_VIKA_EXAMPLE:
		"When the input is empty, the default is:\n${vikaAPIKeyForSync}\n\nIf you enter it yourself, please obtain your API key in the Vika settings.",
	API_KEY_ROOT_VIKA_TITLE: "API key",
	APP_ID_ROOT_DING_DESC: "App ID of a self-built application in DingTalk",
	APP_ID_ROOT_DING_EXAMPLE:
		"When the input is empty, the default is:\n${dingAppIDForSync}\n\nIf you enter it yourself, please obtain your application ID from the self-built application management in DingTalk.",
	APP_ID_ROOT_DING_TITLE: "Application ID",
	APP_ID_ROOT_FEISHU_DESC:
		"When syncing to Feishu, you need to provide the APP ID of your self-built application.",
	APP_ID_ROOT_FEISHU_EXAMPLE:
		"When the input is empty, the default is:\n${feishuAppIDForSync}",
	APP_ID_ROOT_FEISHU_TITLE: "Application ID",
	APP_ID_ROOT_LARK_DESC:
		"When syncing to Lark, you need to provide the APP ID of your self-built application.",
	APP_ID_ROOT_LARK_EXAMPLE:
		"When the input is empty, the default is:\n${larkAppIDForSync}",
	APP_ID_ROOT_LARK_TITLE: "Application ID",
	APP_ID_ROOT_WPS_DESC: "App ID of WPS self-built application",
	APP_ID_ROOT_WPS_EXAMPLE:
		"When the input is empty, the default is:\n${wpsAppIDForSync}",
	APP_ID_ROOT_WPS_TITLE: "Application ID",
	APP_KEY_ROOT_WPS_DESC: "APP key for WPS self-built applications",
	APP_KEY_ROOT_WPS_EXAMPLE:
		"When the input is empty, the default is:\n${wpsAppSecretForSync}",
	APP_KEY_ROOT_WPS_TITLE: "Application Key",
	APP_SECRET_ROOT_DING_DESC: "App key for DingTalk self-built application",
	APP_SECRET_ROOT_DING_EXAMPLE:
		"When the input is empty, the default is:\n${dingAppSecretForSync}",
	APP_SECRET_ROOT_DING_TITLE: "Application Key",
	APP_SECRET_ROOT_FEISHU_DESC:
		"When syncing to Feishu, you need to provide the APP secret of your self-built application.",
	APP_SECRET_ROOT_FEISHU_EXAMPLE:
		"When the input is empty, the default is:\n${feishuAppSecretForSync}",
	APP_SECRET_ROOT_FEISHU_TITLE: "Application Key",
	APP_SECRET_ROOT_LARK_DESC:
		"When syncing to Lark, you need to provide the app secret of your self-built application.",
	APP_SECRET_ROOT_LARK_EXAMPLE:
		"When the input is empty, the default is:\n${larkAppSecretForSync}",
	APP_SECRET_ROOT_LARK_TITLE: "Application Key",
	APP_TOKEN_FOLDER_DESC:
		"Synchronized folder, the appToken used during synchronization.\n\nIf the input is empty, the defaultAppToken will be used by default.\n\nIf you configure a value different from the defaultAppToken, you can synchronize the contents of different folders under the same OB library to different multi-dimensional tables in Feishu.",
	APP_TOKEN_FOLDER_EXAMPLE: "Translation not possible.",
	APP_TOKEN_FOLDER_TITLE:
		'Multidimensional table application Token (equivalent to Airtable"s Base ID)',
	ARRAY_EDIT_BTN_ADD_ITEM: "Add item",
	ARRAY_EDIT_BTN_CANCEL: "Cancel",
	ARRAY_EDIT_BTN_SAVE: "Save",
	ARRAY_EDIT_EMPTY_STATE:
		'The entry is empty. Click "Add Item" to start adding.',
	ARRAY_EDIT_PLACEHOLDER_VALUE: "Value",
	ARRAY_EDIT_TITLE: "Edit ${title}",
	ARRAY_EDIT_TOOLTIP_DELETE: "Delete",
	BASE_ID_FOLDER_AIRTABLE_DESC:
		"Synchronized folder, the database ID used during synchronization.\n\nIf you configure a value different from defaultBaseID, you can synchronize the contents of different folders under the same OB database to different Bases in Airtable.",
	BASE_ID_FOLDER_AIRTABLE_EXAMPLE: "Translation not possible.",
	BASE_ID_FOLDER_AIRTABLE_TITLE: "Database ID",
	BASE_ID_FOLDER_DING_DESC: "Database ID of DingTalk AI Sheets",
	BASE_ID_FOLDER_DING_EXAMPLE: "Translation not possible.",
	BASE_ID_FOLDER_DING_TITLE: "Database ID",
	CONTENT_APPEND_FIELDS_FOLDER_DESC:
		'When synchronizing, you can specify to append the content of specified fields from the multi-dimensional table to the end of the note"s content.\n\nIf multiple fields are specified, the contents of these fields will be merged in the order of the elements in the array, separated by line breaks.\n\nYou can set the name of any field that can return a text value.\n\nIf the field you specify does not exist in the database, an empty text will be returned.',
	CONTENT_APPEND_FIELDS_FOLDER_EXAMPLE:
		"Key points extraction  \nSupplementary questions  \nBackground information",
	CONTENT_APPEND_FIELDS_FOLDER_TITLE: "Additional content",
	CONTENT_APPEND_FIELDS_VAULT_DESC:
		"When synchronization is complete, the content of the specified fields from the multi-dimensional table will be appended to the end of the content in the note.\n\nIf multiple fields are specified, their contents will be merged in the order of the elements in the array, separated by line breaks.\n\nYou can set the name of any field that can return a text value.\n\nIf the field you specify does not exist in the database, an empty text will be returned.",
	CONTENT_APPEND_FIELDS_VAULT_EXAMPLE:
		"Key point extraction, supplementary questions, background information",
	CONTENT_APPEND_FIELDS_VAULT_TITLE: "Additional content",
	CONTENT_FETCH_FIELD_FOLDER_DESC:
		'After synchronization is complete, which field in the multidimensional table should be used to update the content in the notes?\n\nBy default, the "Content" field is used.\n\nYou can set it to any other text field according to your needs. If the field you set does not exist in the multidimensional table, the default field will be used.',
	CONTENT_FETCH_FIELD_FOLDER_EXAMPLE: "AI content",
	CONTENT_FETCH_FIELD_FOLDER_TITLE: "Field used to obtain note content",
	CONTENT_FETCH_FIELD_VAULT_DESC:
		'After synchronization is complete, which field in the multidimensional table should be used to update the content in the notes?\n\nBy default, the "Content" field is used.\n\nYou can set it to any other text field according to your needs. If the field you set does not exist in the multidimensional table, the default field will be used.',
	CONTENT_FETCH_FIELD_VAULT_EXAMPLE: "AI content",
	CONTENT_FETCH_FIELD_VAULT_TITLE: "Field used to retrieve content",
	CUSTOM_FIELDS_FOLDER_DESC:
		"When synchronizing notes in the specified folder, the custom fields used.\n\nCustom fields mainly use the properties of the note, that is, the content in the YAML Frontmatter.\n\nYou can also use property names configured within the note by Dataview, but please note that Dataview properties can only be arrays.\n\nIf you have configured custom fields, you need to ensure that there are fields with the same name in the multidimensional table, and the field types need to match.",
	CUSTOM_FIELDS_FOLDER_EXAMPLE:
		'Project: ["Daily Work"]\nStatus: "Published"\nCourse: "Johnny Learns OB"\nVideoURL: ""\nContent Overview: ""\nAuthor: "Johnny"',
	CUSTOM_FIELDS_FOLDER_TITLE: "Custom Field",
	CUSTOM_FIELDS_OVERRIDE_MODE_FOLDER_DESC:
		"Whether to use the custom fields set in the sync folder to overwrite the custom fields set in the library settings",
	CUSTOM_FIELDS_OVERRIDE_MODE_FOLDER_EXAMPLE: "true",
	CUSTOM_FIELDS_OVERRIDE_MODE_FOLDER_TITLE:
		"Custom fields in the library-level settings are overridden",
	CUSTOM_FIELDS_VAULT_DESC:
		"Custom fields used when synchronizing all notes under the entire library.\n\nNote that the settings here will be inherited by other notes in the library.\n\nIf you set something here but do not want to use these settings in a certain folder,\n\nyou need to enable the option for that folder to override the library-level custom field settings.",
	CUSTOM_FIELDS_VAULT_EXAMPLE:
		'Project: ["Daily Work"]\nStatus: "Published"\nCourse: "Johnny Learns OB"\nVideoURL: ""\nContent Overview: ""\nAuthor: "Johnny"',
	CUSTOM_FIELDS_VAULT_TITLE: "Custom field",
	DEFAULT_APP_TOKEN_ROOT_FEISHU_DESC:
		'When syncing to Feishu, the default is to use the multi-dimensional table"s App Token.\n\nThe App Token for the multi-dimensional table is equivalent to the Base ID in Airtable.',
	DEFAULT_APP_TOKEN_ROOT_FEISHU_EXAMPLE:
		"When the input is empty, the default is:\n${feishuBaseIDForSync}",
	DEFAULT_APP_TOKEN_ROOT_FEISHU_TITLE: "Default Application Token",
	DEFAULT_APP_TOKEN_ROOT_LARK_DESC:
		"When syncing to Lark, the default App Token of the multi-dimensional table is used.\n\nThe App Token in Lark is equivalent to the Base ID in Airtable.",
	DEFAULT_APP_TOKEN_ROOT_LARK_EXAMPLE:
		"When the input is empty, the default is:\n${larkBaseIDForSync}",
	DEFAULT_APP_TOKEN_ROOT_LARK_TITLE: "Default application token",
	DEFAULT_BASE_ID_ROOT_AIRTABLE_DESC:
		"The default Base ID used when syncing to Airtable.",
	DEFAULT_BASE_ID_ROOT_AIRTABLE_EXAMPLE:
		"When the input is empty, the default is:\n${airtableBaseIDForSync}",
	DEFAULT_BASE_ID_ROOT_AIRTABLE_TITLE: "Default Base ID",
	DEFAULT_BASE_ID_ROOT_DING_DESC: "Default Base ID of DingTalk AI Sheets",
	DEFAULT_BASE_ID_ROOT_DING_EXAMPLE:
		"When the input is empty, the default is:\n${dingBaseIDForSync}",
	DEFAULT_BASE_ID_ROOT_DING_TITLE: "Default Base ID",
	DEFAULT_FILE_ID_ROOT_WPS_DESC: "Default WPS Pivot Table File ID",
	DEFAULT_FILE_ID_ROOT_WPS_EXAMPLE:
		"When the input is empty, the default is:\n${wpsBaseIDForSync}",
	DEFAULT_FILE_ID_ROOT_WPS_TITLE: "Default File ID",
	DEFAULT_SHEET_ID_ROOT_DING_DESC:
		"The default data table ID of DingTalk AI Sheets",
	DEFAULT_SHEET_ID_ROOT_DING_EXAMPLE:
		"When the input is empty, the default is:\n${dingTableIDForSync}",
	DEFAULT_SHEET_ID_ROOT_DING_TITLE: "Default data table ID",
	DEFAULT_SHEET_ID_ROOT_WPS_DESC: "Default data table ID of WPS Pivot Table",
	DEFAULT_SHEET_ID_ROOT_WPS_EXAMPLE:
		"When the input is empty, the default is:\n${wpsTableIDForSync}",
	DEFAULT_SHEET_ID_ROOT_WPS_TITLE: "Default data table ID",
	DEFAULT_TABLE_ID_ROOT_AIRTABLE_DESC:
		"The default table ID used when syncing to Airtable.",
	DEFAULT_TABLE_ID_ROOT_AIRTABLE_EXAMPLE:
		"When the input is empty, the default is:\n${airtableTableIDForSync}",
	DEFAULT_TABLE_ID_ROOT_AIRTABLE_TITLE: "Default data table ID",
	DEFAULT_TABLE_ID_ROOT_FEISHU_DESC:
		"The default data table ID used when syncing to Feishu.",
	DEFAULT_TABLE_ID_ROOT_FEISHU_EXAMPLE:
		"When the input is empty, the default is:\n${feishuTableIDForSync}",
	DEFAULT_TABLE_ID_ROOT_FEISHU_TITLE: "Default data table ID",
	DEFAULT_TABLE_ID_ROOT_LARK_DESC:
		"The default data table ID used when syncing to Lark.",
	DEFAULT_TABLE_ID_ROOT_LARK_EXAMPLE:
		"When the input is empty, the default is:\n${larkTableIDForSync}",
	DEFAULT_TABLE_ID_ROOT_LARK_TITLE: "Default data table ID",
	DEFAULT_TABLE_ID_ROOT_VIKA_DESC:
		"The default data table ID used when syncing to Vika.",
	DEFAULT_TABLE_ID_ROOT_VIKA_EXAMPLE:
		"When the input is empty, the default is:\n${vikaTableIDForSync}",
	DEFAULT_TABLE_ID_ROOT_VIKA_TITLE: "Default data table ID",
	DEFAULT_VIEW_ID_ROOT_DING_DESC: "Default view ID of DingTalk AI Sheets",
	DEFAULT_VIEW_ID_ROOT_DING_EXAMPLE:
		"When the input is empty, the default is:\n${dingViewIDForSync}",
	DEFAULT_VIEW_ID_ROOT_DING_TITLE: "Default View ID",
	DOWNLOAD_APP_TOKEN_FOLDER_DESC:
		"In separation mode, the application token (database ID) used when downloading data from Feishu.",
	DOWNLOAD_APP_TOKEN_FOLDER_EXAMPLE: "Translation not possible.",
	DOWNLOAD_APP_TOKEN_FOLDER_TITLE:
		"In separation mode, the application token is used to download data.",
	DOWNLOAD_BASE_ID_FOLDER_AIRTABLE_DESC:
		"In separation mode, the database ID used when downloading data from Airtable.",
	DOWNLOAD_BASE_ID_FOLDER_AIRTABLE_EXAMPLE: "Translation not possible.",
	DOWNLOAD_BASE_ID_FOLDER_AIRTABLE_TITLE:
		"Database ID used for downloading data in separation mode",
	DOWNLOAD_BASE_ID_FOLDER_DING_DESC:
		"In separation mode, the database ID used when downloading data from DingTalk AI Sheets",
	DOWNLOAD_BASE_ID_FOLDER_DING_EXAMPLE: "Translation not possible.",
	DOWNLOAD_BASE_ID_FOLDER_DING_TITLE:
		"In separation mode, the database used for downloading data",
	DOWNLOAD_FILE_ID_FOLDER_WPS_DESC:
		"In separation mode, the file ID used when downloading data from WPS Multi-dimensional Table",
	DOWNLOAD_FILE_ID_FOLDER_WPS_EXAMPLE: "Translation not possible.",
	DOWNLOAD_FILE_ID_FOLDER_WPS_TITLE:
		"File ID used for downloading data in classification mode",
	DOWNLOAD_SHEET_ID_FOLDER_DING_DESC:
		"In separation mode, the data table ID used when downloading data from DingTalk AI Sheets",
	DOWNLOAD_SHEET_ID_FOLDER_DING_EXAMPLE: "Translation not possible.",
	DOWNLOAD_SHEET_ID_FOLDER_DING_TITLE:
		"In classification mode, the data table ID used for downloading data",
	DOWNLOAD_SHEET_ID_FOLDER_WPS_DESC:
		"In separation mode, the data table ID used when downloading data from WPS Multi-dimensional Table",
	DOWNLOAD_SHEET_ID_FOLDER_WPS_EXAMPLE: "4",
	DOWNLOAD_SHEET_ID_FOLDER_WPS_TITLE:
		"In classification mode, the data table ID used for downloading data",
	DOWNLOAD_TABLE_ID_FOLDER_AIRTABLE_DESC:
		"In separation mode, the data table ID used when downloading data from Airtable.",
	DOWNLOAD_TABLE_ID_FOLDER_AIRTABLE_EXAMPLE: "Translation not possible.",
	DOWNLOAD_TABLE_ID_FOLDER_AIRTABLE_TITLE:
		"In separation mode, the data table ID used for downloading data",
	DOWNLOAD_TABLE_ID_FOLDER_DESC:
		"In separation mode, the data table ID used when downloading data from Feishu Bitable.",
	DOWNLOAD_TABLE_ID_FOLDER_EXAMPLE: "Translation not possible.",
	DOWNLOAD_TABLE_ID_FOLDER_TITLE:
		"In separation mode, the data table ID used when downloading data",
	DOWNLOAD_TABLE_ID_FOLDER_VIKA_DESC:
		"In separation mode, the data table ID used when downloading data from Vika multidimensional tables.",
	DOWNLOAD_TABLE_ID_FOLDER_VIKA_EXAMPLE: "Translation not possible.",
	DOWNLOAD_TABLE_ID_FOLDER_VIKA_TITLE:
		"In separation mode, the data table ID used for downloading data",
	DOWNLOAD_VIEW_ID_FOLDER_DING_DESC:
		"In separation mode, the view ID used when downloading data from DingTalk AI Sheets.",
	DOWNLOAD_VIEW_ID_FOLDER_DING_EXAMPLE: "Translation not possible.",
	DOWNLOAD_VIEW_ID_FOLDER_DING_TITLE:
		"In separation mode, the view ID used for downloading data",
	ENABLE_DATE_FILTER_FOR_BATCH_SYNC_FOLDER_DESC:
		"In batch upload or download synchronization mode, should the update date of notes or records be used to filter the notes or records?\n\ntrue means to use the update date for filtering;\nfalse means not to use the update date for filtering.",
	ENABLE_DATE_FILTER_FOR_BATCH_SYNC_FOLDER_EXAMPLE: "false",
	ENABLE_DATE_FILTER_FOR_BATCH_SYNC_FOLDER_TITLE:
		"Date filter function when enabling batch synchronization",
	ENABLE_DATE_FILTER_FOR_BATCH_SYNC_VAULT_DESC:
		"In batch upload or download synchronization mode, should the update date of notes or records be used to filter notes or records?\n\ntrue means to use the update date for filtering;\nfalse means not to use the update date for filtering.",
	ENABLE_DATE_FILTER_FOR_BATCH_SYNC_VAULT_EXAMPLE: "false",
	ENABLE_DATE_FILTER_FOR_BATCH_SYNC_VAULT_TITLE:
		"Enable date filter for batch synchronization",
	ENABLE_UPDATE_FROM_DB_FOLDER_DESC:
		"When synchronization is completed, should the data from the multidimensional table be used to update the note’s custom properties, tags, aliases, and content?\n\ntrue means to use the multidimensional table data for updates;\nfalse means not to use the multidimensional table data for updates.",
	ENABLE_UPDATE_FROM_DB_FOLDER_EXAMPLE: "false",
	ENABLE_UPDATE_FROM_DB_FOLDER_TITLE:
		"Whether to use the data returned by the database to update the content in OB",
	ENABLE_UPDATE_FROM_DB_VAULT_DESC:
		"When synchronization is complete, should data from the multidimensional table be used to update the note’s custom properties, tags, aliases, and content?\n\ntrue means to use data from the multidimensional table for updates;\nfalse means not to use data from the multidimensional table for updates.",
	ENABLE_UPDATE_FROM_DB_VAULT_EXAMPLE: "false",
	ENABLE_UPDATE_FROM_DB_VAULT_TITLE:
		"Whether to use the data returned by the database to update the content in OB",
	ENABLE_UPDATE_PROPERTIES_FROM_DOWLOAD_TABLE_FOLDER_DESC:
		"In separation mode, when downloading data from the configured data table to notes, should the data from the configured data table be used to update the custom properties of the notes set in the current sync folder?\n\ntrue means update;\nfalse means do not update.",
	ENABLE_UPDATE_PROPERTIES_FROM_DOWLOAD_TABLE_FOLDER_EXAMPLE: "false",
	ENABLE_UPDATE_PROPERTIES_FROM_DOWLOAD_TABLE_FOLDER_TITLE:
		"In separation mode, should the data in the download data table be used to update note attributes?",
	ENABLE_UPDATE_PROPERTIES_FROM_DOWLOAD_TABLE_VAULT_DESC:
		"In separation mode, when downloading data from the configured data table to notes, should the data from the configured data table be used to update the custom properties of the notes set in the current sync folder?\n\ntrue means update;\nfalse means do not update.",
	ENABLE_UPDATE_PROPERTIES_FROM_DOWLOAD_TABLE_VAULT_EXAMPLE: "false",
	ENABLE_UPDATE_PROPERTIES_FROM_DOWLOAD_TABLE_VAULT_TITLE:
		"In separation mode, should the data in the download data table be used to update note attributes?",
	EXTRACT_BLOCKS_AS_TEXT_FOLDER_AIRTABLE_DESC:
		"When extracting blocks from notes, should the extracted content be stored as text in the database?\n\nfalse: Store using an array; the field in Airtable needs to be a multi-select field, or you can use a linked record field that allows linking to multiple records.\n\ntrue: Store using text; the field in Airtable needs to be a multi-line text field.",
	EXTRACT_BLOCKS_AS_TEXT_FOLDER_AIRTABLE_EXAMPLE: "false",
	EXTRACT_BLOCKS_AS_TEXT_FOLDER_AIRTABLE_TITLE:
		"Extract block as multi-line text",
	EXTRACT_BLOCKS_AS_TEXT_FOLDER_DESC:
		"When extracting blocks from notes, should the extracted content be stored as text in the database?\n\nfalse: Store using arrays; fields in multi-dimensional tables need to be multi-select fields.\n\ntrue: Store using text; fields in multi-dimensional tables need to be multi-line text fields.",
	EXTRACT_BLOCKS_AS_TEXT_FOLDER_EXAMPLE: "true",
	EXTRACT_BLOCKS_AS_TEXT_FOLDER_TITLE: "Extract block as multi-line text",
	EXTRACT_BLOCKS_AS_TEXT_VAULT_AIRTABLE_DESC:
		"When extracting blocks from notes, should the extracted content be stored as text in the database?\n\nfalse: Store using an array; the field in Airtable needs to be a multiple select or a linked field that allows linking to multiple records.\n\ntrue: Store using text; the field in Airtable needs to be a multi-line text field.",
	EXTRACT_BLOCKS_AS_TEXT_VAULT_AIRTABLE_EXAMPLE: "false",
	EXTRACT_BLOCKS_AS_TEXT_VAULT_AIRTABLE_TITLE:
		"Extract block as multiline text",
	EXTRACT_BLOCKS_AS_TEXT_VAULT_DESC:
		"When extracting blocks from notes, should the extracted content be stored as text in the database?\n\nfalse: Store using arrays; fields in multi-dimensional tables need to be multi-select fields.\ntrue: Store using text; fields in multi-dimensional tables need to be multi-line text fields.",
	EXTRACT_BLOCKS_AS_TEXT_VAULT_EXAMPLE: "true",
	EXTRACT_BLOCKS_AS_TEXT_VAULT_TITLE: "Extract block as multi-line text",
	EXTRACT_BLOCKS_FOLDER_DESC:
		"Extract the content of the specified block into the designated field of the multidimensional table.\n\nThe attribute name is the content before the first hyphen in the block.\nThe attribute value is the name of the field in the multidimensional table where the corresponding block is to be stored.",
	EXTRACT_BLOCKS_FOLDER_EXAMPLE:
		'tips: "Tips",\ncode: "Code",\ntable: "Table",\nmath: "Math",\nquote: "Quote",',
	EXTRACT_BLOCKS_FOLDER_TITLE:
		"Extract the specified block to the specified field",
	EXTRACT_BLOCKS_OVERRIDE_MODE_FOLDER_DESC:
		"Whether to use the extraction block settings in the sync folder to override the extraction block settings at the library level",
	EXTRACT_BLOCKS_OVERRIDE_MODE_FOLDER_EXAMPLE: "true",
	EXTRACT_BLOCKS_OVERRIDE_MODE_FOLDER_TITLE:
		"Enable extraction block overwrite mode",
	EXTRACT_BLOCKS_VAULT_DESC:
		"Extract the content of the specified block into the designated field.\n\nThe attribute name is the content before the first hyphen in the block.\nThe attribute value is the field name in the multidimensional table where the corresponding block is to be stored.",
	EXTRACT_BLOCKS_VAULT_EXAMPLE:
		'tips: "Tips",\ncode: "Code",\ntable: "Table",\nmath: "Math",\nquote: "Quote"',
	EXTRACT_BLOCKS_VAULT_TITLE:
		"Extract the specified block to the specified field",
	EXTRACT_KEY_POINTS_AS_TEXT_FOLDER_AIRTABLE_DESC:
		"When extracting key points from notes, should the extracted content be stored as text in the database?\n\nfalse: Store using an array; the field in Airtable needs to be a multiple select field or a linked record field that allows linking to multiple records.\ntrue: Store using text; the field in Airtable needs to be a multi-line text field.",
	EXTRACT_KEY_POINTS_AS_TEXT_FOLDER_AIRTABLE_EXAMPLE: "false",
	EXTRACT_KEY_POINTS_AS_TEXT_FOLDER_AIRTABLE_TITLE:
		"Extract key points as multi-line text",
	EXTRACT_KEY_POINTS_AS_TEXT_FOLDER_DESC:
		"When extracting key points from notes, should the extracted content be stored as text in the database?\n\nfalse: Store using arrays; fields in multi-dimensional tables need to be multi-select.\ntrue: Store using text; fields in multi-dimensional tables need to be multi-line text fields.",
	EXTRACT_KEY_POINTS_AS_TEXT_FOLDER_EXAMPLE: "true",
	EXTRACT_KEY_POINTS_AS_TEXT_FOLDER_TITLE:
		"Extract key points as multi-line text",
	EXTRACT_KEY_POINTS_AS_TEXT_VAULT_AIRTABLE_DESC:
		"When extracting key points from notes, should the extracted content be stored as text in the database?\n\nfalse: Store using an array; the field in Airtable needs to be a multiple select or a linked record field that allows linking to multiple records.\ntrue: Store using text; the field in Airtable needs to be a multi-line text field.",
	EXTRACT_KEY_POINTS_AS_TEXT_VAULT_AIRTABLE_EXAMPLE: "false",
	EXTRACT_KEY_POINTS_AS_TEXT_VAULT_AIRTABLE_TITLE:
		"Extract key points as multi-line text",
	EXTRACT_KEY_POINTS_AS_TEXT_VAULT_DESC:
		"When extracting key points from notes, should the extracted content be stored as text in the database?\n\nfalse: Store using an array; fields in a multi-dimensional table need to be multi-select.\ntrue: Store using text; fields in a multi-dimensional table need to be multi-line text fields.",
	EXTRACT_KEY_POINTS_AS_TEXT_VAULT_EXAMPLE: "true",
	EXTRACT_KEY_POINTS_AS_TEXT_VAULT_TITLE:
		"Extract key points as multi-line text",
	EXTRACT_KEY_POINTS_FOLDER_DESC:
		'Synchronized folders, special marker content to be extracted during synchronization.\n\nAttribute name: the type name of the special marker.\nAttribute value: the field name in the multidimensional table where the corresponding block is to be stored.\n\nCurrently supported special marker type names are as follows:\n"highlights" Highlight syntax ==text==\n"italics" Italic syntax *text* or _text_\n"strong" Bold syntax **text**\n"bolds" Bold syntax **text** (same effect as strong, use either one)\n"underlines" Underline syntax <u>text</u>\n"deletions" Strikethrough syntax ~~text~~\n"inlineCodes" Inline code syntax `text`\n"singleQuotes" Quote syntax > text\n"boldItalics" Bold italic syntax ***text***\n"urls" URLs',
	EXTRACT_KEY_POINTS_FOLDER_EXAMPLE:
		'highlights: "Doubtful points",\nitalics: "Place names",\nstrong: "Key points",\nunderlines: "Personal names",\ndeletions: "Delete",\ninlineCodes: "Inline code",\nsingleQuotes: "Quotation"',
	EXTRACT_KEY_POINTS_FOLDER_TITLE: "Extract key points",
	EXTRACT_KEY_POINTS_OVERRIDE_MODE_FOLDER_DESC:
		"Whether to use the extraction settings from the synchronized folder to override the extraction settings at the library level.",
	EXTRACT_KEY_POINTS_OVERRIDE_MODE_FOLDER_EXAMPLE: "true",
	EXTRACT_KEY_POINTS_OVERRIDE_MODE_FOLDER_TITLE:
		"Whether to fix the setting for extracting key points at the database level",
	EXTRACT_KEY_POINTS_VAULT_DESC:
		'Special marker content to be extracted during synchronization.\n\nAttribute name: the type name of the special marker.\nAttribute value: the field name in the multidimensional table where the corresponding block is to be stored.\n\nCurrently supported special marker type names are as follows:\n\n"highlights" Highlight syntax ==text==\n"italics" Italic syntax *text* or _text_\n"strong" Bold syntax **text**\n"bolds" Bold syntax **text** (same effect as strong, use either one)\n"underlines" Underline syntax <u>text</u>\n"deletions" Strikethrough syntax ~~text~~\n"inlineCodes" Inline code syntax `text`\n"singleQuotes" Quote syntax > text\n"boldItalics" Bold italic syntax ***text***\n"urls" URL',
	EXTRACT_KEY_POINTS_VAULT_EXAMPLE:
		'highlights: "Doubtful points",\nitalics: "Doubtful points",\nstrong: "Bold",\nunderlines: "Underline",\ndeletions: "Delete",\ninlineCodes: "Inline code",\nsingleQuotes: "Quote"',
	EXTRACT_KEY_POINTS_VAULT_TITLE: "Extract key points from the notes",
	EXTRACT_SECTIONS_AS_TEXT_FOLDER_AIRTABLE_DESC:
		"When extracting specified sections from notes, should the extracted content be stored as text in the database?\n\nfalse: Store using an array; the field in Airtable needs to be a multiple select or a linked field that allows linking to multiple records.\n\ntrue: Store using text; the field in Airtable needs to be a multi-line text field.",
	EXTRACT_SECTIONS_AS_TEXT_FOLDER_AIRTABLE_EXAMPLE: "false",
	EXTRACT_SECTIONS_AS_TEXT_FOLDER_AIRTABLE_TITLE:
		"Extract chapter as multi-line text",
	EXTRACT_SECTIONS_AS_TEXT_FOLDER_DESC:
		"When extracting specified sections from notes, should the extracted content be stored as text in the database?\n\nfalse: Store using arrays; fields in multi-dimensional tables need to be multi-select or linked fields that allow association with multiple records.\n\ntrue: Store using text; fields in multi-dimensional tables need to be multi-line text fields.",
	EXTRACT_SECTIONS_AS_TEXT_FOLDER_EXAMPLE: "true",
	EXTRACT_SECTIONS_AS_TEXT_FOLDER_TITLE: "Extract chapter as multi-line text",
	EXTRACT_SECTIONS_AS_TEXT_VAULT_AIRTABLE_DESC:
		"When extracting specified sections from notes, should the extracted content be stored as text in the database?\n\nfalse: Store using an array; the field in Airtable needs to be a multi-select or a linked field that allows linking to multiple records.\n\ntrue: Store using text; the field in Airtable needs to be a multi-line text field.",
	EXTRACT_SECTIONS_AS_TEXT_VAULT_AIRTABLE_EXAMPLE: "false",
	EXTRACT_SECTIONS_AS_TEXT_VAULT_AIRTABLE_TITLE:
		"Extract chapter as multi-line text",
	EXTRACT_SECTIONS_AS_TEXT_VAULT_DESC:
		"When extracting specified sections from notes, should the extracted content be stored as text in the database?\n\nfalse: Store using an array; fields in a multi-dimensional table need to be multi-select.\n\ntrue: Store using text; fields in a multi-dimensional table need to be multi-line text fields.",
	EXTRACT_SECTIONS_AS_TEXT_VAULT_EXAMPLE: "true",
	EXTRACT_SECTIONS_AS_TEXT_VAULT_TITLE: "Extract chapter as multi-line text",
	EXTRACT_SECTIONS_FOLDER_DESC:
		"Synchronized folder, the specific chapter content you want to extract during synchronization.\n\nAttribute name: the title of the chapter.\nAttribute value: the field name of the chapter you want to store in the multidimensional table.",
	EXTRACT_SECTIONS_FOLDER_EXAMPLE: "Summary",
	EXTRACT_SECTIONS_FOLDER_TITLE: "Extract chapter",
	EXTRACT_SECTIONS_OVERRIDE_MODE_FOLDER_DESC:
		"Whether to use the extract chapter configuration in the sync folder to override the extract chapter configuration in the library-level settings",
	EXTRACT_SECTIONS_OVERRIDE_MODE_FOLDER_EXAMPLE: "true",
	EXTRACT_SECTIONS_OVERRIDE_MODE_FOLDER_TITLE:
		"Whether to extract chapter configuration in the library-level settings",
	EXTRACT_SECTIONS_VAULT_DESC:
		"When synchronizing, the specified chapter content to be extracted.\n\nAttribute name: the title of the chapter.\nAttribute value: the field name in the multidimensional table where the corresponding chapter is to be stored.",
	EXTRACT_SECTIONS_VAULT_EXAMPLE: "Summary",
	EXTRACT_SECTIONS_VAULT_TITLE: "Extract Chapter",
	EXTRACT_TAG_LINES_AS_TEXT_FOLDER_AIRTABLE_DESC:
		"When extracting lines containing specified tags from notes, should the extracted content be stored as text in the database?\n\nfalse: Store using an array; the field in Airtable needs to be a multiple select or a linked record field that allows linking to multiple records.\n\ntrue: Store using text; the field in Airtable needs to be a multi-line text field.",
	EXTRACT_TAG_LINES_AS_TEXT_FOLDER_AIRTABLE_EXAMPLE: "false",
	EXTRACT_TAG_LINES_AS_TEXT_FOLDER_AIRTABLE_TITLE:
		"Extract the specified label row as multi-line text",
	EXTRACT_TAG_LINES_AS_TEXT_FOLDER_DESC:
		"When extracting lines containing specified tags from notes, should the extracted content be stored as text in the database?\n\nfalse: Store using an array; fields in the multi-dimensional table need to be multi-select.\ntrue: Store using text; fields in the multi-dimensional table need to be multi-line text fields.",
	EXTRACT_TAG_LINES_AS_TEXT_FOLDER_EXAMPLE: "true",
	EXTRACT_TAG_LINES_AS_TEXT_FOLDER_TITLE:
		"Extract the specified tag row as multi-line text",
	EXTRACT_TAG_LINES_AS_TEXT_VAULT_AIRTABLE_DESC:
		"When extracting lines containing specified tags from notes, should the extracted content be stored as text in the database?\n\nfalse: Store using an array; the field in Airtable needs to be a multi-select or a linked field that allows linking to multiple records.\n\ntrue: Store using text; the field in Airtable needs to be a multi-line text field.",
	EXTRACT_TAG_LINES_AS_TEXT_VAULT_AIRTABLE_EXAMPLE: "false",
	EXTRACT_TAG_LINES_AS_TEXT_VAULT_AIRTABLE_TITLE:
		"Extract the specified label row as multi-line text",
	EXTRACT_TAG_LINES_AS_TEXT_VAULT_DESC:
		"When extracting lines containing specified tags from notes, should the extracted content be stored as text in the database?\n\nfalse: Store using an array; fields in the multi-dimensional table need to be multi-select fields.\n\ntrue: Store using text; fields in the multi-dimensional table need to be multi-line text fields.",
	EXTRACT_TAG_LINES_AS_TEXT_VAULT_EXAMPLE: "true",
	EXTRACT_TAG_LINES_AS_TEXT_VAULT_TITLE:
		"Extract the specified label row as multi-line text",
	EXTRACT_TAG_LINES_FOLDER_DESC:
		"Synchronized folder: when synchronizing, extract the rows containing the specified tag.\n\nAttribute name: tag name (without the # symbol).\nAttribute value: the field name in the multidimensional table where the corresponding tag is to be stored.",
	EXTRACT_TAG_LINES_FOLDER_EXAMPLE: "FleetingNotes",
	EXTRACT_TAG_LINES_FOLDER_TITLE: "Extract specified label rows",
	EXTRACT_TAG_LINES_OVERRIDE_MODE_FOLDER_DESC:
		"Whether to use the extraction tag configuration in the sync folder to override the extraction tag configuration in the library-level settings",
	EXTRACT_TAG_LINES_OVERRIDE_MODE_FOLDER_EXAMPLE: "true",
	EXTRACT_TAG_LINES_OVERRIDE_MODE_FOLDER_TITLE:
		"Enable overwrite mode for extracting label rows",
	EXTRACT_TAG_LINES_VAULT_DESC:
		"Synchronized folder: when synchronizing, extract the rows containing the specified tag.\n\nAttribute name: tag name (without the # symbol).\nAttribute value: the field name in the multidimensional table where the corresponding tag is to be stored.",
	EXTRACT_TAG_LINES_VAULT_EXAMPLE: "FleetingNotes",
	EXTRACT_TAG_LINES_VAULT_TITLE: "Extract specified label rows",
	FETCH_ACCESS_TOKEN_ROOT_WPS_DESC: "WPS user access token",
	FETCH_ACCESS_TOKEN_ROOT_WPS_EXAMPLE:
		"If the input is empty during setup, the default is:\n${wpsUserTokenForFetch}",
	FETCH_ACCESS_TOKEN_ROOT_WPS_TITLE: "Access token",
	FETCH_API_KEY_ROOT_AIRTABLE_DESC:
		'API Key used to retrieve data from Airtable.\nAirtable"s API Key has been upgraded to a Personal Access Token.\nYou can obtain your Personal Access Token at https://airtable.com/create/tokens.',
	FETCH_API_KEY_ROOT_AIRTABLE_EXAMPLE:
		"When the input is empty, the default is:\n${airtableAPIKeyForFetch}\n\nIf you enter it yourself, please obtain your Personal Access Token from Airtable now.",
	FETCH_API_KEY_ROOT_AIRTABLE_TITLE: "Airtable PAT key",
	FETCH_API_KEY_ROOT_VIKA_DESC:
		"When obtaining data from Vika, you must provide a corresponding API Key.",
	FETCH_API_KEY_ROOT_VIKA_EXAMPLE:
		"When the input is empty, the default is:\n${vikaAPIKeyForFetch}\n\nIf you enter it yourself, please obtain your API key in the Vika settings.",
	FETCH_API_KEY_ROOT_VIKA_TITLE: "API key",
	FETCH_APP_ID_ROOT_DING_DESC:
		"When obtaining data from DingTalk, you need to provide the App ID of your self-built application.",
	FETCH_APP_ID_ROOT_DING_EXAMPLE:
		"When the input is empty, the default is:\n${dingAppIDForFetch}\n\nIf you enter it yourself, please obtain your application ID from the self-built application management in DingTalk.",
	FETCH_APP_ID_ROOT_DING_TITLE: "Application ID",
	FETCH_APP_ID_ROOT_FEISHU_DESC:
		"When retrieving data from Feishu, you need to provide the APP ID of your self-built application.",
	FETCH_APP_ID_ROOT_FEISHU_EXAMPLE:
		"When the input is empty, the default is:\n${feishuAppIDForFetch}",
	FETCH_APP_ID_ROOT_FEISHU_TITLE: "Application ID",
	FETCH_APP_ID_ROOT_LARK_DESC:
		"When retrieving data from Lark, you need to provide the APP ID of your self-built application.",
	FETCH_APP_ID_ROOT_LARK_EXAMPLE:
		"When the input is empty, the default is:\n${larkAppIDForFetch}",
	FETCH_APP_ID_ROOT_LARK_TITLE: "Application ID",
	FETCH_APP_ID_ROOT_WPS_DESC:
		"When obtaining data from WPS, you need to provide the App ID of your self-built application.",
	FETCH_APP_ID_ROOT_WPS_EXAMPLE:
		"When the input is empty, the default is:\n${wpsAppIDForFetch}",
	FETCH_APP_ID_ROOT_WPS_TITLE: "Application ID",
	FETCH_APP_KEY_ROOT_WPS_DESC:
		"When obtaining data from WPS, you need to provide the app key of your self-built application.",
	FETCH_APP_KEY_ROOT_WPS_EXAMPLE:
		"When the input is empty, the default is:\n${wpsAppSecretForFetch}",
	FETCH_APP_KEY_ROOT_WPS_TITLE: "Application Key",
	FETCH_APP_SECRET_ROOT_DING_DESC:
		"When obtaining data from DingTalk, you need to provide the App secret of your self-built application.",
	FETCH_APP_SECRET_ROOT_DING_EXAMPLE:
		"When the input is empty, the default is:\n${dingAppSecretForFetch}",
	FETCH_APP_SECRET_ROOT_DING_TITLE: "Application Key",
	FETCH_APP_SECRET_ROOT_FEISHU_DESC:
		"When obtaining data from Feishu, you need to provide the APP secret of your self-built application.",
	FETCH_APP_SECRET_ROOT_FEISHU_EXAMPLE:
		"When the input is empty, the default is:\n${feishuAppSecretForFetch}",
	FETCH_APP_SECRET_ROOT_FEISHU_TITLE: "Application Key",
	FETCH_APP_SECRET_ROOT_LARK_DESC:
		"When retrieving data from Lark, you need to provide the APP secret of your self-built application.",
	FETCH_APP_SECRET_ROOT_LARK_EXAMPLE:
		"When the input is empty, the default is:\n${larkAppSecretForFetch}",
	FETCH_APP_SECRET_ROOT_LARK_TITLE: "Application Key",
	FETCH_APP_TOKEN_FOLDER_DESC:
		"The appToken used when retrieving data.\n\nIf the input is empty, the defaultAppToken will be used by default.",
	FETCH_APP_TOKEN_FOLDER_EXAMPLE: "Translation not possible.",
	FETCH_APP_TOKEN_FOLDER_TITLE: "Application Token",
	FETCH_BASE_ID_FOLDER_AIRTABLE_DESC:
		"The database ID of the data source. If it is empty, the default defaultBaseID will be used.",
	FETCH_BASE_ID_FOLDER_AIRTABLE_EXAMPLE: "Translation not possible.",
	FETCH_BASE_ID_FOLDER_AIRTABLE_TITLE: "Database ID",
	FETCH_DEFAULT_APP_TOKEN_ROOT_FEISHU_DESC:
		"When retrieving data from Feishu, the default is to use the user token of the multi-dimensional table.\n\nThe app token of the multi-dimensional table is equivalent to the Base ID in Airtable.",
	FETCH_DEFAULT_APP_TOKEN_ROOT_FEISHU_EXAMPLE:
		"When the input is empty, the default is:\n${feishuBaseIDForFetch}",
	FETCH_DEFAULT_APP_TOKEN_ROOT_FEISHU_TITLE: "Default Application Token",
	FETCH_DEFAULT_APP_TOKEN_ROOT_LARK_DESC:
		"When retrieving data from Lark, the default is to use the App Token of the multi-dimensional table.\n\nThe App Token of the multi-dimensional table is equivalent to the Base ID in Airtable.",
	FETCH_DEFAULT_APP_TOKEN_ROOT_LARK_EXAMPLE:
		"When the input is empty, the default is:\n${larkBaseIDForFetch}",
	FETCH_DEFAULT_APP_TOKEN_ROOT_LARK_TITLE: "Default application token",
	FETCH_DEFAULT_BASE_ID_ROOT_AIRTABLE_DESC:
		"The default Base ID used when retrieving data from Airtable.",
	FETCH_DEFAULT_BASE_ID_ROOT_AIRTABLE_EXAMPLE:
		"When the input is empty, the default is:\n${airtableBaseIDForFetch}",
	FETCH_DEFAULT_BASE_ID_ROOT_AIRTABLE_TITLE: "Default Base ID",
	FETCH_DEFAULT_BASE_ID_ROOT_DING_DESC:
		"The default Base ID of the AI spreadsheet used when obtaining data from DingTalk",
	FETCH_DEFAULT_BASE_ID_ROOT_DING_EXAMPLE:
		"When the input is empty, the default is:\n${dingBaseIDForFetch}",
	FETCH_DEFAULT_BASE_ID_ROOT_DING_TITLE: "Default Base ID",
	FETCH_DEFAULT_FILE_ID_ROOT_WPS_DESC:
		"The default multidimensional table file ID used when obtaining data from WPS",
	FETCH_DEFAULT_FILE_ID_ROOT_WPS_EXAMPLE:
		"When the input is empty, the default is:\n${wpsBaseIDForFetch}",
	FETCH_DEFAULT_FILE_ID_ROOT_WPS_TITLE: "Default File ID",
	FETCH_DEFAULT_SHEET_ID_ROOT_DING_DESC:
		"The default data table ID of the AI spreadsheet used when obtaining data from DingTalk",
	FETCH_DEFAULT_SHEET_ID_ROOT_DING_EXAMPLE:
		"When the input is empty, the default is:\n${dingTableIDForFetch}",
	FETCH_DEFAULT_SHEET_ID_ROOT_DING_TITLE: "Default data table ID",
	FETCH_DEFAULT_SHEET_ID_ROOT_WPS_DESC:
		"The default data table ID used when obtaining data from WPS",
	FETCH_DEFAULT_SHEET_ID_ROOT_WPS_EXAMPLE:
		"When the input is empty, the default is:\n${wpsTableIDForFetch}",
	FETCH_DEFAULT_SHEET_ID_ROOT_WPS_TITLE: "Default data table ID",
	FETCH_DEFAULT_TABLE_ID_ROOT_AIRTABLE_DESC:
		"The default table ID used when retrieving data from Airtable.",
	FETCH_DEFAULT_TABLE_ID_ROOT_AIRTABLE_EXAMPLE:
		"When the input is empty, the default is:\n${airtableTableIDForFetch}",
	FETCH_DEFAULT_TABLE_ID_ROOT_AIRTABLE_TITLE: "Default data table ID",
	FETCH_DEFAULT_TABLE_ID_ROOT_FEISHU_DESC:
		"The default data table ID used when retrieving data from Feishu.",
	FETCH_DEFAULT_TABLE_ID_ROOT_FEISHU_EXAMPLE:
		"When the input is empty, the default is:\n${feishuTableIDForFetch}",
	FETCH_DEFAULT_TABLE_ID_ROOT_FEISHU_TITLE: "Default data table ID",
	FETCH_DEFAULT_TABLE_ID_ROOT_LARK_DESC:
		"The default data table ID used when retrieving data from Lark.",
	FETCH_DEFAULT_TABLE_ID_ROOT_LARK_EXAMPLE:
		"When the input is empty, the default is:\n${larkTableIDForFetch}",
	FETCH_DEFAULT_TABLE_ID_ROOT_LARK_TITLE: "Default data table ID",
	FETCH_DEFAULT_TABLE_ID_ROOT_VIKA_DESC:
		"The default table ID used when retrieving data from Vika.",
	FETCH_DEFAULT_TABLE_ID_ROOT_VIKA_EXAMPLE:
		"When the input is empty, the default is:\n${vikaTableIDForFetch}",
	FETCH_DEFAULT_TABLE_ID_ROOT_VIKA_TITLE: "Default data table ID",
	FETCH_DEFAULT_VIEW_ID_ROOT_DING_DESC:
		"When obtaining data from DingTalk, the default view ID used is that of the AI spreadsheet.",
	FETCH_DEFAULT_VIEW_ID_ROOT_DING_EXAMPLE:
		"When the input is empty, the default is:\n${dingViewIDForFetch}",
	FETCH_DEFAULT_VIEW_ID_ROOT_DING_TITLE: "Default View ID",
	FETCH_GENERATOR_VIEW_BTN_ADD_FOLDER: "Add folder settings",
	FETCH_GENERATOR_VIEW_BTN_BROWSE: "Browse",
	FETCH_GENERATOR_VIEW_BTN_GENERATE: "Generate script",
	FETCH_GENERATOR_VIEW_BTN_IMPORT_TEMPLATE: "Import Template",
	FETCH_GENERATOR_VIEW_BTN_LOAD_DEFAULT: "Load default template",
	FETCH_GENERATOR_VIEW_BTN_PRESETS: "Load Preset",
	FETCH_GENERATOR_VIEW_BTN_REMOVE: "Remove",
	FETCH_GENERATOR_VIEW_BTN_SAVE_PRESET: "Save Preset",
	FETCH_GENERATOR_VIEW_DESC_PLACEHOLDER:
		"Select a setting to view its description here.",
	FETCH_GENERATOR_VIEW_DESC_TITLE: "Explanation",
	FETCH_GENERATOR_VIEW_EXAMPLE_USAGE_TITLE: "Example/Usage:",
	FETCH_GENERATOR_VIEW_FOLDER_HEADER_PREFIX: "Folder",
	FETCH_GENERATOR_VIEW_NOTICE_IMPORTED:
		"Settings have been imported from ${file}",
	FETCH_GENERATOR_VIEW_NOTICE_LOAD_FAILED:
		"Failed to load default template: ${error}",
	FETCH_GENERATOR_VIEW_NOTICE_NO_DEFAULT:
		"No default template has been configured for this platform.",
	FETCH_GENERATOR_VIEW_NOTICE_NO_PLATFORM:
		"Unable to detect the platform in the template.",
	FETCH_GENERATOR_VIEW_NOTICE_TEMPLATE_NOT_FOUND:
		"Template file not found: ${path}",
	FETCH_GENERATOR_VIEW_PLATFORMS_TITLE: "Platform",
	FETCH_GENERATOR_VIEW_SETTINGS_SUFFIX: "Settings",
	FETCH_GENERATOR_VIEW_SETTINGS_TITLE_SUFFIX: "Get Settings",
	FETCH_GENERATOR_VIEW_TAB_FOLDER: "Folder-level",
	FETCH_GENERATOR_VIEW_TAB_VAULT: "Vault-level",
	FETCH_GENERATOR_VIEW_TAB_ROOT: "Necessary",
	FETCH_GENERATOR_VIEW_TARGET_FOLDER_DESC:
		"The path of the target folder where you want to obtain the data.",
	FETCH_GENERATOR_VIEW_TARGET_FOLDER_EXAMPLE:
		"Example: MyVault/Projects/Active",
	FETCH_GENERATOR_VIEW_TARGET_FOLDER_NAME: "Target folder",
	FETCH_GENERATOR_VIEW_TARGET_FOLDER_PLACEHOLDER: "Target folder path",
	FETCH_GENERATOR_VIEW_TITLE: "Data Acquisition Script Generator",
	FETCH_PRESET_MANAGER_BTN_CLOSE: "Close",
	FETCH_PRESET_MANAGER_BTN_DELETE: "Delete",
	FETCH_PRESET_MANAGER_BTN_LOAD: "Loading",
	FETCH_PRESET_MANAGER_CONFIRM_DELETE:
		'Are you sure you want to delete the preset "${name}"?',
	FETCH_PRESET_MANAGER_LOAD_EMPTY:
		"No preset has been saved yet. Save the configuration to create your first preset.",
	FETCH_PRESET_MANAGER_LOAD_TITLE: "Load preset",
	FETCH_PRESET_MANAGER_NOTICE_DELETED: 'Preset "${name}" has been deleted',
	FETCH_PRESET_MANAGER_NOTICE_DUPLICATE:
		"A preset with this name already exists. Please use a different name.",
	FETCH_PRESET_MANAGER_NOTICE_ENTER_NAME: "Please enter a preset name",
	FETCH_PRESET_MANAGER_NOTICE_LOADED: 'Preset "${name}" loaded',
	FETCH_PRESET_MANAGER_NOTICE_SAVED:
		'Preset "${name}" has been successfully saved',
	FETCH_PRESET_MANAGER_SAVE_BTN: "Save Preset",
	FETCH_PRESET_MANAGER_SAVE_PLACEHOLDER:
		'Preset Name (e.g., "Airtable Fetch Production")',
	FETCH_PRESET_MANAGER_SAVE_TITLE: "Save current configuration",
	FETCH_PRESET_MANAGER_TAB_LOAD: "Load Preset",
	FETCH_PRESET_MANAGER_TAB_SAVE: "Save Preset",
	FETCH_PRESET_MANAGER_TITLE: "Data acquisition configuration preset",
	FETCH_SOURCE_NAME_FOLDER_DESC: "User-defined data source name",
	FETCH_SOURCE_NAME_FOLDER_EXAMPLE: "My fleeting thoughts",
	FETCH_SOURCE_NAME_FOLDER_TITLE: "Data source name",
	FETCH_TABLE_ID_FOLDER_DESC:
		"The data table ID of the data source. If left blank, the defaultTableID will be used.",
	FETCH_TABLE_ID_FOLDER_EXAMPLE: "Translation not possible.",
	FETCH_TABLE_ID_FOLDER_TITLE: "Table ID",
	FETCH_TARGET_FOLDER_FOLDER_DESC:
		"Folder path for storing and retrieving data",
	FETCH_TARGET_FOLDER_FOLDER_EXAMPLE: "2-Output/My Flash Thoughts",
	FETCH_TARGET_FOLDER_FOLDER_TITLE: "Target folder",
	FETCH_USER_ID_ROOT_DING_DESC:
		"When obtaining data from DingTalk, the user ID from the address book is used by default.",
	FETCH_USER_ID_ROOT_DING_EXAMPLE:
		"When the input is empty, the default is:\n${dingUserIDForFetch}",
	FETCH_USER_ID_ROOT_DING_TITLE: "User ID",
	FETCH_VAULT_FIELDS_NAMES_DESC:
		'Use this field to configure the default field names for data retrieval in the multidimensional table.\n\nThe configurable default fields and their default values are as follows:\n\nextension: "Extension",\nsubFolder: "Subfolder",\nfetchContentFrom: "Content",\nfetchTitleFrom: "Title",\nupdatedTime: "Update Time",',
	FETCH_VAULT_FIELDS_NAMES_EXAMPLE: "Translation not possible.",
	FETCH_VAULT_FIELDS_NAMES_TITLE: "Get field name by default",
	FETCH_VIEW_ID_FOLDER_DESC: "View ID for obtaining data",
	FETCH_VIEW_ID_FOLDER_EXAMPLE: "Translation not possible.",
	FETCH_VIEW_ID_FOLDER_TITLE: "View ID",
	FIELDS_NAMES_VAULT_DESC:
		'Use this field to configure the field names of the default synchronization fields used in the multidimensional table.\n\nThe configurable default fields and their default values are as follows:\n\ntitle: "Title",\ncontent: "Content",\ntags: "Tags",\naliases: "Aliases",\ncreatedTime: "Created Time",\nupdatedTime: "Updated Time",\npath: "Path",\nvault: "Vault",\nfullContent: "Full Content",\nobsidianURI: "OBURI",',
	FIELDS_NAMES_VAULT_EXAMPLE:
		'{\ntitle: "Title",\npath: "Path",\ncontent: "Content"\n}',
	FIELDS_NAMES_VAULT_TITLE: "Default synchronized field name",
	FILE_ID_FOLDER_WPS_DESC: "WPS multidimensional table file ID",
	FILE_ID_FOLDER_WPS_EXAMPLE: "Translation not possible.",
	FILE_ID_FOLDER_WPS_TITLE: "Document ID",
	FM_FETCH_FIELDS_FOLDER_DESC:
		"When synchronization is complete, retrieve the value of the corresponding field from the multidimensional table according to the specified value and store it in the properties section of the note.",
	FM_FETCH_FIELDS_FOLDER_EXAMPLE:
		"Key point extraction  \nSupplementary questions  \nBackground information",
	FM_FETCH_FIELDS_FOLDER_TITLE:
		"Obtain the fields of the note attribute area",
	FM_FETCH_FIELDS_OVERRIDE_MODE_FOLDER_DESC:
		"Whether to use the attribute in the sync folder to obtain field configuration and override the fmFetchFields setting in the library-level settings",
	FM_FETCH_FIELDS_OVERRIDE_MODE_FOLDER_EXAMPLE: "true",
	FM_FETCH_FIELDS_OVERRIDE_MODE_FOLDER_TITLE:
		"Enable attribute acquisition field override mode",
	FM_FETCH_FIELDS_VAULT_DESC:
		"When synchronization is complete, retrieve the value of the corresponding field from the multidimensional table according to the specified value and store it in the properties section of the note.",
	FM_FETCH_FIELDS_VAULT_EXAMPLE:
		"Key point extraction  \nAdditional questions  \nBackground information",
	FM_FETCH_FIELDS_VAULT_TITLE: "Attribute acquisition field",
	FOLDER_NAME_FOLDER_DESC: "The full path of the synchronized folder.",
	FOLDER_NAME_FOLDER_EXAMPLE: "Demo/Notes",
	FOLDER_NAME_FOLDER_TITLE: "Folder path",
	GENERATOR_VIEW_BTN_ADD_FOLDER: "Add folder settings",
	GENERATOR_VIEW_BTN_BROWSE: "Browse",
	GENERATOR_VIEW_BTN_GENERATE: "Generate synchronization script",
	GENERATOR_VIEW_BTN_IMPORT_TEMPLATE: "Import Template",
	GENERATOR_VIEW_BTN_LOAD_DEFAULT: "Load default template",
	GENERATOR_VIEW_BTN_PRESETS: "Load Preset",
	GENERATOR_VIEW_BTN_REMOVE: "Remove",
	GENERATOR_VIEW_BTN_SAVE_PRESET: "Save Preset",
	GENERATOR_VIEW_DESC_PLACEHOLDER:
		"Select a setting to view the instructions here.",
	GENERATOR_VIEW_DESC_TITLE: "Explanation",
	GENERATOR_VIEW_EXAMPLE_USAGE_TITLE: "Example/Usage:",
	GENERATOR_VIEW_FOLDER_LABEL: "Folder",
	GENERATOR_VIEW_FOLDER_PATH_DESC: "The folder path you want to sync.",
	GENERATOR_VIEW_FOLDER_PATH_EXAMPLE: "Example: MyVault/Projects/Active",
	GENERATOR_VIEW_FOLDER_PATH_NAME: "Folder path",
	GENERATOR_VIEW_GROUP_ADVANCED: "Advanced",
	GENERATOR_VIEW_GROUP_BASIC: "Foundation",
	GENERATOR_VIEW_GROUP_EXTRACT: "Extract",
	GENERATOR_VIEW_GROUP_OTHER: "Others",
	GENERATOR_VIEW_NOTICE_IMPORTED: "Settings have been imported from ${file}",
	GENERATOR_VIEW_NOTICE_LOAD_FAILED:
		"Failed to load default template: ${error}",
	GENERATOR_VIEW_NOTICE_NO_DEFAULT:
		"No default template has been configured for this platform.",
	GENERATOR_VIEW_NOTICE_NO_PLATFORM:
		"Unable to detect the platform in the template.",
	GENERATOR_VIEW_NOTICE_TEMPLATE_NOT_FOUND:
		"Template file not found: ${path}",
	GENERATOR_VIEW_PLATFORMS_TITLE: "Platform",
	GENERATOR_VIEW_SETTINGS_SUFFIX: "Settings",
	GENERATOR_VIEW_TAB_FOLDER: "Folder",
	GENERATOR_VIEW_TAB_ROOT: "Necessary",
	GENERATOR_VIEW_TAB_VAULT: "Library level",
	GENERATOR_VIEW_TITLE: "Synchronous Script Generator",
	GENERATOR_VIEW_TOOLTIP_EDIT_ARRAY: "Edit array",
	GENERATOR_VIEW_TOOLTIP_EDIT_OBJECT: "Edit object",
	INCLUDES_TAGS_IN_CONTENT_FOLDER_DESC:
		"When updating the tag attributes of a note, should the tags within the note content be included?\n\ntrue means included;\nfalse means not included.",
	INCLUDES_TAGS_IN_CONTENT_FOLDER_EXAMPLE: "true",
	INCLUDES_TAGS_IN_CONTENT_FOLDER_TITLE:
		'Include the tags from the content in the note"s tag attributes',
	INCLUDES_TAGS_IN_CONTENT_VAULT_DESC:
		"When updating the tag attributes of a note, should the tags within the note content be included?\n\ntrue means included;\nfalse means not included.",
	INCLUDES_TAGS_IN_CONTENT_VAULT_EXAMPLE: "true",
	INCLUDES_TAGS_IN_CONTENT_VAULT_TITLE:
		'Include the tags from the content in the note"s tag attributes',
	JUST_UPDATE_FROM_DB_FOLDER_DESC:
		"Whether to display only download options in the sync options.\n\ntrue: Only download options are displayed;\nfalse: Download and other options are displayed.",
	JUST_UPDATE_FROM_DB_FOLDER_EXAMPLE: "true",
	JUST_UPDATE_FROM_DB_FOLDER_TITLE:
		"Only display the option to download from the database to OB",
	JUST_UPDATE_FROM_DB_VAULT_DESC:
		"Whether to display only the download option in the sync options.\n\ntrue means only the download option is shown;\nfalse means both download and other options are shown.",
	JUST_UPDATE_FROM_DB_VAULT_EXAMPLE: "true",
	JUST_UPDATE_FROM_DB_VAULT_TITLE:
		"Only display the option to download from the database to OB",
	MAIN_CMD_OPEN_FETCH: "Open the script generator",
	MAIN_CMD_OPEN_SYNC: "Open the synchronization script generator",
	MAIN_RIBBON_FETCH: "Obtain script generator",
	MAIN_RIBBON_SYNC: "Synchronous Script Generator",
	OBJECT_EDIT_BTN_ADD_ENTRY: "Add entry",
	OBJECT_EDIT_BTN_CANCEL: "Cancel",
	OBJECT_EDIT_BTN_SAVE: "Save",
	OBJECT_EDIT_EMPTY_STATE: 'No entries yet. Click "Add Entry" to add one.',
	OBJECT_EDIT_PLACEHOLDER_KEY: "Key",
	OBJECT_EDIT_PLACEHOLDER_VALUE: "Value",
	OBJECT_EDIT_TITLE: "Edit ${title}",
	OBJECT_EDIT_TOOLTIP_DELETE: "Delete",
	OBJECT_EDIT_TOOLTIP_OPEN_ARRAY_EDITOR: "Open Array Editor",
	OBJECT_EDIT_TYPE_ARRAY: "Array",
	OBJECT_EDIT_TYPE_BOOLEAN: "Boolean value",
	OBJECT_EDIT_TYPE_NUMBER: "Number",
	OBJECT_EDIT_TYPE_STRING: "String",
	PRESET_MANAGER_BTN_CLOSE: "Close",
	PRESET_MANAGER_BTN_DELETE: "Delete",
	PRESET_MANAGER_BTN_LOAD: "Loading",
	PRESET_MANAGER_CONFIRM_DELETE:
		'Are you sure you want to delete the preset "${name}"?',
	PRESET_MANAGER_LOAD_EMPTY:
		"No preset has been saved yet. Save the configuration to create your first preset.",
	PRESET_MANAGER_LOAD_TITLE: "Load Preset",
	PRESET_MANAGER_NOTICE_DELETED: 'Preset "${name}" has been deleted',
	PRESET_MANAGER_NOTICE_DUPLICATE:
		"A preset with this name already exists. Please use a different name.",
	PRESET_MANAGER_NOTICE_ENTER_NAME: "Please enter a preset name",
	PRESET_MANAGER_NOTICE_LOADED: 'Preset "${name}" loaded',
	PRESET_MANAGER_NOTICE_SAVED: 'Preset "${name}" has been successfully saved',
	PRESET_MANAGER_SAVE_BTN: "Save preset",
	PRESET_MANAGER_SAVE_PLACEHOLDER:
		'Preset name (for example: "Airtable Production")',
	PRESET_MANAGER_SAVE_TITLE: "Save current configuration",
	PRESET_MANAGER_TAB_LOAD: "Load preset",
	PRESET_MANAGER_TAB_SAVE: "Save Preset",
	PRESET_MANAGER_TITLE: "Preset configuration",
	PULL_CONTENT_ONLY_FOLDER_DESC:
		"When retrieving content from the database to notes, should only the note content be fetched, without fetching the note attributes?",
	PULL_CONTENT_ONLY_FOLDER_EXAMPLE: "false",
	PULL_CONTENT_ONLY_FOLDER_TITLE:
		"Only retrieve note content from the database",
	SCRIPT_PREVIEW_BTN_COPY: "Copy to clipboard",
	SCRIPT_PREVIEW_BTN_MAXIMIZE: "Maximize",
	SCRIPT_PREVIEW_BTN_RESTORE: "Restore",
	SCRIPT_PREVIEW_BTN_SAVE_AS: "Save as file",
	SCRIPT_PREVIEW_BTN_UPDATE: "Update ${file}",
	SCRIPT_PREVIEW_NOTICE_COPIED: "Copied to clipboard",
	SCRIPT_PREVIEW_NOTICE_SAVED: "Saved to the database as ${file}",
	SCRIPT_PREVIEW_NOTICE_UPDATED: "Updated ${path}",
	SCRIPT_PREVIEW_TITLE: "Generated script",
	SECTION_HEADING_WHOLE_MATCH_FOLDER_DESC:
		"When extracting specified sections from notes, should the exact match mode for specified titles be used?\n\nfalse: Do not use exact match; as long as the note title contains the specified title content, it will be extracted.\ntrue: Use exact match; only when the note title is exactly the same as the specified title content will it be extracted.",
	SECTION_HEADING_WHOLE_MATCH_FOLDER_EXAMPLE: "true",
	SECTION_HEADING_WHOLE_MATCH_FOLDER_TITLE:
		"Enable exact match mode for chapter titles",
	SECTION_HEADING_WHOLE_MATCH_VAULT_DESC:
		"When extracting specified sections from notes, should the exact match mode for specified titles be used?\n\nfalse: Do not use exact match; as long as the note title contains the specified title content, it will be extracted.\ntrue: Use exact match; only when the note title is exactly the same as the specified title content will it be extracted.",
	SECTION_HEADING_WHOLE_MATCH_VAULT_EXAMPLE: "true",
	SECTION_HEADING_WHOLE_MATCH_VAULT_TITLE:
		"Enable exact match mode for chapter titles",
	SEPARATE_MODE_FOLDER_DESC:
		"Whether to use separation mode for synchronization.\n\ntrue: Use separation mode  \nfalse: Do not use separation mode\n\nIf you choose to use separation mode, you also need to set the downloadTableID for the synchronization data table used in separation mode.\n\nIf you are using Airtable synchronization, you can also set the downloadBaseID.\n\nIf you are using Feishu synchronization, you can also set the downloadAppToken.\n\nIf you are using Vika synchronization, you only need to set the downloadTableID.",
	SEPARATE_MODE_FOLDER_EXAMPLE: "false",
	SEPARATE_MODE_FOLDER_TITLE: "Separation mode",
	SETTINGS_BTN_BROWSE: "Browse",
	SETTINGS_DEFAULT_FETCH_TEMPLATE_DESC:
		"Default data acquisition template file path for the ${platform} platform",
	SETTINGS_DEFAULT_FETCH_TEMPLATE_NAME:
		"${platform} default data acquisition template",
	SETTINGS_DEFAULT_FETCH_TEMPLATES_DESC:
		"Set default data acquisition template files for each platform. These templates will be used when importing acquisition configurations.",
	SETTINGS_DEFAULT_FETCH_TEMPLATES_TITLE: "Default data retrieval template",
	SETTINGS_DEFAULT_SYNC_TEMPLATES_DESC:
		"Set default template files for each platform. These templates will be used when importing configurations.",
	SETTINGS_DEFAULT_SYNC_TEMPLATES_TITLE: "Default sync template",
	SETTINGS_DEFAULT_TEMPLATE_DESC:
		"Default template file path for the ${platform} platform",
	SETTINGS_DEFAULT_TEMPLATE_NAME: "${platform} Default Template",
	SETTINGS_DEFAULT_TEMPLATE_PLACEHOLDER: "No template selected",
	SETTINGS_SYNC_PLATFORM_DESC: "Select synchronization platform",
	SETTINGS_SYNC_PLATFORM_NAME: "Synchronization platform",
	SETTINGS_TOOLTIP_CLEAR: "Clear",
	SHEET_ID_FOLDER_DING_DESC: "DingTalk AI Spreadsheet Data Table ID",
	SHEET_ID_FOLDER_DING_EXAMPLE: "Translation not possible.",
	SHEET_ID_FOLDER_DING_TITLE: "Table ID",
	SHEET_ID_FOLDER_WPS_DESC: "WPS multidimensional table data table ID",
	SHEET_ID_FOLDER_WPS_EXAMPLE: "4",
	SHEET_ID_FOLDER_WPS_TITLE: "Table ID",
	SHOW_DELETE_OPTION_FOLDER_DESC:
		"Whether to display the delete option in the synchronization options.\n\ntrue means display;\nfalse means do not display.",
	SHOW_DELETE_OPTION_FOLDER_EXAMPLE: "false",
	SHOW_DELETE_OPTION_FOLDER_TITLE: "Show delete option in the sync panel",
	SHOW_DELETE_OPTION_VAULT_DESC:
		"Whether to display the delete option in the synchronization options.\n\ntrue means display;\nfalse means do not display.",
	SHOW_DELETE_OPTION_VAULT_EXAMPLE: "false",
	SHOW_DELETE_OPTION_VAULT_TITLE: "Show delete option in the sync panel",
	SORT_FRONT_MATTER_PROPERTIES_FOLDER_DESC:
		"After synchronization is complete, should the properties section of the note be sorted? (Sorting is done in ascending order according to the phonetic order of the property names.)\n\ntrue means sorting;\nfalse means not sorting.",
	SORT_FRONT_MATTER_PROPERTIES_FOLDER_EXAMPLE: "false",
	SORT_FRONT_MATTER_PROPERTIES_FOLDER_TITLE:
		"Sort the attribute values of the notes",
	SORT_FRONT_MATTER_PROPERTIES_VAULT_DESC:
		"After synchronization is complete, should the properties section of the note be sorted? (Sorting is done in ascending order according to the phonetic order of the property names.)\n\ntrue means sorting;\nfalse means not sorting.",
	SORT_FRONT_MATTER_PROPERTIES_VAULT_EXAMPLE: "false",
	SORT_FRONT_MATTER_PROPERTIES_VAULT_TITLE:
		"Sort the attribute values of the notes",
	SYNC_CONTENT_FOLDER_DESC:
		"When synchronizing notes, should the content of the notes be synchronized to the multidimensional table?\n\ntrue means synchronize;\nfalse means do not synchronize.",
	SYNC_CONTENT_FOLDER_EXAMPLE: "false",
	SYNC_CONTENT_FOLDER_TITLE:
		"Whether to sync the content of notes to the multidimensional table",
	SYNC_CONTENT_VAULT_DESC:
		"When synchronizing notes, should the content of the notes be synchronized to the multidimensional table?\n\ntrue means synchronize;\nfalse means do not synchronize.",
	SYNC_CONTENT_VAULT_EXAMPLE: "false",
	SYNC_CONTENT_VAULT_TITLE:
		"Sync the contents of the notes to the multidimensional table or not",
	SYNC_FULL_CONTENT_FOLDER_DESC:
		'Whether to synchronize the content, including the attribute area (Frontmatter), to the multidimensional table.\n\ntrue means synchronize;\nfalse means do not synchronize.\n\nIf set to true, your multidimensional table needs to have a field named "Full Text" to receive the corresponding content.',
	SYNC_FULL_CONTENT_FOLDER_EXAMPLE: "true",
	SYNC_FULL_CONTENT_FOLDER_TITLE:
		"Synchronized complete note content, including the attribute area",
	SYNC_FULL_CONTENT_VAULT_DESC:
		'Whether to synchronize the content, including the attribute area (Frontmatter), to the multidimensional table.\n\ntrue means synchronize;\nfalse means do not synchronize.\n\nIf set to true, your multidimensional table needs to have a field named "Full Text" to receive the corresponding content.',
	SYNC_FULL_CONTENT_VAULT_EXAMPLE: "true",
	SYNC_FULL_CONTENT_VAULT_TITLE:
		"Synchronized complete note content, including the attribute area",
	SYNC_MODE_FOLDER_DESC:
		'When setting up synchronization, should the corresponding record in the database be searched by the note’s title or by the record ID in the note?\n\n"id": Search by ID  \n"title": Search by note title\n\nIn separated mode, if set to "id":\nIf it is upload mode, the {Multi-dimensional Table} RecordID in the note will be used to query in the upload Table, such as airtableRecordID.\n\nIf it is download mode, the {Multi-dimensional Table} DownloadRecordID in the note will be used to query in the upload Table, such as airtableDownloadRecordID.',
	SYNC_MODE_FOLDER_EXAMPLE: "Title",
	SYNC_MODE_FOLDER_TITLE: "Synchronous mode",
	SYNC_MODE_VAULT_DESC:
		'When synchronizing, should the corresponding record in the database be searched by the note’s title or by the record ID in the note?\n\n"id" means searching by ID\n"title" means searching by note title\n\nIn separated mode, if set to "id":\nIf it is upload mode, the {Multi-dimensional Table} RecordID in the note will be used to search in the upload Table, such as airtableRecordID.\n\nIf it is download mode, the {Multi-dimensional Table} DownloadRecordID in the note will be used to search in the upload Table, such as airtableDownloadRecordID.',
	SYNC_MODE_VAULT_EXAMPLE: "Title",
	SYNC_MODE_VAULT_TITLE: "Synchronous mode",
	SYNC_OPTIONS_FOLDER_DESC:
		"When synchronization is triggered, the following synchronization options are displayed.\n1: Upload the current note to the multidimensional table\n2: Upload outbound links in the current note to the multidimensional table\n3: Upload the current note and its outbound links to the multidimensional table\n4: Upload notes in the current folder to the multidimensional table\n5: Upload notes in the current folder and its subfolders to the multidimensional table\n6: Upload notes with specified tags to the multidimensional table\n7: Upload notes with specified attribute values to the multidimensional table\n8: Upload search results to the multidimensional table\n9: Upload all IOO notes to the multidimensional table (may take a long time)\n11: Download content from the multidimensional table to the current note\n12: Download content from the multidimensional table to outbound links in the current note\n13: Download content from the multidimensional table to the current note and its outbound links\n14: Download content from the multidimensional table to notes in the current folder\n15: Download content from the multidimensional table to notes in the current folder and its subfolders\n21: Delete the current note and its record in the multidimensional table",
	SYNC_OPTIONS_FOLDER_EXAMPLE: "[1, 2, 3, 4, 5, 6]",
	SYNC_OPTIONS_FOLDER_TITLE: "Options displayed in the synchronization panel",
	SYNC_OPTIONS_VAULT_DESC:
		"When synchronization is triggered, the following synchronization options are displayed.\n1: Upload the current note to the multidimensional table\n2: Upload the outbound links in the current note to the multidimensional table\n3: Upload the current note and its outbound links to the multidimensional table\n4: Upload the notes in the current folder to the multidimensional table\n5: Upload the notes in the current folder and its subfolders to the multidimensional table\n6: Upload notes with specified tags to the multidimensional table\n7: Upload notes with specified attribute values to the multidimensional table\n8: Upload search results to the multidimensional table\n9: Upload all IOO notes to the multidimensional table (may take a long time)\n11: Download content from the multidimensional table to the current note\n12: Download content from the multidimensional table to the outbound links in the current note\n13: Download content from the multidimensional table to the current note and its outbound links\n14: Download content from the multidimensional table to the notes in the current folder\n15: Download content from the multidimensional table to the notes in the current folder and its subfolders\n21: Delete the current note and its record in the multidimensional table",
	SYNC_OPTIONS_VAULT_EXAMPLE: "[1, 2, 3, 4]",
	SYNC_OPTIONS_VAULT_TITLE: "Options displayed in the synchronization panel",
	TABLE_ID_FOLDER_AIRTABLE_DESC:
		"Synchronized folder, the Airtable tableID used during synchronization.\n\nWhen not using separation mode, both uploading and downloading will use the tableID.\n\nIf separation mode is used, the tableID is only used during uploading.",
	TABLE_ID_FOLDER_AIRTABLE_EXAMPLE: "Translation not possible.",
	TABLE_ID_FOLDER_AIRTABLE_TITLE: "Table ID",
	TABLE_ID_FOLDER_DESC:
		"Synchronized folder, the tableID of the Feishu multi-dimensional table used during synchronization.\n\nWhen not using separation mode, both uploading and downloading will use the tableID.\n\nIf separation mode is used, the tableID is only used during uploading.",
	TABLE_ID_FOLDER_EXAMPLE: "Translation not possible.",
	TABLE_ID_FOLDER_TITLE: "Table ID",
	TABLE_ID_FOLDER_VIKA_DESC:
		"Synchronized folder, the tableID of Vika used during synchronization.\n\nWhen not using separation mode, both uploading and downloading will use the tableID.\n\nIf separation mode is used, the tableID is only used during uploading.",
	TABLE_ID_FOLDER_VIKA_EXAMPLE: "Translation not possible.",
	TABLE_ID_FOLDER_VIKA_TITLE: "Table ID",
	USE_TITLE_IN_DB_FOLDER_DESC:
		"When synchronizing, should the title in the synchronization database always be used as the note title? If this attribute is set to True, the note title in OB will no longer be synchronized to the database.",
	USE_TITLE_IN_DB_FOLDER_EXAMPLE: "true",
	USE_TITLE_IN_DB_FOLDER_TITLE: "Use the titles from the database",
	USE_TITLE_IN_DB_VAULT_DESC:
		"When synchronizing, should the title in the synchronization database always be used as the note title? If this property is set to True, the note title in OB will no longer be synchronized to the database.",
	USE_TITLE_IN_DB_VAULT_EXAMPLE: "true",
	USE_TITLE_IN_DB_VAULT_TITLE: "Use the title from the database record",
	USER_ID_ROOT_DING_DESC: "User ID in the DingTalk address book",
	USER_ID_ROOT_DING_EXAMPLE:
		"If the input is empty, the default is:\n${dingUserIDForSync}",
	USER_ID_ROOT_DING_TITLE: "User ID",
	VIEW_ID_FOLDER_DING_DESC: "View ID of DingTalk AI Sheets",
	VIEW_ID_FOLDER_DING_EXAMPLE: "Translation not possible.",
	VIEW_ID_FOLDER_DING_TITLE: "View ID",
};
