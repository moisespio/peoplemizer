app.controller('main-controller', function($scope, $ionicModal, Camera) {
	$scope.people = new Array();
	$scope.showRandomButton = false;
	$scope.showLoader = true;

	$scope.setRandomButtonState = function () {
		$scope.showRandomButton = $scope.people.length > 1;
	}

	$ionicModal.fromTemplateUrl('result.html', function(modal) {
		$scope.result = modal;
	}, {
		scope: $scope,
		animation: 'slide-in-up'
	});

	$scope.showResult = function () {
		peoplemize();
		$scope.result.show();
	};

	$scope.closeResult = function () {
		$scope.result.hide();
		$scope.showLoader = true;
	};

	$scope.getPhoto = function() {
		if(!window.cordova) {
			$scope.people.push({
				url :'img/placeholder.gif'
			});

			focusInput();
		} else {
			Camera.getPicture({
  			}).then(function(imageURI) {
				$scope.people.push({
					url : imageURI
				});

				focusInput();
				var tempStr = '{"people":[';
				for (var i = 0; i < $scope.people.length; i++) {
					tempStr += $scope.people[i].url;// +(i < $scope.people.length-1?',':'');
					if(i < $scope.people.length - 1){
						tempStr +=',';
					}
				}
				tempStr += ']}';
				alert(tempStr);
				window.localStorage.setItem('people', tempStr);
			}, function(err) {
				console.err(err);
			});
			focusInput();
		}
	};

	$scope.remove = function ($index) {
		$scope.people.splice($index, 1);
	};

	var peoplemize = function () {
		$scope.selectedPersonPhoto = $scope.people[~~(Math.random() * $scope.people.length)];
		setTimeout(function () {
			$scope.$apply(function () {
				$scope.showLoader = false;
			});
		}, 3000);
	};

	var focusInput = function () {
		setTimeout(function () {
			document.getElementsByClassName('item-input-field').item($scope.people.length - 1).focus();
		});
	};
});