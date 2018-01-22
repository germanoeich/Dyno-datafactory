'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const premiumActivationLogSchema = new Schema({
    serverID: { type: String },
    ownerID: { type: String },
    userID: { type: String },
    username: { type: String },
    mention: { type: String },
    isEnable: { type: Boolean },
    timestamp: { type: String },
    importedFromVipData: { type: Boolean }
}, { strict: false });

module.exports = { name: 'PremiumActivationLog', schema: premiumActivationLogSchema }
