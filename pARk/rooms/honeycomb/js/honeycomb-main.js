/*
*   ----------------------------------------------
*   .LYOKO MAIN THREAD JS COMPILATION TARGET
*   DRAFT SPECIFICATION V 0.3.1
*   AUTHOR: PATRICE-MORGAN ONOLY [@starmaker2130]
*   ----------------------------------------------
*   TARGET DETAILS: FOODID (v.0.4.2)
*   NAME: foodid-main.js
*   CREATION: 15.05.12020
*   LAST MODIFICATION: 16.05.12020
*   HOST: @houseofvenus
*/

document.addEventListener("DOMContentLoaded", function(){
    buildMarkup();
    setTimeout(function(){
        attachButtonHandlers();
    }, 100);
});