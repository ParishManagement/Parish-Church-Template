(function(){
	/* $(".spinnerDiv").css("display","block");
	$(window).load(function(){
		$(".spinnerDiv").css("display","none");
	}); */
	var appModule = angular.module('communityIntegrator',['ngRoute','ui.bootstrap']);
	
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
	appModule.controller('CarouselCtrl',function($scope){
		$scope.myInterval = 5000;
		$scope.slides = [
		{
		  headingContent: 'Job Verses19:25',
		  description : '25  I know that my Redeemer lives, and that in the end he will stand upon the earth.'
		},
		{
		  headingContent: 'Revelation Verses 3:5',
		  description : '5  He who overcomes will, like them, be dressed in white. I will never blot out his name from the book of life, but will acknowledge his name before my Father and his angels.'
		},
		{
		  headingContent: 'Job Verses19:25',
		  description : '25  I know that my Redeemer lives, and that in the end he will stand upon the earth.'
		},
		{
		  headingContent: 'Revelation Verses 3:5',
		  description : '5  He who overcomes will, like them, be dressed in white. I will never blot out his name from the book of life, but will acknowledge his name before my Father and his angels.'
		}];
	});
	$(document).ready(function(){
		communityIntegrator.init();
	});
})();