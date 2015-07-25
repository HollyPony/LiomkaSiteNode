var express = require('express');
var router = express.Router();
var settings = require('../settings')();
var db = require('../datas/db');

/* GET home page. */


var iterateOrders = function (callback) {
    db.collection('projects').find().sort({"ordering": 1, "sub_projects.ordering": 1}).toArray(function (err, result) {
        callback(err, result);
    });
};

router.get('/', function(req, res, next) {
    iterateOrders(function (err, tableContent) {
        res.render('index', {
            title: 'Liomka.IO',
            projects: tableContent,
            path: req.path
        });
    });
});

router.get('/cv', function (req, res, next) {
    res.render('cv', {
        title: 'Liomka.IO',
        path: req.path
    });
});

router.get('/demo', function (req, res, next) {
    res.render('jswsclient', {
        title: 'Liomka.IO',
        wsserver: settings.WSSERVER_URI,
        path: req.path
    });
});

module.exports = router;
