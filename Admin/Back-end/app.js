const express = require('express')
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

// Server listening
try {
    const port = normalizePort(process.env.PORT || 3001)
    app.listen(port, () => {
        console.log(`Backend side server working with ${port}`);
    })
} catch (error) {
    console.error(error);
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