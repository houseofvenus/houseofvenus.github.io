var ImmersiveAudio = {
    playlist: [
        {
            audio: "../media/audio/Alleluia.mp3" ,
            image: "../media/img/alleluia-cover.png" ,
            title: "Alleluia",
            author: "Brody",
            registration: {
                author: "starmakeritachi",
                lyokoin: 02250410219612020,
                ledgerspace: {
                    entityID: "alleluia-immersive-entity-container"
                }
            }
        },
        {
            audio: "../media/audio/MenorQueTres.mp3" ,
            image: "../media/img/menor-que-tres-cover.png" ,
            title: "Menor Que Tres",
            author: "lebigmac",
            registration: {
                author: "starmakeritachi",
                lyokoin: 02250410219612021,
                ledgerspace: {
                    entityID: "menor-que-tres-immersive-entity-container"
                }
            }
        },
        {
            audio: "../media/audio/HadEnoughRemix.mp3",
            image: "../media/img/had-enough-remix-cover.png" ,
            title: "Had Enough (Remix)",
            author: "Travis Scott",
            registration: {
                author: "starmakeritachi",
                lyokoin: 02250410219612022,
                ledgerspace: {
                    entityID: "had-enough-remix-immersive-entity-container"
                }
            }
        }
    ],
    focus: 0,
    priorFocus: null,
    jumpTo: function(destination){
        let self = this;
        let audio = document.getElementById("native-audio-controller");
        //let source = document.getElementById("native-audio-stream-controller");
        
        if(self.priorFocus===destination){
            //console.("already initiated");
            console.log(`\n\n-----------------------\n----  NOW PLAYING   ---\n-----------------------\n ${self.playlist[self.focus].title} by ${self.playlist[self.focus].author}\n L ${self.playlist[self.focus].registration.lyokoin}`);
        }
        else{
            audio.pause();
            self.priorFocus = self.focus;
            self.focus = destination;
            audio.setAttribute("src", self.playlist[self.focus].audio);
            audio.play();
           console.log(self.priorFocus)
            if(self.priorFocus!==null){
                console.log(self.playlist[self.priorFocus].registration.ledgerspace.entityID);
                //document.getElementById().setAttribute("material.opacity", 0.5); 
            }
            
            for(let opacityArr = 0; opacityArr<self.playlist.length; opacityArr++){
                (function(){
                    if(self.focus===opacityArr){
                        document.getElementById(self.playlist[self.focus].registration.ledgerspace.entityID).setAttribute("material", "opacity", 1.0);
                    }
                    else{
                        document.getElementById(self.playlist[opacityArr].registration.ledgerspace.entityID).setAttribute("material", "opacity", 0.5);
                    }
                })();
            }
            
        }
    }
};