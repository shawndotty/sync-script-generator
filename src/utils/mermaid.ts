import { RelationshipGraph } from "../models/relationship";

export function graphToMermaid(
	graph: RelationshipGraph,
	options?: { platformLabel?: boolean },
): string {
	const platformLabel = options?.platformLabel ?? true;
	const lines: string[] = [];
	lines.push("flowchart LR");
	lines.push("  subgraph Obsidian_Vault[Obsidian Vault]");

	const folderNodes = graph.nodes.filter((n) => n.type === "folder");
	folderNodes.forEach((n) => {
		const id = sanitizeId(n.id);
		const label = escapeLabel(n.label || "/");
		lines.push(`    ${id}["${label}"]`);
	});
	lines.push("  end");

	const remoteNodes = graph.nodes.filter((n) => n.type === "remote");

	// 将相同 baseID（或 downloadBaseID 等同“基座ID”）的节点分组到同一 subgraph
	const groups: Record<string, { title: string; nodes: typeof remoteNodes }> =
		{};
	remoteNodes.forEach((n) => {
		const { platform, label } = parseRemoteNodeMeta(n.id, n.label || "");
		const key = computeBaseGroupKey(platform, label);
		if (!groups[key]) {
			groups[key] = { title: key, nodes: [] as any };
		}
		groups[key].nodes.push(n);
	});

	Object.entries(groups).forEach(([key, group]) => {
		// 避免使用 "default" 关键字或 "(...)" 形状语法作为 ID/Label
		// 使用前缀 sg_ 避免 ID 冲突
		const subId = "sg_" + sanitizeId(key);
		// 标题加引号避免解析歧义，且 default 改为 Default Base
		const title = key === "default" ? "Default Base" : key;
		lines.push(`  subgraph ${subId} ["${escapeLabel(title)}"]`);
		group.nodes.forEach((n) => {
			const id = sanitizeId(n.id);
			// label 形如 base/table，这里只显示最后一段（通常是 tableID）
			const fullLabel = n.label || "remote";
			const segs = fullLabel.split("/");
			const lastSeg = segs[segs.length - 1];
			const shortLabel = segs.length > 1 && lastSeg ? lastSeg : fullLabel;
			const label = escapeLabel(shortLabel);
			lines.push(`    ${id}["${label}"]`);
		});
		lines.push("  end");
	});

	let edgeCount = 0;
	// 记录边索引与原始边的映射，以便后续交互
	// 由于 linkStyle 是按顺序的，我们给每条边加一个 class 来标记它的索引
	// 但 linkStyle 只能按索引加样式，不能加 class。
	// Mermaid 支持 `linkStyle 3 stroke:red;` 但不支持直接加 class 到 path。
	// 不过，我们可以通过 click 事件或 callback 注入？不支持。
	// 备选方案：我们在 modal 中通过 querySelectorAll(".edgePath") 拿到所有边，顺序与这里的一致。
	// 关键是保证这里的循环顺序与 modal 中的逻辑一致。

	graph.edges.forEach((e) => {
		const folderRaw = e.from.startsWith("folder:") ? e.from : e.to;
		const remoteRaw = e.from.startsWith("remote:") ? e.from : e.to;
		const folderId = sanitizeId(folderRaw);
		const remoteId = sanitizeId(remoteRaw);

		if (e.direction === "upload") {
			lines.push(`  ${folderId} --> ${remoteId}`);
			edgeCount++;
		} else if (e.direction === "download" || e.direction === "fetch") {
			lines.push(`  ${remoteId} --> ${folderId}`);
			edgeCount++;
		} else if (e.direction === "both") {
			// 默认模式下使用双向箭头，避免两条线的视觉干扰
			lines.push(`  ${folderId} <--> ${remoteId}`);
			edgeCount++;
		} else {
			lines.push(`  ${folderId} --> ${remoteId}`);
			edgeCount++;
		}
	});

	// 添加一个隐形的布局约束（Folder -> Remote），确保分组在 LR 布局下保持 Vault 在左、Remote 在右
	// 使用 ~~~ 隐形连接，它不会生成 visible edge path，也不会影响 graph.edges 的索引对应
	// 这样可以避免 edgeIndices 错位
	const firstFolder = graph.nodes.find((n) => n.type === "folder");
	const firstRemote = graph.nodes.find((n) => n.type === "remote");
	if (firstFolder && firstRemote) {
		const layoutFrom = sanitizeId(firstFolder.id);
		const layoutTo = sanitizeId(firstRemote.id);
		lines.push(`  ${layoutFrom} ~~~ ${layoutTo}`);
	}

	// 添加交互样式类
	lines.push("  classDef highlight stroke:#00E676,stroke-width:3px;");
	lines.push("  classDef dim opacity:0.2;");

	return ["```mermaid", ...lines, "```"].join("\n");
}

function sanitizeId(s: string): string {
	return s.replace(/[^a-zA-Z0-9_\u4e00-\u9fa5]/g, "_");
}

function escapeLabel(s: string): string {
	return s.replace(/"/g, '\\"');
}

function parseRemoteNodeMeta(
	id: string,
	fallbackLabel: string,
): { platform: string; label: string } {
	// 约定：remote:<Platform>:<label>
	if (id.startsWith("remote:")) {
		const parts = id.split(":");
		const platform = parts[1] || "";
		const label = parts.slice(2).join(":") || fallbackLabel || "";
		return { platform, label };
	}
	return { platform: "", label: fallbackLabel || "" };
}

function computeBaseGroupKey(platform: string, label: string): string {
	// label 形如:
	// - Airtable/Baserow: baseID/tableID
	// - NocoDB: workspaceID/baseID/tableID
	// - Feishu/Lark: appToken/tableID
	// - WPS: fileID/sheetID
	// - Ding: baseID/tableID/viewID
	// - Vika: tableID (无法再细分，直接用自身)
	const segs = label.split("/");
	if (platform === "NocoDB") {
		// workspaceID/baseID/tableID => baseID 在第二段；若缺失或段数不足，归为默认
		return segs.length >= 3 && segs[1] ? segs[1] : "default";
	}
	if (platform === "Vika") {
		// 无 Base 概念，保持按表分组
		return label;
	}
	// 其余平台：当有两段时第一段即 base（或 fileID/appToken）；仅一段时表示 base 为空，归入默认
	return segs.length >= 2 && segs[0] ? segs[0] : "default";
}
