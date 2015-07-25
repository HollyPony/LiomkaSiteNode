var express = require('express');
var router = express.Router();
var settings = require('../settings')();

/* GET home page. */
router.get('/', function(req, res, next) {

    var projects = [
        {
            name: "1",
            title: "myFirstTtiel",
            anchor_name: "an anchor name for project",
            content: "my content<b> test </b>",
            sub_projects: [
                {
                    anchor_name: "an anchar name for subproject",
                    title: "title subproject",
                    content: "content subproject"
                }
            ],
            tags: []
        },
        {
            name: "2",
            title: "Olaaaa",
            sub_projects: [
                {
                    anchor_name: "an anchar name for subproject",
                    title: "title subproject",
                    content: "content subproject"
                }
            ],
            tags: []
        }];

    res.render('index', { title: 'Liomka.IO', projects: projects });
});

router.get('/cv', function (req, res, next) {
    res.render('cv');
});

router.get('/demo', function (req, res, next) {
    res.render('jswsclient', {
        wsserver: settings.WSSERVER_URI,
    });
});

module.exports = router;
