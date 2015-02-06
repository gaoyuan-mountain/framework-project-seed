var user = require('./../models').user;
var userDao = require('./../dao/user.dao');

exports.create = function (req, res) {
    var createUser = new user(req.body);
    user.findOne({
        name: req.body.name
    }, function (err, user) {
        if (err) {
            return res.json({
                err: err
            });
        }
        if (user) {
            return res.json({
                err: '用户名已经存在'
            });
        }
        createUser.save(function (err, user) {
            if (err) {
                return res.json({
                    err: err
                });
            }
            res.json(user);
        });
    });
};

exports.getAll = function (req, res) {
    userDao.getAll(function (err, users) {
        res.send(users);
    });
};

exports.remove = function (req, res) {
    userDao.remove(req.body._id, function (err, user) {
        res.send(user);
    });
};

exports.update = function (req, res) {
    userDao.update({
        _id: req.body._id
    }, req.body, null, function (err, user) {
        res.send(req.body);
    });
}
