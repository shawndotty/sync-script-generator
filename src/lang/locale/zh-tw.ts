export default {
	ACCESS_TOKEN_ROOT_WPS_DESC: "WPS的用戶訪問令牌",
	ACCESS_TOKEN_ROOT_WPS_EXAMPLE:
		"當輸入為空時，會默認使用：\n${wpsUserTokenForSync}\n\n如果自行輸入，請在WPS中獲取自己的用戶訪問令牌",
	ACCESS_TOKEN_ROOT_WPS_TITLE: "訪問令牌",
	API_KEY_ROOT_AIRTABLE_DESC:
		"同步到Airtable使用的API Key。\nAirtable的API Key，已經升級為Personal Access Token。\n你可以在 https://airtable.com/create/tokens 獲取你的 Personal Access Token。",
	API_KEY_ROOT_AIRTABLE_EXAMPLE:
		"輸入為空時，預設使用：\n${airtableAPIKeyForSync}\n\n如果自行輸入，請現在Airtable中獲取你的Personal Access Token",
	API_KEY_ROOT_AIRTABLE_TITLE: "Airtable PAT金鑰",
	API_KEY_ROOT_VIKA_DESC: "同步到Vika時，使用的API Key。",
	API_KEY_ROOT_VIKA_EXAMPLE:
		"輸入為空時，預設使用：\n${vikaAPIKeyForSync}\n\n如果自行輸入，請在Vika設置中獲取你的API密鑰",
	API_KEY_ROOT_VIKA_TITLE: "API金鑰",
	APP_ID_ROOT_DING_DESC: "釘釘中自建應用的App ID",
	APP_ID_ROOT_DING_EXAMPLE:
		"輸入為空時，預設使用：\n${dingAppIDForSync}\n\n如果自行輸入，請在釘釘的自建應用管理中獲取你的應用ID",
	APP_ID_ROOT_DING_TITLE: "應用ID",
	APP_ID_ROOT_FEISHU_DESC: "同步到飛書時，需要提供自建應用的APP ID",
	APP_ID_ROOT_FEISHU_EXAMPLE: "輸入為空時，預設使用：\n${feishuAppIDForSync}",
	APP_ID_ROOT_FEISHU_TITLE: "應用ID",
	APP_ID_ROOT_LARK_DESC: "同步到Lark時，需要提供自建應用的APP ID",
	APP_ID_ROOT_LARK_EXAMPLE: "輸入為空時，預設使用：\n${larkAppIDForSync}",
	APP_ID_ROOT_LARK_TITLE: "應用ID",
	APP_ID_ROOT_WPS_DESC: "WPS自建應用的App ID",
	APP_ID_ROOT_WPS_EXAMPLE: "輸入為空時，預設使用：\n${wpsAppIDForSync}",
	APP_ID_ROOT_WPS_TITLE: "應用ID",
	APP_KEY_ROOT_WPS_DESC: "WPS自建應用的APP密鑰",
	APP_KEY_ROOT_WPS_EXAMPLE: "輸入為空時，預設使用：\n${wpsAppSecretForSync}",
	APP_KEY_ROOT_WPS_TITLE: "應用密鑰",
	APP_SECRET_ROOT_DING_DESC: "釘釘自建應用的App密鑰",
	APP_SECRET_ROOT_DING_EXAMPLE:
		"輸入為空時，預設使用：\n${dingAppSecretForSync}",
	APP_SECRET_ROOT_DING_TITLE: "應用密鑰",
	APP_SECRET_ROOT_FEISHU_DESC: "同步到飛書時，需要提供自建應用的APP密鑰",
	APP_SECRET_ROOT_FEISHU_EXAMPLE:
		"輸入為空時，預設使用：\n${feishuAppSecretForSync}",
	APP_SECRET_ROOT_FEISHU_TITLE: "應用密鑰",
	APP_SECRET_ROOT_LARK_DESC: "同步到Lark時，需要提供自建應用的APP密鑰",
	APP_SECRET_ROOT_LARK_EXAMPLE:
		"輸入為空時，預設使用：\n${larkAppSecretForSync}",
	APP_SECRET_ROOT_LARK_TITLE: "應用密鑰",
	APP_TOKEN_FOLDER_DESC:
		"同步資料夾，在同步時所使用的appToken。\n\n如果輸入為空，預設使用defaultAppToken\n\n如果你配置了不同於defaultAppToken的值，則可以實現把同一個OB庫下的不同資料夾的內容同步到飛書中不同的多維表。",
	APP_TOKEN_FOLDER_EXAMPLE: "JsTgbO9xxxxxXJsjtGtceTlBnoG",
	APP_TOKEN_FOLDER_TITLE: "多維表應用Token（相當於Airtable的Base ID）",
	ARRAY_EDIT_BTN_ADD_ITEM: "新增項",
	ARRAY_EDIT_BTN_CANCEL: "取消",
	ARRAY_EDIT_BTN_SAVE: "保存",
	ARRAY_EDIT_EMPTY_STATE: "條目為空。點擊「添加項」開始添加。",
	ARRAY_EDIT_PLACEHOLDER_VALUE: "值",
	ARRAY_EDIT_TITLE: "編輯 ${title}",
	ARRAY_EDIT_TOOLTIP_DELETE: "刪除",
	BASE_ID_FOLDER_AIRTABLE_DESC:
		"同步資料夾，在同步時所使用的資料庫ID。\n\n如果你配置了不同於defaultBaseID的值，則可以實現把同一個OB庫下的不同資料夾的內容，同步到Airtable中不同的Base。",
	BASE_ID_FOLDER_AIRTABLE_EXAMPLE: "appq2MxxxxBdZc3Sc",
	BASE_ID_FOLDER_AIRTABLE_TITLE: "資料庫ID",
	BASE_ID_FOLDER_DING_DESC: "釘釘AI表格的資料庫ID",
	BASE_ID_FOLDER_DING_EXAMPLE: "pYLaezmVNevBvvEYfgjpva3nWrMqPxX6",
	BASE_ID_FOLDER_DING_TITLE: "資料庫ID",
	CONTENT_APPEND_FIELDS_FOLDER_DESC:
		"在同步時，你可以指定在筆記的內容後面附加多維表中的指定欄位的內容。\n\n如果指定了多個欄位，這些欄位的內容，將按照陣列中的元素順序通過換行進行合併。\n\n你可以設定任意能返回文字值的欄位的名稱。\n\n當你指定的欄位在資料庫中不存在時，將返回空文字。",
	CONTENT_APPEND_FIELDS_FOLDER_EXAMPLE: "要點提取\n問題補充\n背景資訊",
	CONTENT_APPEND_FIELDS_FOLDER_TITLE: "附加內容",
	CONTENT_APPEND_FIELDS_VAULT_DESC:
		"在同步完成時，在筆記中內容後面附加多維表中的指定欄位的內容。\n\n如果指定了多個欄位，這些欄位的內容，將按照陣列中的元素順序通過換行進行合併。\n\n你可以設定任意能返回文字值的欄位的名稱。\n\n當你指定的欄位在資料庫中不存在時，將返回空文字。",
	CONTENT_APPEND_FIELDS_VAULT_EXAMPLE: "要點提取\n問題補充\n背景資訊",
	CONTENT_APPEND_FIELDS_VAULT_TITLE: "附加內容",
	CONTENT_FETCH_FIELD_FOLDER_DESC:
		"在同步完成後，使用多維表中的哪個欄位來更新筆記中的內容。\n\n預設使用「內容」欄位。\n\n你可以根據自己的需求，設為其他任何文字欄位，如果你設定的欄位在多維表中不存在，將使用預設欄位。",
	CONTENT_FETCH_FIELD_FOLDER_EXAMPLE: "AI內容",
	CONTENT_FETCH_FIELD_FOLDER_TITLE: "獲取筆記內容使用的欄位",
	CONTENT_FETCH_FIELD_VAULT_DESC:
		"在同步完成後，使用多維表中的哪個欄位來更新筆記中的內容。\n\n預設使用「內容」欄位。\n\n你可以根據自己的需求，設置為其他任何文字欄位，如果你設置的欄位在多維表中不存在，將使用預設欄位。",
	CONTENT_FETCH_FIELD_VAULT_EXAMPLE: "AI內容",
	CONTENT_FETCH_FIELD_VAULT_TITLE: "獲取內容時使用的欄位",
	CUSTOM_FIELDS_FOLDER_DESC:
		"在同步指定資料夾下的筆記時，所使用使用的自訂欄位。\n\n自訂欄位主要使用的筆記的屬性，也就是YAML Frontmatter中的內容。\n\n你也可以使用Dataview配置的筆記內的屬性名，但是請注意，Dataview的屬性只能是陣列型。\n\n如果你配置了自訂欄位，需要確保在多維表中有同樣名字的欄位，並且欄位類型需要匹配。",
	CUSTOM_FIELDS_FOLDER_EXAMPLE:
		'{\nProject: ["日常工作"],\nStatus: "Published",\nCourse: "Johnny學OB",\nVideoURL: "",\n內容概覽: "",\nAuthor: "Johnny"\n}',
	CUSTOM_FIELDS_FOLDER_TITLE: "自訂欄位",
	CUSTOM_FIELDS_OVERRIDE_MODE_FOLDER_DESC:
		"是否使用同步資料夾下的設定的自訂欄位覆蓋庫即設定中的自訂欄位",
	CUSTOM_FIELDS_OVERRIDE_MODE_FOLDER_EXAMPLE: "true",
	CUSTOM_FIELDS_OVERRIDE_MODE_FOLDER_TITLE: "覆蓋庫級設置中的自定義欄位",
	CUSTOM_FIELDS_VAULT_DESC:
		"同步整個庫下面的筆記時，所使用的自訂欄位。\n\n注意這裡的設定，會被庫中其他的筆記繼承。\n\n如果你在這裡進行了設定，但是在某個資料夾下又不想使用這些設定。\n\n你需要開啟那個資料夾的覆蓋庫級自訂欄位的設定。",
	CUSTOM_FIELDS_VAULT_EXAMPLE:
		'{\nProject: ["日常工作"],\nStatus: "Published",\nCourse: "Johnny學OB",\nVideoURL: "",\n內容概覽: "",\nAuthor: "Johnny"\n}',
	CUSTOM_FIELDS_VAULT_TITLE: "自訂欄位",
	DEFAULT_APP_TOKEN_ROOT_FEISHU_DESC:
		"同步到飛書時，默認使用的多維表的App Token。\n\n多維表的App Token，相當於Airtable中的Base ID。",
	DEFAULT_APP_TOKEN_ROOT_FEISHU_EXAMPLE:
		"輸入為空時，預設使用：\n${feishuBaseIDForSync}",
	DEFAULT_APP_TOKEN_ROOT_FEISHU_TITLE: "預設應用Token",
	DEFAULT_APP_TOKEN_ROOT_LARK_DESC:
		"同步到Lark時，預設使用的多維表的App Token。\n\nLark的App Token，相當於Airtable中的Base ID。",
	DEFAULT_APP_TOKEN_ROOT_LARK_EXAMPLE:
		"輸入為空時，預設使用：\n${larkBaseIDForSync}",
	DEFAULT_APP_TOKEN_ROOT_LARK_TITLE: "預設應用Token",
	DEFAULT_BASE_ID_ROOT_AIRTABLE_DESC: "同步到Airtable時，預設使用的Base ID。",
	DEFAULT_BASE_ID_ROOT_AIRTABLE_EXAMPLE:
		"輸入為空時，預設使用：\n${airtableBaseIDForSync}",
	DEFAULT_BASE_ID_ROOT_AIRTABLE_TITLE: "預設Base ID",
	DEFAULT_BASE_ID_ROOT_DING_DESC: "釘釘AI表格的預設Base ID",
	DEFAULT_BASE_ID_ROOT_DING_EXAMPLE:
		"輸入為空時，預設使用：\n${dingBaseIDForSync}",
	DEFAULT_BASE_ID_ROOT_DING_TITLE: "預設Base ID",
	DEFAULT_FILE_ID_ROOT_WPS_DESC: "預設的WPS多維表文件ID",
	DEFAULT_FILE_ID_ROOT_WPS_EXAMPLE:
		"輸入為空時，預設使用：\n${wpsBaseIDForSync}",
	DEFAULT_FILE_ID_ROOT_WPS_TITLE: "預設文件ID",
	DEFAULT_SHEET_ID_ROOT_DING_DESC: "釘釘AI表格的預設資料表ID",
	DEFAULT_SHEET_ID_ROOT_DING_EXAMPLE:
		"輸入為空時，預設使用：\n${dingTableIDForSync}",
	DEFAULT_SHEET_ID_ROOT_DING_TITLE: "預設資料表ID",
	DEFAULT_SHEET_ID_ROOT_WPS_DESC: "WPS多維表的預設資料表ID",
	DEFAULT_SHEET_ID_ROOT_WPS_EXAMPLE:
		"輸入為空時，預設使用：\n${wpsTableIDForSync}",
	DEFAULT_SHEET_ID_ROOT_WPS_TITLE: "預設資料表ID",
	DEFAULT_TABLE_ID_ROOT_AIRTABLE_DESC:
		"同步到Airtable時，預設使用的資料表ID。",
	DEFAULT_TABLE_ID_ROOT_AIRTABLE_EXAMPLE:
		"輸入為空時，預設使用：\n${airtableTableIDForSync}",
	DEFAULT_TABLE_ID_ROOT_AIRTABLE_TITLE: "預設資料表ID",
	DEFAULT_TABLE_ID_ROOT_FEISHU_DESC: "同步到飛書時，默認使用的數據表ID。",
	DEFAULT_TABLE_ID_ROOT_FEISHU_EXAMPLE:
		"輸入為空時，預設使用：\n${feishuTableIDForSync}",
	DEFAULT_TABLE_ID_ROOT_FEISHU_TITLE: "預設資料表ID",
	DEFAULT_TABLE_ID_ROOT_LARK_DESC: "同步到Lark時，預設使用的資料表ID。",
	DEFAULT_TABLE_ID_ROOT_LARK_EXAMPLE:
		"輸入為空時，預設使用：\n${larkTableIDForSync}",
	DEFAULT_TABLE_ID_ROOT_LARK_TITLE: "預設資料表ID",
	DEFAULT_TABLE_ID_ROOT_VIKA_DESC: "同步到Vika時，預設使用的資料表ID。",
	DEFAULT_TABLE_ID_ROOT_VIKA_EXAMPLE:
		"輸入為空時，預設使用：\n${vikaTableIDForSync}",
	DEFAULT_TABLE_ID_ROOT_VIKA_TITLE: "預設資料表ID",
	DEFAULT_VIEW_ID_ROOT_DING_DESC: "釘釘AI表格的預設視圖ID",
	DEFAULT_VIEW_ID_ROOT_DING_EXAMPLE:
		"輸入為空時，預設使用：\n${dingViewIDForSync}",
	DEFAULT_VIEW_ID_ROOT_DING_TITLE: "預設視圖ID",
	DOWNLOAD_APP_TOKEN_FOLDER_DESC:
		"在分離模式下，從飛書下載數據時，所使用的應用Token（數據庫ID）。",
	DOWNLOAD_APP_TOKEN_FOLDER_EXAMPLE: "JsTgbO9xxxxxXJsjtGtceTlBnoG",
	DOWNLOAD_APP_TOKEN_FOLDER_TITLE: "分離模式下，下載數據使用的應用Token",
	DOWNLOAD_BASE_ID_FOLDER_AIRTABLE_DESC:
		"分離模式下，從Airtable下載數據時，所使用的數據庫ID。",
	DOWNLOAD_BASE_ID_FOLDER_AIRTABLE_EXAMPLE: "appq2MxxxxBdZc3Sc",
	DOWNLOAD_BASE_ID_FOLDER_AIRTABLE_TITLE:
		"分離模式下，下載數據使用的數據庫ID",
	DOWNLOAD_BASE_ID_FOLDER_DING_DESC:
		"分離模式下，從釘釘AI表格下載數據時使用的數據庫ID",
	DOWNLOAD_BASE_ID_FOLDER_DING_EXAMPLE: "pYLaezmVNevBvvEYfgjpva3nWrMqPxX6",
	DOWNLOAD_BASE_ID_FOLDER_DING_TITLE: "分離模式下，下載數據使用的數據庫",
	DOWNLOAD_FILE_ID_FOLDER_WPS_DESC:
		"分離模式下，從WPS多維表下載數據時，使用的文件ID",
	DOWNLOAD_FILE_ID_FOLDER_WPS_EXAMPLE: "cmLlHZY7Iyg7",
	DOWNLOAD_FILE_ID_FOLDER_WPS_TITLE: "分類模式下，下載數據使用的文件ID",
	DOWNLOAD_SHEET_ID_FOLDER_DING_DESC:
		"分離模式下，從釘釘AI表格下載數據時，使用的數據表ID",
	DOWNLOAD_SHEET_ID_FOLDER_DING_EXAMPLE: "rnkKzcV",
	DOWNLOAD_SHEET_ID_FOLDER_DING_TITLE: "分類模式下，下載數據使用的數據表ID",
	DOWNLOAD_SHEET_ID_FOLDER_WPS_DESC:
		"分離模式下，從WPS多維表下載數據時，使用的數據表ID",
	DOWNLOAD_SHEET_ID_FOLDER_WPS_EXAMPLE: "4",
	DOWNLOAD_SHEET_ID_FOLDER_WPS_TITLE: "分類模式下，下載數據使用的數據表ID",
	DOWNLOAD_TABLE_ID_FOLDER_AIRTABLE_DESC:
		"分離模式下，從Airtable下載數據時，使用的數據表ID。",
	DOWNLOAD_TABLE_ID_FOLDER_AIRTABLE_EXAMPLE: "tblWIExxxxxQSDUz4",
	DOWNLOAD_TABLE_ID_FOLDER_AIRTABLE_TITLE:
		"分離模式下，下載數據使用的數據表ID",
	DOWNLOAD_TABLE_ID_FOLDER_DESC:
		"分離模式下，從飛書多維表下載數據時，所使用的數據表ID。",
	DOWNLOAD_TABLE_ID_FOLDER_EXAMPLE: "tblor4xxxxx54AZD",
	DOWNLOAD_TABLE_ID_FOLDER_TITLE: "分離模式下，下載數據時使用的數據表ID",
	DOWNLOAD_TABLE_ID_FOLDER_VIKA_DESC:
		"分離模式下，從Vika多維表下載數據時，所使用的數據表ID。",
	DOWNLOAD_TABLE_ID_FOLDER_VIKA_EXAMPLE: "dstl4fxxxxxWzoh51x",
	DOWNLOAD_TABLE_ID_FOLDER_VIKA_TITLE: "分離模式下，下載數據使用的數據表ID",
	DOWNLOAD_VIEW_ID_FOLDER_DING_DESC:
		"分離模式下，從釘釘AI表格下載數據時，所使用的的視圖ID。",
	DOWNLOAD_VIEW_ID_FOLDER_DING_EXAMPLE: "JYP28Be",
	DOWNLOAD_VIEW_ID_FOLDER_DING_TITLE: "分離模式下，下載數據使用的視圖ID",
	ENABLE_DATE_FILTER_FOR_BATCH_SYNC_FOLDER_DESC:
		"在批量上傳或者下載的同步模式下，是否使用筆記或者記錄的更新日期對筆記或記錄進行篩選。\n\ntrue 為使用更新日期進行篩選；\nfalse 為不使用更新日期進行篩選。",
	ENABLE_DATE_FILTER_FOR_BATCH_SYNC_FOLDER_EXAMPLE: "false",
	ENABLE_DATE_FILTER_FOR_BATCH_SYNC_FOLDER_TITLE:
		"啟用批量同步時的日期篩選功能",
	ENABLE_DATE_FILTER_FOR_BATCH_SYNC_VAULT_DESC:
		"在批量上傳或者下載的同步模式下，是否使用筆記或者記錄的更新日期對筆記或記錄進行篩選。\n\ntrue 為使用更新日期進行篩選；\nfalse 為不使用更新日期進行篩選。",
	ENABLE_DATE_FILTER_FOR_BATCH_SYNC_VAULT_EXAMPLE: "false",
	ENABLE_DATE_FILTER_FOR_BATCH_SYNC_VAULT_TITLE: "啟用批量同步的日期篩選功能",
	ENABLE_UPDATE_FROM_DB_FOLDER_DESC:
		"在同步完成時，是否使用多維表中的數據來更新筆記的自定義屬性、標籤、別名、以及筆記的內容。\n\nture 為使用多維表數據進行更新；\nfalse 為不使用多維表數據進行更新。",
	ENABLE_UPDATE_FROM_DB_FOLDER_EXAMPLE: "false",
	ENABLE_UPDATE_FROM_DB_FOLDER_TITLE:
		"是否使用資料庫返回的數據更新OB中的內容",
	ENABLE_UPDATE_FROM_DB_VAULT_DESC:
		"在同步完成時，是否使用多維表中的數據來更新筆記的自定義屬性、標籤、別名、以及筆記的內容。\n\nture 為使用多維表數據進行更新；\nfalse 為不使用多維表數據進行更新。",
	ENABLE_UPDATE_FROM_DB_VAULT_EXAMPLE: "false",
	ENABLE_UPDATE_FROM_DB_VAULT_TITLE: "是否使用資料庫返回的數據更新OB中的內容",
	ENABLE_UPDATE_PROPERTIES_FROM_DOWLOAD_TABLE_FOLDER_DESC:
		"在分離模式下，當從配置的數據表中下載數據到筆記時，是否使用所配置載數據表中的數據，去更新當前同步資料夾所設置的筆記的自定義屬性。\n\ntrue 為更新；\nfalse 為不更新。",
	ENABLE_UPDATE_PROPERTIES_FROM_DOWLOAD_TABLE_FOLDER_EXAMPLE: "false",
	ENABLE_UPDATE_PROPERTIES_FROM_DOWLOAD_TABLE_FOLDER_TITLE:
		"分離模式下，是否使用下載數據表中的數據更新筆記屬性",
	ENABLE_UPDATE_PROPERTIES_FROM_DOWLOAD_TABLE_VAULT_DESC:
		"在分離模式下，當從配置的數據表中下載數據到筆記時，是否使用所配置數據表中的數據，去更新當前同步資料夾所設置的筆記的自定義屬性。\n\ntrue 為更新；\nfalse 為不更新。",
	ENABLE_UPDATE_PROPERTIES_FROM_DOWLOAD_TABLE_VAULT_EXAMPLE: "false",
	ENABLE_UPDATE_PROPERTIES_FROM_DOWLOAD_TABLE_VAULT_TITLE:
		"分離模式下，是否使用下載數據表中的數據更新筆記屬性",
	EXTRACT_BLOCKS_AS_TEXT_FOLDER_AIRTABLE_DESC:
		"從筆記中提取區塊時，是否將提取的內容作為文本在資料庫中儲存。\n\nfalse：使用陣列進行儲存，Airtable中的欄位需要是多選欄位，也可以用允許關聯多項記錄的關聯欄位\n\ntrue：使用文本進行儲存，Airtable中的欄位需要是多行文本欄位",
	EXTRACT_BLOCKS_AS_TEXT_FOLDER_AIRTABLE_EXAMPLE: "false",
	EXTRACT_BLOCKS_AS_TEXT_FOLDER_AIRTABLE_TITLE: "提取區塊為多行文本",
	EXTRACT_BLOCKS_AS_TEXT_FOLDER_DESC:
		"從筆記中提取區塊時，是否將提取的內容作為文本在數據庫中存儲。\n\nfalse: 使用數組進行存儲，多維表的字段需要是多選字段\n\ntrue: 使用文本進行存儲，多維表中的字段需要是多行文本字段",
	EXTRACT_BLOCKS_AS_TEXT_FOLDER_EXAMPLE: "true",
	EXTRACT_BLOCKS_AS_TEXT_FOLDER_TITLE: "提取區塊為多行文本",
	EXTRACT_BLOCKS_AS_TEXT_VAULT_AIRTABLE_DESC:
		"從筆記中提取區塊時，是否將提取的內容作為文本在資料庫中儲存。\n\nfalse: 使用陣列進行儲存，Airtable中的欄位需要是多選或者允許關聯多項記錄的關聯欄位。\n\ntrue: 使用文本進行儲存，Airtable中的欄位需要是多行文本欄位。",
	EXTRACT_BLOCKS_AS_TEXT_VAULT_AIRTABLE_EXAMPLE: "false",
	EXTRACT_BLOCKS_AS_TEXT_VAULT_AIRTABLE_TITLE: "提取區塊為多行文本",
	EXTRACT_BLOCKS_AS_TEXT_VAULT_DESC:
		"從筆記中提取區塊時，是否將提取的內容作為文本在數據庫中存儲。\n\nfalse: 使用數組進行存儲，多維表的字段需要是多選字段\ntrue: 使用文本進行存儲，多維表中的字段需要是多行文本字段",
	EXTRACT_BLOCKS_AS_TEXT_VAULT_EXAMPLE: "true",
	EXTRACT_BLOCKS_AS_TEXT_VAULT_TITLE: "提取區塊為多行文本",
	EXTRACT_BLOCKS_FOLDER_DESC:
		"把指定區塊的內容提取到多維表中的指定欄位。\n\n屬性名，為區塊中第一個連字號之前的內容。\n屬性值，是對應區塊在多維表中想要儲存的欄位名。",
	EXTRACT_BLOCKS_FOLDER_EXAMPLE:
		'{\ntips: "提示",\ncode: "程式碼",\ntable: "表格",\nmath: "數學",\nquote: "引言",\n}',
	EXTRACT_BLOCKS_FOLDER_TITLE: "提取指定區塊到指定欄位",
	EXTRACT_BLOCKS_OVERRIDE_MODE_FOLDER_DESC:
		"是否使用同步資料夾下的提取區塊設定，覆蓋庫級設定中的提取區塊設定",
	EXTRACT_BLOCKS_OVERRIDE_MODE_FOLDER_EXAMPLE: "true",
	EXTRACT_BLOCKS_OVERRIDE_MODE_FOLDER_TITLE: "開啟提取區塊的覆蓋模式",
	EXTRACT_BLOCKS_VAULT_DESC:
		"把指定的區塊內容，提取到指定的欄位。\n\n屬性名，為區塊中第一個連字號之前的內容。\n屬性值，是對應區塊在多維表中想要儲存的欄位名。",
	EXTRACT_BLOCKS_VAULT_EXAMPLE:
		'{\ntips: "提示",\ncode: "程式碼",\ntable: "表格",\nmath: "數學",\nquote: "引言"\n}',
	EXTRACT_BLOCKS_VAULT_TITLE: "提取指定區塊到指定欄位",
	EXTRACT_KEY_POINTS_AS_TEXT_FOLDER_AIRTABLE_DESC:
		"從筆記中提取要點時，是否將提取的內容作為文本在資料庫中儲存。\n\nfalse: 使用陣列進行儲存，Airtable中的欄位需要是多選或者允許關聯多項記錄的關聯欄位。\ntrue: 使用文本進行儲存，Airtable中的欄位需要是多行文本欄位。",
	EXTRACT_KEY_POINTS_AS_TEXT_FOLDER_AIRTABLE_EXAMPLE: "false",
	EXTRACT_KEY_POINTS_AS_TEXT_FOLDER_AIRTABLE_TITLE: "提取要點為多行文本",
	EXTRACT_KEY_POINTS_AS_TEXT_FOLDER_DESC:
		"從筆記中提取要點時，是否將提取的內容作為文本在資料庫中儲存。\n\nfalse: 使用陣列進行儲存，多維表的欄位需要是多選。\ntrue: 使用文本進行儲存，多維表中的欄位需要是多行文本欄位。",
	EXTRACT_KEY_POINTS_AS_TEXT_FOLDER_EXAMPLE: "true",
	EXTRACT_KEY_POINTS_AS_TEXT_FOLDER_TITLE: "提取要點為多行文本",
	EXTRACT_KEY_POINTS_AS_TEXT_VAULT_AIRTABLE_DESC:
		"從筆記中提取要點時，是否將提取的內容作為文本在資料庫中儲存。\n\nfalse：使用陣列進行儲存，Airtable中的欄位需要是多選或者允許關聯多項記錄的關聯欄位。\ntrue：使用文本進行儲存，Airtable中的欄位需要是多行文本欄位。",
	EXTRACT_KEY_POINTS_AS_TEXT_VAULT_AIRTABLE_EXAMPLE: "false",
	EXTRACT_KEY_POINTS_AS_TEXT_VAULT_AIRTABLE_TITLE: "提取要點為多行文本",
	EXTRACT_KEY_POINTS_AS_TEXT_VAULT_DESC:
		"從筆記中提取要點時，是否將提取的內容作為文本在資料庫中儲存。\n\nfalse: 使用陣列進行儲存，多維表的欄位需要是多選。\ntrue: 使用文本進行儲存，多維表中的欄位需要是多行文本欄位。",
	EXTRACT_KEY_POINTS_AS_TEXT_VAULT_EXAMPLE: "true",
	EXTRACT_KEY_POINTS_AS_TEXT_VAULT_TITLE: "提取要點為多行文本",
	EXTRACT_KEY_POINTS_FOLDER_DESC:
		'同步資料夾，在同步時想要提取的特殊標記內容。\n\n屬性名，為特殊標記的類型名。\n屬性值，是對應區塊在多維表中想要儲存的欄位名。\n\n目前支援的特殊標記的類型名如下：\n"highlights" 高亮語法 ==text==\n"italics" 斜體語法 *text* 或 _text_\n"strong" 粗體語法 **text**\n"bolds" 粗體語法 **text**（和strong一樣的效果，二選一使用）\n"underlines" 底線語法 <u>text</u>\n"deletions" 刪除線語法 ~~text~~\n"inlineCodes" 行內程式碼語法 `text`\n"singleQuotes" 引用語法 > 文字\n"boldItalics" 粗體斜體語法 ***text***\n"urls" 網址',
	EXTRACT_KEY_POINTS_FOLDER_EXAMPLE:
		'{\nhighlights: "疑點",\nitalics: "地名",\nstrong: "要點",\nunderlines: "人名",\ndeletions: "刪除",\ninlineCodes: "行內代碼",\nsingleQuotes: "引用"\n}',
	EXTRACT_KEY_POINTS_FOLDER_TITLE: "提取要點",
	EXTRACT_KEY_POINTS_OVERRIDE_MODE_FOLDER_DESC:
		"是否使用同步資料夾下的提取要點的設定，覆蓋庫級設定中的提取要點設定。",
	EXTRACT_KEY_POINTS_OVERRIDE_MODE_FOLDER_EXAMPLE: "true",
	EXTRACT_KEY_POINTS_OVERRIDE_MODE_FOLDER_TITLE: "是否固定庫級提取要點的設置",
	EXTRACT_KEY_POINTS_VAULT_DESC:
		'在同步時想要提取的特殊標記內容。\n\n屬性名，為特殊標記的類型名。\n屬性值，是對應區塊在多維表中想要存儲的欄位名。\n\n目前支持的特殊標記的類型名如下：\n\n "highlights" 高亮語法 ==text==\n "italics" 斜體語法 *text* 或 _text_ \n "strong" 粗體語法 **text**\n "bolds" 粗體語法 **text**（和strong一樣的效果，二選一使用）\n "underlines" 下劃線語法 <u>text</u>\n "deletions" 刪除線語法 ~~text~~\n "inlineCodes" 行內代碼語法 `text`\n "singleQuotes" 引用語法 > text\n "boldItalics" 粗體斜體語法 ***text***\n "urls" 網址',
	EXTRACT_KEY_POINTS_VAULT_EXAMPLE:
		'{\nhighlights: "疑點",\nitalics: "疑點",\nstrong: "加粗",\nunderlines: "下劃線",\ndeletions: "刪除",\ninlineCodes: "行內代碼",\nsingleQuotes: "引用",\n}',
	EXTRACT_KEY_POINTS_VAULT_TITLE: "提取筆記中的要點",
	EXTRACT_SECTIONS_AS_TEXT_FOLDER_AIRTABLE_DESC:
		"從筆記中提取指定的章節（Sections）時，是否將提取的內容作為文本在資料庫中儲存。\n\nfalse：使用陣列進行儲存，Airtable中的欄位需要是多選或者允許關聯多項記錄的關聯欄位\n\ntrue：使用文本進行儲存，Airtable中的欄位需要是多行文本欄位",
	EXTRACT_SECTIONS_AS_TEXT_FOLDER_AIRTABLE_EXAMPLE: "false",
	EXTRACT_SECTIONS_AS_TEXT_FOLDER_AIRTABLE_TITLE: "提取章節為多行文本",
	EXTRACT_SECTIONS_AS_TEXT_FOLDER_DESC:
		"從筆記中提取指定的章節（Sections）時，是否將提取的內容作為文本在資料庫中儲存。\n\nfalse: 使用陣列進行儲存，多維表的欄位需要是多選或者允許關聯多項記錄的關聯欄位\n\ntrue: 使用文本進行儲存，多維表中的欄位需要是多行文本欄位",
	EXTRACT_SECTIONS_AS_TEXT_FOLDER_EXAMPLE: "true",
	EXTRACT_SECTIONS_AS_TEXT_FOLDER_TITLE: "提取章節為多行文本",
	EXTRACT_SECTIONS_AS_TEXT_VAULT_AIRTABLE_DESC:
		"從筆記中提取指定的章節（Sections）時，是否將提取的內容作為文本在資料庫中存儲。\n\nfalse: 使用數組進行存儲，Airtable中的欄位需要是多選或者允許關聯多項記錄的關聯欄位\n\ntrue: 使用文本進行存儲，Airtable中的欄位需要是多行文本欄位",
	EXTRACT_SECTIONS_AS_TEXT_VAULT_AIRTABLE_EXAMPLE: "false",
	EXTRACT_SECTIONS_AS_TEXT_VAULT_AIRTABLE_TITLE: "提取章節為多行文本",
	EXTRACT_SECTIONS_AS_TEXT_VAULT_DESC:
		"從筆記中提取指定的章節（Sections）時，是否將提取的內容作為文本在資料庫中儲存。\n\nfalse：使用陣列進行儲存，多維表的欄位需要是多選。\n\ntrue：使用文本進行儲存，多維表中的欄位需要是多行文本欄位。",
	EXTRACT_SECTIONS_AS_TEXT_VAULT_EXAMPLE: "true",
	EXTRACT_SECTIONS_AS_TEXT_VAULT_TITLE: "提取章節為多行文本",
	EXTRACT_SECTIONS_FOLDER_DESC:
		"同步資料夾，在同步時，想要提取的指定章節內容。\n\n屬性名，為章節的標題名。\n屬性值，對應章節想要在多維表中儲存的欄位名。",
	EXTRACT_SECTIONS_FOLDER_EXAMPLE: "總結",
	EXTRACT_SECTIONS_FOLDER_TITLE: "提取章節",
	EXTRACT_SECTIONS_OVERRIDE_MODE_FOLDER_DESC:
		"是否使用同步資料夾下的提取章節的配置覆蓋庫級設定中的提取章節的配置",
	EXTRACT_SECTIONS_OVERRIDE_MODE_FOLDER_EXAMPLE: "true",
	EXTRACT_SECTIONS_OVERRIDE_MODE_FOLDER_TITLE: "是否庫級設置中的提取章節配置",
	EXTRACT_SECTIONS_VAULT_DESC:
		"在同步時，想要提取的指定章節內容。\n\n屬性名，為章節的標題名。\n屬性值，對應章節想要在多維表中存儲的欄位名。",
	EXTRACT_SECTIONS_VAULT_EXAMPLE: "總結",
	EXTRACT_SECTIONS_VAULT_TITLE: "提取章節",
	EXTRACT_TAG_LINES_AS_TEXT_FOLDER_AIRTABLE_DESC:
		"從筆記中提取包含指定標籤的行時，是否將提取的內容作為文本在資料庫中儲存。\n\nfalse: 使用陣列進行儲存，Airtable中的欄位需要是多選或者允許關聯多項記錄的關聯欄位。\n\ntrue: 使用文本進行儲存，Airtable中的欄位需要是多行文本欄位。",
	EXTRACT_TAG_LINES_AS_TEXT_FOLDER_AIRTABLE_EXAMPLE: "false",
	EXTRACT_TAG_LINES_AS_TEXT_FOLDER_AIRTABLE_TITLE:
		"把指定標籤行提取為多行文本",
	EXTRACT_TAG_LINES_AS_TEXT_FOLDER_DESC:
		"從筆記中提取包含指定標籤的行時，是否將提取的內容作為文本在資料庫中儲存。\n\nfalse: 使用陣列進行儲存，多維表的欄位需要是多選。\ntrue: 使用文本進行儲存，多維表中的欄位需要是多行文本欄位。",
	EXTRACT_TAG_LINES_AS_TEXT_FOLDER_EXAMPLE: "true",
	EXTRACT_TAG_LINES_AS_TEXT_FOLDER_TITLE: "把指定標籤行提取為多行文本",
	EXTRACT_TAG_LINES_AS_TEXT_VAULT_AIRTABLE_DESC:
		"從筆記中提取包含指定標籤的行時，是否將提取的內容作為文本在資料庫中儲存。\n\nfalse: 使用陣列進行儲存，Airtable中的欄位需要是多選或者允許關聯多項記錄的關聯欄位。\n\ntrue: 使用文本進行儲存，Airtable中的欄位需要是多行文本欄位。",
	EXTRACT_TAG_LINES_AS_TEXT_VAULT_AIRTABLE_EXAMPLE: "false",
	EXTRACT_TAG_LINES_AS_TEXT_VAULT_AIRTABLE_TITLE:
		"把指定標籤行提取為多行文本",
	EXTRACT_TAG_LINES_AS_TEXT_VAULT_DESC:
		"從筆記中提取包含指定標籤的行時，是否將提取的內容作為文本在數據庫中存儲。\n\nfalse: 使用數組進行存儲，多維表的字段需要是多選字段，\n\ntrue: 使用文本進行存儲，多維表中的字段需要是多行文本字段，",
	EXTRACT_TAG_LINES_AS_TEXT_VAULT_EXAMPLE: "true",
	EXTRACT_TAG_LINES_AS_TEXT_VAULT_TITLE: "把指定的標籤行提取為多行文本",
	EXTRACT_TAG_LINES_FOLDER_DESC:
		"同步資料夾，在同步時，想要提取的包含指定標籤的行。\n\n屬性名，標籤名（不包含#符號）。\n屬性值，是對應標籤在多維表中想要儲存的欄位名。",
	EXTRACT_TAG_LINES_FOLDER_EXAMPLE: '閃念: "FleetingNotes"',
	EXTRACT_TAG_LINES_FOLDER_TITLE: "提取指定標籤行",
	EXTRACT_TAG_LINES_OVERRIDE_MODE_FOLDER_DESC:
		"是否使用同步資料夾下的提取標籤配置覆蓋庫級設置中的提取標籤配置",
	EXTRACT_TAG_LINES_OVERRIDE_MODE_FOLDER_EXAMPLE: "true",
	EXTRACT_TAG_LINES_OVERRIDE_MODE_FOLDER_TITLE:
		"是否開啟提取標籤行的覆蓋模式",
	EXTRACT_TAG_LINES_VAULT_DESC:
		"同步資料夾，在同步時，想要提取的包含指定標籤的行。\n\n屬性名，標籤名（不包含#符號）。\n屬性值，是對應標籤在多維表中想要儲存的欄位名。",
	EXTRACT_TAG_LINES_VAULT_EXAMPLE: '閃念: "FleetingNotes"',
	EXTRACT_TAG_LINES_VAULT_TITLE: "提取指定標籤行",
	FETCH_ACCESS_TOKEN_ROOT_WPS_DESC: "WPS的用戶訪問令牌",
	FETCH_ACCESS_TOKEN_ROOT_WPS_EXAMPLE:
		"設定時如果輸入為空，預設使用：\n${wpsUserTokenForFetch}",
	FETCH_ACCESS_TOKEN_ROOT_WPS_TITLE: "訪問令牌",
	FETCH_API_KEY_ROOT_AIRTABLE_DESC:
		"從Airtable獲取數據時使用的API Key。\nAirtable的API Key，已經升級為Personal Access Token。\n你可以在 https://airtable.com/create/tokens 獲取你的 Personal Access Token。",
	FETCH_API_KEY_ROOT_AIRTABLE_EXAMPLE:
		"輸入為空時，預設使用：\n${airtableAPIKeyForFetch}\n\n如果自行輸入，請先在Airtable中獲取你的Personal Access Token",
	FETCH_API_KEY_ROOT_AIRTABLE_TITLE: "Airtable PAT密鑰",
	FETCH_API_KEY_ROOT_VIKA_DESC:
		"從Vika獲取數據時，必須提供一個相應的API Key。",
	FETCH_API_KEY_ROOT_VIKA_EXAMPLE:
		"輸入為空時，預設使用：\n${vikaAPIKeyForFetch}\n\n如果自行輸入，請在Vika設置中獲取你的API密鑰",
	FETCH_API_KEY_ROOT_VIKA_TITLE: "API金鑰",
	FETCH_APP_ID_ROOT_DING_DESC: "從釘釘獲取數據時，需要提供自建應用的App ID",
	FETCH_APP_ID_ROOT_DING_EXAMPLE:
		"輸入為空時，預設使用：\n${dingAppIDForFetch}\n\n如果自行輸入，請在釘釘的自建應用管理中獲取你的應用ID",
	FETCH_APP_ID_ROOT_DING_TITLE: "應用ID",
	FETCH_APP_ID_ROOT_FEISHU_DESC: "從飛書獲取數據時，需要提供自建應用的APP ID",
	FETCH_APP_ID_ROOT_FEISHU_EXAMPLE:
		"輸入為空時，預設使用：\n${feishuAppIDForFetch}",
	FETCH_APP_ID_ROOT_FEISHU_TITLE: "應用ID",
	FETCH_APP_ID_ROOT_LARK_DESC: "從Lark獲取數據時，需要提供自建應用的APP ID",
	FETCH_APP_ID_ROOT_LARK_EXAMPLE:
		"輸入為空時，預設使用：\n${larkAppIDForFetch}",
	FETCH_APP_ID_ROOT_LARK_TITLE: "應用ID",
	FETCH_APP_ID_ROOT_WPS_DESC: "從WPS獲取數據時，需要提供自建應用的App ID",
	FETCH_APP_ID_ROOT_WPS_EXAMPLE:
		"輸入為空時，預設使用：\n${wpsAppIDForFetch}",
	FETCH_APP_ID_ROOT_WPS_TITLE: "應用ID",
	FETCH_APP_KEY_ROOT_WPS_DESC: "從WPS獲取數據時，需要提供自建應用的APP密鑰",
	FETCH_APP_KEY_ROOT_WPS_EXAMPLE:
		"輸入為空時，預設使用：\n${wpsAppSecretForFetch}",
	FETCH_APP_KEY_ROOT_WPS_TITLE: "應用密鑰",
	FETCH_APP_SECRET_ROOT_DING_DESC:
		"從釘釘獲取數據時，需要提供自建應用的App密鑰",
	FETCH_APP_SECRET_ROOT_DING_EXAMPLE:
		"輸入為空時，預設使用：\n${dingAppSecretForFetch}",
	FETCH_APP_SECRET_ROOT_DING_TITLE: "應用密鑰",
	FETCH_APP_SECRET_ROOT_FEISHU_DESC:
		"從飛書獲取數據時，需要提供自建應用的APP密鑰",
	FETCH_APP_SECRET_ROOT_FEISHU_EXAMPLE:
		"輸入為空時，預設使用：\n${feishuAppSecretForFetch}",
	FETCH_APP_SECRET_ROOT_FEISHU_TITLE: "應用密鑰",
	FETCH_APP_SECRET_ROOT_LARK_DESC:
		"從Lark獲取數據時，需要提供自建應用的APP密鑰",
	FETCH_APP_SECRET_ROOT_LARK_EXAMPLE:
		"輸入為空時，預設使用：\n${larkAppSecretForFetch}",
	FETCH_APP_SECRET_ROOT_LARK_TITLE: "應用密鑰",
	FETCH_APP_TOKEN_FOLDER_DESC:
		"獲取數據時，使用的appToken。\n\n如果輸入為空，預設使用defaultAppToken",
	FETCH_APP_TOKEN_FOLDER_EXAMPLE: "appxxxxxx",
	FETCH_APP_TOKEN_FOLDER_TITLE: "應用Token",
	FETCH_BASE_ID_FOLDER_AIRTABLE_DESC:
		"數據源的數據庫ID，如果為空，使用默認的defaultBaseID。",
	FETCH_BASE_ID_FOLDER_AIRTABLE_EXAMPLE: "appxxxxxx",
	FETCH_BASE_ID_FOLDER_AIRTABLE_TITLE: "資料庫ID",
	FETCH_DEFAULT_APP_TOKEN_ROOT_FEISHU_DESC:
		"從飛書獲取數據時，默認使用的多維表的用戶Token。\n\n多維表的App Token，相當於Airtable中的Base ID。",
	FETCH_DEFAULT_APP_TOKEN_ROOT_FEISHU_EXAMPLE:
		"輸入為空時，預設使用：\n${feishuBaseIDForFetch}",
	FETCH_DEFAULT_APP_TOKEN_ROOT_FEISHU_TITLE: "預設應用Token",
	FETCH_DEFAULT_APP_TOKEN_ROOT_LARK_DESC:
		"從Lark獲取數據時，默認使用的多維表的App Token。\n\n多維表的App Token，相當於Airtable中的Base ID。",
	FETCH_DEFAULT_APP_TOKEN_ROOT_LARK_EXAMPLE:
		"輸入為空時，預設使用：\n${larkBaseIDForFetch}",
	FETCH_DEFAULT_APP_TOKEN_ROOT_LARK_TITLE: "預設應用Token",
	FETCH_DEFAULT_BASE_ID_ROOT_AIRTABLE_DESC:
		"從Airtable獲取數據時，默認使用的Base ID。",
	FETCH_DEFAULT_BASE_ID_ROOT_AIRTABLE_EXAMPLE:
		"輸入為空時，預設使用：\n${airtableBaseIDForFetch}",
	FETCH_DEFAULT_BASE_ID_ROOT_AIRTABLE_TITLE: "預設Base ID",
	FETCH_DEFAULT_BASE_ID_ROOT_DING_DESC:
		"從釘釘獲取數據時，默認使用的AI表格的Base ID",
	FETCH_DEFAULT_BASE_ID_ROOT_DING_EXAMPLE:
		"輸入為空時，預設使用：\n${dingBaseIDForFetch}",
	FETCH_DEFAULT_BASE_ID_ROOT_DING_TITLE: "預設Base ID",
	FETCH_DEFAULT_FILE_ID_ROOT_WPS_DESC:
		"從WPS獲取數據時，默認使用的多維表文件ID",
	FETCH_DEFAULT_FILE_ID_ROOT_WPS_EXAMPLE:
		"輸入為空時，預設使用：\n${wpsBaseIDForFetch}",
	FETCH_DEFAULT_FILE_ID_ROOT_WPS_TITLE: "預設文件ID",
	FETCH_DEFAULT_SHEET_ID_ROOT_DING_DESC:
		"從釘釘獲取數據時，默認使用的AI表格的數據表ID",
	FETCH_DEFAULT_SHEET_ID_ROOT_DING_EXAMPLE:
		"輸入為空時，預設使用：\n${dingTableIDForFetch}",
	FETCH_DEFAULT_SHEET_ID_ROOT_DING_TITLE: "預設資料表ID",
	FETCH_DEFAULT_SHEET_ID_ROOT_WPS_DESC: "從WPS獲取數據時，默認使用的數據表ID",
	FETCH_DEFAULT_SHEET_ID_ROOT_WPS_EXAMPLE:
		"輸入為空時，預設使用：\n${wpsTableIDForFetch}",
	FETCH_DEFAULT_SHEET_ID_ROOT_WPS_TITLE: "預設資料表ID",
	FETCH_DEFAULT_TABLE_ID_ROOT_AIRTABLE_DESC:
		"從Airtable獲取數據時，默認使用的數據表ID。",
	FETCH_DEFAULT_TABLE_ID_ROOT_AIRTABLE_EXAMPLE:
		"輸入為空時，預設使用：\n${airtableTableIDForFetch}",
	FETCH_DEFAULT_TABLE_ID_ROOT_AIRTABLE_TITLE: "預設資料表ID",
	FETCH_DEFAULT_TABLE_ID_ROOT_FEISHU_DESC:
		"從飛書獲取數據時，默認使用的數據表ID。",
	FETCH_DEFAULT_TABLE_ID_ROOT_FEISHU_EXAMPLE:
		"輸入為空時，預設使用：\n${feishuTableIDForFetch}",
	FETCH_DEFAULT_TABLE_ID_ROOT_FEISHU_TITLE: "預設資料表ID",
	FETCH_DEFAULT_TABLE_ID_ROOT_LARK_DESC:
		"從Lark獲取數據時，默認使用的數據表ID。",
	FETCH_DEFAULT_TABLE_ID_ROOT_LARK_EXAMPLE:
		"輸入為空時，預設使用：\n${larkTableIDForFetch}",
	FETCH_DEFAULT_TABLE_ID_ROOT_LARK_TITLE: "預設資料表ID",
	FETCH_DEFAULT_TABLE_ID_ROOT_VIKA_DESC:
		"從Vika獲取數據時，默認使用的數據表ID。",
	FETCH_DEFAULT_TABLE_ID_ROOT_VIKA_EXAMPLE:
		"輸入為空時，預設使用：\n${vikaTableIDForFetch}",
	FETCH_DEFAULT_TABLE_ID_ROOT_VIKA_TITLE: "預設資料表ID",
	FETCH_DEFAULT_VIEW_ID_ROOT_DING_DESC:
		"從釘釘獲取數據時，默認使用的AI表格的視圖ID",
	FETCH_DEFAULT_VIEW_ID_ROOT_DING_EXAMPLE:
		"輸入為空時，預設使用：\n${dingViewIDForFetch}",
	FETCH_DEFAULT_VIEW_ID_ROOT_DING_TITLE: "預設視圖ID",
	FETCH_GENERATOR_VIEW_BTN_ADD_FOLDER: "新增資料夾設定",
	FETCH_GENERATOR_VIEW_BTN_BROWSE: "瀏覽",
	FETCH_GENERATOR_VIEW_BTN_GENERATE: "生成腳本",
	FETCH_GENERATOR_VIEW_BTN_IMPORT_TEMPLATE: "導入模板",
	FETCH_GENERATOR_VIEW_BTN_LOAD_DEFAULT: "加載預設模板",
	FETCH_GENERATOR_VIEW_BTN_PRESETS: "載入預設",
	FETCH_GENERATOR_VIEW_BTN_REMOVE: "移除",
	FETCH_GENERATOR_VIEW_BTN_SAVE_PRESET: "保存預設",
	FETCH_GENERATOR_VIEW_BTN_TOGGLE_ALL_FOLDERS: "展開/收起所有資料夾卡片",
	FETCH_GENERATOR_VIEW_DESC_PLACEHOLDER: "選擇一個設置項以在此處查看說明。",
	FETCH_GENERATOR_VIEW_DESC_TITLE: "說明",
	FETCH_GENERATOR_VIEW_EXAMPLE_USAGE_TITLE: "示例/用法:",
	FETCH_GENERATOR_VIEW_FOLDER_HEADER_PREFIX: "資料夾",
	FETCH_GENERATOR_VIEW_NOTICE_IMPORTED: "已從 ${file} 導入設置",
	FETCH_GENERATOR_VIEW_NOTICE_LOAD_FAILED: "加載預設模板失敗: ${error}",
	FETCH_GENERATOR_VIEW_NOTICE_NO_DEFAULT: "未為此平台配置預設模板。",
	FETCH_GENERATOR_VIEW_NOTICE_NO_PLATFORM: "無法在模板中檢測到平台。",
	FETCH_GENERATOR_VIEW_NOTICE_TEMPLATE_NOT_FOUND: "找不到模板文件：${path}",
	FETCH_GENERATOR_VIEW_PLATFORMS_TITLE: "平台",
	FETCH_GENERATOR_VIEW_SETTINGS_SUFFIX: "設定",
	FETCH_GENERATOR_VIEW_SETTINGS_TITLE_SUFFIX: "獲取設置",
	FETCH_GENERATOR_VIEW_TAB_FOLDER: "資料夾級",
	FETCH_GENERATOR_VIEW_TAB_VAULT: "庫級",
	FETCH_GENERATOR_VIEW_TAB_ROOT: "必要",
	FETCH_GENERATOR_VIEW_TARGET_FOLDER_DESC:
		"您想要獲取數據到的目標資料夾路徑。",
	FETCH_GENERATOR_VIEW_TARGET_FOLDER_EXAMPLE: "示例：MyVault/Projects/Active",
	FETCH_GENERATOR_VIEW_TARGET_FOLDER_NAME: "目標資料夾",
	FETCH_GENERATOR_VIEW_TARGET_FOLDER_PLACEHOLDER: "目標資料夾路徑",
	FETCH_GENERATOR_VIEW_TITLE: "數據獲取腳本生成器",
	FETCH_PRESET_MANAGER_BTN_CLOSE: "關閉",
	FETCH_PRESET_MANAGER_BTN_DELETE: "刪除",
	FETCH_PRESET_MANAGER_BTN_LOAD: "載入",
	FETCH_PRESET_MANAGER_CONFIRM_DELETE: "您確定要刪除預設「${name}」嗎？",
	FETCH_PRESET_MANAGER_LOAD_EMPTY:
		"尚未儲存預設。儲存配置以建立您的第一個預設。",
	FETCH_PRESET_MANAGER_LOAD_TITLE: "載入預設",
	FETCH_PRESET_MANAGER_NOTICE_DELETED: "已刪除預設「${name}」",
	FETCH_PRESET_MANAGER_NOTICE_DUPLICATE:
		"此名稱的預設已存在。請使用不同的名稱。",
	FETCH_PRESET_MANAGER_NOTICE_ENTER_NAME: "請輸入預設名稱",
	FETCH_PRESET_MANAGER_NOTICE_LOADED: "已加載預設「${name}」",
	FETCH_PRESET_MANAGER_NOTICE_SAVED: '預設 "${name}" 已成功保存',
	FETCH_PRESET_MANAGER_SAVE_BTN: "保存預設",
	FETCH_PRESET_MANAGER_SAVE_PLACEHOLDER:
		'預設名稱（例如："Airtable Fetch Production"）',
	FETCH_PRESET_MANAGER_SAVE_TITLE: "保存當前配置",
	FETCH_PRESET_MANAGER_TAB_LOAD: "載入預設",
	FETCH_PRESET_MANAGER_TAB_SAVE: "保存預設",
	FETCH_PRESET_MANAGER_TITLE: "數據獲取配置預設",
	FETCH_SOURCE_NAME_FOLDER_DESC: "使用者定義的資料來源名稱",
	FETCH_SOURCE_NAME_FOLDER_EXAMPLE: "我的閃念",
	FETCH_SOURCE_NAME_FOLDER_TITLE: "數據獲取源名稱",
	FETCH_TABLE_ID_FOLDER_DESC:
		"數據源的數據表ID，如果為空，使用預設的defaultTableID。",
	FETCH_TABLE_ID_FOLDER_EXAMPLE: "tblxxxxxx",
	FETCH_TABLE_ID_FOLDER_TITLE: "資料表ID",
	FETCH_TARGET_FOLDER_FOLDER_DESC: "儲存獲取數據的資料夾路徑",
	FETCH_TARGET_FOLDER_FOLDER_EXAMPLE: "2-輸出/我的閃念",
	FETCH_TARGET_FOLDER_FOLDER_TITLE: "目標資料夾",
	FETCH_USER_ID_ROOT_DING_DESC:
		"從釘釘獲取數據時，默認使用的通訊錄中的用戶ID",
	FETCH_USER_ID_ROOT_DING_EXAMPLE:
		"輸入為空時，預設使用：\n${dingUserIDForFetch}",
	FETCH_USER_ID_ROOT_DING_TITLE: "用戶ID",
	FETCH_VAULT_FIELDS_NAMES_DESC:
		'使用該欄位去配置多維表中使用的預設資料獲取的欄位名。\n\n可以配置的預設欄位及其預設值，如下\n\nextension: "擴展名",\nsubFolder: "子資料夾",\nfetchContentFrom: "內容",\nfetchTitleFrom: "標題",\nupdatedTime: "更新時間",',
	FETCH_VAULT_FIELDS_NAMES_EXAMPLE:
		"擷取內容自：「MD」，\n擷取標題自：「標題」，",
	FETCH_VAULT_FIELDS_NAMES_TITLE: "預設獲取欄位名",
	FETCH_VIEW_ID_FOLDER_DESC: "用於獲取數據的視圖 ID",
	FETCH_VIEW_ID_FOLDER_EXAMPLE: "vwxxxxxx",
	FETCH_VIEW_ID_FOLDER_TITLE: "視圖ID",
	FIELDS_NAMES_VAULT_DESC:
		'使用改字段去配置多維表中使用的默認同步字段的字段名。\n\n可以配置的默認字段及其默認值，如下\n\ntitle: "標題",\ncontent: "內容",\ntags: "標籤",\naliases: "別名",\ncreatedTime: "創建時間",\nupdatedTime: "更新時間",\npath: "路徑",\nvault: "庫",\nfullContent: "全文內容",\nobsidianURI: "OBURI",',
	FIELDS_NAMES_VAULT_EXAMPLE:
		'{\ntitle: "標題",\npath: "路徑",\ncontent: "內容"\n}',
	FIELDS_NAMES_VAULT_TITLE: "預設同步欄位名稱",
	FILE_ID_FOLDER_WPS_DESC: "WPS多維表文件ID",
	FILE_ID_FOLDER_WPS_EXAMPLE: "cmLlHZY7Iyg7",
	FILE_ID_FOLDER_WPS_TITLE: "文件ID",
	FM_FETCH_FIELDS_FOLDER_DESC:
		"在同步完成時，根據指定值從多維表中獲取對應欄位的值，並儲存在筆記的屬性區。",
	FM_FETCH_FIELDS_FOLDER_EXAMPLE: "要點提取\n問題補充\n背景資訊",
	FM_FETCH_FIELDS_FOLDER_TITLE: "獲取到筆記屬性區的欄位",
	FM_FETCH_FIELDS_OVERRIDE_MODE_FOLDER_DESC:
		"是否使用同步資料夾下的屬性獲取欄位配置覆蓋庫級設定中的fmFetchFields設定",
	FM_FETCH_FIELDS_OVERRIDE_MODE_FOLDER_EXAMPLE: "true",
	FM_FETCH_FIELDS_OVERRIDE_MODE_FOLDER_TITLE: "是否開啟屬性獲取欄位覆蓋模式",
	FM_FETCH_FIELDS_VAULT_DESC:
		"在同步完成時，根據指定值從多維表中獲取對應欄位的值，並儲存在筆記的屬性區。",
	FM_FETCH_FIELDS_VAULT_EXAMPLE: "要點提取\n問題補充\n背景資訊",
	FM_FETCH_FIELDS_VAULT_TITLE: "屬性獲取欄位",
	FOLDER_NAME_FOLDER_DESC: "同步資料夾的完整路徑。",
	FOLDER_NAME_FOLDER_EXAMPLE: "Demo/筆記",
	FOLDER_NAME_FOLDER_TITLE: "資料夾路徑",
	GENERATOR_VIEW_BTN_ADD_FOLDER: "新增資料夾設定",
	GENERATOR_VIEW_BTN_BROWSE: "瀏覽",
	GENERATOR_VIEW_BTN_GENERATE: "生成同步腳本",
	GENERATOR_VIEW_BTN_IMPORT_TEMPLATE: "導入模板",
	GENERATOR_VIEW_BTN_LOAD_DEFAULT: "加載預設模板",
	GENERATOR_VIEW_BTN_PRESETS: "載入預設",
	GENERATOR_VIEW_BTN_REMOVE: "移除",
	GENERATOR_VIEW_BTN_SAVE_PRESET: "保存預設",
	GENERATOR_VIEW_DESC_PLACEHOLDER: "選擇一個設置項以在此處查看說明。",
	GENERATOR_VIEW_DESC_TITLE: "說明",
	GENERATOR_VIEW_EXAMPLE_USAGE_TITLE: "示例/用法:",
	GENERATOR_VIEW_FOLDER_LABEL: "資料夾",
	GENERATOR_VIEW_FOLDER_PATH_DESC: "您想要同步的資料夾路徑。",
	GENERATOR_VIEW_FOLDER_PATH_EXAMPLE: "示例：MyVault/Projects/Active",
	GENERATOR_VIEW_FOLDER_PATH_NAME: "資料夾路徑",
	GENERATOR_VIEW_GROUP_ADVANCED: "高級",
	GENERATOR_VIEW_GROUP_BASIC: "基礎",
	GENERATOR_VIEW_GROUP_EXTRACT: "提取",
	GENERATOR_VIEW_GROUP_OTHER: "其他",
	GENERATOR_VIEW_NOTICE_IMPORTED: "已從 ${file} 導入設置",
	GENERATOR_VIEW_NOTICE_LOAD_FAILED: "加載預設模板失敗: ${error}",
	GENERATOR_VIEW_NOTICE_NO_DEFAULT: "未為此平台配置預設模板。",
	GENERATOR_VIEW_NOTICE_NO_PLATFORM: "無法在模板中檢測到平台。",
	GENERATOR_VIEW_NOTICE_TEMPLATE_NOT_FOUND: "找不到模板文件：${path}",
	GENERATOR_VIEW_PLATFORMS_TITLE: "平台",
	GENERATOR_VIEW_SETTINGS_SUFFIX: "設定",
	GENERATOR_VIEW_TAB_FOLDER: "資料夾",
	GENERATOR_VIEW_TAB_ROOT: "必要",
	GENERATOR_VIEW_TAB_VAULT: "庫級",
	GENERATOR_VIEW_TITLE: "同步腳本生成器",
	GENERATOR_VIEW_TOOLTIP_EDIT_ARRAY: "編輯數組",
	GENERATOR_VIEW_TOOLTIP_EDIT_OBJECT: "編輯對象",
	INCLUDES_TAGS_IN_CONTENT_FOLDER_DESC:
		"當更新筆記的標籤屬性時，是否在其中包含筆記內容中的標籤。\n\ntrue 為包含；\nfalse 為不包含。",
	INCLUDES_TAGS_IN_CONTENT_FOLDER_EXAMPLE: "true",
	INCLUDES_TAGS_IN_CONTENT_FOLDER_TITLE: "在筆記的標籤屬性中包含內容中的標籤",
	INCLUDES_TAGS_IN_CONTENT_VAULT_DESC:
		"當更新筆記的標籤屬性時，是否在其中包含筆記內容中的標籤。\n\ntrue 為包含；\nfalse 為不包含。",
	INCLUDES_TAGS_IN_CONTENT_VAULT_EXAMPLE: "true",
	INCLUDES_TAGS_IN_CONTENT_VAULT_TITLE: "在筆記的標籤屬性中包含內容中的標籤",
	JUST_UPDATE_FROM_DB_FOLDER_DESC:
		"是否在同步選項中僅顯示下載類的選項。\n\ntrue 為僅顯示下載項；\nfalse 為顯示下載和其他項。",
	JUST_UPDATE_FROM_DB_FOLDER_EXAMPLE: "true",
	JUST_UPDATE_FROM_DB_FOLDER_TITLE: "僅從顯示從數據庫下載到OB的選項",
	JUST_UPDATE_FROM_DB_VAULT_DESC:
		"是否在同步選項中僅顯示下載選項。\n\ntrue 為僅顯示下載項；\nfalse 為顯示下載和其他項。",
	JUST_UPDATE_FROM_DB_VAULT_EXAMPLE: "true",
	JUST_UPDATE_FROM_DB_VAULT_TITLE: "僅從顯示從數據庫下載到OB的選項",
	MAIN_CMD_OPEN_FETCH: "打開獲取腳本生成器",
	MAIN_CMD_OPEN_SYNC: "打開同步腳本生成器",
	MAIN_RIBBON_FETCH: "獲取腳本生成器",
	MAIN_RIBBON_SYNC: "同步腳本生成器",
	OBJECT_EDIT_BTN_ADD_ENTRY: "新增條目",
	OBJECT_EDIT_BTN_CANCEL: "取消",
	OBJECT_EDIT_BTN_SAVE: "保存",
	OBJECT_EDIT_EMPTY_STATE: "暫無條目。點擊「添加條目」進行添加。",
	OBJECT_EDIT_PLACEHOLDER_KEY: "鍵",
	OBJECT_EDIT_PLACEHOLDER_VALUE: "值",
	OBJECT_EDIT_TITLE: "編輯 ${title}",
	OBJECT_EDIT_TOOLTIP_DELETE: "刪除",
	OBJECT_EDIT_TOOLTIP_OPEN_ARRAY_EDITOR: "打開陣列編輯器",
	OBJECT_EDIT_TYPE_ARRAY: "陣列",
	OBJECT_EDIT_TYPE_BOOLEAN: "布林值",
	OBJECT_EDIT_TYPE_NUMBER: "數字",
	OBJECT_EDIT_TYPE_STRING: "字串",
	PRESET_MANAGER_BTN_CLOSE: "關閉",
	PRESET_MANAGER_BTN_DELETE: "刪除",
	PRESET_MANAGER_BTN_LOAD: "載入",
	PRESET_MANAGER_CONFIRM_DELETE: "您確定要刪除預設「${name}」嗎？",
	PRESET_MANAGER_LOAD_EMPTY: "尚未儲存預設。儲存配置以建立您的第一個預設。",
	PRESET_MANAGER_LOAD_TITLE: "載入預設",
	PRESET_MANAGER_NOTICE_DELETED: "已刪除預設「${name}」",
	PRESET_MANAGER_NOTICE_DUPLICATE: "此名稱的預設已存在。請使用不同的名稱。",
	PRESET_MANAGER_NOTICE_ENTER_NAME: "請輸入預設名稱",
	PRESET_MANAGER_NOTICE_LOADED: "已加載預設「${name}」",
	PRESET_MANAGER_NOTICE_SAVED: '預設 "${name}" 已成功保存',
	PRESET_MANAGER_SAVE_BTN: "保存預設",
	PRESET_MANAGER_SAVE_PLACEHOLDER: '預設名稱（例如："Airtable Production"）',
	PRESET_MANAGER_SAVE_TITLE: "保存當前配置",
	PRESET_MANAGER_TAB_LOAD: "載入預設",
	PRESET_MANAGER_TAB_SAVE: "保存預設",
	PRESET_MANAGER_TITLE: "配置預設",
	PULL_CONTENT_ONLY_FOLDER_DESC:
		"在從數據庫獲取內容到筆記時，是否只獲取筆記內容，而不獲取筆記屬性",
	PULL_CONTENT_ONLY_FOLDER_EXAMPLE: "false",
	PULL_CONTENT_ONLY_FOLDER_TITLE: "僅從資料庫中獲取筆記內容",
	SCRIPT_PREVIEW_BTN_COPY: "複製到剪貼簿",
	SCRIPT_PREVIEW_BTN_MAXIMIZE: "最大化",
	SCRIPT_PREVIEW_BTN_RESTORE: "還原",
	SCRIPT_PREVIEW_BTN_SAVE_AS: "另存為檔案",
	SCRIPT_PREVIEW_BTN_UPDATE: "更新 ${file}",
	SCRIPT_PREVIEW_NOTICE_COPIED: "已複製到剪貼簿",
	SCRIPT_PREVIEW_NOTICE_SAVED: "已儲存到庫中為 ${file}",
	SCRIPT_PREVIEW_NOTICE_UPDATED: "已更新 ${path}",
	SCRIPT_PREVIEW_TITLE: "生成的腳本",
	SECTION_HEADING_WHOLE_MATCH_FOLDER_DESC:
		"從筆記中提取指定的章節時，是否使用指定標題的完全匹配模式\n\nfalse 不使用完全匹配，只要筆記標題中包含指定的標題內容，就會被提取\ntrue 使用完全匹配，只有筆記標題和指定的標題內容一模一樣時，才會被提取",
	SECTION_HEADING_WHOLE_MATCH_FOLDER_EXAMPLE: "true",
	SECTION_HEADING_WHOLE_MATCH_FOLDER_TITLE: "是否開啟章節標題完全匹配模式",
	SECTION_HEADING_WHOLE_MATCH_VAULT_DESC:
		"從筆記中提取指定的章節時，是否使用指定標題的完全匹配模式\n\nfalse 不使用完全匹配，只要筆記標題中包含指定的標題內容，就會被提取\ntrue 使用完全匹配，只有筆記標題和指定的標題內容一模一樣時，才會被提取",
	SECTION_HEADING_WHOLE_MATCH_VAULT_EXAMPLE: "true",
	SECTION_HEADING_WHOLE_MATCH_VAULT_TITLE: "是否開啟章節標題完全匹配模式",
	SEPARATE_MODE_FOLDER_DESC:
		"是否使用分離模式進行同步。\n\ntrue 使用分離模式\nfalse 不使用分離模式\n\n如果你選擇使用分離模式，還需要去設置分離模式使用的同步數據表的downloadTableID。\n\n如果你使用的是Airtable同步，那你還可以設置downloadBaseID。\n\n如果你使用的是Feishu同步，那你還可以設置downloadAppToken。\n\n如果你使用的是Vika同步，你只需要設置downloadTableID就可以了。",
	SEPARATE_MODE_FOLDER_EXAMPLE: "false",
	SEPARATE_MODE_FOLDER_TITLE: "分離模式",
	SETTINGS_BTN_BROWSE: "瀏覽",
	SETTINGS_DEFAULT_FETCH_TEMPLATE_DESC:
		"${platform} 平台的預設數據獲取模板文件路徑",
	SETTINGS_DEFAULT_FETCH_TEMPLATE_NAME: "${platform} 預設數據獲取模板",
	SETTINGS_DEFAULT_FETCH_TEMPLATES_DESC:
		"為每個平台設置默認的數據獲取模板文件。導入獲取配置時將使用這些模板。",
	SETTINGS_DEFAULT_FETCH_TEMPLATES_TITLE: "預設數據獲取模板",
	SETTINGS_DEFAULT_SYNC_TEMPLATES_DESC:
		"為每個平台設置默認模板文件。導入配置時將使用這些模板。",
	SETTINGS_DEFAULT_SYNC_TEMPLATES_TITLE: "預設同步模板",
	SETTINGS_DEFAULT_TEMPLATE_DESC: "${platform} 平台的預設模板文件路徑",
	SETTINGS_DEFAULT_TEMPLATE_NAME: "${platform} 預設模板",
	SETTINGS_DEFAULT_TEMPLATE_PLACEHOLDER: "未選擇模板",
	SETTINGS_SCRIPT_PREPEND_CONTENT_NAME: "腳本開頭附加內容",
	SETTINGS_SCRIPT_PREPEND_CONTENT_DESC:
		"在每次生成腳本時，自動插入到腳本最前面的多行文本。",
	SETTINGS_SCRIPT_PREPEND_CONTENT_PLACEHOLDER:
		"可選。例如：通用的匯入語句、工具函數或註解。",
	SETTINGS_SYNC_PLATFORM_DESC: "選擇同步平台",
	SETTINGS_SYNC_PLATFORM_NAME: "同步平台",
	SETTINGS_TOOLTIP_CLEAR: "清除",
	SHEET_ID_FOLDER_DING_DESC: "釘釘AI表格的數據表ID",
	SHEET_ID_FOLDER_DING_EXAMPLE: "rnkKzcV",
	SHEET_ID_FOLDER_DING_TITLE: "資料表ID",
	SHEET_ID_FOLDER_WPS_DESC: "WPS多維表數據表ID",
	SHEET_ID_FOLDER_WPS_EXAMPLE: "4",
	SHEET_ID_FOLDER_WPS_TITLE: "資料表ID",
	SHOW_DELETE_OPTION_FOLDER_DESC:
		"是否在同步的選項中顯示刪除選項。\n\ntrue 為顯示；\nfalse 為不顯示。",
	SHOW_DELETE_OPTION_FOLDER_EXAMPLE: "false",
	SHOW_DELETE_OPTION_FOLDER_TITLE: "在同步面板中顯示刪除選項",
	SHOW_DELETE_OPTION_VAULT_DESC:
		"是否在同步的選項中顯示刪除選項。\n\ntrue 為顯示；\nfalse 為不顯示。",
	SHOW_DELETE_OPTION_VAULT_EXAMPLE: "false",
	SHOW_DELETE_OPTION_VAULT_TITLE: "在同步面板中顯示刪除選項",
	SORT_FRONT_MATTER_PROPERTIES_FOLDER_DESC:
		"在同步完成後，是否對筆記的屬性區進行排序。（排序是按照屬性名稱的音序來進行正序排序）\n\ntrue 為排序；\nfalse 為不排序。",
	SORT_FRONT_MATTER_PROPERTIES_FOLDER_EXAMPLE: "false",
	SORT_FRONT_MATTER_PROPERTIES_FOLDER_TITLE: "對筆記的屬性值進行排序",
	SORT_FRONT_MATTER_PROPERTIES_VAULT_DESC:
		"在同步完成後，是否對筆記的屬性區進行排序。（排序是按照屬性名稱的音序來進行正序排序）\n\ntrue 為排序；\nfalse 為不排序。",
	SORT_FRONT_MATTER_PROPERTIES_VAULT_EXAMPLE: "false",
	SORT_FRONT_MATTER_PROPERTIES_VAULT_TITLE: "對筆記的屬性值進行排序",
	SYNC_CONTENT_FOLDER_DESC:
		"在同步筆記時，是否把筆記的內容同步到多維表中。\n\ntrue 為同步；\nfalse 為不同步。",
	SYNC_CONTENT_FOLDER_EXAMPLE: "false",
	SYNC_CONTENT_FOLDER_TITLE: "是否同步筆記的內容到多維表",
	SYNC_CONTENT_VAULT_DESC:
		"在同步筆記時，是否把筆記的內容同步到多維表中。\n\ntrue 為同步；\nfalse 為不同步。",
	SYNC_CONTENT_VAULT_EXAMPLE: "false",
	SYNC_CONTENT_VAULT_TITLE: "是否同步筆記的內容到多維表",
	SYNC_FULL_CONTENT_FOLDER_DESC:
		"是否把包含屬性區（Frontmatter）在內的內容，同步到多維表中。\n\ntrue 為同步；\nfalse 為不同步。\n\n如果設置為 true，那在你的多維表中，需要有一個名為全文的欄位來接收對應的內容。",
	SYNC_FULL_CONTENT_FOLDER_EXAMPLE: "true",
	SYNC_FULL_CONTENT_FOLDER_TITLE: "同步包含屬性區在內的完整筆記內容",
	SYNC_FULL_CONTENT_VAULT_DESC:
		"是否把包含屬性區（Frontmatter）在內的內容，同步到多維表中。\n\ntrue 為同步；\nfalse 為不同步。\n\n如果設置為 true，那在你的多維表中，需要有一個名為全文的欄位來接收對應的內容。",
	SYNC_FULL_CONTENT_VAULT_EXAMPLE: "true",
	SYNC_FULL_CONTENT_VAULT_TITLE: "同步包含屬性區在內的完整筆記內容",
	SYNC_MODE_FOLDER_DESC:
		'設置在同步時，是按照筆記的標題去資料庫中查找對應記錄，還是按照筆記中的記錄ID去進行查找。\n\n"id" 使用id進行查找\n"title" 使用筆記標題進行查找\n\n在分離模式下，如果設置為“id”：\n如果是上傳模式，將使用筆記中的{多維表}RecordID，在上傳Table中進行查詢，比如airtableRecordID。\n\n如果是下載模式，將使用筆記中的{多維表}DownloadRecordID，在上傳Table中進行查詢，比如airtableDownloadRecordID。',
	SYNC_MODE_FOLDER_EXAMPLE: "標題",
	SYNC_MODE_FOLDER_TITLE: "同步模式",
	SYNC_MODE_VAULT_DESC:
		'設置在同步時，是按照筆記的標題去資料庫中查找對應記錄，還是按照筆記中的記錄ID去進行查找。\n\n"id" 使用id進行查找\n"title" 使用筆記標題進行查找\n\n在分離模式下，如果設置為“id”：\n如果是上傳模式，將使用筆記中的{多維表}RecordID，在上傳Table中進行查詢，比如airtableRecordID。\n\n如果是下載模式，將使用筆記中的{多維表}DownloadRecordID，在上傳Table中進行查詢，比如airtableDownloadRecordID。',
	SYNC_MODE_VAULT_EXAMPLE: "標題",
	SYNC_MODE_VAULT_TITLE: "同步模式",
	SYNC_OPTIONS_FOLDER_DESC:
		"觸發同步時，顯示的同步選項。\n1: 上傳當前筆記到多維表\n2: 上傳當前筆記中的出鏈到多維表\n3: 上傳當前筆記及其筆記中的出鏈到多維表\n4: 上傳當前資料夾下的筆記到多維表\n5: 上傳當前資料夾及子資料夾下的筆記到多維表\n6: 上傳包含指定標籤的筆記到多維表\n7: 上傳包含指定屬性值的筆記到多維表\n8: 上傳搜尋結果到多維表\n9: 上傳所有IOO筆記到多維表(可能需要等待較長時間)\n11: 下載多維表中的內容到當前筆記\n12: 下載多維表中的內容到當前筆記中的出鏈\n13: 下載多維表中的內容到當前筆記及其筆記中的出鏈\n14: 下載多維表中的內容到當前資料夾下的筆記\n15: 下載多維表中的內容到當前資料夾及子資料夾下的筆記\n21: 刪除當前筆記和多維表中的記錄",
	SYNC_OPTIONS_FOLDER_EXAMPLE: "[1, 2, 3, 4, 5, 6]",
	SYNC_OPTIONS_FOLDER_TITLE: "同步面板中顯示的選項",
	SYNC_OPTIONS_VAULT_DESC:
		"觸發同步時，顯示的同步選項。\n1: 上傳當前筆記到多維表\n2: 上傳當前筆記中的出鏈到多維表\n3: 上傳當前筆記及其筆記中的出鏈到多維表\n4: 上傳當前資料夾下的筆記到多維表\n5: 上傳當前資料夾及子資料夾下的筆記到多維表\n6: 上傳包含指定標籤的筆記到多維表\n7: 上傳包含指定屬性值的筆記到多維表\n8: 上傳搜尋結果到多維表\n9: 上傳所有IOO筆記到多維表(可能需要等待較長時間)\n11: 下載多維表中的內容到當前筆記\n12: 下載多維表中的內容到當前筆記中的出鏈\n13: 下載多維表中的內容到當前筆記及其筆記中的出鏈\n14: 下載多維表中的內容到當前資料夾下的筆記\n15: 下載多維表中的內容到當前資料夾及子資料夾下的筆記\n21: 刪除當前筆記和多維表中的記錄",
	SYNC_OPTIONS_VAULT_EXAMPLE: "[1, 2, 3, 4]",
	SYNC_OPTIONS_VAULT_TITLE: "同步面板中顯示的選項",
	TABLE_ID_FOLDER_AIRTABLE_DESC:
		"同步資料夾，在同步時使用的Airtable的tableID。\n\n不使用分離模式時，上傳和下載都會使用tableID。\n\n如果使用分離模式，只有在上傳時使用tableID。",
	TABLE_ID_FOLDER_AIRTABLE_EXAMPLE: "tblWIExxxxxQSDUz4",
	TABLE_ID_FOLDER_AIRTABLE_TITLE: "資料表ID",
	TABLE_ID_FOLDER_DESC:
		"同步資料夾，在同步時使用的Feishu多維表的tableID。\n\n不使用分離模式時，上傳和下載都會使用tableID。\n\n如果使用分離模式，只有在上傳時使用tableID。",
	TABLE_ID_FOLDER_EXAMPLE: "tblor4xxxxx54AZD",
	TABLE_ID_FOLDER_TITLE: "資料表ID",
	TABLE_ID_FOLDER_VIKA_DESC:
		"同步資料夾，在同步時使用的Vika的tableID。\n\n不使用分離模式時，上傳和下載都會使用tableID。\n\n如果使用分離模式，只有在上傳時使用tableID。",
	TABLE_ID_FOLDER_VIKA_EXAMPLE: "dstl4fxxxxxWzoh51x",
	TABLE_ID_FOLDER_VIKA_TITLE: "數據表ID",
	USE_TITLE_IN_DB_FOLDER_DESC:
		"在同步時，是否始終使用同步資料庫中的標題作為筆記標題。如果這個屬性設置為True，OB中的筆記標題將不再同步到資料庫",
	USE_TITLE_IN_DB_FOLDER_EXAMPLE: "true",
	USE_TITLE_IN_DB_FOLDER_TITLE: "使用資料庫中的標題",
	USE_TITLE_IN_DB_VAULT_DESC:
		"在同步時，是否始終使用同步資料庫中的標題作為筆記標題。如果這個屬性設置為True，OB中的筆記標題將不再同步到資料庫",
	USE_TITLE_IN_DB_VAULT_EXAMPLE: "true",
	USE_TITLE_IN_DB_VAULT_TITLE: "使用資料庫記錄中的標題",
	USER_ID_ROOT_DING_DESC: "釘釘通訊錄中的用戶ID",
	USER_ID_ROOT_DING_EXAMPLE: "如果輸入為空，預設使用：\n${dingUserIDForSync}",
	USER_ID_ROOT_DING_TITLE: "用戶ID",
	VIEW_ID_FOLDER_DING_DESC: "釘釘AI表格的視圖ID",
	VIEW_ID_FOLDER_DING_EXAMPLE: "JYP28Be",
	VIEW_ID_FOLDER_DING_TITLE: "視圖ID",
	BASIC_SETTINGS: "基本設定",
	CONTENT: "內容",
};
