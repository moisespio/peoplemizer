app.controller('main-controller', function($scope, Camera) {
	$scope.images = new Array();

	$scope.getPhoto = function() {
		Camera.getPicture().then(function(imageURI) {
			$scope.images.push({
				url : imageURI
			});
		}, function(err) {
			console.err(err);
		});
	};
});