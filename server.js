var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var Pusher = require('pusher');

var pusher = new Pusher({
    app_id: "1048586",
    key : "1c9cb1b2261aaaa83806",
    secret: "8efed3f362759dead511",
    cluster: "ap1",
    encrypted: true,
});
var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

// Error Handler for 404 Pages
app.use(function(req, res, next) {
    var error404 = new Error('Route Not Found');
    error404.status = 404;
    next(error404);
});

module.exports = app;

app.post('/comment', function(req, res){
    console.log(req.body);
    var newComment = {
      name: req.body.name,
      email: req.body.email,
      comment: req.body.comment
    }
    pusher.trigger('flash-comments', 'new_comment', newComment);
    res.json({ created: true });
  });

app.listen(9000, function(){
  console.log('Example app listening on port 9000!')
});