var mobileNavIsVisible = true;
var isDesktop = false;

function loadUI(){
    setTimeout(function(){
        document.getElementById("build-your-own-button-container").style.opacity = 1.0;
    }, 750);

    setTimeout(function(){
        document.getElementById("tag-line-container").style.opacity = 1.0;
    }, 125);    //250

    setTimeout(function(){
        document.getElementById("hov-logo-container").style.opacity = 1.0;
    }, 250);    //500

    setTimeout(function(){
        document.getElementById("house-of-venus-title-container").style.opacity = 1.0;
    }, 375);    //750

    setTimeout(function(){
        document.getElementById("products-menu-option-container").style.opacity = 1.0;
    }, 500);    //100

    setTimeout(function(){
        document.getElementById("about-us-menu-option-container").style.opacity = 1.0;
    }, 625);    //1250

    setTimeout(function(){
        document.getElementById("background-layer-container").style.opacity = 1.0; //0.8;
        document.getElementById("main-app-container").style.color = "white";
        
        document.getElementById("background-layer-container").style.backgroundImage = "url(../media/img/BlackMarble_720p.gif)";
        /*
        document.getElementById("background-layer-container").style.opacity = 0.4;
        */
    }, 1000);    //1250
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

function goToDoor(){
    setTimeout(function(){
        document.getElementById("build-your-own-button-container").style.opacity = 0;
    }, 750);

    setTimeout(function(){
        document.getElementById("tag-line-container").style.opacity = 0;
    }, 125);    //250

    setTimeout(function(){
        document.getElementById("hov-logo-container").style.opacity = 0;
    }, 250);    //500

    setTimeout(function(){
        document.getElementById("house-of-venus-title-container").style.opacity = 0;
    }, 375);    //750

    setTimeout(function(){
        document.getElementById("products-menu-option-container").style.opacity = 0;
    }, 500);    //100

    setTimeout(function(){
        document.getElementById("about-us-menu-option-container").style.opacity = 0;
    }, 625);    //1250

    setTimeout(function(){
        document.getElementById("background-layer-container").style.opacity = 0;
        document.getElementById("main-app-container").style.color = "black";
        /*
        document.getElementById("background-layer-container").style.opacity = 0.4;
        */
    }, 1000);    //1250

    setTimeout(function(){
        window.location.href = "./pARk/enter";
    }, 1500);
}

document.addEventListener("DOMContentLoaded", function(){
    loadUI();

    toggleMobileMenuView();

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

    document.getElementById("build-your-own-button-container").addEventListener("click", function(){
        goToDoor();
    });

    window.addEventListener("resize", function(){
        toggleMobileMenuView();
    });
});
