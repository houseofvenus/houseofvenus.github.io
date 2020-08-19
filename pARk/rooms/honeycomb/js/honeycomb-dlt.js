/*
*   ----------------------------------------------
*   .LYOKO DLT RESPONSE LIST JS COMPILATION TARGET
*   DRAFT SPECIFICATION V 0.3.1
*   AUTHOR: PATRICE-MORGAN ONOLY [@starmaker2130]
*   ----------------------------------------------
*   TARGET DETAILS: FOODID (v.0.4.2)
*   NAME: foodid-dlt.js
*   CREATION: 16.05.12020
*   LAST MODIFICATION: 16.05.12020
*   HOST: @houseofvenus
*/


//connection.on("SERVERloadRestaurantMetaDataAtNodesOnCLIENT", 


function CLIENTconnectToSERVER(data){
    if(data.status){
        SERVERloadRestaurantMetaDataAtNodesOnCLIENT({status: true});
    }
}

function SERVERloadRestaurantMetaDataAtNodesOnCLIENT(data){
    if(data.status){
        let locations = Restaurants;
        //data.locations;
        for(var i=0; i<locations.length; i++){
            (function(){
                let currentLocation = {
                    marker: null,
                    position: locations[i].position,
                    icon: locations[i].icon,
                    name: locations[i].name,
                    rating: locations[i].rating,
                    description: locations[i].description,
                    tables: locations[i].tables
                };

                currentLocation.marker = new google.maps.Marker({
                    position: currentLocation.position,
                    map: map,
                    icon: {
                        url: currentLocation.icon,
                        size: new google.maps.Size(50, 50)
                    }
                });

                currentLocation.marker.addListener("click", function(){                            toggleRestaurantInfoPreview(currentLocation.name)
                });

                //console.log(currentLocation);
                //Restaurants.push(currentLocation);
            })();
        }
    }
}

//);
/*
connection.on("SERVERrevealCartButtonOnCLIENT", function(data){
    if(data.status){
        document.getElementById("checkout-cart-button-container").style.display = "block";
        setTimeout(function(){
            document.getElementById("checkout-cart-button-container").style.opacity = 1.0;
        }, 500);
    }
});

connection.on("SERVERremoveItemFromCheckoutCartOnCLIENT", function(data){
    let item = data.itemName;

    if(data.status){
        document.getElementById(`cart-item-${item}-container`).remove();
    }
});

connection.on("SERVERupdateItemCountInCartOnCLIENT", function(data){
    if(data.status){
        document.getElementById(`${data.target}-item-count-container`).innerHTML = data.post;
        console.log(`${data.target} item valued changed to ${data.post}`);
    }
});

connection.on("SERVERloadCartItemsForCheckoutOnCLIENT", function(data){
    let cartData = data.cart;
    let submitCart = document.createElement("div");
    let hideCart = document.createElement("div");

    submitCart.setAttribute("id", "submit-cart-for-checkout-button-container");
    submitCart.innerHTML = "submit order";

    hideCart.setAttribute("id", "hide-cart-button-container");
    hideCart.innerHTML = "continue shopping";

    pages[3].appendChild(hideCart);
    hideCart.addEventListener("click", function(){
        pages[3].style.height = 0;
        pages[3].style.opacity = 0;

        setTimeout(function(){
            pages[3].innerHTML = "";
            pages[3].style.display = "none";
        }, 500);

    });

    if(data.status){
        console.log("cart data");
        console.log(cartData);
        let items = Object.keys(cartData);
        items.forEach(function(item, index){
            let currentDiv = document.createElement("div");

            currentDiv.classList.add("cart-item-container");
            currentDiv.setAttribute("id",`cart-item-${item}-container`);

            currentDiv.innerHTML = `<div id="decrease-item-count-button-${item}" class="decrease-item-count-button-container">-</div><p class="item-name-container">${item}</p><p id="${item}-item-count-container" class="item-count-container">${cartData[item].count}</p><div id="increase-item-count-button-${item}" class="increase-item-count-button-container">+</div>`;
            pages[3].appendChild(currentDiv);

            document.getElementById(`increase-item-count-button-${item}`).addEventListener("click", function(){
                console.log("increase");


                connection.emit("CLIENTincreaseItemCountInCartOnSERVER", {status: true, itemName: item});
            });

            document.getElementById(`decrease-item-count-button-${item}`).addEventListener("click", function(){
                console.log("decrease");
                connection.emit("CLIENTdecreaseItemCountInCartOnSERVER", {status: true, itemName: item});
            });
        });


        pages[3].appendChild(submitCart);
        submitCart.addEventListener("click", function(){
            pages[3].style.height = 0;
            pages[3].style.opacity = 0;

            pages[4].style.display = "block";

            setTimeout(function(){
                pages[4].style.height = "100%";
                pages[4].style.opacity = 1.0;
            }, 500);

        });

        pages[3].style.display = "block";

        setTimeout(function(){
            pages[3].style.height = "100%";
            pages[3].style.opacity = 1.0;
        }, 50);

        /*
    }
});*/