var roomCreationModule = angular.module("room-creation", ["ngRoute"]);

roomCreationModule.component("room-creation", { 
	templateUrl: "room-creation/room-creation.template.html", 
	controller: function roomCreationController($http) {
		var self = this; var reqUrl = "http://localhost:9000/room-creation"; $http.get(reqUrl).then(function(res){})
	}
});