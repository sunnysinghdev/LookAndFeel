chrome.storage.sync.get("styleText", ({ styleText }) => {
    var st = document.createElement('style');
    //st.type = 'text/css';
    st.innerHTML = styleText;
    document.getElementsByTagName('head')[0].appendChild(st);
});