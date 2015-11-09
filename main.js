// ==UserScript==
// @name         Golang.org code highlight
// @namespace    https://www.netroby.com/
// @version      0.1
// @description  Add code highlight in golang.org
// @author       netroby
// @include      https://golang.org/*
// @match        https://golang.org/*
// @grant        none
// ==/UserScript==
/* jshint -W097 */
'use strict';
var allpre = document.body.getElementsByTagName("pre")
for (var i = 0; i < allpre.length; i++) {
    allpre[i].classList.add('prettyprint');
}

var script = document.createElement('script');script.type='text/javascript';
script.src="https://cdn.rawgit.com/google/code-prettify/master/loader/run_prettify.js";
document.head.appendChild(script);
