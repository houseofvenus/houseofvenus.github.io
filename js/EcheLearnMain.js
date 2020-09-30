var video, canvas, imgindex, context, toggleEyeLidsButton, isVideo, model;

const modelParams = {
    flipHorizontal: true,   // flip e.g for video  
    maxNumBoxes: 20,        // maximum number of boxes to detect
    iouThreshold: 0.5,      // ioU threshold for non-max suppression
    scoreThreshold: 0.6,    // confidence threshold for predictions.
};

function searchForHands() {
    model.detect(video).then(function(predictions){
        //console.log("Predictions: ", predictions);
        model.renderPredictions(predictions, canvas, context, video);
        predictionHandler(predictions)
        if (isVideo) {
            requestAnimationFrame(searchForHands);
        }
    });
}

function predictionHandler(predictions){
    let boundaryBox = predictions;
    if(boundaryBox["0"]){
        let score = boundaryBox["0"].score; 
        let uLeft = boundaryBox["0"].bbox["0"]; 
        let uRight = boundaryBox["0"].bbox["1"]; 
        let lLeft = boundaryBox["0"].bbox["2"];
        let lRight = boundaryBox["0"].bbox["3"];
        console.log(`score: ${score}`);
        console.log(`upper left: ${uLeft}`);
        console.log(`upper right: ${uRight}`);
        console.log(`lower left: ${lLeft}`);
        console.log(`lower right: ${lRight}`);
    }
}

function openMyEyes() {
    stopDormantVisualStream();
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

function stopDormantVisualStream(e) {
    var stream = video.srcObject;
    var tracks = stream.getTracks();

    for (var i = 0; i < tracks.length; i++) {
        var track = tracks[i];
        track.stop();
    }

    video.srcObject = null;
    video.style.display = "none";
    canvas.style.display = "block";
}

function startDormantVisualStream(e){
    if (navigator.mediaDevices.getUserMedia) {
      navigator.mediaDevices.getUserMedia({ video: true })
        .then(function (stream) {
          video.srcObject = stream;
          //
            video.style.display = "block";
            canvas.style.display = "none";
        })
        .catch(function (err0r) {
          console.log("Something went wrong!");
        });
    }
}

function closeMyEyes(){
    handTrack.stopVideo(video);
    startDormantVisualStream();
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
    startDormantVisualStream();
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