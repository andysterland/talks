﻿(function init() {
    window.addEventListener("DOMContentLoaded", function onDOMContentLoaded() {
        var fetch = document.getElementById("fetch");
        fetch.addEventListener("click", function fetch_onClick() {
            var xhr = new XMLHttpRequest();
            xhr.open("GET", "xhr_test.txt", true);
            xhr.onreadystatechange = function xhr_handler() {
                if (xhr.readyState == 4) {
                    if (xhr.status == 200) {
                        var out = document.getElementById("out");
                        var xhrDoc = xhr.responseXMLl
                        var msgNode = xhrDoc.getElementsByTagName("message");
                        var message = "Message recived on " + new Date() + ": " + msgNode.nodeValue;
                        out.textContent = message;
                    }
                }
            };
            xhr.send(null);
        });
    });
})();