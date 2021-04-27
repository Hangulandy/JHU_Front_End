(function () {
'use strict';

angular.module('data').component('categories', {
  templateUrl: 'src/items.html',
  bindings: {
    items: '<'
  }
});

})();
