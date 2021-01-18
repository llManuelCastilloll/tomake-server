const express = require('express');
const apiRoute = express.Router();
const mdUsers = require('../../models/users/md-users');

apiRoute.get('/', async (req, res) => {
  try {
    const users = await mdUsers.getAllUsers();
    res.status(200).send(users);
  } catch (err) {
    console.log(err.message);
    res.status(500).send({
      message: 'Internal server error',
      reason: err.message,
    });
  }
});

apiRoute.post('/auth', async (req, res) =>{
  const { user, password } = req.body;
  if(user && password){
    try{
      const userInfo = await mdUsers.getUserInfo(user);
      if(userInfo.length == 0){
        res.status(403).send({
          message:"User not found",
          reason:`User: ${user} can't be founded!`
        })
      }else{
        if(password == userInfo[0].userpsw){
          delete userInfo[0].userpsw
          res.status(200).send(userInfo);
        }else{
          res.status(404).send({
            message:"Invalid request",
            reason:"Invalid credentials"
          })
        }        
      } 
    }catch(e){
      console.log(e);
      res.status(500).send({
        message:'Internal server error',
        reason: e.message
      })
    }
  }else{
    res.status(400).send({
      message:"Invalid request",
      reason: `Params user: ${user} or password not valid.`
    })
  }
});

apiRoute.post('/', async (req, res) => {
  const { name, password, nickname, gender, email } = req.body;
  if(email && password){
    const id = await mdUsers.getMaxIdUser();
    const today =  new Date();
    const userExist = await mdUsers.getUserInfo(email);
    console.log("exist",userExist);
    const data = {
      pk_userId: id[0].id == null ? 0 : parseInt(id[0].id)+1,
      cl_userPassword: password,
      cl_userNickName: nickname,
      cl_userName: name,
      cl_userEmail:email,
      cl_userGender: gender,
      cl_createdAt: today, 
      cl_updateAt: today,
    }
    try{
      if(userExist.length == 0){
        const result = await mdUsers.createUser(data);
        console.log(result);
        res.status(200).send({
          message:'New user created successfully.'
        })
      }else{
        res.status(400).send({
          message:"Invalid request",
          reason:"User already exists."
        })
      }
    }catch(e){
      console.log(e);
      res.status(500).send({
        message:"Internal server error",
        reason: e.message
      })
    }
  }else{
    res.status(400).send({
      message:"Invalid request",
      reason: `Request needs a email and password`
    })
  }
});

module.exports = apiRoute;
