(function () {
'use strict';

angular.module('ShoppingListCheckoff', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService)
.filter('totalCost', TotalCostFilter);

ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService) {
  var toBuy = this;

  toBuy.items = ShoppingListCheckOffService.getToBuyItems();

  toBuy.buy = function(itemIndex) {
    ShoppingListCheckOffService.buyItem(itemIndex);
  }
}

AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService) {
  var bought = this;
  bought.items = ShoppingListCheckOffService.getBoughtItems();
}

function TotalCostFilter(){
  return function(input){
    var totalPrice = input.quantity * input.price;
    return "$$$" + totalPrice.toFixed(2);
  }
}


function ShoppingListCheckOffService(){
  var service = this;

  var toBuyItems = [
    {
      name: "Milk",
      quantity: 2,
      price: 2.59
    },
    {
      name: "Donuts",
      quantity: 4,
      price: 1.99
    },
    {
      name: "Cookies",
      quantity: 10,
      price: 2.99
    },
    {
      name: "Chocolate bar",
      quantity: 5,
      price: 0.79
    },
    {
      name: "Chips",
      quantity: 5,
      price: 2.99
    }
  ]

  var boughtItems = [];

  service.buyItem = function (itemIndex){

    var item = service.getToBuyItems()[itemIndex];
    service.getToBuyItems().splice(itemIndex, 1);
    boughtItems.push(item);
  }

  service.getToBuyItems = function() {
    return toBuyItems;
  }

  service.getBoughtItems = function() {
    return boughtItems;
  }

}

})();
