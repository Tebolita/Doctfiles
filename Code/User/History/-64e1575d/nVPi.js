const express = require('express');
const morga = require('morgan');
const exphbs = require('express-handlebars');

const app = express();


// settings
app.set('port', process.env.PORT || 3000);

// middlewares

//routes

// static files






module.exports = app;