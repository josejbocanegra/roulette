var express = require('express');
var router = express.Router();

let socketApi = require("../socketApi");

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});

router.post('/', function (req, res, next) {

  socketApi.sendNotification(req.body);
  res.send("dsfs");
});

module.exports = router;
