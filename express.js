express = require("express");
var app = express();
app.use(function(req, res, next) {
res.header("Access-Control-Allow-Origin", "*");
next();
});

app.get("/account-add");

app.get("/account-login");

app.get("/room-creation");

app.get("/game");

app.get("/rps");

const appFolder = "dist/rpsapp";

app.get("*.*", express.static(appFolder));

app.get("/", function(req, res {
res.status(200).sendFile("/", {root: appFolder});
})
