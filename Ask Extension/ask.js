/**
 * Created by Nick Weseman on 4/27/2017.
 */

BASE_URL = "http://ask.com";

function click(info, tab) {
    var askUrl = BASE_URL;

    if(info.selectionText != null) {
        var encodedSearchStr = encodeURIComponent(info.selectionText);
        askUrl += "/web?q=" + encodedSearchStr;
    }

    chrome.tabs.create({url: askUrl});
}

var title = "Search Ask.com for \"%s\"";
var id = chrome.contextMenus.create({"title": title, "contexts":["selection"],
    "onclick": click});

title = "Go To Ask.com";
id = chrome.contextMenus.create({"title": title, "contexts":["page"],
    "onclick": click});
