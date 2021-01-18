const express = require('express');
const apiRoute = express.Router();

apiRoute.get('/', async (req, res) => {
    try {
      res.status(200).send("Api general tareas...");
    } catch (err) {
      console.log(err.message);
      res.status(500).send({
        message: 'Internal server error',
        reason: err.message,
      });
    }
  });

  
module.exports = apiRoute;
