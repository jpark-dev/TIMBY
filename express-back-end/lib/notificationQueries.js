const { db } = require('./db');

const getNotificationsForUser = (userID) => {
  const queryString = `
  SELECT * FROM notifications
  WHERE user_id = $1;
  `;
  return db.query(queryString, [userID])
    .then(data => data)
    .catch(err => console.log(err));
};

const addNotification = (userID, body) => {
  const queryString = `
  INSERT INTO notifications (user_id, body)
  VALUES ($1, $2);
  `;
  return db.query(queryString, [userID, body])
    .then(data => data)
    .catch(err => console.log(err));
}

module.exports = {
  getNotificationsForUser,
  addNotification
};