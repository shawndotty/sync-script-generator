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

	lines.push("  subgraph Remote_DB[Remote DB]");
	const remoteNodes = graph.nodes.filter((n) => n.type === "remote");
	remoteNodes.forEach((n) => {
		const id = sanitizeId(n.id);
		const label = escapeLabel(n.label || "remote");
		lines.push(`    ${id}["${label}"]`);
	});
	lines.push("  end");

	graph.edges.forEach((e) => {
		const from = sanitizeId(e.from);
		const to = sanitizeId(e.to);
		const label = e.direction === "sync" ? "sync" : "fetch";
		const note = platformLabel ? `|${e.platform}|` : "";
		const arrow = e.direction === "sync" ? "-->" : "-->";
		lines.push(`  ${from} ${arrow}${note} ${to}`);
	});

	return ["```mermaid", ...lines, "```"].join("\n");
}

function sanitizeId(s: string): string {
	return s.replace(/[^a-zA-Z0-9_]/g, "_");
}

function escapeLabel(s: string): string {
	return s.replace(/"/g, '\\"');
}

