'use strict';

var mongoose = require('mongoose'),
	Schema = mongoose.Schema,
	crypto = require('crypto');

var schema = new Schema({
	name: String,
	sex: Number,
	tel: String,
	avatar: String
});


mongoose.model('user', schema);