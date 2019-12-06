var express = require('express');
var router = express.Router();

const { Author } = require("../sequelize");

router.get('/', function (req, res) {
    Author.findAll().then(data => {
        res.send(data);
    });
});

router.get('/:id', function (req, res) {
    Author.findAll({
        where: {
            id: req.params.id
        }
    }).then(data => {
        if (data.length === 0) return res.status(404).send("The author with the given id was not found");
        res.send(data);
    });
});

router.post('/', function (req, res) {
    const { name, image, birthdate, description } = req.body;
    Author.create(
        {
            name,
            image,
            birthdate,
            description
        }).then(data => {
            res.send(data);
        });
});

module.exports = router;

