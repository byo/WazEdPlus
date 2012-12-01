//
// Author: byo
// License: GPLv3+
//
$(function() {

	var nav = $('<div style="position:absolute;right:0px;bottom:0px;font-size:10px;color:#fff;">'
			+ 'Shift: <input type="text" style="width:30px;font-size:10px;" class="sx" value="0"/>m x '
			+ '<input type="text" style="width:30px;font-size:10px;" class="sy" value="0"/>m'
			+ '</div>');
	var sx = nav.find('.sx');
	var sy = nav.find('.sy');
	$("#site-navigation").css('position', 'relative').append(nav);

	var cookiePrefix = 'wazedplus_aerialshifter_';

	// Restore values from cookies
	if ($.cookie(cookiePrefix + 'sx') !== null) {
		sx.val($.cookie(cookiePrefix + 'sx'));
	}
	if ($.cookie(cookiePrefix + 'sy') !== null) {
		sx.val($.cookie(cookiePrefix + 'sy'));
	}

	var update = function() {

		// Calculate meters per pixel factor of current map
		var ipu = OpenLayers.INCHES_PER_UNIT;
		var metersPerPixel = wazeMap.getResolution() * ipu['m']
				/ ipu[wazeMap.getUnits()];
		var shiftX = parseInt(sx.val(), 10);
		var shiftY = parseInt(sy.val(), 10);

		// Apply the shift
		$('.MicrosoftMap').css('left',
				Math.round(shiftX / metersPerPixel) + 'px').css('top',
				Math.round(shiftY / metersPerPixel) + 'px');

		// Save values into cookies for a future use
		$.cookie(cookiePrefix + 'sx', sx.val());
		$.cookie(cookiePrefix + 'sy', sy.val());
	};

	update();

	wazeMap.events.on({
		zoomend : update
	});
	sx.change(update);
	sy.change(update);

});
