/*
 * ng-marquee v1.0.0
 * https://github.com/dimpu/ng-marquee
 * Licensed under the MIT license:
 * http://www.opensource.org/licenses/MIT
 */
;(function(angular) {
  angular.module('ngMarquee', [])
  .directive('ngMarquee', [ function() {
    return {
      restrict: "E",
      scope: {
        options: '=mqOptions'
      },
      link: function (scope, ele) {
        ele.marquee(scope.options);
      }
    };
  }]);
})(angular);
