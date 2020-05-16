var Experience = {
    levels: 6,
    compositionTree: [],
    rawBuild: {
        string: function(){
            let compiledBuildStringFromCompositionTree = `
    <div id="application-cover-page-container"></div>
    <div id="page-0-container" class="page-container">
        <div id="option-0-container" class="option-container">
            <!--<div class="title-container" >Take Photo(s)</div>-->
        </div>
        <div id="option-1-container" class="option-container">
            <!--<div class="title-container">Upload Photo(s)</div>-->
        </div>
    </div>
    <div id="page-1-container" class="page-container">
        <div class="camera">
            <video id="video">Video stream not available.</video>
        </div>
        <canvas id="canvas">
        </canvas>
        <div class="output">
            <img id="photo" alt="The screen capture will appear in this box.">
        </div>
        <button id="startbutton">Take photo</button>
    </div>
    <div id="page-2-container" class="page-container">
        <form name="uploadForm" style="width: 100%; height: 50%;">
            <input id="uploadInput" type="file" name="myFiles" multiple />
            <div id="fileList" style="font-size: 60px; text-align: center;">    
            </div>
            <div>
                <div id="add-files-button">+</div>
                <div id="generate-model-button">continue</div>
            </div>
        </form>
    </div>
    <div id="page-3-container" class="page-container">
        <div id="loading-indicator-container"></div>
    </div>
    <div id="page-4-container" class="page-container">
        <div id="annotation-inputs-container">
            <textarea id="hashtag-input-container" rows="5" cols="33">Ajoutez les hashtags ici...</textarea>
            <textarea id="english-subtitles-input-container" rows="5" cols="33">Ecrivez la légende anglaise ici... </textarea>
            <textarea id="french-subtitles-input-container" rows="5" cols="33">Ecrivez la légende francaise ici...</textarea>
        </div>
        <div id="submit-publication-for-review-button-container">publish</div>
    </div>
`
        return compiledBuildStringFromCompositionTree;
}
    }
};