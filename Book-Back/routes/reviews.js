var express = require('express');
var router = express.Router();
var { Review, Book, Editorial } = require("../sequelize");

router.get('/', function (req, res) {
    Review.findAll({ include: [Book] }).then(data => {
        res.send(data);
    });
});

module.exports = router;
