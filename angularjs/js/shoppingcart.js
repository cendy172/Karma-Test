var shoppingcartApp = angular.module("shoppingcartApp",[]);

var shoppingcartCtrl = shoppingcartApp.controller("shoppingcartCtrl", ["$scope",function($scope){

    $scope.test = true;

	$scope.items = [
		{'title': 'Paint pots', 'quantity': 8, 'price': 3.95},
		{'title': 'Pollka dots', 'quantity': 17, 'price': 12.95} ,
		{'title': 'Pebbles', 'quantity': 5, 'price': 6.95}
	];

	$scope.remove = function(index){
		$scope.items.splice(index, 1);
	};

	$scope.add = function(title, quantity, price){
		var item = {'title' : title, 'quantity': quantity, 'price': price };
		$scope.items.push(item);
	};
}]);

var StartUpCtrl = shoppingcartApp.controller("StartUpCtrl", ["$scope",function($scope){
	$scope.funding = { startingEstimate: 0};	
	$scope.computeNeeded = function(){
		$scope.needed = $scope.funding.startingEstimate * 10;
		console.log($scope.needed);
	};
}]);
