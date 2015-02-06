var user = require('./../models').user;
var daoBase = require('./daoBase.dao');
var userDao = new daoBase(user);

module.exports = userDao;