/*
*   ----------------------------------------------
*   .LYOKO USER INTERFACE JS COMPILATION TARGET
*   DRAFT SPECIFICATION V 0.3.1
*   AUTHOR: PATRICE-MORGAN ONOLY [@starmaker2130]
*   ----------------------------------------------
*   TARGET DETAILS: FOODID (v.0.4.2)
*   NAME: foodid-ui.js
*   CREATION: 14.05.12020
*   LAST MODIFICATION: 16.05.12020
*   HOST: @houseofvenus
*/

var Experience = {
    levels: 6,
    compositionTree: [],
    rawBuild: {
        string: function(){
            let compiledBuildStringFromCompositionTree = `<div id="main-app-wrapper-container">
    <div id="checkout-cart-button-container"></div>
    <div id="add-to-cart-overlay-container">
        <div id="added-item-name-container"></div>
        <div id="success-indicator-container"></div>
        <div id="success-indiator-label-container">Successfully added to cARt!</div>
    </div>
    <div id="page-0-container" class="page-container">
        <div id="logo-container">
            <div id="logo-container-symbol"></div>
            <div id="logo-container-label">Foodid</div>
            <div id="logo-container-sub-label">autonomous aerial delivery for suburbia</div>
        </div>
    </div>
    <div id="page-1-container" class="page-container">
        <div id="map"></div>
    </div>
    <!--<div id="permission"></div>-->
    <div id="page-2-container" class="page-container">
        <div id="restaurant-logo-container"></div>
        <div id="restaurant-name-container">Restaurant Name</div>
        <div id="restaurant-rating-container">****4.5</div>
        <div id="table-seating-chart" class="info-details-container"></div>
        <div id="restaurant-details-menu-container" class="info-details-container"></div>
        <div id="restaurant-description-container" class="info-preview-container">Brief description of restaurant/bar</div>
        <div id="see-tables-button-container" class="info-preview-container">see items</div>
        <div id="close-preview-button-container">close</div>
    </div>
    <div id="page-3-container" class="checkout-cart-button-page-container">

    </div>
    <div id="page-4-container" class="payment-options-page-container">
        <div id="apple-pay-payment-option-container" class="payment-option-container"></div>
        <div id="paypal-payment-option-container" class="payment-option-container"></div>
    </div>
    <div id="page-5-container" class="payment-loading-page-container">
        <div id="payment-loader-container"></div>
    </div>
</div>
`
            return compiledBuildStringFromCompositionTree;
        }
    }
}
