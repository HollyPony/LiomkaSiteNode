/**
 * Created by Liomka on 25/07/15.
 */

var settings = require('../settings')(),
    mongoskin = require('mongoskin');

module.exports = mongoskin.db(settings.DATABASE_URI);