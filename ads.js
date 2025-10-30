const iconVast = `<?xml version="1.0" encoding="UTF-8"?>
<VAST xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="vast.xsd" version="4.2">
 <Ad id="123456">
  <InLine>
   <AdSystem>GDFP</AdSystem>
   <AdTitle>Google Why This Ad VAST 4.2 Sample</AdTitle>
   <Description><![CDATA[A sample VAST 4.2 tag with Google Why This Ad]]></Description>
   <Error><![CDATA[https://example.com/conversion?label=videoplayfailed[ERRORCODE]]]></Error>
   <Impression><![CDATA[https://example.com/view]]></Impression>
   <Creatives>
    <Creative id="7891011" AdID="ABCD123456EF" sequence="1">
     <Linear skipoffset="00:00:03">
      <Duration>00:00:10</Duration>
      <TrackingEvents>
       <Tracking event="start"><![CDATA[https://example.com/conversion?label=part2viewed]]></Tracking>
       <Tracking event="firstQuartile"><![CDATA[https://example.com/conversion?label=videoplaytime25]]></Tracking>
       <Tracking event="midpoint"><![CDATA[https://example.com/conversion?label=videoplaytime50]]></Tracking>
       <Tracking event="thirdQuartile"><![CDATA[https://example.com/conversion?label=videoplaytime75]]></Tracking>
       <Tracking event="complete"><![CDATA[https://example.com/conversion?label=videoplaytime100]]></Tracking>
       <Tracking event="mute"><![CDATA[https://example.com/conversion?label=admute]]></Tracking>
       <Tracking event="unmute"><![CDATA[https://example.com/conversion?label=adunmute]]></Tracking>
       <Tracking event="rewind"><![CDATA[https://example.com/conversion?label=adrewind]]></Tracking>
       <Tracking event="pause"><![CDATA[https://example.com/conversion?label=adpause]]></Tracking>
       <Tracking event="resume"><![CDATA[https://example.com/conversion?label=adresume]]></Tracking>
       <Tracking event="fullscreen"><![CDATA[https://example.com/conversion?label=adfullscreen]]></Tracking>
       <Tracking event="creativeView"><![CDATA[https://example.com/conversion?label=vast_creativeview]]></Tracking>
       <Tracking event="exitFullscreen"><![CDATA[https://example.com/conversion?label=vast_exit_fullscreen]]></Tracking>
       <Tracking event="acceptInvitationLinear"><![CDATA[https://example.com/conversion?label=acceptinvitation]]></Tracking>
       <Tracking event="closeLinear"><![CDATA[https://example.com/conversion?label=adclose]]></Tracking>
       <Tracking event="skip" ><![CDATA[https://example.com/conversion?label=videoskipped]]></Tracking>
       <Tracking event="progress" offset="00:00:02"><![CDATA[https://example.com/conversion?label=video_skip_shown]]></Tracking>
       <Tracking event="progress" offset="00:00:04"><![CDATA[https://example.com/conversion?label=video_engaged_view]]></Tracking>
      </TrackingEvents>
      <VideoClicks>
       <ClickThrough id="GDFP"><![CDATA[https://example.com?clickthrough=1]]></ClickThrough>
       <ClickTracking id=""><![CDATA[https://example.com/conversion?label=clicktrack]]></ClickTracking>
       <CustomClick id="GDFP"><![CDATA[https://example.com/conversion?label=customclick]]></CustomClick>
      </VideoClicks>
      <MediaFiles>
       <MediaFile id="GDFP" delivery="progressive" bitrate="1813" width="640" height="360" type="video/mp4" scalable="false" maintainAspectRatio="false">
        <![CDATA[https://storage.googleapis.com/interactive-media-ads/media/preroll.mp4]]>
       </MediaFile>
      </MediaFiles>
      <Icons>
       <Icon program="AdChoices" width="30" height="30" xPosition="right" yPosition="20" duration="00:00:06" offset="00:00:02" apiFramework="VAST" altText="AdChoices">
        <StaticResource creativeType="image/png">
         <![CDATA[ https://storage.googleapis.com/interactive-media-ads/images/icon_abg8.png ]]>
        </StaticResource>
        <IconViewTracking><![CDATA[https://example.com/conversion?label=icon_view&program=adchoices]]></IconViewTracking>
        <IconClicks>
         <IconClickThrough><![CDATA[https://example.com?clickthrough=icon&program=adchoices]]></IconClickThrough>
         <IconClickTracking><![CDATA[https://example.com/conversion?label=icon_click&program=adchoices]]></IconClickTracking>
         <IconClickFallbackImages>
          <IconClickFallbackImage width="400" height="150">
           <AltText>Alt icon fallback</AltText>
           <StaticResource creativeType="image/png"><![CDATA[https://storage.googleapis.com/interactive-media-ads/images/wta_dialog.png?size=1x]]></StaticResource>
          </IconClickFallbackImage>
          <IconClickFallbackImage width="800" height="300">
           <AltText>Alt icon fallback</AltText>
           <StaticResource creativeType="image/png"><![CDATA[https://storage.googleapis.com/interactive-media-ads/images/wta_dialog.png?size=2x]]></StaticResource>
          </IconClickFallbackImage>
         </IconClickFallbackImages>
        </IconClicks>
       </Icon>
       <Icon program="GoogleWhyThisAd" width="50" height="50" xPosition="20" yPosition="bottom" duration="00:00:10" offset="00:00:00" apiFramework="VAST" altText="Why This Ad?">
        <StaticResource creativeType="image/png">
         <![CDATA[https://storage.googleapis.com/interactive-media-ads/hosted-samples/wta/icon_adchoices.png]]>
        </StaticResource>
        <IconViewTracking><![CDATA[https://example.com/conversion?label=icon_view&program=googlewhythisad]]></IconViewTracking>
        <IconClicks>
         <IconClickThrough><![CDATA[https://example.com?clickthrough=icon&program=googlewhythisad]]></IconClickThrough>
         <IconClickTracking><![CDATA[https://example.com/conversion?label=icon_click&program=googlewhythisad]]></IconClickTracking>
         <IconClickFallbackImages>
          <IconClickFallbackImage width="400" height="150">
          <AltText>Alt icon fallback</AltText>
          <StaticResource creativeType="image/png"><![CDATA[https://storage.googleapis.com/interactive-media-ads/images/wta_dialog.png]]></StaticResource>
          </IconClickFallbackImage>
         </IconClickFallbackImages>
        </IconClicks>
       </Icon>
      </Icons>
     </Linear>
    </Creative>
   </Creatives>
  </InLine>
 </Ad>
</VAST>
`

// Copyright 2013 Google Inc. All Rights Reserved.
// You may study, modify, and use this example for any purpose.
// Note that this example is provided "as is", WITHOUT WARRANTY
// of any kind either expressed or implied.

// [START init_player]
let adsManager;
let adsLoader;
let adDisplayContainer;
let isAdPlaying;
let isContentFinished;
let playButton;
let videoContent;
let adContainer;

// On window load, attach an event to the play button click
// that triggers playback of the video element.
window.addEventListener('load', function(event) {
  videoContent = document.getElementById('contentElement');
  adContainer = document.getElementById('adContainer');
  adContainer.addEventListener('click', adContainerClick);
  playButton = document.getElementById('playButton');
  playButton.addEventListener('click', playAds);
  setUpIMA();
});
// [END init_player]

// [START ima_setup]
/**
 * Sets up IMA ad display container, ads loader, and makes an ad request.
 */
function setUpIMA() {
  // Create the ad display container.
  createAdDisplayContainer();
  // Create ads loader.
  adsLoader = new google.ima.AdsLoader(adDisplayContainer);
  // Listen and respond to ads loaded and error events.
  adsLoader.addEventListener(
      google.ima.AdsManagerLoadedEvent.Type.ADS_MANAGER_LOADED,
      onAdsManagerLoaded, false);
  adsLoader.addEventListener(
      google.ima.AdErrorEvent.Type.AD_ERROR, onAdError, false);

  // An event listener to tell the SDK that our content video
  // is completed so the SDK can play any post-roll ads.
  const contentEndedListener = function() {
    // An ad might have been playing in the content element, in which case the
    // content has not actually ended.
    if (isAdPlaying) return;
    isContentFinished = true;
    adsLoader.contentComplete();
  };
  videoContent.onended = contentEndedListener;

  // Request video ads.
  const adsRequest = new google.ima.AdsRequest();
  adsRequest.adsResponse = iconVast;

  // Specify the linear and nonlinear slot sizes. This helps the SDK to
  // select the correct creative if multiple are returned.
  adsRequest.linearAdSlotWidth = 640;
  adsRequest.linearAdSlotHeight = 400;

  adsRequest.nonLinearAdSlotWidth = 640;
  adsRequest.nonLinearAdSlotHeight = 150;

  adsLoader.requestAds(adsRequest);
}
// [END ima_setup]

// [START create_ad_display_container]
/**
 * Sets the 'adContainer' div as the IMA ad display container.
 */
function createAdDisplayContainer() {
  adDisplayContainer = new google.ima.AdDisplayContainer(
      document.getElementById('adContainer'), videoContent, document.getElementById('adClickThrough'));
}
// [END create_ad_display_container]

// [START play_ads]
/**
 * Loads the video content and initializes IMA ad playback.
 */
function playAds() {
  // Initialize the container. Must be done through a user action on mobile
  // devices.
  videoContent.load();
  adDisplayContainer.initialize();

  try {
    // Initialize the ads manager. This call starts ad playback for VMAP ads.
    adsManager.init(640, 360);
    // Call play to start showing the ad. Single video and overlay ads will
    // start at this time; the call will be ignored for VMAP ads.
    adsManager.start();
  } catch (adError) {
    // An error may be thrown if there was a problem with the VAST response.
    videoContent.play();
  }
}
// [END play_ads]

// [START ads_loader_events]
/**
 * Handles the ad manager loading and sets ad event listeners.
 * @param {!google.ima.AdsManagerLoadedEvent} adsManagerLoadedEvent
 */
function onAdsManagerLoaded(adsManagerLoadedEvent) {
  // Get the ads manager.
  const adsRenderingSettings = new google.ima.AdsRenderingSettings();
  adsRenderingSettings.restoreCustomPlaybackStateOnAdBreakComplete = true;
  // videoContent should be set to the content video element.
  adsManager =
      adsManagerLoadedEvent.getAdsManager(videoContent, adsRenderingSettings);

  // Add listeners to the required events.
  // [START ads_manager_error_handler]
  adsManager.addEventListener(google.ima.AdErrorEvent.Type.AD_ERROR, onAdError);
  // [END ads_manager_error_handler]
  // [START ads_manager_play_pause_handlers]
  adsManager.addEventListener(
      google.ima.AdEvent.Type.CONTENT_PAUSE_REQUESTED, onContentPauseRequested);
  adsManager.addEventListener(
      google.ima.AdEvent.Type.CONTENT_RESUME_REQUESTED,
      onContentResumeRequested);
  // [END ads_manager_play_pause_handlers]
  // [START ads_manager_loaded_handler]
  adsManager.addEventListener(google.ima.AdEvent.Type.LOADED, onAdLoaded);
  // [END ads_manager_loaded_handler]
}

/**
 * Handles ad errors.
 * @param {!google.ima.AdErrorEvent} adErrorEvent
 */
function onAdError(adErrorEvent) {
  // Handle the error logging.
  console.log(adErrorEvent.getError());
  adsManager.destroy();
}
// [END ads_loader_events]

// [START ad_container_click]
/**
 * Handles clicks on the ad container to support expected play and pause
 * behavior on mobile devices.
 * @param {!Event} event
 */
function adContainerClick(event) {
  console.log("ad container clicked");
  if(videoContent.paused) {
    videoContent.play();
  } else {
    videoContent.pause();
  }
}
// [END ad_container_click]

// [START play_pause_responses]
/**
 * Pauses video content and sets up ad UI.
 */
function onContentPauseRequested() {
  isAdPlaying = true;
  videoContent.pause();
  // This function is where you should setup UI for showing ads (for example,
  // display ad timer countdown, disable seeking and more.)
  // setupUIForAds();
}

/**
 * Resumes video content and removes ad UI.
 */
function onContentResumeRequested() {
  isAdPlaying = false;
  if (!isContentFinished) {
    videoContent.play();
  }
  // This function is where you should ensure that your UI is ready
  // to play content. It is the responsibility of the Publisher to
  // implement this function when necessary.
  // setupUIForContent();
}
// [END play_pause_responses]

// [START ad_loaded_handler]
/**
 * Handles ad loaded event to support non-linear ads. Continues content playback
 * if the ad is not linear.
 * @param {!google.ima.AdEvent} adEvent
 */
function onAdLoaded(adEvent) {
  let ad = adEvent.getAd();
  if (!ad.isLinear()) {
    videoContent.play();
  }
}
// [END ad_loaded_handler]

// [START resize_handler]
window.addEventListener('resize', function(event) {
  console.log("window resized");
  if(adsManager) {
    let width = videoContent.clientWidth;
    let height = videoContent.clientHeight;
    adsManager.resize(width, height, google.ima.ViewMode.NORMAL);
  }
});
// [END resize_handler]