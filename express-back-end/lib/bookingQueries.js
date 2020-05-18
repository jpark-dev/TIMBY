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

const updateBookingWithFeedback = (id, rating, comment) => {
  return db.query(`
  UPDATE bookings SET rating = $2, comment = $3
  WHERE id = $1
  RETURNING id, user_id;
  `, [id, rating, comment])
    .then(res => {
      return res.rows;
    })
    .catch(error => console.log(error));
};

module.exports.updateBookingWithFeedback = updateBookingWithFeedback;

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


const getBookingsByListing = (tourId) => {
  return db.query(`
  SELECT bookings.id, bookings.tour_id, bookings.user_id, bookings.status, users.name, tours.title FROM bookings
  JOIN users ON bookings.user_id = users.id
  JOIN tours ON bookings.tour_id = tours.id
  WHERE tour_id = $1
  `, [tourId])
    .then(res => {
      return res.rows;
    })
    .catch(error => console.log(error));
};

module.exports.getBookingsByListing = getBookingsByListing;

const getBookingsByUser = (userId) => {
  return db.query(`
  SELECT DISTINCT ON (bookings.id) bookings.id AS id, bookings.tour_id AS tour_id, bookings.user_id AS user_id, bookings.status AS status, bookings.created_at AS created_at,
  tours.host_id AS host_id, tours.title AS title, tours.description AS description, tours.city AS city, tours.lat AS lat, tours.lng AS lng, tours.date_time AS date_time, tours.duration AS duration,
  users.name AS host_name, users.phone AS host_phone,
  media.src AS image_src
  FROM bookings
  JOIN tours ON bookings.tour_id = tours.id
  JOIN users ON tours.host_id = users.id
  JOIN media ON media.tour_id = tours.id
  WHERE bookings.user_id = $1
  GROUP BY bookings.id, tours.host_id, tours.title, tours.description, tours.city, tours.lat, tours.lng, tours.date_time, tours.duration, users.name, users.phone, media.src
  ORDER BY bookings.id DESC, bookings.created_at DESC;
  `, [userId])
    .then(res => {
      return res.rows;
    })
    .catch(error => console.log(error));
};

module.exports.getBookingsByUser = getBookingsByUser;
