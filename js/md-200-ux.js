let MarkerGridTracker = {
    nyt : {
        initiated: false,
        active: false,
        tapping: false,
        counter: 0
    },
    mit : {
        initiated: false,
        active: false,
        tapping: false,
        counter: 0
    },
    hiro : {
        initiated: false,
        active: false,
        tapping: false,
        counter: 0
    },
    unibeat : {
        initiated: false,
        active: false,
        tapping: false,
        counter: 0
    },
    repressor: {
        onApplicationPage: 0,   //  0 = menu, 1 = nyt, 2 = mit (bakuas), 3 = hiro (facetime/bodytime), 4 = unibeat (office)
        onApplicationSection: null
    }
};

let CarPhysics = {
    Position: {
        x: 0,
        y: 0,
        z: 0,
        lat: 0,
        long: 0,
        alt: 0
    },
    Velocity: {
        path: 0,
        turn: 0,
        lat: 0,
        long: 0,
        alt: 0
    },
    Acceleration: {
        path: 1,
        turn: 0,
        decel: -0.2,
        lat: 0,
        long: 0,
        alt: 0
    },
    Controller: {
        POV: 3, //third person view, i.e. gamepad controller visible and active, 1 = first person immersive view
        Meta: {
            House: "Venus",
            Developer: "@starmakeritachi",
            Version: "0.2.62"
        }
    },
    Engine: {   //x is left to right
        accelerate: function(vector){
            let self = this;
            let movementVector = vector;
            
            if(movementVector.z<0){
                let counter = 0;
                console.log("new z acceleration", CarPhysics.Acceleration.path);
                let additive = 0;
                
                if(self.movementThreads.z==null){
                    
                    self.movementThreads.z = setInterval(function(){
                        
                        additive = CarPhysics.Acceleration.path + counter*CarPhysics.Acceleration.decel;
                        CarPhysics.Position.z -= additive;
                        console.log("new z position", CarPhysics.Position.z);
                        
                        document.getElementById(`location-object-container-${carInFocus}`).object3D.position.z = CarPhysics.Position.z;
                        counter++;

                        if(additive===0){
                            clearInterval(self.movementThreads.z);
                            console.log("slowed to a stop!");
                            self.movementThreads.z = null;
                        }
                        
                    }, 100);  
                }
            }
            else if(movementVector.z>0){
                let counterForward = 0;
                console.log("new z acceleration", CarPhysics.Acceleration.path);
                let additiveForward = 0;

                if(self.movementThreads.z==null){

                    self.movementThreads.z = setInterval(function(){

                        additiveForward = CarPhysics.Acceleration.path + counterForward*CarPhysics.Acceleration.decel;
                        CarPhysics.Position.z += additiveForward;
                        console.log("new z position", CarPhysics.Position.z);

                        document.getElementById(`location-object-container-${carInFocus}`).object3D.position.z = CarPhysics.Position.z;
                        counterForward++;

                        if(additiveForward===0){
                            clearInterval(self.movementThreads.z);
                            console.log("slowed to a stop!");
                            self.movementThreads.z = null;
                        }

                    }, 100);  
                }
            }
            else{
                counter = 0;
                counterForward = 0;
            }
        },
        movementThreads: {
            x: null,
            y: null,
            z: null
        },
        turn: function(angle){
            let currentRotation = document.getElementById(`location-object-container-${carInFocus}`).getAttribute("rotation");
            
            //currentRotation = currentRotation.substring(currentRotation.indexOf(" ")+1, currentRotation.lastIndexOf(" "));
            
            console.log(currentRotation.y);
        }
    }
};

let chosenCar;
let stopTimeNYT, timeDiffNYT, stopTimeMIT, timeDiffMIT, stopTimeHIRO, timeDiffHIRO, stopTimeUNI, timeDiffUNI;
let locationModeOn = false;

function attachImmersiveButtonListeners(){
    document.getElementById("nyt-marker-container").addEventListener("markerLost", function(){

    });

    document.getElementById("nyt-marker-container").addEventListener("markerFound", function(){

    });
    
    document.getElementById("dpad-up-button-container").addEventListener("mousedown", function(event){
        switch(directionPhase){
            case 0:
                console.log("nothing to do");
                break;
            case 1:
                console.log("still nothing to do");
                break;
            case 2:
                console.log("pressing the forward button.\naccelerate vehicle in forward direction.");
                CarPhysics.Engine.accelerate({x: 0, y: 0, z: -1});
                break;
            default:
                break;
        }
        
        this.style.backgroundColor = "rgba(255, 255, 255, 1.0)";
    });
    
    document.getElementById("dpad-up-button-container").addEventListener("mouseup", function(event){
        console.log("released the forward button.");// \n pause accelerator; let tapering physics take over...
        this.style.backgroundColor = "rgba(255, 255, 255, 0.3)";
    });
    
    document.getElementById("dpad-down-button-container").addEventListener("mousedown", function(event){
        switch(directionPhase){
            case 0:
                console.log("nothing to do");
                break;
            case 1:
                console.log("still nothing to do");
                break;
            case 2:
                console.log("pressing the back button. \n accelerate vehicle in reverse direction.");
                CarPhysics.Engine.accelerate({x: 0, y: 0, z: 1});
                break;
            default:
                break;
        }
        
        this.style.backgroundColor = "rgba(255, 255, 255, 1.0)";
    });
    
    document.getElementById("dpad-down-button-container").addEventListener("mouseup", function(event){
        console.log("released the back button.");// \n pause accelerator; let tapering physics take over...
        this.style.backgroundColor = "rgba(255, 255, 255, 0.3)";
    });
    
    document.getElementById("dpad-left-button-container").addEventListener("mousedown", function(event){
        switch(directionPhase){
            case 0:
                console.log("initiate app first");
                break;
            case 1:
                if(carInFocus>0){
                    previousCarInFocus = carInFocus;
                    carInFocus--;
                    resetCarInFocus();
                }
                else{
                    console.log("left most item");
                }
                break;
            case 2:
                console.log("pressing the left button. \n turn vehicle counter clockwise.");
                CarPhysics.Engine.turn(90);
                break;
            default:
            break;
        }
        
        this.style.backgroundColor = "rgba(255, 255, 255, 1.0)";
    });
    
    document.getElementById("dpad-left-button-container").addEventListener("mouseup", function(event){
        console.log("released the left button.");// \n let wheel return to directional equilibrium...
        this.style.backgroundColor = "rgba(255, 255, 255, 0.3)";
    });
    
    document.getElementById("dpad-right-button-container").addEventListener("mousedown", function(event){
        switch(directionPhase){
            case 0:
                console.log("initiate app first");
                break;
            case 1:
                if(carInFocus<2){
                    previousCarInFocus = carInFocus;
                    carInFocus++;
                    resetCarInFocus();
                }
                else{
                    console.log("left most item");
                }
                break;
            case 2:
                console.log("pressing the right button. \n turn vehicle clockwise.");
                CarPhysics.Engine.turn(90);
                break;
            default:
            break;
        }
        
        this.style.backgroundColor = "rgba(255, 255, 255, 1.0)";
    });
    
    document.getElementById("dpad-right-button-container").addEventListener("mouseup", function(event){
        console.log("released the right button.");  //\n let wheel return to directional equilibrium...
        this.style.backgroundColor = "rgba(255, 255, 255, 0.3)";
    });
    
    document.getElementById("dpad-alpha-action-button-container").addEventListener("click", function(event){
        console.log("clicked the alpha action button. \n toggle vehicle size.");
        if(directionPhase===1){
            chosenCar = carInFocus;
            directionPhase = 2;
            for(var y=0; y<selectionArray.length; y++){
                (function(){
                    document.getElementById(`location-object-container-${y}`).emit("stopRotatingCar");
                })();
            }
            
            document.getElementById(`location-object-container-${chosenCar}`).emit("moveCarToStartingPosition");
            document.getElementById("directions-0-container").style.opacity = 0;
            setTimeout(function(){
                document.getElementById("directions-0-container").style.display = "block";
            }, 500);
        }
    });
    
    document.getElementById("dpad-beta-action-button-container").addEventListener("click", function(event){
        console.log("clicked the beta action button. \n use special item.");
        
        if(locationModeOn){
            if(directionPhase===0){
                removeCarFromCurrentLocation();
            }
            locationModeOn = false;
        }
        else{
            if(directionPhase===0){
                directionPhase = 1;
                revealCarAtCurrentLocation(39.080962, -76.979481);
            }
            locationModeOn = true;
        }
    });
    
    document.getElementById("main-app-cover-page-container").addEventListener("click", function(){
        let cover = this;
        
        directionPhase = 0;
        
        userPosition.lat = 39.080962;
        userPosition.long = -76.979481;
        
        cover.style.height = 0;
        cover.style.opacity = 0;
        
        setTimeout(function(){
            cover.style.display = "none";
        }, 500);
    });
}