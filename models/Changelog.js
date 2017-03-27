'use strict';

const moment = require('moment');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const changelogSchema = new Schema({
	date: { type: String, default: moment().format('YYYY-MM-DD'), index: true },
	entry: { type: String },
});

module.exports = mongoose.model('Changelog', changelogSchema);
