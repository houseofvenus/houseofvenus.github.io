var mobileNavIsVisible = true;
var isDesktop = false;

function loadUI(){
    document.getElementById("video-container").style.display = "block";
    document.getElementById("isabelle-s-market-title-container").style.display = "block";
    document.getElementById("isabelle-s-market-title-container").style.opacity = 1.0;
    document.getElementById("isabelle-s-market-title-container").style.color = "black";
    
    setTimeout(function(){
        document.getElementById("im-logo-container").style.opacity = 1.0;
        document.getElementById("video-container").style.opacity = 1.0;
    }, 250);    //500

    setTimeout(function(){
        document.getElementById("isabelle-s-market-title-container").style.opacity = 1.0;
    }, 375);    //750

    setTimeout(function(){
        document.getElementById("products-menu-option-container").style.opacity = 1.0;
    }, 500);    //100

    setTimeout(function(){
        document.getElementById("about-us-menu-option-container").style.opacity = 1.0;
    }, 625);    //1250
}

function goToHomeView(){
    setTimeout(function(){
        document.getElementById("hov-logo-container").style.opacity = 0;
    }, 250);    //500

    setTimeout(function(){
        document.getElementById("isabelle-s-market-title-container").style.opacity = 0;
    }, 375);    //750

    setTimeout(function(){
        document.getElementById("products-menu-option-container").style.opacity = 0;
    }, 500);    //100

    setTimeout(function(){
        document.getElementById("about-us-menu-option-container").style.opacity = 0;
    }, 625);    //1250

    setTimeout(function(){
        window.location.href = "./";//door
    }, 1500);
}

function checkWindowWidth(){
    let winWidth = window.innerWidth;
    console.log("window width");
    console.log(winWidth);

    if(winWidth<990){
        return true;
    }
    else if(winWidth>1200){
        return false;
    }
    else{
        return true;
    }
}

function toggleMobileMenuView(){
    let isMobile = checkWindowWidth();
    if(isMobile){
        
        document.getElementById("isabelle-s-market-title-container").style.display = "none";
        
        if(mobileNavIsVisible){
            document.getElementById("navigation-menu-container").style.opacity = 0;
            document.getElementById("mobile-menu-toggle-button-container").style.backgroundImage = "url(../media/img/mobile-menu-icon.png)";

            /*setTimeout(function(){
                document.getElementById("navigation-menu-container").style.display = "none";
            }, 550);*/

            mobileNavIsVisible = false;
        }
        else{
            if(isDesktop){
                document.getElementById("navigation-menu-container").style.opacity = 0;
                document.getElementById("mobile-menu-toggle-button-container").style.backgroundImage = "url(../media/img/mobile-menu-icon.png)";

              /*  setTimeout(function(){
                    document.getElementById("navigation-menu-container").style.display = "none";
                }, 550);*/

                mobileNavIsVisible = false;
            }
            else{
                document.getElementById("navigation-menu-container").style.display = "block";
                document.getElementById("mobile-menu-toggle-button-container").style.backgroundImage = "url(../media/img/exit-menu-button-icon.png)";

                //setTimeout(function(){
                    document.getElementById("navigation-menu-container").style.opacity = 1.0;    
                //}, 50);

                mobileNavIsVisible = true;
            }
        }
        isDesktop = false;
    }
    else{
        document.getElementById("isabelle-s-market-title-container").style.display = "block";
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
