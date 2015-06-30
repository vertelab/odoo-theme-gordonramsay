var elementId = "klocka";
function clock(){
	if (document.layers || document.all || document.getElementById){
		now = new Date();
		h = "0" + now.getHours();
		h = h.substring(h.length-2, h.length);
		min = "0" + now.getMinutes();
		min = min.substring(min.length-2, min.length);
		time = " " + h + ":" + min;
		if(document.layers){
			with (document[elementId].document){
				open();
				write(time);
				close();
			}
		} else if (document.all){
			document.all[elementId].innerHTML = time;
		} else if (document.getElementById){
			jxdocrange = document.createRange();
			jxdocrange.setStartBefore(document.getElementById(elementId));
			while (document.getElementById(elementId).hasChildNodes()){
				document.getElementById(elementId).removeChild(document.getElementById(elementId).lastChild);
			}
			document.getElementById(elementId).appendChild(jxdocrange.createContextualFragment(time));
		}
		setTimeout("clock()", 1000);
	}
}
setTimeout("clock()", 1000);