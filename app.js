const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

/*configurar el motor de vistas*/
/*prueba*/
const hbs = require('express-handlebars');

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const contactRouter = require('./routes/contact');
const productsRouter = require('./routes/products');
const loginRouter = require('./routes/login');
const sign_inRouter = require('./routes/sign_in');
const sobre_nosotrosRouter = require('./routes/sobre_nosotros');
const producto_detalleRouter = require('./routes/producto_detalle');

const app = express();
require('dotenv').config();
require('./utils/connection');

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

/*seteamos las carpetas y los archivos del motor de vistas */
app.engine('hbs', hbs({
  extname:'.hbs',
  defaultLayout: 'layout',
  layoutsDir:'views/layout',
  partialsDir:'views/partials'
}));

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/contact', contactRouter);
app.use('/products', productsRouter);
app.use('/login', loginRouter);
app.use('/sign_in', sign_inRouter);
app.use('/sobre_nosotros', sobre_nosotrosRouter);
app.use('/producto_detalle', producto_detalleRouter);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
