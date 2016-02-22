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
      transclude: true,
      template:'<div style="" class="js-marquee-wrapper"><div class="js-marquee" style="margin-right: 0px; float: left;" ng-transclude></div></div>',
      link: function (scope, ele) {
        var styles = '.js-marquee-wrapper {width: 100000px; margin-left: 400px;@-webkit-keyframes marqueeAnimation-6163392  { 100%  {margin-left:-176px}};animation: marqueeAnimation-6163392 7.2s linear 1s infinite;}';
        ele.append('<style>'+styles+'</style');
    
      }
    };
  }]);
})(angular);
