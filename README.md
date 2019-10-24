## What it does

This extensions list the cookies with specific name from all domains

## Customization

You need to change cookie name in cookies.js at line:
```
chrome.cookies.getAll({name: "cookie_name"}, function (cookies) {
```
