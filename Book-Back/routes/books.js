var express = require('express');
var router = express.Router();
var { Book, BookAuthor } = require("../sequelize");


router.get('/', function (req, res) {
    Book.findAll().then(data => {
        res.send(data);
    });
});

router.post('/:idbook/authors/:idauthor', function (req, res) {
    BookAuthor.create({ bookId: req.params.idbook, authorId: req.params.idauthor }).then(data => {
        res.send(data);
    })
});

module.exports = router;
