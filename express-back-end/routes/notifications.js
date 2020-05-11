const express = require('express');
const router = express.Router();
const webpush = require('web-push');

module.exports = (db) => {
  // FETCH ALL NOTIFICATIONS FOR A USER
  router.get("/:id", (req, res) => {
    // console.log("Hit get notifications route!");
    db.getNotificationsForUser(req.params.id)
      .then(data => data.rows)
      .then(rows => {
        // console.log("ALL NOTIFICATIONS", rows);
        res.send(rows);
      })
      .catch(err => {
        res
          .status(500)
          .json({ error: err.message });
      });
  });

  // SUBSCRIBE USER TO PUSH NOTIFICATIONS
  router.post('/subscribe', (req, res) => {
    const subscription = req.body.subscription;
    // console.log("hit the subscribe route!");
    // console.log(req.body);
  
    if (req.body.userID) {
      // console.log("attempting to add push subscription to db");
      db.addPushSubscription(req.body.userID, subscription)
        .then((data) => {
          console.log(`New push subscription added to user ${data.rows[0].id}`);
        })
        .catch(err => {
          console.log(err);
        })
    }
  
    // console.log(subscription);
  
    const payload = JSON.stringify({
      title: 'TIMBY',
      body: 'Welcome to TIMBY!',
    })
  
    webpush.sendNotification(subscription, payload)
      .then(result => {;
        console.log("Notification sent from server!");
        // console.log(result);
      })
      .catch(e => console.log(e.stack))
  
    res.status(200).json({'success': true})
  });

  // SEND NOTIFICATION TO USER
  router.post("/send/:id", (req, res) => {
    console.log("Hit send notification route!");
    // console.log(req.body);
    // console.log(req.params.id);
    db.addNotification(req.params.id, req.body.text)
      .then(() => {
  
        // console.log("Notification added to database!");
  
        const payload = JSON.stringify({
          title: 'TIMBY',
          body: req.body.text
        })
      
        db.getPushSubscription(req.params.id)
          .then(data => data.rows[0].push_subscription)
          .then(push_subscription => {
            webpush.sendNotification(push_subscription, payload)
            .then(result => {;
              console.log(`Notification sent from server to user ${req.params.id}`);
              // console.log(result);
              res.send(`Notification sent from server to user ${req.params.id}`);
            })
            .catch(e => console.log(e.stack))
          })
  
      })
  
  });

  return router;
};
