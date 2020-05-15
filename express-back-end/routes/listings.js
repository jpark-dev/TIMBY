const express = require('express');
const router = express.Router();

module.exports = (db) => {
  router.post("/", (req, res) => {
    db.createListing(req.body.tourID, req.body.userID)
      .then(listing => {
        res.json({ listing });
      })
      .catch(err => {
        res
          .status(500)
          .json({ error: err.message });
      });
  });

  router.post("/:listing_id", (req, res) => {
    db.updateListing(req.params.listing_id, req.body.status)
      .then(listing => {
        res.json({ listing });
      })
      .catch(err => {
        res
          .status(500)
          .json({ error: err.message });
      });
  });

  router.get("/:listing_id", (req, res) => {
    db.getListing(req.params.listing_id)
      .then(listing => {
        res.json({ listing });
      })
      .catch(err => {
        res
          .status(500)
          .json({ error: err.message });
      });
  });

  router.get("/user/:user_id", (req, res) => {
    db.getListingsByHost(req.params.user_id)
      .then(listings => {
        res.json({ listings });
      })
      .catch(err => {
        res
          .status(500)
          .json({ error: err.message });
      });
  });
  return router;
};
