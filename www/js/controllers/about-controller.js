app.controller('about-controller', function($scope, Camera, Person) {
	$scope.currentPerson = Person.people[Person.people.length - 1];

	$scope.$on('$ionicView.afterEnter', function(a) {
		$scope.setTooltipState(true);
	});

	$scope.setTooltipState = function (state) {
		$scope.showTooltip = state;
	};

	var focusInput = function () {
		setTimeout(function () {
			document.getElementsByClassName('item-input-field').item($scope.people.length - 1).focus();
		});
	};
});