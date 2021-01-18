const db = require('../../database/index');

exports.getAllUsers = async () => {
  return new Promise(async(resolve, reject) => {
    try{
      const users = await db.pgClient`SELECT MAX("pk_userId") lastId FROM tb_users_sys`
      console.log("users", users);
      resolve(users);
    }catch(e){
      console.log(e);
      reject(e)
    }
    
  });
};

exports.getMaxIdUser = () => {
  return new Promise(async (resolve, reject) => {
    try{ 
      const id = await db.pgClient`SELECT MAX("pk_userId") id FROM tb_users_sys`;
      console.log(id);
      resolve(id)
    }catch(e){
      console.log(e);
      reject(e)
    }
  });
}

exports.getUserInfo = async (user) => {
  return new Promise(async (resolve, reject) => { 
    try{
      var userInfo = db.pgClient`
      SELECT "pk_userId" idUser, "cl_userName" userName, "cl_userGender" userGender, 
          "cl_userNickName" nickName, "cl_userPassword" userPsw, "cl_createdAt" dateCreation
      From tb_users_sys 
      WHERE "cl_userEmail"=${user}
      `
      resolve(userInfo)
    }catch(e){
      //console.log(e);
      reject(e)
    }
  });
}

exports.createUser = async (data) => {
  console.log("data",data);
  return new Promise(async (resolve, reject) => { 
    try{
      var userInfo = db.pgClient`
      INSERT INTO public.tb_users_sys(
        "cl_createdAt", "cl_updateAt", "cl_userEmail", "cl_userGender", "cl_userName","cl_userNickName",
        "cl_userPassword", "pk_userId"
      )
      VALUES
      (
        ${data.cl_createdAt}, ${data.cl_updateAt}, ${data.cl_userEmail}, ${data.cl_userGender}, ${data.cl_userName},${data.cl_userNickName},
        ${data.cl_userPassword}, ${data.pk_userId}
      )
      `
      console.log(userInfo)
      resolve(userInfo)
    }catch(e){
      //console.log(e);
      reject(e)
    }
  });
}

exports.getUserByEmail = async (email) => {
  return new Promise(async (resolve, reject) => { 
    try{
      var userInfo = db.pgClient`
      SELECT "pk_userId" idUser, "cl_userName" userName, "cl_userGender" userGender, 
          "cl_userNickName" nickName, "cl_userPassword" userPsw, "cl_createdAt" dateCreation
      From tb_users_sys 
      WHERE "cl_userEmail"=${user}
      `
      console.log(userInfo)
      resolve(userInfo)
    }catch(e){
      //console.log(e);
      reject(e)
    }
  });
}