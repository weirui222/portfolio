angular.module('appCtrl', [])
.controller('PageCtrl', ['$scope', '$document', function ($scope, $document) {
  $scope.navCollapsed = true;

  //handle scroll home and scroll to contact
  var duration = 1000;

  //scroll home
  $scope.toTheTop = function() {
    $document.scrollTopAnimated(0, duration)
  };

  //scroll to contact info
  $scope.toContact = function(){
  var contact = angular.element(document.getElementById('Contact'));
    $document.scrollToElement(contact, 0, duration);
  };

  // turn box for work section
  $scope.onWorkLoaded = function(event) {
    var turnBoxOptions = {
      width: 300,
      height: 200,
      axis: "X",
      perspective: 800,
      duration: 200,
      delay: 0,
      easing: "linear",
      direction: "negative",
      type: "real"
    };
    let turnBlocks = $('.turnBlock');
    turnBlocks.turnBox(turnBoxOptions);

    var turnBoxOptions = {
      width: 300,
      height: 200,
      axis: "X",
      perspective: 800,
      duration: 200,
      delay: 0,
      easing: "linear",
      direction: "negative",
      type: "real"
    };
    turnBlocks.turnBox(turnBoxOptions);
  };
}]);
