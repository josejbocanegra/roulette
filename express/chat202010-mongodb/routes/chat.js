var express = require('express');
var router = express.Router();
var socketApi = require("../socketApi");

/* GET users listing. */
router.post('/', function (req, res, next) {
  socketApi.sendNotification(req.body);
  res.send(req.body);
});

module.exports = router;
