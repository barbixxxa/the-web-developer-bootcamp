var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/restful_blog_app");

var Post = require("./models/post");
var User = require("./models/user");

Post.create({
    title: "how to cook2",
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