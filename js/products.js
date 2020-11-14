var mobileNavIsVisible = true;
var isDesktop = false;

function loadUI(){   
    setTimeout(function(){
        document.getElementById("sia-product-icon-container").style.opacity = 1.0;
    }, 600);

    setTimeout(function(){
        document.getElementById("honeycomb-product-icon-container").style.opacity = 1.0;
    }, 750);

    setTimeout(function(){
        document.getElementById("rushmore-product-icon-container").style.opacity = 1.0;
    }, 500);

    setTimeout(function(){
        document.getElementById("honeycomb-product-icon-container").style.opacity = 1.0;
    }, 250);

    setTimeout(function(){
        document.getElementById("rooms-product-icon-container").style.opacity = 1.0;
    }, 350);

    setTimeout(function(){
        hideCorrespondingDescriptionContainer("sia");
        hideCorrespondingDescriptionContainer("honeycomb");
        hideCorrespondingDescriptionContainer("rushmore");
        hideCorrespondingDescriptionContainer("rooms");

        document.getElementById("sia-product-description-container").onmouseout = function(){
            hideCorrespondingDescriptionContainer("sia");
        };
        /*
        document.getElementById("sia-product-description-container").style.opacity = 0;
        document.getElementById("honeycomb-product-description-container").style.opacity = 0;
        document.getElementById("rushmore-product-description-container").style.opacity = 0;
        document.getElementById("honeycomb-product-description-container").style.opacity = 0;
        document.getElementById("rooms-product-description-container").style.opacity = 0;
        document.getElementById("tulse-1-product-description-container").style.opacity = 0;
        */
    }, 1000);
}

function showCorrespondingDescriptionContainer(productName){
    document.getElementById(`${productName}-product-description-container`).style.opacity = 1.0;
}

function hideCorrespondingDescriptionContainer(productName){
    /*console.log(productName);
    console.log(`#${productName}-product-description-container`);*/
    document.getElementById(`${productName}-product-description-container`).style.opacity = 0;
}

function checkWindowWidth(){
    let winWidth = window.innerWidth;
    console.log("window width");
    console.log(winWidth);

    if(winWidth<601){
        return true;
    }
    else{
        return false;
    }
}

function toggleMobileMenuView(){
    let isMobile = checkWindowWidth();
    if(isMobile){
        if(mobileNavIsVisible){
            document.getElementById("navigation-menu-container").style.opacity = 0;
            document.getElementById("mobile-menu-toggle-button-container").style.backgroundImage = "url(../media/img/mobile-menu-icon.png)";

            setTimeout(function(){
                document.getElementById("navigation-menu-container").style.display = "none";
            }, 550);

            mobileNavIsVisible = false;
        }
        else{
            if(isDesktop){
                document.getElementById("navigation-menu-container").style.opacity = 0;
                document.getElementById("mobile-menu-toggle-button-container").style.backgroundImage = "url(../media/img/mobile-menu-icon.png)";

                setTimeout(function(){
                    document.getElementById("navigation-menu-container").style.display = "none";
                }, 550);

                mobileNavIsVisible = false;
            }
            else{
                document.getElementById("navigation-menu-container").style.display = "block";
                document.getElementById("mobile-menu-toggle-button-container").style.backgroundImage = "url(../media/img/exit-menu-button-icon.png)";

                setTimeout(function(){
                    document.getElementById("navigation-menu-container").style.opacity = 1.0;    
                }, 50);

                mobileNavIsVisible = true;
            }
        }
        isDesktop = false;
    }
    else{
        isDesktop = true;
        mobileNavIsVisible = false;
        document.getElementById("navigation-menu-container").style.display = "block";
        setTimeout(function(){
            document.getElementById("navigation-menu-container").style.opacity = 1.0;    
        }, 50);
    }
    console.log(mobileNavIsVisible);
    console.log('toggle oy');
}

document.addEventListener("DOMContentLoaded", function(){

    loadUI();

    document.getElementById("hov-logo-container").addEventListener("click", function(){
        window.location.href = "./en";
    });

    document.getElementById("house-of-venus-title-container").addEventListener("click", function(){
        window.location.href = "./en";
    });

    document.getElementById("about-us-menu-option-container").addEventListener("click", function(){
        window.location.href = "./about";
    });

    document.getElementById("products-menu-option-container").addEventListener("click", function(){
        window.location.href = "./products";
    });

    document.getElementById("mobile-menu-toggle-button-container").addEventListener("click", function(){
        toggleMobileMenuView();
    });

    toggleMobileMenuView();

    window.addEventListener("resize", function(){
        toggleMobileMenuView();
    });

});