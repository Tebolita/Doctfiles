const express = require('express');
const morgan = require('morgan');
const exphbs = require('express-handlebars')
const path = require('path');


const app = express();


// settings
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.engine('.hbs', exphbs({
    defaultLayout: 'main'
}));

app.set('view engine', '.hbs');
// middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));


//routes

//app.use()
// static files

app.set(express.static(path.join(__dirname, 'public')));





module.exports = app;