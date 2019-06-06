// Dependencies:
var express = require("express");
var path = require("path");

// Set up Express:
var app= express();
var PORT=3001;

// Reservations Array: 
var reservations = [];
var waitlist = [];

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "./views/home.html"));
  });

app.get("/home.html", function(req, res) {
res.sendFile(path.join(__dirname, "./views/home.html"));
});

app.get("/reserve.html", function(req, res) {
res.sendFile(path.join(__dirname, "./views/reserve.html"));
});

app.get("/tables.html", function(req, res) {
res.sendFile(path.join(__dirname, "./views/tables.html"));
});

app.get("/api/reservations", fuction(req, res){
    res.json
})


// ===========================================================
app.listen(PORT, function() {
    console.log("App listenting on PORT " + PORT);
});

   