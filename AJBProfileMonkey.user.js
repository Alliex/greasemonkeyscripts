// ==UserScript==
// @name        AJB Profile Monkey
// @namespace   https://github.com/Alliex/greasemonkeyscripts
// @description Adding meta info collected at https://ajb.karantor.com (h/t Karantor)
// @include     https://abandonedjerks.com/topic/*
// @version     .1
// @grant       none
// ==/UserScript==
console.log('This script grants no special privileges, so it runs without security limitations.');

var spans = document.getElementsByTagName('span');

for (i=0; i<spans.length; i++) {
    if(spans[i].getAttribute('itemprop') == 'name') {
        nametx = spans[i].innerHTML;
        nametx2 = spans[i].wholeText;
    }
    spans[i].innerHTML = nametx+'1';
    spans[i].wholeText += nametx2+'2';
}
console.log('Test');
