// Add event listeners to all images to go to overlay
var allImages = document.getElementsByClassName("imagesPageImage");
for (var i=0; i<allImages.length; i++){
    allImages[i].addEventListener("click", event => {
        document.getElementById("overlayImage").src = event.target.src;
        document.getElementById("imageOverlay").style.display = "block";
    })
}

// Add event listener to overlay background
document.getElementById("imageOverlay").addEventListener("click", event => {
    if (event.target == document.getElementById("imageOverlay")) {
        document.getElementById("imageOverlay").style.display = "none";
    }
})