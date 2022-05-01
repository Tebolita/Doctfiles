const express = require('express');
const morga = require('morgan');
const exphbs = require('express-handlebars');
const path = require('path');


const app = express();


// settings
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.engine('.hbs', exphbs({
    defaultLayout: 'main',
    extname: '.hbs'
}));

app.set('view engine', '.hbs');
// middlewares
app.use(morgan('dev'));


//routes

// static files






module.exports = app;