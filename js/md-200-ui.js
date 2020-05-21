function buildMarkup(){
    document.getElementById("main-experience-container").insertAdjacentHTML("beforeend", `<a-marker id="nyt-marker-container" type="pattern" url="../media/pattern/pattern-nyt-marker-candidate.patt">
    <a-obj-model src="#lambo-obj" mtl="#lambo-mtl" scale="1 1 1"></a-obj-model>
</a-marker>`);
    
    document.getElementById("main-app-container").insertAdjacentHTML("afterbegin", `<div id="controller-cover-container">
<div id="dpad-buttons-container">
<div id="dpad-up-button-container" class="dpad-button-container"></div>
<div id="dpad-left-button-container" class="dpad-button-container"></div>
<div id="dpad-right-button-container" class="dpad-button-container"></div>
<div id="dpad-down-button-container" class="dpad-button-container"></div>
</div>
<div id="dpad-action-buttons-container">
<div id="dpad-alpha-action-button-container" class="dpad-action-button-container">a</div>
<div id="dpad-beta-action-button-container" class="dpad-action-button-container">b</div>
</div>
</div>`);
}