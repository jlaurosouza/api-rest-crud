var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var carsRouter = require('./routes/cars');
// var protectedRouter = require('./routes/protected');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/cars', carsRouter);
// app.use('/protected', protectedRouter);

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

// var jwt = require('express-jwt');

// app.get('/protected',
//   jwt({secret: 'shhhhhhared-secret'}),
//   function(req, res) {
//     res.json({
//       message: "aki"
//     });
//     // if (!req.user.admin) return res.sendStatus(401);
//     // res.sendStatus(200);
//   });

// app.use(jwt({
//   secret: 'hello world !',
//   credentialsRequired: false,
//   getToken: function fromHeaderOrQuerystring (req) {
//     if (req.headers.authorization && req.headers.authorization.split(' ')[0] === 'Bearer') {
//         return req.headers.authorization.split(' ')[1];
//     } else if (req.query && req.query.token) {
//       return req.query.token;
//     }
//     return null;
//   }
// }));

module.exports = app;
