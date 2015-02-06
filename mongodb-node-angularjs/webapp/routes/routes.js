var user = require('./users.routes');
var index = require('./index.routes');

module.exports = function (app) {
	app.get('/', index.index);
	app.get('/index', index.index);
	app.get('/partials/:name', index.partials);

	app.post('/user/create', user.create);
	app.get('/user/all', user.getAll);
	app.post('/user/remove', user.remove);
	app.post('/user/update', user.update);
};
