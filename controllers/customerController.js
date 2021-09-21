// User model file for operations on our databsae
const Customer = require('../models/Customers');



// rendring admin page with all the users in database
exports.addCustomer = async (req, res) => {
	const { name, address, age, password } = req.body;
	let errors = [];
	if (!name) {
		errors.push({ msg: 'Please provide your name' });
	}
	if (!address) {
		errors.push({ msg: 'Please provide your address' });
	}

	if (!age) {
		errors.push({ msg: 'Please provide your age' });
	}

	if (!password) {
		errors.push({ msg: 'Please enter a password' });
	}

	// rendring our page with all errors
	if (errors.length > 0) {
		res.render('create-customer', {
			errors,
		});
	} else {
		
		// if user credentials are correct,login them and give access by thier roles
		const customer = await Customer.create(req.body);
		res.render('create-customer', {
			success:'Customer Created Successfully',
		});
	}
};

exports.allCustomers = async (req, res) => {
	const users = await Customer.find();

	res.render('admin', { users });
};


//controller for admin to update a user's details
exports.updateCustomer= async (req, res) => {
	const updateCustomer= await Customer.findByIdAndUpdate(req.params.id, req.body, {
		new: true,
	});
	res.render('update', { user:updateCustomer,	success:'Customer Updated Successfully', });
};


//controller for admin to delete a user
exports.deleteCustomer = async (req, res) => {
	await Customer.findByIdAndDelete(req.params.id);
	const customers = await Customer.find();
	res.render('deleteCustomer', { customers,success:'Customer Deleted Successfully' });
};
