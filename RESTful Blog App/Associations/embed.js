var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/restful_blog_app");


//POST - title, content
var postSchema = new mongoose.Schema({
    title: String,
    content: String
});

var postModel = mongoose.model("Post", postSchema);

//USER - email, name
var userSchema = new mongoose.Schema({
    email: String,
    name: String,
    posts: [postSchema]
});

var User = mongoose.model("User", userSchema);

var newUser = new User({
    email: "charlie@brown.ed",
    name: "c"
});

newUser.save(function (err, user) {
    if (err) {
        console.log(err);
    } else {
        console.log(user);
    }
});