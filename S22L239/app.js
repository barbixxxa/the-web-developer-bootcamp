var express = require('express');
var app = express();

app.get("/", function (req, res) {
    res.send("Hi there, welcome to my assignment");
});

app.get("/speak/:animal", function (req, res) {
    var animal = {
        name: req.params.animal,
        sound: ""
    };
    switch (animal.name) {
        case "pig": animal.sound = "oink";
            break;

        case "cow": animal.sound = "moo";
            break;

        case "dog": animal.sound = "woof woof";
            break;

        default:
            animal.sound = "zzZZz";
            break;
    }
    res.send("The " + animal.name + " says " + animal.sound);
});

app.get("/repeat/:word/:i", function (req, res) {
    var word = req.params.word;
    var i = req.params.i;
    var ret = "";

    for (let index = 0; index < i; index++) {
        ret += word + " ";
    }

    res.send(ret);
});

app.get("*", function (req, res) {
    res.send("404");
});

app.listen(3000, function (req, res) {
    console.log("port: 3000");
});