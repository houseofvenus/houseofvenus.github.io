document.addEventListener("DOMContentLoaded", function(){
    buildMarkup();
    setTimeout(function(){
        attachImmersiveButtonListeners();
    }, 100);
});