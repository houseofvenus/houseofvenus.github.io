/*
*   ----------------------------------------------
*   .LYOKO USER EXPERIENCE JS COMPILATION TARGET
*   DRAFT SPECIFICATION V 0.3.1
*   AUTHOR: PATRICE-MORGAN ONOLY [@starmaker2130]
*   ----------------------------------------------
*   TARGET DETAILS: FOODID (v.0.4.2)
*   NAME: foodid-ux.js
*   CREATION: 14.05.12020
*   LAST MODIFICATION: 16.05.12020
*   HOST: @houseofvenus
*/

var map;
var connection = io.connect(location.host);
var Restaurants = [];
var pages, buttons;
var previewOpen = false;
var previewOn = null;
var fullViewOn = null;
var fullViewOpen = false;

function buildMarkup(){
    document.body.insertAdjacentHTML("afterbegin", Experience.rawBuild.string());
}

function attachButtonHandlers(){
    pages = [
        document.getElementById("page-0-container"),
        document.getElementById("page-1-container"),
        document.getElementById("page-2-container"),
        document.getElementById("page-3-container"),
        document.getElementById("page-4-container"),
        document.getElementById("page-5-container"),
    ];

    buttons = [
        document.getElementById("see-tables-button-container"),
        document.getElementById("close-preview-button-container"),
        document.getElementById("checkout-cart-button-container"),
        document.getElementById("apple-pay-payment-option-container"),
        document.getElementById("paypal-payment-option-container")
    ];

    pages[0].style.opacity = 1.0;
    pages[0].style.height = "100%";
    pages[0].style.display = "block";

    pages[0].addEventListener("click", function(){
        this.style.opacity = "0";
        this.style.height = "0";

        pages[1].style.display = "block";
        pages[1].style.height = "100%"

        setTimeout(function(){
            pages[0].style.display = "none";
        }, 500);

        //openFullscreen();

    });

    buttons[1].addEventListener("click", function(){
        toggleRestaurantInfoPreview(previewOn)
    });

    buttons[0].addEventListener("click", function(){
        if(fullViewOpen){
            console.log("the view is open already");
        }
        else{
            pages[2].style.height = "100%";

            document.getElementById("restaurant-details-menu-container").style.display = "block";
            document.getElementById("restaurant-details-menu-container").style.opacity = 1.0;

            document.getElementById("restaurant-details-menu-container").style.height = "200px";
           /* document.getElementById("restaurant-menu-container").style.display = "block";
            document.getElementById("restaurant-menu-container").style.opacity = 1.0;*/

            fullViewOpen = true;

            fillLocationMenu();
        }
    });

    buttons[2].addEventListener("click", function(){
        /*pages[3].style.display = "block";

        setTimeout(function(){
            pages[3].style.height = "100%";
            pages[3].style.opacity = 1.0;
        }, 50);*/
        connection.emit("CLIENTrequestCartItemsForCheckoutFromSERVER", {status: true});
    });

    buttons[3].addEventListener("click", function(){
        window.open("http://pay.apple.com", "_blank");
        pages[5].style.height = "100%";
        pages[5].style.opacity = 1.0;
    });

    buttons[4].addEventListener("click", function(){
        window.open("http://paypal.com", "_blank");
        pages[5].style.height = "100%";
        pages[5].style.opacity = 1.0;
    });
}

function openFullscreen() {
    let docEl = document.documentElement;

    if (docEl.requestFullscreen) {
        docEl.requestFullscreen();
    } else if (docEl.mozRequestFullScreen) { /* Firefox */
        docEl.mozRequestFullScreen();
    } else if (docEl.webkitRequestFullscreen) { /* Chrome, Safari and Opera */
        docEl.webkitRequestFullscreen();
    } else if (docEl.msRequestFullscreen) { /* IE/Edge */
        docEl.msRequestFullscreen();
    }
}

function closeFullscreen() {
    if (document.exitFullscreen) {
        document.exitFullscreen();
    } else if (document.mozCancelFullScreen) { /* Firefox */
        document.mozCancelFullScreen();
    } else if (document.webkitExitFullscreen) { /* Chrome, Safari and Opera */
        document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) { /* IE/Edge */
      document.msExitFullscreen();
    }
}

function closePreview(){
    pages[2].style.height = 0;
    pages[2].style.opacity = 0;

    setTimeout(function(){
        pages[2].style.display = "none";
    }, 500);

    previewOpen = false;
    previewOn = null;
}

function openPreview(focus){
    let target = focus;
    fullViewOn = target;

    pages[2].style.display = "block";
    setTimeout(function(){
        pages[2].style.height = "70%";
        pages[2].style.opacity = 1.0;
    }, 50)

    var j=0;

    while(j<Restaurants.length&&target!=Restaurants[j].name){
        j++;
    }

    document.getElementById("restaurant-logo-container").style.backgroundImage = `url(${Restaurants[j].icon})`;

    document.getElementById("restaurant-name-container").innerHTML = `${Restaurants[j].name}`;

    document.getElementById("restaurant-rating-container").innerHTML = `${Restaurants[j].rating}`;

    document.getElementById("restaurant-description-container").innerHTML = `${Restaurants[j].description}`;

    previewOpen = true;
    previewOn = target;
}

function addItemToCart(item){
    let itemName = item;
    console.log(`add ${itemName} to cart`);
    document.getElementById("added-item-name-container").textContent = itemName;

    document.getElementById("add-to-cart-overlay-container").style.display = "block";

    setTimeout(function(){
        document.getElementById("add-to-cart-overlay-container").style.top = "50%";
        document.getElementById("add-to-cart-overlay-container").style.opacity = 1.0;

        setTimeout(function(){
            document.getElementById("add-to-cart-overlay-container").style.opacity = 0;
            document.getElementById("add-to-cart-overlay-container").style.top = 0;

            setTimeout(function(){
                document.getElementById("add-to-cart-overlay-container").style.display = "none";
            }, 1000);
        },1450)
    }, 50);

    connection.emit("CLIENTaddItemToCartOnSERVER", {status: true, item: itemName});
}

function fillLocationMenu(){
    let locationMenu = document.getElementById("restaurant-details-menu-container");
    let y=0;
    let locationInView;
    let detailContainer;
    let nameStore = [];

    while(y<Restaurants.length&&fullViewOn!=Restaurants[y].name){
        y++;
    }

    locationInView = Restaurants[y];
    //console.log(locationInView);

    locationMenu.innerHTML +=`<div id="detail-wrapper-container"></div>`;
    detailContainer = document.getElementById("detail-wrapper-container");


    for(var z=0; z<locationInView.tables.length; z++){
        (function(){
            let currentResult = locationInView.tables[z];
            let currentIndex = z;
            detailContainer.innerHTML += `<div id="preview-detail-${currentIndex}" class="preview-detail-item-container">${currentResult.productName}</div>`;

            nameStore.push(currentResult.productName);

            document.getElementById(`preview-detail-${currentIndex}`).style.backgroundImage = `url(${currentResult.cover})`;

            console.log(`preview-detail-${currentIndex}`);
        })();
    }

    if(nameStore.length>0){
       nameStore.forEach(function(name, index){
            document.getElementById(`preview-detail-${index}`).addEventListener("click", function(){
                addItemToCart(name);
            });
        });
    }

    nameStore = [];
}

function emptyFilledLocation(){
    let locationMenu = document.getElementById("restaurant-details-menu-container");
    locationMenu.innerHTML = ``;
}

function toggleRestaurantInfoPreview(focus){
    let target = focus;

    console.log(`clicked on ${target}`);
    //console.log(pages);
    if(previewOn===target){
        console.log("I am currently on this page so you can toggle it away");

        if(fullViewOpen){

            pages[2].style.height = "100px";

            document.getElementById("restaurant-details-menu-container").style.display = "none";
            document.getElementById("restaurant-details-menu-container").style.opacity = 0;

            document.getElementById("restaurant-details-menu-container").style.height = 0;
            /*document.getElementById("restaurant-menu-container").style.display = "none";
            document.getElementById("restaurant-menu-container").style.opacity = 0;*/
            emptyFilledLocation();
            fullViewOpen = false;
        }

        closePreview();
    }
    else{
        if(previewOpen){
            closePreview();
            setTimeout(function(){
                if(previewOn!==target){
                    openPreview(target);
                }
            }, 550);
        }
        else{
            openPreview(target);
        }
    }
}

function showRestaurantInfoDetails(){

}

function initMap() {
    /* silver spring
    center: {lat: 38.9907, lng: -77.0261}
    */
    
    /* ellicott city
    center: {lat: 39.249620, lng: -76.836200}
    */
    map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 39.249620, lng: -76.836200},
        zoom: 13,
        styles: [
            {
                elementType: 'geometry', 
                stylers: [
                    {color: '#242f3e'},
                    {visibility: 'on'}
                ]
            },
            {
                elementType: 'labels.text.stroke',
                stylers: [
                    {color: '#242f3e'},
                    {visibility: 'on'}
                 ]
            },
            {
                elementType: 'labels.text.fill', stylers: [
                    {color: '#746855'},{visibility: 'on'}
                ]
            },
            {
              featureType: 'administrative.locality',
              elementType: 'labels.text.fill',
              stylers: [
                  {color: '#ffffff'}, {visibility: 'on'}
              ] //#d59563
            },
            {
              featureType: 'poi',
              elementType: 'labels',//.text.fill
              stylers: [
                  {color: '#ffffff'}, {visibility: 'off'}
              ] //#d59563
            },
            {
              featureType: 'poi.park',
              elementType: 'geometry',
              stylers: [{color: '#263c3f'}, {visibility: 'off'}]
            },
            {
              featureType: 'poi.park',
              elementType: 'labels.text.fill',
              stylers: [{color: '#6b9a76'}, {visibility: 'off'}]
            },
            {
              featureType: 'road',
              elementType: 'geometry',
              stylers: [{color: '#38414e'}, {visibility: 'on'}]
            },
            {
              featureType: 'road',
              elementType: 'geometry.stroke',
              stylers: [{color: '#212a37'}, {visibility: 'on'}]
            },
            {
              featureType: 'road',
              elementType: 'labels',//.text.fill
              stylers: [{color: '#9ca5b3'}, {visibility: 'off'}]
            },
            {
              featureType: 'road.highway',
              elementType: 'geometry',
              stylers: [{color: '#746855'}, {visibility: 'off'}]
            },
            {
              featureType: 'road.highway',
              elementType: 'geometry.stroke',
              stylers: [{color: '#1f2835'}, {visibility: 'off'}]
            },
            {
              featureType: 'road.highway',
              elementType: 'labels.text.fill',
              stylers: [{color: '#f3d19c'}, {visibility: 'off'}]
            },
            {
              featureType: 'transit',
              elementType: 'geometry',
              stylers: [{color: '#2f3948'}, {visibility: 'off'}]
            },
            {
              featureType: 'transit.station',
              elementType: 'labels',//.text.fill
              stylers: [{color: '#ffffff'}, {visibility: 'off'}] //#d59563
            },
            {
              featureType: 'water',
              elementType: 'geometry',
              stylers: [{color: '#17263c'}, {visibility: 'off'}]
            },
            {
              featureType: 'water',
              elementType: 'labels.text.fill',
              stylers: [{color: '#515c6d'}, {visibility: 'off'}]
            },
            {
              featureType: 'water',
              elementType: 'labels.text.stroke',
              stylers: [{color: '#17263c'}, {visibility: 'off'}]
            }
          ]
    });

    connection.emit("CLIENTconnectToSERVER", {status: true});

}