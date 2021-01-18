const express = require('express');
const apiRoute = express.Router();
const mdEgresados = require('../../models/egresados/md-egresados')

apiRoute.get('/', (req, res)=>{
    res.send('Egresados...');
})

apiRoute.post('/personalProfile', async (req, res)=>{
    const { name, controlNumber, bornDate, gender, curp, marital, address, city, municipality,
            state, phone, email, personalphone, especiality, exitDate, titulate, english, otherLenguage } = req.body;
    console.log("req=>", req.body)
    if(name && controlNumber){
        let id = await  mdEgresados.getMaxIdPersonal();
        try{
            const data ={
                pk_invitedId: id[0].id == null ? 0 : parseInt(id[0].id)+1,
                cl_name: name,
                cl_controlNumber: controlNumber,
                cl_bornDate: bornDate,
                cl_gender: gender,
                cl_curp: curp,
                cl_marital: marital,
                cl_address: address,
                cl_city: city,
                cl_municipality: municipality,
                cl_state: state,
                cl_phone: parseInt(phone),
                cl_email: email,
                cl_personalphone: personalphone,
                cl_especiality: especiality,
                cl_exitDate: exitDate,
                cl_titulate: titulate,
                cl_english: english,
                cl_otherLenguage: otherLenguage,
                cl_createdAt: '2020-11-26 13:40:25-07',
                cl_updateAt: '2020-11-26 13:40:25-07'
            }
            const result = await mdEgresados.addPersonalProfile(data);
            console.log(result)
            res.status(200).send("New personal profile added");
        }catch(e){
            console.log(e)
            res.status(500).send({
                message: 'Internal server error',
                reason: e.message
            })
        }
    }else{
        res.status(400).send({
            message:'Invalid request',
            reason: `The request needs a name & control number`
        })
    }
});

apiRoute.get('/personalProfiles', async (req, res) =>{
    try{
        const result = await mdEgresados.getAllPersonalProfile()
        res.status(200).send(result)
    }catch(e){
        console.log(e);
        res.status(500).send({
            message:"Internal server reason",
            reason:  e.message
        })
    }
})

apiRoute.post('/relevanceAvailability', async (req, res)=>{
    const { 
        teacherQuality, plan, oportunity, emphasis, infrastructure, experience, lic
     } = req.body;
        try{
            let id = await  mdEgresados.getMaxIdRelevance();
            const data ={
                pk_idRevAva: id[0].id == null ? 0 : parseInt(id[0].id)+1,
                cl_teacherQuality: teacherQuality, 
                cl_plan: plan, 
                cl_oportunity: oportunity, 
                cl_emphasis: emphasis, 
                cl_infrastructure: infrastructure, 
                cl_experience: experience,
                cl_lic: lic
            }
            const result = mdEgresados.addRelevanceAvailability(data);
            console.log(result)
            if(result.error){
                res.status(400).send({
                    message:"Invalid request",
                    reason:"Ocurrió un error al intentar guardar datos"
                })
            }
            res.status(200).send("Relevance and Availability added correctly");
        }catch(e){
            console.log(e)
            res.status(500).send({
                message: 'Internal server error',
                reason: e.message
            })
        }
});

apiRoute.post('/ubication', async (req, res)=>{
    const {  
        activity, specciality, institution, FirstJobTime, firtJobMedium, hiringRequiriment, jobLanguage,  utilityLanguage, 
        jobAntiguity, minimumSalary, jerarquiLevel, jobCondition, jobRelation, organism, turnEnterprise, socialReason,
        enterpriseAddress, cityEnterprise, municipalityEnterprise, stateEnterprise, phoneEnterprise, faxEnterprise,
        emailEnterprise, website, booss, sector, enterprisesize, talk, write, read, listen, firstJobYear, lic } = req.body;
        //console.log('req.body=>', req.body);
        try{
            let id = await  mdEgresados.getMaxIdUbication();
            console.log("id:",id);
            const data ={
                pk_idUbication: id[0].id == null ? 0 : parseInt(id[0].id)+1,
                cl_activity: activity,
                cl_specciality: specciality,
                cl_institution: institution,   
                cl_FirstJobTime: FirstJobTime, 
                cl_firtJobMedium: firtJobMedium,
                cl_hiringRequiriment: hiringRequiriment,
                cl_jobLanguage: jobLanguage,   
                cl_utilityLanguage: utilityLanguage, 
                cl_jobAntiguity: jobAntiguity,
                cl_minimumSalary: minimumSalary,
                cl_jerarquiLevel: jerarquiLevel,
                cl_jobCondition: jobCondition,
                cl_jobRelation: jobRelation,
                cl_organism: organism,
                cl_turnEnterprise: turnEnterprise,
                cl_socialReason: socialReason,
                cl_enterpriseAddress: enterpriseAddress,
                cl_cityEnterprise: cityEnterprise,
                cl_municipalityEnterprise: municipalityEnterprise,
                cl_stateEnterprise: stateEnterprise,
                cl_phoneEnterprise: parseInt(phoneEnterprise),
                cl_faxEnterprise: faxEnterprise,
                cl_emailEnterprise: emailEnterprise,
                cl_website: website,
                cl_booss: booss,
                cl_sector: sector,
                cl_enterprisesize: enterprisesize,
                cl_talk: parseInt(talk),
                cl_write: parseInt(write),
                cl_read: parseInt(read),
                cl_listen: parseInt(listen),
                cl_firstJobYear: parseInt(firstJobYear),
                cl_lic: lic
            }
            const result = mdEgresados.addUbications(data);
            console.log(result)
            res.status(200).send("Invited ubication added correctly");
        }catch(e){
            console.log(e)
            res.status(500).send({
                message: 'Internal server error',
                reason: e.message
            })
        }
});

apiRoute.post('/otherInfo', async (req, res)=>{
    const { 
        effectiveJob, AccademicJob, residencesUtility, areaJob, titulation, laboralExperience, laboralCompetencies,
        schoolPrestigious, languageKnowledge, recommendations, personality, capacity, others, newKnowledge, postgraduate,
        socialOrganization, profesionalOrganism, alumnAssociaton, comments, lic } = req.body;
        try{
            const id = await mdEgresados.getMaxIdOther();
            const data ={
                pk_idOther: id[0].id == null ? 0 : parseInt(id[0].id)+1,
                cl_effectiveJob: effectiveJob,
                cl_AccademicJob: AccademicJob,
                cl_residencesUtility: residencesUtility,
                cl_areaJob: parseInt(areaJob),
                cl_titulation: parseInt(titulation),
                cl_laboralExperience: parseInt(laboralExperience),
                cl_laboralCompetencies: parseInt(laboralCompetencies),
                cl_schoolPrestigious: parseInt(schoolPrestigious),
                cl_languageKnowledge: parseInt(languageKnowledge),
                cl_recommendations: parseInt(recommendations),
                cl_personality: parseInt(personality),
                cl_capacity: parseInt(capacity),
                cl_others: parseInt(others),
                cl_newKnowledge: newKnowledge,
                cl_postgraduate: postgraduate,
                cl_socialOrganization: socialOrganization,
                cl_profesionalOrganism: profesionalOrganism,
                cl_alumnAssociaton: alumnAssociaton,
                cl_comments: comments,
                cl_lic: lic
            }
            const result = mdEgresados.addOtherInfo(data);
            res.status(200).send("Other info added correctly");
        }catch(e){
            console.log(e)
            res.status(500).send({
                message: 'Internal server error',
                reason: e.message
            })
        }
});

module.exports = apiRoute;