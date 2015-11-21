var express = require('express');
var router = express.Router();
var settings = require('../settings')();
var db = require('../datas/db');

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

router.get('/back', function (req, res, next) {
    iterateOrders(function (err, projects) {
        res.render('back', {
            title: 'Liomka.IO',
            projects: projects,
            path: req.path
        });
    });
});

router.post('/back', function(req, res, next) {
    db.collection('projects').updateById(
        req.body.id,
        {
            '$set': {
                'name': req.body.name,
                'title': req.body.title,
                'description': req.body.description,
                'anchor_name': req.body.anchor_name,
                'is_professional': req.body.is_professional !== undefined,
                'ordering': req.body.ordering,
                'tags': req.body.tags,
                'content': req.body.content
                //'sub_projects': req.body.sub_projects
            }
        }, function (err) {
            if (err) throw err;
            console.log('Updated!');
        });

    res.redirect('/back');
});

module.exports = router;
