const db = require('../../database/index');

/**
 *PERTINENCIA Y DISPONIBILIDAD DE MEDIOS Y RECURSOS PARA EL APRENDIZAJE... 
*/

exports.getTeacherPoints = async (option, lic) => {
  return new Promise(async(resolve, reject) => {
    try{
      const result =  option == "teacherQuality" ? await teacherQuality(lic) : 
                    option == "studyPlan" ? await studyPlan(lic) :
                    option == "devInvestigation" ? await devInvestigation(lic) : 
                    option == "teachLearn" ? await teachLearn(lic) : 
                    option == "infrastructure" ? await infrastructure(lic) :
                    option == "profesionalResidences" ?await profesionalResidences(lic) : 
                    option == "englishKnowledge" ? await englishKnowledge(lic) : '';
      resolve(result);
    }catch(e){
      console.log(e);
      reject(e)
    }
  });
};

exports.getTotalQuaity = async (option, lic) => {
    return new Promise(async(resolve, reject) => {
        try{
          const result = option == "englishKnowledge" ? await exports.getTotalTb_invited(lic) :
                                   await totalTb_relevance_availability(lic);
          resolve(result);
        }catch(e){
          console.log(e);
          reject(e)
        }
      });
};

const teacherQuality = (lic) =>{
  if(lic == ""){
    let result = db.pgClient`
    SELECT 
    COUNT("pk_idRevAva") FILTER (WHERE "cl_teacherQuality" = 'Muy buena') as muyBuena,
    COUNT("pk_idRevAva") FILTER (WHERE "cl_teacherQuality" = 'Buena') as buena,    
    COUNT("pk_idRevAva") FILTER (WHERE "cl_teacherQuality" = 'Regular') as regular,
    COUNT("pk_idRevAva") FILTER (WHERE "cl_teacherQuality" = 'Mala') as mala,
    COUNT("pk_idRevAva") FILTER (WHERE "cl_teacherQuality" = 'Muy mala') as muyMala
    FROM tb_relevance_availability as relav`
    return result
  }else{
    let result = db.pgClient`
    SELECT 
    COUNT("pk_idRevAva") FILTER (WHERE "cl_teacherQuality" = 'Muy buena') as muyBuena,
    COUNT("pk_idRevAva") FILTER (WHERE "cl_teacherQuality" = 'Buena') as buena,    
    COUNT("pk_idRevAva") FILTER (WHERE "cl_teacherQuality" = 'Regular') as regular,
    COUNT("pk_idRevAva") FILTER (WHERE "cl_teacherQuality" = 'Mala') as mala,
    COUNT("pk_idRevAva") FILTER (WHERE "cl_teacherQuality" = 'Muy mala') as muyMala
    FROM tb_relevance_availability as relav
	  WHERE "cl_lic"=${lic} `
    return result
  }
} 

const studyPlan = (lic) => {
  if(lic==""){
    let result  = db.pgClient`
    SELECT 
    COUNT("pk_idRevAva") FILTER (WHERE "cl_plan" = 'Muy buena') as muyBuena,
    COUNT("pk_idRevAva") FILTER (WHERE "cl_plan" = 'Buena') as buena,    
    COUNT("pk_idRevAva") FILTER (WHERE "cl_plan" = 'Regular') as regular,
    COUNT("pk_idRevAva") FILTER (WHERE "cl_plan" = 'Mala') as mala,
    COUNT("pk_idRevAva") FILTER (WHERE "cl_plan" = 'Muy mala') as muyMala
    FROM tb_relevance_availability as relav`
    return result;
  }else{
    let result  = db.pgClient`
    SELECT 
    COUNT("pk_idRevAva") FILTER (WHERE "cl_plan" = 'Muy buena') as muyBuena,
    COUNT("pk_idRevAva") FILTER (WHERE "cl_plan" = 'Buena') as buena,    
    COUNT("pk_idRevAva") FILTER (WHERE "cl_plan" = 'Regular') as regular,
    COUNT("pk_idRevAva") FILTER (WHERE "cl_plan" = 'Mala') as mala,
    COUNT("pk_idRevAva") FILTER (WHERE "cl_plan" = 'Muy mala') as muyMala
    FROM tb_relevance_availability as relav
    WHERE "cl_lic"=${lic} `
    return result;
  }
} 

const devInvestigation = (lic) => {
  if(lic==""){
    let result = db.pgClient`
    SELECT 
    COUNT("pk_idRevAva") FILTER (WHERE "cl_oportunity" = 'Muy buena') as muyBuena,
    COUNT("pk_idRevAva") FILTER (WHERE "cl_oportunity" = 'Buena') as buena,    
    COUNT("pk_idRevAva") FILTER (WHERE "cl_oportunity" = 'Regular') as regular,
    COUNT("pk_idRevAva") FILTER (WHERE "cl_oportunity" = 'Mala') as mala,
    COUNT("pk_idRevAva") FILTER (WHERE "cl_oportunity" = 'Muy mala') as muyMala
    FROM tb_relevance_availability as relav`
    return result;
  }else{
    let result = db.pgClient`
    SELECT 
    COUNT("pk_idRevAva") FILTER (WHERE "cl_oportunity" = 'Muy buena') as muyBuena,
    COUNT("pk_idRevAva") FILTER (WHERE "cl_oportunity" = 'Buena') as buena,    
    COUNT("pk_idRevAva") FILTER (WHERE "cl_oportunity" = 'Regular') as regular,
    COUNT("pk_idRevAva") FILTER (WHERE "cl_oportunity" = 'Mala') as mala,
    COUNT("pk_idRevAva") FILTER (WHERE "cl_oportunity" = 'Muy mala') as muyMala
    FROM tb_relevance_availability as relav
    WHERE "cl_lic"=${lic}`
    return result;
  }
} 

const teachLearn = (lic) => {
  if(lic==""){
    let result = db.pgClient`
    SELECT 
    COUNT("pk_idRevAva") FILTER (WHERE "cl_emphasis" = 'Muy buena') as muyBuena,
    COUNT("pk_idRevAva") FILTER (WHERE "cl_emphasis" = 'Buena') as buena,
    COUNT("pk_idRevAva") FILTER (WHERE "cl_emphasis" = 'Regular') as regular,
    COUNT("pk_idRevAva") FILTER (WHERE "cl_emphasis" = 'Mala') as mala,
    COUNT("pk_idRevAva") FILTER (WHERE "cl_emphasis" = 'Muy mala') as muyMala
    FROM tb_relevance_availability as relav`
    return result;
  }else{
    let result = db.pgClient`
    SELECT 
    COUNT("pk_idRevAva") FILTER (WHERE "cl_emphasis" = 'Muy buena') as muyBuena,
    COUNT("pk_idRevAva") FILTER (WHERE "cl_emphasis" = 'Buena') as buena,
    COUNT("pk_idRevAva") FILTER (WHERE "cl_emphasis" = 'Regular') as regular,
    COUNT("pk_idRevAva") FILTER (WHERE "cl_emphasis" = 'Mala') as mala,
    COUNT("pk_idRevAva") FILTER (WHERE "cl_emphasis" = 'Muy mala') as muyMala
    FROM tb_relevance_availability as relav
    WHERE "cl_lic"=${lic}`
    return result;
  }
} 

const infrastructure = (lic) => {
  if(lic==""){
    let result = db.pgClient`
    SELECT 
    COUNT("pk_idRevAva") FILTER (WHERE "cl_infrastructure" = 'Muy buena') as muyBuena,
    COUNT("pk_idRevAva") FILTER (WHERE "cl_infrastructure" = 'Buena') as buena,    
    COUNT("pk_idRevAva") FILTER (WHERE "cl_infrastructure" = 'Regular') as regular,
    COUNT("pk_idRevAva") FILTER (WHERE "cl_infrastructure" = 'Mala') as mala,
    COUNT("pk_idRevAva") FILTER (WHERE "cl_infrastructure" = 'Muy mala') as muyMala
    FROM tb_relevance_availability as relav`
    return result;
  }else{
    let result = db.pgClient`
    SELECT 
    COUNT("pk_idRevAva") FILTER (WHERE "cl_infrastructure" = 'Muy buena') as muyBuena,
    COUNT("pk_idRevAva") FILTER (WHERE "cl_infrastructure" = 'Buena') as buena,    
    COUNT("pk_idRevAva") FILTER (WHERE "cl_infrastructure" = 'Regular') as regular,
    COUNT("pk_idRevAva") FILTER (WHERE "cl_infrastructure" = 'Mala') as mala,
    COUNT("pk_idRevAva") FILTER (WHERE "cl_infrastructure" = 'Muy mala') as muyMala
    FROM tb_relevance_availability as relav
    WHERE "cl_lic"=${lic}`
    return result;
  }
} 

const profesionalResidences = (lic) => {
  if(lic ==""){
    let result = db.pgClient`
    SELECT 
    COUNT("pk_idRevAva") FILTER (WHERE "cl_experience" = 'Muy buena') as muyBuena,
    COUNT("pk_idRevAva") FILTER (WHERE "cl_experience" = 'Buena') as buena,    
    COUNT("pk_idRevAva") FILTER (WHERE "cl_experience" = 'Regular') as regular,
    COUNT("pk_idRevAva") FILTER (WHERE "cl_experience" = 'Mala') as mala,
    COUNT("pk_idRevAva") FILTER (WHERE "cl_experience" = 'Muy mala') as muyMala
    FROM tb_relevance_availability as relav`
    return result;
  }else{
    let result = db.pgClient`
    SELECT 
    COUNT("pk_idRevAva") FILTER (WHERE "cl_experience" = 'Muy buena') as muyBuena,
    COUNT("pk_idRevAva") FILTER (WHERE "cl_experience" = 'Buena') as buena,    
    COUNT("pk_idRevAva") FILTER (WHERE "cl_experience" = 'Regular') as regular,
    COUNT("pk_idRevAva") FILTER (WHERE "cl_experience" = 'Mala') as mala,
    COUNT("pk_idRevAva") FILTER (WHERE "cl_experience" = 'Muy mala') as muyMala
    FROM tb_relevance_availability as relav
    WHERE "cl_lic"=${lic}`
    return result;
  }
} 

const englishKnowledge = (lic) => {
  if(lic==""){
    let result =  db.pgClient`
    SELECT COUNT("pk_invitedId") FILTER (WHERE "cl_english" = '10') as diez,
    COUNT("pk_invitedId") FILTER (WHERE "cl_english" = '20') as veinte,
    COUNT("pk_invitedId") FILTER (WHERE "cl_english" = '30') as treinta,
    COUNT("pk_invitedId") FILTER (WHERE "cl_english" = '40') as cuarenta,
    COUNT("pk_invitedId") FILTER (WHERE "cl_english" = '50') as cincuenta,
    COUNT("pk_invitedId") FILTER (WHERE "cl_english" = '60') as sesenta,
    COUNT("pk_invitedId") FILTER (WHERE "cl_english" = '70') as setenta,
    COUNT("pk_invitedId") FILTER (WHERE "cl_english" = '80') as ochenta,
    COUNT("pk_invitedId") FILTER (WHERE "cl_english" = '90') as noventa,
    COUNT("pk_invitedId") FILTER (WHERE "cl_english" = '100') as cien
    FROM tb_invited as invited`
    return result;
  }else{
    let result =  db.pgClient`
    SELECT COUNT("pk_invitedId") FILTER (WHERE "cl_english" = '10') as diez,
    COUNT("pk_invitedId") FILTER (WHERE "cl_english" = '20') as veinte,
    COUNT("pk_invitedId") FILTER (WHERE "cl_english" = '30') as treinta,
    COUNT("pk_invitedId") FILTER (WHERE "cl_english" = '40') as cuarenta,
    COUNT("pk_invitedId") FILTER (WHERE "cl_english" = '50') as cincuenta,
    COUNT("pk_invitedId") FILTER (WHERE "cl_english" = '60') as sesenta,
    COUNT("pk_invitedId") FILTER (WHERE "cl_english" = '70') as setenta,
    COUNT("pk_invitedId") FILTER (WHERE "cl_english" = '80') as ochenta,
    COUNT("pk_invitedId") FILTER (WHERE "cl_english" = '90') as noventa,
    COUNT("pk_invitedId") FILTER (WHERE "cl_english" = '100') as cien
    FROM tb_invited as invited
    WHERE "cl_especiality"=${lic}`
    return result;
  }
}

const totalTb_relevance_availability = (lic) => {
  if(lic==""){
    let result = db.pgClient`
                  SELECT 
                    COUNT("pk_idRevAva") total
                    FROM tb_relevance_availability as relav
                  `
    return result;
  }else{
    let result = db.pgClient`
                  SELECT 
                  COUNT("pk_idRevAva") total
                  FROM tb_relevance_availability as relav
                  WHERE "cl_lic"=${lic}
                  `
    return result;
  }
} 

/**
 * UBICACIÓN LABORAL DE LOS EGRESADOS...
*/

exports.getfirstJobPoints = async (lic) => {
  return new Promise(async(resolve, reject) => {
    if(lic==""){
      try{
        const result = await db.pgClient`
        SELECT
        COUNT("pk_idUbication") FILTER (WHERE "cl_FirstJobTime" = 'Antes de egresar') as antesEgresar,
        COUNT("pk_idUbication") FILTER (WHERE "cl_FirstJobTime" = 'Menos de 6 meses') as menos6Meses,
        COUNT("pk_idUbication") FILTER (WHERE "cl_FirstJobTime" = 'Entre seis meses y un año') as seisAño,
        COUNT("pk_idUbication") FILTER (WHERE "cl_FirstJobTime" = 'Mas de un año') as masAño
        FROM tb_ubication as ubication`
        resolve(result);
      }catch(e){
        console.log(e);
        reject(e)
      }
    }else{
          try{
            const result = await db.pgClient`
            SELECT
            COUNT("pk_idUbication") FILTER (WHERE "cl_FirstJobTime" = 'Antes de egresar') as antesEgresar,
            COUNT("pk_idUbication") FILTER (WHERE "cl_FirstJobTime" = 'Menos de 6 meses') as menos6Meses,
            COUNT("pk_idUbication") FILTER (WHERE "cl_FirstJobTime" = 'Entre seis meses y un año') as seisAño,
            COUNT("pk_idUbication") FILTER (WHERE "cl_FirstJobTime" = 'Mas de un año') as masAño
            FROM tb_ubication as ubication
            WHERE "cl_lic"=${lic}`
            resolve(result);
          }catch(e){
          console.log(e);
          reject(e)
        }
      }
  });
};

exports.getLaboralPoints = async (lic) => {
  return new Promise(async(resolve, reject) => {
    if(lic==""){
      try{
        const result = await db.pgClient`
        SELECT COUNT("pk_idUbication") FILTER (WHERE "cl_firtJobMedium" = 'Bolsa de trabajo del plantel') as plantel,
        COUNT("pk_idUbication") FILTER (WHERE "cl_firtJobMedium" = 'Residencia profesional') as resprofesional,
        COUNT("pk_idUbication") FILTER (WHERE "cl_firtJobMedium" = 'Medios masivos de comunicación') as mediocomunicacion,
        COUNT("pk_idUbication") FILTER (WHERE "cl_firtJobMedium" <> 'Bolsa de trabajo del plantel' 
                                        AND "cl_firtJobMedium" <> 'Residencia profesional' 
                                        AND "cl_firtJobMedium" <> 'Medios masivos de comunicación') as otro
        FROM tb_ubication as ubication`
        resolve(result);
      }catch(e){
        console.log(e);
        reject(e)
      }
    }else{
      try{
        const result = await db.pgClient`
        SELECT COUNT("pk_idUbication") FILTER (WHERE "cl_firtJobMedium" = 'Bolsa de trabajo del plantel') as plantel,
        COUNT("pk_idUbication") FILTER (WHERE "cl_firtJobMedium" = 'Residencia profesional') as resprofesional,
        COUNT("pk_idUbication") FILTER (WHERE "cl_firtJobMedium" = 'Medios masivos de comunicación') as mediocomunicacion,
        COUNT("pk_idUbication") FILTER (WHERE "cl_firtJobMedium" <> 'Bolsa de trabajo del plantel' 
                                        AND "cl_firtJobMedium" <> 'Residencia profesional' 
                                        AND "cl_firtJobMedium" <> 'Medios masivos de comunicación') as otro
        FROM tb_ubication as ubication
        WHERE "cl_lic"=${lic}`
        resolve(result);
      }catch(e){
        console.log(e);
        reject(e)
      }
    }
  });
}

exports.getWorkInfoPoint = async (lic) => {
  return new Promise(async(resolve, reject) => {
    if(lic==""){
      try{
        const result = await db.pgClient`
        SELECT COUNT("pk_idUbication") FILTER (WHERE "cl_activity" = 'Trabaja') as trabaja,
        COUNT("pk_idUbication") FILTER (WHERE "cl_activity" = 'Estudia') as estudia,
        COUNT("pk_idUbication") FILTER (WHERE "cl_activity" = 'Trabaja y Estudia') as trabajaestudia,
        COUNT("pk_idUbication") FILTER (WHERE "cl_activity" = 'No estudia ni trabaja') as trabajaniestudia
        FROM tb_ubication as ubication`
        resolve(result);
      }catch(e){
        console.log(e);
        reject(e)
      }
    }else{
      try{
        const result = await db.pgClient`
        SELECT COUNT("pk_idUbication") FILTER (WHERE "cl_activity" = 'Trabaja') as trabaja,
        COUNT("pk_idUbication") FILTER (WHERE "cl_activity" = 'Estudia') as estudia,
        COUNT("pk_idUbication") FILTER (WHERE "cl_activity" = 'Trabaja y Estudia') as trabajaestudia,
        COUNT("pk_idUbication") FILTER (WHERE "cl_activity" = 'No estudia ni trabaja') as trabajaniestudia
        FROM tb_ubication as ubication
        WHERE "cl_lic"=${lic}`
        resolve(result);
      }catch(e){
        console.log(e);
        reject(e)
      }
    }
  });
}

exports.getJerarquiLevelPoints = async (lic) => {
  return new Promise(async(resolve, reject) => {
    if(lic==0){
      try{
        const result = await db.pgClient`
        SELECT COUNT("pk_idUbication") FILTER (WHERE "cl_jerarquiLevel" = 'Técnico') as tecnico,
        COUNT("pk_idUbication") FILTER (WHERE "cl_jerarquiLevel" = 'Supervisor') as supervisor,
        COUNT("pk_idUbication") FILTER (WHERE "cl_jerarquiLevel" = 'Jefe de área') as jefearea,
        COUNT("pk_idUbication") FILTER (WHERE "cl_jerarquiLevel" = 'Funcionario') as funcionario,
        COUNT("pk_idUbication") FILTER (WHERE "cl_jerarquiLevel" = 'Directivo') as directivo,
        COUNT("pk_idUbication") FILTER (WHERE "cl_jerarquiLevel" = 'Empresario') as empresario
        FROM tb_ubication as ubication`
        resolve(result);
      }catch(e){
        console.log(e);
        reject(e)
      }
    }else{
      try{
        const result = await db.pgClient`
        SELECT COUNT("pk_idUbication") FILTER (WHERE "cl_jerarquiLevel" = 'Técnico') as tecnico,
        COUNT("pk_idUbication") FILTER (WHERE "cl_jerarquiLevel" = 'Supervisor') as supervisor,
        COUNT("pk_idUbication") FILTER (WHERE "cl_jerarquiLevel" = 'Jefe de área') as jefearea,
        COUNT("pk_idUbication") FILTER (WHERE "cl_jerarquiLevel" = 'Funcionario') as funcionario,
        COUNT("pk_idUbication") FILTER (WHERE "cl_jerarquiLevel" = 'Directivo') as directivo,
        COUNT("pk_idUbication") FILTER (WHERE "cl_jerarquiLevel" = 'Empresario') as empresario
        FROM tb_ubication as ubication
        WHERE "cl_lic"=${lic}`
        resolve(result);
      }catch(e){
        console.log(e);
        reject(e)
      }
    }
    
  });
}

exports.getEnterpriseSizePoints = async (option) => {
  return new Promise(async(resolve, reject) => {
    try{
      const result = await db.pgClient`
      SELECT COUNT("pk_idUbication") FILTER (WHERE "cl_enterprisesize" = 'Microempresa (1-30)') as microempresa,
      COUNT("pk_idUbication") FILTER (WHERE "cl_enterprisesize" = 'Pequeña (31-100)') as pequeña,
      COUNT("pk_idUbication") FILTER (WHERE "cl_enterprisesize" = 'Mediana (101-500)') as mediana,
      COUNT("pk_idUbication") FILTER (WHERE "cl_enterprisesize" = 'Grande (más de 500)') as grande
      FROM tb_ubication as ubication`
      resolve(result);
    }catch(e){
      console.log(e);
      reject(e)
    }
  });
}

exports.getRelationWork = async (lic) => {
  return new Promise(async(resolve, reject) => {
    if(lic==""){
      try{
        const result = await db.pgClient`
        SELECT COUNT("pk_idUbication") FILTER (WHERE "cl_jobRelation" = '0%') as cero,
        COUNT("pk_idUbication") FILTER (WHERE "cl_jobRelation" = '20%') as veinte,
        COUNT("pk_idUbication") FILTER (WHERE "cl_jobRelation" = '40%') as cuarenta,
        COUNT("pk_idUbication") FILTER (WHERE "cl_jobRelation" = '60%') as sesenta,
        COUNT("pk_idUbication") FILTER (WHERE "cl_jobRelation" = '80%') as ochenta,
        COUNT("pk_idUbication") FILTER (WHERE "cl_jobRelation" = '100%') as cien
        FROM tb_ubication as ubication`
        resolve(result);
      }catch(e){
        console.log(e);
        reject(e)
      }
    }else{
      try{
        const result = await db.pgClient`
        SELECT COUNT("pk_idUbication") FILTER (WHERE "cl_jobRelation" = '0%') as cero,
        COUNT("pk_idUbication") FILTER (WHERE "cl_jobRelation" = '20%') as veinte,
        COUNT("pk_idUbication") FILTER (WHERE "cl_jobRelation" = '40%') as cuarenta,
        COUNT("pk_idUbication") FILTER (WHERE "cl_jobRelation" = '60%') as sesenta,
        COUNT("pk_idUbication") FILTER (WHERE "cl_jobRelation" = '80%') as ochenta,
        COUNT("pk_idUbication") FILTER (WHERE "cl_jobRelation" = '100%') as cien
        FROM tb_ubication as ubication
        WHERE "cl_lic"=${lic}`
        resolve(result);
      }catch(e){
        console.log(e);
        reject(e)
      }
    }
  });
}

exports.getTotalTb_ubication = async (lic) => {
  return new Promise(async(resolve, reject) => {
      if(lic==""){
        try{
          let result = await db.pgClient`
          SELECT 
          COUNT("pk_idUbication") total
          FROM tb_ubication as ubication
          `
          resolve(result);
        }catch(e){
            console.log(e);
            reject(e)
        }
      }else{
        try{
          let result = await db.pgClient`
          SELECT 
          COUNT("pk_idUbication") total
          FROM tb_ubication as ubication
          WHERE "cl_lic"=${lic}
          `
          resolve(result);
        }catch(e){
            console.log(e);
            reject(e)
        }
      }
  });
};

/**
 * DESEMPEÑO PROFESIONAL (Coherencia entre la formación y el tipo de empleo)... 
*/

exports.getEfficiencyPoints = async (lic) => {
  return new Promise(async(resolve, reject) => {
    if(lic==""){
      try{
        const result = await db.pgClient`
        SELECT COUNT("pk_idOther") FILTER (WHERE "cl_effectiveJob" = 'Muy eficiente') as muyeficiente,
        COUNT("pk_idOther") FILTER (WHERE "cl_effectiveJob" = 'Eficiente') as eficiente,
        COUNT("pk_idOther") FILTER (WHERE "cl_effectiveJob" = 'Poco eficiente') as pocoeficiente,
        COUNT("pk_idOther") FILTER (WHERE "cl_effectiveJob" = 'Deficiente') as deficiente
        FROM tb_otherinfo as other`
        resolve(result);
      }catch(e){
        console.log(e);
        reject(e)
      }
    }else{
      try{
        const result = await db.pgClient`
        SELECT COUNT("pk_idOther") FILTER (WHERE "cl_effectiveJob" = 'Muy eficiente') as muyeficiente,
        COUNT("pk_idOther") FILTER (WHERE "cl_effectiveJob" = 'Eficiente') as eficiente,
        COUNT("pk_idOther") FILTER (WHERE "cl_effectiveJob" = 'Poco eficiente') as pocoeficiente,
        COUNT("pk_idOther") FILTER (WHERE "cl_effectiveJob" = 'Deficiente') as deficiente
        FROM tb_otherinfo as other
        WHERE "cl_lic"=${lic}`
        resolve(result);
      }catch(e){
        console.log(e);
        reject(e)
      }
    }
  });
}

exports.getJobAccademicPoints = async (option) => {
  return new Promise(async(resolve, reject) => {
    try{
      const result = await db.pgClient`
      SELECT COUNT("pk_idOther") FILTER (WHERE "cl_AccademicJob" = 'Excelente') as excelente,
      COUNT("pk_idOther") FILTER (WHERE "cl_AccademicJob" = 'Bueno') as bueno,
      COUNT("pk_idOther") FILTER (WHERE "cl_AccademicJob" = 'Regular') as regular,
      COUNT("pk_idOther") FILTER (WHERE "cl_AccademicJob" = 'Pésimo') as pesimo
      FROM tb_otherinfo as other`
      resolve(result);
    }catch(e){
      console.log(e);
      reject(e)
    }
  });
}

exports.getResidencesUtility = async (lic) => {
  return new Promise(async(resolve, reject) => {
    if(lic==""){
      try{
        const result = await db.pgClient`
        SELECT COUNT("pk_idOther") FILTER (WHERE "cl_residencesUtility" = 'Excelente') as excelente,
        COUNT("pk_idOther") FILTER (WHERE "cl_residencesUtility" = 'Bueno') as bueno,
        COUNT("pk_idOther") FILTER (WHERE "cl_residencesUtility" = 'Regular') as regular,
        COUNT("pk_idOther") FILTER (WHERE "cl_residencesUtility" = 'Pésimo') as pesimo
        FROM tb_otherinfo as other`
        resolve(result);
      }catch(e){
        console.log(e);
        reject(e)
      }
    }else{
      try{
        const result = await db.pgClient`
        SELECT COUNT("pk_idOther") FILTER (WHERE "cl_residencesUtility" = 'Excelente') as excelente,
        COUNT("pk_idOther") FILTER (WHERE "cl_residencesUtility" = 'Bueno') as bueno,
        COUNT("pk_idOther") FILTER (WHERE "cl_residencesUtility" = 'Regular') as regular,
        COUNT("pk_idOther") FILTER (WHERE "cl_residencesUtility" = 'Pésimo') as pesimo
        FROM tb_otherinfo as other
        WHERE "cl_lic"=${lic}`
        resolve(result);
      }catch(e){
        console.log(e);
        reject(e)
      }
    }
  });
}

exports.getTotalTb_otherinfo = async (lic) => {
  return new Promise(async(resolve, reject) => {
    if(lic==""){
      try{
        const result = await db.pgClient`
        SELECT 
        COUNT("pk_idOther") total
        FROM tb_otherinfo as other
        `
        resolve(result);
      }catch(e){
          console.log(e);
          reject(e)
      }    
    }else{
      try{
        const result = await db.pgClient`
        SELECT 
        COUNT("pk_idOther") total
        FROM tb_otherinfo as other
        WHERE "cl_lic"=${lic}
        `
        resolve(result);
      }catch(e){
          console.log(e);
          reject(e)
      }    
    }
  });
};

/**
 * EXPECTATIVAS DE DESARROLLO, SUPERACIÓN PROFESIONAL Y DE ACTUALIZACIÓN...
*/

exports.getTitulationPoints = async (lic) => {
  return new Promise(async(resolve, reject) => {
    if(lic==""){
      try{
        const result = await db.pgClient`
        SELECT COUNT("pk_invitedId") FILTER (WHERE "cl_titulate" = 'si') as si,
        COUNT("pk_invitedId") FILTER (WHERE "cl_titulate" = 'no') as no
        FROM tb_invited as invited`
        resolve(result);
      }catch(e){
        console.log(e);
        reject(e)
      }
    }else{
      try{
        const result = await db.pgClient`
        SELECT COUNT("pk_invitedId") FILTER (WHERE "cl_titulate" = 'si') as si,
        COUNT("pk_invitedId") FILTER (WHERE "cl_titulate" = 'no') as no
        FROM tb_invited as invited
        WHERE "cl_especiality"=${lic}`
        resolve(result);
      }catch(e){
        console.log(e);
        reject(e)
      }
    }
  });
}

exports.getTotalTb_invited = async (lic) => {
  return new Promise(async(resolve, reject) => {
    if(lic==""){
      try{
        let result = await db.pgClient`
        SELECT 
        COUNT("pk_invitedId") total
        FROM tb_invited as invited
        `
        resolve(result);
      }catch(e){
          console.log(e);
          reject(e)
      }
    }else{
      try{
        let result = await db.pgClient`
        SELECT 
        COUNT("pk_invitedId") total
        FROM tb_invited as invited
        WHERE "cl_especiality"=${lic}
        `
        resolve(result);
      }catch(e){
          console.log(e);
          reject(e)
      }
    }
  });
};
