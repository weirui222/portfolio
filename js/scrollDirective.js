angular.module('scrollDirective', [])
// Nav scroller directive
.directive("scroll", function ($window) {
  return function(scope, element, attrs) {
    angular.element($window).bind("scroll", function() { //bind scroll directive to window
      var navi = angular.element(document.getElementsByClassName("navbar-fixed-top"));
      var slogan = $("#slogan");
      if (this.pageYOffset >= 620) {
         scope.boolChangeClass = true;
         navi.removeClass('minfade').addClass('navSpy'); //only fade in navbar bg if user has scrolled past 620px once
         slogan.hide();
      } else if (navi.hasClass('navSpy')){
         scope.boolChangeClass = false;
         navi.addClass('minfade');
         slogan.show();
      }
      scope.$apply();
    });
  };
});
