document.addEventListener("DOMContentLoaded", function(){
    let seat = getRandomSeatingPosition();
    console.log(seat);
    let userHeight = 1.9;
    buildMarkup(true, function(){
        setTimeout(function(){
            console.log("ohoh")
            document.getElementById("rig").setAttribute("position", {x: seat.x, y: userHeight, z: seat.z});
        }, 500);
    });
});

var seatingPositions = [
    {
        x: -3 ,
        y: 0.7,
        z: -1.5
    },
    {
        x: 3 ,
        y: 0.7,
        z: -1.5
    },
    {
        x: -3 ,
        y: 0.7,
        z: 3
    },
    {
        x: -3 ,
        y: 0.7,
        z: 3
    },
    {
        x: -3 ,
        y: 0.7,
        z: 7.5
    },
    {
        x: -3 ,
        y: 0.7,
        z: 7.5
    },
];

function getRandomSeatingPosition() {
    let max = seatingPositions.length;
    return seatingPositions[Math.floor(Math.random() * Math.floor(max))];
}

function buildMarkup(start, positionCamera){
    document.getElementById("main-app-container").insertAdjacentHTML("beforeend", `<a-entity id="base-floor-container"
                  geometry="primitive: plane; width: 100; height: 100;"
                  material="src: #grid-pattern-texture; side: double; repeat: 100 100;"
                  rotation="-90 0 0"
                  position="0 0 0">
        </a-entity>
        
        <a-entity id="experience-floor-container"
                  geometry="primitive: plane; width: 20; height: 20;"
                  material="src: #wooden-floor-texture; side: double; repeat: 5 5;"
                  rotation="-90 0 0"
                  position="0 0.05 0">
        </a-entity>
        
        <a-entity id="wall-0-container"
                  geometry="primitive: box; width: 20; height: 10; depth: 1;"
                  material="src: #wall-texture; side: double; repeat: 2 3;"
                  rotation="0 0 0"
                  position="0 0.05 -10">
        </a-entity>
        
        <a-entity id="wall-1-container"
                  geometry="primitive: box; width: 20; height: 10; depth: 1;"
                  material="src: #wall-texture; side: double; repeat: 2 3;"
                  rotation="0 -90 0"
                  position="-10 0.05 0">
        </a-entity>
        
        <a-entity id="wall-2-container"
                  geometry="primitive: box; width: 20; height: 10; depth: 1;"
                  material="src: #wall-texture; side: double; repeat: 2 3;"
                  rotation="0 -90 0"
                  position="10 0.05 0">
        </a-entity>
        
        <a-entity id="wall-3-container"
                  geometry="primitive: box; width: 20; height: 10; depth: 1;"
                  material="src: #wall-texture; side: double; repeat: 2 3;"
                  rotation="0 0 0"
                  position="0 0.05 10">
        </a-entity>
        
        <a-entity id="planet-container"
                  geometry="primitive:sphere; radius: 1;"
                  animation="property: rotation; to: 0 360 0; loop: true; dur: 10000; easing: linear"
                  position='0 1.5 -6'
                  material='src: #earth-planet-object-texture'>
        </a-entity>
        
        <a-obj-model src="#desk-obj" material="src: #desk-texture;" rotation="-90 0 0" position="-3 0 -3" scale="0.02 0.02 0.02"></a-obj-model>
        
        <a-obj-model src="#chair-obj" material="src: #desk-texture;" rotation="0 0 0" position="-3 0.7 -1.5" scale="0.02 0.02 0.02"></a-obj-model>
        
        <a-obj-model src="#desk-obj" material="src: #desk-texture;" rotation="-90 0 0" position="3 0 -3" scale="0.02 0.02 0.02"></a-obj-model>
        
        <a-obj-model src="#chair-obj" material="src: #desk-texture;" rotation="0 0 0" position="3 0.7 -1.5" scale="0.02 0.02 0.02"></a-obj-model>
        
        
        
        <a-obj-model src="#desk-obj" material="src: #desk-texture;" rotation="-90 0 0" position="-3 0 1.5" scale="0.02 0.02 0.02"></a-obj-model>
        
        <a-obj-model src="#chair-obj" material="src: #desk-texture;" rotation="0 0 0" position="-3 0.7 3" scale="0.02 0.02 0.02"></a-obj-model>
        
        <a-obj-model src="#desk-obj" material="src: #desk-texture;" rotation="-90 0 0" position="3 0 1.5" scale="0.02 0.02 0.02"></a-obj-model>
        
        <a-obj-model src="#chair-obj" material="src: #desk-texture;" rotation="0 0 0" position="3 0.7 3" scale="0.02 0.02 0.02"></a-obj-model>
        
        
        <a-obj-model src="#desk-obj" material="src: #desk-texture;" rotation="-90 0 0" position="-3 0 6" scale="0.02 0.02 0.02"></a-obj-model>
        
        <a-obj-model src="#chair-obj" material="src: #desk-texture;" rotation="0 0 0" position="-3 0.7 7.5" scale="0.02 0.02 0.02"></a-obj-model>
        
        <a-obj-model src="#desk-obj" material="src: #desk-texture;" rotation="-90 0 0" position="3 0 6" scale="0.02 0.02 0.02"></a-obj-model>
        
        <a-obj-model src="#chair-obj" material="src: #desk-texture;" rotation="0 0 0" position="3 0.7 7.5" scale="0.02 0.02 0.02"></a-obj-model>
        
        <a-entity id="rig" position="0 1.9 0">
          <a-entity id="camera" camera wasd-controls look-controls></a-entity>
        </a-entity>
        <!--
        <a-entity id="camera" camera wasd-controls look-controls position="0 1.9 0"></a-entity>
        -->
        <!--<a-entity id="rig" position="0 0 0">
            <a-entity id="camera" camera wasd-controls look-controls></a-entity>
        <!--</a-entity>-->
        <a-sky color="#ECECEC"></a-sky>`);
    if(start)positionCamera();
}