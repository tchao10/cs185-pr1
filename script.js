// Images page
// Add event listeners to all images
var allImages = document.getElementsByClassName("imagesPageImage");
for (var i=0; i<allImages.length; i++){
    allImages[i].addEventListener("click", event => {
        document.getElementById("overlayImage").src = event.target.src;
        document.getElementById("imageOverlay").style.display = "block";
    })
}

// Hacky check to see if we are in images page
// If so, do the "go to top" checks
if (allImages.length > 0){
    document.addEventListener("scroll", checkGoToTop);
}

// Add event listener to overlay background
if (document.getElementById("imageOverlay") != null){
    document.getElementById("imageOverlay").addEventListener("click", event => {
        document.getElementById("imageOverlay").style.display = "none";
    })
}

// Check if the user has scrolled far enough to trigger a "go to top" button
function checkGoToTop(){
    var documentElement = document.documentElement;
    var percentageScrolled = documentElement.scrollTop/(documentElement.scrollHeight - documentElement.clientHeight);

    if (percentageScrolled > 0.25) {
        document.getElementById("goToTopButton").style.display = "block";
    }
    else {
        document.getElementById("goToTopButton").style.display = "none";
    }
}

function goToTop(){
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}






// Videos page
// Add event listeners to all videos
var allVideos = document.getElementsByClassName("videosPageVideo");
console.log(allVideos.length);
for (var i=0; i<allVideos.length; i++){
    allVideos[i].addEventListener("click", event => {
        document.getElementById("overlayVideo").src = event.target.id;
        document.getElementById("videoOverlay").style.display = "block";
    })
}

// Add event listener to overlay background
if (document.getElementById("videoOverlay") != null){
    document.getElementById("videoOverlay").addEventListener("click", event => {
        document.getElementById("videoOverlay").style.display = "none";
        document.getElementById("overlayVideo").src = ""; // Stop the video from playing
    })
}






// Email page
function validateEmail(){
    var inputString = document.getElementById("emailInput").value;

    if (inputString.includes("@") && (inputString.endsWith(".com") || inputString.endsWith(".edu"))){
        document.getElementById("emailValidationMessage").innerHTML = "✅ Email successfully recorded!";
        document.getElementById("emailValidationMessage").style.backgroundColor = "#bbffbb";
    } else {
        document.getElementById("emailValidationMessage").innerHTML = "❌ Invalid email address.";
        document.getElementById("emailValidationMessage").style.backgroundColor = "#ffbbbb";
    }

    document.getElementById("emailValidationMessage").style.display = "block";
}