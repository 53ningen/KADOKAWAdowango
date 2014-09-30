/**
 * (c)2014 gomi_ningen all right reserved.
 * author gomi_ningen 2014/10/01
 */

function replaceDowango(str) {
	function replacer(str, p1, p2) {
		return p1 + p2
	}

    return str.replace(/([Dd])[oO](wango|WANGO)/g, replacer)
}

$(document).ready(function(){
	document.body.innerHTML = replaceDowango(document.body.innerHTML)
})
