'use strict';

const express = require('express'),
  app = express(),
  homeController = require('./controllers/homeController'),
  errorController = require('./controllers/errorController'),
  subscribersController = require('./controllers/subscribersController'),
  layouts = require('express-ejs-layouts'),
  mongoose = require('mongoose');

mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost27017/confetti_cuisine', {
  useNewUrlParser: true,
});
mongoose.set('useCreateIndex', true);
app.set('port', process.env.PORT || 3000);
app.set('view engine', 'ejs');

app.use(
  express.urlencoded({
    extended: false,
  }),
);
app.use(express.json());
app.use(layouts);
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.render('index');
});

app.get('/courses', homeController.showCourses);
app.get('/subscribers', subscribersController.getAllSubscribers);
app.get('/contact', subscribersController.getSubscriptionPage);
app.post('/subscribe', subscribersController.saveSubscriber);
app.post('/contact', homeController.postedSignUpForm);

app.use(errorController.pageNotFoundError);
app.use(errorController.internalServerError);

app.listen(app.get('port'), () => {
  console.log(`Server running at http://localhost:${app.get('port')}`);
});
