var ImmersiveClassroom = {
    buttons: [
        {
            audio: "../media/audio/Alleluia.mp3" ,
            image: "../media/img/alleluia-cover.png" ,
            title: "Alleluia",
            author: "Brody",
            registration: {
                author: "starmakeritachi",
                lyokoin: 02250410219612020,
                ledgerspace: {
                    entityID: "left-hand-raised-button-immersive-entity-container"
                }
            }
        },
        {
            audio: "../media/audio/RainbowInTheDark.mp3",
            image: "../media/img/rainbow-in-the-dark-cover.png" ,
            title: "Rainbow In The Dark",
            author: "Das Racist",
            registration: {
                author: "starmakeritachi",
                lyokoin: 02250410219612023,
                ledgerspace: {
                    entityID: "right-hand-raised-button-immersive-entity-container"
                }
            }
        }
    ],
    focus: 0,
    priorFocus: null,
    timerStarted: false,
    timerStartTime: null,
    timerInterval: null,
    selectButton: function(destination){
        let self = this;
        //let audio = document.getElementById("native-audio-controller");
        //let source = document.getElementById("native-audio-stream-controller");
        
        if(self.priorFocus===destination){
            //console.("already initiated");
            console.log(`\n\n-----------------------\n----  NOW PLAYING   ---\n-----------------------\n ${self.buttons[self.focus].title} by ${self.buttons[self.focus].author}\n L ${self.buttons[self.focus].registration.lyokoin}`);
        }
        else{
            //audio.pause();
            self.priorFocus = self.focus;
            self.focus = destination;
            //audio.setAttribute("src", self.buttons[self.focus].audio);
            //audio.play();
            console.log(self.priorFocus)
            if(self.priorFocus!==null){
                //console.log(self.priorFocus);
                console.log(self.buttons[self.priorFocus].registration.ledgerspace.entityID);
                document.getElementById(self.buttons[self.priorFocus].registration.ledgerspace.entityID).setAttribute("material.opacity", 0.3);
            }
            
            for(let opacityArr = 0; opacityArr<self.buttons.length; opacityArr++){
                (function(){
                    if(self.focus===opacityArr&&!self.timerStarted){
                        self.timerStarted = true;
                        self.timerStartTime = Date.now();
                        let baseOpacity = 0.3;
                        self.timerInterval = setInterval(function(){
                            let timeSinceStart = Date.now();
                            baseOpacity+=0.023;
                            //console.log(baseOpacity);
                            document.getElementById(self.buttons[self.focus].registration.ledgerspace.entityID).setAttribute("material", "opacity", baseOpacity);
                            if(timeSinceStart-self.timerStartTime>2999){
                                clearInterval(self.timerInterval);
                                console.log("hand raised!!!");
                                document.getElementById("Immersive-Classroom-application-console").innerHTML = "Hand raised; teacher notified.";
                                self.timerStarted = false;
                                self.timerStartTime = null;
                                self.timerInterval = null;
                                
                            }
                        }, 100);
                        document.getElementById(self.buttons[self.focus].registration.ledgerspace.entityID).setAttribute("material", "opacity", baseOpacity);
                    }
                    else{
                        //console.log(opacityArr);
                        document.getElementById(self.buttons[opacityArr].registration.ledgerspace.entityID).setAttribute("material", "opacity", 0.3);
                    }
                })();
            }
            
        }
    }
};