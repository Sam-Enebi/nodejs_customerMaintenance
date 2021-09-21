const express = require('express');
// destructuring controllers from our auth controller to prform each task according to route
const {
	addCustomer,
	allCustomers,
	updateCustomer,
	deleteCustomer
} = require('../controllers/customerController');
// router to handle different route requests
const router = express.Router();


router.post('/addCustomer', addCustomer);
router.get('/allCustomers', allCustomers);
router.post('/updateCustomer/:id', updateCustomer);
router.get('/deleteCustomer/:id', deleteCustomer);

module.exports = router;
