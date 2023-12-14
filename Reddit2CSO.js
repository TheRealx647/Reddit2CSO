// ==UserScript==
// @name         CrapShackOnline
// @namespace    https://www.reddit.com/notadmin/x647
// @version      1.0
// @description  Replace all instances of the word "Reddit" with "CrapShackOnline" on New|Old Reddit
// @author       x647
// @match        *://www.reddit.com/*
// @match        *://old.reddit.com/*
// @icon         https://www.shareicon.net/data/128x128/2016/08/18/815514_animal_512x512.png
// ==/UserScript==

// Author: x647
// Released: v1.00 13 December 2023



(function() {
    'use strict';

    // Replace function
    function replaceText(node) {
        node.nodeValue = node.nodeValue.replace(/Reddit/g, 'CrapShackOnline'); //Replace with any asinine thing you want...go nuts
    }

    // Walk through all text nodes
    function walk(node) {
        var child, next;

        switch (node.nodeType) {
            case 1: // Element
            case 9: // Document
            case 11: // Document fragment
                child = node.firstChild;
                while (child) {
                    next = child.nextSibling;
                    walk(child);
                    child = next;
                }
                break;

            case 3: // Text node
                replaceText(node);
                break;
        }
    }

    // Start walking the document body
    walk(document.body);
})();
