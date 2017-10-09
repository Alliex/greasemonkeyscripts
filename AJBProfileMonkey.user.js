// ==UserScript==
// @name        AJB Profile Monkey
// @namespace   https://github.com/Alliex/greasemonkeyscripts
// @include     https://*.abandonedjerks.com
// @version     1
// @grant       none
// ==/UserScript==
console.log('This script grants no special privileges, so it runs without security limitations.');

var spans = document.getElementsByTagName('span');

for (i=0; i<spans.length; i++) {
    if(spans[i].getAttribute('itemprop') == 'name') {
        nametx = spans[i].innerhtml;
    }
    spans[i].innerhtml += nametx;
}
