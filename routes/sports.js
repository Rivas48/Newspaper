var express = require('express');
var router = express.Router();
const https = require('https');
var request = require('request');
var stockInfo = require('../NodeAPI/alphavantageAPI');
var weatherInfo = require('../NodeAPI/DarkSkyAPI');
var newsInfo    = require('../NodeAPI/NewsAPI');
var request = require('request-promise');
var stocks;
var weather;
var news;
var today = new Date();
var dd = today.getDate();
var mm = today.getMonth()+1;
var yyyy = today.getFullYear();
today = ['' + yyyy + '-' + mm + '-05'];


router.get('/', function(req, res, next) {
  res.render('sports');
});


function getRequest(url) {
    return new Promise(function (success, failure) {
        request(url, function (error, response, body) {
            if (!error && response.statusCode == 200) {
                success(body);
                

                
            } else {
                failure(error);
                console.log('not work');
            }
        });
    });
}




module.exports = router;

