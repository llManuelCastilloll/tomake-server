const db = require('../../database/index')

exports.addEnterprise = async (data) => {
  console.log("DATA=>",data);
    return new Promise(async (req, res) => {
      try{
        const result = await db.pgClient`
        INSERT INTO public.tb_enterprise_organism 
        ("pk_idEnterprise", "cl_enterpriseName", "cl_enterpriseAddress", "cl_city", "cl_municipality",
        "cl_state", "cl_phone", "cl_email", "cl_enterpriseType", "cl_size", "cl_enterpriseActivity")
        VALUES
        (${data.pk_idEnterprise}, ${data.cl_enterpriseName}, ${data.cl_enterpriseAddress}, ${data.cl_city}, ${data.cl_municipality},
          ${data.cl_state}, ${data.cl_phone}, ${data.cl_email}, ${data.cl_enterpriseType}, ${data.cl_size}, ${data.cl_enterpriseActivity})
        `
        resolve(result)
      }catch(e){
        console.log(e);
        reject(e);
      }
    })
};

exports.getMaxEnterprise = async () =>{
  return new Promise(async (resolve, reject) => {
    try{ 
      const id = await db.pgClient`SELECT MAX("pk_idEnterprise") id FROM tb_enterprise_organism`;
      console.log(id);
      resolve(id)
    }catch(e){
      console.log(e);
      reject(e)
    }
  });
}

exports.addLaboralUbication = async (data) => {
  return new Promise(async (resolve, reject) => {
    try{ 
      const result = await db.pgClient`INSERT INTO public.tb_laboral_ubication(
        "pk_idLaboralUbication", "cl_professionalNumber", "cl_professionalCongruency", "cl_enterpriseRequiriments", 
        "cl_popularCareers"
      )
      VALUES
      (
        ${data.pk_idLaboralUbication}, ${data.cl_professionalNumber}, ${data.cl_professionalCongruency}, ${data.cl_enterpriseRequiriments}, 
        ${data.cl_popularCareers}
      )`;
      console.log(result);
      resolve(result)
    }catch(e){
      console.log(e);
      reject(e)
    }
  });
};

exports.getMaxUbication = async () => {
  return new Promise(async (resolve, reject) =>{
    try{
      const id = await db.pgClient`SELECT MAX("pk_idLaboralUbication") id FROM tb_laboral_ubication`
      resolve(id);
    }catch(e){
      console.log(e)
      reject(e)
    }
  });
};

exports.addLaboralSkills = async (data) => {
  console.log("laboralSkills=>",data)
  return new Promise(async (resolve, reject) => {
    try{ 
      const result = await db.pgClient`INSERT INTO public.tb_laboral_skills(
        "pk_idSkills", "cl_option_a", "cl_option_b", "cl_option_c", "cl_option_d", "cl_option_e", "cl_option_f",
        "cl_option_g", "cl_option_h", "cl_option_i", "cl_option_j", "cl_option_k", "cl_option_l", "cl_option_m",
        "cl_option_n", "cl_option_o", "cl_option_p", "cl_option_q", "cl_worker_quality", "cl_sugerencys", "cl_comentarys"
      )
      VALUES
      (
        ${data.pk_idSkills}, ${data.cl_option_a}, ${data.cl_option_b}, ${data.cl_option_c}, ${data.cl_option_d}, ${data.cl_option_e}, 
        ${data.cl_option_f}, ${data.cl_option_g}, ${data.cl_option_h}, ${data.cl_option_i}, ${data.cl_option_j}, ${data.cl_option_k}, 
        ${data.cl_option_l}, ${data.cl_option_m}, ${data.cl_option_n}, ${data.cl_option_o}, ${data.cl_option_p}, ${data.cl_option_q}, 
        ${data.cl_worker_quality}, ${data.cl_sugerencys}, ${data.cl_comentarys}
      )`;
      console.log(result);
      resolve(result)
    }catch(e){
      console.log(e);
      reject(e)
    }
  });
};

exports.getMaxSkills = async () => {
  return new Promise(async (resolve, reject) =>{
    try{
      const id = await db.pgClient`SELECT MAX("pk_idSkills") id FROM public.tb_laboral_skills`
      resolve(id);
    }catch(e){
      console.log(e)
      reject(e)
    }
  });
};