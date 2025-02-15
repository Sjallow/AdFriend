chrome.runtime.onInstalled.addListener(() => {
    console.log("AdFriend Extension Installed and Running!");
});

chrome.runtime.onStartup.addListener(() => {
    console.log("AdFriend Extension Service Worker Activated");
});
