const express = require('express');
const apiRoute = express.Router();
const mdWorks = require('../../models/tareas/md-tareas');
const moment = require('moment');

  apiRoute.get('/', async (req, res) => {
    const { filter } = req.query;
    try {
        const allWorks = await mdWorks.getAllWorks(filter);
      res.status(200).send(allWorks);
    } catch (err) {
      console.log(err.message);
      res.status(500).send({
        message: 'Internal server error',
        reason: err.message,
      });
    }
  });

  apiRoute.post('/', async (req, res) => {
      const { name, description, timeDefinition, timeClosure, durationType, workStatus } = req.body;
      console.log(req.body);
    try {
        const maxId = await mdWorks.getMaxId();
        let data = {
            id: maxId[0].id==null ? 1 : parseInt(maxId[0].id) + 1, //Creación de id
            name: name,
            description: description,
            timeDefinition: timeDefinition,
            timeClosure: timeClosure,
            durationType: durationType,
            workStatus: workStatus
        };
        const result = await mdWorks.createWork(data);
        res.status(200).send("Nueva tarea creada");
    } catch (err) {
      console.log(err.message);
      res.status(500).send({
        message: 'Internal server error',
        reason: err.message,
      });
    }
  });

  apiRoute.put('/updateWork', async (req, res) => {
      const {name, description, id, workStatus, durationType} = req.body;
       
      console.log("body", req.body)
    try {
        const result = await mdWorks.updateWork(name, description, id, workStatus, durationType);
        res.status(200).send("Tarea actualizada");
    } catch (err) {
      console.log(err.message);
      res.status(500).send({
        message: 'Internal server error',
        reason: err.message,
      });
    }
  })

  apiRoute.post('/deleteWork', async (req, res) => { 
        const {id} = req.body;
    try {
        const result = await mdWorks.deleteWork(id);
        res.status(200).send("Tarea eliminada");
    } catch (err) {
        console.log(err.message);
        res.status(500).send({
        message: 'Internal server error',
        reason: err.message,
        });
    }
  })

  apiRoute.get('/graphic', async (req, res) => { 
    let filter = ''
    try {
        const allWorks = await mdWorks.getAllWorks(filter);
        let daysInWeek = [];
        let finalizados = 0, larga = 0, media  = 0, corta = 0; 
        let lunes = moment().day(1);
      let domingo = moment().day(7);
        for(let i=0; i<allWorks.length; i++){
          console.log("in",allWorks[i])
          let day = moment(allWorks[i].timeClosure);
          if((lunes<=day)&&(domingo>=day)){
            if(allWorks[i].durationType == "Corta"){
              corta++;
            }
            if(allWorks[i].durationType == "Media"){
              media++;
            }
            if(allWorks[i].durationType == "Larga"){
              larga++;
            }
            if(allWorks[i].workStatus == "finalizado"){
              finalizados++;
            }
          }
        }
      daysInWeek.push(finalizados, corta, media, larga)
      console.log(daysInWeek);

      res.status(200).send(daysInWeek);
    } catch (err) {
      console.log(err.message);
      res.status(500).send({
        message: 'Internal server error',
        reason: err.message,
      });
    }
  })
  
module.exports = apiRoute;
