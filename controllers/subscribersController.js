'use strict';

const Subscriber = require('../model/subscriber');

module.exports = {
  getAllSubscribers: (req, res) => {
    Subscriber.find({})
      .exec()
      .then(subscribers => {
        res.render('subscribers', {
          subscribers: subscribers,
        });
      })
      .catch(error => {
        console.log(error.message);
        return [];
      })
      .then(() => {
        console.log('promise complete');
      });
  },
};

module.exports = {
  getSubscriptionPage: (req, res) => {
    res.render('contact');
  },
};

module.exports = {
  saveSubscriber: (req, res) => {
    let newSubscriber = new Subscriber({
      name: req.body.name,
      email: req.body.email,
      zipCode: req.body.zipCode,
    });
    newSubscriber
      .save()
      .then(() => {
        res.render('thanks');
      })
      .catch(error => {
        res.send(error);
      });
  },
};
