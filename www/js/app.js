var app = angular.module('peoplemizer', ['ionic']);


(function() {
  if (navigator.userAgent.match(/IEMobile\/10\.0/)) {
    var msViewportStyle = document.createElement("style");
    msViewportStyle.appendChild(
      document.createTextNode("@-ms-viewport{width:auto!important}")
    );
    document.getElementsByTagName("head")[0].appendChild(msViewportStyle);
  }
})();

app.run(function($ionicPlatform) {
	$ionicPlatform.ready(function() {
		if (!window.cordova) return;

		var admobid = {};
		if( /(android)/i.test(navigator.userAgent) ) {
			admobid = {
				banner: 'ca-app-pub-9306461054994106/7638030772',
			};
		} else if(/(ipod|iphone|ipad)/i.test(navigator.userAgent)) {
			admobid = {
				banner: 'ca-app-pub-9306461054994106/4684564370',
				interstitial: 'ca-app-pub-9306461054994106/4830838375',
			};
		} else {
			admobid = {
				banner: 'ca-app-pub-9306461054994106/1731097975',
			};
		}
		if(AdMob){
			// AdMob.prepareInterstitial( {adId:admobid.interstitial, autoShow:false} );
			// AdMob.showInterstitial();
		    // AdMob.createBanner( {adId: admobid.banner,position: AdMob.AD_POSITION.TOP_CENTER,autoShow: true,adSize:AdMob.AD_SIZE.FULL_BANNER} );
		}
	});
})