const express = require('express');
const router = express.Router();
const algorithm = require('../logic/algorithm');


router.route('/')
  .post((req, res) => {
    console.log(req.body.array);
    res.json(algorithm(req.body.array));

  })






module.exports = router;