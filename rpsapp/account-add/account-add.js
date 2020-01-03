var mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/accountsdb", { useNewUrlParser: true});

var Account = mongoose.model("Account", {userName: String, password: String});

var accountAddModule = angular.module("account-add", ["ngRoute"]);

accountAddModule.component("account-add", { 
	templateUrl: "account-add/account-add.template.html", 
	controller: function accountAddController($http) {
		var self = this; var reqUrl = "http://localhost:9000/account-add"; $http.get(reqUrl).then(function(res){})
	}
});

function passwordShow(){
	if($("#password").type === "password" && $("#passwordCheck").type === "password")
	{
		$("#password").type = "text";
		$("#passwordCheck").type = "text";
	}
	else
	{
		$("#password").type = "password";
		$("#passwordCheck").type = "password";
	}
}

function createAccount(){
	if($("#password").value === $("#passwordCheck").value)
	{
		var myAccount = new Account ({userName: $("#userName").value, password: $("#password")})'
		myAccount.save(function(err){
			console.log("Added Account");
		});
	}
}
