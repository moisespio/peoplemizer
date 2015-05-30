app.controller('all-controller', function($scope, $location, Camera, Person) {
	$scope.people = Person.people;

	$scope.$on('$ionicView.afterEnter', function(a) {
		$scope.showTooltip = true;
	});

	$scope.getPhoto = function() {
		if(!window.cordova) {
			Person.people.push({
				url : 'img/placeholder.gif',
				name : 'Nicolas'
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

	var focusInput = function () {
		setTimeout(function () {
			document.getElementsByClassName('item-input-field').item($scope.people.length - 1).focus();
		});
	};
});