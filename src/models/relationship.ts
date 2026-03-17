import { Platform, FolderSetting, FetchFolderSetting } from "../types/types";

export interface RelationshipNode {
	id: string;
	type: "folder" | "remote";
	label: string;
}

export interface RelationshipEdge {
	from: string;
	to: string;
	direction: "sync" | "fetch" | "upload" | "download" | "both";
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
			return [
				f.baseID || root.defaultBaseID,
				f.tableID || root.defaultTableID,
			]
				.filter(Boolean)
				.join("/");
		case "Baserow":
			return [
				f.baseID || root.defaultBaseID,
				f.tableID || root.defaultTableID,
			]
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
			return [
				f.appToken || root.defaultAppToken,
				f.tableID || root.defaultTableID,
			]
				.filter(Boolean)
				.join("/");
		case "Vika":
			return f.tableID || root.defaultTableID || "";
		case "WPS":
			return [
				f.fileID || root.defaultFileID,
				f.sheetID || root.defaultSheetID,
			]
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

function pickRemoteLabelForSyncDownload(
	platform: Platform,
	root: Record<string, any>,
	f: Record<string, any>,
) {
	switch (platform) {
		case "Airtable":
			return [f.downloadBaseID || root.defaultBaseID, f.downloadTableID]
				.filter(Boolean)
				.join("/");
		case "Baserow":
			return [f.downloadBaseID || root.defaultBaseID, f.downloadTableID]
				.filter(Boolean)
				.join("/");
		case "NocoDB":
			return [
				root.defaultWorkspaceID,
				f.downloadBaseID || root.defaultBaseID,
				f.downloadTableID,
			]
				.filter(Boolean)
				.join("/");
		case "Feishu":
		case "Lark":
			return [
				f.downloadAppToken || root.defaultAppToken,
				f.downloadTableID,
			]
				.filter(Boolean)
				.join("/");
		case "Vika":
			return f.downloadTableID || "";
		case "WPS":
			return [
				f.downloadFileID || root.defaultFileID,
				f.downloadSheetID || root.defaultSheetID,
			]
				.filter(Boolean)
				.join("/");
		case "Ding":
			return [
				f.downloadBaseID || root.defaultBaseID,
				f.downloadTableID || root.defaultTableID,
				f.downloadViewID || root.defaultViewID,
			]
				.filter(Boolean)
				.join("/");
		default:
			return f.downloadTableID || "";
	}
}

export function buildSyncGraphFromState(
	platform: Platform,
	rootSettings: Record<string, string>,
	folderSettings: FolderSetting[],
): RelationshipGraph {
	const graph: RelationshipGraph = { nodes: [], edges: [] };

	folderSettings.forEach((folder) => {
		const folderPath = (folder.folderName || "/").trim();
		if (!folderPath) return;
		const isSeparate =
			(folder as any).separateMode === true ||
			(folder as any).separateMode === "true";

		const fNode: RelationshipNode = {
			id: folderNodeId(folderPath),
			type: "folder",
			label: folderPath || "/",
		};

		ensure(graph.nodes, fNode, (a, b) => a.id === b.id);

		if (isSeparate) {
			const uploadLabel = pickRemoteLabelForSync(
				platform,
				rootSettings,
				folder,
			);
			const downloadLabel = pickRemoteLabelForSyncDownload(
				platform,
				rootSettings,
				folder,
			);

			if (uploadLabel) {
				const upNode: RelationshipNode = {
					id: remoteNodeId(platform, uploadLabel),
					type: "remote",
					label: uploadLabel,
				};
				ensure(graph.nodes, upNode, (a, b) => a.id === b.id);
				const upEdge: RelationshipEdge = {
					from: fNode.id,
					to: upNode.id,
					direction: "upload",
					platform,
				};
				ensure(
					graph.edges,
					upEdge,
					(a, b) =>
						a.from === b.from &&
						a.to === b.to &&
						a.direction === b.direction &&
						a.platform === b.platform,
				);
			}

			if (downloadLabel) {
				const downNode: RelationshipNode = {
					id: remoteNodeId(platform, downloadLabel),
					type: "remote",
					label: downloadLabel,
				};
				ensure(graph.nodes, downNode, (a, b) => a.id === b.id);
				const downEdge: RelationshipEdge = {
					from: downNode.id,
					to: fNode.id,
					direction: "download",
					platform,
				};
				ensure(
					graph.edges,
					downEdge,
					(a, b) =>
						a.from === b.from &&
						a.to === b.to &&
						a.direction === b.direction &&
						a.platform === b.platform,
				);
			}
		} else {
			const remoteLabel = pickRemoteLabelForSync(
				platform,
				rootSettings,
				folder,
			);
			if (!remoteLabel) return;
			const rNode: RelationshipNode = {
				id: remoteNodeId(platform, remoteLabel),
				type: "remote",
				label: remoteLabel,
			};
			ensure(graph.nodes, rNode, (a, b) => a.id === b.id);

			const edge: RelationshipEdge = {
				from: fNode.id,
				to: rNode.id,
				direction: "both",
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
		}
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
		const remoteLabel = pickRemoteLabelForFetch(
			platform,
			rootSettings,
			folder,
		);
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
