var express = require("express");
var router = express.Router();

const Mongolib = require("../Mongolib");

/* GET home page. */
router.get("/", function (req, res, next) {
  Mongolib.getDatabase((db, client) => {
    Mongolib.findDocuments(db, (docs) => {
      res.json(docs);
    });
  });
});

module.exports = router;
