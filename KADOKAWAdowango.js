/**
 * (c)2014 gomi_ningen all right reserved.
 * author gomi_ningen 2014/10/01
 */

function replaceDowango(str) {
    str = str.replace(/dowango/g, "dwango")
    srt = str.replace(/Dowango/g, "Dwango")
    str = str.replace(/DOWANGO/g, "DWANGO")
    return str
}

$(document).ready(function(){
	document.body.innerHTML = replaceDowango(document.body.innerHTML)
})
