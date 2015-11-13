import User from './user.model';

describe('User Model', () => {
	it('default props check', () => {
		let user = new User();
		expect(user._id).toEqual('');
		expect(user.username).toEqual('');
		expect(user.password).toEqual('');
	});

	it('set props correctly', () => {
		let user = new User({
			_id: 'fakeId',
			username: 'fakeUsername',
			password: 'fakePassword'
		});
		expect(user._id).toEqual('fakeId');
		expect(user.username).toEqual('fakeUsername');
		expect(user.password).toEqual('fakePassword');
	});

	it('get props correctly', () => {
		let user = new User({
			_id: 'fakeId',
			username: 'fakeUsername',
			password: 'fakePassword'
		});
		expect(user.get('_id')).toEqual('fakeId');
		expect(user.get('username')).toEqual('fakeUsername');
		expect(user.get('password')).toEqual('fakePassword');
	});

	it('get undefined prop', () => {
		let user = new User();
		expect(() => {
			user.get('undefinedProp');
		}).toThrow(new Error('There has no property named undefinedProp in User Object.'));
	});

	it('set props correctly', () => {
		let user = new User();
		expect(user._id).toEqual('');
		expect(user.username).toEqual('');
		expect(user.password).toEqual('');
		user.set('_id', 'idUpdated');
		user.set('username', 'usernameUpdated');
		user.set('password', 'passwordUpdated');
		expect(user._id).toEqual('idUpdated');
		expect(user.username).toEqual('usernameUpdated');
		expect(user.password).toEqual('passwordUpdated');
	});

	it('set undefined prop', () => {
		let user = new User();
		expect(() => {
			user.set('undefinedProp');
		}).toThrow(new Error('There has no property named undefinedProp in User Object.'));
	});
});