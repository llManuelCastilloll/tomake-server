const db = require('../../database/index');

exports.getMaxIdPersonal = async () => {
  return new Promise(async (resolve, reject) => {
    try{ 
      const id = await db.pgClient`SELECT MAX("pk_invitedId") id FROM tb_invited`;
      console.log(id);
      resolve(id)
    }catch(e){
      console.log(e);
      reject(e)
    }
  });
}

exports.addPersonalProfile = async (data) => {
  console.log(data)
  return new Promise(async (resolve, reject) => {
    try{
      const result = await db.pgClient`INSERT INTO public.tb_invited("pk_invitedId", "cl_name", "cl_controlNumber", "cl_bornDate", "cl_gender",
        "cl_curp", "cl_marital", "cl_address", "cl_city", "cl_municipality", "cl_state", "cl_phone",
        "cl_email", "cl_personalphone", "cl_especiality", "cl_exitDate", 
        "cl_titulate", "cl_english", "cl_otherLenguage", "cl_createdAt", "cl_updateAt") 
        VALUES
        (${data.pk_invitedId}, ${data.cl_name}, ${data.cl_controlNumber}, ${data.cl_bornDate}, ${data.cl_gender}, 
         ${data.cl_curp}, ${data.cl_marital}, ${data.cl_address}, ${data.cl_city}, ${data.cl_municipality},
         ${data.cl_state}, ${data.cl_phone}, ${data.cl_email}, ${data.cl_personalphone}, ${data.cl_especiality}, 
         ${data.cl_exitDate}, ${data.cl_titulate}, ${data.cl_english}, ${data.cl_otherLenguage}, ${data.cl_createdAt}, 
         ${data.cl_updateAt})
      `
      console.log("result=>", result);
      resolve(result);
    }catch(e){
      console.log("E=>", e)
      reject(e)
    }
  });
};

exports.getAllPersonalProfile = async () => {
  return new Promise(async(resolve, reject) =>{
    try {
      const result = await db.pgClient`SELECT * FROM public.tb_invited`
      console.log('result=>', result)
      resolve(result)
    }catch(e){
      console.log(e);
      reject(e)
    }
  });
}

exports.getMaxIdRelevance = async () => {
  return new Promise(async (resolve, reject) => {
    try{ 
      const id = await db.pgClient`SELECT MAX("pk_idRevAva") id FROM tb_relevance_availability`;
      console.log(id);
      resolve(id)
    }catch(e){
      console.log(e);
      reject(e)
    }
  });
}

exports.addRelevanceAvailability = async (data) => {
    return new Promise(async (resolve, reject) => {
      try{
        const result = await db.pgClient`INSERT INTO public.tb_relevance_availability("pk_idRevAva", "cl_teacherQuality",
        "cl_plan", "cl_oportunity", "cl_emphasis", "cl_infrastructure", "cl_experience", "cl_lic")
        VALUES
        (${data.pk_idRevAva}, ${data.cl_teacherQuality}, ${data.cl_plan}, ${data.cl_oportunity}, ${data.cl_emphasis}, 
          ${data.cl_infrastructure}, ${data.cl_experience}, ${data.cl_lic})
      `
      console.log('result=>', result)
      resolve(result)
      }catch(e){
        console.log(e);
        reject({error: e})
      }
    });
  };

exports.getMaxIdUbication = async () => {
  return new Promise(async (resolve, reject) => {
    try{ 
      const id = await db.pgClient`SELECT MAX("pk_idUbication") id FROM tb_ubication`;
      console.log(id);
      resolve(id)
    }catch(e){
      console.log(e);
      reject(e)
    }
  });
}

exports.addUbications = async (data) => {
    return new Promise(async (resolve, reject) => {
      try{
        const result = await db.pgClient`INSERT INTO public.tb_ubication(
          "pk_idUbication", "cl_activity", "cl_specciality", "cl_institution", "cl_FirstJobTime", "cl_firtJobMedium" , "cl_hiringRequiriment",
          "cl_jobLanguage", "cl_utilityLanguage", "cl_jobAntiguity", "cl_minimumSalary", "cl_jerarquiLevel", "cl_jobCondition",
          "cl_jobRelation", "cl_organism", "cl_turnEnterprise", "cl_socialReason", "cl_enterpriseAddress", "cl_cityEnterprise",
          "cl_municipalityEnterprise", "cl_stateEnterprise", "cl_phoneEnterprise", "cl_faxEnterprise", "cl_emailEnterprise",
          "cl_website", "cl_booss", "cl_sector", "cl_enterprisesize", "cl_talk", "cl_write", "cl_read", "cl_listen", "cl_firstJobYear", "cl_lic")
        VALUES
        (
          ${data.pk_idUbication}, ${data.cl_activity}, ${data.cl_specciality}, ${data.cl_institution}, ${data.cl_FirstJobTime}, ${data.cl_firtJobMedium} ,
          ${data.cl_hiringRequiriment}, ${data.cl_jobLanguage},  ${data.cl_utilityLanguage}, ${data.cl_jobAntiguity},
          ${data.cl_minimumSalary}, ${data.cl_jerarquiLevel}, ${data.cl_jobCondition}, ${data.cl_jobRelation}, ${data.cl_organism},
          ${data.cl_turnEnterprise}, ${data.cl_socialReason}, ${data.cl_enterpriseAddress}, ${data.cl_cityEnterprise},
          ${data.cl_municipalityEnterprise}, ${data.cl_stateEnterprise}, ${data.cl_phoneEnterprise}, ${data.cl_faxEnterprise},
          ${data.cl_emailEnterprise}, ${data.cl_website}, ${data.cl_booss}, ${data.cl_sector}, ${data.cl_enterprisesize},
          ${data.cl_talk}, ${data.cl_write}, ${data.cl_read}, ${data.cl_listen}, ${data.cl_firstJobYear}, ${data.cl_lic}
        )
      `
      console.log('result=>', result)
      resolve(result)
      }catch(e){
        console.log(e);
        reject({error: e})
      }
    });
};

exports.getMaxIdOther = async () =>{
  return new Promise(async (resolve, reject) => {
    try{ 
      const id = await db.pgClient`SELECT MAX("pk_idOther") id FROM tb_otherinfo`;
      resolve(id)
    }catch(e){
      reject(e)
    }
  });
}

exports.addOtherInfo = async (data) => {
    return new Promise(async (resolve, reject) => {
      try{
        const result = db.pgClient`
        INSERT INTO public.tb_otherinfo(
          "pk_idOther", "cl_effectiveJob", "cl_AccademicJob", "cl_residencesUtility", "cl_areaJob", "cl_titulation", "cl_laboralExperience",
          "cl_laboralCompetencies", "cl_schoolPrestigious", "cl_languageKnowledge", "cl_recommendations", "cl_personality", 
          "cl_capacity", "cl_others", "cl_newKnowledge", "cl_postgraduate", "cl_socialOrganization",
          "cl_profesionalOrganism", "cl_alumnAssociaton", "cl_comments", "cl_lic"
        )
        VALUES
        (
          ${data.pk_idOther}, ${data.cl_effectiveJob}, ${data.cl_AccademicJob}, ${data.cl_residencesUtility}, ${data.cl_areaJob}, ${data.cl_titulation}, ${data.cl_laboralExperience},
          ${data.cl_laboralCompetencies}, ${data.cl_schoolPrestigious}, ${data.cl_languageKnowledge}, ${data.cl_recommendations}, ${data.cl_personality}, 
          ${data.cl_capacity}, ${data.cl_others}, ${data.cl_newKnowledge}, ${data.cl_postgraduate}, ${data.cl_socialOrganization},
          ${data.cl_profesionalOrganism}, ${data.cl_alumnAssociaton}, ${data.cl_comments}, ${data.cl_lic}
        )
        `
        resolve(result)
      }catch(e){
        console.log(e)
        reject(e)
      }
    })
};