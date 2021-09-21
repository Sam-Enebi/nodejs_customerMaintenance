// mongoose to connect to the databse and perform operations on it
const mongoose = require('mongoose');


// db connection function
const dbConn = () => {
	mongoose
		.connect(
			// mongo db uri to connect the database
			'mongodb+srv://osasenebi:bAWA6xLBK7OQiiBK@customer-service.wm8uw.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
			{
				useNewUrlParser: true,
				useCreateIndex: true,
				useFindAndModify: false,
				useUnifiedTopology: true,
			}
		)
		.then(() => console.log('Database is connected successfully'))
		.catch(err => console.log(err));
};

module.exports = dbConn;
