var express = require("express"),
    app = express(),
    bodyParser = require("body-parser"),
    mongoose = require("mongoose"),
    Campground = require("./models/campground"),
    seedDB = require("./seeds");


mongoose.connect("mongodb://localhost/yelp_camp");
app.use(bodyParser.urlencoded({
    extended: true
}));
seedDB();

app.set("view engine", "ejs");

app.get("/", function (req, res) {
    res.render("landing");
});

app.get("/campgrounds", function (req, res) {

    Campground.find({}, function (err, campgrounds) {
        if (err) {
            console.log(err);
        } else {
            res.render("campgrounds/index", {
                campgrounds: campgrounds
            });
        }
    });
});

app.post("/campgrounds", function (req, res) {
    var name = req.body.name;
    var image = req.body.image;
    var description = req.body.description;
    var newCampground = {
        name: name,
        image: image,
        description: description
    };

    // https://farm9.staticflickr.com/8442/7962474612_bf2baf67c0.jpg
    // https://farm1.staticflickr.com/60/215827008_6489cd30c3.jpg
    // https://farm7.staticflickr.com/6057/6234565071_4d20668bbd.jpg
    // https://www.reserveamerica.com/webphotos/NH/pid270015/0/540x360.jpg



    Campground.create(
        newCampground,
        function (err, newCampground) {
            if (err) {
                console.log(err);
            } else {
                res.redirect("/campgrounds");
            }
        });
});

app.get("/campgrounds/new", function (req, res) {
    res.render("campgrounds/new");
});

//SHOW - shows more info about one campground
app.get("/campgrounds/:id", function (req, res) {
    Campground.findById(req.params.id).populate("comments").exec(function (err, foundCampground) {
        if (err) {
            console.log(err);
        } else {
            res.render("campgrounds/show", {
                campground: foundCampground
            });
        }
    });
});

// ===================
//COMMENTS ROUTES
// ===================

app.get("/campgrounds/:id/comments/new", function (req, res) {
    Campground.findById(req.params.id, function (err, campground) {
        if (err) {
            console.log(err);
        } else {
            res.render("comments/new", {
                campground: campground
            });
        }
    });
});

app.listen(3000, function () {
    console.log("Running on: 3000");
});