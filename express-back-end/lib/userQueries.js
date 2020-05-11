const { db } = require('./db');

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

const getPushSubscription = (userID) => {
  const queryString = `
  SELECT push_subscription FROM users
  WHERE id = $1;
  `;
  return db.query(queryString, [userID])
    .then(data => data)
    .catch(err => console.log(err));
};

const getUserIDByEmail = (email) => {
  const queryString = `
  SELECT id FROM users
  WHERE email = $1;
  `;
  return db.query(queryString, [email])
    .then(data => data)
    .catch(err => console.log(err));
};

module.exports = {
  addPushSubscription,
  getPushSubscription,
  getUserIDByEmail
};