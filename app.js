var myApp = angular.module('routeApp', ['ngRoute']);

// myApp.factory('sharedObject',function(){
// 	return {
// 		"name":"",
// 		"convertToDecimal":function(x){
// 			return x+1;
// 		}
// 	};
// });

myApp.service('sharedObject', function() {
    this.name = "";
    var counter = 1;
    this.increment = function() {
            counter++;
        },
        this.convertToDecimal = function() {
            return "Hello World";
        }
});

myApp.controller('DirCtrl', function($scope, $location, sharedObject) {
    $scope.x = "Task Details";
    $scope.addTask = function() {
        sharedObject.name = $scope.name;
        $location.path('/about/' + $scope.name);
    };
});

myApp.controller('FeatureCtrl', function($scope) {
    $scope.x = "FeatureCtrl View is here";
});

myApp.controller('AboutCtrl', function($scope, $routeParams, sharedObject) {
    //$scope.name  = $routeParams.name;
    $scope.name = sharedObject.name;
});

myApp.config(function($routeProvider) {
    $routeProvider.when('/', {
        templateUrl: 'templates/feature.html',
        controller: 'FeatureCtrl'
    }).when('/about/:name', {
        templateUrl: 'templates/about.html',
        controller: 'AboutCtrl'
    }).when('/dir', {
        templateUrl: 'templates/dir.html',
        controller: 'DirCtrl'
    }).otherwise({ redirectTo: '/' });
});
