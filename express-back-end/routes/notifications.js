const express = require('express');
const router = express.Router();
const webpush = require('web-push');

module.exports = (db) => {
  // FETCH ALL NOTIFICATIONS FOR A USER
  router.get("/:id", (req, res) => {
    db.getNotificationsForUser(req.params.id)
      .then(data => data.rows)
      .then(rows => {
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
  
    if (req.body.userID) {
      db.addPushSubscription(req.body.userID, subscription)
        .then((data) => {
          console.log(`New push subscription added to user ${data.rows[0].id}`);
        })
        .catch(err => {
          console.log(err);
        })
    }
      
    // Indicate successful response to client
    res.status(200).json({'success': true});
  });

  // SEND NOTIFICATION TO USER
  router.post("/send/:id", (req, res) => {
    db.addNotification(req.params.id, req.body.text)
      .then(() => {
  
        const payload = JSON.stringify({
          title: 'TIMBY',
          body: req.body.text
        })
      
        db.getPushSubscription(req.params.id)
          .then(data => data.rows[0].push_subscription)
          .then(push_subscription => {
            webpush.sendNotification(push_subscription, payload)
            .then(result => {
              console.log(`Notification sent from server to user ${req.params.id}`);
              res.send(`Notification sent from server to user ${req.params.id}`);
            })
            .catch(e => console.log(e.stack))
          })
  
      })
  
  });

  return router;
};
