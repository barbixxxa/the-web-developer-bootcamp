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
    posts: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Post"
    }]
});

var User = mongoose.model("User", userSchema);

postModel.create({
    title: "how to cook",
    content: "bla"
}, function (err, post) {
    User.findOne({
        email: "bob@gmail.com"
    }, function (err, foundUser) {
        if (err) {
            console.log(err);
        } else {
            foundUser.posts.push(post);
            foundUser.save(function (err, data) {
                if (err) {
                    console.log(err);
                } else {
                    console.log(data);
                }
            });
        }
    });
});

// User.create({
//     email: "bob@gmail.com",
//     name: "bob"
// });