/**
 * Created by roberto.carrillo on 5/25/2015.
 */
var http = require("http");
var express = require("express");
var app = express();
var hb = require("express-handlebars");

app.engine("handlebars", hb());
app.set("view engine", "handlebars");

app.use(express.static(__dirname + "/public"));

app.get("/", function (req, res) {
  res.render("home", {title: "Hello from Webstorm", message: "Hi there!"});
});

app.get("/api/toppings", function (req, res) {
  res.status(200);
  res.set("Content-Type", "application/json");
  res.send(["pepperoni", "sausage", "spinach", "mushrooms", "ham", "pineapple"]);
});

var server = http.createServer(app);

server.listen(3000);