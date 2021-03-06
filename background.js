(function(){
  var canonicalUrls = {};

  chrome.extension.onRequest.addListener(function(request, sender, callback) {
    if(request.action){
      if(request.action == 'log'){
        console.log(request.text);
      }
      else if(request.action == 'error'){
        console.error(request.text);
      }
      else if(request.action == 'setCanonical'){
        canonicalUrls[sender.tab.id] = request.url;
        chrome.pageAction.setTitle(
          {
            tabId: sender.tab.id,
            title: "Canonical url: " + request.url
          }
        );
        chrome.pageAction.show(sender.tab.id);
      }
    }
  });

  // tab is going away, remove the canonical data for it
  chrome.tabs.onRemoved.addListener(function(tabId) {
    delete canonicalUrls[tabId];
  });

  // address bar icon clicked, navigate the tap to the canonical url
  chrome.pageAction.onClicked.addListener( function(tab) {
    chrome.tabs.update(tab.id, {url: canonicalUrls[tab.id]});
  });

  chrome.tabs.onUpdated.addListener( function(tabId, changeInfo, tab) {
    // ensure that the url data lives for the life of the page, not the tab
    if(changeInfo.status == "loading"){
      delete canonicalUrls[tabId];
    }
  });
})();
