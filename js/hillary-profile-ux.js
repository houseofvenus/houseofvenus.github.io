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

//  TODO:
//  if one app is active then all the other event listeners to open apps need to be turn off
//  add corresponding assets to the other markers for app loading


function attachImmersiveButtonListeners(){
    document.getElementById("fuse-container").addEventListener("click", function(){
        document.getElementById("fuse-container-video-container").emit("showFuseContainerVideo");
        
        setTimeout(function(){
            document.getElementById("excessive-force-video").style.display = "block";
            document.getElementById("excessive-force-video").play();
        }, 3000);
        
    });
    
    document.getElementById("excessive-force-video").onended = function(){
        document.getElementById("excessive-force-video").style.opacity = 0;
        document.getElementById("fuse-container-video-container").emit("hideFuseContainerVideo");

        setTimeout(function(){
            document.getElementById("excessive-force-video").style.display = "none";
            document.getElementById("excessive-force-video").style.opacity = 1.0;
        }, 2000);
    }
    
    document.getElementById("nyt-marker-container").addEventListener("markerLost", function(){
        if(MarkerGridTracker.nyt.initiated){
            console.log("start finger counter");
            MarkerGridTracker.nyt.counter = new Date().getTime();
        }
        else{
            console.log("probably just a camera issue");
        }
    });

    document.getElementById("mit-marker-container").addEventListener("markerLost", function(){
        if(MarkerGridTracker.mit.initiated){
            console.log("start finger counter");
            MarkerGridTracker.mit.counter = new Date().getTime();
        }
        else{
            console.log("probably just a camera issue");
        }
    });

    document.getElementById("hiro-marker-container").addEventListener("markerLost", function(){
        if(MarkerGridTracker.hiro.initiated){
            console.log("start finger counter");
            MarkerGridTracker.hiro.counter = new Date().getTime();
        }
        else{
            console.log("probably just a camera issue");
        }
    });

    document.getElementById("unibeat-marker-container").addEventListener("markerLost", function(){
        if(MarkerGridTracker.unibeat.initiated){
            console.log("start finger counter");
            MarkerGridTracker.unibeat.counter = new Date().getTime();
        }
        else{
            console.log("probably just a camera issue");
        }
    });



    document.getElementById("nyt-marker-container").addEventListener("markerFound", function(){
        stopTimeNYT = new Date().getTime();
        timeDiffNYT = stopTimeNYT-MarkerGridTracker.nyt.counter;

        console.log(`--------------------------\n${timeDiffNYT} has elapsed\n--------------------------`);

        if(MarkerGridTracker.nyt.initiated){
            if(MarkerGridTracker.nyt.active){
                console.log("NYT marker content already activated");
            }
            else{
                if(MarkerGridTracker.repressor.onApplicationPage===0){   //   if the user is on the initial main menu page
                    if(timeDiffNYT>=3000 && timeDiffNYT<=6000){ /*  check if the button is being pressed for at least 4 seconds** 
                                                                    (explicitly 3000ms to 6000ms but live unit tests show that the trigger occurs after 4 seconds on average)
                                                                    */

                        /*
                        *
                        *   emit events that show the associated content for this application page for the
                        *   NYT marker  THIS HAS BEEN DUPLICATED IN THE GO BACK TO COVER PAGE EVENT LISTENER BELOW | REFACTOR FOR THE BETA VERSION
                        *
                        */

                        console.log("show NYT content");

                        document.getElementById("nyt-rotating-globe").emit("stopRotatingNYT");
                        document.getElementById("nyt-rotating-globe").setAttribute("visible",false);

                        document.getElementById("nyt-application-panel").emit("showPanelNYT");
                        document.getElementById("nyt-application-panel").setAttribute("visible",true);

                        /*
                        *
                        *   emit events that show the associated content for this application page for the 
                        *   MIT marker
                        *   HIRO marker
                        *   UNI marker
                        *
                        */

                        document.getElementById("mit-rotating-globe").emit("stopRotatingMIT"); //stop rotating middle marker
                        document.getElementById("mit-rotating-globe").setAttribute("visible", false); //hide initial middle marker icon
                        document.getElementById("nyt-application-secondary-panel").setAttribute("visible", true);
                        document.getElementById("nyt-application-secondary-panel").emit("showSecondaryPanelNYT");   //show the secondary application panel


                        document.getElementById("hiro-rotating-globe").emit("stopRotatingHIRO"); //stop rotating bottom left marker
                        document.getElementById("hiro-rotating-globe").setAttribute("visible", false); //hide initial bottom left marker icon
                        document.getElementById("back-to-previous-page-button-container").setAttribute("visible", true);
                        document.getElementById("back-to-previous-page-button-container").emit("showBackButtonOnCover");// show the back button for the application cover page

                        document.getElementById("unibeat-rotating-globe").emit("stopRotatingUNI"); //stop rotating bottom right marker
                        document.getElementById("unibeat-rotating-globe").setAttribute("visible", false); //hide initial bottom right marker icon
                        document.getElementById("next-page-button-container").setAttribute("visible", true);
                        document.getElementById("next-page-button-container").emit("showNextButtonOnCover");// show the back button for the application cover page

                        MarkerGridTracker.nyt.active = true;
                        MarkerGridTracker.repressor.onApplicationPage = 1;

                        MarkerGridTracker.repressor.onApplicationSection = {
                            current: 0,
                            directory: [
                                "cover",
                                "front-page"
                            ]
                        };
                    }
                    else{
                        console.log("missed content trigger window\nresetting timer.");
                        MarkerGridTracker.nyt.counter = 0;
                    }
                }
                else if(MarkerGridTracker.repressor.onApplicationPage===1){
                    if(timeDiffNYT>=1000 && timeDiffNYT<=4000){ /*  check if the button is being pressed for at least 2 seconds** 
                                                                    (explicitly 1000ms to 4000ms but live unit tests show that the trigger occurs after 2 seconds on average)
                                                                    */
                        console.log("tapped the top button on the NYT app \n this is the title banner its meta data is as follows:");
                    }
                }
                else if(MarkerGridTracker.repressor.onApplicationPage===2){
                    if(timeDiffNYT>=1000 && timeDiffNYT<=4000){ /*  check if the button is being pressed for at least 2 seconds** 
                                                                    (explicitly 1000ms to 4000ms but live unit tests show that the trigger occurs after 2 seconds on average)
                                                                    */
                        console.log("tapped the top button on the BAKUAS app\n this is the title banner its meta data is as follows:");
                    }
                }
                else if(MarkerGridTracker.repressor.onApplicationPage===3){
                    if(timeDiffNYT>=1000 && timeDiffNYT<=4000){ /*  check if the button is being pressed for at least 2 seconds** 
                                                                    (explicitly 1000ms to 4000ms but live unit tests show that the trigger occurs after 2 seconds on average)
                                                                    */
                        console.log("tapped the top button on the BARRON's app\n this is the title banner its meta data is as follows:");
                    }
                }
                else if(MarkerGridTracker.repressor.onApplicationPage===4){
                    if(timeDiffNYT>=1000 && timeDiffNYT<=4000){ /*  check if the button is being pressed for at least 2 seconds** 
                                                                    (explicitly 1000ms to 4000ms but live unit tests show that the trigger occurs after 2 seconds on average)
                                                                    */
                        console.log("tapped the top button on the cARd app\n this is the title banner its meta data is as follows:");
                    }
                }
                else{
                    console.log("tapped something idk");
                }
            }
        }
        else{
            if(MarkerGridTracker.repressor.onApplicationPage===0){
                console.log("activating marker\nshow initial content");
                document.getElementById("nyt-rotating-globe").emit("startRotatingNYT");
                MarkerGridTracker.nyt.initiated = true;
            }
        }
    });

    document.getElementById("mit-marker-container").addEventListener("markerFound", function(){
        stopTimeMIT = new Date().getTime();
        timeDiffMIT = stopTimeMIT-MarkerGridTracker.mit.counter;

        console.log(`--------------------------\n${timeDiffMIT} has elapsed\n--------------------------`);

        if(MarkerGridTracker.mit.initiated){
            if(MarkerGridTracker.mit.active){
                console.log("MIT marker content already activated");
            }
            else{
                if(MarkerGridTracker.repressor.onApplicationPage===0){   //   if the user is on the initial main menu page
                    if(timeDiffMIT>=3000 && timeDiffMIT<=6000){ /*  check if the button is being pressed for at least 4 seconds** 
                                                                    (explicitly 3000ms to 6000ms but live unit tests show that the trigger occurs after 4 seconds on average)
                                                                    */
                        console.log("show MIT content (BAKUAS application)");

                        document.getElementById("nyt-rotating-globe").emit("stopRotatingNYT");
                        document.getElementById("nyt-rotating-globe").setAttribute("visible",false);

                        document.getElementById("mit-application-panel").emit("showPanelMIT");
                        document.getElementById("mit-application-panel").setAttribute("visible",true);



                        /*
                        *
                        *   emit events that show the associated content for this application page for the 
                        *   MIT marker
                        *   HIRO marker
                        *   UNI marker
                        *
                        */

                        document.getElementById("mit-rotating-globe").emit("stopRotatingMIT"); //stop rotating middle marker
                        document.getElementById("mit-rotating-globe").setAttribute("visible", false); //hide initial middle marker icon

                        document.getElementById("mit-application-secondary-panel").emit("showSecondaryPanelMIT");
                        document.getElementById("mit-application-secondary-panel").setAttribute("visible",true);


                        document.getElementById("hiro-rotating-globe").emit("stopRotatingHIRO"); //stop rotating bottom left marker
                        document.getElementById("hiro-rotating-globe").setAttribute("visible", false); //hide initial bottom left marker icon
                        document.getElementById("back-to-previous-page-button-container").setAttribute("visible", true);
                        document.getElementById("back-to-previous-page-button-container").emit("showBackButtonOnCover");// show the back button for the application cover page

                        document.getElementById("unibeat-rotating-globe").emit("stopRotatingUNI"); //stop rotating bottom right marker
                        document.getElementById("unibeat-rotating-globe").setAttribute("visible", false); //hide initial bottom right marker icon
                        document.getElementById("next-page-button-container").setAttribute("visible", true);
                        document.getElementById("next-page-button-container").emit("showNextButtonOnCover");// show the back button for the application cover page


                        MarkerGridTracker.repressor.onApplicationSection = {
                            current: 0,
                            directory: [
                                "cover",
                                "blackinvestorsmatter-account-page"
                            ]
                        };

                        document.getElementById("bakuas-ticker-tape-container").setAttribute("visible", true);
                        document.getElementById("bakuas-ticker-tape-container").emit("revealTicker");

                        document.getElementById("bakuas-ticker-video").play();



                        MarkerGridTracker.mit.active = true;
                        MarkerGridTracker.repressor.onApplicationPage = 2;
                    }
                    else{
                        console.log("missed content trigger window\nresetting timer.");
                        MarkerGridTracker.mit.counter = 0;
                    }
                }
                else if(MarkerGridTracker.repressor.onApplicationPage===1){    //  if the user has opened the NYT application
                    if(timeDiffMIT>=1000 && timeDiffMIT<=4000){ /*  check if the button is being pressed for at least 2 seconds** 
                                                                    (explicitly 1000ms to 4000ms but live unit tests show that the trigger occurs after 2 seconds on average)
                                                                    */
                        console.log("tapped the middle button on the NYT app");
                    }
                }
                else if(MarkerGridTracker.repressor.onApplicationPage===2){    //  if the user has opened the MIT (BAKUAS) application
                    if(timeDiffMIT>=1000 && timeDiffMIT<=4000){ /*  check if the button is being pressed for at least 2 seconds** 
                                                                    (explicitly 1000ms to 4000ms but live unit tests show that the trigger occurs after 2 seconds on average)
                                                                    */
                        console.log("tapped the middle button on the MIT app");
                    }
                }
                else if(MarkerGridTracker.repressor.onApplicationPage===3){    //  if the user has opened the HIRO (BODYTIME) application
                    if(timeDiffMIT>=1000 && timeDiffMIT<=4000){ /*  check if the button is being pressed for at least 2 seconds** 
                                                                    (explicitly 1000ms to 4000ms but live unit tests show that the trigger occurs after 2 seconds on average)
                                                                    */
                        console.log("tapped the middle button on the HIRO app");
                    }
                }
                else if(MarkerGridTracker.repressor.onApplicationPage===4){    //  if the user has opened the UNI (OFFICE) application
                    if(timeDiffMIT>=1000 && timeDiffMIT<=4000){ /*  check if the button is being pressed for at least 2 seconds** 
                                                                    (explicitly 1000ms to 4000ms but live unit tests show that the trigger occurs after 2 seconds on average)
                                                                    */
                        console.log("tapped the middle button on the UNI app");
                    }
                }
                else{
                    console.log("tapped something idk");
                }
            }
        }
        else{
            if(MarkerGridTracker.repressor.onApplicationPage===0){
                console.log("activating marker\nshow initial content");
                document.getElementById("mit-rotating-globe").emit("startRotatingMIT");
                MarkerGridTracker.mit.initiated = true;
            }
            else if(MarkerGridTracker.repressor.onApplicationPage===1){
                /*TODO: check for sub sections*/
                console.log("on the NYT application page!");
                MarkerGridTracker.mit.initiated = true;
            }
            else if(MarkerGridTracker.repressor.onApplicationPage===2){
                /*TODO: check for sub sections*/
                console.log("on the MIT application page!");
                MarkerGridTracker.mit.initiated = true;
            }
            else if(MarkerGridTracker.repressor.onApplicationPage===3){
                /*TODO: check for sub sections*/
                console.log("on the HIRO application page!");
                MarkerGridTracker.mit.initiated = true;
            }
            else if(MarkerGridTracker.repressor.onApplicationPage===4){
                /*TODO: check for sub sections*/
                console.log("on the UNI application page!");
                MarkerGridTracker.mit.initiated = true;
            }
        }
    });

    document.getElementById("hiro-marker-container").addEventListener("markerFound", function(){
        stopTimeHIRO = new Date().getTime();
        timeDiffHIRO = stopTimeHIRO-MarkerGridTracker.hiro.counter;

        console.log(`--------------------------\n${timeDiffHIRO} has elapsed\n--------------------------`);

        if(MarkerGridTracker.hiro.initiated){
            if(MarkerGridTracker.hiro.active){
                console.log("show content from HIRO selection\nlegacy function. searching for main menu...");
                if(timeDiffHIRO>=1000 && timeDiffHIRO<=4000){ /*  check if the button is being pressed for at least 2 seconds** 
                                                                    (explicitly 1000ms to 4000ms but live unit tests show that the trigger occurs after 2 seconds on average)
                                                                    */
                        console.log("tapped the BACK button on the NYT app");    // user pressed the back arrow on the NYT application cover page to go back to the main menu

                        /*
                        *   emit events that show the main menu content THIS WILL BE DUPLICATED IN THE DRAFT AND SHOULD BE REFACTORED AS SOON AS WE TRANSITION FROM THE CLOSED BETA TO THE PUBLIC BETA
                        *   NYT marker
                        *   MIT marker
                        *   HIRO marker
                        *   UNI marker
                        */
                        document.getElementById("nyt-rotating-globe").emit("resumeRotatingNYT"); //resume rotating middle marker
                        document.getElementById("nyt-rotating-globe").setAttribute("visible", true); //show initial middle marker icon
                        document.getElementById("hiro-application-panel").setAttribute("visible", false);
                        document.getElementById("hiro-application-panel").setAttribute("material.opacity", 0);//hide the secondary application panel


                        document.getElementById("mit-rotating-globe").emit("resumeRotatingMIT"); //resume rotating middle marker
                        document.getElementById("mit-rotating-globe").setAttribute("visible", true); //show initial middle marker icon
                        document.getElementById("hiro-application-secondary-panel").setAttribute("visible", false);
                        document.getElementById("hiro-application-secondary-panel").setAttribute("material.opacity", 0);//hide the secondary application panel


                        document.getElementById("hiro-rotating-globe").emit("resumeRotatingHIRO"); //resume rotating bottom left marker
                        document.getElementById("hiro-rotating-globe").setAttribute("visible", true); //show initial bottom left marker icon
                        document.getElementById("back-to-previous-page-button-container").setAttribute("visible", false);
                        // hide the back button for the application cover page

                        document.getElementById("unibeat-rotating-globe").emit("resumeRotatingUNI"); //resume rotating bottom right marker
                        document.getElementById("unibeat-rotating-globe").setAttribute("visible", true); //show initial bottom right marker icon
                        document.getElementById("next-page-button-container").setAttribute("visible", false); // hide the back button for the application cover page

                        MarkerGridTracker.repressor.onApplicationPage = 0; // go back to the main menu page
                        MarkerGridTracker.repressor.onApplicationSection = null;
                        MarkerGridTracker.hiro.active = false;
                }
            }
            else{
                if(MarkerGridTracker.repressor.onApplicationPage===0){   //   if the user is on the initial main menu page
                    if(timeDiffHIRO>=3000 && timeDiffHIRO<=6000){/* check if the button is being pressed for at least 4 seconds** 
                                                                    (explicitly 3000ms to 6000ms but live unit tests show that the trigger occurs after 4 seconds on average)
                                                                    */
                        console.log("show HIRO content from option selection");





                        /*
                        *
                        *   emit events that show the associated content for this application page for the 
                        *   NYT marker
                        *   MIT marker
                        *   HIRO marker
                        *   UNI marker
                        *
                        */

                        document.getElementById("nyt-rotating-globe").emit("stopRotatingNYT");
                        document.getElementById("nyt-rotating-globe").setAttribute("visible",false);

                        document.getElementById("hiro-application-panel").emit("showPanelHIRO");
                        document.getElementById("hiro-application-panel").setAttribute("visible",true);
                        //

                        document.getElementById("mit-rotating-globe").emit("stopRotatingMIT"); //stop rotating middle marker
                        document.getElementById("mit-rotating-globe").setAttribute("visible", false); //hide initial middle marker icon

                        document.getElementById("hiro-application-secondary-panel").emit("showSecondaryPanelHIRO");
                        document.getElementById("hiro-application-secondary-panel").setAttribute("visible",true);


                        document.getElementById("hiro-rotating-globe").emit("stopRotatingHIRO"); //stop rotating bottom left marker
                        document.getElementById("hiro-rotating-globe").setAttribute("visible", false); //hide initial bottom left marker icon

                        document.getElementById("back-to-previous-page-button-container").setAttribute("visible", true);
                        document.getElementById("back-to-previous-page-button-container").emit("showBackButtonOnCover");// show the back button for the application cover page

                        document.getElementById("unibeat-rotating-globe").emit("stopRotatingUNI"); //stop rotating bottom right marker
                        document.getElementById("unibeat-rotating-globe").setAttribute("visible", false); //hide initial bottom right marker icon

                        document.getElementById("next-page-button-container").setAttribute("visible", true);
                        document.getElementById("next-page-button-container").emit("showNextButtonOnCover");// show the back button for the application cover page


                        MarkerGridTracker.repressor.onApplicationSection = {
                            current: 0,
                            directory: [
                                "cover",
                                "barrons-account-page"
                            ]
                        };

                        MarkerGridTracker.hiro.active = true;
                        MarkerGridTracker.repressor.onApplicationPage = 3;
                    }
                    else{
                        console.log("missed content trigger window\nresetting timer.");
                        MarkerGridTracker.hiro.counter = 0;
                    }
                }
                else if(MarkerGridTracker.repressor.onApplicationPage===1){    //  if the user has opened the NYT application
                    if(timeDiffHIRO>=1000 && timeDiffHIRO<=4000){ /*  check if the button is being pressed for at least 2 seconds** 
                                                                    (explicitly 1000ms to 4000ms but live unit tests show that the trigger occurs after 2 seconds on average)
                                                                    */
                        console.log("tapped the BACK button on the NYT app");    // user pressed the back arrow on the NYT application cover page to go back to the main menu

                        /*
                        *   emit events that show the main menu content THIS WILL BE DUPLICATED IN THE DRAFT AND SHOULD BE REFACTORED AS SOON AS WE TRANSITION FROM THE CLOSED BETA TO THE PUBLIC BETA
                        *   NYT marker
                        *   MIT marker
                        *   HIRO marker
                        *   UNI marker
                        */
                        document.getElementById("nyt-rotating-globe").emit("resumeRotatingNYT"); //resume rotating middle marker
                        document.getElementById("nyt-rotating-globe").setAttribute("visible", true); //show initial middle marker icon
                        document.getElementById("nyt-application-panel").setAttribute("visible", false);
                        document.getElementById("nyt-application-panel").setAttribute("material.opacity", 0);//hide the secondary application panel


                        document.getElementById("mit-rotating-globe").emit("resumeRotatingMIT"); //resume rotating middle marker
                        document.getElementById("mit-rotating-globe").setAttribute("visible", true); //show initial middle marker icon
                        document.getElementById("nyt-application-secondary-panel").setAttribute("visible", false);
                        document.getElementById("nyt-application-secondary-panel").setAttribute("material.opacity", 0);//hide the secondary application panel


                        document.getElementById("hiro-rotating-globe").emit("resumeRotatingHIRO"); //resume rotating bottom left marker
                        document.getElementById("hiro-rotating-globe").setAttribute("visible", true); //show initial bottom left marker icon
                        document.getElementById("back-to-previous-page-button-container").setAttribute("visible", false);
                        // hide the back button for the application cover page

                        document.getElementById("unibeat-rotating-globe").emit("resumeRotatingUNI"); //resume rotating bottom right marker
                        document.getElementById("unibeat-rotating-globe").setAttribute("visible", true); //show initial bottom right marker icon
                        document.getElementById("next-page-button-container").setAttribute("visible", false); // hide the back button for the application cover page

                        MarkerGridTracker.repressor.onApplicationPage = 0; // go back to the main menu page
                        MarkerGridTracker.repressor.onApplicationSection = null;
                        MarkerGridTracker.nyt.active = false;
                    }
                }
                else if(MarkerGridTracker.repressor.onApplicationPage===2){    //  if the user has opened the MIT (BAKUAS) application
                    if(timeDiffHIRO>=1000 && timeDiffHIRO<=4000){ /*  check if the button is being pressed for at least 2 seconds** 
                                                                    (explicitly 1000ms to 4000ms but live unit tests show that the trigger occurs after 2 seconds on average)
                                                                    */
                        //console.log("tapped the bottom left button on the MIT app");

                        /*
                        *   emit events that show the main menu content THIS WILL BE DUPLICATED IN THE DRAFT AND SHOULD BE REFACTORED AS SOON AS WE TRANSITION FROM THE CLOSED BETA TO THE PUBLIC BETA
                        *   NYT marker
                        *   MIT marker
                        *   HIRO marker
                        *   UNI marker
                        */
                        document.getElementById("nyt-rotating-globe").emit("resumeRotatingNYT"); //resume rotating middle marker
                        document.getElementById("nyt-rotating-globe").setAttribute("visible", true); //show initial middle marker icon
                        document.getElementById("mit-application-panel").setAttribute("visible", false);
                        document.getElementById("mit-application-panel").setAttribute("material.opacity", 0);//hide the secondary application panel


                        document.getElementById("mit-rotating-globe").emit("resumeRotatingMIT"); //resume rotating middle marker
                        document.getElementById("mit-rotating-globe").setAttribute("visible", true); //show initial middle marker icon
                        document.getElementById("mit-application-secondary-panel").setAttribute("visible", false);
                        document.getElementById("mit-application-secondary-panel").setAttribute("material.opacity", 0);//hide the secondary application panel

                        document.getElementById("bakuas-ticker-video").pause();
                        document.getElementById("bakuas-ticker-tape-container").setAttribute("visible", false);
                        document.getElementById("bakuas-ticker-tape-container").setAttribute("material.opacity", 0);

                        document.getElementById("hiro-rotating-globe").emit("resumeRotatingHIRO"); //resume rotating bottom left marker
                        document.getElementById("hiro-rotating-globe").setAttribute("visible", true); //show initial bottom left marker icon
                        document.getElementById("back-to-previous-page-button-container").setAttribute("visible", false);
                        // hide the back button for the application cover page

                        document.getElementById("unibeat-rotating-globe").emit("resumeRotatingUNI"); //resume rotating bottom right marker
                        document.getElementById("unibeat-rotating-globe").setAttribute("visible", true); //show initial bottom right marker icon
                        document.getElementById("next-page-button-container").setAttribute("visible", false); // hide the back button for the application cover page

                        MarkerGridTracker.repressor.onApplicationPage = 0; // go back to the main menu page
                        MarkerGridTracker.repressor.onApplicationSection = null;
                        MarkerGridTracker.mit.active = false;
                    }
                }
                else if(MarkerGridTracker.repressor.onApplicationPage===3){    //  if the user has opened the HIRO (BODYTIME) application
                    if(timeDiffHIRO>=1000 && timeDiffHIRO<=4000){ /*  check if the button is being pressed for at least 2 seconds** 
                                                                    (explicitly 1000ms to 4000ms but live unit tests show that the trigger occurs after 2 seconds on average)
                                                                    */
                        console.log("tapped the bottom left button on the HIRO app");

                        /*
                        *   emit events that show the main menu content THIS WILL BE DUPLICATED IN THE DRAFT AND SHOULD BE REFACTORED AS SOON AS WE TRANSITION FROM THE CLOSED BETA TO THE PUBLIC BETA
                        *   NYT marker
                        *   MIT marker
                        *   HIRO marker
                        *   UNI marker
                        */
                        document.getElementById("nyt-rotating-globe").emit("resumeRotatingNYT"); //resume rotating middle marker
                        document.getElementById("nyt-rotating-globe").setAttribute("visible", true); //show initial middle marker icon
                        document.getElementById("hiro-application-panel").setAttribute("visible", false);
                        document.getElementById("hiro-application-panel").setAttribute("material.opacity", 0);//hide the secondary application panel


                        document.getElementById("mit-rotating-globe").emit("resumeRotatingMIT"); //resume rotating middle marker
                        document.getElementById("mit-rotating-globe").setAttribute("visible", true); //show initial middle marker icon
                        document.getElementById("hiro-application-secondary-panel").setAttribute("visible", false);
                        document.getElementById("hiro-application-secondary-panel").setAttribute("material.opacity", 0);//hide the secondary application panel

                        document.getElementById("hiro-rotating-globe").emit("resumeRotatingHIRO"); //resume rotating bottom left marker
                        document.getElementById("hiro-rotating-globe").setAttribute("visible", true); //show initial bottom left marker icon
                        document.getElementById("back-to-previous-page-button-container").setAttribute("visible", false);
                        // hide the back button for the application cover page

                        document.getElementById("unibeat-rotating-globe").emit("resumeRotatingUNI"); //resume rotating bottom right marker
                        document.getElementById("unibeat-rotating-globe").setAttribute("visible", true); //show initial bottom right marker icon
                        document.getElementById("next-page-button-container").setAttribute("visible", false); // hide the back button for the application cover page

                        MarkerGridTracker.repressor.onApplicationPage = 0; // go back to the main menu page
                        MarkerGridTracker.repressor.onApplicationSection = null;
                        MarkerGridTracker.hiro.active = false;
                    }
                }
                else if(MarkerGridTracker.repressor.onApplicationPage===4){    //  if the user has opened the UNI (OFFICE) application
                    if(timeDiffHIRO>=1000 && timeDiffHIRO<=4000){ /*  check if the button is being pressed for at least 2 seconds** 
                                                                    (explicitly 1000ms to 4000ms but live unit tests show that the trigger occurs after 2 seconds on average)
                                                                    */
                        console.log("tapped the bottom left button on the UNI app");
                        console.log(`on app section ${MarkerGridTracker.repressor.onApplicationSection.current}`);

                        document.getElementById("nyt-rotating-globe").emit("resumeRotatingNYT"); //resume rotating middle marker
                        document.getElementById("nyt-rotating-globe").setAttribute("visible", true); //show initial middle marker icon
                        document.getElementById("unibeat-application-panel").setAttribute("visible", false);
                        document.getElementById("unibeat-application-panel").setAttribute("material.opacity", 0);//hide the secondary application panel


                        document.getElementById("mit-rotating-globe").emit("resumeRotatingMIT"); //resume rotating middle marker
                        document.getElementById("mit-rotating-globe").setAttribute("visible", true); //show initial middle marker icon
                        document.getElementById("unibeat-application-secondary-panel").setAttribute("visible", false);
                        document.getElementById("unibeat-application-secondary-panel").setAttribute("material.opacity", 0);//hide the secondary application panel

                        document.getElementById("hiro-rotating-globe").emit("resumeRotatingHIRO"); //resume rotating bottom left marker
                        document.getElementById("hiro-rotating-globe").setAttribute("visible", true); //show initial bottom left marker icon
                        document.getElementById("back-to-previous-page-button-container").setAttribute("visible", false);
                        // hide the back button for the application cover page

                        document.getElementById("unibeat-rotating-globe").emit("resumeRotatingUNI"); //resume rotating bottom right marker
                        document.getElementById("unibeat-rotating-globe").setAttribute("visible", true); //show initial bottom right marker icon
                        document.getElementById("next-page-button-container").setAttribute("visible", false); // hide the back button for the application cover page

                        MarkerGridTracker.repressor.onApplicationPage = 0; // go back to the main menu page
                        MarkerGridTracker.repressor.onApplicationSection = null;
                        MarkerGridTracker.unibeat.active = false;

                    }
                }
                else{
                    console.log("tapped something idk");
                }
            }
        }
        else{
            if(MarkerGridTracker.repressor.onApplicationPage===0){
                console.log("activating marker\nshow initial content");
                document.getElementById("hiro-rotating-globe").emit("startRotatingHIRO");
                MarkerGridTracker.hiro.initiated = true;
            }
            else if(MarkerGridTracker.repressor.onApplicationPage===1){
                /*TODO: check for sub sections*/
                console.log("on the NYT application page!");
                MarkerGridTracker.hiro.initiated = true;
            }
            else if(MarkerGridTracker.repressor.onApplicationPage===2){
                /*TODO: check for sub sections*/
                console.log("on the MIT application page!");
                MarkerGridTracker.hiro.initiated = true;
            }
            else if(MarkerGridTracker.repressor.onApplicationPage===3){
                /*TODO: check for sub sections*/
                console.log("on the HIRO application page!");
                MarkerGridTracker.hiro.initiated = true;
            }
            else if(MarkerGridTracker.repressor.onApplicationPage===4){
                /*TODO: check for sub sections*/
                console.log("on the UNI application page!");
                MarkerGridTracker.hiro.initiated = true;
            }
        }
    });

    document.getElementById("unibeat-marker-container").addEventListener("markerFound", function(){
        stopTimeUNI = new Date().getTime();
        timeDiffUNI = stopTimeUNI-MarkerGridTracker.unibeat.counter;

        console.log(`--------------------------\n${timeDiffUNI} has elapsed\n--------------------------`);

        if(MarkerGridTracker.unibeat.initiated){
            if(MarkerGridTracker.unibeat.active){

                if(timeDiffUNI>=1000 && timeDiffUNI<=4000 && MarkerGridTracker.repressor.onApplicationSection.current===0){ /*  check if the button is being pressed for at least 2 seconds** 
                                                                    (explicitly 1000ms to 4000ms but live unit tests show that the trigger occurs after 2 seconds on average)
                                                                    */
                        console.log("tapped the NEXT button on the UNI app");    // user pressed the back arrow on the NYT application cover page to go back to the main menu

                        /*
                        *   emit events that show the main menu content THIS WILL BE DUPLICATED IN THE DRAFT AND SHOULD BE REFACTORED AS SOON AS WE TRANSITION FROM THE CLOSED BETA TO THE PUBLIC BETA
                        *   NYT marker
                        *   MIT marker
                        *   HIRO marker
                        *   UNI marker
                        */
                    console.log("show content from UNI selection within the bounds of current COVER PAGE 0");
                    document.getElementById("unibeat-application-panel").setAttribute("visible",false);
                    document.getElementById("unibeat-application-secondary-panel").setAttribute("visible",false);


                    document.getElementById("back-to-previous-page-button-container").setAttribute("visible", false);
                    document.getElementById("back-to-previous-page-button-container").setAttribute("material.opacity", 0);// hide the back button for the application cover page

                    document.getElementById("next-page-button-container").setAttribute("visible", false);
                    document.getElementById("next-page-button-container").setAttribute("material.opacity", 0);   // hide the back button for 

                    document.getElementById("cARd-go-back-to-app-cover-page-button-container").style.display = "inline-block";
                    document.getElementById("cARd-open-app-cover-page-button-container").style.display = "inline-block";
                    document.getElementById("open-desktop-page-options-container").style.display = "block";

                    setTimeout(function(){
                        document.getElementById("cARd-go-back-to-app-cover-page-button-container").style.opacity = 1.0;
                        document.getElementById("cARd-open-app-cover-page-button-container").style.opacity = 1.0;
                        document.getElementById("open-desktop-page-options-container").style.opacity = 1.0;
                    }, 50);

                    MarkerGridTracker.repressor.onApplicationSection.current = 1; // move onto second page in cARd app
                }

            }
            else{
                if(MarkerGridTracker.repressor.onApplicationPage===0){   //   if the user is on the initial main menu page
                    if(timeDiffUNI>=3000 && timeDiffUNI<=6000){/*       check if the button is being pressed for at least 4 seconds** 
                                                                        (explicitly 3000ms to 6000ms but live unit tests show that the trigger occurs after 4 seconds on average)
                                                                        */
                        console.log("show UNI (creative Augmented Reality desktop) content from option selection");

                        document.getElementById("nyt-rotating-globe").emit("stopRotatingNYT");
                        document.getElementById("nyt-rotating-globe").setAttribute("visible",false);

                        document.getElementById("mit-rotating-globe").emit("stopRotatingMIT");
                        document.getElementById("mit-rotating-globe").setAttribute("visible",false);

                        document.getElementById("hiro-rotating-globe").emit("stopRotatingHIRO");
                        document.getElementById("hiro-rotating-globe").setAttribute("visible",false);

                        document.getElementById("unibeat-rotating-globe").emit("stopRotatingUNI");
                        document.getElementById("unibeat-rotating-globe").setAttribute("visible",false);


                        document.getElementById("back-to-previous-page-button-container").setAttribute("visible", true);
                        document.getElementById("back-to-previous-page-button-container").emit("showBackButtonOnCover");
                        //document.getElementById("back-to-previous-page-button-container").setAttribute("material.opacity", 1.0);// show the back button for the application cover page

                        document.getElementById("next-page-button-container").setAttribute("visible", true);
                        document.getElementById("next-page-button-container").emit("showNextButtonOnCover");
                        //document.getElementById("next-page-button-container").setAttribute("material.opacity", 1.0);   // show the back button for 


                        document.getElementById("unibeat-application-panel").emit("showPanelUNI");
                        document.getElementById("unibeat-application-panel").setAttribute("visible",true);

                        document.getElementById("unibeat-application-secondary-panel").setAttribute("visible",true);
                        document.getElementById("unibeat-application-secondary-panel").emit("showSecondaryPanelUNI");


                        MarkerGridTracker.repressor.onApplicationSection = {
                            current: 0,
                            directory: [
                                "cover",
                                "link-to-office-app"
                            ]
                        };

                        MarkerGridTracker.unibeat.active = true;
                        MarkerGridTracker.repressor.onApplicationPage = 4;
                    }
                    else{
                        console.log("missed content trigger window\nresetting timer.");
                        MarkerGridTracker.unibeat.counter = 0;
                    }
                }
                else if(MarkerGridTracker.repressor.onApplicationPage===1&&MarkerGridTracker.repressor.onApplicationSection.current===0){    //  if the user has opened the NYT application
                    if(timeDiffUNI>=1000 && timeDiffUNI<=4000){ /*  check if the button is being pressed for at least 2 seconds** 
                                                                    (explicitly 1000ms to 4000ms but live unit tests show that the trigger occurs after 2 seconds on average)
                                                                    */
                        console.log("tapped the bottom right button on the NYT app");



                        document.getElementById("nyt-application-panel").setAttribute("visible", false); //hide the application cover panel

                        /*
                        *
                        *   emit events that show the associated content for this application page for the 
                        *   MIT marker
                        *   HIRO marker
                        *   UNI marker
                        *
                        */

                        document.getElementById("nyt-application-secondary-panel").setAttribute("visible", false);
                        document.getElementById("nyt-application-secondary-panel").setAttribute("material.opacity", 0);   // hide the secondary application panel


                        document.getElementById("back-to-previous-page-button-container").setAttribute("visible", false);
                        document.getElementById("back-to-previous-page-button-container").setAttribute("material.opacity", 0);// hide the back button for the application cover page


                        document.getElementById("next-page-button-container").setAttribute("visible", false);
                        document.getElementById("next-page-button-container").setAttribute("material.opacity", 0);   // hide the back button for the application cover page

                        /*
                        *   show the New York Times Immersive Paper Front Page
                        *
                        *
                        *
                        */

                        document.getElementById("nyt-banner-container").setAttribute("visible", true);
                        document.getElementById("date-container").setAttribute("visible", true);
                        document.getElementById("date-container").emit("showDateContainerPanel");

                        document.getElementById("front-page-banner-item-container-0").setAttribute("visible", true);
                        document.getElementById("front-page-banner-item-container-1").setAttribute("visible", true);
                        document.getElementById("front-page-banner-item-container-2").setAttribute("visible", true);
                        document.getElementById("front-page-banner-item-container-3").setAttribute("visible", true);
                        document.getElementById("front-page-banner-item-container-4").setAttribute("visible", true);

                        document.getElementById("right-side-banner-item-container-0").setAttribute("visible", true);
                        document.getElementById("right-side-banner-item-container-1").setAttribute("visible", true);
                        document.getElementById("right-side-banner-item-container-2").setAttribute("visible", true);

                        document.getElementById("left-side-banner-item-container-0").setAttribute("visible", true);
                        document.getElementById("left-side-banner-item-container-1").setAttribute("visible", true);

                        document.getElementById("bottom-banner-item-container-0").setAttribute("visible", true);
                        document.getElementById("bottom-banner-item-container-1").setAttribute("visible", true);

                        document.getElementById("other-stories-banner-item-container-0").setAttribute("visible", true);
                        document.getElementById("other-stories-banner-item-container-1").setAttribute("visible", true);
                        document.getElementById("other-stories-banner-item-container-2").setAttribute("visible", true);

                        document.getElementById("front-page-main-cover-0").setAttribute("visible", true);
                        document.getElementById("fuse-container-video-container").setAttribute("visible", true);
                        
                        document.getElementById("front-page-main-cover-0").emit("showCoverZero");

                        document.getElementById("front-page-main-cover-1").setAttribute("visible", true);
                        document.getElementById("front-page-main-cover-2").setAttribute("visible", true);
                        document.getElementById("front-page-main-cover-3").setAttribute("visible", true);
                        document.getElementById("front-page-main-cover-4").setAttribute("visible", true);
                        document.getElementById("front-page-main-cover-5").setAttribute("visible", true);
                        document.getElementById("front-page-main-cover-6").setAttribute("visible", true);
                        document.getElementById("front-page-main-cover-7").setAttribute("visible", true);
                        document.getElementById("front-page-main-cover-8").setAttribute("visible", true);


                        document.getElementById("bottom-half-front-cover-container").setAttribute("visible", true);
                        document.getElementById("bottom-half-front-cover-action-button-container-0").setAttribute("visible", true);
                        document.getElementById("bottom-half-front-cover-action-button-container-1").setAttribute("visible", true);
                        document.getElementById("bottom-half-front-cover-action-button-container-2").setAttribute("visible", true);

                        document.getElementById("go-back-to-app-cover-page-button-container").style.display = "block";
                        document.getElementById("fuse-container").style.display = "block";
                        document.getElementById("go-back-to-app-cover-page-button-container").style.opacity = 1.0;
                        /**/

                        MarkerGridTracker.repressor.onApplicationSection.current = 1;   // change the app focus to the second page in the directory
                        // for the NYT immersive newspaper that is the front page of the times for the day
                    }
                }
                else if(MarkerGridTracker.repressor.onApplicationPage===2){    //  if the user has opened the MIT (BAKUAS) application
                    if(timeDiffUNI>=1000 && timeDiffUNI<=4000){ /*  check if the button is being pressed for at least 2 seconds** 
                                                                    (explicitly 1000ms to 4000ms but live unit tests show that the trigger occurs after 2 seconds on average)
                                                                    */
                        console.log("tapped the bottom right button on the MIT (Bakuas) app");

                    }
                }
                else if(MarkerGridTracker.repressor.onApplicationPage===3){    //  if the user has opened the HIRO (BODYTIME) application
                    if(timeDiffUNI>=1000 && timeDiffUNI<=4000){ /*  check if the button is being pressed for at least 2 seconds** 
                                                                    (explicitly 1000ms to 4000ms but live unit tests show that the trigger occurs after 2 seconds on average)
                                                                    */
                        console.log("tapped the bottom right button on the HIRO (Barron's) app");


                        document.getElementById("nyt-application-panel").setAttribute("visible", false); //hide the application cover panel

                        /*
                        *
                        *   emit events that show the associated content for this application page for the 
                        *   MIT marker
                        *   HIRO marker
                        *   UNI marker
                        *
                        */

                        document.getElementById("hiro-application-secondary-panel").setAttribute("visible", false);
                        document.getElementById("hiro-application-secondary-panel").setAttribute("material.opacity", 0);   // hide the secondary application panel


                        document.getElementById("back-to-previous-page-button-container").setAttribute("visible", false);
                        document.getElementById("back-to-previous-page-button-container").setAttribute("material.opacity", 0);// hide the back button for the application cover page


                        document.getElementById("next-page-button-container").setAttribute("visible", false);
                        document.getElementById("next-page-button-container").setAttribute("material.opacity", 0);   // hide the back button for the application cover page

                        /*
                        *   show the New York Times Immersive Paper Front Page
                        *
                        *
                        *
                        */

                        document.getElementById("barrons-banner-container").setAttribute("visible", true);
                        document.getElementById("barrons-date-container").setAttribute("visible", true);
                        document.getElementById("barrons-date-container").emit("showDateContainerPanel");

                        document.getElementById("barrons-front-page-banner-item-container-0").setAttribute("visible", true);
                        document.getElementById("barrons-front-page-banner-item-container-1").setAttribute("visible", true);
                        document.getElementById("barrons-front-page-banner-item-container-2").setAttribute("visible", true);
                        document.getElementById("barrons-front-page-banner-item-container-3").setAttribute("visible", true);
                        document.getElementById("barrons-front-page-banner-item-container-4").setAttribute("visible", true);

                        document.getElementById("barrons-right-side-banner-item-container-0").setAttribute("visible", true);
                        document.getElementById("barrons-right-side-banner-item-container-1").setAttribute("visible", true);
                        document.getElementById("barrons-right-side-banner-item-container-2").setAttribute("visible", true);

                        document.getElementById("barrons-left-side-banner-item-container-0").setAttribute("visible", true);
                        document.getElementById("barrons-left-side-banner-item-container-1").setAttribute("visible", true);

                        document.getElementById("barrons-bottom-banner-item-container-0").setAttribute("visible", true);
                        document.getElementById("barrons-bottom-banner-item-container-1").setAttribute("visible", true);

                        document.getElementById("barrons-other-stories-banner-item-container-0").setAttribute("visible", true);
                        document.getElementById("barrons-other-stories-banner-item-container-1").setAttribute("visible", true);
                        document.getElementById("barrons-other-stories-banner-item-container-2").setAttribute("visible", true);

                        document.getElementById("barrons-front-page-main-cover-0").setAttribute("visible", true);
                        document.getElementById("barrons-front-page-main-cover-0").emit("showCoverZero");

                        document.getElementById("barrons-front-page-main-cover-1").setAttribute("visible", true);
                        document.getElementById("barrons-front-page-main-cover-2").setAttribute("visible", true);
                        document.getElementById("barrons-front-page-main-cover-3").setAttribute("visible", true);
                        document.getElementById("barrons-front-page-main-cover-4").setAttribute("visible", true);
                        document.getElementById("barrons-front-page-main-cover-5").setAttribute("visible", true);
                        document.getElementById("barrons-front-page-main-cover-6").setAttribute("visible", true);
                        document.getElementById("barrons-front-page-main-cover-7").setAttribute("visible", true);
                        document.getElementById("barrons-front-page-main-cover-8").setAttribute("visible", true);


                        document.getElementById("barrons-bottom-half-front-cover-container").setAttribute("visible", true);
                        document.getElementById("barrons-bottom-half-front-cover-action-button-container-0").setAttribute("visible", true);
                        document.getElementById("barrons-bottom-half-front-cover-action-button-container-1").setAttribute("visible", true);
                        document.getElementById("barrons-bottom-half-front-cover-action-button-container-2").setAttribute("visible", true);

                        document.getElementById("barrons-go-back-to-app-cover-page-button-container").style.display = "block";
                        document.getElementById("fuse-container").style.display = "block";
                        document.getElementById("barrons-go-back-to-app-cover-page-button-container").style.opacity = 1.0;
                        /**/

                        MarkerGridTracker.repressor.onApplicationSection.current = 1;   // change the app focus to the third page in the directory
                        // for the Barron's immersive newspaper that is the front page for the day
                    }
                }
                else if(MarkerGridTracker.repressor.onApplicationPage===4&&MarkerGridTracker.repressor.onApplicationSection.current===0){    //  if the user has opened the UNI (OFFICE) application
                    if(timeDiffUNI>=1000 && timeDiffUNI<=4000){ /*  check if the button is being pressed for at least 2 seconds** 
                                                                    (explicitly 1000ms to 4000ms but live unit tests show that the trigger occurs after 2 seconds on average)
                                                                    */


                        console.log("tapped the bottom right button on the UNI (creative Augmented Reality desktop) app");
                        /** THIS CANNOT OCCUR BECAUSE BY DEFINITION BEING ON THIS APPLICATION PAGE REQURES BEING ACTIVE **/

                    }
                }
                else{
                    console.log("tapped something idk HIRO we are herererere!");
                    console.log(MarkerGridTracker.repressor.onApplicationSection.current);
                }
            }
        }
        else{
            if(MarkerGridTracker.repressor.onApplicationPage===0){
                console.log("activating marker\nshow initial content");
                document.getElementById("unibeat-rotating-globe").emit("startRotatingUNI");
                MarkerGridTracker.unibeat.initiated = true;
            }
            else if(MarkerGridTracker.repressor.onApplicationPage===1){
                /*TODO: check for sub sections*/
                console.log("on the NYT application page!");
                MarkerGridTracker.unibeat.initiated = true;
            }
            else if(MarkerGridTracker.repressor.onApplicationPage===2){
                /*TODO: check for sub sections*/
                console.log("on the MIT application page!");
                MarkerGridTracker.unibeat.initiated = true;
            }
            else if(MarkerGridTracker.repressor.onApplicationPage===3){
                /*TODO: check for sub sections*/
                console.log("on the HIRO application page!");
                MarkerGridTracker.unibeat.initiated = true;
            }
            else if(MarkerGridTracker.repressor.onApplicationPage===4){
                /*TODO: check for sub sections*/
                console.log("on the UNI application page!");
                MarkerGridTracker.unibeat.initiated = true;
            }
        }
    });



    document.getElementById("go-back-to-app-cover-page-button-container").addEventListener("click", function(){
        if(MarkerGridTracker.repressor.onApplicationSection.current===1){
            /*
            *   show the New York Times Immersive Paper Front Page
            *
            *
            *
            */

            document.getElementById("nyt-banner-container").setAttribute("visible", false);
            document.getElementById("date-container").setAttribute("visible", false);
            document.getElementById("date-container").setAttribute("material.opacity", 0);
            //document.getElementById("date-container").emit("showDateContainerPanel");

            document.getElementById("front-page-banner-item-container-0").setAttribute("visible", false);
            document.getElementById("front-page-banner-item-container-1").setAttribute("visible", false);
            document.getElementById("front-page-banner-item-container-2").setAttribute("visible", false);
            document.getElementById("front-page-banner-item-container-3").setAttribute("visible", false);
            document.getElementById("front-page-banner-item-container-4").setAttribute("visible", false);

            document.getElementById("right-side-banner-item-container-0").setAttribute("visible", false);
            document.getElementById("right-side-banner-item-container-1").setAttribute("visible", false);
            document.getElementById("right-side-banner-item-container-2").setAttribute("visible", false);

            document.getElementById("left-side-banner-item-container-0").setAttribute("visible", false);
            document.getElementById("left-side-banner-item-container-1").setAttribute("visible", false);

            document.getElementById("bottom-banner-item-container-0").setAttribute("visible", false);
            document.getElementById("bottom-banner-item-container-1").setAttribute("visible", false);

            document.getElementById("other-stories-banner-item-container-0").setAttribute("visible", false);
            document.getElementById("other-stories-banner-item-container-1").setAttribute("visible", false);
            document.getElementById("other-stories-banner-item-container-2").setAttribute("visible", false);

            document.getElementById("front-page-main-cover-0").setAttribute("visible", false);
            document.getElementById("fuse-container-video-container").setAttribute("visible", false);
            
            document.getElementById("front-page-main-cover-0").emit("showCoverZero");

            document.getElementById("front-page-main-cover-1").setAttribute("visible", false);
            document.getElementById("front-page-main-cover-2").setAttribute("visible", false);
            document.getElementById("front-page-main-cover-3").setAttribute("visible", false);
            document.getElementById("front-page-main-cover-4").setAttribute("visible", false);
            document.getElementById("front-page-main-cover-5").setAttribute("visible", false);
            document.getElementById("front-page-main-cover-6").setAttribute("visible", false);
            document.getElementById("front-page-main-cover-7").setAttribute("visible", false);
            document.getElementById("front-page-main-cover-8").setAttribute("visible", false);


            document.getElementById("bottom-half-front-cover-container").setAttribute("visible", false);
            document.getElementById("bottom-half-front-cover-action-button-container-0").setAttribute("visible", false);
            document.getElementById("bottom-half-front-cover-action-button-container-1").setAttribute("visible", false);
            document.getElementById("bottom-half-front-cover-action-button-container-2").setAttribute("visible", false);


            setTimeout(function(){
                document.getElementById("go-back-to-app-cover-page-button-container").style.display = "none";
                document.getElementById("fuse-container").style.display = "none";
            }, 500);

            document.getElementById("go-back-to-app-cover-page-button-container").style.opacity = 0;

            MarkerGridTracker.repressor.onApplicationSection.current = 0;   // change the app focus 






            /*
            *   This has been duplicated from the section above | REFACTOR FOR THE BETA VERSION
            *
            *
            */

            console.log("show NYT content");

            document.getElementById("nyt-application-panel").emit("showPanelNYT");
            document.getElementById("nyt-application-panel").setAttribute("visible",true);

            /*
            *
            *   emit events that show the associated content for this application page for the 
            *   MIT marker
            *   HIRO marker
            *   UNI marker
            *
            */

            document.getElementById("nyt-application-secondary-panel").setAttribute("visible", true);
            document.getElementById("nyt-application-secondary-panel").emit("showSecondaryPanelNYT");   //show the secondary application panel

            document.getElementById("back-to-previous-page-button-container").setAttribute("visible", true);
            document.getElementById("back-to-previous-page-button-container").emit("showBackButtonOnCover");// show the back button for the application cover page

            document.getElementById("next-page-button-container").setAttribute("visible", true);
            document.getElementById("next-page-button-container").emit("showNextButtonOnCover");// show the back button for the application cover page

            // potentially redundant review line below before removing during REFACTOR
            MarkerGridTracker.nyt.active = true;
        }
    });

    document.getElementById("barrons-go-back-to-app-cover-page-button-container").addEventListener("click", function(){
        if(MarkerGridTracker.repressor.onApplicationSection.current===1){
            /*
            *   show the New York Times Immersive Paper Front Page
            *
            *
            *
            */

            document.getElementById("barrons-banner-container").setAttribute("visible", false);
            document.getElementById("barrons-date-container").setAttribute("visible", false);
            document.getElementById("barrons-date-container").setAttribute("material.opacity", 0);
            //document.getElementById("date-container").emit("showDateContainerPanel");

            document.getElementById("barrons-front-page-banner-item-container-0").setAttribute("visible", false);
            document.getElementById("barrons-front-page-banner-item-container-1").setAttribute("visible", false);
            document.getElementById("barrons-front-page-banner-item-container-2").setAttribute("visible", false);
            document.getElementById("barrons-front-page-banner-item-container-3").setAttribute("visible", false);
            document.getElementById("barrons-front-page-banner-item-container-4").setAttribute("visible", false);

            document.getElementById("barrons-right-side-banner-item-container-0").setAttribute("visible", false);
            document.getElementById("barrons-right-side-banner-item-container-1").setAttribute("visible", false);
            document.getElementById("barrons-right-side-banner-item-container-2").setAttribute("visible", false);

            document.getElementById("barrons-left-side-banner-item-container-0").setAttribute("visible", false);
            document.getElementById("barrons-left-side-banner-item-container-1").setAttribute("visible", false);

            document.getElementById("barrons-bottom-banner-item-container-0").setAttribute("visible", false);
            document.getElementById("barrons-bottom-banner-item-container-1").setAttribute("visible", false);

            document.getElementById("barrons-other-stories-banner-item-container-0").setAttribute("visible", false);
            document.getElementById("barrons-other-stories-banner-item-container-1").setAttribute("visible", false);
            document.getElementById("barrons-other-stories-banner-item-container-2").setAttribute("visible", false);

            document.getElementById("barrons-front-page-main-cover-0").setAttribute("visible", false);
            document.getElementById("barrons-front-page-main-cover-0").emit("showCoverZero");

            document.getElementById("barrons-front-page-main-cover-1").setAttribute("visible", false);
            document.getElementById("barrons-front-page-main-cover-2").setAttribute("visible", false);
            document.getElementById("barrons-front-page-main-cover-3").setAttribute("visible", false);
            document.getElementById("barrons-front-page-main-cover-4").setAttribute("visible", false);
            document.getElementById("barrons-front-page-main-cover-5").setAttribute("visible", false);
            document.getElementById("barrons-front-page-main-cover-6").setAttribute("visible", false);
            document.getElementById("barrons-front-page-main-cover-7").setAttribute("visible", false);
            document.getElementById("barrons-front-page-main-cover-8").setAttribute("visible", false);


            document.getElementById("barrons-bottom-half-front-cover-container").setAttribute("visible", false);
            document.getElementById("barrons-bottom-half-front-cover-action-button-container-0").setAttribute("visible", false);
            document.getElementById("barrons-bottom-half-front-cover-action-button-container-1").setAttribute("visible", false);
            document.getElementById("barrons-bottom-half-front-cover-action-button-container-2").setAttribute("visible", false);


            setTimeout(function(){
                document.getElementById("barrons-go-back-to-app-cover-page-button-container").style.display = "none";
                document.getElementById("fuse-container").style.display = "none";
            }, 500);

            document.getElementById("barrons-go-back-to-app-cover-page-button-container").style.opacity = 0;

            MarkerGridTracker.repressor.onApplicationSection.current = 0;   // change the app focus 






            /*
            *   This has been duplicated from the section above | REFACTOR FOR THE BETA VERSION
            *
            *
            */

            console.log("show HIRO content");

            document.getElementById("hiro-application-panel").emit("showPanelHIRO");
            document.getElementById("hiro-application-panel").setAttribute("visible",true);

            /*
            *
            *   emit events that show the associated content for this application page for the 
            *   MIT marker
            *   HIRO marker
            *   UNI marker
            *
            */

            document.getElementById("hiro-application-secondary-panel").setAttribute("visible", true);
            document.getElementById("hiro-application-secondary-panel").emit("showSecondaryPanelHIRO");   //show the secondary application panel

            document.getElementById("back-to-previous-page-button-container").setAttribute("visible", true);
            document.getElementById("back-to-previous-page-button-container").emit("showBackButtonOnCover");// show the back button for the application cover page

            document.getElementById("next-page-button-container").setAttribute("visible", true);
            document.getElementById("next-page-button-container").emit("showNextButtonOnCover");// show the back button for the application cover page

            // potentially redundant review line below before removing during REFACTOR
            MarkerGridTracker.hiro.active = true;
        }
    });

    document.getElementById("cARd-go-back-to-app-cover-page-button-container").addEventListener("click", function(){
        if(MarkerGridTracker.repressor.onApplicationSection.current===1){
            document.getElementById("back-to-previous-page-button-container").setAttribute("visible", true);
            document.getElementById("back-to-previous-page-button-container").emit("showBackButtonOnCover");
            document.getElementById("back-to-previous-page-button-container").setAttribute("material.opacity", 1.0);// show the back button for the application cover page

            document.getElementById("next-page-button-container").setAttribute("visible", true);
            document.getElementById("next-page-button-container").emit("showNextButtonOnCover");
            //document.getElementById("next-page-button-container").setAttribute("material.opacity", 1.0);   // show the back button for 

            document.getElementById("cARd-go-back-to-app-cover-page-button-container").style.opacity = 0;
            document.getElementById("cARd-open-app-cover-page-button-container").style.opacity = 0;

            document.getElementById("unibeat-application-panel").setAttribute("visible",true);
            document.getElementById("unibeat-application-panel").emit("showPanelUNI");

            document.getElementById("unibeat-application-secondary-panel").emit("showSecondaryPanelUNI");
            document.getElementById("unibeat-application-secondary-panel").setAttribute("visible",true);

            setTimeout(function(){
                //document.getElementById("cARd-go-back-to-app-cover-page-button-container").style.display = "none";
                document.getElementById("open-desktop-page-options-container").style.display = "none";
                document.getElementById("fuse-container").style.display = "none";
            }, 500);

            MarkerGridTracker.repressor.onApplicationSection.current = 0; // move onto first page in cARd app
            MarkerGridTracker.unibeat.active = true;

            timeDiffUNI = new Date().getTime();// MarkerGridTracker.unibeat.counter;
            MarkerGridTracker.unibeat.counter = timeDiffUNI;

        }
    });

    document.getElementById("cARd-open-app-cover-page-button-container").addEventListener("click", function(){
        window.open("./cvm","_blank");
        document.getElementById("cARd-go-back-to-app-cover-page-button-container").click();
    });
}