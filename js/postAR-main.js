/*
*   ----------------------------------------------
*   .LYOKO MAIN THREAD STYLE COMPILATION TARGET
*   DRAFT SPECIFICATION V 0.3.1
*   AUTHOR: PATRICE-MORGAN ONOLY [@starmaker2130]
*   ----------------------------------------------
*   TARGET DETAILS: POSTAR
*   NAME: postAR-main.js
*   CREATION: 15.05.12020
*   LAST MODIFICATION: 15.05.12020
*   HOST: @houseofvenus
*/

document.addEventListener("DOMContentLoaded", function(){
    buildMarkup();
    setTimeout(function(){
        attachButtonHandlers();
    }, buttonHandlerAttachmentDelay);
});