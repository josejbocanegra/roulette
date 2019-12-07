var express = require('express');
var router = express.Router();

const { Author, BookAuthor, Book } = require("../sequelize");

router.get('/', function (req, res) {
    Author.findAll().then(data => {
        res.send(data);
    });
});

router.get('/:id', function (req, res) {
    Author.findOne({
        where: {
            id: req.params.id
        }
    }).then(data => {
        if (!data) return res.status(404).send("The author with the given id was not found");
        res.send(data);
    });
});

router.get('/:id/books', function (req, res) {
    Author.findOne({
        where: {
            id: req.params.id
        },
        include: [Book]
    }).then(data => {
        if (!data) return res.status(404).send("The author with the given id was not found");
        res.send(data.books);
    });
});

router.post('/', function (req, res) {
    const { name, image, birthDate, description } = req.body;
    Author.create(
        {
            name,
            image,
            birthDate,
            description
        }).then(data => {
            res.send(data);
        });
});

router.put('/:id', function (req, res) {
    const { name, image, birthDate, description } = req.body;
    Author.update(
        {
            name,
            image,
            birthDate,
            description
        },{
            returning: true,
            where: {
                id: req.params.id
            }
        }).then(([ rowsUpdate, [updatedAuthor] ]) => {
            if (rowsUpdate===0) return res.status(404).send("The author with the given id was not found")
            res.send(updatedAuthor);
        });
});

router.delete('/:id', function (req, res) {
    Author.destroy(
        {
            where: {
                id: req.params.id
            }
        }).then(data => {
            return data === 0 ? res.status(404).send("The author with the given id was not found") : res.sendStatus(204)
        });
});

router.post('/:authorId/books/:bookId', function (req, res) {
    Book.findOne({
        where: {
            id: req.params.bookId
        }
    }).then(data => {
        if (!data) return res.status(404).send("The book with the given id was not found");
        BookAuthor.create({ bookId: req.params.bookId, authorId: req.params.authorId }).then(data => {
            res.send(data);
        })
    });
});

router.get('/:authorId/books/:bookId', function (req, res) {
    Author.findOne({
        include: [{
            model: Book,
            where: { id: req.params.bookId }
        }]
    }).then(data => {
        if (!data) {
            Book.findOne({
                where: { id: req.params.bookId }
            }).then(data=>{
                if (!data)
                    return res.status(404).send("The book with the given id was not found")
                else
                    return res.status(412).send("The book is not associated to the author")
            })
        } else {
            res.send(data)
        }
    });
});

router.put('/:authorId/books', function (req, res) {
    Author.findOne({
        where: { id: req.params.authorId },
        include:[{ model: Book}]
    }).then(author => {
        if (!author) return res.status(404).send("The author with the given id was not found")
        const books = req.body.map(e=>e.id);
        Book.findAll({
            where: {
                id: books
            }
        }).then(data=>{
            if (data.length === books.length){
                author.addBooks(books);
                return res.send(data);
            } else {
                return res.status(404).send("The book with the given id was not found");
            }
        });
    });
});

router.delete('/:authorId/books/:bookId', function (req, res) {
    Author.findOne({
        where: { id: req.params.authorId },
        include:[{ model: Book}]
    }).then(author => {
        if (!author) return res.status(404).send("The author with the given id was not found")
        author.removeBooks(req.params.bookId).then(data=>{
            if (data === 0 ) return res.status(404).send("The book with the given id was not found")
            res.sendStatus(204);
        })
    });
});

module.exports = router;

