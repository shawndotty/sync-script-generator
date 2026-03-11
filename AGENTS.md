# Sync Script Generator（Obsidian 插件）

## 项目定位

- 插件 ID：`sync-script-generator`（见 `manifest.json`）
- 目标：在 Obsidian 内生成/导入/管理用于 IOTO / OB Sync With MDB 的同步脚本（主要面向 Templater 模板脚本）。
- 入口：`src/main.ts`（构建后产物为仓库根目录的 `main.js`，由 Obsidian 加载）
- 发布/安装必要文件：`main.js`、`manifest.json`、`styles.css`

## 开发与构建

### 环境

- Node.js：建议使用当前 LTS（本仓库 CI 使用 Node 20/22）
- 包管理器：npm（`package-lock.json` 已存在）
- 打包器：esbuild（配置：`esbuild.config.mjs`）
- TypeScript：`tsconfig.json`（`npm run build` 会先执行 `tsc -noEmit -skipLibCheck` 做类型校验）

### 常用脚本（npm）

```bash
npm install
npm run dev
npm run build
npm run lint
```

## 功能与架构概览

### 插件入口与 UI

- 插件生命周期：`src/main.ts`
- 注册 2 个 View：
    - Sync Generator：`sync-script-generator-view`（见 `src/models/constants.ts`）
    - Fetch Generator：`fetch-script-generator-view`（见 `src/models/constantsFetch.ts`）
- Ribbon 图标：
    - `arrow-down-up`：打开 Sync Generator（Shift 点击会在新窗口打开）
    - `arrow-down-to-line`：打开 Fetch Generator（Shift 点击会在新窗口打开）
- 命令（Command ID 稳定，尽量不要改名）：
    - `open-sync-script-generator`
    - `open-fetch-script-generator`

### 两类生成器（Sync / Fetch）

- 视图层（UI/交互）：
    - `src/views/GeneratorView.ts`：同步脚本生成（支持 Root/Vault/Folder 三层配置、导入模板、预设管理、预览/生成）
    - `src/views/FetchGeneratorView.ts`：拉取脚本生成（逻辑与 Sync 类似，但字段与生成方式不同）
- 选项定义（字段列表、描述、默认值、适配平台）：
    - `src/models/constants.ts`：`SYNC_OPTIONS`
    - `src/models/constantsFetch.ts`：`FETCH_OPTIONS`
- 脚本引擎（生成/解析）：
    - `src/processors/ScriptEngine.ts`：Sync 生成与从模板解析配置
    - `src/processors/FetchScriptEngine.ts`：Fetch 生成与从模板解析配置

### 预览与导入

- 预览 Modal（内置 CodeMirror，用于展示生成结果并提供写回/导出等操作）：`src/modals/ScriptPreviewModal.ts`
- 导入模板（过滤 `Templates`/`Templater` 路径与 `.md` 文件）：`src/modals/ImportModal.ts`
- 预设管理（Load/Save，包含删除确认）：`src/modals/PresetLoadModal.ts`、`src/modals/PresetSaveModal.ts` 及 Fetch 对应文件

### 设置与数据持久化

- 设置界面：`src/settings.ts`（Tabbed settings）
- 存储：使用 `this.loadData()` / `this.saveData()` 存取插件设置
- 关键设置项（节选）：
    - `syncPlatform`: `"IOTO" | "obSyncWithMDB"`
    - `syncTemplateFolder` / `fetchTemplateFolder`
    - `scriptPrependContent`
    - `presets` / `fetchPresets`
    - 各平台默认模板路径（Sync 与 Fetch 各一组）

### 与其他插件的协作（重要）

- IOTO Settings（用于首启时推导模板目录）：
    - `src/services/ioto-settings-services.ts`
    - `src/main.ts` 的 `loadSettings()`：若首次无数据，会尝试从 IOTO Settings 读取 `extraFolder` 并填充模板目录设置
- Templater（可选增强）：用于模板命令/热键能力（不会打包进 `main.js`，运行时通过 Obsidian 插件系统访问）
    - `src/services/templater-services.ts`：读取/修改 Templater 设置、注册模板命令
    - `src/services/hotkey-services.ts`：读取/写入 `hotkeys.json` 以增加模板快捷键

## 国际化（i18n）

- 翻译入口：`src/lang/helpers.ts`（`t(key)`）
- 语言包：`src/lang/locale/en.ts`、`zh-cn.ts`、`zh-tw.ts`
- 新增 UI 文案时：先在 `en.ts` 增加 key，再补齐其他语言，避免运行时缺 key

## 修改指南（面向协作者/Agent）

- 新增/修改字段（option）时，通常需要同步改动：
    - `SYNC_OPTIONS` / `FETCH_OPTIONS`
    - `ScriptEngine.generate/parse` 或 `FetchScriptEngine.generate/parse`
    - 对应 View 的表单渲染与默认值逻辑
    - locale 文案 key
- 新增平台（Platform）时，通常需要同步改动：
    - `src/types/types.ts` 的 `Platform` 联合类型
    - 两个 View 的平台列表
    - 两个 Engine 的 root 变量映射与调用方法名（`tp.user.ObSync${Platform}`）
- 从模板解析配置目前通过 `new Function("return " + sanitizedConfig)()` 执行本地字符串（仅来自用户选择/导入的模板内容）；修改相关逻辑时避免扩大执行面，严禁引入任何远程代码路径

## 版本与发布

- 版本号：`manifest.json` 与 `package.json` 保持一致
- `versions.json`：维护 “插件版本 → 最低 Obsidian 版本”
- `npm run version`：运行 `version-bump.mjs` 并 `git add manifest.json versions.json`
- Release 附件：`main.js`、`manifest.json`、`styles.css`（tag 必须等于版本号且不要加 `v` 前缀）
