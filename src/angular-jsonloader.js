;(function () {
  'use strict';
  var MODULE_NAME = 'angular-jsonloader';

  // get dependencies
  // from browserify modules or global variables
  var angular;
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = MODULE_NAME;
    angular = require('angular');
  } else if (typeof window !== 'undefined') {
    angular = window.angular;
  }

  // build
  angular.module(MODULE_NAME, [])
    .directive('jsonLoader', ['$parse', '$http',
      function ($parse, $http) {
        return {
          restrict: 'A',
          link: function ($scope, $element, $attrs) {
            return $http.get($attrs.jlUrl).then(function (response) {
              $parse($attrs.jlModel).assign($scope, response.data);
            });
          }
        };
      }
    ]);
})();
