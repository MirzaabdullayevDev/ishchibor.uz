const express = require('express')
const chalk = require('chalk')
const morgan = require('morgan')
const db = require('./helper/db')
const path = require('path')
const session = require('express-session')
var MongoDBStore = require('connect-mongodb-session')(session);
const cors = require('cors')

// defining app as the main Express Handler
const app = express()

// Connect mongodb session
const store = new MongoDBStore({
    uri: process.env.DB_HOST,
    collection: 'mySessions'
});

// Importing routes
const mastersRouter = require('./routes/masters')

// Express-session
app.use(session({
    secret: process.env.EXPRESS_SESSION || 'Some secter key',
    resave: true,
    saveUninitialized: true,
    store
}))

// Dotenv
require('dotenv').config()

// Middlewares
morgan('tiny')

// Express setting-up
app.use(cors())
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(express.static(path.join(__dirname, 'public')))

// Routing
app.use('/api/masters', mastersRouter)

// MongoDB connection
db(process.env.DB_HOST)






// Navbar Logo Add and edit  
const Logo = require('./routes/Navbar/Logo')
app.use('/api/admin/navbar', Logo)



// Category Add
const Category = require('./routes/Category/Category')
app.use('/api/admin/category', Category)


// Sequence
const Sequence = require('./routes/Sequence/Sequence')
app.use('/api/admin/sequence', Sequence)


// Server listening
try {
    const port = normalizePort(process.env.PORT || 5001)
    app.listen(port, () => {
        console.log(chalk.yellow.bgBlue(`Backend side server working with ${port}`));
    })
} catch (error) {
    console.error(chalk.red.bgYellow(error));
}

// Normalize PORT function
function normalizePort(val) {
    // This function is a safety railguard to make sure the port provided is number, if not a number then a string and if anything else set it to false.
    var port = parseInt(val, 10);

    if (isNaN(port)) {
        // named pipe
        return val;
    }

    if (port >= 0) {
        // port number
        return port;
    }

    return false;
}