// ==UserScript==
// @name         BolhaDefrost
// @version      1.0
// @description  Odzameglji potečene oglase na Bolhi.
// @author       chocoearly44
// @match        *://*.bolha.com/*
// @icon         https://static.bolha.com/dist/67a16d0dcc.ico
// @grant        none
// ==/UserScript==

(
    function() {
        'use strict';

        var bluredElements = document.getElementsByClassName("ClassifiedDetail--blurContent");
        for (let i = 0; i < bluredElements.length; i++) {
            bluredElements[i].classList.remove("ClassifiedDetail--blurContent");
        }
    }
)();
