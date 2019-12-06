var rpsModule = angular.module("rps", ["ngRoute"]);

rpsModule.component("rps", { 
	templateUrl: "rps/rps.template.html", 
	controller: function rpsController($http) {
		var self = this; var reqUrl = "http://localhost:9000/rps"; $http.get(reqUrl).then(function(res){})
	}
});