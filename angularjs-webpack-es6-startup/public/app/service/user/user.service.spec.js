import UserService from './user.service';

describe('User Service', () => {
	angular.module('ServiceModule', ['ngMock']);
	UserService.inject();

	class User {
		constructor(props = {
			_id: '',
			username: '',
			password: ''
		}) {
			this._id = props._id;
			this.username = props.username;
			this.password = props.password;
		}
	};

	let httpMock;

	beforeEach(() => {
		angular.mock.module('ServiceModule');
	});

	beforeEach(() => {
		httpMock = {
			post: function () {}
		};
		spyOn(httpMock, 'post');
		angular.mock.module(($provide) => {
			$provide.value('$http', httpMock);
		})
	});

	it('getInstance return the current Object', inject((UserService) => {
		let user = UserService.getInstance({
			_id: 'fakeId',
			username: 'fakeUsername',
			password: 'fakePassword'
		});
		expect(user._id).toEqual('fakeId');
		expect(user.username).toEqual('fakeUsername');
		expect(user.password).toEqual('fakePassword');
	}));

	it('login with right parameters', inject((UserService) => {
		let user = UserService.getInstance({
			_id: 'fakeId',
			username: 'fakeUsername',
			password: 'fakePassword'
		});
		UserService.login(user);
		expect(httpMock.post).toHaveBeenCalledWith('/users/login', {
			username: user.username,
			password: user.password
		});
	}));
});