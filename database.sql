create database ssee;


CREATE TABLE public.tb_users_sys
(
    "cl_createdAt" timestamp with time zone,
    "cl_updateAt" time with time zone,
    "cl_userEmail" character varying(100) COLLATE pg_catalog."default",
    "cl_userGender" "char",
    "cl_userName" character varying(100) COLLATE pg_catalog."default",
    "cl_userNickName" character varying(100) COLLATE pg_catalog."default",
    "cl_userPassword" character varying(100) COLLATE pg_catalog."default",
    "pk_userId" integer NOT NULL,
    CONSTRAINT tb_users_sys_pkey PRIMARY KEY ("pk_userId")
)

INSERT:
INSERT INTO tb_users_sys 
	VALUES ('2020-11-26 13:40:25-07', '2020-11-26 13:40:25-07', 'sarahi@mail.com', 'f', 'Sarahi Lopez', 'Sarah', '12345', 1);



CREATE TABLE public.tb_invited
(
    "pk_invitedId" integer NOT NULL,
    "cl_name" character varying(100) COLLATE pg_catalog."default",
    "cl_controlNumber" character varying(100) COLLATE pg_catalog."default",
    "cl_bornDate" character varying(100) COLLATE pg_catalog."default",
    "cl_gender" "char",
    "cl_curp" character varying(100) COLLATE pg_catalog."default",
    "cl_marital" character varying(100) COLLATE pg_catalog."default",
    "cl_address" character varying(300) COLLATE pg_catalog."default",
    "cl_city" character varying(100) COLLATE pg_catalog."default",
    "cl_municipality" character varying(100) COLLATE pg_catalog."default",
    "cl_state" character varying(100) COLLATE pg_catalog."default",
    "cl_phone" integer NOT NULL,
    "cl_email" character varying(100) COLLATE pg_catalog."default",
    "cl_personalphone" integer NOT NULL,
    "cl_especiality" character varying(100) COLLATE pg_catalog."default",
    "cl_exitDate" character varying(50) COLLATE pg_catalog."default",
    "cl_titulate" character varying(20) COLLATE pg_catalog."default",
    "cl_english" integer NOT NULL,
    "cl_otherLenguage" integer NOT NULL,
    "cl_createdAt" timestamp with time zone,
    "cl_updateAt" time with time zone
)

CREATE TABLE public.tb_relevance_availability
(
    "pk_idRevAva" integer NOT NULL,
    "cl_teacherQuality" character varying(100) COLLATE pg_catalog."default",
    "cl_plan" character varying(50) COLLATE pg_catalog."default",
    "cl_oportunity" character varying(50) COLLATE pg_catalog."default",
    "cl_emphasis" character varying(50) COLLATE pg_catalog."default",
    "cl_infrastructure" character varying(50) COLLATE pg_catalog."default",
    "cl_experience" character varying(50) COLLATE pg_catalog."default"
)

CREATE TABLE public.tb_ubication
(
    "pk_idUbication" integer NOT NULL,
    "cl_activity" character varying(50) COLLATE pg_catalog."default",
    "cl_specciality" character varying(100) COLLATE pg_catalog."default",
    "cl_institution" character varying(100) COLLATE pg_catalog."default",   
    "cl_FirstJobTime" character varying(100) COLLATE pg_catalog."default", 
    "cl_firtJobMedium" character varying(100) COLLATE pg_catalog."default",
    "cl_hiringRequiriment" character varying(100) COLLATE pg_catalog."default",
    "cl_jobLanguage" character varying(100) COLLATE pg_catalog."default",   
    "cl_utilityLanguage" character varying(100) COLLATE pg_catalog."default", 
    "cl_jobAntiguity" character varying(100) COLLATE pg_catalog."default",
    "cl_minimumSalary" character varying(100) COLLATE pg_catalog."default",
    "cl_jerarquiLevel" character varying(100) COLLATE pg_catalog."default",
    "cl_jobCondition" character varying(100) COLLATE pg_catalog."default",
    "cl_jobRelation" character varying(100) COLLATE pg_catalog."default",
    "cl_organism" character varying(100) COLLATE pg_catalog."default",
    "cl_turnEnterprise" character varying(100) COLLATE pg_catalog."default",
    "cl_socialReason" character varying(100) COLLATE pg_catalog."default",
    "cl_enterpriseAddress" character varying(100) COLLATE pg_catalog."default",
    "cl_cityEnterprise" character varying(100) COLLATE pg_catalog."default",
    "cl_municipalityEnterprise" character varying(100) COLLATE pg_catalog."default",
    "cl_stateEnterprise" character varying(100) COLLATE pg_catalog."default",
    "cl_phoneEnterprise" character varying(100) COLLATE pg_catalog."default",
    "cl_faxEnterprise" character varying(100) COLLATE pg_catalog."default",
    "cl_emailEnterprise" character varying(100) COLLATE pg_catalog."default",
    "cl_website" character varying(100) COLLATE pg_catalog."default",
    "cl_booss" character varying(100) COLLATE pg_catalog."default",
    "cl_sector" character varying(100) COLLATE pg_catalog."default",
    "cl_enterprisesize" character varying(100) COLLATE pg_catalog."default"
)

CREATE TABLE public.tb_otherInfo
(
    "pk_idOther" integer NOT NULL,
    "cl_effectiveJob" character varying(50) COLLATE pg_catalog."default",
    "cl_AccademicJob" character varying(50) COLLATE pg_catalog."default",
    "cl_residencesUtility" character varying(50) COLLATE pg_catalog."default",
    "cl_areaJob" character varying(50) COLLATE pg_catalog."default",
    "cl_titulation" character varying(50) COLLATE pg_catalog."default",
    "cl_laboralExperience" character varying(50) COLLATE pg_catalog."default",
    "cl_laboralCompetencies" character varying(50) COLLATE pg_catalog."default",
    "cl_schoolPrestigious" character varying(50) COLLATE pg_catalog."default",
    "cl_languageKnowledge" character varying(50) COLLATE pg_catalog."default",
    "cl_recommendations" character varying(50) COLLATE pg_catalog."default",
    "cl_personality" character varying(50) COLLATE pg_catalog."default",
    "cl_capacity" character varying(50) COLLATE pg_catalog."default",
    "cl_others" character varying(50) COLLATE pg_catalog."default",
    "cl_newKnowledge" character varying(50) COLLATE pg_catalog."default",
    "cl_postgraduate" character varying(50) COLLATE pg_catalog."default",
    "cl_socialOrganization" character varying(50) COLLATE pg_catalog."default",
    "cl_profesionalOrganism" character varying(50) COLLATE pg_catalog."default",
    "cl_alumnAssociaton" character varying(50) COLLATE pg_catalog."default",
    "cl_comments" character varying(200) COLLATE pg_catalog."default",
)

CREATE TABLE public.tb_enterprise_organism
(
    "pk_idEnterprise" integer NOT NULL,
    "cl_enterpriseName" character varying(100) COLLATE pg_catalog."default",
    "cl_enterpriseAddress" character varying(200) COLLATE pg_catalog."default",
    "cl_city" character varying(50) COLLATE pg_catalog."default",
    "cl_municipality" character varying(50) COLLATE pg_catalog."default",
    "cl_state" character varying(50) COLLATE pg_catalog."default",
    "cl_phone" integer NOT NULL,
    "cl_email" character varying(100) COLLATE,
    "cl_enterpriseType" character varying(50) COLLATE pg_catalog."default",
    "cl_size" character varying(50) COLLATE pg_catalog."default",
    "cl_enterpriseActivity" character varying(100) COLLATE pg_catalog."default",
)

CREATE TABLE public.tb_laboral_ubication
(
    "pk_idLaboralUbication" integer NOT NULL,
    "cl_professionalNumber" integer NOT NULL,
    "cl_professionalCongruency" integer NOT NULL,
    "cl_enterpriseRequiriments" character varying(100) COLLATE pg_catalog."default",
    "cl_popularCareers" character varying(150) COLLATE pg_catalog."catalog"
)

CREATE TABLE public.tb_laboral_skills
(
    "pk_idSkills" integer NOT NULL,
    "cl_option_a" character varying(100) COLLATE pg_catalog."default",
    "cl_option_b" character varying(100) COLLATE pg_catalog."default",
    "cl_option_c" character varying(100) COLLATE pg_catalog."default",
    "cl_option_d" character varying(100) COLLATE pg_catalog."default",
    "cl_option_e" character varying(100) COLLATE pg_catalog."default",
    "cl_option_f" character varying(100) COLLATE pg_catalog."default",
    "cl_option_g" character varying(100) COLLATE pg_catalog."default",
    "cl_option_h" character varying(100) COLLATE pg_catalog."default",
    "cl_option_i" character varying(100) COLLATE pg_catalog."default",
    "cl_option_j" character varying(100) COLLATE pg_catalog."default",
    "cl_option_k" character varying(100) COLLATE pg_catalog."default",
    "cl_option_l" character varying(100) COLLATE pg_catalog."default",
    "cl_option_m" character varying(100) COLLATE pg_catalog."default",
    "cl_option_n" character varying(100) COLLATE pg_catalog."default",
    "cl_option_o" character varying(100) COLLATE pg_catalog."default",
    "cl_option_p" character varying(100) COLLATE pg_catalog."default",
    "cl_option_q" character varying(100) COLLATE pg_catalog."default",
    "cl_worker_quality" character varying(100) COLLATE pg_catalog."default",
    "cl_sugerencys" character varying(500) COLLATE pg_catalog."default",
    "cl_comentarys" character varying(500) COLLATE pg_catalog."default"
)