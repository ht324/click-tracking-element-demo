function Player({
    videoContent,
    adContainer,
    playButton,
    clickTrackingElement
}){
    let adsManager;
    let adsLoader;
    let adDisplayContainer;
    let isAdPlaying;
    let isContentFinished;

    main();

    function main(){
        adContainer.addEventListener('click', adContainerClick);
        playButton.addEventListener('click', playAds);
        setUpIMA(clickTrackingElement);
    }

    function setUpIMA(clickTrackingElement) {
        createAdDisplayContainer(clickTrackingElement);
        adsLoader = new google.ima.AdsLoader(adDisplayContainer);
        adsLoader.addEventListener(
            google.ima.AdsManagerLoadedEvent.Type.ADS_MANAGER_LOADED,
            onAdsManagerLoaded, false);
        adsLoader.addEventListener(
            google.ima.AdErrorEvent.Type.AD_ERROR, onAdError, false);

        const contentEndedListener = function() {
            if (isAdPlaying) return;
            isContentFinished = true;
            adsLoader.contentComplete();
        };
        videoContent.onended = contentEndedListener;

        const adsRequest = new google.ima.AdsRequest();
        adsRequest.adTagUrl = "https://storage.googleapis.com/interactive-media-ads/ad-tags/ima_wta_sample_vast_4_2.xml";

        let w = adContainer.offsetWidth, h = adContainer.offsetHeight;
        adsRequest.linearAdSlotWidth = w;
        adsRequest.linearAdSlotHeight = h;
        adsRequest.nonLinearAdSlotWidth = w;
        adsRequest.nonLinearAdSlotHeight = h;
        
        adsLoader.requestAds(adsRequest);
    }

    function createAdDisplayContainer(clickTrackingElement) {
        adDisplayContainer = new google.ima.AdDisplayContainer(
            adContainer, 
            videoContent, 
            clickTrackingElement
        );
    }

    function playAds() {
        videoContent.load();
        adDisplayContainer.initialize();

        try {
            adsManager.init(640, 360);
            adsManager.start();
        } catch (adError) {
            videoContent.play();
        }
    }

    function onAdsManagerLoaded(adsManagerLoadedEvent) {
        const adsRenderingSettings = new google.ima.AdsRenderingSettings();
        adsRenderingSettings.restoreCustomPlaybackStateOnAdBreakComplete = true;
        adsManager = adsManagerLoadedEvent.getAdsManager(videoContent, adsRenderingSettings);

        adsManager.addEventListener(google.ima.AdErrorEvent.Type.AD_ERROR, onAdError);  
        adsManager.addEventListener(google.ima.AdEvent.Type.CONTENT_PAUSE_REQUESTED, onContentPauseRequested);
        adsManager.addEventListener(google.ima.AdEvent.Type.CONTENT_RESUME_REQUESTED, onContentResumeRequested);
        adsManager.addEventListener(google.ima.AdEvent.Type.LOADED, onAdLoaded);
    }

    function onAdError(adErrorEvent) {
        console.log(adErrorEvent.getError());
        adsManager.destroy();
    }

    function adContainerClick(event) {
        if(videoContent.paused) {
            videoContent.play();
        } else {
            videoContent.pause();
        }
    }

    function onContentPauseRequested() {
        isAdPlaying = true;
        videoContent.pause();
    }

    function onContentResumeRequested() {
        isAdPlaying = false;
        if (!isContentFinished) {
            videoContent.play();
        }
    }

    function onAdLoaded(adEvent) {
        let ad = adEvent.getAd();
        if (!ad.isLinear()) {
            videoContent.play();
        }
    }
}

window.addEventListener('load', function(event) {
  videoContent = document.getElementById('contentElement');
  adContainer = document.getElementById('adContainer');
  playButton = document.getElementById('playButton');

  Player({
    videoContent: document.getElementById('c1_contentElement'),
    adContainer: document.getElementById('c1_adContainer'),
    playButton: document.getElementById('c1_playButton'),
    clickTrackingElement: document.getElementById('c1_adClickThrough')
  });

  Player({
    videoContent: document.getElementById('c2_contentElement'),
    adContainer: document.getElementById('c2_adContainer'),
    playButton: document.getElementById('c2_playButton')
  });
});