<%*
/* Feishu 默认同步设置变量 */

const {feishuAppIDForSync, feishuAppSecretForSync, feishuBaseIDForSync, feishuTableIDForSync} = app.plugins.plugins["ioto-settings"].settings;

/* Feishu 同步设置 */

const feishu = {

    //Feishu 同步 Root Settings
    appID: `${feishuAppIDForSync}`,
    appSecret: `${feishuAppSecretForSync}`,
    defaultAppToken: `${feishuBaseIDForSync}`,
    defaultTableID: `${feishuTableIDForSync}`,

    //Feishu 同步 Folders Settings
    tables: [
        {
            folderName: "Demo/Feishu",
            tableID: "tbluJDbFjvXewhEH",
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

await tp.user.ObSyncFeishu(tp, this.app, feishu);
_%>