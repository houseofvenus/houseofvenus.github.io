/*
*   ---------------------------------------------
*   .LYOKO USER EXPERIENCE JS COMPILATION TARGET
*   DRAFT SPECIFICATION V 0.3.1
*   AUTHOR: PATRICE-MORGAN ONOLY [@starmaker2130]
*   ---------------------------------------------
*   TARGET DETAILS: POSTAR
*   NAME: postAR-ux.js
*   CREATION: 15.05.12020
*   LAST MODIFICATION: 15.05.12020
*   HOST: @houseofvenus
*/

// The width and height of the captured photo. We will set the

// width to the value defined here, but the height will be
// calculated based on the aspect ratio of the input stream.

var width = 320;    // We will scale the photo width to this
var height = 0;     // This will be computed based on the input stream

// |streaming| indicates whether or not we're currently streaming
// video from the camera. Obviously, we start at false.
var buttonHandlerAttachmentDelay = 100;

var streaming = false;

// The various HTML elements we need to configure or control. These
// will be set by the startup() function.

var video = null;
var canvas = null;
var photo = null;
var startbutton = null;

function startup() {
    console.log("BEGIN!!!");

    video = document.getElementById('video');
    canvas = document.getElementById('canvas');
    photo = document.getElementById('photo');
    startbutton = document.getElementById('startbutton');

    navigator.mediaDevices.getUserMedia({video: true, audio: false}).then(function(stream) {
        video.srcObject = stream;
        video.play();
    }).catch(function(err) {
        console.log("An error occurred: " + err);
    });

    video.addEventListener('canplay', function(ev){
        if (!streaming) {
            height = video.videoHeight / (video.videoWidth/width);

            // Firefox currently has a bug where the height can't be read from
            // the video, so we will make assumptions if this happens.

            if (isNaN(height)) {
                height = width / (4/3);
            }

            video.setAttribute('width', width);
            video.setAttribute('height', height);
            canvas.setAttribute('width', width);
            canvas.setAttribute('height', height);
            streaming = true;
        }
    }, false);

    startbutton.addEventListener('click', function(ev){
        takepicture();
        ev.preventDefault();
    }, false);

    clearphoto();
}

// Fill the photo with an indication that none has been
// captured.

function clearphoto() {
    var context = canvas.getContext('2d');
    context.fillStyle = "#AAA";
    context.fillRect(0, 0, canvas.width, canvas.height);

    var data = canvas.toDataURL('image/png');
    photo.setAttribute('src', data);
}

// Capture a photo by fetching the current contents of the video
// and drawing it into a canvas, then converting that to a PNG
// format data URL. By drawing it on an offscreen canvas and then
// drawing that to the screen, we can change its size and/or apply
// other changes before drawing it.

function takepicture() {
    var context = canvas.getContext('2d');
    if (width && height) {
        canvas.width = width;
        canvas.height = height;
        context.drawImage(video, 0, 0, width, height);

        var data = canvas.toDataURL('image/png');
        photo.setAttribute('src', data);
    } else {
        clearphoto();
    }
}

// Set up our event listener to run the startup process
// once loading is complete.

function openFullscreen() {
    let docEl = document.documentElement;

    if (docEl.requestFullscreen) {
        docEl.requestFullscreen();
    } else if (docEl.mozRequestFullScreen) { /* Firefox */
        docEl.mozRequestFullScreen();
    } else if (docEl.webkitRequestFullscreen) { /* Chrome, Safari and Opera */
        docEl.webkitRequestFullscreen();
    } else if (docEl.msRequestFullscreen) { /* IE/Edge */
        docEl.msRequestFullscreen();
    }
}

function handleFiles() {
    console.log("handle Files");
    if (!this.files.length) {
        fileList.innerHTML = "<p>No files selected!</p>";
    }
    else {
        fileList.innerHTML = "";
        const list = document.createElement("ul");
        fileList.appendChild(list);
        for (let i = 0; i < this.files.length; i++) {
            const li = document.createElement("li");
            li.style.display = "inline-block";
            list.appendChild(li);

            const img = document.createElement("img");
            img.src = URL.createObjectURL(this.files[i]);
            img.height = 250;
            img.onload = function() {
                URL.revokeObjectURL(this.src);
            }
            li.appendChild(img);
            const info = document.createElement("span");
            info.innerHTML = this.files[i].name + ": " + this.files[i].size + " bytes";
            li.appendChild(info);
        }
    }
}

function attachButtonHandlers(){
    document.getElementById("option-0-container").addEventListener("click", function(){
        startup();

        this.style.height = "100%";
        document.getElementById("option-1-container").style.height = 0;

        setTimeout(function(){
            document.getElementById("page-1-container").style.display = "block";

            setTimeout(function(){
                document.getElementById("page-0-container").style.opacity = 0;
                document.getElementById("page-1-container").style.opacity = 1.0;

                setTimeout(function(){
                    document.getElementById("page-0-container").style.display = "none";
                }, 500);

            }, 50);

        }, 500);
    });

    document.getElementById("option-1-container").addEventListener("click", function(){
        this.style.height = "100%";
        document.getElementById("option-0-container").style.height = 0;

        setTimeout(function(){
            document.getElementById("page-2-container").style.display = "block";

            setTimeout(function(){
                document.getElementById("page-0-container").style.opacity = 0;
                document.getElementById("page-2-container").style.opacity = 1.0;

                setTimeout(function(){
                    document.getElementById("page-0-container").style.display = "none";
                }, 500);

            }, 50);

        }, 500);
    });

    document.getElementById("uploadInput").addEventListener("change", handleFiles, false);

    document.getElementById("add-files-button").addEventListener("click", function(){
        document.getElementById("uploadInput").click();
    });

    document.getElementById("application-cover-page-container").addEventListener("click", function(){
        let coverPage = this;

        //openFullscreen(); <-- does not work on iOS so we are removing it for now

        coverPage.style.height = 0;

        setTimeout(function(){
            coverPage.style.display = "none";
        }, 500);
    });

    document.getElementById("generate-model-button").addEventListener("click", function(){
        document.getElementById("page-2-container").style.opacity = 0;
        document.getElementById("page-3-container").style.display = "block";

        setTimeout(function(){
            document.getElementById("page-3-container").style.opacity = 1.0;
        }, 50);

        setTimeout(function(){
            document.getElementById("page-2-container").style.display = "none";
            setTimeout(function(){
                //window.location.href = "http://houseofven.us/successTarget";
                document.getElementById("page-3-container").style.display = "none";
                document.getElementById("page-4-container").style.display = "block";
                document.getElementById("page-4-container").style.opacity = 1.0;
            }, 5000);
        }, 500);
        
        
    });
    
    document.getElementById("submit-publication-for-review-button-container").addEventListener("click", function(){
        document.getElementById("page-4-container").style.opacity = 0;
        document.getElementById("page-3-container").style.display = "block";

        setTimeout(function(){
            document.getElementById("page-3-container").style.opacity = 1.0;
        }, 50);

        setTimeout(function(){
            document.getElementById("page-2-container").style.display = "none";
            setTimeout(function(){
                window.location.href = "http://houseofven.us/successTarget";
                /*document.getElementById("page-4-container").style.display = "block";
                document.getElementById("page-4-container").style.opacity = 1.0;*/
            }, 5000);
        }, 500);
        
        
    });
}

function buildMarkup(){
    document.body.innerHTML = Experience.rawBuild.string();
}