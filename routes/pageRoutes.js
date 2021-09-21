const express = require('express');
const {
	createCustomer,
	allCustomers,
	modifyCustomer,
	updateCustomer,
	deleteCustomer,
	about,
	help
} = require('../controllers/pageController');
const router = express.Router();

// user routes to render diffirent pages
router.get('/createCustomer', createCustomer);

router.get('/allCustomers', allCustomers);

router.get('/modifyCustomer', modifyCustomer);

router.get('/updateCustomer/:id', updateCustomer);

router.get('/deleteCustomer', deleteCustomer);

router.get('/about', about);

router.get('/help', help);


module.exports = router;
