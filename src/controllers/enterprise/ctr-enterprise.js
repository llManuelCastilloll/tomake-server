const express = require('express');
const apiRoute = express.Router()
const mdEnterprise = require('../../models/enterprise/md-enterprise')

apiRoute.post('/enterpriseInfo', async (req, res)=>{
    const { enterpriseName, enterpriseAddress, city, municipality, state, phone, email, enterpriseType, size, enterpriseActivity, } = req.body;
    if(enterpriseName){
        try{
            const id = await mdEnterprise.getMaxEnterprise();
            const data ={
                pk_idEnterprise: id[0].id == null ? 0 : parseInt(id[0].id)+1,
                cl_enterpriseName: enterpriseName,
                cl_enterpriseAddress: enterpriseAddress,
                cl_city: city,
                cl_municipality: municipality,
                cl_state: state,
                cl_phone: parseInt(phone),
                cl_email: email,
                cl_enterpriseType: enterpriseType,
                cl_size: size,
                cl_enterpriseActivity: enterpriseActivity,
            }
            const result = mdEnterprise.addEnterprise(data);
            console.log(result)
            res.status(200).send("New Enterprise added");
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
            reason: `The request need a enterprise name.`
        })
    }
});

apiRoute.post('/laboralUbication', async (req, res) =>{
    const { professionalNumber, professionalCongruency, enterpriseRequiriments, popularCareers } = req.body;
    try{
        const id =  await mdEnterprise.getMaxUbication();
        const data ={
            pk_idLaboralUbication: id[0].id == null ? 0 : parseInt(id[0].id)+1,
            cl_professionalNumber: professionalNumber,
            cl_professionalCongruency: professionalCongruency,
            cl_enterpriseRequiriments: enterpriseRequiriments,
            cl_popularCareers: popularCareers
        }
        const result = mdEnterprise.addLaboralUbication(data);
        console.log(result)
        res.status(200).send("New laboral ubication added");
    }catch(e){
        console.log(e)
        res.status(500).send({
            message: 'Internal server error',
            reason: e.message
        })
    }
});

apiRoute.post('/laboralSkills', async (req, res) => {
    const { option_a, option_b, option_c, option_d, option_e, option_f, option_g, option_h, option_i, option_j, option_k,
            option_l, option_m, option_n, option_o, option_p, option_q, worker_quality, sugerencys, comentarys } = req.body;
    try{
        const id = await mdEnterprise.getMaxSkills();
        const data ={
            pk_idSkills: id[0].id == null ? 0 : parseInt(id[0].id),
            cl_option_a: option_a,
            cl_option_b: option_b,
            cl_option_c: option_c,
            cl_option_d: option_d,
            cl_option_e: option_e,
            cl_option_f: option_f,
            cl_option_g: option_g,
            cl_option_h: option_h,
            cl_option_i: option_i,
            cl_option_j: option_j,
            cl_option_k: option_k,
            cl_option_l: option_l,
            cl_option_m: option_m,
            cl_option_n: option_n,
            cl_option_o: option_o,
            cl_option_p: option_p,
            cl_option_q: option_q,
            cl_worker_quality: worker_quality,
            cl_sugerencys: sugerencys,
            cl_comentarys: comentarys
        }
        const result = mdEnterprise.addLaboralSkills(data);
        console.log("result=>", result)
        res.status(200).send("Laboral skill added correctly");
    }catch(e){
        console.log(e)
        res.status(500).send({
            message: 'Internal server error',
            reason: e.message
        })
    }
});

module.exports = apiRoute;