
var express = require("express");
var exphbs = require("express-handlebars");

var app = express();
var PORT = process.env.PORT || 8080;

var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "Jak#4234",
  database: "burger_db"
});

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// var burgers = [
//   {
//     burger: "Ground chuck, cheddar cheese, lettuce, tomato, and house sauce."
//   }, {
//     burger: "Steakburger, sauteed onions, swiss cheese, wasabi sauce"
//   }
// ];

app.get("/", function(req, res) {
    connection.query("SELECT * FROM burgers;", function(err, data) {
      if (err) {
        return res.status(500).end();
      }
  
      res.render("index", { plans: data });
    });
  });

app.listen(PORT, function() {
  console.log("Server listening on: http://localhost:" + PORT);
});
