var video = videojs('intro-video');
var overlay = document.getElementById('videooverlay');
if (visited) {
	document.getElementById("videooverlay").style.opacity = "1";
	document.getElementsByClassName("vjs-big-play-button")[0].style.display = "none";
};

overlay.onclick = function(){
	togglePause();
};
// videojs.options.children.loadingSpinner = false;


 function togglePause(){
  if (video.paused()) {
		document.getElementById("videooverlay").style.opacity = "0";
    video.play();
  }
  else {
    video.pause();
  }
}

// video.on('ended', function() {
// 	video.currentTime(23);
// 	video.play();
// });

// video.LoadingSpinner(false);
// video.loop(true);
video.on('timeupdate', function () {
	if ( this.currentTime() < 15 && this.currentTime() > 0) {
		document.getElementById("videooverlay").style.opacity = "0";
	}
	if ( this.currentTime() >= 40.12) {
		video.currentTime(27.1);
	}
	if ( this.currentTime() >= 15 ){
		document.getElementById("videooverlay").style.opacity = "1";
		// overlay.style.display = "block";
	};
});



// video.ready(function() {
// 	setTimeout(() => {
// 		this.play();
// 	}, 3000);
// });