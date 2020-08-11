var video, canvas, imgindex, context, toggleEyeLidsButton, isVideo, model, toggleKeyboardViewButton, toggleSessionHighlightButton, activeButton, inactiveButton, selectSessionButton, loginButton;

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
        
        if(uLeft<50 && uRight<100){
            console.log("left screen top panel selected");
            ImmersiveClassroom.selectButton(0);
        }
        /*else if(uLeft>150 && uLeft<275 && uRight<50){
            console.log("middle screen top panel selected");
            ImmersiveAudio.jumpTo(1);
        }*/
        else if(uLeft>375 && uLeft<500 && uRight<50){
            console.log("right screen top panel selected");
            ImmersiveClassroom.selectButton(1);
        }
        /*else if(uLeft<50 && uRight>150 && uRight<250){
            console.log("left screen bottom panel selected");
            ImmersiveAudio.jumpTo(3);
        }*/
        else{
            console.log(`score: ${score}`);
            console.log(`upper left: ${uLeft}`);
            console.log(`upper right: ${uRight}`);
            console.log(`lower left: ${lLeft}`);
            console.log(`lower right: ${lRight}`);
            
            //console.log("left screen panel selected");
        }
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
    toggleKeyboardViewButton = document.getElementById("toggle-keyboard-view-button-container");
    
    if(pageInFocus==="select"){
        toggleSessionHighlightButton = document.getElementById("toggle-session-highlight-button-container");
        inactiveButton = document.getElementById("inactive-sessions-option-button-immersive-entity-container");
        activeButton = document.getElementById("active-sessions-option-button-immersive-entity-container");
        selectSessionButton = document.getElementById("select-session-button-container");
    }
    
    if(pageInFocus==="login"){
        loginButton = document.getElementById("login-button-container");
    }
    
    imgindex = 1
    isVideo = false;
    model = null;
    startDormantVisualStream();
}

var keyboardVisible = false;

function toggleKeyboardModule(){
    if(keyboardVisible){
        keyboardVisible = false;
        console.log("keyboard hidden");
        document.getElementById("keyboard-immersive-entity-container").emit("hideKeyboard");
        document.getElementById("rig").emit("lookAwayFromKeyboard");
    }
    else{
        sessionHighlightsOn = false;
        if(pageInFocus==="select"){
            inactiveButton.setAttribute("material", "color", "white");
            inactiveButton.setAttribute("text", "color", "black");
            activeButton.setAttribute("material", "color", "white");
            activeButton.setAttribute("text", "color", "black");
        }
        
        keyboardVisible = true;
        console.log("keyboard visible");
        document.getElementById("keyboard-immersive-entity-container").emit("revealKeyboard");
        document.getElementById("rig").emit("lookDownAtKeyboard");
    }
}

var sessionHighlightsOn = false;
var sessionCategoryInFocus = null;

function toggleSessionHighlights(){
    
    
    //console.log(inactiveButton);
    
    if(sessionHighlightsOn){
        if(sessionCategoryInFocus==="inactive"){
            sessionCategoryInFocus="active";
            
            activeButton.setAttribute("material", "color", "black");
            activeButton.setAttribute("text", "color", "white");
            
            inactiveButton.setAttribute("material", "color", "white");
            inactiveButton.setAttribute("text", "color", "black");
        }
        else if(sessionCategoryInFocus==="active"){
            sessionCategoryInFocus="inactive";
            inactiveButton.setAttribute("material", "color", "black");
            inactiveButton.setAttribute("text", "color", "white");
            
            activeButton.setAttribute("material", "color", "white");
            activeButton.setAttribute("text", "color", "black");
        }
    }
    else{
        sessionHighlightsOn = true;
        sessionCategoryInFocus = "inactive";
        
        inactiveButton.setAttribute("material", "color", "black");
        inactiveButton.setAttribute("text", "color", "white");
    }
    console.log(sessionCategoryInFocus);
}

function selectSessionCategory(){
    if(sessionHighlightsOn){
        switch(sessionCategoryInFocus){
            case "inactive":
                inactiveButton.setAttribute("material", "color", "green");
                revealSessionCategoryOptions("inactive");
                break;
            case "active":
                activeButton.setAttribute("material", "color", "green");
                revealSessionCategoryOptions("active");
                break;
            default:
                console.log("no available session category action");
                break;
        }
    }
    else{
        console.log("make a category selection first");
    }
}

function hideMainMenuComponents(){
    document.getElementById("welcome-title-container").setAttribute("visible", false);
    document.getElementById("welcome-subtitle-container").setAttribute("visible", false);
    document.getElementById("white-board-immersive-entity-container").setAttribute("visible", false);
    document.getElementById("inactive-sessions-option-button-immersive-entity-container").setAttribute("visible", false);
    document.getElementById("active-sessions-option-button-immersive-entity-container").setAttribute("visible", false);
    document.getElementById("look-down-title-container").setAttribute("visible", false);              
}

function revealSessionCategoryOptions(category){
    console.log("reveal session category options");
    let sessionCovers = [
        document.getElementById("alleluia-immersive-entity-container"),
        document.getElementById("menor-que-tres-immersive-entity-container"),
        document.getElementById("had-enough-remix-immersive-entity-container"),
        document.getElementById("rainbow-in-the-dark-immersive-entity-container")
    ];
    let categoryTitle = document.getElementById("session-category-title-immersive-entity-container");
    hideMainMenuComponents();
    
    switch(category){
        case "inactive":
            categoryTitle.setAttribute("visible", true);
            categoryTitle.setAttribute("text", "value", "INACTIVE SESSIONS");
            sessionCovers[0].emit("revealSession0");
            document.getElementById("session-0-title-immersive-entity-container").setAttribute("visible", true);
            
            sessionCovers[1].emit("revealSession1");
            document.getElementById("session-1-title-immersive-entity-container").setAttribute("visible", true);
            
            sessionCovers[2].emit("revealSession2");
            document.getElementById("session-2-title-immersive-entity-container").setAttribute("visible", true);
            
            sessionCovers[3].emit("revealSession3");
            document.getElementById("session-3-title-immersive-entity-container").setAttribute("visible", true);
            break;
        case "active":
            categoryTitle.setAttribute("visible", true);
            categoryTitle.setAttribute("text", "value", "ACTIVE SESSIONS");
            
            document.getElementById("no-active-sessions-title-immersive-entity-container").setAttribute("visible", true);
            break;
        default:
            break;
    }
}

function addButtonListeners(){
    
    toggleEyeLidsButton.addEventListener("click", function(){
        moveMyEyelids();
        
        handTrack.load(modelParams).then(function(lmodel){
            model = lmodel

            console.log("Loaded Model!");
        });
    });
    
    toggleKeyboardViewButton.addEventListener("click", function(){
        toggleKeyboardModule();
    });
    
    if(pageInFocus==="login"){
        loginButton.addEventListener("click", function(){
            window.location.href = "./session";
        });
    }
    
    if(pageInFocus==="select"){
        toggleSessionHighlightButton.addEventListener("click", function(){
            toggleSessionHighlights();
        });   
    
        selectSessionButton.addEventListener("click", function(){
            selectSessionCategory();
        });
    }
}

document.addEventListener("DOMContentLoaded", function(){
    init();     //buildMarkup()
    addButtonListeners();
});