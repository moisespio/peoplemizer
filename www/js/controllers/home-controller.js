app.controller('home-controller', function($scope, $location, Camera, Person) {
	$scope.getPhoto = function() {
		if(!window.cordova) {
			Person.people.push({
				url :'img/placeholder.gif'
			});

			$location.path('/about-the-person');
		} else {
			Camera.getPicture({
				allowEdit : false,
				targetWidth: 250,
  				targetHeight: 250,
  				saveToPhotoAlbum: false
  			}).then(function(imageURI) {
  				Person.people.push({
					url : imageURI
				});

				$location.path('/about-the-person');
			}, function(err) {
				console.err(err);
			});
		}
	};
});