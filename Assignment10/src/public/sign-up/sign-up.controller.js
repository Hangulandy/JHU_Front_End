(function () {
"use strict";

angular.module('public')
.controller('SignUpController', SignUpController);

SignUpController.$inject = ['MenuService', 'SignUpService', 'menuItems'];
function SignUpController(MenuService, SignUpService, menuItems) {
  var $ctrl = this;

  var possibleItems = [];

  for (var i = 0; i < menuItems.menu_items.length; i++) {
    possibleItems.push(menuItems.menu_items[i].short_name.toLowerCase() + "");
  }

  $ctrl.checkFavorite = function() {
    if ($ctrl.info != undefined && $ctrl.info.favorite != undefined) {
      var favorite = $ctrl.info.favorite.toLowerCase();
      if (possibleItems.indexOf(favorite) != -1) {
        $ctrl.exists = true;
      } else {
        $ctrl.exists = false;
      }
    } else {
      $ctrl.exists = false;
    }
  }

  $ctrl.submit = function() {
    MenuService.getMenuItemByShortName($ctrl.info.favorite).then(function(result) {
      $ctrl.exists = true;
      $ctrl.info.favorite = result;
      SignUpService.setInfo($ctrl.info);
      $ctrl.saved = true;
    }, function(error) {
      $ctrl.exists = false;
      $ctrl.saved = false;
    });
  };
}

})();
