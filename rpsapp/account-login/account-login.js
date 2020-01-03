var accountLoginModule = angular.module("account-login", ["ngRoute"]);

accountLoginModule.component("account-login", { 
	templateUrl: "account-login/account-login.template.html", 
	controller: function accountLoginController($http) {
		var self = this; var reqUrl = "http://localhost:9000/account-login"; $http.get(reqUrl).then(function(res){})
	}
});

function passwordShow(){
	if($("#password").type === "password")
	{
		$("#password").type = "text";
	}
	else
	{
		$("#password").type = "password";
	}
}

function loginAccount(){
}