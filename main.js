chrome.commands.onCommand.addListener(function(command) {
  chrome.tabs.create({}, function(tab){
    //Opened
  });
});
