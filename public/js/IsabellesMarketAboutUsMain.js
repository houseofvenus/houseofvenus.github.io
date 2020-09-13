document.addEventListener("DOMContentLoaded", function(){
    loadUI();

    toggleMobileMenuView();

    document.getElementById("im-logo-container").addEventListener("click", function(){
        window.location.href = "./";
    });

    document.getElementById("isabelle-s-market-title-container").addEventListener("click", function(){
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
    
    window.addEventListener("resize", function(){
        toggleMobileMenuView();
    });
});