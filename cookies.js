function showCookiesForTab(tabs) {
    tab = tabs.pop();

    chrome.cookies.getAll({name: "cookie_name"}, function (cookies) {

        var html = '';
        if (cookies.length > 0) {
            for (cookie of cookies) {
                html += "<span class='label label-default'>" + cookie.domain + ' ' + cookie.value + "</span><br>";
            }
        } else {
            html += "Brak ciasteczek";
        }

        var div = document.getElementById("found_cookies");
        div.innerHTML = html;
    });
};

chrome.tabs.query({
    active: true,
    currentWindow: true
}, function (tabs) {
    showCookiesForTab(tabs)
});
