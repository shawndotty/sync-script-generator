export default {
	ACCESS_TOKEN_ROOT_WPS_DESC: "WPS的用户访问令牌",
	ACCESS_TOKEN_ROOT_WPS_EXAMPLE:
		"当输入为空时，会默认使用：\n${wpsUserTokenForSync}\n\n如果自行输入，请在WPS中获取自己的用户访问令牌\n",
	ACCESS_TOKEN_ROOT_WPS_TITLE: "访问令牌",
	API_KEY_ROOT_AIRTABLE_DESC:
		"同步到Airtable使用的API Key。\nAirtable的API Key，已经升级为Personal Access Token。\n你可以在 https://airtable.com/create/tokens 获取你的 Personal Access Token。",
	API_KEY_ROOT_AIRTABLE_EXAMPLE:
		"输入为空时，默认使用：\n${airtableAPIKeyForSync}\n\n如果自行输入，请现在Airtable中获取你的Personal Access Token",
	API_KEY_ROOT_AIRTABLE_TITLE: "Airtable PAT密钥",
	API_KEY_ROOT_VIKA_DESC: "同步到Vika时，使用的API Key。",
	API_KEY_ROOT_VIKA_EXAMPLE:
		"输入为空时，默认使用：\n${vikaAPIKeyForSync}\n\n如果自行输入，请在Vika设置中获取你的API密钥",
	API_KEY_ROOT_VIKA_TITLE: "API密钥",
	APP_ID_ROOT_DING_DESC: "钉钉中自建应用的App ID",
	APP_ID_ROOT_DING_EXAMPLE:
		"输入为空时，默认使用：\n${dingAppIDForSync}\n\n如果自行输入，请在钉钉的自建应用管理中获取你的应用ID",
	APP_ID_ROOT_DING_TITLE: "应用ID",
	APP_ID_ROOT_FEISHU_DESC: "同步到飞书时，需要提供自建应用的APP ID",
	APP_ID_ROOT_FEISHU_EXAMPLE: "输入为空时，默认使用：\n${feishuAppIDForSync}",
	APP_ID_ROOT_FEISHU_TITLE: "应用ID",
	APP_ID_ROOT_LARK_DESC: "同步到Lark时，需要提供自建应用的APP ID",
	APP_ID_ROOT_LARK_EXAMPLE: "输入为空时，默认使用：\n${larkAppIDForSync}",
	APP_ID_ROOT_LARK_TITLE: "应用ID",
	APP_ID_ROOT_WPS_DESC: "WPS自建应用的App ID",
	APP_ID_ROOT_WPS_EXAMPLE: "输入为空时，默认使用：\n${wpsAppIDForSync}",
	APP_ID_ROOT_WPS_TITLE: "应用ID",
	APP_KEY_ROOT_WPS_DESC: "WPS自建应用的APP密钥",
	APP_KEY_ROOT_WPS_EXAMPLE: "输入为空时，默认使用：\n${wpsAppSecretForSync}",
	APP_KEY_ROOT_WPS_TITLE: "应用密钥",
	APP_SECRET_ROOT_DING_DESC: "钉钉自建应用的App密钥",
	APP_SECRET_ROOT_DING_EXAMPLE:
		"输入为空时，默认使用：\n${dingAppSecretForSync}",
	APP_SECRET_ROOT_DING_TITLE: "应用密钥",
	APP_SECRET_ROOT_FEISHU_DESC: "同步到飞书时，需要提供自建应用的APP密钥",
	APP_SECRET_ROOT_FEISHU_EXAMPLE:
		"输入为空时，默认使用：\n${feishuAppSecretForSync}",
	APP_SECRET_ROOT_FEISHU_TITLE: "应用密钥",
	APP_SECRET_ROOT_LARK_DESC: "同步到Lark时，需要提供自建应用的APP密钥",
	APP_SECRET_ROOT_LARK_EXAMPLE:
		"输入为空时，默认使用：\n${larkAppSecretForSync}",
	APP_SECRET_ROOT_LARK_TITLE: "应用密钥",
	APP_TOKEN_FOLDER_DESC:
		"同步文件夹，在同步时所使用的appToken。\n\n如果输入为空，默认使用defaultAppToken\n\n如果你配置了不同于defaultAppToken的值，则可以实现把同一个OB库下的不同文件夹的内容同步到飞书中不同的多维表。",
	APP_TOKEN_FOLDER_EXAMPLE: "JsTgbO9xxxxxXJsjtGtceTlBnoG",
	APP_TOKEN_FOLDER_TITLE: "多维表应用Token（相当于Airtable的Base ID）",
	ARRAY_EDIT_BTN_ADD_ITEM: "添加项",
	ARRAY_EDIT_BTN_CANCEL: "取消",
	ARRAY_EDIT_BTN_SAVE: "保存",
	ARRAY_EDIT_EMPTY_STATE: "条目为空。点击“添加项”开始添加。",
	ARRAY_EDIT_PLACEHOLDER_VALUE: "值",
	ARRAY_EDIT_TITLE: "编辑 ${title}",
	ARRAY_EDIT_TOOLTIP_DELETE: "删除",
	BASE_ID_FOLDER_AIRTABLE_DESC:
		"同步文件夹，在同步时所使用的数据库ID。\n\n如果你配置了不同于defaultBaseID的值，则可以实现把同一个OB库下的不同文件夹的内容，同步到Airtable中不同的Base。",
	BASE_ID_FOLDER_AIRTABLE_EXAMPLE: "appq2MxxxxBdZc3Sc",
	BASE_ID_FOLDER_AIRTABLE_TITLE: "数据库ID",
	BASE_ID_FOLDER_DING_DESC: "钉钉AI表格的数据库ID",
	BASE_ID_FOLDER_DING_EXAMPLE: "pYLaezmVNevBvvEYfgjpva3nWrMqPxX6",
	BASE_ID_FOLDER_DING_TITLE: "数据库ID",
	CONTENT_APPEND_FIELDS_FOLDER_DESC:
		"在同步时，你可以指定在笔记的内容后面附加多维表中的指定字段的内容。\n\n如果指定了多个字段，这些字段的内容，将按照数组中的元素顺序通过换行进行合并。\n\n你可以设置任意能返回文本值的字段的名称。\n\n当你指定的字段在数据库中不存在时，将返回空文本。",
	CONTENT_APPEND_FIELDS_FOLDER_EXAMPLE:
		'["要点提取", "问题补充", "背景信息"]',
	CONTENT_APPEND_FIELDS_FOLDER_TITLE: "附加内容",
	CONTENT_APPEND_FIELDS_VAULT_DESC:
		"在同步完成时，在笔记中内容后面附加多维表中的指定字段的内容。\n\n如果指定了多个字段，这些字段的内容，将按照数组中的元素顺序通过换行进行合并。\n\n你可以设置任意能返回文本值的字段的名称。\n\n当你指定的字段在数据库中不存在时，将返回空文本。",
	CONTENT_APPEND_FIELDS_VAULT_EXAMPLE: '["要点提取", "问题补充", "背景信息"]',
	CONTENT_APPEND_FIELDS_VAULT_TITLE: "附加内容",
	CONTENT_FETCH_FIELD_FOLDER_DESC:
		'在同步完成后，使用多维表中的哪个字段来更新笔记中的内容。\n\n默认使用"内容"字段。\n\n你可以根据自己的需求，设置为其他任何文本字段，如果你设置的字段在多维表中不存在，将使用默认字段。',
	CONTENT_FETCH_FIELD_FOLDER_EXAMPLE: "AI内容",
	CONTENT_FETCH_FIELD_FOLDER_TITLE: "获取笔记内容使用的字段",
	CONTENT_FETCH_FIELD_VAULT_DESC:
		'在同步完成后，使用多维表中的哪个字段来更新笔记中的内容。\n\n默认使用"内容"字段。\n\n你可以根据自己的需求，设置为其他任何文本字段，如果你设置的字段在多维表中不存在，将使用默认字段。',
	CONTENT_FETCH_FIELD_VAULT_EXAMPLE: "AI内容",
	CONTENT_FETCH_FIELD_VAULT_TITLE: "获取内容时使用的字段",
	CUSTOM_FIELDS_FOLDER_DESC:
		"在同步指定文件夹下的笔记时，所使用使用的自定义字段。\n\n自定义字段主要使用的笔记的属性，也就是YAML Frontmatter中的内容。\n\n你也可以使用Dataview配置的笔记内的属性名，但是请注意，Dataview的属性只能是数组型。\n\n如果你配置了自定义字段，需要确保在多维表中有同样名字的字段，并且字段类型需要匹配。",
	CUSTOM_FIELDS_FOLDER_EXAMPLE:
		'{\nProject: ["日常工作"],\nStatus: "Published",\nCourse: "Johnny学OB",\nVideoURL: "",\n内容概览: "",\nAuthor: "Johnny"\n}',
	CUSTOM_FIELDS_FOLDER_TITLE: "自定义字段",
	CUSTOM_FIELDS_OVERRIDE_MODE_FOLDER_DESC:
		"是否使用同步文件夹下的设置的自定义字段覆盖库级设置中的自定义字段",
	CUSTOM_FIELDS_OVERRIDE_MODE_FOLDER_EXAMPLE: "true",
	CUSTOM_FIELDS_OVERRIDE_MODE_FOLDER_TITLE: "覆盖库级设置中的自定义字段",
	CUSTOM_FIELDS_VAULT_DESC:
		"同步整个库下面的笔记时，所使用的自定义字段。\n\n注意这里的设置，会被库中其他的笔记继承。\n\n如果你在这里进行了设置，但是在某个文件夹下又不想使用这些设置。\n\n你需要开启那个文件夹的覆盖库级自定义字段的设置。",
	CUSTOM_FIELDS_VAULT_EXAMPLE:
		'{\nProject: ["日常工作"],\nStatus: "Published",\nCourse: "Johnny学OB",\nVideoURL: "",\n内容概览: "",\nAuthor: "Johnny"\n}',
	CUSTOM_FIELDS_VAULT_TITLE: "自定义字段",
	DEFAULT_APP_TOKEN_ROOT_FEISHU_DESC:
		"同步到飞书时，默认使用的多维表的App Token。\n\n多维表的App Token，相当于Airtable中的Base ID。",
	DEFAULT_APP_TOKEN_ROOT_FEISHU_EXAMPLE:
		"输入为空时，默认使用：\n${feishuBaseIDForSync}",
	DEFAULT_APP_TOKEN_ROOT_FEISHU_TITLE: "默认应用Token",
	DEFAULT_APP_TOKEN_ROOT_LARK_DESC:
		"同步到Lark时，默认使用的多维表的App Token。\n\nLark的App Token，相当于Airtable中的Base ID。",
	DEFAULT_APP_TOKEN_ROOT_LARK_EXAMPLE:
		"输入为空时，默认使用：\n${larkBaseIDForSync}",
	DEFAULT_APP_TOKEN_ROOT_LARK_TITLE: "默认应用Token",
	DEFAULT_BASE_ID_ROOT_AIRTABLE_DESC: "同步到Airtable时，默认使用的Base ID。",
	DEFAULT_BASE_ID_ROOT_AIRTABLE_EXAMPLE:
		"输入为空时，默认使用：\n${airtableBaseIDForSync}",
	DEFAULT_BASE_ID_ROOT_AIRTABLE_TITLE: "默认Base ID",
	DEFAULT_BASE_ID_ROOT_DING_DESC: "钉钉AI表格的默认Base ID",
	DEFAULT_BASE_ID_ROOT_DING_EXAMPLE:
		"输入为空时，默认使用：\n${dingBaseIDForSync}",
	DEFAULT_BASE_ID_ROOT_DING_TITLE: "默认Base ID",
	DEFAULT_FILE_ID_ROOT_WPS_DESC: "默认的WPS多维表文件ID",
	DEFAULT_FILE_ID_ROOT_WPS_EXAMPLE:
		"输入为空时，默认使用：\n${wpsBaseIDForSync}",
	DEFAULT_FILE_ID_ROOT_WPS_TITLE: "默认文件ID",
	DEFAULT_SHEET_ID_ROOT_DING_DESC: "钉钉AI表格的默认数据表ID",
	DEFAULT_SHEET_ID_ROOT_DING_EXAMPLE:
		"输入为空时，默认使用：\n${dingTableIDForSync}",
	DEFAULT_SHEET_ID_ROOT_DING_TITLE: "默认数据表ID",
	DEFAULT_SHEET_ID_ROOT_WPS_DESC: "WPS多维表的默认数据表ID",
	DEFAULT_SHEET_ID_ROOT_WPS_EXAMPLE:
		"输入为空时，默认使用：\n${wpsTableIDForSync}",
	DEFAULT_SHEET_ID_ROOT_WPS_TITLE: "默认数据表ID",
	DEFAULT_TABLE_ID_ROOT_AIRTABLE_DESC:
		"同步到Airtable时，默认使用的数据表ID。",
	DEFAULT_TABLE_ID_ROOT_AIRTABLE_EXAMPLE:
		"输入为空时，默认使用：\n${airtableTableIDForSync}",
	DEFAULT_TABLE_ID_ROOT_AIRTABLE_TITLE: "默认数据表ID",
	DEFAULT_TABLE_ID_ROOT_FEISHU_DESC: "同步到飞书时，默认使用的数据表ID。",
	DEFAULT_TABLE_ID_ROOT_FEISHU_EXAMPLE:
		"输入为空时，默认使用：\n${feishuTableIDForSync}",
	DEFAULT_TABLE_ID_ROOT_FEISHU_TITLE: "默认数据表ID",
	DEFAULT_TABLE_ID_ROOT_LARK_DESC: "同步到Lark时，默认使用的数据表ID。",
	DEFAULT_TABLE_ID_ROOT_LARK_EXAMPLE:
		"输入为空时，默认使用：\n${larkTableIDForSync}",
	DEFAULT_TABLE_ID_ROOT_LARK_TITLE: "默认数据表ID",
	DEFAULT_TABLE_ID_ROOT_VIKA_DESC: "同步到Vika时，默认使用的数据表ID。",
	DEFAULT_TABLE_ID_ROOT_VIKA_EXAMPLE:
		"输入为空时，默认使用：\n${vikaTableIDForSync}",
	DEFAULT_TABLE_ID_ROOT_VIKA_TITLE: "默认数据表ID",
	DEFAULT_VIEW_ID_ROOT_DING_DESC: "钉钉AI表格的默认视图ID",
	DEFAULT_VIEW_ID_ROOT_DING_EXAMPLE:
		"输入为空时，默认使用：\n${dingViewIDForSync}",
	DEFAULT_VIEW_ID_ROOT_DING_TITLE: "默认视图ID",
	DOWNLOAD_APP_TOKEN_FOLDER_DESC:
		"在分离模式下，从飞书下载数据时，所使用的应用Token（数据库ID）。",
	DOWNLOAD_APP_TOKEN_FOLDER_EXAMPLE: "JsTgbO9xxxxxXJsjtGtceTlBnoG",
	DOWNLOAD_APP_TOKEN_FOLDER_TITLE: "分离模式下，下载数据使用的应用Token",
	DOWNLOAD_BASE_ID_FOLDER_AIRTABLE_DESC:
		"分离模式下，从Airtable下载数据时，所使用的数据库ID。",
	DOWNLOAD_BASE_ID_FOLDER_AIRTABLE_EXAMPLE: "appq2MxxxxBdZc3Sc",
	DOWNLOAD_BASE_ID_FOLDER_AIRTABLE_TITLE:
		"分离模式下，下载数据使用的数据库ID",
	DOWNLOAD_BASE_ID_FOLDER_DING_DESC:
		"分离模式下，从钉钉AI表格下载数据时使用的数据库ID",
	DOWNLOAD_BASE_ID_FOLDER_DING_EXAMPLE: "pYLaezmVNevBvvEYfgjpva3nWrMqPxX6",
	DOWNLOAD_BASE_ID_FOLDER_DING_TITLE: "分离模式下，下载数据使用的数据库",
	DOWNLOAD_FILE_ID_FOLDER_WPS_DESC:
		"分离模式下，从WPS多维表下载数据时，使用的文件ID",
	DOWNLOAD_FILE_ID_FOLDER_WPS_EXAMPLE: "cmLlHZY7Iyg7",
	DOWNLOAD_FILE_ID_FOLDER_WPS_TITLE: "分类模式下，下载数据使用的文件ID",
	DOWNLOAD_SHEET_ID_FOLDER_DING_DESC:
		"分离模式下，从钉钉AI表格下载数据时，使用的数据表ID",
	DOWNLOAD_SHEET_ID_FOLDER_DING_EXAMPLE: "rnkKzcV",
	DOWNLOAD_SHEET_ID_FOLDER_DING_TITLE: "分类模式下，下载数据使用的数据表ID",
	DOWNLOAD_SHEET_ID_FOLDER_WPS_DESC:
		"分离模式下，从WPS多维表下载数据时，使用的数据表ID",
	DOWNLOAD_SHEET_ID_FOLDER_WPS_EXAMPLE: "4",
	DOWNLOAD_SHEET_ID_FOLDER_WPS_TITLE: "分类模式下，下载数据使用的数据表ID",
	DOWNLOAD_TABLE_ID_FOLDER_AIRTABLE_DESC:
		"分离模式下，从Airtable下载数据时，使用的数据表ID。",
	DOWNLOAD_TABLE_ID_FOLDER_AIRTABLE_EXAMPLE: "tblWIExxxxxQSDUz4",
	DOWNLOAD_TABLE_ID_FOLDER_AIRTABLE_TITLE:
		"分离模式下，下载数据使用的数据表ID",
	DOWNLOAD_TABLE_ID_FOLDER_DESC:
		"分离模式下，从飞书多维表下载数据时，所使用的数据表ID。",
	DOWNLOAD_TABLE_ID_FOLDER_EXAMPLE: "tblor4xxxxx54AZD",
	DOWNLOAD_TABLE_ID_FOLDER_TITLE: "分离模式下，下载数据时使用的数据表ID",
	DOWNLOAD_TABLE_ID_FOLDER_VIKA_DESC:
		"分离模式下，从Vika多维表下载数据时，所使用的数据表ID。",
	DOWNLOAD_TABLE_ID_FOLDER_VIKA_EXAMPLE: "dstl4fxxxxxWzoh51x",
	DOWNLOAD_TABLE_ID_FOLDER_VIKA_TITLE: "分离模式下，下载数据使用的数据表ID",
	DOWNLOAD_VIEW_ID_FOLDER_DING_DESC:
		"分离模式下，从钉钉AI表格下载数据时，所使用的的视图ID。",
	DOWNLOAD_VIEW_ID_FOLDER_DING_EXAMPLE: "JYP28Be",
	DOWNLOAD_VIEW_ID_FOLDER_DING_TITLE: "分离模式下，下载数据使用的视图ID",
	ENABLE_DATE_FILTER_FOR_BATCH_SYNC_FOLDER_DESC:
		"在批量上传或者下载的同步模式下，是否使用笔记或者记录的更新日期对笔记或记录进行筛选。\n\ntrue 为使用更新日期进行筛选；\nfalse 为不使用更新日期进行筛选。",
	ENABLE_DATE_FILTER_FOR_BATCH_SYNC_FOLDER_EXAMPLE: "false",
	ENABLE_DATE_FILTER_FOR_BATCH_SYNC_FOLDER_TITLE:
		"启用批量同步时的日期筛选功能",
	ENABLE_DATE_FILTER_FOR_BATCH_SYNC_VAULT_DESC:
		"在批量上传或者下载的同步模式下，是否使用笔记或者记录的更新日期对笔记或记录进行筛选。\n\ntrue 为使用更新日期进行筛选；\nfalse 为不使用更新日期进行筛选。",
	ENABLE_DATE_FILTER_FOR_BATCH_SYNC_VAULT_EXAMPLE: "false",
	ENABLE_DATE_FILTER_FOR_BATCH_SYNC_VAULT_TITLE: "启用批量同步的日期筛选功能",
	ENABLE_UPDATE_FROM_DB_FOLDER_DESC:
		"在同步完成时，是否使用多维表中的数据来更新笔记的自定义属性、标签、别名、以及笔记的内容。\n\nture 为使用多维表数据进行更新；\nfalse 为不使用多维表数据进行更新。",
	ENABLE_UPDATE_FROM_DB_FOLDER_EXAMPLE: "false",
	ENABLE_UPDATE_FROM_DB_FOLDER_TITLE:
		"是否使用数据库返回的数据更新OB中的内容",
	ENABLE_UPDATE_FROM_DB_VAULT_DESC:
		"在同步完成时，是否使用多维表中的数据来更新笔记的自定义属性、标签、别名、以及笔记的内容。\n\nture 为使用多维表数据进行更新；\nfalse 为不使用多维表数据进行更新。",
	ENABLE_UPDATE_FROM_DB_VAULT_EXAMPLE: "false",
	ENABLE_UPDATE_FROM_DB_VAULT_TITLE: "是否使用数据库返回的数据更新OB中的内容",
	ENABLE_UPDATE_PROPERTIES_FROM_DOWLOAD_TABLE_FOLDER_DESC:
		"在分离模式下，当从配置的数据表中下载数据到笔记时，是否使用所配置载数据表中的数据，去更新当前同步文件夹所设置的笔记的自定义属性。\n\ntrue 为更新；\nfalse 为不更新。",
	ENABLE_UPDATE_PROPERTIES_FROM_DOWLOAD_TABLE_FOLDER_EXAMPLE: "false",
	ENABLE_UPDATE_PROPERTIES_FROM_DOWLOAD_TABLE_FOLDER_TITLE:
		"分离模式下，是否使用下载数据表中的数据更新笔记属性",
	ENABLE_UPDATE_PROPERTIES_FROM_DOWLOAD_TABLE_VAULT_DESC:
		"在分离模式下，当从配置的数据表中下载数据到笔记时，是否使用所配置数据表中的数据，去更新当前同步文件夹所设置的笔记的自定义属性。\n\ntrue 为更新；\nfalse 为不更新。",
	ENABLE_UPDATE_PROPERTIES_FROM_DOWLOAD_TABLE_VAULT_EXAMPLE: "false",
	ENABLE_UPDATE_PROPERTIES_FROM_DOWLOAD_TABLE_VAULT_TITLE:
		"分离模式下，是否使用下载数据表中的数据更新笔记属性",
	EXTRACT_BLOCKS_AS_TEXT_FOLDER_AIRTABLE_DESC:
		"从笔记中提取区块时，是否将提取的内容作为文本在数据库中存储。\n\nfalse: 使用数组进行存储，Airtable中的字段需要是多选字段，也可以用允许关联多项记录的关联字段\n\ntrue: 使用文本进行存储，Airtable中的字段需要是多行文本字段",
	EXTRACT_BLOCKS_AS_TEXT_FOLDER_AIRTABLE_EXAMPLE: "false",
	EXTRACT_BLOCKS_AS_TEXT_FOLDER_AIRTABLE_TITLE: "提取区块为多行文本",
	EXTRACT_BLOCKS_AS_TEXT_FOLDER_DESC:
		"从笔记中提取区块时，是否将提取的内容作为文本在数据库中存储。\n\nfalse: 使用数组进行存储，多维表的字段需要是多选字段\n\ntrue: 使用文本进行存储，多维表中的字段需要是多行文本字段",
	EXTRACT_BLOCKS_AS_TEXT_FOLDER_EXAMPLE: "true",
	EXTRACT_BLOCKS_AS_TEXT_FOLDER_TITLE: "提取区块为多行文本",
	EXTRACT_BLOCKS_AS_TEXT_VAULT_AIRTABLE_DESC:
		"从笔记中提取区块时，是否将提取的内容作为文本在数据库中存储。\n\nfalse: 使用数组进行存储，Airtable中的字段需要是多选或者允许关联多项记录的关联字段。\n\ntrue: 使用文本进行存储，Airtable中的字段需要是多行文本字段。",
	EXTRACT_BLOCKS_AS_TEXT_VAULT_AIRTABLE_EXAMPLE: "false",
	EXTRACT_BLOCKS_AS_TEXT_VAULT_AIRTABLE_TITLE: "提取区块为多行文本",
	EXTRACT_BLOCKS_AS_TEXT_VAULT_DESC:
		"从笔记中提取区块时，是否将提取的内容作为文本在数据库中存储。\n\nfalse: 使用数组进行存储，多维表的字段需要是多选字段\ntrue: 使用文本进行存储，多维表中的字段需要是多行文本字段",
	EXTRACT_BLOCKS_AS_TEXT_VAULT_EXAMPLE: "true",
	EXTRACT_BLOCKS_AS_TEXT_VAULT_TITLE: "提取区块为多行文本",
	EXTRACT_BLOCKS_FOLDER_DESC:
		"把指定区块的内容提取到多维表中的指定字段。\n\n属性名，为区块中第一个连字符之前的内容。\n属性值，是对应区块在多维表中想要存储的字段名。",
	EXTRACT_BLOCKS_FOLDER_EXAMPLE:
		'{\ntips: "提示",\ncode: "代码",\ntable: "表格",\nmath: "数学",\nquote: "引言",\n}',
	EXTRACT_BLOCKS_FOLDER_TITLE: "提取指定区块到指定字段",
	EXTRACT_BLOCKS_OVERRIDE_MODE_FOLDER_DESC:
		"是否使用同步文件夹下的提取区块设置，覆盖库级设置中的提取区块设置",
	EXTRACT_BLOCKS_OVERRIDE_MODE_FOLDER_EXAMPLE: "true",
	EXTRACT_BLOCKS_OVERRIDE_MODE_FOLDER_TITLE: "开启提取区块的覆盖模式",
	EXTRACT_BLOCKS_VAULT_DESC:
		"把指定的区块内容，提取到指定的字段。\n\n属性名，为区块中第一个连字符之前的内容。\n属性值，是对应区块在多维表中想要存储的字段名。",
	EXTRACT_BLOCKS_VAULT_EXAMPLE:
		'{\ntips: "提示",\ncode: "代码",\ntable: "表格",\nmath: "数学",\nquote: "引言"\n}',
	EXTRACT_BLOCKS_VAULT_TITLE: "提取指定区块到指定字段",
	EXTRACT_KEY_POINTS_AS_TEXT_FOLDER_AIRTABLE_DESC:
		"从笔记中提取要点时，是否将提取的内容作为文本在数据库中存储。\n\nfalse: 使用数组进行存储，Airtable中的字段需要是多选或者允许关联多项记录的关联字段。\ntrue: 使用文本进行存储，Airtable中的字段需要是多行文本字段。",
	EXTRACT_KEY_POINTS_AS_TEXT_FOLDER_AIRTABLE_EXAMPLE: "false",
	EXTRACT_KEY_POINTS_AS_TEXT_FOLDER_AIRTABLE_TITLE: "提取要点为多行文本",
	EXTRACT_KEY_POINTS_AS_TEXT_FOLDER_DESC:
		"从笔记中提取要点时，是否将提取的内容作为文本在数据库中存储。\n\nfalse: 使用数组进行存储，多维表的字段需要是多选。\ntrue: 使用文本进行存储，多维表中的字段需要是多行文本字段。",
	EXTRACT_KEY_POINTS_AS_TEXT_FOLDER_EXAMPLE: "true",
	EXTRACT_KEY_POINTS_AS_TEXT_FOLDER_TITLE: "提取要点为多行文本",
	EXTRACT_KEY_POINTS_AS_TEXT_VAULT_AIRTABLE_DESC:
		"从笔记中提取要点时，是否将提取的内容作为文本在数据库中存储。\n\nfalse: 使用数组进行存储，Airtable中的字段需要是多选或者允许关联多项记录的关联字段。\ntrue: 使用文本进行存储，Airtable中的字段需要是多行文本字段。",
	EXTRACT_KEY_POINTS_AS_TEXT_VAULT_AIRTABLE_EXAMPLE: "false",
	EXTRACT_KEY_POINTS_AS_TEXT_VAULT_AIRTABLE_TITLE: "提取要点为多行文本",
	EXTRACT_KEY_POINTS_AS_TEXT_VAULT_DESC:
		"从笔记中提取要点时，是否将提取的内容作为文本在数据库中存储。\n\nfalse: 使用数组进行存储，多维表的字段需要是多选。\ntrue: 使用文本进行存储，多维表中的字段需要是多行文本字段。",
	EXTRACT_KEY_POINTS_AS_TEXT_VAULT_EXAMPLE: "true",
	EXTRACT_KEY_POINTS_AS_TEXT_VAULT_TITLE: "提取要点为多行文本",
	EXTRACT_KEY_POINTS_FOLDER_DESC:
		'同步文件夹，在同步时想要提取的特殊标记内容。\n\n属性名，为特殊标记的类型名。\n属性值，是对应区块在多维表中想要存储的字段名。\n\n目前支持的特殊标记的类型名如下：\n"highlights" 高亮语法 ==text==\n"italics" 斜体语法 *text* 或 _text_ \n"strong" 粗体语法 **text**\n"bolds" 粗体语法 **text**（和strong一样的效果，二选一使用）\n"underlines" 下划线语法 <u>text</u>\n"deletions" 删除线语法 ~~text~~\n"inlineCodes" 行内代码语法 `text`\n"singleQuotes" 引用语法 > 文本\n"boldItalics" 粗体斜体语法 ***text***\n"urls" 网址',
	EXTRACT_KEY_POINTS_FOLDER_EXAMPLE:
		'{\nhighlights: "疑点",\nitalics: "地名",\nstrong: "要点",\nunderlines: "人名",\ndeletions: "删除",\ninlineCodes: "行内代码",\nsingleQuotes: "引用"\n}',
	EXTRACT_KEY_POINTS_FOLDER_TITLE: "提取要点",
	EXTRACT_KEY_POINTS_OVERRIDE_MODE_FOLDER_DESC:
		"是否使用同步文件夹下的提取要点的设置，覆盖库级设置中的提取要点设置。",
	EXTRACT_KEY_POINTS_OVERRIDE_MODE_FOLDER_EXAMPLE: "true",
	EXTRACT_KEY_POINTS_OVERRIDE_MODE_FOLDER_TITLE: "是否固定库级提取要点的设置",
	EXTRACT_KEY_POINTS_VAULT_DESC:
		'在同步时想要提取的特殊标记内容。\n\n属性名，为特殊标记的类型名。\n属性值，是对应区块在多维表中想要存储的字段名。\n\n目前支持的特殊标记的类型名如下：\n\n "highlights" 高亮语法 ==text==\n "italics" 斜体语法 *text* 或 _text_ \n "strong" 粗体语法 **text**\n "bolds" 粗体语法 **text**（和strong一样的效果，二选一使用）\n "underlines" 下划线语法 <u>text</u>\n "deletions" 删除线语法 ~~text~~\n "inlineCodes" 行内代码语法 `text`\n "singleQuotes" 引用语法 > text\n "boldItalics" 粗体斜体语法 ***text***\n "urls" 网址',
	EXTRACT_KEY_POINTS_VAULT_EXAMPLE:
		'{\nhighlights: "疑点",\nitalics: "疑点",\nstrong: "加粗",\nunderlines: "下划线",\ndeletions: "删除",\ninlineCodes: "行内代码",\nsingleQuotes: "引用",\n}',
	EXTRACT_KEY_POINTS_VAULT_TITLE: "提取笔记中的要点",
	EXTRACT_SECTIONS_AS_TEXT_FOLDER_AIRTABLE_DESC:
		"从笔记中提取指定的章节（Sections）时，是否将提取的内容作为文本在数据库中存储。\n\nfalse: 使用数组进行存储，Airtable中的字段需要是多选或者允许关联多项记录的关联字段\n\ntrue: 使用文本进行存储，Airtable中的字段需要是多行文本字段",
	EXTRACT_SECTIONS_AS_TEXT_FOLDER_AIRTABLE_EXAMPLE: "false",
	EXTRACT_SECTIONS_AS_TEXT_FOLDER_AIRTABLE_TITLE: "提取章节为多行文本",
	EXTRACT_SECTIONS_AS_TEXT_FOLDER_DESC:
		"从笔记中提取指定的章节（Sections）时，是否将提取的内容作为文本在数据库中存储。\n\nfalse: 使用数组进行存储，多维表的字段需要是多选或者允许关联多项记录的关联字段\n\ntrue: 使用文本进行存储，多维表中的字段需要是多行文本字段",
	EXTRACT_SECTIONS_AS_TEXT_FOLDER_EXAMPLE: "true",
	EXTRACT_SECTIONS_AS_TEXT_FOLDER_TITLE: "提取章节为多行文本",
	EXTRACT_SECTIONS_AS_TEXT_VAULT_AIRTABLE_DESC:
		"从笔记中提取指定的章节（Sections）时，是否将提取的内容作为文本在数据库中存储。\n\nfalse: 使用数组进行存储，Airtable中的字段需要是多选或者允许关联多项记录的关联字段\n\ntrue: 使用文本进行存储，Airtable中的字段需要是多行文本字段",
	EXTRACT_SECTIONS_AS_TEXT_VAULT_AIRTABLE_EXAMPLE: "false",
	EXTRACT_SECTIONS_AS_TEXT_VAULT_AIRTABLE_TITLE: "提取章节为多行文本",
	EXTRACT_SECTIONS_AS_TEXT_VAULT_DESC:
		"从笔记中提取指定的章节（Sections）时，是否将提取的内容作为文本在数据库中存储。\n\nfalse: 使用数组进行存储，多维表的字段需要是多选。\n\ntrue: 使用文本进行存储，多维表中的字段需要是多行文本字段。",
	EXTRACT_SECTIONS_AS_TEXT_VAULT_EXAMPLE: "true",
	EXTRACT_SECTIONS_AS_TEXT_VAULT_TITLE: "提取章节为多行文本",
	EXTRACT_SECTIONS_FOLDER_DESC:
		"同步文件夹，在同步时，想要提取的指定章节内容。\n\n属性名，为章节的标题名。\n属性值，对应章节想要在多维表中存储的字段名。",
	EXTRACT_SECTIONS_FOLDER_EXAMPLE: '{\n总结: "Summary"\n}',
	EXTRACT_SECTIONS_FOLDER_TITLE: "提取章节",
	EXTRACT_SECTIONS_OVERRIDE_MODE_FOLDER_DESC:
		"是否使用同步文件夹下的提取章节的配置覆盖库级设置中的提取章节的配置",
	EXTRACT_SECTIONS_OVERRIDE_MODE_FOLDER_EXAMPLE: "true",
	EXTRACT_SECTIONS_OVERRIDE_MODE_FOLDER_TITLE: "是否库级设置中的提取章节配置",
	EXTRACT_SECTIONS_VAULT_DESC:
		"在同步时，想要提取的指定章节内容。\n\n属性名，为章节的标题名。\n属性值，对应章节想要在多维表中存储的字段名。",
	EXTRACT_SECTIONS_VAULT_EXAMPLE: '{\n总结: "Summary"\n}',
	EXTRACT_SECTIONS_VAULT_TITLE: "提取章节",
	EXTRACT_TAG_LINES_AS_TEXT_FOLDER_AIRTABLE_DESC:
		"从笔记中提取包含指定标签的行时，是否将提取的内容作为文本在数据库中存储。\n\nfalse: 使用数组进行存储，Airtable中的字段需要是多选或者允许关联多项记录的关联字段。\n\ntrue: 使用文本进行存储，Airtable中的字段需要是多行文本字段。",
	EXTRACT_TAG_LINES_AS_TEXT_FOLDER_AIRTABLE_EXAMPLE: "false",
	EXTRACT_TAG_LINES_AS_TEXT_FOLDER_AIRTABLE_TITLE:
		"把指定标签行提取为多行文本",
	EXTRACT_TAG_LINES_AS_TEXT_FOLDER_DESC:
		"从笔记中提取包含指定标签的行时，是否将提取的内容作为文本在数据库中存储。\n\nfalse: 使用数组进行存储，多维表的字段需要是多选。\ntrue: 使用文本进行存储，多维表中的字段需要是多行文本字段。",
	EXTRACT_TAG_LINES_AS_TEXT_FOLDER_EXAMPLE: "true",
	EXTRACT_TAG_LINES_AS_TEXT_FOLDER_TITLE: "把指定标签行提取为多行文本",
	EXTRACT_TAG_LINES_AS_TEXT_VAULT_AIRTABLE_DESC:
		"从笔记中提取包含指定标签的行时，是否将提取的内容作为文本在数据库中存储。\n\nfalse: 使用数组进行存储，Airtable中的字段需要是多选或者允许关联多项记录的关联字段。\n\ntrue: 使用文本进行存储，Airtable中的字段需要是多行文本字段。",
	EXTRACT_TAG_LINES_AS_TEXT_VAULT_AIRTABLE_EXAMPLE: "false",
	EXTRACT_TAG_LINES_AS_TEXT_VAULT_AIRTABLE_TITLE:
		"把指定标签行提取为多行文本",
	EXTRACT_TAG_LINES_AS_TEXT_VAULT_DESC:
		"从笔记中提取包含指定标签的行时，是否将提取的内容作为文本在数据库中存储。\n\nfalse: 使用数组进行存储，多维表的字段需要是多选字段，\n\ntrue: 使用文本进行存储，多维表中的字段需要是多行文本字段，",
	EXTRACT_TAG_LINES_AS_TEXT_VAULT_EXAMPLE: "true",
	EXTRACT_TAG_LINES_AS_TEXT_VAULT_TITLE: "把指定的标签行提取为多行文本",
	EXTRACT_TAG_LINES_FOLDER_DESC:
		"同步文件夹，在同步时，想要提取的包含指定标签的行。\n\n属性名，标签名（不包含#符号）。\n属性值，是对应标签在多维表中想要存储的字段名。",
	EXTRACT_TAG_LINES_FOLDER_EXAMPLE: '{\n闪念: "FleetingNotes"\n}',
	EXTRACT_TAG_LINES_FOLDER_TITLE: "提取指定标签行",
	EXTRACT_TAG_LINES_OVERRIDE_MODE_FOLDER_DESC:
		"是否使用同步文件夹下的提取标签配置覆盖库级设置中的提取标签配置",
	EXTRACT_TAG_LINES_OVERRIDE_MODE_FOLDER_EXAMPLE: "true",
	EXTRACT_TAG_LINES_OVERRIDE_MODE_FOLDER_TITLE:
		"是否开启提取标签行的覆盖模式",
	EXTRACT_TAG_LINES_VAULT_DESC:
		"同步文件夹，在同步时，想要提取的包含指定标签的行。\n\n属性名，标签名（不包含#符号）。\n属性值，是对应标签在多维表中想要存储的字段名。",
	EXTRACT_TAG_LINES_VAULT_EXAMPLE: '{\n闪念: "FleetingNotes"\n}',
	EXTRACT_TAG_LINES_VAULT_TITLE: "提取指定标签行",
	FETCH_ACCESS_TOKEN_ROOT_WPS_DESC: "WPS的用户访问令牌",
	FETCH_ACCESS_TOKEN_ROOT_WPS_EXAMPLE:
		"设置时如果输入为空，默认使用：\n${wpsUserTokenForFetch}",
	FETCH_ACCESS_TOKEN_ROOT_WPS_TITLE: "访问令牌",
	FETCH_API_KEY_ROOT_AIRTABLE_DESC:
		"从Airtable获取数据时使用的API Key。\nAirtable的API Key，已经升级为Personal Access Token。\n你可以在 https://airtable.com/create/tokens 获取你的 Personal Access Token。",
	FETCH_API_KEY_ROOT_AIRTABLE_EXAMPLE:
		"输入为空时，默认使用：\n${airtableAPIKeyForFetch}\n\n如果自行输入，请现在Airtable中获取你的Personal Access Token",
	FETCH_API_KEY_ROOT_AIRTABLE_TITLE: "Airtable PAT密钥",
	FETCH_API_KEY_ROOT_VIKA_DESC:
		"从Vika获取数据时，必须提供一个相应的API Key。",
	FETCH_API_KEY_ROOT_VIKA_EXAMPLE:
		"输入为空时，默认使用：\n${vikaAPIKeyForFetch}\n\n如果自行输入，请在Vika设置中获取你的API密钥",
	FETCH_API_KEY_ROOT_VIKA_TITLE: "API密钥",
	FETCH_APP_ID_ROOT_DING_DESC: "从钉钉获取数据时，需要提供自建应用的App ID",
	FETCH_APP_ID_ROOT_DING_EXAMPLE:
		"输入为空时，默认使用：\n${dingAppIDForFetch}\n\n如果自行输入，请在钉钉的自建应用管理中获取你的应用ID",
	FETCH_APP_ID_ROOT_DING_TITLE: "应用ID",
	FETCH_APP_ID_ROOT_FEISHU_DESC: "从飞书获取数据时，需要提供自建应用的APP ID",
	FETCH_APP_ID_ROOT_FEISHU_EXAMPLE:
		"输入为空时，默认使用：\n${feishuAppIDForFetch}\n\n",
	FETCH_APP_ID_ROOT_FEISHU_TITLE: "应用ID",
	FETCH_APP_ID_ROOT_LARK_DESC: "从Lark获取数据时，需要提供自建应用的APP ID",
	FETCH_APP_ID_ROOT_LARK_EXAMPLE:
		"输入为空时，默认使用：\n${larkAppIDForFetch}",
	FETCH_APP_ID_ROOT_LARK_TITLE: "应用ID",
	FETCH_APP_ID_ROOT_WPS_DESC: "从WPS获取数据时，需要提供自建应用的App ID",
	FETCH_APP_ID_ROOT_WPS_EXAMPLE:
		"输入为空时，默认使用：\n${wpsAppIDForFetch}",
	FETCH_APP_ID_ROOT_WPS_TITLE: "应用ID",
	FETCH_APP_KEY_ROOT_WPS_DESC: "从WPS获取数据时，需要提供自建应用的APP密钥",
	FETCH_APP_KEY_ROOT_WPS_EXAMPLE:
		"输入为空时，默认使用：\n${wpsAppSecretForFetch}",
	FETCH_APP_KEY_ROOT_WPS_TITLE: "应用密钥",
	FETCH_APP_SECRET_ROOT_DING_DESC:
		"从钉钉获取数据时，需要提供自建应用的App密钥",
	FETCH_APP_SECRET_ROOT_DING_EXAMPLE:
		"输入为空时，默认使用：\n${dingAppSecretForFetch}",
	FETCH_APP_SECRET_ROOT_DING_TITLE: "应用密钥",
	FETCH_APP_SECRET_ROOT_FEISHU_DESC:
		"从飞书获取数据时，需要提供自建应用的APP密钥",
	FETCH_APP_SECRET_ROOT_FEISHU_EXAMPLE:
		"输入为空时，默认使用：\n${feishuAppSecretForFetch}",
	FETCH_APP_SECRET_ROOT_FEISHU_TITLE: "应用密钥",
	FETCH_APP_SECRET_ROOT_LARK_DESC:
		"从Lark获取数据时，需要提供自建应用的APP密钥",
	FETCH_APP_SECRET_ROOT_LARK_EXAMPLE:
		"输入为空时，默认使用：\n${larkAppSecretForFetch}",
	FETCH_APP_SECRET_ROOT_LARK_TITLE: "应用密钥",
	FETCH_APP_TOKEN_FOLDER_DESC:
		"获取数据时，使用的appToken。\n\n如果输入为空，默认使用defaultAppToken",
	FETCH_APP_TOKEN_FOLDER_EXAMPLE: "appxxxxxx",
	FETCH_APP_TOKEN_FOLDER_TITLE: "应用Token",
	FETCH_BASE_ID_FOLDER_AIRTABLE_DESC:
		"数据源的数据库ID，如果为空，使用默认的defaultBaseID。",
	FETCH_BASE_ID_FOLDER_AIRTABLE_EXAMPLE: "appxxxxxx",
	FETCH_BASE_ID_FOLDER_AIRTABLE_TITLE: "数据库ID",
	FETCH_DEFAULT_APP_TOKEN_ROOT_FEISHU_DESC:
		"从飞书获取数据时，默认使用的多维表的用户Token。\n\n多维表的App Token，相当于Airtable中的Base ID。",
	FETCH_DEFAULT_APP_TOKEN_ROOT_FEISHU_EXAMPLE:
		"输入为空时，默认使用：\n${feishuBaseIDForFetch}",
	FETCH_DEFAULT_APP_TOKEN_ROOT_FEISHU_TITLE: "默认应用Token",
	FETCH_DEFAULT_APP_TOKEN_ROOT_LARK_DESC:
		"从Lark获取数据时，默认使用的多维表的App Token。\n\n多维表的App Token，相当于Airtable中的Base ID。",
	FETCH_DEFAULT_APP_TOKEN_ROOT_LARK_EXAMPLE:
		"输入为空时，默认使用：\n${larkBaseIDForFetch}",
	FETCH_DEFAULT_APP_TOKEN_ROOT_LARK_TITLE: "默认应用Token",
	FETCH_DEFAULT_BASE_ID_ROOT_AIRTABLE_DESC:
		"从Airtable获取数据时，默认使用的Base ID。",
	FETCH_DEFAULT_BASE_ID_ROOT_AIRTABLE_EXAMPLE:
		"输入为空时，默认使用：\n${airtableBaseIDForFetch}",
	FETCH_DEFAULT_BASE_ID_ROOT_AIRTABLE_TITLE: "默认Base ID",
	FETCH_DEFAULT_BASE_ID_ROOT_DING_DESC:
		"从钉钉获取数据时，默认使用的AI表格的Base ID",
	FETCH_DEFAULT_BASE_ID_ROOT_DING_EXAMPLE:
		"输入为空时，默认使用：\n${dingBaseIDForFetch}",
	FETCH_DEFAULT_BASE_ID_ROOT_DING_TITLE: "默认Base ID",
	FETCH_DEFAULT_FILE_ID_ROOT_WPS_DESC:
		"从WPS获取数据时，默认使用的多维表文件ID",
	FETCH_DEFAULT_FILE_ID_ROOT_WPS_EXAMPLE:
		"输入为空时，默认使用：\n${wpsBaseIDForFetch}",
	FETCH_DEFAULT_FILE_ID_ROOT_WPS_TITLE: "默认文件ID",
	FETCH_DEFAULT_SHEET_ID_ROOT_DING_DESC:
		"从钉钉获取数据时，默认使用的AI表格的数据表ID",
	FETCH_DEFAULT_SHEET_ID_ROOT_DING_EXAMPLE:
		"输入为空时，默认使用：\n${dingTableIDForFetch}",
	FETCH_DEFAULT_SHEET_ID_ROOT_DING_TITLE: "默认数据表ID",
	FETCH_DEFAULT_SHEET_ID_ROOT_WPS_DESC: "从WPS获取数据时，默认使用的数据表ID",
	FETCH_DEFAULT_SHEET_ID_ROOT_WPS_EXAMPLE:
		"输入为空时，默认使用：\n${wpsTableIDForFetch}",
	FETCH_DEFAULT_SHEET_ID_ROOT_WPS_TITLE: "默认数据表ID",
	FETCH_DEFAULT_TABLE_ID_ROOT_AIRTABLE_DESC:
		"从Airtable获取数据时，默认使用的数据表ID。",
	FETCH_DEFAULT_TABLE_ID_ROOT_AIRTABLE_EXAMPLE:
		"输入为空时，默认使用：\n${airtableTableIDForFetch}",
	FETCH_DEFAULT_TABLE_ID_ROOT_AIRTABLE_TITLE: "默认数据表ID",
	FETCH_DEFAULT_TABLE_ID_ROOT_FEISHU_DESC:
		"从飞书获取数据时，默认使用的数据表ID。",
	FETCH_DEFAULT_TABLE_ID_ROOT_FEISHU_EXAMPLE:
		"输入为空时，默认使用：\n${feishuTableIDForFetch}",
	FETCH_DEFAULT_TABLE_ID_ROOT_FEISHU_TITLE: "默认数据表ID",
	FETCH_DEFAULT_TABLE_ID_ROOT_LARK_DESC:
		"从Lark获取数据时，默认使用的数据表ID。",
	FETCH_DEFAULT_TABLE_ID_ROOT_LARK_EXAMPLE:
		"输入为空时，默认使用：\n${larkTableIDForFetch}",
	FETCH_DEFAULT_TABLE_ID_ROOT_LARK_TITLE: "默认数据表ID",
	FETCH_DEFAULT_TABLE_ID_ROOT_VIKA_DESC:
		"从Vika获取数据时，默认使用的数据表ID。",
	FETCH_DEFAULT_TABLE_ID_ROOT_VIKA_EXAMPLE:
		"输入为空时，默认使用：\n${vikaTableIDForFetch}",
	FETCH_DEFAULT_TABLE_ID_ROOT_VIKA_TITLE: "默认数据表ID",
	FETCH_DEFAULT_VIEW_ID_ROOT_DING_DESC:
		"从钉钉获取数据时，默认使用的AI表格的视图ID",
	FETCH_DEFAULT_VIEW_ID_ROOT_DING_EXAMPLE:
		"输入为空时，默认使用：\n${dingViewIDForFetch}",
	FETCH_DEFAULT_VIEW_ID_ROOT_DING_TITLE: "默认视图ID",
	FETCH_GENERATOR_VIEW_BTN_ADD_FOLDER: "添加文件夹设置",
	FETCH_GENERATOR_VIEW_BTN_BROWSE: "浏览",
	FETCH_GENERATOR_VIEW_BTN_GENERATE: "生成获取脚本",
	FETCH_GENERATOR_VIEW_BTN_IMPORT_TEMPLATE: "导入模板",
	FETCH_GENERATOR_VIEW_BTN_LOAD_DEFAULT: "加载默认模板",
	FETCH_GENERATOR_VIEW_BTN_PRESETS: "加载预设",
	FETCH_GENERATOR_VIEW_BTN_REMOVE: "移除",
	FETCH_GENERATOR_VIEW_BTN_SAVE_PRESET: "保存预设",
	FETCH_GENERATOR_VIEW_BTN_TOGGLE_ALL_FOLDERS: "展开/收起所有文件夹卡片",
	FETCH_GENERATOR_VIEW_DESC_PLACEHOLDER: "选择一个设置项以在此处查看说明。",
	FETCH_GENERATOR_VIEW_DESC_TITLE: "说明",
	FETCH_GENERATOR_VIEW_EXAMPLE_USAGE_TITLE: "示例/用法:",
	FETCH_GENERATOR_VIEW_FOLDER_HEADER_PREFIX: "文件夹",
	FETCH_GENERATOR_VIEW_NOTICE_IMPORTED: "已从 ${file} 导入设置",
	FETCH_GENERATOR_VIEW_NOTICE_LOAD_FAILED: "加载默认模板失败: ${error}",
	FETCH_GENERATOR_VIEW_NOTICE_NO_DEFAULT: "未为此平台配置默认模板。",
	FETCH_GENERATOR_VIEW_NOTICE_NO_PLATFORM: "无法在模板中检测到平台。",
	FETCH_GENERATOR_VIEW_NOTICE_TEMPLATE_NOT_FOUND: "找不到模板文件: ${path}",
	FETCH_GENERATOR_VIEW_PLATFORMS_TITLE: "平台",
	FETCH_GENERATOR_VIEW_SETTINGS_SUFFIX: "设置",
	FETCH_GENERATOR_VIEW_SETTINGS_TITLE_SUFFIX: "获取设置",
	FETCH_GENERATOR_VIEW_TAB_FOLDER: "文件夹级",
	FETCH_GENERATOR_VIEW_TAB_VAULT: "库级",
	FETCH_GENERATOR_VIEW_TAB_ROOT: "必要",
	FETCH_GENERATOR_VIEW_TARGET_FOLDER_DESC:
		"您想要获取数据到的目标文件夹路径。",
	FETCH_GENERATOR_VIEW_TARGET_FOLDER_EXAMPLE: "示例: MyVault/Projects/Active",
	FETCH_GENERATOR_VIEW_TARGET_FOLDER_NAME: "目标文件夹",
	FETCH_GENERATOR_VIEW_TARGET_FOLDER_PLACEHOLDER: "目标文件夹路径",
	FETCH_GENERATOR_VIEW_TITLE: "数据获取脚本生成器",
	FETCH_PRESET_MANAGER_BTN_CLOSE: "关闭",
	FETCH_PRESET_MANAGER_BTN_DELETE: "删除",
	FETCH_PRESET_MANAGER_BTN_LOAD: "加载",
	FETCH_PRESET_MANAGER_CONFIRM_DELETE: '您确定要删除预设 "${name}" 吗？',
	FETCH_PRESET_MANAGER_LOAD_EMPTY:
		"尚未保存预设。保存配置以创建您的第一个预设。",
	FETCH_PRESET_MANAGER_LOAD_TITLE: "加载预设",
	FETCH_PRESET_MANAGER_NOTICE_DELETED: '已删除预设 "${name}"',
	FETCH_PRESET_MANAGER_NOTICE_DUPLICATE:
		"此名称的预设已存在。请使用不同的名称。",
	FETCH_PRESET_MANAGER_NOTICE_ENTER_NAME: "请输入预设名称",
	FETCH_PRESET_MANAGER_NOTICE_LOADED: '已加载预设 "${name}"',
	FETCH_PRESET_MANAGER_NOTICE_SAVED: '预设 "${name}" 已成功保存',
	FETCH_PRESET_MANAGER_SAVE_BTN: "保存预设",
	FETCH_PRESET_MANAGER_SAVE_PLACEHOLDER:
		'预设名称 (例如: "Airtable Fetch Production")',
	FETCH_PRESET_MANAGER_SAVE_TITLE: "保存当前配置",
	FETCH_PRESET_MANAGER_TAB_LOAD: "加载预设",
	FETCH_PRESET_MANAGER_TAB_SAVE: "保存预设",
	FETCH_PRESET_MANAGER_TITLE: "数据获取配置预设",
	FETCH_SOURCE_NAME_FOLDER_DESC: "用户定义的数据源名称",
	FETCH_SOURCE_NAME_FOLDER_EXAMPLE: "我的闪念",
	FETCH_SOURCE_NAME_FOLDER_TITLE: "数据获取源名称",
	FETCH_TABLE_ID_FOLDER_DESC:
		"数据源的数据表ID，如果为空，使用默认的defaultTableID。",
	FETCH_TABLE_ID_FOLDER_EXAMPLE: "tblxxxxxx",
	FETCH_TABLE_ID_FOLDER_TITLE: "数据表ID",
	FETCH_TARGET_FOLDER_FOLDER_DESC: "存储获取数据的文件夹路径",
	FETCH_TARGET_FOLDER_FOLDER_EXAMPLE: "2-输出/我的闪念",
	FETCH_TARGET_FOLDER_FOLDER_TITLE: "目标文件夹",
	FETCH_USER_ID_ROOT_DING_DESC:
		"从钉钉获取数据时，默认使用的通讯录中的用户ID",
	FETCH_USER_ID_ROOT_DING_EXAMPLE:
		"输入为空时，默认使用：\n${dingUserIDForFetch}",
	FETCH_USER_ID_ROOT_DING_TITLE: "用户ID",
	FETCH_VAULT_FIELDS_NAMES_DESC:
		'使用该字段去配置多维表中使用的默认数据获取的字段名。\n\n可以配置的默认字段及其默认值，如下\n\nextension: "扩展名",\nsubFolder: "子文件夹",\nfetchContentFrom: "内容",\nfetchTitleFrom: "标题",\nupdatedTime: "更新时间",',
	FETCH_VAULT_FIELDS_NAMES_EXAMPLE:
		'{\nfetchContentFrom: "MD",\nfetchTitleFrom: "标题",\n}',
	FETCH_VAULT_FIELDS_NAMES_TITLE: "默认获取字段名",
	FETCH_VIEW_ID_FOLDER_DESC: "用于获取数据的视图 ID",
	FETCH_VIEW_ID_FOLDER_EXAMPLE: "vwxxxxxx",
	FETCH_VIEW_ID_FOLDER_TITLE: "视图ID",
	FIELDS_NAMES_VAULT_DESC:
		'使用改字段去配置多维表中使用的默认同步字段的字段名。\n\n可以配置的默认字段及其默认值，如下\n\ntitle: "标题",\ncontent: "内容",\ntags: "标签",\naliases: "别名",\ncreatedTime: "创建时间",\nupdatedTime: "更新时间",\npath: "路径",\nvault: "库",\nfullContent: "全文内容",\nobsidianURI: "OBURI",',
	FIELDS_NAMES_VAULT_EXAMPLE:
		'{\ntitle: "标题",\npath: "路径",\ncontent: "内容"\n}',
	FIELDS_NAMES_VAULT_TITLE: "默认同步字段名称",
	FILE_ID_FOLDER_WPS_DESC: "WPS多维表文件ID",
	FILE_ID_FOLDER_WPS_EXAMPLE: "cmLlHZY7Iyg7",
	FILE_ID_FOLDER_WPS_TITLE: "文件ID",
	FM_FETCH_FIELDS_FOLDER_DESC:
		"在同步完成时，根据指定值从多维表中获取对应字段的值，并存储在笔记的属性区。\n",
	FM_FETCH_FIELDS_FOLDER_EXAMPLE: '["要点提取", "问题补充", "背景信息"]',
	FM_FETCH_FIELDS_FOLDER_TITLE: "获取到笔记属性区的字段",
	FM_FETCH_FIELDS_OVERRIDE_MODE_FOLDER_DESC:
		"是否使用同步文件夹下的属性获取字段配置覆盖库级设置中的fmFetchFields设置",
	FM_FETCH_FIELDS_OVERRIDE_MODE_FOLDER_EXAMPLE: "true",
	FM_FETCH_FIELDS_OVERRIDE_MODE_FOLDER_TITLE: "是否开启属性获取字段覆盖模式",
	FM_FETCH_FIELDS_VAULT_DESC:
		"在同步完成时，根据指定值从多维表中获取对应字段的值，并存储在笔记的属性区。\n",
	FM_FETCH_FIELDS_VAULT_EXAMPLE: '["要点提取", "问题补充", "背景信息"]',
	FM_FETCH_FIELDS_VAULT_TITLE: "属性获取字段",
	FOLDER_NAME_FOLDER_DESC: "同步文件夹的完整路径。\n",
	FOLDER_NAME_FOLDER_EXAMPLE: "Demo/笔记",
	FOLDER_NAME_FOLDER_TITLE: "文件夹路径",
	GENERATOR_VIEW_BTN_ADD_FOLDER: "添加文件夹设置",
	GENERATOR_VIEW_BTN_BROWSE: "浏览",
	GENERATOR_VIEW_BTN_GENERATE: "生成同步脚本",
	GENERATOR_VIEW_BTN_IMPORT_TEMPLATE: "导入模板",
	GENERATOR_VIEW_BTN_LOAD_DEFAULT: "加载默认模板",
	GENERATOR_VIEW_BTN_PRESETS: "加载预设",
	GENERATOR_VIEW_BTN_REMOVE: "移除",
	GENERATOR_VIEW_BTN_SAVE_PRESET: "保存预设",
	GENERATOR_VIEW_DESC_PLACEHOLDER: "选择一个设置项以在此处查看说明。",
	GENERATOR_VIEW_DESC_TITLE: "说明",
	GENERATOR_VIEW_EXAMPLE_USAGE_TITLE: "示例/用法:",
	GENERATOR_VIEW_FOLDER_LABEL: "文件夹",
	GENERATOR_VIEW_FOLDER_PATH_DESC: "您想要同步的文件夹路径。",
	GENERATOR_VIEW_FOLDER_PATH_EXAMPLE: "示例: MyVault/Projects/Active",
	GENERATOR_VIEW_FOLDER_PATH_NAME: "文件夹路径",
	GENERATOR_VIEW_GROUP_ADVANCED: "高级",
	GENERATOR_VIEW_GROUP_BASIC: "基础",
	GENERATOR_VIEW_GROUP_EXTRACT: "提取",
	GENERATOR_VIEW_GROUP_OTHER: "其他",
	GENERATOR_VIEW_NOTICE_IMPORTED: "已从 ${file} 导入设置",
	GENERATOR_VIEW_NOTICE_LOAD_FAILED: "加载默认模板失败: ${error}",
	GENERATOR_VIEW_NOTICE_NO_DEFAULT: "未为此平台配置默认模板。",
	GENERATOR_VIEW_NOTICE_NO_PLATFORM: "无法在模板中检测到平台。",
	GENERATOR_VIEW_NOTICE_TEMPLATE_NOT_FOUND: "找不到模板文件: ${path}",
	GENERATOR_VIEW_PLATFORMS_TITLE: "平台",
	GENERATOR_VIEW_SETTINGS_SUFFIX: "设置",
	GENERATOR_VIEW_TAB_FOLDER: "文件夹",
	GENERATOR_VIEW_TAB_ROOT: "必要",
	GENERATOR_VIEW_TAB_VAULT: "库级",
	GENERATOR_VIEW_TITLE: "同步脚本生成器",
	GENERATOR_VIEW_TOOLTIP_EDIT_ARRAY: "编辑数组",
	GENERATOR_VIEW_TOOLTIP_EDIT_OBJECT: "编辑对象",
	INCLUDES_TAGS_IN_CONTENT_FOLDER_DESC:
		"当更新笔记的标签属性时，是否在其中包含笔记内容中的标签。\n\ntrue 为包含；\nfalse 为不包含。",
	INCLUDES_TAGS_IN_CONTENT_FOLDER_EXAMPLE: "true",
	INCLUDES_TAGS_IN_CONTENT_FOLDER_TITLE: "在笔记的标签属性中包含内容中的标签",
	INCLUDES_TAGS_IN_CONTENT_VAULT_DESC:
		"当更新笔记的标签属性时，是否在其中包含笔记内容中的标签。\n\ntrue 为包含；\nfalse 为不包含。",
	INCLUDES_TAGS_IN_CONTENT_VAULT_EXAMPLE: "true",
	INCLUDES_TAGS_IN_CONTENT_VAULT_TITLE: "在笔记的标签属性中包含内容中的标签",
	JUST_UPDATE_FROM_DB_FOLDER_DESC:
		"是否在同步选项中仅显示下载类的选项。\n\ntrue 为仅显示下载项；\nfalse 为显示下载和其他项。",
	JUST_UPDATE_FROM_DB_FOLDER_EXAMPLE: "true",
	JUST_UPDATE_FROM_DB_FOLDER_TITLE: "仅从显示从数据库下载到OB的选项",
	JUST_UPDATE_FROM_DB_VAULT_DESC:
		"是否在同步选项中仅显示下载选项。\n\ntrue 为仅显示下载项；\nfalse 为显示下载和其他项。",
	JUST_UPDATE_FROM_DB_VAULT_EXAMPLE: "true",
	JUST_UPDATE_FROM_DB_VAULT_TITLE: "仅从显示从数据库下载到OB的选项",
	MAIN_CMD_OPEN_FETCH: "打开获取脚本生成器",
	MAIN_CMD_OPEN_SYNC: "打开同步脚本生成器",
	MAIN_RIBBON_FETCH: "获取脚本生成器",
	MAIN_RIBBON_SYNC: "同步脚本生成器",
	OBJECT_EDIT_BTN_ADD_ENTRY: "添加条目",
	OBJECT_EDIT_BTN_CANCEL: "取消",
	OBJECT_EDIT_BTN_SAVE: "保存",
	OBJECT_EDIT_EMPTY_STATE: "暂无条目。点击“添加条目”进行添加。",
	OBJECT_EDIT_PLACEHOLDER_KEY: "键",
	OBJECT_EDIT_PLACEHOLDER_VALUE: "值",
	OBJECT_EDIT_TITLE: "编辑 ${title}",
	OBJECT_EDIT_TOOLTIP_DELETE: "删除",
	OBJECT_EDIT_TOOLTIP_OPEN_ARRAY_EDITOR: "打开数组编辑器",
	OBJECT_EDIT_TYPE_ARRAY: "数组",
	OBJECT_EDIT_TYPE_BOOLEAN: "布尔值",
	OBJECT_EDIT_TYPE_NUMBER: "数字",
	OBJECT_EDIT_TYPE_STRING: "字符串",
	PRESET_MANAGER_BTN_CLOSE: "关闭",
	PRESET_MANAGER_BTN_DELETE: "删除",
	PRESET_MANAGER_BTN_LOAD: "加载",
	PRESET_MANAGER_CONFIRM_DELETE: '您确定要删除预设 "${name}" 吗？',
	PRESET_MANAGER_LOAD_EMPTY: "尚未保存预设。保存配置以创建您的第一个预设。",
	PRESET_MANAGER_LOAD_TITLE: "加载预设",
	PRESET_MANAGER_NOTICE_DELETED: '已删除预设 "${name}"',
	PRESET_MANAGER_NOTICE_DUPLICATE: "此名称的预设已存在。请使用不同的名称。",
	PRESET_MANAGER_NOTICE_ENTER_NAME: "请输入预设名称",
	PRESET_MANAGER_NOTICE_LOADED: '已加载预设 "${name}"',
	PRESET_MANAGER_NOTICE_SAVED: '预设 "${name}" 已成功保存',
	PRESET_MANAGER_SAVE_BTN: "保存预设",
	PRESET_MANAGER_SAVE_PLACEHOLDER: '预设名称 (例如: "Airtable Production")',
	PRESET_MANAGER_SAVE_TITLE: "保存当前配置",
	PRESET_MANAGER_TAB_LOAD: "加载预设",
	PRESET_MANAGER_TAB_SAVE: "保存预设",
	PRESET_MANAGER_TITLE: "配置预设",
	PULL_CONTENT_ONLY_FOLDER_DESC:
		"在从数据库获取内容到笔记时，是否只获取笔记内容，而不获取笔记属性",
	PULL_CONTENT_ONLY_FOLDER_EXAMPLE: "false",
	PULL_CONTENT_ONLY_FOLDER_TITLE: "仅从数据库中获取笔记内容",
	SCRIPT_PREVIEW_BTN_COPY: "复制到剪贴板",
	SCRIPT_PREVIEW_BTN_MAXIMIZE: "最大化",
	SCRIPT_PREVIEW_BTN_RESTORE: "还原",
	SCRIPT_PREVIEW_BTN_SAVE_AS: "另存为文件",
	SCRIPT_PREVIEW_BTN_UPDATE: "更新 ${file}",
	SCRIPT_PREVIEW_NOTICE_COPIED: "已复制到剪贴板",
	SCRIPT_PREVIEW_NOTICE_SAVED: "已保存到库中为 ${file}",
	SCRIPT_PREVIEW_NOTICE_UPDATED: "已更新 ${path}",
	SCRIPT_PREVIEW_TITLE: "生成的脚本",
	SECTION_HEADING_WHOLE_MATCH_FOLDER_DESC:
		"从笔记中提取指定的章节时，是否使用指定标题的完全匹配模式\n\nfalse 不使用完全匹配，只要笔记标题中包含指定的标题内容，就会被提取\ntrue 使用完全匹配，只有笔记标题和指定的标题内容一模一样时，才会被提取",
	SECTION_HEADING_WHOLE_MATCH_FOLDER_EXAMPLE: "true",
	SECTION_HEADING_WHOLE_MATCH_FOLDER_TITLE: "是否开启章节标题完全匹配模式",
	SECTION_HEADING_WHOLE_MATCH_VAULT_DESC:
		"从笔记中提取指定的章节时，是否使用指定标题的完全匹配模式\n\nfalse 不使用完全匹配，只要笔记标题中包含指定的标题内容，就会被提取\ntrue 使用完全匹配，只有笔记标题和指定的标题内容一模一样时，才会被提取",
	SECTION_HEADING_WHOLE_MATCH_VAULT_EXAMPLE: "true",
	SECTION_HEADING_WHOLE_MATCH_VAULT_TITLE: "是否开启章节标题完全匹配模式",
	SEPARATE_MODE_FOLDER_DESC:
		"是否使用分离模式进行同步。\n\ntrue 使用分离模式\nfalse 不使用分离模式\n\n如果你选择使用分离模式，还需要去设置分离模式使用的同步数据表的downloadTableID。\n\n如果你使用的是Airtable同步，那你还可以设置downloadBaseID。\n\n如果你使用的是Feishu同步，那你还可以设置downloadAppToken。\n\n如果你使用的Vika同步，你只需要设置downloadTableID就可以了。",
	SEPARATE_MODE_FOLDER_EXAMPLE: "false",
	SEPARATE_MODE_FOLDER_TITLE: "分离模式",
	SETTINGS_BTN_BROWSE: "浏览",
	SETTINGS_DEFAULT_FETCH_TEMPLATE_DESC:
		"${platform} 平台的默认数据获取模板文件路径",
	SETTINGS_DEFAULT_FETCH_TEMPLATE_NAME: "${platform} 默认数据获取模板",
	SETTINGS_DEFAULT_FETCH_TEMPLATES_DESC:
		"为每个平台设置默认的数据获取模板文件。导入获取配置时将使用这些模板。",
	SETTINGS_DEFAULT_FETCH_TEMPLATES_TITLE: "默认数据获取模板",
	SETTINGS_DEFAULT_SYNC_TEMPLATES_DESC:
		"为每个平台设置默认模板文件。导入配置时将使用这些模板。",
	SETTINGS_DEFAULT_SYNC_TEMPLATES_TITLE: "默认同步模板",
	SETTINGS_DEFAULT_TEMPLATE_DESC: "${platform} 平台的默认模板文件路径",
	SETTINGS_DEFAULT_TEMPLATE_NAME: "${platform} 默认模板",
	SETTINGS_DEFAULT_TEMPLATE_PLACEHOLDER: "未选择模板",
	SETTINGS_SCRIPT_PREPEND_CONTENT_NAME: "脚本开头追加内容",
	SETTINGS_SCRIPT_PREPEND_CONTENT_DESC:
		"在每次生成脚本时，自动插入到脚本最前面的多行文本。",
	SETTINGS_SCRIPT_PREPEND_CONTENT_PLACEHOLDER:
		"可选。例如：通用的导入语句、工具函数或注释。",
	SETTINGS_SYNC_PLATFORM_DESC: "选择同步平台",
	SETTINGS_SYNC_PLATFORM_NAME: "同步平台",
	SETTINGS_TOOLTIP_CLEAR: "清除",
	SHEET_ID_FOLDER_DING_DESC: "钉钉AI表格的数据表ID",
	SHEET_ID_FOLDER_DING_EXAMPLE: "rnkKzcV",
	SHEET_ID_FOLDER_DING_TITLE: "数据表ID",
	SHEET_ID_FOLDER_WPS_DESC: "WPS多维表数据表ID",
	SHEET_ID_FOLDER_WPS_EXAMPLE: "4",
	SHEET_ID_FOLDER_WPS_TITLE: "数据表ID",
	SHOW_DELETE_OPTION_FOLDER_DESC:
		"是否在同步的选项中显示删除选项。\n\ntrue 为显示；\nfalse 为不显示。",
	SHOW_DELETE_OPTION_FOLDER_EXAMPLE: "false",
	SHOW_DELETE_OPTION_FOLDER_TITLE: "在同步面板中显示删除选项",
	SHOW_DELETE_OPTION_VAULT_DESC:
		"是否在同步的选项中显示删除选项。\n\ntrue 为显示；\nfalse 为不显示。",
	SHOW_DELETE_OPTION_VAULT_EXAMPLE: "false",
	SHOW_DELETE_OPTION_VAULT_TITLE: "在同步面板中显示删除选项",
	SORT_FRONT_MATTER_PROPERTIES_FOLDER_DESC:
		"在同步完成后，是否对笔记的属性区进行排序。（排序是按照属性名称的音序来进行正序排序）\n\ntrue 为排序；\nfalse 为不排序。",
	SORT_FRONT_MATTER_PROPERTIES_FOLDER_EXAMPLE: "false",
	SORT_FRONT_MATTER_PROPERTIES_FOLDER_TITLE: "对笔记的属性值进行排序",
	SORT_FRONT_MATTER_PROPERTIES_VAULT_DESC:
		"在同步完成后，是否对笔记的属性区进行排序。（排序是按照属性名称的音序来进行正序排序）\n\ntrue 为排序；\nfalse 为不排序。",
	SORT_FRONT_MATTER_PROPERTIES_VAULT_EXAMPLE: "false",
	SORT_FRONT_MATTER_PROPERTIES_VAULT_TITLE: "对笔记的属性值进行排序",
	SYNC_CONTENT_FOLDER_DESC:
		"在同步笔记时，是否把笔记的内容同步到多维表中。\n\ntrue 为同步；\nfalse 为不同步。",
	SYNC_CONTENT_FOLDER_EXAMPLE: "false",
	SYNC_CONTENT_FOLDER_TITLE: "是否同步笔记的内容到多维表",
	SYNC_CONTENT_VAULT_DESC:
		"在同步笔记时，是否把笔记的内容同步到多维表中。\n\ntrue 为同步；\nfalse 为不同步。",
	SYNC_CONTENT_VAULT_EXAMPLE: "false",
	SYNC_CONTENT_VAULT_TITLE: "是否同步笔记的内容到多维表",
	SYNC_FULL_CONTENT_FOLDER_DESC:
		"是否把包含属性区（Frontmatter）在内的内容，同步到多维表中。\n\ntrue 为同步；\nfalse 为不同步。\n\n如果设置为true，那在你的多维表中，需要有一个名为全文的字段来接收对应的内容。",
	SYNC_FULL_CONTENT_FOLDER_EXAMPLE: "true",
	SYNC_FULL_CONTENT_FOLDER_TITLE: "同步包含属性区在内的完整笔记内容",
	SYNC_FULL_CONTENT_VAULT_DESC:
		"是否把包含属性区（Frontmatter）在内的内容，同步到多维表中。\n\ntrue 为同步；\nfalse 为不同步。\n\n如果设置为true，那在你的多维表中，需要有一个名为全文的的字段来接收对应的内容。",
	SYNC_FULL_CONTENT_VAULT_EXAMPLE: "true",
	SYNC_FULL_CONTENT_VAULT_TITLE: "同步包含属性区在内的完整笔记内容",
	SYNC_MODE_FOLDER_DESC:
		'设置在同步时，是按照笔记的标题去数据库中查找对应记录，还是按照笔记中的记录ID去进行查找。\n\n"id" 使用id进行查找\n"title" 使用笔记标题进行查找\n\n在分离模式下，如果设置为“id”：\n如果是上传模式，将使用笔记中的{多维表}RecordID，在上传Table中进行查询，比如airtableRecordID。\n\n如果是下载模式，将使用笔记中的{多维表}DownloadRecordID，在上传Table中进行查询，比如airtableDownloadRecordID。',
	SYNC_MODE_FOLDER_EXAMPLE: "title",
	SYNC_MODE_FOLDER_TITLE: "同步模式",
	SYNC_MODE_VAULT_DESC:
		'设置在同步时，是按照笔记的标题去数据库中查找对应记录，还是按照笔记中的记录ID去进行查找。\n\n"id" 使用id进行查找\n"title" 使用笔记标题进行查找\n\n在分离模式下，如果设置为“id”：\n如果是上传模式，将使用笔记中的{多维表}RecordID，在上传Table中进行查询，比如airtableRecordID。\n\n如果是下载模式，将使用笔记中的{多维表}DownloadRecordID，在上传Table中进行查询，比如airtableDownloadRecordID。',
	SYNC_MODE_VAULT_EXAMPLE: "title",
	SYNC_MODE_VAULT_TITLE: "同步模式",
	SYNC_OPTIONS_FOLDER_DESC:
		"触发同步时，显示的同步选项。\n1: 上传当前笔记到多维表\n2: 上传当前笔记中的出链到多维表\n3: 上传当前笔记及其笔记中的出链到多维表\n4: 上传当前文件夹下的笔记到多维表\n5: 上传当前文件夹及子文件夹下的笔记到多维表\n6: 上传包含指定标签的笔记到多维表\n7: 上传包含指定属性值的笔记到多维表\n8: 上传搜索结果到多维表\n9: 上传所有IOO笔记到多维表(可能需要等待较长时间)\n11: 下载多维表中的内容到当前笔记\n12: 下载多维表中的内容到当前笔记中的出链\n13: 下载多维表中的内容到当前笔记及其笔记中的出链\n14: 下载多维表中的内容到当前文件夹下的笔记\n15: 下载多维表中的内容到当前文件夹及子文件夹下的笔记\n21: 删除当前笔记和多维表中的记录",
	SYNC_OPTIONS_FOLDER_EXAMPLE: "[1, 2, 3, 4, 5, 6]",
	SYNC_OPTIONS_FOLDER_TITLE: "同步面板中显示的选项",
	SYNC_OPTIONS_VAULT_DESC:
		"触发同步时，显示的同步选项。\n1: 上传当前笔记到多维表\n2: 上传当前笔记中的出链到多维表\n3: 上传当前笔记及其笔记中的出链到多维表\n4: 上传当前文件夹下的笔记到多维表\n5: 上传当前文件夹及子文件夹下的笔记到多维表\n6: 上传包含指定标签的笔记到多维表\n7: 上传包含指定属性值的笔记到多维表\n8: 上传搜索结果到多维表\n9: 上传所有IOO笔记到多维表(可能需要等待较长时间)\n11: 下载多维表中的内容到当前笔记\n12: 下载多维表中的内容到当前笔记中的出链\n13: 下载多维表中的内容到当前笔记及其笔记中的出链\n14: 下载多维表中的内容到当前文件夹下的笔记\n15: 下载多维表中的内容到当前文件夹及子文件夹下的笔记\n21: 删除当前笔记和多维表中的记录",
	SYNC_OPTIONS_VAULT_EXAMPLE: "[1, 2, 3, 4]",
	SYNC_OPTIONS_VAULT_TITLE: "同步面板中显示的选项",
	TABLE_ID_FOLDER_AIRTABLE_DESC:
		"同步文件夹，在同步时使用的Airtable的tableID。\n\n不使用分离模式时，上传和下载都会使用tableID。\n\n如果使用分离模式，只有在上传时使用tableID。",
	TABLE_ID_FOLDER_AIRTABLE_EXAMPLE: "tblWIExxxxxQSDUz4",
	TABLE_ID_FOLDER_AIRTABLE_TITLE: "数据表ID",
	TABLE_ID_FOLDER_DESC:
		"同步文件夹，在同步时使用的Feishu多维表的tableID。\n\n不使用分离模式时，上传和下载都会使用tableID。\n\n如果使用分离模式，只有在上传时使用tableID。",
	TABLE_ID_FOLDER_EXAMPLE: "tblor4xxxxx54AZD",
	TABLE_ID_FOLDER_TITLE: "数据表ID",
	TABLE_ID_FOLDER_VIKA_DESC:
		"同步文件夹，在同步时使用的Vika的tableID。\n\n不使用分离模式时，上传和下载都会使用tableID。\n\n如果使用分离模式，只有在上传时使用tableID。",
	TABLE_ID_FOLDER_VIKA_EXAMPLE: "dstl4fxxxxxWzoh51x",
	TABLE_ID_FOLDER_VIKA_TITLE: "数据表ID",
	USE_TITLE_IN_DB_FOLDER_DESC:
		"在同步时，是否始终使用同步数据库中的标题作为笔记标题。如果这个属性设置为True，OB中的笔记标题将不再同步到数据库",
	USE_TITLE_IN_DB_FOLDER_EXAMPLE: "true",
	USE_TITLE_IN_DB_FOLDER_TITLE: "使用数据库中的标题",
	USE_TITLE_IN_DB_VAULT_DESC:
		"在同步时，是否始终使用同步数据库中的标题作为笔记标题。如果这个属性设置为True，OB中的笔记标题将不再同步到数据库",
	USE_TITLE_IN_DB_VAULT_EXAMPLE: "true",
	USE_TITLE_IN_DB_VAULT_TITLE: "使用数据库记录中的标题",
	USER_ID_ROOT_DING_DESC: "钉钉通讯录中的用户ID",
	USER_ID_ROOT_DING_EXAMPLE: "如果输入为空，默认使用：\n${dingUserIDForSync}",
	USER_ID_ROOT_DING_TITLE: "用户ID",
	VIEW_ID_FOLDER_DING_DESC: "钉钉AI表格的视图ID",
	VIEW_ID_FOLDER_DING_EXAMPLE: "JYP28Be",
	VIEW_ID_FOLDER_DING_TITLE: "视图ID",
	BASIC_SETTINGS: "基本设置",
	CONTENT: "内容",
	SETTINGS_SYNC_TEMPLATE_FOLDER_NAME: "同步模板文件夹",
	SETTINGS_SYNC_TEMPLATE_FOLDER_DESC: "同步时使用的模板文件夹路径",
	SETTINGS_SYNC_TEMPLATE_FOLDER_PLACEHOLDER: "同步模板文件夹路径",
	SETTINGS_FETCH_TEMPLATE_FOLDER_NAME: "获取模板文件夹",
	SETTINGS_FETCH_TEMPLATE_FOLDER_DESC: "获取时使用的模板文件夹路径",
	SETTINGS_FETCH_TEMPLATE_FOLDER_PLACEHOLDER: "获取模板文件夹路径",
};
