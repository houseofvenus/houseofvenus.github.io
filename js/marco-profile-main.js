document.addEventListener("DOMContentLoaded", function(){
    buildMarkup();
    setTimeout(function(){
        attachImmersiveButtonHandlers();
    }, 100);
});