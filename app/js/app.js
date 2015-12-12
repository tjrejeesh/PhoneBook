'use strict';

/* App Module */

var phonecatApp = angular.module('phonecatApp', [
  'ngRoute',
  'phonecatAnimations',

  'phonecatControllers',
  'phonecatFilters',
  'phonecatServices',
  'LocalStorageModule'
]);

phonecatApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/phones', {
        templateUrl: 'partials/phone-list.html',
        controller: 'PhoneListCtrl'
      }).
      when('/phones/:phoneId', {
        templateUrl: 'partials/phone-detail.html',
        controller: 'PhoneDetailCtrl'
      }).
      when('/cart', {
        templateUrl: 'partials/cart.html',
        controller: 'cartCtrl'
      }).      
      otherwise({
        redirectTo: '/phones'
      });
  }]);

/*phonecatApp.config(function (localStorageServiceProvider) {
    localStorageServiceProvider.setPrefix('phonecatApp');
);
phonecatApp.config(function (localStorageServiceProvider) {
  localStorageServiceProvider.setStorageType('sessionStorage');
});
phonecatApp.config(function (localStorageServiceProvider) {
  localStorageServiceProvider.setStorageCookie(45, '<path>');
});
phonecatApp.config(function (localStorageServiceProvider) {
  localStorageServiceProvider.setStorageCookieDomain('<domain>');
});
phonecatApp.config(function (localStorageServiceProvider) {
  localStorageServiceProvider.setNotify(true, true);
});*/

phonecatApp.config(function (localStorageServiceProvider) {
  localStorageServiceProvider
    .setPrefix('phonecatApp')
    .setStorageType('localStorage')//sessionStorage
    .setNotify(true, true);
});