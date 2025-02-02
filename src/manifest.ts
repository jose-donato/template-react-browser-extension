import pkg from "../package.json";

const manifest = {
	content_scripts: [
		{
			js: ["src/entries/contentScript/primary/main.tsx"],
			matches: ["*://*/*"],
		},
	],
	icons: {
		48: "icons/icon.png",
		128: "icons/icon.png",
	},
	permissions: ["storage", "activeTab", "scripting"],
};

const browserAction = {
	default_icon: {
		16: "icons/icon.png",
		19: "icons/icon.png",
		32: "icons/icon.png",
		38: "icons/icon.png",
	},
	default_popup: "src/entries/popup/index.html",
};

const ManifestV2 = {
	...manifest,
	background: {
		scripts: ["src/entries/background/script.ts"],
		persistent: true,
	},
	browser_action: browserAction,
	permissions: [...manifest.permissions, "*://*/*"],
};

export function getManifest(): chrome.runtime.ManifestV2 {
	const manifest = {
		author: pkg.author,
		description: pkg.description,
		name: pkg.displayName ?? pkg.name,
		version: pkg.version,
	};

	return {
		...manifest,
		...ManifestV2,
		manifest_version: 2,
	};
}
