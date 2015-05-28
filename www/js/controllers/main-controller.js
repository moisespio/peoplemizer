app.controller('main-controller', function($scope, Camera) {
	$scope.images = new Array();

	$scope.getPhoto = function() {
		var app = document.URL.indexOf( 'http://' ) === -1 && document.URL.indexOf( 'https://' ) === -1  && document.URL.indexOf( 'local' ) === -1;
		console.log(app);
		if(!app){
			$scope.images.push({
				url :'img/placeholder.gif'
			});
		}else{
			Camera.getPicture().then(function(imageURI) {
				$scope.images.push({
					url : imageURI
				});
			}, function(err) {
				console.err(err);
			});
		}
	};

});