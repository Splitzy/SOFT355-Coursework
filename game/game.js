var gameModule = angular.module("game", ["ngRoute"]);

gameModule.component("game", { 
	templateUrl: "game/game.template.html", 
	controller: function gameController($http) {
		var self = this; var reqUrl = "http://localhost:9000/game"; $http.get(reqUrl).then(function(res){})
	}
});