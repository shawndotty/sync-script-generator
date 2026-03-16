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

	const firstEdge = graph.edges.length > 0 ? graph.edges[0] : undefined;
	const platformName = firstEdge?.platform ?? "Remote DB";
	lines.push(`  subgraph Remote_DB[${escapeLabel(String(platformName))}]`);
	const remoteNodes = graph.nodes.filter((n) => n.type === "remote");
	remoteNodes.forEach((n) => {
		const id = sanitizeId(n.id);
		const label = escapeLabel(n.label || "remote");
		lines.push(`    ${id}["${label}"]`);
	});
	lines.push("  end");

	graph.edges.forEach((e) => {
		const folderRaw = e.from.startsWith("folder:") ? e.from : e.to;
		const remoteRaw = e.from.startsWith("remote:") ? e.from : e.to;
		const folderId = sanitizeId(folderRaw);
		const remoteId = sanitizeId(remoteRaw);

		if (e.direction === "upload") {
			lines.push(`  ${folderId} --> ${remoteId}`);
		} else if (e.direction === "download" || e.direction === "fetch") {
			lines.push(`  ${remoteId} --> ${folderId}`);
		} else if (e.direction === "both") {
			lines.push(`  ${folderId} --> ${remoteId}`);
			lines.push(`  ${remoteId} --> ${folderId}`);
		} else {
			lines.push(`  ${folderId} --> ${remoteId}`);
		}
	});

	return ["```mermaid", ...lines, "```"].join("\n");
}

function sanitizeId(s: string): string {
	return s.replace(/[^a-zA-Z0-9_]/g, "_");
}

function escapeLabel(s: string): string {
	return s.replace(/"/g, '\\"');
}
