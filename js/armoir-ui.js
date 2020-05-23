let directionPhase;
let carInFocus = 0;
let previousCarInFocus;
let selectionArray = [
    {
        obj: "#bugatti-obj",
        mtl: "#bugatti-mtl",
        png: "#bugatti-png",
        scale: "20 20 20",
        visible: false,
        position: "0 10 0",
        rotation: {
            initial: "-90 360 0",
            target: "-90 0 0",
        },
        materialOptions: "usePNG",
        meta: {
            title: "SUMMER20",
            description: ""
        }
    },
    {
        obj: "#lambo-obj",
        mtl: "#lambo-mtl",
        png: "#lambo-png",
        scale: "20 20 20",
        visible: false,
        position: "0 1 0",
        rotation: {
            initial: "-90 360 0",
            target: "-90 0 0",
        },
        materialOptions: "usePNG",
        meta: {
            title: "READY TO WEAR",
            description: ""
        }
    },
    {
        obj: "#audi-obj",
        color: "red",
        scale: "6 6 6",
        visible: false,
        position: "0 0.5 0",
        rotation: {
            initial: "0 0 0",
            target: "0 180 0",
        },
        meta: {
            title: "BAGS",
            description: ""
        }
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
    document.getElementById(`directions-0-container`).innerHTML = `<p>${selectionArray[carInFocus].meta.title}</p>`;

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
        if(selectionArray[carInFocus].materialOptions==="useMTL"||selectionArray[carInFocus].materialOptions==="default"){
            document.getElementById("main-experience-container").insertAdjacentHTML("beforeend", `
            <a-obj-model id="location-object-container-${carInFocus}"
            src="${selectionArray[carInFocus].obj}" mtl="${selectionArray[carInFocus].mtl}"
            scale="${selectionArray[carInFocus].scale}"
            visible="${selectionArray[carInFocus].visible}"
            position="${selectionArray[carInFocus].position}"
            rotation="${selectionArray[carInFocus].rotation.initial}"
            animation="property: rotation; to: ${selectionArray[carInFocus].rotation.target}; loop: true; dur: 30000; easing: linear; pauseEvents: stopRotatingCar;"
            animation__moveCarToStart="property: rotation; to: ${selectionArray[carInFocus].rotation.initial}; loop: false; dur: 3000; startEvents: moveCarToStartingPosition;"
            gps-entity-place="latitude: ${lat}; longitude: ${long};">
            </a-obj-model>
            `);
        }
        else if(selectionArray[carInFocus].materialOptions==="usePNG"){
            document.getElementById("main-experience-container").insertAdjacentHTML("beforeend", `
            <a-obj-model id="location-object-container-${carInFocus}"
            src="${selectionArray[carInFocus].obj}"
            scale="${selectionArray[carInFocus].scale}"
            visible="${selectionArray[carInFocus].visible}"
            position="${selectionArray[carInFocus].position}"
            rotation="${selectionArray[carInFocus].rotation.initial}"
            material="src: ${selectionArray[carInFocus].png};"
            animation="property: rotation; to: ${selectionArray[carInFocus].rotation.target}; loop: true; dur: 30000; easing: linear; pauseEvents: stopRotatingCar;"
            animation__moveCarToStart="property: rotation; to: ${selectionArray[carInFocus].rotation.initial}; loop: false; dur: 3000; startEvents: moveCarToStartingPosition;"
            gps-entity-place="latitude: ${lat}; longitude: ${long};">
            </a-obj-model>
            `);
        }
        
    }
    else{
       document.getElementById("main-experience-container").insertAdjacentHTML("beforeend", `
        <a-obj-model id="location-object-container-${carInFocus}"
        src="${selectionArray[carInFocus].obj}" material="color: ${selectionArray[carInFocus].color};"
        scale="${selectionArray[carInFocus].scale}"
        visible="${selectionArray[carInFocus].visible}"
        position="${selectionArray[carInFocus].position}"
        rotation="${selectionArray[carInFocus].rotation.initial}"
        animation="property: rotation; to: ${selectionArray[carInFocus].rotation.target}; loop: true; dur: 30000; easing: linear; pauseEvents: stopRotatingCar;"
        animation__moveCarToStart="property: rotation; to: ${selectionArray[carInFocus].rotation.initial}; loop: false; dur: 3000; startEvents: moveCarToStartingPosition;"
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
animation="property: rotation; to: 0 360 0; loop: true; dur: 30000; easing: linear; pauseEvents: stopRotatingCar;"
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
    <p class="text-descriptor">Explore pARk fashion, curate your own style,a dn contribute a perspective to the culture of Atlantic haute couture</p>
    <p class="text-descriptor" style="text-align: center; text-transform: uppercase;">Tap to open DIA</p>
</div>
<div id="directions-0-container" class="directions-container">
    <ol>
        <li>Use the left and right direction pad buttons to select a category</li>
        <li>Press the green button to make your choice!</li>
    </ol>
</div>
<div id="controller-cover-container">
    <div id="dpad-buttons-container">
        <!--<div id="dpad-up-button-container" class="dpad-button-container"></div>-->
        <div id="dpad-left-button-container" class="dpad-button-container"></div>
        <div id="dpad-right-button-container" class="dpad-button-container"></div>
        <!--<div id="dpad-down-button-container" class="dpad-button-container"></div>-->
    </div>
    <div id="dpad-action-buttons-container">
        <div id="dpad-alpha-action-button-container" class="dpad-action-button-container">a</div>
        <div id="dpad-beta-action-button-container" class="dpad-action-button-container">b</div>
    </div>
</div>`);
}