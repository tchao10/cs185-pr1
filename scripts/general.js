// Check if the user has scrolled far enough to trigger a "go to top" button
document.addEventListener("scroll", checkGoToTop);
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