const express = require('express');
const {rejectUnauthenticated,} = require('../modules/authentication-middleware');
const pool = require('../modules/pool');
const router = express.Router();
const {rejectUnauthenticated} = require('../modules/authentication-middleware');


/**
 * Get all of the items on the shelf
 */
router.get('/', rejectUnauthenticated, (req, res) => {
  const queryText = `SELECT * FROM "item";`;
  pool.query(queryText).then((results) => {
    res.send(results.rows);
    // res.sendStatus(200);
  }).catch((error) =>{
    console.log('Error with getting all items:', error);
    res.sendStatus(500);
  });
});

/**
 * Add an item for the logged in user to the shelf
 */
router.post('/', rejectUnauthenticated, (req, res) => {
  // endpoint functionality
  console.log('in POST!');
  console.log('is authenticated?', req.isAuthenticated());
  const queryText = `INSERT INTO "item" ("description","image_url","user_id")`;
  pool
  .query(queryText, [req.body.description, req.body.image_url, req.user.id])
  .then(() => res.sendStatus(201))
  .catch((err) => {
    console.log('POST to items failed: ', err);
    res.sendStatus(500);
  });





});

/**
 * Delete an item if it's something the logged in user added
 */
router.delete('/:id', (req, res) => {
  // endpoint functionality
});

/**
 * Update an item if it's something the logged in user added
 */
router.put('/:id', (req, res) => {
  // endpoint functionality
});

/**
 * Return all users along with the total number of items
 * they have added to the shelf
 */
router.get('/count', (req, res) => {
  // endpoint functionality
});

/**
 * Return a specific item by id
 */
router.get('/:id', (req, res) => {
  // endpoint functionality
});

module.exports = router;
