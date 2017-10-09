// ==UserScript==
// @name        AJB Profile Monkey
// @namespace   https://github.com/Alliex/greasemonkeyscripts
// @description To clean up and reorganize some of the beeradvocate data
// @include     https://*.abandonedjerks.com/*
// @version     .1
// @grant       none
// ==/UserScript==
console.log('This script grants no special privileges, so it runs without security limitations.');

var spans = document.getElementsByTagName('span');

for (i=0; i<spans.length; i++) {
    if(spans[i].getAttribute('itemprop') == 'name') {
        nametx = spans[i].innerhtml;
        nametx2 = spans[i].wholetext;
    }
    spans[i].innerhtml = nametx+'1';
    spans[i].wholetext = nametx2+'2';
}
