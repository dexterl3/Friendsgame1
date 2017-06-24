
/*
 * GET home page.
 */

 /*
var express = require('express');
var router = express.Router(); //?

router.get('/userlist', function(req, res) {
    collection.find({},{},function(e,docs){
        res.render('userlist', {
            "userlist" : docs
        });
    });
});

*/ 
//exports or router
exports.index = function(req, res){
  res.render('index');
};

exports.partials = function (req, res) {
  var name = req.params.name;
  
  res.render('partials/' + name);
  
};



// module.exports = router;