const express = require('express');
const router = express.Router();


router.get('/', (req, res, next) => {
  res.render('index', {
    title: "Meu servidor",
    version: "0.0.0"
  });
});

module.exports = router;