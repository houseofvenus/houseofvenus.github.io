
function loadUI(){
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
        window.location.href = "./en";
    });

    document.getElementById("products-menu-option-container").addEventListener("click", function(){
        window.location.href = "./products";
    });

    document.getElementById("start-video-button-container").addEventListener("click", function(){
        let self = this;
        let video = document.getElementById("video-container");

        video.style.display = "block";

        setTimeout(function(){
            video.style.opacity = 1.0
        }, 50);

        self.style.opacity = 0;
        video.play();

        setTimeout(function(){
            self.style.display = "none";

            video.onended = function(){
                //console.log("video ended!");
                self.style.display = "block";
                setTimeout(function(){
                    self.style.opacity = 1.0;
                }, 50);
            };

        }, 550)
    });

    document.getElementById("mobile-menu-toggle-button-container").addEventListener("click", function(){
        toggleMobileMenuView();
    });

    toggleMobileMenuView();

    window.addEventListener("resize", function(){
        toggleMobileMenuView();
    });

});

var mobileNavIsVisible = true;
var isDesktop = false;

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