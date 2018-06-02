const express = require('express');
const massive = require('massive');
const axios = require('axios');
const session = require('express-session');
const bodyParser = require('body-parser');
const authController = require('./controllers/authController');
require('dotenv').config();

const app = express();
app.use(bodyParser.json());
app.use(session({
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 100 * 60 * 60 * 24 * 14,
    },
    secret: process.env.SESSION_SECRET,
}));

massive(process.env.CONNECTION_STRING).then(db => {
    app.set( 'db', db );
});

app.get('/callback', authController.login );
app.get('/api/user', authController.getUser );
app.post('/api/logout', authController.logout );



const port = 9000;
app.listen(port, console.log( `This server is over ${ port }!!!`) );