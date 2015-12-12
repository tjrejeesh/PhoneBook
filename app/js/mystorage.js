            //Create the AngularJS module named StorageService
            //Create getLocalStorage service to access UpdateEmployees and getEmployees method  
            var storageService = angular.module('storageService', []);  
            storageService.factory('getLocalStorage', function () {                  
                var employeeList = {};  
                return {  
                    list: employeeList,  
                    updateEmployees: function (EmployeesArr) {  
                        if (window.localStorage && EmployeesArr) {  
                            //Local Storage to add Data  
                            localStorage.setItem("employees", angular.toJson(EmployeesArr));  
                        }  
                        employeeList = EmployeesArr;  
                         
                    },  
                    getEmployees: function () {  
                        //Get data from Local Storage  
                        employeeList = angular.fromJson(localStorage.getItem("employees"));                         
                        return employeeList ? employeeList : [];  
                    }  
                };  
  
            });  	 	

// Create the AngularJS module Employees and Register the storageService with it  
var app = angular.module('Employees', ['storageService']);    
  
// Create the Controller EmployeeController  
app.controller('EmployeesController', ['$scope', 'getLocalStorage', function ($scope, getLocalStorage) {    
    $scope.appTitle = "LocalStorage Demo";    
    $scope.appHeadline = "AngularJS and HTML5";    
  
    //Read the Employee List from LocalStorage    
    $scope.employees = getLocalStorage.getEmployees();    
  
    //Count the Employee List    
    $scope.count = $scope.employees.length;    
  
  
    //Add Employee - using AngularJS push to add Employee in the Employee Object    
    //Call Update Employee to update the locally stored Employee List    
    //Reset the AngularJS Employee scope    
    //Update the Count    
    $scope.addEmployee = function () {    
        $scope.employees.push({ 'empno': $scope.empno, 'empname': $scope.empname, 'empsalary': $scope.empsalary});    
        getLocalStorage.updateEmployees($scope.employees);    
        $scope.empno = '';    
        $scope.empname = '';    
        $scope.empsalary = '';    
        $scope.count = $scope.employees.length;    
    };    
        
    //Delete Employee - Using AngularJS splice to remove the emp row from the Employee list    
    //All the Update Employee to update the locally stored Employee List    
    //Update the Count    
    $scope.deleteEmployee = function (emp) {                       
        $scope.employees.splice($scope.employees.indexOf(emp), 1);    
        getLocalStorage.updateEmployees($scope.employees);    
        $scope.count = $scope.employees.length;    
    };    
}]);              