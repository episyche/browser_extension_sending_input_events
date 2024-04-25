chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    if (request.action === 'start recording') {
        let page_url;
        chrome.tabs.query({ currentWindow: true, active: true }, function (tabs) {
            page_url = tabs[0].url
            tabID = tabs[0].id
            chrome.windows.create({
                url: tabs[0].url,
                width: 370,
                height: 600,
            }, function (window) {
                // Access the tab ID from the created window object
                var tabId = window.tabs[0].id;
                chrome.storage.sync.set({ mobiletabid: tabId });
            });
        });
    }
    else if (request.type === 'keyEvent') {
        chrome.storage.sync.get(['mobiletabid'], function (result) {
            let mobileTabId = result.mobiletabid;
            chrome.tabs.sendMessage(mobileTabId, { type: 'keyEvent', message: request })
        })
    }

    else if (request.type === 'labelEvent') {
        chrome.storage.sync.get(['mobiletabid'], function (result) {
            let mobileTabId = result.mobiletabid;
            chrome.tabs.sendMessage(mobileTabId, { type: 'labelEvent', message: request })
        })
    }

    else if (request.type === 'inputEvent') {
        chrome.storage.sync.get(['mobiletabid'], function (result) {
            let mobileTabId = result.mobiletabid;
            chrome.tabs.sendMessage(mobileTabId, { type: 'inputEvent', message: request })
        })
    }

    else if (request.type === 'dateEvent') {
        chrome.storage.sync.get(['mobiletabid'], function (result) {
            let mobileTabId = result.mobiletabid;
            chrome.tabs.sendMessage(mobileTabId, { type: 'dateEvent', message: request })
        })
    }
    else if (request.type === 'timeEvent') {
        chrome.storage.sync.get(['mobiletabid'], function (result) {
            let mobileTabId = result.mobiletabid;
            chrome.tabs.sendMessage(mobileTabId, { type: 'timeEvent', message: request })
        })
    }
    else if (request.type === 'textEvent') {
        chrome.storage.sync.get(['mobiletabid'], function (result) {
            let mobileTabId = result.mobiletabid;
            chrome.tabs.sendMessage(mobileTabId, { type: "textEvent", message: request })
        })
    }

    sendResponse({ status: 'ok' });
    chrome.tabs.query({ currentWindow: true, active: true }, function (tabArray) {
    }
    );
})


































