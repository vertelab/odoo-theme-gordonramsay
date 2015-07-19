function initCountdown(year, month, day, hour, min){
	target_date = new Date(year, month, day, hour, min); // set the countdown date, (month 0-11)
	//~ var target_date = new Date().getTime() + (1000*3600*48); // set the countdown date

	getCountdown();

	setInterval(function () { getCountdown(); }, 1000);
}

function getCountdown(){

	// find the amount of "seconds" between now and target
	var current_date = new Date().getTime();
	var seconds_left = (target_date - current_date) / 1000;

	var days = pad( parseInt(seconds_left / 86400) );
	seconds_left = seconds_left % 86400;
		 
	var hours = pad( parseInt(seconds_left / 3600) );
	seconds_left = seconds_left % 3600;
		  
	var minutes = pad( parseInt(seconds_left / 60) );
	seconds = pad( parseInt( seconds_left % 60 ) );

	var countdown = document.getElementById("tiles"); // get tag element
	// format countdown string + set tag value
	countdown.innerHTML = "<span>" + days + "</span><span>" + hours + "</span><span>" + minutes + "</span><span>" + seconds + "</span>"; 
}

function pad(n) {
	return (n < 10 ? '0' : '') + n;
}

