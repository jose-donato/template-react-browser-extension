import browser from "webextension-polyfill";

browser.runtime.onInstalled.addListener(() => {
	console.log("Extension installed");
});

/*
browser.runtime.onMessage.addListener((request, sender, sendResponse) => {
	if (request.action === "addEmojiToTitle") {
		addEmojiToTitle(request.title).then((response) => {
			sendResponse({ response });
		});
		return true; // Indicates asynchronous response
	}
});
*/
