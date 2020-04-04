var express = require("express");
var router = express.Router();
const fs = require('fs');
const srcDir = 'src/';

router.get("/", function (req, res, next) {
    fs.readFile(srcDir + 'jeopardy_qa.csv', 'utf8', (err, data) => {
        if (err) {
            console.error('Error reading csv: ' + err);
        } else {
            console.log(data);
            res.send(data);
        }
    });
});

module.exports = router;