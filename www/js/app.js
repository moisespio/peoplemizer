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
	// window.screen.height = window.outerHeight;
	$ionicPlatform.ready(function() {
		if(window.cordova && window.cordova.plugins.Keyboard) {
			cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
		}
		if(window.StatusBar) {
			StatusBar.styleDefault();
		}

        var admobid = {};
        if( /(android)/i.test(navigator.userAgent) ) { // for android
            admobid = {
                banner: 'ca-app-pub-9306461054994106/7638030772', // or DFP format "/6253334/dfp_example_ad"
            };
        } else if(/(ipod|iphone|ipad)/i.test(navigator.userAgent)) { // for ios
            admobid = {
                banner: 'ca-app-pub-9306461054994106/4684564370', // or DFP format "/6253334/dfp_example_ad"
            };
        } else { // for windows phone
            admobid = {
                banner: 'ca-app-pub-9306461054994106/1731097975', // or DFP format "/6253334/dfp_example_ad"
            };
        }
        // if(AdMob){
        //     AdMob.createBanner( {adId: admobid.banner,position: AdMob.AD_POSITION.TOP_CENTER,autoShow: true,adSize:AdMob.AD_SIZE.FULL_BANNER} );
        // }
        // alert(window.innerHeight+' - '+window.outerHeight+' - '+window.screen.height);
	});
})