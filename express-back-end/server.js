// load .env data into process.env
require('dotenv').config();


// Web server config
const PORT = process.env.PORT || 8080;
const ENV = process.env.ENV || "development";
const KEYS = process.env.KEYS ? [process.env.KEYS] : ['backup default key'];

const Express = require('express');
const App = Express();
const BodyParser = require('body-parser');

const cors = require('cors')
const webpush = require('web-push')

// Queries
const { addPushSubscription, getPushSubscription, getUserIDByEmail } = require('./lib/userQueries');
const tourQueries = require('./lib/tourQueries');
const bookingQueries = require('./lib/bookingQueries');
const notificationQueries = require('./lib/notificationQueries');
const mediaQueries = require('./lib/mediaQueries');

// Express Configuration
App.use(BodyParser.urlencoded({ extended: true }));
App.use(BodyParser.json());
App.use(Express.static('public'));
App.use(cors())

webpush.setVapidDetails(process.env.WEB_PUSH_CONTACT, process.env.PUBLIC_VAPID_KEY, process.env.PRIVATE_VAPID_KEY)

// const db = require('/lib/db.js');
// db.connect();

// Sample GET route
App.get('/api/data', (req, res) => res.json({
  message: "Seems to work!",
}));

// PUSH NOTIFICATIONS
App.post('/notifications/subscribe', (req, res) => {
  const subscription = req.body.subscription;
  console.log("hit the subscribe route!");
  console.log(req.body);

  if (req.body.userID) {
    console.log("attempting to add push subscription to db");
    addPushSubscription(req.body.userID, subscription)
      .then((data) => {
        console.log(`New push subscription added to user ${data.rows[0].id}`);
      })
      .catch(err => {
        console.log(err);
      })
  }

  console.log(subscription);

  const payload = JSON.stringify({
    title: 'Hello!',
    body: 'It works.',
  })

  webpush.sendNotification(subscription, payload)
    .then(result => {;
      console.log("notification sent from server!");
      console.log(result);
    })
    .catch(e => console.log(e.stack))

  res.status(200).json({'success': true})
});

// SEND NOTIFICATION TO USER
App.post("/notifications/send/:id", (req, res) => {
  console.log("hit post notification route!");
  console.log(req.body);
  console.log(req.params.id);

  const payload = JSON.stringify({
    title: 'TIMBY',
    body: 'Sent from userid send route!',
  })

  getPushSubscription(req.params.id)
    .then(data => data.rows[0].push_subscription)
    .then(push_subscription => {
      webpush.sendNotification(push_subscription, payload)
      .then(result => {;
        console.log(`notification sent from server to user ${req.params.id}`);
        console.log(result);
      })
      .catch(e => console.log(e.stack))
    })
});

// LOGIN
App.post("/login", (req, res) => {
  console.log("login route hit!");
  getUserIDByEmail(req.body.username)
    .then(data => data.rows[0].id)
    .then(id => {
      console.log(`successfully logged in as user ${id}`);
      res.json({status: 200, userID: id});
    })
    .catch(error => console.log(error));
});

App.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Express seems to be listening on port ${PORT} so that's pretty good 👍`);
});
