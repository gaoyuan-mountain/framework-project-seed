'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var schema = new Schema({
    name: String,
    sex: Number,
    tel: String,
    avatar: String
});


mongoose.model('user', schema);
