function getVideoFile(){
    var url = new URL(window.location.href);
    var videoName = url.searchParams.get("id");
    return "./files/videos/" + videoName + ".webm";
}

function getDescriptionFile(){
    var url = new URL(window.location.href);
    var videoName = url.searchParams.get("id");
    return "./files/descriptions/" + videoName;
}

function onVideoLoad(){
    //update video element
    var videoElement = document.getElementById("main-video");
    var videoFile = getVideoFile();
    videoElement.setAttribute("src", videoFile);

    //update description element
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("video-description").innerHTML = this.responseText;
        }else if(this.readyState == 4 && this.status == 404) {
            document.getElementById("video-description").innerHTML = "<center><i>No description exists for this video.</i></center>";
        }
    };
    xhttp.open("GET", getDescriptionFile(), true);
    xhttp.send();
}

function updateSpeed(speed){
    var videoElement = document.getElementById("main-video");
    videoElement.playbackRate = speed;
}