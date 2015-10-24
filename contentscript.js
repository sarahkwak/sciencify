chrome.webRequest.onBeforeRequest.addListener(
        function(details) { return {cancel: true}; },
        {urls: ["*://www.foxnews.com/*"]},
        ["blocking"]);
