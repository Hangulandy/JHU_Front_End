(function() {
  'use strict';

angular.module('LunchCheck', []).controller('LunchCheckController', LunchCheckController);


LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope) {
  $scope.message = "";
  $scope.color = "white";

  $scope.displayMessage = function () {
    var message = "Please enter data first";
    var color = "red";

    if ($scope.itemsString == null || $scope.itemsString.trim == 0){
      // do nothing
    } else {
      color = "green"
      var numItems = $scope.countItems($scope.itemsString);
      if (numItems == 0){
        message = "You didn't enter anything to count...(commas and blanks don't count as items)";
      } else if (numItems > 3) {
        message = "Too much!";
      } else {
        message = "Enjoy!"
      }
    }
    $scope.color = color;
    $scope.message = message;
  }

  $scope.countItems = function (string) {
    if (string == null || string.trim().length == 0){
      return 0;
    } else {
      var allItems = string.split(',');
      var realItems = [];
      for (var item in allItems) {
        if (allItems[item].trim() != ""){
          realItems.push(item);
        }
      }
      return realItems.length;
    }
  };

}

})();
