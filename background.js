let styleText = `.issue-body-content { background-color : lightyellow;}`;

chrome.runtime.onInstalled.addListener(() => {
    chrome.storage.sync.set({ styleText });
    console.log('Default background color set to %cgreen', `color: ${styleText}`);
});