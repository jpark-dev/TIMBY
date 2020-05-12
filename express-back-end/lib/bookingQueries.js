const db = require('./db');

const createBooking = (tourID, userID) => {
  return db.query(`
  INSERT INTO bookings (tour_id, user_id, status)
  VALUES ($1, $2, 'Pending');
  `, [tourID, userID])
    .then(res => {
      return res.rows;
    })
    .catch(error => console.log(error));
};

module.exports.createBooking = createBooking;

const updateBooking = (id, status) => {
  return db.query(`
  UPDATE bookings SET status = $2
  WHERE id = $1
  RETURNING id, user_id;
  `, [id, status])
    .then(res => {
      return res.rows;
    })
    .catch(error => console.log(error));
};

module.exports.updateBooking = updateBooking;

const getBooking = (id) => {
  return db.query(`
  SELECT *
  FROM bookings
  where id = $1;
  `, [id])
    .then(res => {
      return res.rows;
    })
    .catch(error => console.log(error));
};

module.exports.getBooking = getBooking;

const getBookingsByTour = (tourId) => {
  return db.query(`
  SELECT *
  FROM bookings
  where tour_id = $1
  `, [tourId])
    .then(res => {
      return res.rows;
    })
    .catch(error => console.log(error));
};

module.exports.getBookingsByTour = getBookingsByTour;

const getBookingsByUser = (userId) => {
  return db.query(`
  SELECT bookings.id AS id, bookings.tour_id AS tour_id, bookings.user_id AS user_id, bookings.status AS status, 
  tours.host_id AS host_id, tours.title AS title, tours.description AS description, tours.city AS city, tours.long_lat AS long_lat, tours.date_time AS date_time, tours.duration AS duration
  FROM bookings
  JOIN tours ON bookings.tour_id = tours.id
  WHERE bookings.user_id = $1
  GROUP BY bookings.id, tours.host_id, tours.title, tours.description, tours.city, tours.long_lat, tours.date_time, tours.duration;
  `, [userId])
    .then(res => {
      return res.rows;
    })
    .catch(error => console.log(error));
};

module.exports.getBookingsByUser = getBookingsByUser;
