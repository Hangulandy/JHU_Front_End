(function () {
'use strict';

angular.module('data')
.service('MenuDataService', MenuDataService);


MenuDataService.$inject = ['$http']
function MenuDataService($http) {
  var service = this;

  service.getAllCategories = function () {
    return $http({
      method: "GET",
      url: ("https://davids-restaurant.herokuapp.com/categories.json")
    })
    .then(function(result){
      var categories = result.data;
      return categores;
    }).catch(function(error){
      console.log("Something went terribly wrong");
    });
  }

  service.getItemsForCategory = function (categoryShortName) {
    var url1 = "https://davids-restaurant.herokuapp.com/menu_items.json?category=";
    var url2 = url1.concat(categoryShortName);

    return $http({
      method: "GET",
      url: url2
    })
    .then(function(result){
      var foundItems = result.data.menu_items;
      return foundItems;
    }).catch(function(error){
      console.log("Something went terribly wrong");
    });
  };
}

})();
