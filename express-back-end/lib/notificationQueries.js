const db = require('./db');

// const getNotification = (id) => {
//   return db.query(`
//   SELECT *
//   FROM notifications
//   where id = $1;
//   `, [id])
//     .then(res => {
//       return res.rows;
//     });
// };

// module.exports.getNotification = getNotification;


const getNotificationsForUser = (userID) => {
  const queryString = `
  SELECT * FROM notifications
  WHERE user_id = $1
  ORDER BY created_at DESC
  LIMIT 5;
  `;
  return db.query(queryString, [userID])
    .then(data => data)
    .catch(err => console.log(err));
};

module.exports.getNotificationsForUser = getNotificationsForUser;


const addNotification = (userID, body) => {
  const queryString = `
  INSERT INTO notifications (user_id, body)
  VALUES ($1, $2);
  `;
  return db.query(queryString, [userID, body])
    .then(data => data)
    .catch(err => console.log(err));
}

module.exports.addNotification = addNotification;


const addPushSubscription = (userID, subscription) => {
  const queryString = `
  UPDATE users SET push_subscription = $2
  WHERE id = $1
  RETURNING id;
  `;
  return db.query(queryString, [userID, subscription])
    .then(id => id)
    .catch(err => console.log(err));
};

module.exports.addPushSubscription = addPushSubscription;


const getPushSubscription = (userID) => {
  const queryString = `
  SELECT push_subscription FROM users
  WHERE id = $1;
  `;
  return db.query(queryString, [userID])
    .then(data => data)
    .catch(err => console.log(err));
};

module.exports.getPushSubscription = getPushSubscription;