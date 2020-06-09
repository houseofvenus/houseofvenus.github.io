function buildMarkup(){
    document.getElementById("main-experience-container").insertAdjacentHTML("beforeend",`<a-marker id="nyt-marker-container" type="pattern" url="./media/pattern/pattern-nyt-marker-candidate.patt">
        <a-entity id="nyt-rotating-globe"
                  geometry="primitive: box; width: 1.0; height: 1.0; depth: 1.0;"
                  animation="property: rotation; to: 0 360 0; loop: true; dur: 10000; easing: linear; pauseEvents: stopRotatingNYT; startEvents: startRotatingNYT; resumeEvents: resumeRotatingNYT;"
                  position="0 0.5 0"
                  material="src: #nyt-app-icon-texture;">
        </a-entity>
        <a-entity id="nyt-application-panel"
                  geometry="primitive: plane; width: 5; height: 2.5;"
                  animation="property: material.opacity; to: 1.0; dur: 1000; easing: linear; startEvents: showPanelNYT;"
                  position="0 0.25 0"
                  rotation="-90 0 0"
                  visible="false"
                  material="src: #nyt-app-banner-texture; opacity: 0; side: double;">
        </a-entity>
        <a-entity id="mit-application-panel"
                  geometry="primitive: plane; width: 4; height: 3;"
                  animation="property: material.opacity; to: 1.0; dur: 1000; easing: linear; startEvents: showPanelMIT;"
                  position="0 0.25 0"
                  rotation="-90 0 0"
                  visible="false"
                  material="src: #mit-application-panel-texture; opacity: 0; side:double;">
        </a-entity>
        <a-entity id="hiro-application-panel"
                  geometry="primitive: plane; width: 4; height: 3;"
                  animation="property: material.opacity; to: 1.0; dur: 1000; easing: linear; startEvents: showPanelHIRO;"
                  position="0 0.25 0"
                  rotation="-90 0 0"
                  visible="false"
                  material="src: #hiro-application-panel-texture; opacity: 0; side:double;">
        </a-entity>
        <a-entity id="unibeat-application-panel"
                  geometry="primitive: plane; width: 1.5; height: 1.5;"
                  animation="property: material.opacity; to: 1.0; dur: 1000; easing: linear; startEvents: showPanelUNI; pauseEvents: hidePanelUNI;"
                  position="0 0.25 0"
                  rotation="-90 0 0"
                  visible="false"
                  material="color: yellow; opacity: 0; side:double;">
        </a-entity>



        <!--For NYT-->
        <!-- PANEL 0 -->
        <a-entity id="nyt-banner-container"
                  class="immersive-component"
                  geometry="primitive: plane; width: 4.5; height: 0.75"
                  position="0.25 1.2 -5"
                  rotation="-90 0 0"
                  visible="false"
                  material="side: double; src: #nyt-banner">
        </a-entity>

        <!-- PANEL 1 -->
        <a-entity id="date-container"
                  class="immersive-component front-page-banner-item-container"
                  geometry="primitive: plane; width: 1; height: 1"
                  position="-2.75 1.2 -4"
                  rotation="-90 0 0"
                  text="value: Monday\nJune 8,\n2020; color: white; opacity: 0; width: 6; align: center; font: https://cdn.aframe.io/fonts/Exo2Bold.fnt;"
                  visible="false"
                  animation="property: text.opacity; to: 1.0; dur: 1000; easing: linear; startEvents: showDateContainerPanel;"
                  material="transparent: true; opacity: 0;">
        </a-entity>

        <!-- PANEL 2 -->
        <a-entity id="front-page-banner-item-container-0" 
                  class="immersive-component front-page-banner-item-container"
                  geometry="primitive: plane; width: 1; height: 1"
                  position="-1.5 1.2 -4"
                  rotation="-90 0 0"
                  visible="false"
                  material="side: double; src: #the-daily-cover;"
                  animation__selectPanel2MoveToCenter="startEvents: selectPanel; property: position; to: 0 1.5 -2; easing: linear; dur: 3000;"
                  animation__selectPanel2GrowPanelWidth="property: geometry.width; to: 5; easing: linear; dur: 3000; startEvents: selectPanel;"
                  animation__selectPanel2GrowPanelHeight="property: geometry.height; to: 5; easing: linear; dur: 3000; startEvents: selectPanel;"><!-- #evening-brief-cover; -->
        </a-entity>

        <!-- PANEL 3 -->
        <a-entity id="front-page-banner-item-container-1" 
                  class="immersive-component front-page-banner-item-container"
                  geometry="primitive: plane; width: 1; height: 1"
                  position="-0.5 1.2 -4"
                  rotation="-90 0 0"
                  material="side: double; src: #together-apart-cover;"
                  visible="false"
                  animation__selectPanel3MoveToCenter="startEvents: selectPanel; property: position; to: 0 1.5 -2; easing: linear; dur: 3000;"
                  animation__selectPanel3GrowPanelWidth="property: geometry.width; to: 5; easing: linear; dur: 3000; startEvents: selectPanel;"
                  animation__selectPanel3GrowPanelHeight="property: geometry.height; to: 5; easing: linear; dur: 3000; startEvents: selectPanel;">
        </a-entity><!-- #coronavirus-cover;-->

        <!-- PANEL 4 -->
        <a-entity id="front-page-banner-item-container-2" 
                  class="immersive-component front-page-banner-item-container"
                  geometry="primitive: plane; width: 1; height: 1"
                  position="0.5 1.2 -4"
                  rotation="-90 0 0"
                  material="side: double; src: #dealbook-cover;"
                  visible="false"
                  animation__selectPanel4MoveToCenter="startEvents: selectPanel; property: position; to: 0 1.5 -2; easing: linear; dur: 3000;"
                  animation__selectPanel4GrowPanelWidth="property: geometry.width; to: 5; easing: linear; dur: 3000; startEvents: selectPanel;"
                  animation__selectPanel4GrowPanelHeight="property: geometry.height; to: 5; easing: linear; dur: 3000; startEvents: selectPanel;">
        </a-entity><!-- #book-review-cover;    #modern-love-cover;-->

        <!-- PANEL 5 -->
        <a-entity id="front-page-banner-item-container-3" 
                  class="immersive-component front-page-banner-item-container"
                  geometry="primitive: plane; width: 1.5; height: 1"
                  position="1.75 1.2 -4"
                  rotation="-90 0 0"
                  material="side: double; src: #stock-cover;"
                  visible="false"
                  animation__selectPanel5MoveToCenter="property: position; to: 0 1.5 -5.5; easing: linear; dur: 3000; startEvents: selectPanel;">
        </a-entity>

        <!-- PANEL 6 -->
        <a-entity id="front-page-banner-item-container-4" 
                  class="immersive-component front-page-banner-item-container weather-preview-container"
                  geometry="primitive: plane; width: 1.5; height: 1"
                  position="3.3 1.2 -4"
                  rotation="-90 0 0"
                  material="side: double; src: #weather-preview-cover;"
                  visible="false"
                  animation__selectPanel6MoveToCenter="property: position; to: 0 1.5 -5.5; easing: linear; dur: 3000; startEvents: selectPanel;">
        </a-entity>

        <!-- PANEL 7 -->
        <a-entity id="right-side-banner-item-container-0" 
                  class="immersive-component right-side-banner-item-container"
                  geometry="primitive: plane; width: 1.5; height: 1"
                  position="3.3 1.2 -3"
                  rotation="-90 0 0"
                  material="side: double; src: #jigsaw-puzzle-cover"
                  visible="false"
                  animation__selectPanel7MoveToCenter="property: position; to: 0 1.5 -5.5; easing: linear; dur: 3000; startEvents: selectPanel;"><!--#a-single-gesture-cover #chuck-shumer-coronavirus-cover;-->
        </a-entity>

        <!-- PANEL 8 -->
        <a-entity id="right-side-banner-item-container-1" class="immersive-component right-side-banner-item-container"
                  geometry="primitive: plane; width: 1.5; height: 1"
                  position="3.3 1.2 -2"
                  rotation="-90 0 0"
                  material="side: double; src: #together-apart-cover;"
                  visible="false"
                  animation__selectPanel8MoveToCenter="property: position; to: 0 1.5 -5.5; easing: linear; dur: 3000; startEvents: selectPanel;"><!-- #virus-stimulus-art-cover;-->
        </a-entity>

        <!-- PANEL 9 -->
        <a-entity id="right-side-banner-item-container-2" class="immersive-component right-side-banner-item-container"
                  geometry="primitive: plane; width: 1.5; height: 1"
                  position="3.3 1.2 -1"
                  rotation="-90 0 0"
                  material="side: double; src: #streaming-pro-cover;"
                  visible="false"
                  animation__selectPanel9MoveToCenter="property: position; to: 0 1.5 -5.5; easing: linear; dur: 3000; startEvents: selectPanel;">
        </a-entity>

        <!-- PANEL 10 -->
        <a-entity id="left-side-banner-item-container-0" class="immersive-component left-side-banner-item-container"
                  geometry="primitive: plane; width: 1.5; height: 2"
                  position="-2.8 1.2 -2.25"
                  rotation="-90 0 0"
                  material="side: double; src: #opinion-image-cover;"
                  visible="false"
                  animation__selectPanel10MoveToCenter="property: position; to: 0 1.5 -5.5; easing: linear; dur: 3000; startEvents: selectPanel;">
        </a-entity>

        <!-- PANEL 11 -->
        <a-entity id="left-side-banner-item-container-1" class="immersive-component left-side-banner-item-container"
                  geometry="primitive: plane; width: 1.5; height: 2"
                  position="-2.8 1.2 -0.25"
                  rotation="-90 0 0"
                  material="side: double; src: #opinion-story-preview;"
                  visible="false"
                  animation__selectPanel11MoveToCenter="property: position; to: 0 1.5 -5.5; easing: linear; dur: 3000; startEvents: selectPanel;">
        </a-entity>

        <!-- PANEL 12 -->
        <a-entity id="bottom-banner-item-container-0" class="immersive-component bottom-banner-item-container"
                  geometry="primitive: plane; width: 2.85; height: 1.5"
                  position="-0.45 1.2 0.5"
                  rotation="-90 0 0"
                  material="side: double; src: #science-section-cover;"
                  visible="false"
                  animation__selectPanel12MoveToCenter="property: position; to: 0 1.5 -5.5; easing: linear; dur: 3000; startEvents: selectPanel;">
        </a-entity>

        <!-- PANEL 13 -->
        <a-entity id="bottom-banner-item-container-1" class="immersive-component bottom-banner-item-container"
                  geometry="primitive: plane; width: 2.85; height: 1.5"
                  position="2.65 1.2 0.5"
                  rotation="-90 0 0"
                  material="side: double; src: #technology-section-cover;"
                  visible="false"
                  animation__selectPanel13MoveToCenter="property: position; to: 0 1.5 -5.5; easing: linear; dur: 3000; startEvents: selectPanel;">
        </a-entity>

        <!-- PANEL 14 -->
        <a-entity id="other-stories-banner-item-container-0" class="immersive-component other-stories-banner-item-container"
                  geometry="primitive: plane; width: 2; height: 2"
                  position="-1 1.2 2.5"
                  rotation="-90 0 0"
                  material="side: double; src: #arts-section-cover;"
                  visible="false"
                  animation__selectPanel14MoveToCenter="property: position; to: 0 1.5 -5.5; easing: linear; dur: 3000; startEvents: selectPanel;">
        </a-entity>

        <!-- PANEL 15 -->
        <a-entity id="other-stories-banner-item-container-1" class="immersive-component other-stories-banner-item-container"
                  geometry="primitive: plane; width: 2; height: 2"
                  position="1.25 1.2 2.5"
                  rotation="-90 0 0"
                  material="side: double; src: #business-section-cover;"
                  visible="false"
                  animation__selectPanel15MoveToCenter="property: position; to: 0 1.5 -5.5; easing: linear; dur: 3000; startEvents: selectPanel;">
        </a-entity>

        <!-- PANEL 16 -->
        <a-entity id="other-stories-banner-item-container-2" class="immersive-component other-stories-banner-item-container"
                  geometry="primitive: plane; width: 2; height: 2"
                  position="3.5 1.2 2.5"
                  rotation="-90 0 0"
                  material="side: double; src: #sports-section-cover;"
                  visible="false"
                  animation__selectPanel16MoveToCenter="property: position; to: 0 1.5 -5.5; easing: linear; dur: 3000; startEvents: selectPanel;"><!--#books-section-cover;-->
        </a-entity>

<!---this is where the fuse container video is--->
        <a-entity id="fuse-container-video-container" class="immersive-component"
                  geometry="primitive: plane; width: 4.5; height: 3"
                  position="0.25 0.5 -1.9"
                  rotation="-90 0 0"
                  material="side: double; color: black; opacity: 1.0; transparent: false;"
                  visible="false"
                  animation__fuseVideo="property: position; to: 0.25 1.4 -1.9; dur: 2500; easing: linear; startEvents: showFuseContainerVideo;"
                  animation__hideFuseVideo="property: position; from: 0.25 1.4 -1.9; to: 0.25 0.5 -1.9; dur: 2500; easing: linear; startEvents: hideFuseContainerVideo;">
        </a-entity>

        <!-- start of the photo gallery -->
        <!-- PANEL 17 -->
        <a-entity id="front-page-main-cover-0" class="immersive-component"
                  geometry="primitive: plane; width: 4.5; height: 3"
                  position="0.25 1.2 -1.9"
                  rotation="-90 0 0"
                  material="side: double; src: #main-cover-image-0; opacity: 0; transparent: false;"
                  visible="false"
                  animation__hideCoverZeroTrans="property: material.transparent; from: false; to: true; dur: 50; delay: 2000; startEvents: hideCoverZero;"
                  animation__hideCoverZeroOpa="property: material.opacity; from: 1.0; to: 0; dur: 2000; startEvents: hideCoverZero;"
                  animation__showCoverZeroTrans="property: material.transparent; from: true; to: false; dur: 50; delay: 2000; startEvents: showCoverZero;"
                  animation__showCoverZeroOpa="property: material.opacity; from: 0; to: 1.0; dur: 2000; startEvents: showCoverZero;">
        </a-entity><!--animation__showCoverOneTrans="property: material.transparent; from: true; to : false; dur: 50; delay: 12000; easing: linear;"-->

        <!-- PANEL 18 -->
        <a-entity id="front-page-main-cover-1" class="immersive-component"
                  geometry="primitive: plane; width: 4.5; height: 3"
                  position="0.25 1.2 -1.9"
                  rotation="-90 0 0"
                  material="side: double; src: #main-cover-image-1; opacity: 0; transparent: true;"
                  visible="false"
                  animation__showCoverOneOpa="property: material.opacity; from: 0; to : 1.0; dur: 2000; startEvents: showCoverOne; easing: linear;"
                  animation__showCoverOneTrans="property: material.transparent; from: true; to: false; dur: 50; delay: 2000; startEvents: showCoverOne; easing: linear;"
                  animation__hideCoverOneOpa="property: material.opacity; from: 1.0; to : 0; dur: 2000; startEvents: hideCoverOne; easing: linear;"  
                  animation__hideCoverOneTrans="property: material.transparent; from: true; to : false; dur: 50; delay: 2000; startEvents: hideCoverOne; easing: linear;">
        </a-entity>

        <!-- PANEL 19 -->
        <a-entity id="front-page-main-cover-2" class="immersive-component"
                  geometry="primitive: plane; width: 4.5; height: 3"
                  position="0.25 1.2 -1.9"
                  rotation="-90 0 0"
                  material="side: double; src: #main-cover-image-2; opacity: 0; transparent: true;"
                  animation__showCoverTwoOpa="property: material.opacity; from: 0; to : 1.0; dur: 2000; startEvents: showCoverTwo; easing: linear;"
                  animation__showCoverTwoTrans="property: material.transparent; from: false; to: true; dur: 50; delay: 2000; startEvents: showCoverTwo; easing: linear;"
                  animation__hideCoverTwoOpa="property: material.opacity; from: 1.0; to : 0; dur: 2000; startEvents: hideCoverTwo; easing: linear;"
                  animation__hideCoverTwoTrans="property: material.transparent; from: false; to: true; dur: 50; delay: 2000; startEvents: hideCoverTwo; easing: linear;">
        </a-entity>

        <!-- PANEL 20 -->
        <a-entity id="front-page-main-cover-3" class="immersive-component"
                  geometry="primitive: plane; width: 4.5; height: 3"
                  position="0.25 1.2 -1.9"
                  rotation="-90 0 0"
                  material="side: double; src: #main-cover-image-3; opacity: 0; transparent: true;"
                  visible="false"
                  animation__showCoverThreeOpa="property: material.opacity; from: 0; to : 1.0; dur: 2000; startEvents: showCoverThree; easing: linear;"
                  animation__showCoverThreeTrans="property: material.transparent; from: true; to: false; dur: 50; delay: 2000; startEvents: showCoverThree; easing: linear;"
                  animation__hideCoverThreeOpa="property: material.opacity; from: 1.0; to : 0; dur: 2000; startEvents: hideCoverThree; easing: linear;"
                  animation__hideCoverThreeTrans="property: material.transparent; from: true; to : false; dur: 50; delay: 2000; startEvents: hideCoverThree; easing: linear;">
        </a-entity>

        <!-- PANEL 21 -->
        <a-entity id="front-page-main-cover-4" class="immersive-component"
                  geometry="primitive: plane; width: 4.5; height: 3"
                  position="0.25 1.2 -1.9"
                  rotation="-90 0 0"
                  material="side: double; src: #main-cover-image-4; opacity: 0; transparent: true;"
                  visible="false"
                  animation__showCoverFourOpa="property: material.opacity; from: 0; to : 1.0; dur: 2000; startEvents: showCoverFour; easing: linear;"
                  animation__showCoverFourTrans="property: material.transparent; from: true; to: false; dur: 50; delay: 2000; startEvents: showCoverFour; easing: linear;"  
                  animation__hideCoverFourOpa="property: material.opacity; from: 1.0; to : 0; dur: 2000; startEvents: hideCoverFour; easing: linear;"
                  animation__hideCoverFourTrans="property: material.transparent; from: true; to : false; dur: 50; delay: 2000; startEvents: hideCoverFour; easing: linear;">
        </a-entity>

        <!-- PANEL 22 -->
        <a-entity id="front-page-main-cover-5" class="immersive-component"
                  geometry="primitive: plane; width: 4.5; height: 3"
                  position="0.25 1.2 -1.9"
                  rotation="-90 0 0"
                  material="side: double; src: #main-cover-image-5; opacity: 0; transparent: true;"
                  visible="false"
                  animation__showCoverFiveOpa="property: material.opacity; from: 0; to : 1.0; dur: 2000; startEvents: showCoverFive; easing: linear;"
                  animation__showCoverFiveTrans="property: material.transparent; from: true; to: false; dur: 50; delay: 2000; startEvents: showCoverFive; easing: linear;"
                  animation__hideCoverFiveOpa="property: material.opacity; from: 1.0; to : 0; dur: 2000; startEvents: hideCoverFive; easing: linear;"
                  animation__hideCoverThreeTrans="property: material.transparent; from: true; to : false; dur: 50; startEvents: hideCoverFive; easing: linear;">
        </a-entity>

        <!-- PANEL 23 -->
        <a-entity id="front-page-main-cover-6" class="immersive-component"
                  geometry="primitive: plane; width: 4.5; height: 3"
                  position="0.25 1.2 -1.9"
                  rotation="-90 0 0"
                  material="side: double; src: #main-cover-image-6; opacity: 0; transparent: true;"
                  visible="false"
                  animation__showCoverSixOpa="property: material.opacity; from: 0; to : 1.0; dur: 2000; startEvents: showCoverSix; easing: linear;"
                  animation__showCoverSixTrans="property: material.transparent; from: true; to: false; dur: 50; delay: 2000; startEvents: showCoverSix; easing: linear;"
                  animation__hideCoverSixOpa="property: material.opacity; from: 1.0; to : 0; dur: 2000; startEvents: hideCoverSix; easing: linear;"
                  animation__hideCoverSixTrans="property: material.transparent; from: true; to : false; dur: 50; startEvents: hideCoverSix; easing: linear;">
        </a-entity>

        <!-- PANEL 24 -->
        <a-entity id="front-page-main-cover-7" class="immersive-component"
                  geometry="primitive: plane; width: 4.5; height: 3"
                  position="0.25 1.2 -1.9"
                  rotation="-90 0 0"
                  material="side: double; src: #main-cover-image-7; opacity: 0; transparent: true;"
                  visible="false"
                  animation__showCoverSevenOpa="property: material.opacity; from: 0; to : 1.0; dur: 2000; startEvents: showCoverSeven; easing: linear;"
                  animation__showCoverSevenTrans="property: material.transparent; from: true; to: false; dur: 50; delay: 2000; startEvents: showCoverSeven; easing: linear;"
                  animation__hideCoverSevenOpa="property: material.opacity; from: 1.0; to : 0; dur: 2000; startEvents: hideCoverSeven; easing: linear;"
                  animation__hideCoverThreeTrans="property: material.transparent; from: true; to : false; dur: 50; delay: 2000; startEvents: hideCoverSeven; easing: linear;">
        </a-entity>

        <!-- PANEL 25 -->
        <a-entity id="front-page-main-cover-8" class="immersive-component"
                  geometry="primitive: plane; width: 4.5; height: 3"
                  position="0.25 1.2 -1.9"
                  rotation="-90 0 0"
                  material="side: double; src: #main-cover-image-8; opacity: 0; transparent: true;"
                  visible="false"
                  animation__showCoverEightOpa="property: material.opacity; from: 0; to : 1.0; dur: 2000; startEvents: showCoverEight easing: linear;"
                  animation__showCoverEightTrans="property: material.transparent; from: true; to: false; dur: 50; delay: 2000; startEvents: showCoverEight; easing: linear;"
                  animation__hideCoverEightOpa="property: material.opacity; from: 1.0; to : 0; dur: 2000; startEvents: hideCoverEight; easing: linear;"
                  animation__hideCoverEightTrans="property: material.transparent; from: true; to : false; dur: 50; delay: 2000; startEvents: hideCoverEight; easing: linear;">
        </a-entity>
        <!---->



        <!--For BARRON's-->
        <!-- PANEL 0 -->
        <a-entity id="barrons-banner-container"
                  class="immersive-component"
                  geometry="primitive: plane; width: 4.5; height: 3"
                  position="0.25 1.15 -5.5"
                  rotation="-90 0 0"
                  visible="false"
                  material="side: double; src: #hiro-application-panel-texture">
        </a-entity>

        <!-- PANEL 1 -->
        <a-entity id="barrons-date-container"
                  class="immersive-component front-page-banner-item-container"
                  geometry="primitive: plane; width: 1; height: 1"
                  position="-2.75 1.2 -4"
                  rotation="-90 0 0"
                  text="value: Saturday\nMay 9,\n2020; color: black; width: 6; align: center; font: 	https://cdn.aframe.io/fonts/Exo2Bold.fnt;"
                  visible="false"
                  animation="property: material.opacity; to: 1.0; dur: 1000; easing: linear; startEvents: showDateContainerPanel;"
                  material="transparent: true; opacity: 0;">
        </a-entity>

        <!-- PANEL 2 -->
        <a-entity id="barrons-front-page-banner-item-container-0" 
                  class="immersive-component front-page-banner-item-container"
                  geometry="primitive: plane; width: 1; height: 1"
                  position="-1.5 1.2 -4"
                  rotation="-90 0 0"
                  visible="false"
                  material="side: double; src: #streetwise-cover;"
                  animation__selectPanel2MoveToCenter="startEvents: selectPanel; property: position; to: 0 1.5 -2; easing: linear; dur: 3000;"
                  animation__selectPanel2GrowPanelWidth="property: geometry.width; to: 5; easing: linear; dur: 3000; startEvents: selectPanel;"
                  animation__selectPanel2GrowPanelHeight="property: geometry.height; to: 5; easing: linear; dur: 3000; startEvents: selectPanel;"><!-- #evening-brief-cover; -->
        </a-entity>

        <!-- PANEL 3 -->
        <a-entity id="barrons-front-page-banner-item-container-1" 
                  class="immersive-component front-page-banner-item-container"
                  geometry="primitive: plane; width: 1; height: 1"
                  position="-0.5 1.2 -4"
                  rotation="-90 0 0"
                  material="side: double; src: #luxury-listings-cover;"
                  visible="false"
                  animation__selectPanel3MoveToCenter="startEvents: selectPanel; property: position; to: 0 1.5 -2; easing: linear; dur: 3000;"
                  animation__selectPanel3GrowPanelWidth="property: geometry.width; to: 5; easing: linear; dur: 3000; startEvents: selectPanel;"
                  animation__selectPanel3GrowPanelHeight="property: geometry.height; to: 5; easing: linear; dur: 3000; startEvents: selectPanel;">
        </a-entity><!-- #coronavirus-cover;-->

        <!-- PANEL 4 -->
        <a-entity id="barrons-front-page-banner-item-container-2" 
                  class="immersive-component front-page-banner-item-container"
                  geometry="primitive: plane; width: 1; height: 1"
                  position="0.5 1.2 -4"
                  rotation="-90 0 0"
                  material="side: double; src: #funds-main-article-cover;"
                  visible="false"
                  animation__selectPanel4MoveToCenter="startEvents: selectPanel; property: position; to: 0 1.5 -2; easing: linear; dur: 3000;"
                  animation__selectPanel4GrowPanelWidth="property: geometry.width; to: 5; easing: linear; dur: 3000; startEvents: selectPanel;"
                  animation__selectPanel4GrowPanelHeight="property: geometry.height; to: 5; easing: linear; dur: 3000; startEvents: selectPanel;">
        </a-entity><!-- #book-review-cover;    #modern-love-cover;-->

        <!-- PANEL 5 -->
        <a-entity id="barrons-front-page-banner-item-container-3" 
                  class="immersive-component front-page-banner-item-container"
                  geometry="primitive: plane; width: 1.5; height: 1"
                  position="1.75 1.2 -4"
                  rotation="-90 0 0"
                  material="side: double; src: #100-most-influential-women-cover;"
                  visible="false"
                  animation__selectPanel5MoveToCenter="property: position; to: 0 1.5 -5.5; easing: linear; dur: 3000; startEvents: selectPanel;">
        </a-entity>

        <!-- PANEL 6 -->
        <a-entity id="barrons-front-page-banner-item-container-4" 
                  class="immersive-component front-page-banner-item-container weather-preview-container"
                  geometry="primitive: plane; width: 1.5; height: 1"
                  position="3.3 1.2 -4"
                  rotation="-90 0 0"
                  material="side: double; src: #weather-preview-cover;"
                  visible="false"
                  animation__selectPanel6MoveToCenter="property: position; to: 0 1.5 -5.5; easing: linear; dur: 3000; startEvents: selectPanel;">
        </a-entity>

        <!-- PANEL 7 -->
        <a-entity id="barrons-right-side-banner-item-container-0" 
                  class="immersive-component right-side-banner-item-container"
                  geometry="primitive: plane; width: 1.5; height: 1"
                  position="3.3 1.2 -3"
                  rotation="-90 0 0"
                  material="side: double; src: #weeks-best-story-cover;"
                  visible="false"
                  animation__selectPanel7MoveToCenter="property: position; to: 0 1.5 -5.5; easing: linear; dur: 3000; startEvents: selectPanel;"><!--#a-single-gesture-cover #chuck-shumer-coronavirus-cover;-->
        </a-entity>

        <!-- PANEL 8 -->
        <a-entity id="barrons-right-side-banner-item-container-1" class="immersive-component right-side-banner-item-container"
                  geometry="primitive: plane; width: 1.5; height: 1"
                  position="3.3 1.2 -2"
                  rotation="-90 0 0"
                  material="side: double; src: #economy-and-policy-story-cover;"
                  visible="false"
                  animation__selectPanel8MoveToCenter="property: position; to: 0 1.5 -5.5; easing: linear; dur: 3000; startEvents: selectPanel;"><!-- #virus-stimulus-art-cover;-->
        </a-entity>

        <!-- PANEL 9 -->
        <a-entity id="barrons-right-side-banner-item-container-2" class="immersive-component right-side-banner-item-container"
                  geometry="primitive: plane; width: 1.5; height: 1"
                  position="3.3 1.2 -1"
                  rotation="-90 0 0"
                  material="side: double; src: #high-yield-story-cover;"
                  visible="false"
                  animation__selectPanel9MoveToCenter="property: position; to: 0 1.5 -5.5; easing: linear; dur: 3000; startEvents: selectPanel;">
        </a-entity>

        <!-- PANEL 10 -->
        <a-entity id="barrons-left-side-banner-item-container-0" class="immersive-component left-side-banner-item-container"
                  geometry="primitive: plane; width: 1.5; height: 2"
                  position="-2.8 1.2 -2.25"
                  rotation="-90 0 0"
                  material="side: double; src: #investing-story-cover;"
                  visible="false"
                  animation__selectPanel10MoveToCenter="property: position; to: 0 1.5 -5.5; easing: linear; dur: 3000; startEvents: selectPanel;">
        </a-entity>

        <!-- PANEL 11 -->
        <a-entity id="barrons-left-side-banner-item-container-1" class="immersive-component left-side-banner-item-container"
                  geometry="primitive: plane; width: 1.5; height: 2"
                  position="-2.8 1.2 -0.25"
                  rotation="-90 0 0"
                  material="side: double; src: #retirement-story-cover;"
                  visible="false"
                  animation__selectPanel11MoveToCenter="property: position; to: 0 1.5 -5.5; easing: linear; dur: 3000; startEvents: selectPanel;">
        </a-entity>

        <!-- PANEL 12 -->
        <a-entity id="barrons-bottom-banner-item-container-0" class="immersive-component bottom-banner-item-container"
                  geometry="primitive: plane; width: 2.85; height: 1.5"
                  position="-0.45 1.2 0.5"
                  rotation="-90 0 0"
                  material="side: double; src: #income-investing-story-cover;"
                  visible="false"
                  animation__selectPanel12MoveToCenter="property: position; to: 0 1.5 -5.5; easing: linear; dur: 3000; startEvents: selectPanel;">
        </a-entity>

        <!-- PANEL 13 -->
        <a-entity id="barrons-bottom-banner-item-container-1" class="immersive-component bottom-banner-item-container"
                  geometry="primitive: plane; width: 2.85; height: 1.5"
                  position="2.65 1.2 0.5"
                  rotation="-90 0 0"
                  material="side: double; src: #up-and-down-wall-street-story-cover;"
                  visible="false"
                  animation__selectPanel13MoveToCenter="property: position; to: 0 1.5 -5.5; easing: linear; dur: 3000; startEvents: selectPanel;">
        </a-entity>

        <!-- PANEL 14 -->
        <a-entity id="barrons-other-stories-banner-item-container-0" class="immersive-component other-stories-banner-item-container"
                  geometry="primitive: plane; width: 2; height: 2"
                  position="-1 1.2 2.5"
                  rotation="-90 0 0"
                  material="side: double; src: #market-story-cover;"
                  visible="false"
                  animation__selectPanel14MoveToCenter="property: position; to: 0 1.5 -5.5; easing: linear; dur: 3000; startEvents: selectPanel;">
        </a-entity>

        <!-- PANEL 15 -->
        <a-entity id="barrons-other-stories-banner-item-container-1" class="immersive-component other-stories-banner-item-container"
                  geometry="primitive: plane; width: 2; height: 2"
                  position="1.25 1.2 2.5"
                  rotation="-90 0 0"
                  material="side: double; src: #soft-commodities-story-cover;"
                  visible="false"
                  animation__selectPanel15MoveToCenter="property: position; to: 0 1.5 -5.5; easing: linear; dur: 3000; startEvents: selectPanel;">
        </a-entity>

        <!-- PANEL 16 -->
        <a-entity id="barrons-other-stories-banner-item-container-2" class="immersive-component other-stories-banner-item-container"
                  geometry="primitive: plane; width: 2; height: 2"
                  position="3.5 1.2 2.5"
                  rotation="-90 0 0"
                  material="side: double; src: #penta-story-cover;"
                  visible="false"
                  animation__selectPanel16MoveToCenter="property: position; to: 0 1.5 -5.5; easing: linear; dur: 3000; startEvents: selectPanel;"><!--#books-section-cover;-->
        </a-entity>

        <!-- start of the photo gallery -->
        <!-- PANEL 17 -->
        <a-entity id="barrons-front-page-main-cover-0" class="immersive-component"
                  geometry="primitive: plane; width: 4.5; height: 3"
                  position="0.25 1.2 -1.9"
                  rotation="-90 0 0"
                  material="side: double; src: #barrons-magazine-main-cover-image-0; opacity: 0; transparent: false;"
                  visible="false"
                  animation__hideCoverZeroTrans="property: material.transparent; from: false; to: true; dur: 50; delay: 2000; startEvents: hideCoverZero;"
                  animation__hideCoverZeroOpa="property: material.opacity; from: 1.0; to: 0; dur: 2000; startEvents: hideCoverZero;"
                  animation__showCoverZeroTrans="property: material.transparent; from: true; to: false; dur: 50; delay: 2000; startEvents: showCoverZero;"
                  animation__showCoverZeroOpa="property: material.opacity; from: 0; to: 1.0; dur: 2000; startEvents: showCoverZero;">
        </a-entity><!--animation__showCoverOneTrans="property: material.transparent; from: true; to : false; dur: 50; delay: 12000; easing: linear;"-->

        <!-- PANEL 18 -->
        <a-entity id="barrons-front-page-main-cover-1" class="immersive-component"
                  geometry="primitive: plane; width: 4.5; height: 3"
                  position="0.25 1.2 -1.9"
                  rotation="-90 0 0"
                  material="side: double; src: #barrons-magazine-main-cover-image-1; opacity: 0; transparent: true;"
                  visible="false"
                  animation__showCoverOneOpa="property: material.opacity; from: 0; to : 1.0; dur: 2000; startEvents: showCoverOne; easing: linear;"
                  animation__showCoverOneTrans="property: material.transparent; from: true; to: false; dur: 50; delay: 2000; startEvents: showCoverOne; easing: linear;"
                  animation__hideCoverOneOpa="property: material.opacity; from: 1.0; to : 0; dur: 2000; startEvents: hideCoverOne; easing: linear;"  
                  animation__hideCoverOneTrans="property: material.transparent; from: true; to : false; dur: 50; delay: 2000; startEvents: hideCoverOne; easing: linear;">
        </a-entity>

        <!-- PANEL 19 -->
        <a-entity id="barrons-front-page-main-cover-2" class="immersive-component"
                  geometry="primitive: plane; width: 4.5; height: 3"
                  position="0.25 1.2 -1.9"
                  rotation="-90 0 0"
                  material="side: double; src: #barrons-magazine-main-cover-image-2; opacity: 0; transparent: true;"
                  animation__showCoverTwoOpa="property: material.opacity; from: 0; to : 1.0; dur: 2000; startEvents: showCoverTwo; easing: linear;"
                  animation__showCoverTwoTrans="property: material.transparent; from: false; to: true; dur: 50; delay: 2000; startEvents: showCoverTwo; easing: linear;"
                  animation__hideCoverTwoOpa="property: material.opacity; from: 1.0; to : 0; dur: 2000; startEvents: hideCoverTwo; easing: linear;"
                  animation__hideCoverTwoTrans="property: material.transparent; from: false; to: true; dur: 50; delay: 2000; startEvents: hideCoverTwo; easing: linear;">
        </a-entity>

        <!-- PANEL 20 -->
        <a-entity id="barrons-front-page-main-cover-3" class="immersive-component"
                  geometry="primitive: plane; width: 4.5; height: 3"
                  position="0.25 1.2 -1.9"
                  rotation="-90 0 0"
                  material="side: double; src: #barrons-magazine-main-cover-image-3; opacity: 0; transparent: true;"
                  visible="false"
                  animation__showCoverThreeOpa="property: material.opacity; from: 0; to : 1.0; dur: 2000; startEvents: showCoverThree; easing: linear;"
                  animation__showCoverThreeTrans="property: material.transparent; from: true; to: false; dur: 50; delay: 2000; startEvents: showCoverThree; easing: linear;"
                  animation__hideCoverThreeOpa="property: material.opacity; from: 1.0; to : 0; dur: 2000; startEvents: hideCoverThree; easing: linear;"
                  animation__hideCoverThreeTrans="property: material.transparent; from: true; to : false; dur: 50; delay: 2000; startEvents: hideCoverThree; easing: linear;">
        </a-entity>

        <!-- PANEL 21 -->
        <a-entity id="barrons-front-page-main-cover-4" class="immersive-component"
                  geometry="primitive: plane; width: 4.5; height: 3"
                  position="0.25 1.2 -1.9"
                  rotation="-90 0 0"
                  material="side: double; src: #barrons-magazine-main-cover-image-4; opacity: 0; transparent: true;"
                  visible="false"
                  animation__showCoverFourOpa="property: material.opacity; from: 0; to : 1.0; dur: 2000; startEvents: showCoverFour; easing: linear;"
                  animation__showCoverFourTrans="property: material.transparent; from: true; to: false; dur: 50; delay: 2000; startEvents: showCoverFour; easing: linear;"  
                  animation__hideCoverFourOpa="property: material.opacity; from: 1.0; to : 0; dur: 2000; startEvents: hideCoverFour; easing: linear;"
                  animation__hideCoverFourTrans="property: material.transparent; from: true; to : false; dur: 50; delay: 2000; startEvents: hideCoverFour; easing: linear;">
        </a-entity>

        <!-- PANEL 22 -->
        <a-entity id="barrons-front-page-main-cover-5" class="immersive-component"
                  geometry="primitive: plane; width: 4.5; height: 3"
                  position="0.25 1.2 -1.9"
                  rotation="-90 0 0"
                  material="side: double; src: #barrons-magazine-main-cover-image-5; opacity: 0; transparent: true;"
                  visible="false"
                  animation__showCoverFiveOpa="property: material.opacity; from: 0; to : 1.0; dur: 2000; startEvents: showCoverFive; easing: linear;"
                  animation__showCoverFiveTrans="property: material.transparent; from: true; to: false; dur: 50; delay: 2000; startEvents: showCoverFive; easing: linear;"
                  animation__hideCoverFiveOpa="property: material.opacity; from: 1.0; to : 0; dur: 2000; startEvents: hideCoverFive; easing: linear;"
                  animation__hideCoverThreeTrans="property: material.transparent; from: true; to : false; dur: 50; startEvents: hideCoverFive; easing: linear;">
        </a-entity>

        <!-- PANEL 23 -->
        <a-entity id="barrons-front-page-main-cover-6" class="immersive-component"
                  geometry="primitive: plane; width: 4.5; height: 3"
                  position="0.25 1.2 -1.9"
                  rotation="-90 0 0"
                  material="side: double; src: #barrons-magazine-main-cover-image-6; opacity: 0; transparent: true;"
                  visible="false"
                  animation__showCoverSixOpa="property: material.opacity; from: 0; to : 1.0; dur: 2000; startEvents: showCoverSix; easing: linear;"
                  animation__showCoverSixTrans="property: material.transparent; from: true; to: false; dur: 50; delay: 2000; startEvents: showCoverSix; easing: linear;"
                  animation__hideCoverSixOpa="property: material.opacity; from: 1.0; to : 0; dur: 2000; startEvents: hideCoverSix; easing: linear;"
                  animation__hideCoverSixTrans="property: material.transparent; from: true; to : false; dur: 50; startEvents: hideCoverSix; easing: linear;">
        </a-entity>

        <!-- PANEL 24 -->
        <a-entity id="barrons-front-page-main-cover-7" class="immersive-component"
                  geometry="primitive: plane; width: 4.5; height: 3"
                  position="0.25 1.2 -1.9"
                  rotation="-90 0 0"
                  material="side: double; src: #barrons-magazine-main-cover-image-7; opacity: 0; transparent: true;"
                  visible="false"
                  animation__showCoverSevenOpa="property: material.opacity; from: 0; to : 1.0; dur: 2000; startEvents: showCoverSeven; easing: linear;"
                  animation__showCoverSevenTrans="property: material.transparent; from: true; to: false; dur: 50; delay: 2000; startEvents: showCoverSeven; easing: linear;"
                  animation__hideCoverSevenOpa="property: material.opacity; from: 1.0; to : 0; dur: 2000; startEvents: hideCoverSeven; easing: linear;"
                  animation__hideCoverThreeTrans="property: material.transparent; from: true; to : false; dur: 50; delay: 2000; startEvents: hideCoverSeven; easing: linear;">
        </a-entity>

        <!-- PANEL 25 -->
        <a-entity id="barrons-front-page-main-cover-8" class="immersive-component"
                  geometry="primitive: plane; width: 4.5; height: 3"
                  position="0.25 1.2 -1.9"
                  rotation="-90 0 0"
                  material="side: double; src: #barrons-magazine-main-cover-image-8; opacity: 0; transparent: true;"
                  visible="false"
                  animation__showCoverEightOpa="property: material.opacity; from: 0; to : 1.0; dur: 2000; startEvents: showCoverEight easing: linear;"
                  animation__showCoverEightTrans="property: material.transparent; from: true; to: false; dur: 50; delay: 2000; startEvents: showCoverEight; easing: linear;"
                  animation__hideCoverEightOpa="property: material.opacity; from: 1.0; to : 0; dur: 2000; startEvents: hideCoverEight; easing: linear;"
                  animation__hideCoverEightTrans="property: material.transparent; from: true; to : false; dur: 50; delay: 2000; startEvents: hideCoverEight; easing: linear;">
        </a-entity>
        <!---->
    </a-marker>

    <a-marker id="mit-marker-container" type="pattern" url="./media/pattern/pattern-mit-logo.patt">
        <a-entity id="mit-rotating-globe"
                  geometry="primitive: box; width: 1.0; height: 1.0; depth: 1.0;"
                  animation="property: rotation; to: 0 360 0; loop: true; dur: 10000; easing: linear; pauseEvents: stopRotatingMIT; startEvents: startRotatingMIT; resumeEvents: resumeRotatingMIT;"
                  position="0 0.5 0"
                  material="src: #bakuas-app-icon-texture;">
        </a-entity>
        <a-entity id="mit-application-secondary-panel"
                  geometry="primitive: plane; width: 5; height: 1.5;"
                  animation="property: material.opacity; to: 1.0; dur: 1000; easing: linear; startEvents: showSecondaryPanelMIT;"
                  position="0 0.25 0"
                  rotation="-90 0 0"
                  visible="false"
                  material="src: #mit-application-secondary-panel-texture; opacity: 0; side:double;">
        </a-entity>
        <a-entity id="bakuas-ticker-tape-container"
                  geometry="primitive: plane; width: 5; height: 0.5;"
                  animation="property: material.opacity; to: 1.0; dur: 1000; easing: linear; startEvents: revealTicker;"
                  position="0 0.3 1"
                  rotation="-90 0 0"
                  visible="false"
                  material="src: #bakuas-ticker-video; opacity: 0; side:double;">
        </a-entity>
        <a-entity id="nyt-application-secondary-panel"
                  geometry="primitive: plane; width: 5; height: 1.8;"
                  animation="property: material.opacity; to: 1.0; dur: 1000; easing: linear; startEvents: showSecondaryPanelNYT;"
                  position="0 0.25 0"
                  rotation="-90 0 0"
                  visible="false"
                  material="src: #nyt-app-secondary-panel-texture; opacity: 0; side: double;">
        </a-entity>
        <a-entity id="hiro-application-secondary-panel"
                  geometry="primitive: plane; width: 5; height: 1.8;"
                  animation="property: material.opacity; to: 1.0; dur: 1000; easing: linear; startEvents: showSecondaryPanelHIRO;"
                  position="0 0.25 0"
                  rotation="-90 0 0"
                  visible="false"
                  material="src: #hiro-application-secondary-panel-texture; opacity: 0; side: double;">
        </a-entity>
        <a-entity id="unibeat-application-secondary-panel"
                  geometry="primitive: plane; width: 1.5; height: 1.5;"
                  animation="property: material.opacity; to: 1.0; dur: 1000; easing: linear; startEvents: showSecondaryPanelUNI; pauseEvents: hidePanelUNI;"
                  position="0 0.25 0"
                  rotation="-90 0 0"
                  visible="false"
                  material="color: yellow; opacity: 0; side:double;">
        </a-entity>
    </a-marker>

    <a-marker id="hiro-marker-container" preset="hiro">
        <a-entity id="hiro-rotating-globe"
                  geometry="primitive: box; width: 1.0; height: 1.0; depth: 1.0;"
                  animation="property: rotation; to: 0 360 0; loop: true; dur: 10000; easing: linear; pauseEvents: stopRotatingHIRO; startEvents: startRotatingHIRO; resumeEvents: resumeRotatingHIRO;"
                  position="0 0.5 0"
                  material="src: #barrons-logo-texture;">
        </a-entity>
        <a-entity id="back-to-previous-page-button-container"
                  geometry="primitive: plane; width: 1.5; height: 1.5;"
                  animation="property: material.opacity; to: 1.0; dur: 1000; easing: linear; startEvents: showBackButtonOnCover;"
                  position="0 0.25 0"
                  rotation="-90 0 0"
                  visible="false"
                  material="src: #back-to-main-page-button-texture; opacity: 0; side:double;">
        </a-entity>


        <!--FOR NYT -->
        <a-entity id="bottom-half-front-cover-container" class="immersive-component"
                  geometry="primitive: plane; width: 6.5; height: 5"
                  position="2 1.2 -2"
                  rotation="-90 0 0"
                  visible="false"
                  material="src: #nyt-main-video; side: double;"
                  >
        </a-entity>

        <a-entity id="bottom-half-front-cover-action-button-container-0" class="immersive-component"
                  class="immersive-component bottom-half-front-cover-container action-button-container toggle-playback-button"
                  geometry="primitive: circle; radius: 0.5;"
                  position="5.5 1.5 -2"
                  rotation="-90 0 0"
                  visible="false"
                  material="src: #toggle-playback-pause-button-icon; side: double;"
                  >
        </a-entity>

        <a-entity id="bottom-half-front-cover-action-button-container-1" class="immersive-component"
                  class="immersive-component bottom-half-front-cover-container action-button-container play-next-item-button"
                  geometry="primitive: circle; radius: 0.5"
                  position="5.5 1.5 -1"
                  rotation="-90 0 0"
                  visible="false"
                  material="src: #play-next-item-button-icon; side: double;"
                  >
        </a-entity>

        <a-entity id="bottom-half-front-cover-action-button-container-2" class="immersive-component"
                  class="immersive-component bottom-half-front-cover-container action-button-container toggle-volume-button"
                  geometry="primitive: circle; radius: 0.5;"
                  position="5.5 1.5 0"
                  rotation="-90 0 0"
                  visible="false"
                  material="src: #toggle-volume-button-icon; side: double;"
                  >
        </a-entity>

        <!---->
        <!-- For BARRONS -->

        <a-entity id="barrons-bottom-half-front-cover-container" class="immersive-component"
                  geometry="primitive: plane; width: 6.5; height: 5"
                  position="2 1.2 -2"
                  rotation="-90 0 0"
                  visible="false"
                  material="src: #nyt-main-video; side: double;"
                  >
        </a-entity>

        <a-entity id="barrons-bottom-half-front-cover-action-button-container-0" class="immersive-component"
                  class="immersive-component bottom-half-front-cover-container action-button-container toggle-playback-button"
                  geometry="primitive: circle; radius: 0.5;"
                  position="5.5 1.5 -2"
                  rotation="-90 0 0"
                  visible="false"
                  material="src: #toggle-playback-pause-button-icon; side: double;"
                  >
        </a-entity>

        <a-entity id="barrons-bottom-half-front-cover-action-button-container-1" class="immersive-component"
                  class="immersive-component bottom-half-front-cover-container action-button-container play-next-item-button"
                  geometry="primitive: circle; radius: 0.5"
                  position="5.5 1.5 -1"
                  rotation="-90 0 0"
                  visible="false"
                  material="src: #play-next-item-button-icon; side: double;"
                  >
        </a-entity>

        <a-entity id="barrons-bottom-half-front-cover-action-button-container-2" class="immersive-component"
                  class="immersive-component bottom-half-front-cover-container action-button-container toggle-volume-button"
                  geometry="primitive: circle; radius: 0.5;"
                  position="5.5 1.5 0"
                  rotation="-90 0 0"
                  visible="false"
                  material="src: #toggle-volume-button-icon; side: double;"
                  >
        </a-entity>

        <!---->
    </a-marker>

    <a-marker id="unibeat-marker-container" type="pattern" url="./media/pattern/pattern-unibeat.patt">
        <a-entity id="unibeat-rotating-globe"
                  geometry="primitive: box; width: 1.0; height: 1.0; depth: 1.0;"
                  animation="property: rotation; to: 0 360 0; loop: true; dur: 10000; easing: linear; pauseEvents: stopRotatingUNI; startEvents: startRotatingUNI; resumeEvents: resumeRotatingUNI;"
                  position="0 0.5 0"
                  material="src: #hov-office-app-icon-texture;">
        </a-entity>
        <a-entity id="next-page-button-container"
                  geometry="primitive: plane; width: 1.5; height: 1.5;"
                  animation="property: material.opacity; to: 1.0; dur: 1000; easing: linear; startEvents: showNextButtonOnCover;"
                  position="0 0.25 0"
                  rotation="-90 0 0"
                  visible="false"
                  material="src: #onto-to-next-page-button-texture; opacity: 0; side:double;">
        </a-entity>
    </a-marker>
    `);
}