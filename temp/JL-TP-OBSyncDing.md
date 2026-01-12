<%*
/* Ding 默认同步设置变量 */

const {dingAppIDForSync, dingAppSecretForSync, dingBaseIDForSync, dingTableIDForSync, dingViewIDForSync, dingUserIDForSync} = app.plugins.plugins["ioto-settings"].settings;

/* Ding 同步设置 */

const ding = {

    //Ding 同步 Root Settings
    appID: `${dingAppIDForSync}`,
    appSecret: `${dingAppSecretForSync}`,
    userID: `${dingUserIDForSync}`,
    defaultBaseID: `${dingBaseIDForSync}`,
    defaultSheetID: `${dingTableIDForSync}`,
    defaultViewID: `${dingViewIDForSync}`,

    //Ding 同步 Folders Settings
    tables: [
        {
            folderName: "Demo/Ding",
            sheetID: "rnkKzcV",
            customFields: {
                学习状态: "进行中",
                是否推荐: false
            },
            extractKeyPoints: {
                strong: "好词",
                italics: "疑问",
                highlights: "金句"
            },
            extractSections: {
                感悟: "个人感悟"
            },
            extractTagLines: {
                精读: "精读"
            }
        }
    ]

};

await tp.user.ObSyncDing(tp, this.app, ding);
_%>