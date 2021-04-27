(function () {
'use strict';

angular.module('MenuApp')
.config(RoutesConfig);

RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function RoutesConfig($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise('/');

  // Set up UI states
  $stateProvider
    .state('home', {
      url: '/home',
      templateUrl: 'src/home.html'
  })


    .state('categories', {
      url: '/categories',
      templateUrl: 'src/categories.html',
      // controller: 'CategoriesController as categories',
      // resolve: {
      //   // items: [{"id":81,"short_name":"L","name":"Lunch","special_instructions":"Sunday-Friday 11:15am-3:00pm. Served with your choice of rice (Vegetable Fried RIce, Steamed Rice, Brown Rice), AND EITHER soup (Hot \u0026 Sour, Wonton, Vegetable, Egg Drop, Chicken Corn Soup) OR veggie egg roll. $1.00 extra to have both soup and egg roll.","url":"https://davids-restaurant.herokuapp.com/categories/81.json"},{"id":82,"short_name":"A","name":"Soup","special_instructions":"","url":"https://davids-restaurant.herokuapp.com/categories/82.json"}]
      //   items: ['MenuDataService', function (MenuDataService){
      //     return MenuDataService.getAllCategories();
      //   }]
      // }
    })

    .state('items', {
      url: '/items',
      templateUrl: 'src/items.html',
      // controller: 'ItemsController as items',
      // resolve: {
      //   items: ['MenuDataService', function (MenuDataService){
      //     return MenuDataService.getItemsForCategory();
      //   }]
      // }
    });
}


})();
