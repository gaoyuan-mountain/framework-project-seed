define([
    'angular'
], function () {

    var module = angular.module('controllers');

    /*
    //the second type of DI
    module.controller(function ($scope, userService) {
        //....
    });
    
    //the third type of DI
    var indexController = function () {
        //...
    };
    indexController.$inject = ['$scope', 'userService'];
    module.controller('indexController', indexController);
    */

    module.controller('indexController', [
        '$scope',
        'userService',
        function ($scope, userService) {
            this.iniModels = function () {
                $scope.models = {};
                $scope.models.isMeizi = {
                    label: '妹子？',
                    value: false
                };
                $scope.models.user = userService.User();
                $scope.models.users = [];
            };

            this.iniActions = function () {
                $scope.actions = {};
                $scope.actions.showAddModal = function () {
                    $scope.models.user.reset();
                    $('.modal').modal('show');
                };

                $scope.actions.showEditModal = function (user) {
                    $scope.models.user.set(user);
                    $('.modal').modal('show');
                };

                $scope.actions.saveUser = function () {
                    if ($scope.models.user._id) {
                        $scope.actions.updateUser($scope.models.user);
                    } else {
                        $scope.actions.addUser($scope.models.user);
                    }
                };

                $scope.actions.addUser = function (user) {
                    user.sex = $scope.models.isMeizi.value ? 1 : 0;
                    userService.create(user)
                        .success(function (response) {
                            user.reset();
                            $scope.models.users.push(response);
                        });
                };

                $scope.actions.updateUser = function (user) {
                    user.sex = $scope.models.isMeizi.value ? 1 : 0;
                    userService.update(user)
                        .success(function (response) {
                            user.reset();
                            angular.forEach($scope.models.users, function (_user, index) {
                                if (_user._id == response._id) {
                                    $scope.models.users[index] = response;
                                    return false;
                                }
                            });
                            $scope.models.users;
                        });
                };

                $scope.actions.getAllUsers = function () {
                    userService.getAll()
                        .success(function (response) {
                            $scope.models.users = response || [];
                        });
                };

                $scope.actions.removeUser = function (user, index) {
                    userService.remove(user)
                        .success(function (response) {
                            $scope.models.users.splice(index, 1);
                        });
                };
            };

            this.ini = function () {
                this.iniModels();
                this.iniActions();
                $scope.actions.getAllUsers();
            };

            this.ini();
        }
    ]);

});
