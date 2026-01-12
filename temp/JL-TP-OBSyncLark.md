<%*
/* Lark 默认同步设置变量 */

const {larkAppIDForSync, larkAppSecretForSync, larkBaseIDForSync, larkTableIDForSync} = app.plugins.plugins["ioto-settings"].settings;

/* Lark 同步设置 */

const lark = {

    //Lark 同步 Root Settings
    appID: `${larkAppIDForSync}`,
    appSecret: `${larkAppSecretForSync}`,
    defaultAppToken: `${larkBaseIDForSync}`,
    defaultTableID: `${larkTableIDForSync}`

};

await tp.user.ObSyncLark(tp, this.app, lark);
_%>