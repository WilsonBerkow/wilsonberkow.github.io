(function () {
    // Normalize path
    (function () {
        var lowered = window.location.hash.toLowerCase();
        if (lowered.startsWith("#watch-crc") || lowered.startsWith("#auto-crc")) {
            window.history.replaceState({view: "crc-video"}, "CRC Video", "#auto-crc");
        }
    }());

    // Utils
    var openButton = document.getElementById("cv-video-opener");
    var videoContainer = document.getElementById("cv-video-container");
    function showCRCVideo() {
        window.history.replaceState({view: "crc-video"}, "CRC Video", "#auto-crc");
        videoContainer.style.display = "block";
    }
    function hideCRCVideo() {
        window.history.replaceState({view: "default"}, "Wilson Berkow", "#");
        videoContainer.style.display = "none";
    }
    function isCRCInURL() {
        return window.location.hash.startsWith("#auto-crc");
    }

    // Set the "WATCH DESTINY SCORE" button to toggle display of
    // the video of DEStiny.
    openButton.addEventListener("click", function (event) {
        if (isCRCInURL()) {
            hideCRCVideo();
        } else {
            showCRCVideo();
        }
        event.preventDefault();
    });

    // If user navigated directly to "#auto-crc", display the video
    if (isCRCInURL()) {
        showCRCVideo();
    }
}());
