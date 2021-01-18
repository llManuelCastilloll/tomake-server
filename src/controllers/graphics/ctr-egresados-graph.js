const express = require('express');
const apiRoute = express.Router();
const mdGraphEgresados = require('../../models/graphics/md-egresados-graph');

const percentage = ( value, total ) => {
    let result  = (parseInt(value) * 100) / total;
    return result.toFixed(2)
}

/**
 * PERTINENCIA Y DISPONIBILIDAD DE MEDIOS Y RECURSOS PARA EL APRENDIZAJE...
*/

apiRoute.get('/pertinecyGraphs', async (req, res)=> {
    const { option, lic } = req.query;
    /**
     * Posibles ociones:
     * -teacherQuality: Calidad de los docentes.
     * -studyPlan: Plan de Estudios.
     * -devInvestigation: Oportunidad de participar en proyectos de investigación y desarrollo.
     * -teachLearn: proceso de enseñanza-aprendizaje.
     * -englishKnowledge: Conocimiento de inglés.
     * -infrastructure: Satisfacción con infraestructura.
     * -profesionalResidences: Experiencia obtenida en residencias profesionales.
    */
    try{
        const points = await mdGraphEgresados.getTeacherPoints(option, lic);
        const total = await mdGraphEgresados.getTotalQuaity(option, lic);
        if(total && (total[0].total == 0)){
            let data = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
            let labels = ["10%", "20%", "30%", "40%", "50%", "60%", "70%", "80%", "90%", "100%"]
            res.status(200).send([data, labels]);
        }else{
            if(option=="englishKnowledge"){
                const tot = parseInt(total[0].total);
                let data = []
                let labels=[]
                let diez = percentage(points[0].diez, tot);
                let veinte = percentage(points[0].veinte, tot);
                let treinta = percentage(points[0].treinta, tot);
                let cuarenta = percentage(points[0].cuarenta, tot);
                let cincuenta = percentage(points[0].cincuenta, tot);
                let sesenta = percentage(points[0].sesenta, tot);
                let setenta = percentage(points[0].setenta, tot);
                let ochenta = percentage(points[0].ochenta, tot);                
                let noventa = percentage(points[0].noventa, tot);
                let cien = percentage(points[0].cien, tot);
                data.push(diez, veinte, treinta, cuarenta, cincuenta, sesenta, setenta, ochenta, noventa, cien);
                labels.push("10%", "20%", "30%", "40%", "50%", "60%", "70%", "80%", "90%", "100%");
                res.status(200).send([data, labels]);
            }else{
                const tot = parseInt(total[0].total);
                let data = []
                let labels=[]
                let mbuenaPercentage = percentage(points[0].muybuena, tot);
                let buenaPercentage = percentage(points[0].buena, tot);
                let regular = percentage(points[0].regular, tot);
                let malaPercentage = percentage(points[0].mala, tot);
                let mmalaPercentage = percentage(points[0].muymala, tot);
                data.push(mbuenaPercentage, buenaPercentage, regular, malaPercentage, mmalaPercentage)
                labels.push("Muy buena", "Buena", "Regular", "Mala", "Muy mala")
                res.status(200).send([data, labels]);
            }
        }
        
    }catch(e){
        console.log(e);
        res.status(500).send({
            message: "Internal server error",
            reason: e.message
        })
    }
});

/**
 * UBICACIÓN LABORAL DE LOS EGRESADOS...
*/

apiRoute.get('/firtJobTimeGraphs', async (req, res)=> {
    const { lic } = req.query;
    /**
     * Comentarys...
    */
    try{
        const points = await mdGraphEgresados.getfirstJobPoints(lic);
        const total = await mdGraphEgresados.getTotalTb_ubication(lic);
        if(total && (total[0].total == 0)){
            let data = [];
            let labels = [];
            data.push(0, 0, 0, 0 );
            labels.push("Antes de Egresar", "Menos de 6 meses", "Mas de 6 mese a un año", "Mas de un año")
            res.status(200).send([data, labels]);
        }else{
            const tot = parseInt(total[0].total);
            let data = [];
            let labels = [];
            let antesEgresar = percentage(points[0].antesegresar, tot);
            let menos6Meses = percentage(points[0].menos6meses, tot);
            let seisAño = percentage(points[0].seisaño, tot);
            let masAño = percentage(points[0].masaño, tot);
            data.push(antesEgresar, menos6Meses, seisAño, masAño );
            labels.push("Antes de Egresar", "Menos de 6 meses", "Mas de 6 mese a un año", "Mas de un año")
            res.status(200).send([data, labels]);
        } 
    }catch(e){
        console.log(e);
        res.status(500).send({
            message: "Internal server error",
            reason: e.message
        })
    }
});

apiRoute.get('/laboralUbication', async (req, res)=> {
    const { lic } = req.query;
    /**
     * Comentarys...
    */
    try{
        const points = await mdGraphEgresados.getLaboralPoints(lic);
        const total = await mdGraphEgresados.getTotalTb_ubication(lic);
        if(total && (total[0].total == 0)){
            let data = [];
            let labels = [];
            data.push(0, 0, 0, 0 );
            labels.push("Bolsa del plantel", "Residencias profesionales", "Medio masivo de comunicación", "Otro");
            res.status(200).send([data, labels]);
        }else{
            const tot = parseInt(total[0].total);
            let data = [];
            let labels=[];
            let plantel = percentage(points[0].plantel, tot);
            let resprofesional = percentage(points[0].resprofesional, tot);
            let mediocomunicacion = percentage(points[0].mediocomunicacion, tot);
            let otro = percentage(points[0].otro, tot);
            data.push(plantel, resprofesional, mediocomunicacion, otro );
            labels.push("Bolsa del plantel", "Residencias profesionales", "Medio masivo de comunicación", "Otro")

            res.status(200).send([data, labels]);
        }
        
    }catch(e){
        console.log(e);
        res.status(500).send({
            message: "Internal server error",
            reason: e.message
        })
    }
});

apiRoute.get('/isworking', async (req, res)=> {
    const { lic } = req.query;
    /**
     * Comentarys...
    */
    try{
        const points = await mdGraphEgresados.getWorkInfoPoint(lic);
        const total = await mdGraphEgresados.getTotalTb_ubication(lic);
        if(total && (total[0].total == 0)){
            let data = [];
            let labels = [];
            data.push(0, 0, 0, 0);
            labels.push("Trabaja", "Estudia", "Trabaja y estudia", "Ni trabaja ni estudia")
            res.status(200).send([data, labels]);
        }else{
            const tot = parseInt(total[0].total);
            let data = [];
            let labels = [];
            let trabaja = percentage(points[0].trabaja, tot);
            let estudia = percentage(points[0].estudia, tot);
            let trabajaestudia = percentage(points[0].trabajaestudia, tot);
            let trabajaniestudia = percentage(points[0].trabajaniestudia, tot);
            data.push(trabaja,  estudia, trabajaestudia, trabajaniestudia );
            labels.push("Trabaja", "Estudia", "Trabaja y estudia", "Ni trabaja ni estudia")
            
            res.status(200).send([data, labels]);
        }
        
    }catch(e){
        console.log(e);
        res.status(500).send({
            message: "Internal server error",
            reason: e.message
        })
    }
});

apiRoute.get('/levelJerarqui', async (req, res)=> {
    const { lic } = req.query;
    /**
     * Comentarys...
    */
    try{
        const points = await mdGraphEgresados.getJerarquiLevelPoints(lic);
        const total = await mdGraphEgresados.getTotalTb_ubication(lic);
        if(total && (total[0].total == 0)){
            let data = [];
            let labels = [];
            data.push(0, 0, 0, 0, 0, 0);
            labels.push("Técnico", "Supervisor", "Jefe de área", "Funcionario", "Directivo", "Empresario");
            res.status(200).send([data, labels]);
        }else{
            const tot = parseInt(total[0].total);
            let data = [];
            let labels = [];
            let tecnico = percentage(points[0].tecnico, tot);
            let supervisor = percentage(points[0].supervisor, tot);
            let jefearea = percentage(points[0].jefearea, tot);
            let funcionario = percentage(points[0].funcionario, tot);
            let directivo = percentage(points[0].directivo, tot);
            let empresario = percentage(points[0].empresario, tot);
            data.push(tecnico, supervisor, jefearea, funcionario, directivo, empresario);
            labels.push("Técnico", "Supervisor", "Jefe de área", "Funcionario", "Directivo", "Empresario");            
            res.status(200).send([data, labels]);
        }
        
    }catch(e){
        console.log(e);
        res.status(500).send({
            message: "Internal server error",
            reason: e.message
        })
    }
});

apiRoute.get('/enterpriseSize', async (req, res)=> {
    const { lic } = req.query;
    /**
     * Comentarys...
    */
    try{
        const points = await mdGraphEgresados.getEnterpriseSizePoints(lic);
        const total = await mdGraphEgresados.getTotalTb_ubication(lic);
        if(total && (total[0].total == 0)){
            let data = [];
            let labels = [];
            data.push(0, 0, 0, 0);
            labels.push("Microempresas", "Pequeña", "Mediana", "Grande");
            res.status(200).send([data, labels]);
        }else{
            const tot = parseInt(total[0].total);
            let data = [];
            let labels = [];
            let microempresa = percentage(points[0].microempresa, tot);
            let pequeña = percentage(points[0].pequeña, tot);
            let mediana = percentage(points[0].mediana, tot);
            let grande = percentage(points[0].grande, tot);
            data.push(microempresa, pequeña, mediana, grande );
            labels.push("Microempresas", "Pequeña", "Mediana", "Grande");
            
            res.status(200).send([data, labels]);
        }
        
    }catch(e){
        console.log(e);
        res.status(500).send({
            message: "Internal server error",
            reason: e.message
        })
    }
});

/**
 * DESEMPEÑO PROFESIONAL (Coherencia entre la formación y el tipo de empleo)...
*/

apiRoute.get('/efficiency', async (req, res)=> {
    const { lic } = req.query;
    /**
     * Comentarys...
    */
    try{
        const points = await mdGraphEgresados.getEfficiencyPoints(lic);
        const total = await mdGraphEgresados.getTotalTb_otherinfo(lic);
        if(total && (total[0].total == 0)){
            let data = [];
            let labels = [];
            data.push(0, 0, 0, 0);
            labels.push("Muy eficiente", "Eficiente", "Poco eficiente", "Deficiente");
            res.status(200).send([data, labels]);
        }else{
            const tot = parseInt(total[0].total);
            let data = [];
            let labels = [];
            let muyeficiente = percentage(points[0].muyeficiente, tot);
            let eficiente = percentage(points[0].eficiente, tot);
            let pocoeficiente = percentage(points[0].pocoeficiente, tot);
            let deficiente = percentage(points[0].deficiente, tot);
            data.push(muyeficiente, eficiente, pocoeficiente, deficiente);
            labels.push("Muy eficiente", "Eficiente", "Poco eficiente", "Deficiente");            
            res.status(200).send([data, labels]);
        }
        
    }catch(e){
        console.log(e);
        res.status(500).send({
            message: "Internal server error",
            reason: e.message
        })
    }
});

apiRoute.get('/workRelation', async (req, res)=> {
    const { lic } = req.query;
    /**
     * Comentarys...
    */
    try{
        const points = await mdGraphEgresados.getRelationWork(lic);
        const total = await mdGraphEgresados.getTotalTb_ubication(lic);
        if(total && (total[0].total == 0)){
            let data = [];
            let labels = [];
            data.push(0, 0, 0, 0, 0, 0);
            labels.push("relación:0%", "relación:20%", "relación:40%", "relación:60%", "relación:80%", "relación:100%");
            res.status(200).send([data,labels]);
        }else{
            const tot = parseInt(total[0].total);
            let data = [];
            let labels = [];
            let cero = percentage(points[0].cero, tot);
            let veinte = percentage(points[0].veinte, tot);
            let cuarenta = percentage(points[0].cuarenta, tot);
            let sesenta = percentage(points[0].sesenta, tot);            
            let ochenta = percentage(points[0].ochenta, tot);
            let cien = percentage(points[0].cien, tot);
            data.push(cero, veinte, cuarenta, sesenta, ochenta, cien);
            labels.push("relación:0%", "relación:20%", "relación:40%", "relación:60%", "relación:80%", "relación:100%");
            res.status(200).send([data, labels]);
        }
        
    }catch(e){
        console.log(e);
        res.status(500).send({
            message: "Internal server error",
            reason: e.message
        })
    }
});

apiRoute.get('/residencesUtility', async (req, res)=> {
    const { lic } = req.query;
    /**
     * Comentarys...
    */
    try{
        const points = await mdGraphEgresados.getResidencesUtility(lic);
        const total = await mdGraphEgresados.getTotalTb_otherinfo(lic);
        if(total && (total[0].total == 0)){
            let data = [];
            let labels = [];
            data.push(0, 0, 0, 0);
            labels.push("Excelente", "Bueno", "Regular", "Pésimo");
            res.status(200).send([data, labels]);
        }else{
            const tot = parseInt(total[0].total);
            let data = [];
            let labels = [];
            let excelente = percentage(points[0].excelente, tot);
            let bueno = percentage(points[0].bueno, tot);
            let regular = percentage(points[0].regular, tot);
            let pesimo = percentage(points[0].pesimo, tot);  
            data.push(excelente, bueno, regular, pesimo);
            labels.push("Excelente", "Bueno", "Regular", "Pésimo");

            res.status(200).send([data, labels]);
        }
        
    }catch(e){
        console.log(e);
        res.status(500).send({
            message: "Internal server error",
            reason: e.message
        })
    }
});

/**
 * EXPECTATIVAS DE DESARROLLO, SUPERACIÓN PROFESIONAL Y DE ACTUALIZACIÓN ...
*/

apiRoute.get('/titulation', async (req, res)=> {
    const { lic } = req.query;
    /**
     * Comentarys...
    */
    console.log("pp", req.query);
    try{
        const points = await mdGraphEgresados.getTitulationPoints(lic);
        const total = await mdGraphEgresados.getTotalTb_invited(lic);
        if(total && (total[0].total == 0)){
            let data = [];
            let labels = [];
            data.push(0, 0);
            labels.push("Si", "No");
            res.status(200).send([data, labels]);
        }else{
            const tot = parseInt(total[0].total);
            let data = [];
            let labels = [];
            let si = percentage(points[0].si, tot);
            let no = percentage(points[0].no, tot);
            data.push(si, no);
            labels.push("Si", "No");

            res.status(200).send([data, labels]);
        }
        
    }catch(e){
        console.log(e);
        res.status(500).send({
            message: "Internal server error",
            reason: e.message
        })
    }
});

module.exports = apiRoute;