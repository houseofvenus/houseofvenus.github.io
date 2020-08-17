
function hideInstructionsOverlay(){
    document.getElementById("instructions-overlay-container").style.opacity = 0;
    setTimeout(function(){
        document.getElementById("instructions-overlay-container").style.display = "none";
    }, 1001);
}

function animateInstructionsOverlayToCoverConsole(){
    document.getElementById("instructions-overlay-container").style.margin = "0 0 0 -250px";
    document.getElementById("instructions-overlay-container").style.top = "10%";
    document.getElementById("instructions-overlay-container").style.left = "50%";

    $("#instructions-overlay-container").animate({
        height: "80%",
        width: "500px",
    }, 1000, "swing");
}

function openCardApplication(name){
    switch(name){
        case "rooms":
        case "library":
        case "preview":
            console.log(`open the ${name} application`);
            break;
        default:
            console.log("no associated application");
    }
}