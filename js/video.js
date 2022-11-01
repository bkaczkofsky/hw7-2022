var video;

window.addEventListener("load", function() {
	console.log("Good job opening the window");
	video = document.querySelector("#player1");
	video.autoplay = false;
	video.loop = false;
	console.log("Auto play is set to " + video.autoplay)
	console.log("Loop is set to " + video.loop)
});

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video = document.querySelector("#player1");
	video.play();
	document.querySelector("#volume").innerHTML = video.volume * 100 + "%";
	console.log("Volume is " + video.volume);
});

document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	video = document.querySelector("#player1");
	video.pause();
});

document.querySelector("#slower").addEventListener("click", function() {
	console.log("Slow Down");
	video = document.querySelector("#player1");
	video.playbackRate *= 0.90;
	console.log("New speed: " + video.playbackRate);
});

document.querySelector("#faster").addEventListener("click", function() {
	console.log("Speed Up");
	video = document.querySelector("#player1");
	video.playbackRate /= 0.9;
	console.log("New speed: " + video.playbackRate);
});

document.querySelector("#skip").addEventListener("click", function() {
	console.log("Skip Ahead");
	video = document.querySelector("#player1");
	if (video.currentTime + 10 >= video.duration) {
		video.currentTime = 0;
		console.log("Current time is " + video.currentTime);
	}
	else {
		video.currentTime += 10;
		console.log("current time is " + video.currentTime);
	}
});

document.querySelector("#mute").addEventListener("click", function() {
	console.log("Mute");
	video = document.querySelector("#player1");
	video.muted = !(video.muted);
	console.log("Muted is " + video.muted);
	if (video.muted) {
		document.querySelector("#mute").innerHTML = "Unmute"
	}
	else {
		document.querySelector("#mute").innerHTML = "Mute"
	}
});

document.querySelector("#slider").addEventListener("click", function() {
	console.log("Volume Slider");
	console.log("Current volume is " + video.volume);
	video = document.querySelector("#player1");
	video.volume = this.value / 100;
	document.querySelector("#volume").innerHTML = video.volume * 100 + "%";
});

document.querySelector("#vintage").addEventListener("click", function() {
	console.log("Styled");
	document.body.classList.add('#vintage');
	video = document.querySelector("#player1");
	video.classList.add("#vintage");
});

// document.querySelector("#orig").addEventListener("click", function() {
// 	console.log("Original");
// 	video = document.querySelector("#player1");
	
// });

