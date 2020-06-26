var video, canvas, imgindex, context, toggleEyeLidsButton, isVideo, model;

const modelParams = {
    flipHorizontal: true,   // flip e.g for video  
    maxNumBoxes: 20,        // maximum number of boxes to detect
    iouThreshold: 0.5,      // ioU threshold for non-max suppression
    scoreThreshold: 0.6,    // confidence threshold for predictions.
};

function searchForHands() {
    model.detect(video).then(predictions => {
        console.log("Predictions: ", predictions);
        model.renderPredictions(predictions, canvas, context, video);
        if (isVideo) {
            requestAnimationFrame(searchForHands);
        }
    });
}

function openMyEyes() {
    handTrack.startVideo(video).then(function (status) {
        console.log("video started", status);
        if (status) {
            //updateNote.innerText = "Video started. Now tracking"
            isVideo = true;
            console.log(`Visual stream live! \nNow searching for hands.\nAugR engaged: ${isVideo}`);
            toggleEyeLidsButton.style.backgroundColor = "rgba(255, 0, 0, 1.0)";
            searchForHands();
        } else {
            console.log("Visual stream dormant. \nWaiting...");
        }
    });
}

function closeMyEyes(){
    handTrack.stopVideo(video)
    toggleEyeLidsButton.style.backgroundColor = "rgba(255, 0, 0, 0.2)";
    isVideo = false;
    console.log(`Closing my eyes... \nVisual stream dormant. AugR engaged: ${isVideo}`);
}

function moveMyEyelids() {
    if (!isVideo) {
        console.log("Starting video");
        openMyEyes();
    }
    else {
        closeMyEyes();
    }
}

function init(){
    video = document.getElementById("myvideo");
    canvas = document.getElementById("canvas");
    context = canvas.getContext("2d");
    toggleEyeLidsButton = document.getElementById("move-my-eyelids-button-container");

    imgindex = 1
    isVideo = false;
    model = null;
}

function addButtonListeners(){
    toggleEyeLidsButton.addEventListener("click", function(){
        moveMyEyelids();
        
        handTrack.load(modelParams).then(function(lmodel){
            model = lmodel

            console.log("Loaded Model!");
        });
    });
}

document.addEventListener("DOMContentLoaded", function(){
    init();     //buildMarkup()
    addButtonListeners();
});