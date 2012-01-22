// ==UserScript==
// @name          Waze Aerial Shifter
// @description   This script helps you adjust the position of underlaying bing maps
// @include       https://world.waze.com/cartouche/
// ==/UserScript==
//
// This script is just a loader for code hosted on:
//  https://github.com/byo/WazEdPlus

function load( url ) {
	var s = document.createElement('script');
	s.src = url;
	document.getElmentsByTagName('head')[0].appendChild(s);
}

load('https://raw.github.com/byo/WazEdPlus/shift.js');
