<%*
const IOTOUtility = tp.user.IOTOUtility(tp, this.app);

const {inputFolder, outputFolder, taskFolder, outcomeFolder, extraFolder, IOTOFrameworkPath} = app.plugins.plugins["ioto-settings"].settings;

/* Airtable 默认同步设置变量 */

const {airtableAPIKeyForSync, airtableBaseIDForSync, airtableTableIDForSync} = app.plugins.plugins["ioto-settings"].settings;

/* Airtable 同步设置 */

const airtable = {

    //Airtable 同步 Root Settings
    apiKey: `${airtableAPIKeyForSync}`,
    defaultBaseID: `${airtableBaseIDForSync}`,
    defaultTableID: `${airtableTableIDForSync}`,

    //Airtable 同步 Vault Settings
    syncSettings: {
        fieldsNames: {
            title: "Title",
            content: "Content",
            extraContent: "ExtraContent",
            tags: "Tags",
            aliases: "Aliases",
            createdTime: "CreatedTime",
            updatedTime: "UpdatedTime",
            path: "Folder",
            vault: "Vault",
            fullContent: "FullContent",
            extraFullContent: "ExtraFullContent",
            obsidianURI: "OBURI",
        },
        syncOptions: [1, 2, 4, 5, 11, 12, 14, 15],
        extractKeyPoints: {
            highlights: "金句",
            underlines: "趣闻",
            italics: "概念"
        },
        extractSections: {},
        extractTagLines: {
            闪念: "闪念"
        }
    },

    //Airtable 同步 Folders Settings
    tables: [
        {
            folderName: `${inputFolder}`,
            tableID: "tbl2KCWYoVGow1lQj",
            customFields: {
                sourceType: "Book",
                source: "",
                时间块ID: [`${IOTOUtility.getCurrentHourTime()}`]
            }
        },
        {
            folderName: `${outputFolder}`,
            tableID: "tblWIECXeCHQSDUz4",
            customFields: {
                时间块ID: [`${IOTOUtility.getCurrentHourTime()}`]
            }
        },
        {
            folderName: `${taskFolder}`,
            tableID: "tblVrvP8V3FjCajso",
            syncOptions: [1, 2],
            customFields: {
                Project: ["日常工作"]
            }
        },
        {
            folderName: `${outcomeFolder}`,
            tableID: "tblouxNuuDSsZjhB3",
            syncOptions: [1, 2, 4, 11, 12, 14],
            customFields: {
                Project: ["Johnny学"],
                Status: "未完成",
                时间块ID: [`${IOTOUtility.getCurrentHourTime()}`]
            },
            customFieldsOverrideMode: true,
            extractBlocksOverrideMode: true,
            extractKeyPointsOverrideMode: true,
            extractTagLinesOverrideMode: true
        },
        {
            folderName: `${outcomeFolder}/Johnny学/课程回放与转写`,
            tableID: "tblouxNuuDSsZjhB3",
            syncFullContent: true,
            customFields: {
                Project: ["日常工作"],
                Status: "Published",
                Course: "Johnny学OB",
                VideoURL: "",
                Intro: "",
                内容概览: "",
                密码: "",
                上课日期: "",
                Subject: []
            },
            customFieldsOverrideMode: true,
            extractBlocksOverrideMode: true,
            extractKeyPointsOverrideMode: true,
            extractSectionsOverrideMode: true,
            extractTagLinesOverrideMode: true
        },
        {
            folderName: `${outcomeFolder}/付费内容发布`,
            baseID: "appCGWKuHB515vEyT",
            separateMode: true,
            tableID: "tbl1zzyIk1rEkKNh7",
            downloadBaseID: "appe7YRreypJwHUT7",
            downloadTableID: "tblxc4fYH0G4fX5qu",
            enableUpdatePropertiesFromDowloadTable: false,
            syncMode: "title",
            syncOptions: [1, 4, 11, 14],
            customFields: {
                PublishDate: ""
            },
            customFieldsOverrideMode: true,
            extractBlocksOverrideMode: true,
            extractKeyPointsOverrideMode: true,
            extractSectionsOverrideMode: true,
            extractTagLinesOverrideMode: true
        },
        {
            folderName: `${outcomeFolder}/IOTO-Docs`,
            baseID: "appKL3zMp0cOYFdJk",
            tableID: "tblG7t0540hOpLOO2"
        },
        {
            folderName: `${IOTOFrameworkPath}/Help`,
            tableID: "tblXcG6xRogRCBtvF",
            syncFullContent: true,
            fmFetchFieldsOverrideMode: true,
            customFields: {
                Product: "IOTO",
                Pro: true,
                Advanced: true,
                PublishStatus: "Draft",
                OpenArticle: false,
                ForOBSync: false
            },
            customFieldsOverrideMode: true,
            extractBlocksOverrideMode: true,
            extractKeyPointsOverrideMode: true,
            extractSectionsOverrideMode: true,
            extractTagLinesOverrideMode: true
        },
        {
            folderName: "Demo/Airtable",
            baseID: "appxWcNlVDyPeqVDC",
            tableID: "tbl9E2gMZJD0LfdBJ",
            extractSectionsAsText: true,
            customFields: {
                多行文本: ""
            },
            customFieldsOverrideMode: true,
            extractBlocks: {
                tips: "提示"
            },
            extractBlocksOverrideMode: true,
            extractKeyPointsOverrideMode: true,
            extractSections: {
                Demo: "Demo"
            },
            extractSectionsOverrideMode: true,
            extractTagLinesOverrideMode: true
        },
        {
            folderName: `${extraFolder}/OBAS/Help`,
            tableID: "tblXcG6xRogRCBtvF",
            syncFullContent: true,
            fmFetchFieldsOverrideMode: true,
            customFields: {
                Product: "SlidesRup",
                PublishStatus: "Draft",
                OpenArticle: false
            },
            customFieldsOverrideMode: true,
            extractBlocksOverrideMode: true,
            extractKeyPointsOverrideMode: true,
            extractSectionsOverrideMode: true,
            extractTagLinesOverrideMode: true
        },
        {
            folderName: `${outcomeFolder}/内容营销/小红书`,
            tableID: "tblouxNuuDSsZjhB3",
            contentFetchField: "XHSContentFetchSource",
            fmFetchFields: ["slideName", "slideDesign", "slideLocation", "slideWidth", "slideHeight", "slideAuthor", "slideDate", "slideLastButNotLeast"],
            fmFetchFieldsOverrideMode: true,
            syncOptions: [1, 4, 11, 14],
            customFields: {
                issueTopic: "",
                issueNumber: 0,
                slideDesign: "",
                slideAuthor: "",
                slideDate: "",
                Project: ["内容营销"],
                Status: "进行中"
            },
            customFieldsOverrideMode: true,
            extractBlocksOverrideMode: true,
            extractKeyPointsOverrideMode: true,
            extractSectionsOverrideMode: true,
            extractTagLinesOverrideMode: true
        }
    ]

};

await tp.user.ObSyncAirtable(tp, this.app, airtable);
_%>