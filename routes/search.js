/*
    hackday-basic-nodejs for hackday usage
*/
var _ = require("lodash");
var Promise = require('promise');
var config = require('./../env.json')[process.env.NODE_ENV || 'development'];
var searchModel = {};

var searchPromise = function(conf) {
    return new Promise(function (resolve, reject) {
        console.log("== promise");
        resolve(hits);
        /*
        client.search({
          index: conf.index,
          type: conf.type,
          q: escape(conf.query),
          size: conf.limit
        }).then(function (body) {
          var hits = body.hits.hits;
          resolve(hits);
        }, function (error) {
          console.trace(error.message);
        });
        */
    });
}

/*
  index: bryanyuan2
  type: media
*/
searchModel.getResult = function(req, res) {
    var output = res;
    var conf = {
        test: 10
    };
    output.send("test result");
    /* promise */
    /*
    searchPromise(conf).then(function(res){
        output.send("test");
    });
    */
};

module.exports = searchModel;
