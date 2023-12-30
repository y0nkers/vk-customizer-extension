window.onload = (event) => {
    chrome.storage.sync.get("apply_options", function(data) {
        if (data.apply_options == true)
            apply_options();
    });
};

chrome.runtime.onMessage.addListener(
	function(request, sender, sendResponse) {
        if (request.apply_options == true) apply_options();
        else clear_options();
	}
);

function clear_options() {
    let style = document.getElementById("VkCustomizerExtension");
    if (style) style.remove();
}

function apply_options() {
    clear_options();

    chrome.storage.sync.get("options", function(data) {
        const options = data.options || {};
        let style = '<style id="VkCustomizerExtension">  ';
        for (const [key, value] of Object.entries(options)) {
            if (value == true)
                style = style.concat('', key + ', ');
        }
        style = style.slice(0, -2);
        style = style.concat('', " {display: none !important;} </style>");

        document.head.insertAdjacentHTML('beforeend', style);
    });
}
