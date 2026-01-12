<%*
/* WPS 默认同步设置变量 */

const {wpsAppIDForSync, wpsAppSecretForSync, wpsBaseIDForSync, wpsTableIDForSync, wpsUserTokenForSync} = app.plugins.plugins["ioto-settings"].settings;

/* WPS 同步设置 */

const wps = {

    //WPS 同步 Root Settings
    accessToken: `${wpsUserTokenForSync}`,
    appID: `${wpsAppIDForSync}`,
    appKey: `${wpsAppSecretForSync}`,
    defaultFileID: `${wpsBaseIDForSync}`,
    defaultSheetID: `${wpsTableIDForSync}`

};

await tp.user.ObSyncWps(tp, this.app, wps);
_%>