const db = require('./db');

const getListingsByHost = id => {
  return db.query(`
  SELECT tours.*, COUNT(bookings) AS booking_cnt
  FROM tours JOIN bookings ON tours.id = bookings.tour_id
  WHERE tours.host_id = $1
  GROUP BY tours.id
  `, [id])
    .then(res => {
      return res.rows;
    });
};

module.exports.getListingsByHost = getListingsByHost;

const createListing = (id, host_id, title, description,
  city, lat, lng, date_time, duration,
  min_users, max_users, tour_status, price) => {
  return db.query(`
  INSERT INTO tours (
    id, host_id, title, description,
    city, lat, lng, date_time, duration,
    min_users, max_users, tour_status, price)
  VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13)
  `, [id, host_id, title, description,
    city, lat, lng, date_time, duration,
    min_users, max_users, tour_status, price])
    .then(res => {
      return res.rows;
    })
    .catch(error => console.log(error));
};

module.exports.createListing = createListing;

const updateListing = (id, item) => {
  return db.query(`
  UPDATE tours SET ${item} = $2
  WHERE id = $1
  RETURNING id, user_id;
  `, [id, status])
    .then(res => {
      return res.rows;
    })
    .catch(error => console.log(error));
};

module.exports.updateListing = updateListing;
