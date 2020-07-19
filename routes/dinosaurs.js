const express = require('express');
const router = express.Router();
const connection = require('../connection');

router.get('/:id', (req, res) => {
  const idDino = req.params.id;
  connection.query('SELECT * FROM dinosaur WHERE id = ?', [idDino], (err, results) => {
    if(err){
      res.status(500).send(err);
    }
    else{
      res.status(200).json(results);
    }
  });
});

module.exports = router;