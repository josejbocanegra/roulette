var express = require('express');
var router = express.Router();

var { Editorial } = require("../sequelize");

router.get('/', function (req, res) {
    Editorial.findAll().then(data => {
        res.send(data);
    });
});

router.get('/:id', function (req, res) {
    Editorial.findOne({
        where: {
            id: req.params.id
        }
    }).then(data => {
        if (!data) return res.status(404).send("The editorial with the given id was not found");
        res.send(data);
    });
});

router.post('/', function (req, res) {
    const { name } = req.body;
    Editorial.create(
        {
            name
        }).then(data => {
            res.send(data);
        });
});

router.put('/:id', function (req, res) {
    const { name } = req.body;
    Editorial.update(
        {
            name
        },{
            returning: true,
            where: {
                id: req.params.id
            }
        }).then(([ rowsUpdate, [updatedAuthor] ]) => {
            if (rowsUpdate===0) return res.status(404).send("The editorial with the given id was not found")
            res.send(updatedAuthor);
        });
});

router.delete('/:id', function (req, res) {
    Editorial.destroy(
        {
            where: {
                id: req.params.id
            }
        }).then(data => {
            return data === 0 ? res.status(404).send("The editorial with the given id was not found") : res.sendStatus(204)
        });
});

module.exports = router;
