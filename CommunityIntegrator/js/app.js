(function(){
	var appModule = angular.module('sampleRouteProviderApp',['ngRoute']);
	
	appModule.config(['$routeProvider',
		function($routeProvider){
			$routeProvider.
			when('/AddNewOrder',{
				templateUrl : 'templates/add-order.html',
				controller : 'addOrderController'
			}).
			when('/ShowOrders',{
				templateUrl : 'templates/show-oders.html',
				controller : 'showOrdersController'
			}).
			otherwise({
				redirectTo : '/AddNewOrder'
			});
		}
	]);
	
	//creating the controller for the appCodeName
	appModule.controller('addOrderController',
	function($scope){
		$scope.message = "This page is used to add the order";
	});
	
	appModule.controller('showOrdersController',function($scope){
		$scope.message = "This pages is used to show the orders"
	});
})();