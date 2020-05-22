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
                console.log("pressing the forward button. \n accelerate vehicle in forward direction.");
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
    });
    
    document.getElementById("dpad-beta-action-button-container").addEventListener("click", function(event){
        console.log("clicked the beta action button. \n use special item.");
        
        if(locationModeOn){
            if(directionPhase===0){
                removeCarFromCurrentLocation();
            }
            locationModeOn = false;
        }else{
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