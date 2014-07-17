/**
 * Created by yongle on 14-7-17.
 */
var config = require('../config/db.json');
var Sequelize = require('sequelize');
var fs = require('fs');
var path = require('path');
var orm = new Sequelize(config.database, config.username, config.password, config);

var domainDir = path.normalize(__dirname + "/.." + '/domain/');

var user = path.basename("User", '.js');
orm.import(domainDir + user);
var User = orm.model(user);

User.sync({force: true}).on("success",function () {
    console.log("User success...");
}).on("fail", function () {
    console.log("User fail...");
});