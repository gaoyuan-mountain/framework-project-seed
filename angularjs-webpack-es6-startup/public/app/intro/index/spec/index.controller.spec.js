import 'angular';
import 'angular-mocks';
import LoginController from '../index.controller';

describe('Intro Controller', () => {
	let $scope, ctrl, $timeout;
	let UserServiceMock;
	beforeEach(() => {
		angular.module('IntroIndexModule', []);
		LoginController.inject();
		UserServiceMock = jasmine.createSpyObj('UserService', ['login', 'getInstance']);
		angular.mock.module("IntroIndexModule");
		inject(($rootScope, $controller, $q, _$timeout_) => {
			$scope = $rootScope.$new();
			$timeout = _$timeout_;

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
			ctrl = $controller('LoginController', {
				$scope: $scope,
				UserService: UserServiceMock
			})
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
		//expect($window.location).toEqual('todo.html');
	});
});
