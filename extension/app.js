/* global chrome */
'use strict';

const s = document.createElement('script');
//s.src = chrome.extension.getURL('script.js');
s.src = 'http://localhost:3000/static/js/bundle.js';
s.onload = function () {
  this.parentNode.removeChild(this);
};

(document.head || document.documentElement).appendChild(s);
