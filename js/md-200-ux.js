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


function attachImmersiveButtonListeners(){
    document.getElementById("nyt-marker-container").addEventListener("markerLost", function(){

    });

    document.getElementById("nyt-marker-container").addEventListener("markerFound", function(){

    });
    
    document.getElementById("dpad-up-button-container").addEventListener("mousedown", function(event){
        console.log("pressing the forward button. \n accelerate vehicle in forward direction.");
        this.style.backgroundColor = "rgba(255, 255, 255, 1.0)";
    });
    
    document.getElementById("dpad-up-button-container").addEventListener("mouseup", function(event){
        console.log("released the forward button. \n pause accelerator; let tapering physics take over...");
        this.style.backgroundColor = "rgba(255, 255, 255, 0.3)";
    });
    
    document.getElementById("dpad-down-button-container").addEventListener("mousedown", function(event){
        console.log("pressing the back button. \n accelerate vehicle in reverse direction."); 
        this.style.backgroundColor = "rgba(255, 255, 255, 1.0)";
    });
    
    document.getElementById("dpad-down-button-container").addEventListener("mouseup", function(event){
        console.log("released the back button. \n pause accelerator; let tapering physics take over...");
        this.style.backgroundColor = "rgba(255, 255, 255, 0.3)";
    });
    
    document.getElementById("dpad-left-button-container").addEventListener("mousedown", function(event){
        console.log("pressing the left button. \n turn vehicle counter clockwise."); 
        this.style.backgroundColor = "rgba(255, 255, 255, 1.0)";
    });
    
    document.getElementById("dpad-left-button-container").addEventListener("mouseup", function(event){
        console.log("released the left button. \n let wheel return to directional equilibrium...");
        this.style.backgroundColor = "rgba(255, 255, 255, 0.3)";
    });
    
    document.getElementById("dpad-right-button-container").addEventListener("mousedown", function(event){
        console.log("pressing the right button. \n turn vehicle clockwise."); 
        this.style.backgroundColor = "rgba(255, 255, 255, 1.0)";
    });
    
    document.getElementById("dpad-right-button-container").addEventListener("mouseup", function(event){
        console.log("released the right button. \n let wheel return to directional equilibrium...");
        this.style.backgroundColor = "rgba(255, 255, 255, 0.3)";
    });
    
    document.getElementById("dpad-alpha-action-button-container").addEventListener("click", function(event){
        console.log("clicked the alpha action button. \n toggle vehicle size."); 
    });
    
    document.getElementById("dpad-beta-action-button-container").addEventListener("click", function(event){
        console.log("clicked the beta action button. \n use special item."); 
    });
}