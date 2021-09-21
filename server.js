const express = require('express');
// Ejs package for server side rendring
const expressLayouts = require('express-ejs-layouts');
// DB connection imported from db
const dbConn = require('./db/db');

// Routes for the pages
const pageRouter = require('./routes/pageRoutes');
const customerRouter = require('./routes/customerRoutes');

// connecting to the database
dbConn();

// to run express
const app = express();

// setting view engine to ejs to view the files
app.use(expressLayouts);
app.set('view engine', 'ejs');

// Body Parser to parse incoming data from body
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// home page router
app.get('/', (req, res) => {
	res.render('home');
});

// mounting router,request coming to these routes will go to thier seperate files
app.use('/page', pageRouter);
app.use('/customer', customerRouter);

// server for checking requests and sending response
const port = 3000;
app.listen(port, () => console.log(`Listening on port ${port}..`));
