var express = require('express');
var geolocation = require('geolocation');
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


/* GET home page. */

getRequest('https://www.alphavantage.co/query?function=' + stockInfo.functionKey + '&symbol=' + stockInfo.apple +'&apikey=' + stockInfo.stockAPI_Key + '').then(function (body) {
    stocks = JSON.parse(body); 
    return getRequest('https://api.darksky.net/forecast/' + weatherInfo.weatherAPI_Key + '/' + weatherInfo.latt + ',' + weatherInfo.long + '');
}).then(function(body2){
	weather = JSON.parse(body2);
	return getRequest('https://newsapi.org/v2/top-headlines?country=us&apiKey=06f95e43d0fa49fcb45e1a70b7c41dd8');
}).then(function(body3){
	news = JSON.parse(body3)
return getRequest('https://newsapi.org/v2/top-headlines?sources=espn&apiKey=06f95e43d0fa49fcb45e1a70b7c41dd8');
}).then(function(body4){
  sports = JSON.parse(body4)
return getRequest('https://newsapi.org/v2/top-headlines?sources=the-wall-street-journal&apiKey=06f95e43d0fa49fcb45e1a70b7c41dd8');
}).then(function(body4){
  stockNews = JSON.parse(body4)
router.get('/', function(req, res, next) {
  res.render('index', {
  		stocks  : stocks,
  		weather : weather,
  		news    : news,
  		today   : today,
      sports  : sports,
      stockNews: stockNews
  });
});
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
