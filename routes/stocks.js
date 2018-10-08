var express = require('express');
var router = express.Router();
const https = require('https');
var request = require('request');
var geolocation = require('geolocation')


/*
getRequest('').then(function(body){
	variable = JSON.parse(body);
	return getRequest('');
}).then(function (body2) {
	variable = JSON.parse(body2);
});
*/
router.get('/', function(req, res, next) {
	res.render('stocks');
});



module.exports = router;
