'use strict';

var LIMIT = 50;
var PAGE = 0;
    
module.exports = {
  '/api/users': function(req, res) {
    var limit = req.query.limit || LIMIT;
    var page = req.query.page || PAGE;
    var skip = limit * page;

      req.db.User.find({}).sort({timestamp: -1}).skip(skip).limit(limit).exec(function (err, docs) {
        if (err) throw err;
        
        var obj = {page: page, count: docs.length, results: docs}
        res.json(obj);
      })
  },
  '/api/users/:id': function(req, res) {
      req.db.User.findOne({_id: req.params.id}).exec(function (err, doc) {
        if (err) throw err;
        
        res.json(doc);
      })
  }
}