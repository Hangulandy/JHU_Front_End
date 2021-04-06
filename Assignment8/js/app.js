(function () {
'use strict';

angular.module('NarrowItDownApp', [])
.controller('NarrowItDownController', NarrowItDownController)
.service('MenuSearchService', MenuSearchService);

NarrowItDownController.$inject = ['MenuSearchService'];
function NarrowItDownController(MenuSearchService) {
  var search = this;

  search.message = "Enter a Search String";
  search.searchTerm = "";
  search.found = [];

  search.search = function (){
    if (!search.searchTerm){
      search.message = "Nothing found!";
    } else {
      var promise = MenuSearchService.getMatchedMenuItems(search.searchTerm);
      promise.then(function(result){
        search.found = result;
        if (search.found.length > 0){
          search.message = "Here are your results:";
        } else {
          search.message = "Nothing found!";
        }
      });
    }
  }

  search.remove = function(index) {
    search.found.splice(index, 1);
    if (search.found.length == 0){
      search.message = "Nothing left!";
    }
  }
}

MenuSearchService.$inject = ['$http'];
function MenuSearchService($http){
  var service = this;

  service.getMatchedMenuItems = function(searchTerm){
    return $http({
      method: "GET",
      url: ("https://davids-restaurant.herokuapp.com/menu_items.json")
    })
    .then(function(result){
      var foundItems = result.data.menu_items;
      for (var i = foundItems.length - 1; i >= 0; i--) {
        if(foundItems[i].name.toUpperCase().includes(searchTerm.toUpperCase()) === false){
          foundItems.splice(i, 1);
        }
      }
      return foundItems;
    }).catch(function(error){
      console.log("Something went terribly wrong");
    });
  }
}

})();
