document.addEventListener("DOMContentLoaded", function(){
    
    loadUI();

    toggleMobileMenuView();

    document.getElementById("hov-logo-container").addEventListener("click", function(){
        window.location.href = "./";
    });

    document.getElementById("house-of-venus-title-container").addEventListener("click", function(){
        window.location.href = "./";
    });

    document.getElementById("about-us-menu-option-container").addEventListener("click", function(){
        window.location.href = "./about";
    });

    document.getElementById("products-menu-option-container").addEventListener("click", function(){
        window.location.href = "./buy";
    });

    document.getElementById("mobile-menu-toggle-button-container").addEventListener("click", function(){
        toggleMobileMenuView();
    });       

    document.getElementById("build-your-own-button-container").addEventListener("click", function(){
        goToDoor();
    });

    window.addEventListener("resize", function(){
        toggleMobileMenuView();
    });
});