(function () {
'use strict';

angular.module('NarrowItDownApp', []).directive('foundItems', FoundItems);

function FoundItems() {
  console.log("In directive");
  var ddo = {
    template: 'Hello World!'
  };

  return ddo;
}

})();
