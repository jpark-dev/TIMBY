const db = require('./db');

const getUsers = () => {
  return db.query(`
  SELECT *
  FROM users;
  `)
    .then(res => {
      return res.rows;
    });
};

module.exports.getUsers = getUsers;


const getUser = (id) => {
  return db.query(`
  SELECT *
  FROM users
  WHERE id = $1;
  `, [id])
    .then(res => {
      return res.rows[0];
    });
};

module.exports.getUser = getUser;

const getUserProfile = (id) => {
  return db.query(`
  SELECT users.*, count(tours.*) AS total_tour
  FROM users
  LEFT JOIN tours ON users.id = tours.host_id
  WHERE users.id = $1
  GROUP BY users.id;
  `, [id])
    .then(res => {
      return res.rows[0];
    });
};

module.exports.getUserProfile = getUserProfile;



