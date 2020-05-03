/*  LYOKO DIA
*   author: u/starmakeritachi 
*   pkn: 0.1.1
*
*   new branch
*   dias: LineManager, HTMLGenerator
*   
*   todo:
*   - add and name templates
*/

function generateMarkUp(type, name){
    const fs = require('fs');
    let data = "";
    let fileName = name;
    console.log("<%> LYOKO HTML GENERATOR DIA \n<%> author: u/starmakeritachi \n<%> pkn: 0.0.2 | Silver Spring");
    if(type==="template"){
        data+=`
<!DOCTYPE html>
<html>
<head>
    <title>Dinosaur| Old Row Maryland | v. 0.3.2</title>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width,initial-scale=1.0"/>
    <meta name="apple-mobile-web-app-capable" content="yes">
    <script src="./js/aframe100.js"></script><!--https://aframe.io/releases/1.0.0/-->
    <script src="./js/aframe-ar.js"></script><!-- https://raw.githack.com/jeromeetienne/AR.js/2.2.0/aframe/build/-->
    <script>
        document.addEventListener("DOMContentLoaded", function(){

        });
    </script>
</head>
<body style='margin : 0px; overflow: hidden;'>
    <audio style="position: absolute; bottom: 0; left: 0; z-index: 100;" controls loop>
        <source src="./media/audio/trex_low_freq_growl.mp3" type="audio/mpeg">
        Your browser does not support the audio element.
    </audio>
    <a-scene embedded arjs>
        <a-assets timeout="10000">
            <img id="earth-planet-object-texture" src="./media/texture/earthmap1k.jpg" preload="true" />

        </a-assets>

        <a-marker type="pattern" url="./media/pattern/pattern-mit-logo.patt">
            <a-entity
                      geometry="primitive:sphere; radius: 0.5;"
                      animation="property: rotation; to: 0 360 0; loop: true; dur: 10000; easing: linear"
                      position='0 0.5 0'
                      material='src: #earth-planet-object-texture'></a-entity>
        </a-marker>

        <a-marker preset="hiro">
            <a-entity
                      gltf-model="https://raw.githubusercontent.com/AR-js-org/AR.js/master/aframe/examples/image-tracking/nft/trex/scene.gltf"
                      scale="0.5 0.5 0.5"
                      position="0 0 0"
                      rotation="-90 0 0">
            </a-entity>
        </a-marker>

        <a-entity camera></a-entity>
    </a-scene>
</body>
</html>
        `
    }

    // Write data in 'Output.txt' .
    if(fileName==null){
        fileName = "./media/exp/output-"+ (new Date()).toString();
    }
    
    fs.writeFile("./media/exp/"+fileName+".html", data, (err) => { 

        // In case of a error throw err. 
        if (err) throw err; 
    });
}

function handleNextLine(lineToRead){
    lineManager.shift();
    if(lineManager.length>1){
        lineToRead.question(lineManager[0].line, text =>{
            handleCommands(text);
            handleNextLine(lineToRead);
        });
    }
    else if(lineManager.length==1){
        lineToRead.question(lineManager[0].line, text =>{
            handleCommands(text);
            lineToRead.close();
        });
    }
    else{
        console.log("ERROR 1 no lines to read from LineManager");
    }
    
}

function handleCommands(name){
    let rawCommandString = name;
    let commandParsedArray = [];
    let bulk = "";
    let nextSpace = -1;
    let exonComponent = "";
    console.log("<%> "+rawCommandString);
    if(rawCommandString!==null&&rawCommandString!==""){
        nextSpace = rawCommandString.indexOf(" ");
        while(nextSpace>-1){
            exonComponent = rawCommandString.substring(0, nextSpace);
            rawCommandString = rawCommandString.substring(nextSpace+1);
            commandParsedArray.push(exonComponent);
            nextSpace = rawCommandString.indexOf(" ");
            //console.log(rawCommandString);
        }
        commandParsedArray.push(rawCommandString);
        console.table(commandParsedArray);
        bulk+=commandParsedArray[0];
        bulk+=" ";
        bulk+=commandParsedArray[1];
    }
    
    switch(bulk){
        case "non":
            console.log("skip");
            break;
        case "html -t":
        case "html --template":
            console.log("<%> Generating HTML Template...");
            if(commandParsedArray[2]==null){
                generateMarkUp("template");
            }
            else{
                generateMarkUp("template", commandParsedArray[2]);
            }
            break;
        case "html -c":
        case "html --custom":
            console.log("<%> Generating Custom HTML...");
        default:
            console.log("<%> ERROR 2 no handler for this code.");
            console.log("<%> "+bulk);
            break;
    }
}

/*  LINE MANAGER DIA for LYOKO's CONVERSATIONAL API
*   author: u/starmakeritachi 
*   pkn: 0.0.1
*
*   currently static verstion
*   will add dynamic line management in next version
*
*/
var lineManager = [{    
        line: "-----------\nhow to command\n-----------\n[generator type] [category] [target name] [title] [immersive format]\n\n%> ",
    },{
        line: "%> ",
    }, {
        line: "%> ",
    }
];

const readline = require('readline').createInterface({          /*  create the ReadLine terminal
                                                                *   interface that will handle user
                                                                *   input and output from the terminal
                                                                */
    input: process.stdin,
    output: process.stdout                                        
});                                                             


readline.question(lineManager[0].line, name => {    /*  start up the interface with the first question 
                                                    *   this is a recurive function that will loop through
                                                    *   successive lines in the LineManager unitl there are none remaining*/
    
    handleCommands(name);
    handleNextLine(readline);
});
