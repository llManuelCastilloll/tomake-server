const db = require('../../database/index');

exports.createWork = async (data) => {
    console.log("data",data);
    return new Promise(async (resolve, reject) => { 
      try{
        var userInfo = db.pgClient`
        INSERT INTO public.tb_works(
          "id", "name", "description", "timeDefinition", "timeClosure","workStatus", "durationType"
        )
        VALUES
        (
          ${data.id}, ${data.name}, ${data.description}, ${data.timeDefinition}, ${data.timeClosure}, 
          ${data.workStatus}, ${data.durationType}
        )
        `
        resolve(userInfo)
      }catch(e){
        //console.log(e);
        reject(e)
      }
    });
}

exports.getAllWorks = async (filter) => {
  return new Promise(async(resolve, reject) => {
    try{
      const works = filter==undefined || filter == "" ?  await db.pgClient`SELECT * FROM tb_works` :
                      filter == "finalizado" ? await db.pgClient`SELECT * FROM tb_works WHERE "workStatus"='finalizado'` :
                        filter == "corta" ? await db.pgClient`SELECT * FROM tb_works WHERE "durationType"='Corta'`:
                          filter == "media" ? await db.pgClient`SELECT * FROM tb_works WHERE "durationType"='Media'` :
                            filter == "larga" ? await db.pgClient`SELECT * FROM tb_works WHERE "durationType"='Larga'` :
                       ""
      console.log("works", works);
      resolve(works);
    }catch(e){
      console.log(e);
      reject(e)
    }
  });
};

exports.getMaxId = async () => {
  return new Promise(async(resolve, reject) => {
    try{
      const works = await db.pgClient`SELECT MAX("id") id FROM tb_works`
      console.log("works", works);
      resolve(works);
    }catch(e){
      console.log(e);
      reject(e)
    }
    
  });
};

exports.updateWork = async (name, description, id, workStatus, durationType) => {
  return new Promise(async(resolve, reject) => {
    try{
      const works = await db.pgClient`
      UPDATE tb_works
      SET 
      "name"=${name},
      "description"=${description},
      "workStatus"=${workStatus},
      "durationType"=${durationType}
      WHERE "id"=${id};
      `
      console.log("works", works);
      resolve(works);
    }catch(e){
      console.log(e);
      reject(e)
    }
    
  });
};

exports.deleteWork = async (id) => {
  return new Promise(async(resolve, reject) => {
    try{
      const works = await db.pgClient`
      DELETE FROM tb_works
      WHERE "id"=${id};
      `
      console.log("works", works);
      resolve(works);
    }catch(e){
      console.log(e);
      reject(e)
    }
    
  });
};