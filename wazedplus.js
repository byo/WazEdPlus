//
// Author: byo
// License: GPLv3+
//
$(function() {

	var scriptId = 'wazedplus_root_script';
	var githubUrl = 'https://raw.github.com/byo/WazEdPlus/';
	var debugCookie = $.cookie('wazedplus_debug_branch');

	// Detect the base URL path for scripts
	var baseUrl = (function() {
		var rootEl = document.getElementById(scriptId);
		if (rootEl === null) {
			// Safety guard for older loader scripts
			// TODO: We could warn about outdated script here
			return githubUrl + 'stable/';
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

	// Detect a debug mode allowing to overwrite the root URL
	if (debugCookie !== null) {

		// Generate new script's URL to load
		var newBaseUrl = githubUrl + debugCookie + '/';
		if (newBaseUrl != baseUrl) {
			setTimeout(function() {
				// Replace the main script with the debug one
				$('#' + scriptId).remove();

				// Append new script in place of the old one
				var s = document.createElement('script');
				s.id = scriptId;
				s.src = newBaseUrl + 'wazedplus.js';
				document.getElementsByTagName('head')[0].appendChild(s);
			}, 1000);
			// Jump out of here, don't load components
			return;
		}
	}

	// Load WazEdPlus components
	loadScript('aerialshifter/main.js');
});
