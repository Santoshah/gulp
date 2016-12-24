var $scope, $location;

var app = angular.module("myapp", []);


app.controller('rController', function($scope, $location, $anchorScroll) {
    
    $scope.gotoElement = function (eID){
      // set the location.hash to the id of
      // the element you wish to scroll to.
      $location.hash(eID);
 
      // call $anchorScroll()
      $anchorScroll();
      
    };
  });

