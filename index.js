var app = angular.module('myApp',['ng-admin']);

app.config(['NgAdminConfigurationProvider', function(NgAdminConfiguraionProvider){
var nga = NgAdminConfigurationProvider;
var admin = nga.application('My First Admin');

nga.configure(admin);

}]);
