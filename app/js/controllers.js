'use strict';

/* Controllers */

var phonecatControllers = angular.module('phonecatControllers', []);

phonecatControllers.controller('PhoneListCtrl', ['$scope', 'Phone',
  function($scope, Phone) {
    $scope.phones = Phone.query();
    $scope.orderProp = 'age';
  }]);

phonecatControllers.controller('PhoneDetailCtrl', ['$scope', '$routeParams', 'Phone',
  function($scope, $routeParams, Phone) {
    $scope.phone = Phone.get({phoneId: $routeParams.phoneId}, function(phone) {
      $scope.mainImageUrl = phone.images[0];
    });

    $scope.setImage = function(imageUrl) {
      $scope.mainImageUrl = imageUrl;
    };
  }]);

phonecatControllers.controller('cartCtrl', function($scope, localStorageService) {
  $scope.checkStorage = function(){
    if(localStorageService.isSupported) {
      var storageType = localStorageService.getStorageType();
      $scope.cartDetails = [
        {
          "sessionId" :"",
          "cartId": "", 
          "items": [
            {
              "itemId":"",
              "itemName":"",
              "quantity":"",
              "itemDescription":"",
              "price":""
            },
            {              
              "itemId":"",
              "itemName":"",
              "quantity":"",
              "itemDescription":"",
              "price":""
            }         
          ], 
          "userDetails":{
              "userId":"1",
              "userEmail": "test@avon.com", 
              "contactNo": "9876431135"              
            }
        }
      ];
      localStorageService.set('cartDetails',$scope.cartDetails);
      console.log(storageType);
    }else{
      alert('Not Supported Localstorage');
    }
  };
});
