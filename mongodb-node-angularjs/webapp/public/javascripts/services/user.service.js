define([
    'angular'
], function () {

    var module = angular.module('services');

    var avatar = [
        'christian', 'daniel', 'elliot',
        'helen', 'jenny', 'joe', 'justen',
        'matt', 'stevie', 'tom'
    ];

    var User = function (prop) {
        var _prop = prop || {};
        this._id = null;
        this.name = _prop.name || '';
        this.tel = _prop.tel || '';
        this.sex = _prop.sex || 0;
        this.avatar = _prop.avatar || '';
    };

    User.prototype.reset = function () {
        this.name = '';
        this.tel = '';
        this.sex = 0;
        this.avatar = '/images/avatar/small/' + avatar[Math.floor(Math.random() * 11) % 10] + '.jpg';
    };

    User.prototype.set = function (prop) {
        this._id = prop._id || this._id;
        this.name = prop.name || this.name;
        this.tel = prop.tel || this.tel;
        this.sex = prop.sex || this.sex;
        this.avatar = prop.avatar || this.avatar;
    };


    module.service('userService', ['$http', function ($http) {
        this.User = function (props) {
            return new User(props);
        };

        this.create = function (user) {
            return $http.post('/user/create', user);
        };

        this.getAll = function () {
            return $http.get('/user/all');
        };

        this.remove = function (user) {
            return $http.post('/user/remove', {
                _id: user._id
            })
        };

        this.update = function (user) {
            return $http.post('/user/update', user);
        };
    }]);
});
