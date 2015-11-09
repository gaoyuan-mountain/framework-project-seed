var express = require('express');
var router = express.Router();

/* GET users listing. */
router.post('/login', function(req, res, next) {
	if (req.body.username === 'admin' && req.body.password === 'admin') {
		res.json({
			status: 'success',
			user: {
				_id: 1,
				username: req.body.username
			}
		});
	} else {
		res.json({
			status: 'error'
		});
	}
});

module.exports = router;
