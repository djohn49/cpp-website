function getVideoFile(){
    var url = new URL(window.location.href);
    var videoName = url.searchParams.get("id");
    return "./files/videos/" + videoName + ".webm";
}

function onVideoLoad(){
    //update video element
    var videoElement = document.getElementById("main-video");
    var videoFile = getVideoFile();
    videoElement.setAttribute("src", videoFile);
}

function updateSpeed(speed){
    var videoElement = document.getElementById("main-video");
    videoElement.playbackRate = speed;
}