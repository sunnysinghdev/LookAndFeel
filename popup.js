let applyButton = document.getElementById("applyButton");
let ele = document.getElementById("cssTextRedZone");

// On open of popup UI
// Get value form storage
// ApplyCss in Dom
chrome.storage.sync.get("styleText", ({ styleText }) => {
    ele.value = styleText;
    var st = document.createElement('style');
    //st.type = 'text/css';
    st.innerHTML = styleText;
    document.getElementsByTagName('head')[0].appendChild(st);
});

//Set CSS from textarea
applyButton.addEventListener("click", async () => {
    chrome.storage.sync.set({ "styleText" : ele.value });

    let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

    chrome.scripting.executeScript({
        target: { tabId: tab.id },
        function: setPageBackgroundColor,
    });
});

function setPageBackgroundColor() {
    //console.log(ele);
    //see context
    chrome.storage.sync.get("styleText", ({ styleText }) => {
        var st = document.createElement('style');
        //st.type = 'text/css';
        st.innerHTML = styleText;
        document.getElementsByTagName('head')[0].appendChild(st);
    });
    
}