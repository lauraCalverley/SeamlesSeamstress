function onYouTubeIframeAPIReady() {
var player;
player = new YT.Player('madness-video-bg', {
videoId: 'tUIQS_K1ZJ4', // YouTube Video ID
playerVars: {
autoplay: 1, // Auto-play the video on load
controls: 1, // Show pause/play buttons in player
showinfo: 0, // Hide the video title
modestbranding: 0, // Hide the Youtube Logo
loop: 0, // Run the video in a loop
fs: 0, // Hide the full screen button
},
events: {
onReady: function(e) {
e.target.mute();
}
}
});
}