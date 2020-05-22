let directionPhase;
let carInFocus = 0;
let previousCarInFocus;
let selectionArray = [
    {
        obj: "#bugatti-obj",
        mtl: "#bugatti-mtl",
        scale: "0.03 0.03 0.03",
        visible: false,
    },
    {
        obj: "#lambo-obj",
        mtl: "#lambo-mtl",
        scale: "3 3 3",
        visible: false,
    },
    {
        obj: "#audi-obj",
        color: "red",
        scale: "6 6 6",
        visible: false,
    }
];

let userPosition = {
    lat: null,
    long: null
};

function hideCarAtCurrentLocation(){
    if(selectionArray[previousCarInFocus].visible){
        selectionArray[previousCarInFocus].visible = false;
    }
    else{//toggle error checker | i.e. should not occur; if it does there is an error
        selectionArray[previousCarInFocus].visible = true;
    }
    document.getElementById(`location-object-container-${previousCarInFocus}`).setAttribute("visible", selectionArray[previousCarInFocus].visible);
}

function revealCarAtCurrentLocation(lat, long){
    if(selectionArray[carInFocus].visible){
        selectionArray[carInFocus].visible = false;
    }
    else{
        selectionArray[carInFocus].visible = true;
        previousCarInFocus = carInFocus;
    }
    document.getElementById(`location-object-container-${carInFocus}`).setAttribute("visible", selectionArray[carInFocus].visible);
    setTimeout(function(){
        document.getElementById(`location-object-container-${carInFocus}`).setAttribute("scale", selectionArray[carInFocus].scale);
    }, 500);
    
}

function removeCarFromCurrentLocation(){
    let locationObject = document.getElementById("location-object-container");
    locationObject.parentNode.removeChild(locationObject);
}

function addCarToCurrentLocation(lat, long){
    if(selectionArray[carInFocus].hasOwnProperty("mtl")){
        document.getElementById("main-experience-container").insertAdjacentHTML("beforeend", `
        <a-obj-model id="location-object-container-${carInFocus}"
        src="${selectionArray[carInFocus].obj}" mtl="${selectionArray[carInFocus].mtl}"
        scale="${selectionArray[carInFocus].scale}"
        visible="${selectionArray[carInFocus].visible}"
        animation="property: rotation; to: 0 360 0; loop: true; dur: 30000; easing: linear"
        gps-entity-place="latitude: ${lat}; longitude: ${long};">
        </a-obj-model>
        `);
    }
    else{
       document.getElementById("main-experience-container").insertAdjacentHTML("beforeend", `
        <a-obj-model id="location-object-container-${carInFocus}"
        src="${selectionArray[carInFocus].obj}" material="color: ${selectionArray[carInFocus].color};"
        scale="${selectionArray[carInFocus].scale}"
        visible="${selectionArray[carInFocus].visible}"
        animation="property: rotation; to: 0 360 0; loop: true; dur: 30000; easing: linear"
        gps-entity-place="latitude: ${lat}; longitude: ${long};">
        </a-obj-model>
        `); 
    }
    
}

function resetCarInFocus(){
    //removeCarFromCurrentLocation();
    hideCarAtCurrentLocation();
    
    setTimeout(function(){
        revealCarAtCurrentLocation(userPosition.lat, userPosition.long);
        //addCarToCurrentLocation(userPosition.lat, userPosition.long)
    }, 100);
}

/*
lambo-obj" mtl="#lambo-mtl

<a-sphere id="location-object-container"
radius="1"
animation="property: rotation; to: 0 360 0; loop: true; dur: 30000; easing: linear"
position="3 0 0"
material="src: #earth-planet-object-texture"
;"></a-sphere>

*/

function buildMarkup(){
    document.getElementById("main-experience-container").insertAdjacentHTML("beforeend", `<a-marker id="nyt-marker-container" type="pattern" url="../media/pattern/pattern-nyt-marker-candidate.patt">
    <a-obj-model src="#lambo-obj" mtl="#lambo-mtl" scale="1 1 1"></a-obj-model>
</a-marker>`);
    
    for(var i=0; i<selectionArray.length; i++){
        (function(){
            carInFocus = i;
            addCarToCurrentLocation(39.080962, -76.979481);
        })();
    }
    
    carInFocus = 0;
    
    document.getElementById("main-app-container").insertAdjacentHTML("afterbegin", `
<div id="main-app-cover-page-container">
    <div id="app-cover-image-container"></div>
    <p class="text-descriptor">a DIA for exploring global roadways in pursuit of the mantle of greatest driver</p>
    <p class="text-descriptor" style="text-align: center; text-transform: uppercase;">Tap to open DIA</p>
</div>
<div id="directions-0-container" class="directions-container">
    <ol>
        <li>Look at your marker or tap the red button to summon your car.</li>
        <li>Use the left and right direction pad buttons to select your choice of vehicle.</li>
        <li>Press the green button to make your choice!</li>
    </ol>
</div>
<div id="controller-cover-container">
    <div id="dpad-buttons-container">
        <div id="dpad-up-button-container" class="dpad-button-container"></div>
        <div id="dpad-left-button-container" class="dpad-button-container"></div>
        <div id="dpad-right-button-container" class="dpad-button-container"></div>
        <div id="dpad-down-button-container" class="dpad-button-container"></div>
    </div>
    <div id="dpad-action-buttons-container">
        <div id="dpad-alpha-action-button-container" class="dpad-action-button-container">a</div>
        <div id="dpad-beta-action-button-container" class="dpad-action-button-container">b</div>
    </div>
</div>`);
}