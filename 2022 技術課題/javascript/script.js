function scroll_to_top(){
	window.scroll({top: 0, behavior: 'smooth'});
};
var smoothScroll = function(duration) {
	if (!duration) duration = 300;

	var startTime = remainder = startScroll = 0;

	var animateScroll = function() {
		if (!remainder) {
			startTime = (new Date).getTime();
			remainder = startScroll = window.scrollY;
			setTimeout(animateScroll);
			return;
		}

		var elapsedTime = (new Date).getTime() - startTime;

		remainder = startScroll - (startScroll * (elapsedTime / duration));

		window.scrollTo(0, remainder > 0 ? remainder : 0);

		if (elapsedTime < duration) setTimeout(animateScroll);
	};

	setTimeout(animateScroll);
};
var pageTopElem = document.getElementById('top');

pageTopElem.onclick = function(e) {
	smoothScroll();

	if (e.preventDefault) {
		e.preventDefault();
	} else {
		e.returnValue = false;
	}
};
