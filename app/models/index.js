const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const db = {};

db.mongoose = mongoose;

db.user = require("./user.model");
db.role = require("./role.model");
db.loan = require("./loan.model");

db.ROLES = ["borrower", "lender", "admin"];

module.exports = db; 