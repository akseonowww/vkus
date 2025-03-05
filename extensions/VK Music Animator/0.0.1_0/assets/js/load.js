let i = document.createElement("script");
i.src = chrome.runtime.getURL("assets/js/app.js");
i.charset = "utf-8"; i.async = false;
(document.head || document.documentElement).appendChild(i);