//
// Author: byo
// License: GPLv3+
//
$(function() {

	// Detect the base URL path for scripts
	var baseUrl = (function() {
		var rootEl = document.getElementById('wazedplus_root_script');
		if (rootEl === null) {
			// Safety guard for older loader scripts
			// TODO: We could warn about outdated script here
			return 'https://raw.github.com/byo/WazEdPlus/stable/';
		}
		var currentUrl = rootEl.src;
		return currentUrl.substr(0, currentUrl.lastIndexOf('/') + 1);
	})();

	// Load another script into Waze
	function loadScript(name) {
		var s = document.createElement('script');
		s.src = baseUrl + name;
		document.getElementsByTagName('head')[0].appendChild(s);
	}

	// Load WazEdPlus components
	loadScript( 'aerialshifter/main.js' );
});
