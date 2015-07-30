(function(){
	/* $(".spinnerDiv").css("display","block");
	$(window).load(function(){
		$(".spinnerDiv").css("display","none");
	}); */
	var appModule = angular.module('sampleRouteProviderApp',['ngRoute','ui.bootstrap']);
	
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
				redirectTo : '/home'
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
	
	//Creating the controller for caurosal
	//appModule.controller('textCaurosal',function($scope){
		/* $scope.myInterval = 5000;
		$scope.noWrapSlides = false; */
	//});
})();