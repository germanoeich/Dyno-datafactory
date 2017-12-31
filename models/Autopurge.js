'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const autopurgeSchema = new Schema({
	guild:  { type: String, required: true, index: true },
	channel: { type: String, required: true },
	interval: { type: Number },
	nextPurge: { type: Date, default: Date.now, index: true },
});

module.exports = { name: 'Autopurge', schema: autopurgeSchema }
