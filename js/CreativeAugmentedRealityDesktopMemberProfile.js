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
            window.location.href = "http://houseofven.us/rooms";
            break;
        case "library":
            window.location.href = "./library";
            break;
        case "preview":
            window.location.href = "./rushmore";
            break;
        case "honeycomb":
            window.location.href = "./honeycomb";
            break;
        case "t0wn":
            window.location.href = "./t0wn";
            break;
        default:
            console.log("no associated application");
    }
}

