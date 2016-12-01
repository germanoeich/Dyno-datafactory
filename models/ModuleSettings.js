'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const moduleSettingsSchema = new Schema({
	name: { type: String, index: true, required: true },
	settings: { type: String, required: true },
	_state: { type: Number, index: true },
});

module.exports = mongoose.model('ModuleSettings', moduleSettingsSchema);
