var express = require('express');
var router = express.Router();
/*var jwt = require( 'jsonwebtoken' );
var config = require( '../config' );*/
var HandlerGenerator = require("../handlegenerator.js");

HandlerGenerator = new HandlerGenerator();

console.log("login--->", HandlerGenerator);

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post( '/login', HandlerGenerator.login);

module.exports = router;
