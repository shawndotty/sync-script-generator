import { Platform, FolderSetting, FetchFolderSetting } from "../types/types";

export interface RelationshipNode {
	id: string;
	type: "folder" | "remote";
	label: string;
}

export interface RelationshipEdge {
	from: string;
	to: string;
	direction: "sync" | "fetch";
	platform: Platform;
}

export interface RelationshipGraph {
	nodes: RelationshipNode[];
	edges: RelationshipEdge[];
}

function folderNodeId(path: string) {
	return `folder:${path || "/"}`;
}

function remoteNodeId(platform: Platform, label: string) {
	return `remote:${platform}:${label || "unknown"}`;
}

function ensure<T>(arr: T[], item: T, predicate: (a: T, b: T) => boolean) {
	if (!arr.find((x) => predicate(x, item))) arr.push(item);
}

function pickRemoteLabelForSync(
	platform: Platform,
	root: Record<string, any>,
	f: Record<string, any>,
) {
	switch (platform) {
		case "Airtable":
			return [f.baseID || root.defaultBaseID, f.tableID || root.defaultTableID]
				.filter(Boolean)
				.join("/");
		case "Baserow":
			return [f.baseID || root.defaultBaseID, f.tableID || root.defaultTableID]
				.filter(Boolean)
				.join("/");
		case "NocoDB":
			return [
				root.defaultWorkspaceID,
				f.baseID || root.defaultBaseID,
				f.tableID || root.defaultTableID,
			]
				.filter(Boolean)
				.join("/");
		case "Feishu":
		case "Lark":
			return [f.appToken || root.defaultAppToken, f.tableID || root.defaultTableID]
				.filter(Boolean)
				.join("/");
		case "Vika":
			return f.tableID || root.defaultTableID || "";
		case "WPS":
			return [f.fileID || root.defaultFileID, f.sheetID || root.defaultSheetID]
				.filter(Boolean)
				.join("/");
		case "Ding":
			return [
				f.baseID || root.defaultBaseID,
				f.tableID || root.defaultTableID,
				f.viewID || root.defaultViewID,
			]
				.filter(Boolean)
				.join("/");
		default:
			return f.tableID || root.defaultTableID || "";
	}
}

function pickRemoteLabelForFetch(
	platform: Platform,
	root: Record<string, any>,
	f: Record<string, any>,
) {
	// 与同步基本一致，但优先使用 fetch 侧字段命名（如 targetFolderPath）
	return pickRemoteLabelForSync(platform, root, f);
}

export function buildSyncGraphFromState(
	platform: Platform,
	rootSettings: Record<string, string>,
	folderSettings: FolderSetting[],
): RelationshipGraph {
	const graph: RelationshipGraph = { nodes: [], edges: [] };
	const vaultGroupId = "Obsidian Vault";
	const remoteGroupId = "Remote DB";

	folderSettings.forEach((folder) => {
		const folderPath = folder.folderName || "/";
		const remoteLabel = pickRemoteLabelForSync(platform, rootSettings, folder);
		if (!folderPath || !remoteLabel) return;

		const fNode: RelationshipNode = {
			id: folderNodeId(folderPath),
			type: "folder",
			label: folderPath || "/",
		};
		const rNode: RelationshipNode = {
			id: remoteNodeId(platform, remoteLabel),
			type: "remote",
			label: remoteLabel,
		};

		ensure(graph.nodes, fNode, (a, b) => a.id === b.id);
		ensure(graph.nodes, rNode, (a, b) => a.id === b.id);

		const edge: RelationshipEdge = {
			from: fNode.id,
			to: rNode.id,
			direction: "sync",
			platform,
		};
		ensure(
			graph.edges,
			edge,
			(a, b) =>
				a.from === b.from &&
				a.to === b.to &&
				a.direction === b.direction &&
				a.platform === b.platform,
		);
	});

	return graph;
}

export function buildFetchGraphFromState(
	platform: Platform,
	rootSettings: Record<string, string>,
	folderSettings: FetchFolderSetting[],
): RelationshipGraph {
	const graph: RelationshipGraph = { nodes: [], edges: [] };

	folderSettings.forEach((folder) => {
		const folderPath = (folder as any).targetFolderPath || "/";
		const remoteLabel = pickRemoteLabelForFetch(platform, rootSettings, folder);
		if (!folderPath || !remoteLabel) return;

		const fNode: RelationshipNode = {
			id: folderNodeId(folderPath),
			type: "folder",
			label: folderPath || "/",
		};
		const rNode: RelationshipNode = {
			id: remoteNodeId(platform, remoteLabel),
			type: "remote",
			label: remoteLabel,
		};

		ensure(graph.nodes, fNode, (a, b) => a.id === b.id);
		ensure(graph.nodes, rNode, (a, b) => a.id === b.id);

		const edge: RelationshipEdge = {
			from: rNode.id,
			to: fNode.id,
			direction: "fetch",
			platform,
		};
		ensure(
			graph.edges,
			edge,
			(a, b) =>
				a.from === b.from &&
				a.to === b.to &&
				a.direction === b.direction &&
				a.platform === b.platform,
		);
	});

	return graph;
}

