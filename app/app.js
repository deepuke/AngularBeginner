var app = angular.module("app", ['ngAnimate', 'ui.bootstrap']);
app.controller("myCtrl", function($scope, $log) {
	$scope.status = {
		isopen : false
	};

	$scope.toggled = function(open) {
		$log.log('Dropdown is now: ', open);
	};

	$scope.toggleDropdown = function($event) {
		$event.preventDefault();
		$event.stopPropagation();
		$scope.status.isopen = !$scope.status.isopen;
		
		if($scope.status.isopen){
			//Optional - make the ajax call here .
			// or you can call the method for ajax request.
		}
	};
});
