(function () {
"use strict";

angular.module('public')
.controller('SignUpController', SignUpController);

SignUpController.$inject = ['MenuService', 'menuItems'];
function SignUpController(MenuService, menuItems) {
  var signUpCtrl = this;

  signUpCtrl.info = null;
  signUpCtrl.doesNotExist = true;

  // Get all possible items to check against user input
  var allShortNames = [];
  for (var i = 0; i < menuItems.menu_items.length; i++) {
    allShortNames.push(menuItems.menu_items[i].short_name.toLowerCase());
  };

  signUpCtrl.checkFavorite = function() {
    // Do null checking
    if (signUpCtrl.info != null && signUpCtrl.info.favorite != undefined) {
      // Search for short name
      var favorite = signUpCtrl.info.favorite.toLowerCase();
      if (allShortNames.indexOf(favorite) != -1) {
        signUpCtrl.doesNotExist = false;
      } else {
        signUpCtrl.doesNotExist = true;
      }
    } else {
      signUpCtrl.doesNotExist = true;
    }
  }

  signUpCtrl.submit = function() {
    MenuService.getMenuItemByShortName(signUpCtrl.info.favorite).then(function(result) {
      signUpCtrl.setInfoSaved(result);
    }, function(error) {
      signUpCtrl.setInfoNotSaved();
    });
  }

  signUpCtrl.saveUserToService = function () {
    MenuService.setUserInfo(signUpCtrl.info);
  }

  signUpCtrl.setInfoSaved = function (result) {
    signUpCtrl.doesNotExist = false;
    signUpCtrl.info.favorite = result;
    signUpCtrl.saveUserToService();
    signUpCtrl.saved = true;
  }

  signUpCtrl.setInfoNotSaved = function () {
    signUpCtrl.doesNotExist = true;
    signUpCtrl.saved = false;
  }
}

})();
