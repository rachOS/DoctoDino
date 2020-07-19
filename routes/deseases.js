const express = require('express');
const router = express.Router();
const connection = require('../connection');

// get deseases by name
router.get('/', (req, res) => {
  const { name } = req.query;
  if(name){
    connection.query('SELECT * from desease WHERE name = ?', [name], (err, results) => {
      if(err){
        res.status(500).send(err);
      }
      else if(err || results.length === 0){
        res.status(404).send("File not found");
      }
      else{
        res.status(200).json(results);
      }
    });
  }
  else{
    connection.query('SELECT * from desease', (err, results2) => {
      if(err){
        res.status(500).send(err);
      }
      else{
        res.status(200).send(results2);
      }
    });
  }
});

module.exports = router;