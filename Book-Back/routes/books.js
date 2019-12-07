var express = require('express');
var router = express.Router();
var { Book, BookAuthor } = require("../sequelize");

router.get('/', function (req, res) {
    Book.findAll().then(data => {
        res.send(data);
    });
});

router.get('/:id', function (req, res) {
    Book.findOne({
        where: {
            id: req.params.id
        }
    }).then(data => {
        if (!data) return res.status(404).send("The book with the given id was not found");
        res.send(data);
    });
});

router.post('/', function (req, res) {
    const { name, isbn, image, description, publishDate, editorialId } = req.body;
    Book.create(
        {
            name, isbn, image, description, publishDate, editorialId
        }).then(data => {
            res.send(data);
        });
});

router.put('/:id', function (req, res) {
    const { name, isbn, image, description, publishDate, editorialId } = req.body;
    Book.update(
        {
            name, isbn, image, description, publishDate, editorialId
        },{
            returning: true,
            where: {
                id: req.params.id
            }
        }).then(([ rowsUpdate, [updatedAuthor] ]) => {
            if (rowsUpdate===0) return res.status(404).send("The book with the given id was not found")
            res.send(updatedAuthor);
        });
});

router.delete('/:id', function (req, res) {
    Book.destroy(
        {
            where: {
                id: req.params.id
            }
        }).then(data => {
            return data === 0 ? res.status(404).send("The book with the given id was not found") : res.sendStatus(204)
        });
});

router.post('/:bookId/authors/:authorId', function (req, res) {
    BookAuthor.create({ bookId: req.params.bookId, authorId: req.params.authorId }).then(data => {
        res.send(data);
    })
});

module.exports = router;
