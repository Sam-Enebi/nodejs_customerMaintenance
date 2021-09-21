// customer schema
const mongoose = require('mongoose');

const customerSchema = new mongoose.Schema({
	name: {
		type: String,
		required: [true, 'Please provide your name'],
	},
	address: {
		type: String,
		required: [true, 'Please provide an address'],
	},
	age: {
		type: String,
		required: [true, 'Please provide your Age'],
	},
	password: {
		type: String,
		required: [true, 'A customer must have a password'],
	},
});

module.exports = mongoose.model('Customer', customerSchema);
