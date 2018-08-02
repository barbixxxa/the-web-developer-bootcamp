var express = require('express');
var app = express();

app.get("/", function (req, res) {
    res.send("Hello World!");
});
app.get("/bye", function (req, res) {
    res.send("Goodbye!");
});
app.get("/dog", function (req, res) {
    res.send("Miau");
});

app.get("/r/:subredditName/comments/:id/:title", function (req, res) {
    res.send("Reddit - " + req.params.subredditName);
});

app.get("*", function (req, res) {
    res.send("404");
});

app.listen(3000, function () {
    console.log("Serving on port: 3000");
});