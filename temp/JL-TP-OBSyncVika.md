<%*
/* Vika 默认同步设置变量 */

const {vikaAPIKeyForSync, vikaTableIDForSync} = app.plugins.plugins["ioto-settings"].settings;

/* Vika 同步设置 */

const vika = {

    //Vika 同步 Root Settings
    apiKey: `${vikaAPIKeyForSync}`,
    defaultTableID: `${vikaTableIDForSync}`,

    //Vika 同步 Vault Settings
    syncSettings: {
        fieldsNames: {
            title: "Title",
            content: "Content",
            tags: "Tags",
            aliases: "Aliases",
            createdTime: "CreatedTime",
            updatedTime: "UpdatedTime",
            path: "Folder",
            vault: "Vault",
            fullContent: "FullContent",
            obsidianURI: "OBURI",
        }
    }

};

await tp.user.ObSyncVika(tp, this.app, vika);
_%>