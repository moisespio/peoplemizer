app.controller('main-controller', function($scope, Camera) {
	$scope.images = new Array();

	$scope.getPhoto = function() {
		if(!window.cordova){
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

	$scope.remove = function ($index) {
		$scope.images.splice($index, 1);
	};

});