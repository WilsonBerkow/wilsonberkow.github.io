(function () {
    // Set the "WATCH DESTINY SCORE" button to toggle display of the
    // video of DEStiny in autonomous.
    var openButton = document.getElementById("cv-video-opener");
    var videoContainer = document.getElementById("cv-video-container");
    openButton.addEventListener("click", function (event) {
        if (videoContainer.style.display === "block") {
            videoContainer.style.display = "none";
        } else {
            videoContainer.style.display = "block";
        }
        event.preventDefault();
    });
}());
