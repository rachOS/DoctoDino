// init modules
const express = require('express');
const router = express.Router();

// import route files
const users = require('./users');
const specialists = require('./specialists');
const deseases = require('./deseases');
const dinosaurs = require('./dinosaurs');
const send = require('./send');

// init routes
router.use('/users', users);
router.use('/specialists', specialists);
router.use('/deseases', deseases);
router.use('/dinosaurs', dinosaurs);
router.use('/send', send);

module.exports = router;