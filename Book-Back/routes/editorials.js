var express = require('express');
var router = express.Router();

var { Editorial } = require("../sequelize");

/* GET home page. */
router.get('/', function (req, res) {
    Editorial.findAll().then(data => {
        res.send(data);
    })
});

module.exports = router;
