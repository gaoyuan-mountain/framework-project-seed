import 'angular';
import 'angular-mocks';
import LoginController from '../index.controller';

describe('Intro Controller', () => {
	let $controller;
	let $scope, $timeout, $q, windowMock;
	let UserServiceMock;
	angular.module('IntroIndexModule', ['ngMock']);
	LoginController.inject();

	beforeEach(() => {
		angular.mock.module('IntroIndexModule');
	});
	
	beforeEach(() => {
		inject(($rootScope, _$controller_, _$q_, _$timeout_) => {
			$scope = $rootScope.$new();
			$timeout = _$timeout_;
			$q = _$q_;
			$controller = _$controller_;
			windowMock = {
				location: {
					href: '',
					reload: function () {}
				}
			};
			spyOn(windowMock.location, 'reload');
		});
	});

	beforeEach(() => {
		UserServiceMock = jasmine.createSpyObj('UserService', ['login', 'getInstance']);
		UserServiceMock.getInstance.and.returnValue({
			_id: '',
			name: '',
			passowrd: ''
		});
		UserServiceMock.login.and.returnValue($q.when({
			data: {
				status: 'success'
			}
		}));
	});

	beforeEach(() => {
		$controller('LoginController', {
			$scope: $scope,
			UserService: UserServiceMock,
			$window: windowMock
		});
	});

	it('should do login if input is valid', () => {
		$scope.loginForm = {};
		$scope.loginForm.$invalid = false;
		$scope.login();
		expect(UserServiceMock.login).toHaveBeenCalled();
	});

	it('should not do login if input is invalid', () => {
		$scope.loginForm = {};
		$scope.loginForm.$invalid = true;
		$scope.login();
		expect(UserServiceMock.login).not.toHaveBeenCalled();
	});

	it('show change location to todo.html if login success', () => {
		$scope.loginForm = {};
		$scope.loginForm.$invalid = false;
		$scope.login();
		expect(UserServiceMock.login).toHaveBeenCalled();
		$timeout.flush();
		expect(windowMock.location.href).toEqual('todo.html');
	});

	it('show reload page if login failed', () => {
		UserServiceMock.login.and.returnValue($q.when({
			data: {
				status: 'failed'
			}
		}));
		$scope.loginForm = {};
		$scope.loginForm.$invalid = false;
		$scope.login();
		expect(UserServiceMock.login).toHaveBeenCalled();
		$timeout.flush();
		expect(windowMock.location.reload).toHaveBeenCalled();
	});
});
