var app=angular.module('mainApp',['ui.router']);
app.controller("myCtrl",function(){
    
});
app.config(['$stateProvider',function($stateProvider){
    
    $stateProvider
    .state('home',{
        url:'/home',
        templateUrl:'home.html',
        controller:'myCtrl'
    })
}]);