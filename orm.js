/**
 * Created by yongle on 14-7-17.
 */
var config = require('./config/db.json'),
    Sequelize = require('sequelize');

var orm = new Sequelize(config.database, config.username, config.password, config);
module.exports = orm;