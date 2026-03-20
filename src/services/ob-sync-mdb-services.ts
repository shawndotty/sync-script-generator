import { App } from "obsidian";

export interface ObSyncMDB {
	// Folder paths
	templaterTemplatesFolder?: string;
	updateIDs: {
		obSyncCore: {
			baseID: string;
			tableID: string;
			viewID: string;
		};
		obSyncAirtable: {
			baseID: string;
			tableID: string;
			viewID: string;
		};
		obSyncBaserow: {
			baseID: string;
			tableID: string;
			viewID: string;
		};
		obSyncNocoDB: {
			baseID: string;
			tableID: string;
			viewID: string;
		};
		obSyncVika: {
			baseID: string;
			tableID: string;
			viewID: string;
		};
		obSyncFeishu: {
			baseID: string;
			tableID: string;
			viewID: string;
		};
		obSyncLark: {
			baseID: string;
			tableID: string;
			viewID: string;
		};
		obSyncWPS: {
			baseID: string;
			tableID: string;
			viewID: string;
		};
		obSyncDing: {
			baseID: string;
			tableID: string;
			viewID: string;
		};
		obSyncHelpDocs: {
			baseID: string;
			tableID: string;
			viewID: string;
		};
	};
	// Other dynamic keys
	[key: string]: any;
}

interface ObSyncMDBPlugin {
	settings: ObSyncMDB;
	saveSettings: () => Promise<void>;
}

export class ObSyncMDBService {
	constructor(private app: App) {}

	/**
	 * Get the IOTO Settings plugin instance if available
	 */
	private getPlugin(): ObSyncMDBPlugin | undefined {
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		const app = this.app as any;
		if (!app.plugins || !app.plugins.plugins) {
			return undefined;
		}
		return app.plugins.plugins["ob-sync-with-mdb"] as
			| ObSyncMDBPlugin
			| undefined;
	}

	/**
	 * Check if IOTO Settings plugin is installed and enabled
	 */
	public isAvailable(): boolean {
		return !!this.getPlugin();
	}

	/**
	 * Get the current settings from IOTO Settings plugin
	 */
	public getSettings(): ObSyncMDB | null {
		const plugin = this.getPlugin();
		if (!plugin) return null;
		return plugin.settings || {};
	}
}
