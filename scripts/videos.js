// Add event listeners to all videos to go to overlay
var allVideos = document.getElementsByClassName("videosPageVideo");
for (var i=0; i<allVideos.length; i++){
    allVideos[i].addEventListener("click", event => {
        document.getElementById("overlayVideo").src = event.target.id;
        document.getElementById("videoOverlay").style.display = "block";
    })
}

// Add event listener to overlay background
document.getElementById("videoOverlay").addEventListener("click", event => {
    if (event.target == document.getElementById("videoOverlay")) {
        document.getElementById("videoOverlay").style.display = "none";
        document.getElementById("overlayVideo").src = ""; // Stop the video from playing
    }
})