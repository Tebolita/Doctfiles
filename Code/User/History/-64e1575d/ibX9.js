const express = require('express');
const morga = require('morgan');
const exphbs = require('express-handlebars');
const path = require('path');


const app = express();


// settings
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.engine('.hbs', exphbs({
    defaultLayout: 'main'
}))


// middlewares

//routes

// static files






module.exports = app;