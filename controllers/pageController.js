// rendring a page for a user who wants to login
const Customer = require('../models/Customers');
exports.createCustomer = (req, res) => {
	res.render('create-customer');
};

// / rendring a register page
exports.allCustomers = (req, res) => {
	res.render('admin');
};

// / rendring a page for a upating Customer
exports.updateCustomer = async (req, res) => {
	const updateCustomer = await Customer.findById(req.params.id);
	res.render('update', { user: updateCustomer });
};

// / rendring a register page
exports.modifyCustomer =async (req, res) => {
	const customers = await Customer.find();
	res.render('modifyCustomer', {customers});
};

// / rendring a register page
exports.deleteCustomer =async (req, res) => {
	const customers = await Customer.find();
	res.render('deleteCustomer', {customers});
};


// contact us page for guest users
exports.help = async (req, res) => {
	res.render('help');
};

// about page for oridinary user
exports.about = async (req, res) => {
	res.render('about');
};




