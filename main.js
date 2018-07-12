searchWormWiki = function(word){
  var query = word.selectionText;
  chrome.tabs.create({url: "http://worm.wikia.com/wiki/" + query});
};

chrome.contextMenus.create({
  title: "Search in Worm Wiki",
  contexts:["selection"],
  onclick: searchWormWiki
});

chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
     chrome.declarativeContent.onPageChanged.addRules([{
       conditions: [
           new chrome.declarativeContent.PageStateMatcher({
               pageUrl: {hostEquals: 'www.parahumans.net'},
           }),
           new chrome.declarativeContent.PageStateMatcher({
               pageUrl: {hostEquals: 'parahumans.wordpress.com'},
           })
       ],
       actions: [new chrome.declarativeContent.ShowPageAction()]
   }]);
});
