// ==UserScript==
// @name        AJB Profile Monkey
// @namespace   https://github.com/Alliex/greasemonkeyscripts
// @description Adding meta info collected at https://ajb.karantor.com (h/t Karantor)
// @include     https://abandonedjerks.com/topic/*
// @version     .2
// @grant       none
// ==/UserScript==
console.log('This script grants no special privileges, so it runs without security limitations.');

var spans = document.getElementsByTagName('span');

for (i=0; i<spans.length; i++) {
    if(spans[i].getAttribute('itemprop') =='name') {
        spans[i].innerHTML += '1';
        spans[i].wholeText += '2';
    }
}
