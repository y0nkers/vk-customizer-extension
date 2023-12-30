document.addEventListener("DOMContentLoaded", function() {
    let apply_options;

    chrome.storage.sync.get("apply_options", function(data){
        apply_options = data.apply_options || false;
        document.getElementById("apply_changes").checked = apply_options;
    });

    document.getElementById("btn_settings").addEventListener("click", function(){
        chrome.runtime.openOptionsPage();
    });

    document.getElementById("btn_reload").addEventListener("click", function(){
        chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
            chrome.tabs.sendMessage(tabs[0].id, {apply_options: apply_options});
            alert("Настройки перезагружены!");
        });
    });

    document.getElementById("apply_changes").addEventListener("change", function() {
        apply_options = this.checked;
        chrome.storage.sync.set({apply_options: apply_options});

        chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
            chrome.tabs.sendMessage(tabs[0].id, {apply_options: apply_options});
        });
    });
});