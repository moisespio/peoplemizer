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

		// var db = window.sqlitePlugin.openDatabase({name: "my.db"});

		// db.transaction(function(tx) {
		// 	tx.executeSql('DROP TABLE IF EXISTS test_table');
		// 	tx.executeSql('CREATE TABLE IF NOT EXISTS test_table (id integer primary key, data text, data_num integer)');

		// 	// demonstrate PRAGMA:
		// 	db.executeSql("pragma table_info (test_table);", [], function(res) {
		// 		alert("PRAGMA res: " + JSON.stringify(res));
		// 	});

		// 	tx.executeSql("INSERT INTO test_table (data, data_num) VALUES (?,?)", ["test", 100], function(tx, res) {
		// 		alert("insertId: " + res.insertId + " -- probably 1");
		// 		alert("rowsAffected: " + res.rowsAffected + " -- should be 1");

		// 		db.transaction(function(tx) {
		// 		tx.executeSql("select count(id) as cnt from test_table;", [], function(tx, res) {
		// 			alert("res.rows.length: " + res.rows.length + " -- should be 1");
		// 			alert("res.rows.item(0).cnt: " + res.rows.item(0).cnt + " -- should be 1");
		// 		});
		// 		});

		// 	}, function(e) {
		// 		alert("ERROR: " + e.message);
		// 	});
		// });

		var admobid = {};
		if( /(android)/i.test(navigator.userAgent) ) {
			admobid = {
				banner: 'ca-app-pub-9306461054994106/7638030772',
				interstitial: 'ca-app-pub-9306461054994106/8334204774',
			};
		} else if(/(ipod|iphone|ipad)/i.test(navigator.userAgent)) {
			admobid = {
				banner: 'ca-app-pub-9306461054994106/4684564370',
				interstitial: 'ca-app-pub-9306461054994106/4830838375',
			};
		} else {
			admobid = {
				banner: 'ca-app-pub-9306461054994106/1731097975',
				interstitial: 'ca-app-pub-9306461054994106/6857471579',
			};
		}
		if(AdMob){
			if(window.localStorage.getItem('first')){
				AdMob.prepareInterstitial( {adId:admobid.interstitial, autoShow:true} );
				// AdMob.showInterstitial();
			}else{
				window.localStorage.setItem('first', 1);
			}

			// window.localStorage.setItem('people', JSON.stringify($scope.people));
			// AdMob.prepareInterstitial( {adId:admobid.interstitial, autoShow:false} );
			// AdMob.showInterstitial();
			AdMob.createBanner( {adId: admobid.banner,position: AdMob.AD_POSITION.BOTTOM_CENTER,autoShow: true,adSize:AdMob.AD_SIZE.FULL_BANNER} );
		}
		// alert(window.localStorage.getItem('people'));
		var people = window.localStorage.getItem('people');
		// alert(JSON.parse('"'+people+'"'));
		if(people){
			alert(people);
			alert(people.people);
			alert(JSON.parse(people));
		}
	});
})

app.config(function($stateProvider, $urlRouterProvider) {
	$urlRouterProvider.otherwise('/')

	$stateProvider.state('home', {
		url: '/',
		controller: 'home-controller',
		templateUrl: 'home.html'
	})

	$stateProvider.state('about-the-person', {
		url: '/about-the-person',
		controller: 'about-controller',
		templateUrl: 'about-the-person.html'
	})

	$stateProvider.state('all-the-people', {
		url: '/all-the-people',
		controller: 'all-controller',
		templateUrl: 'all-the-people.html'
	})
});
