angular.module("rpsapp").config(["$routeProvider", "$locationProvider",
function config($routeProvider, $locationProvider) {
	$routeProvider.when("/account-add", { template: '<account-add></account-add>'})
	.when("/account-login", { template: '<account-login></account-login>'})
	.when("/room-creation", { template: '<room-creation></room-creation)'})
	.when{"/game", { template: '<game></game>'})
	.when("/rps", { template: '<rps></rps>'})
	.otherwise{"/rps")}
]);