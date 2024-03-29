import { createSlice } from "@reduxjs/toolkit";
// importacion de librerias img
import { IoLogoJavascript } from 'react-icons/io5';
import { FaPhp, FaPython, FaReact, FaUbuntu, FaGithub, FaHtml5,FaNodeJs } from 'react-icons/fa';
import { SiMysql, SiPostgresql, SiCsswizardry,SiMicrosoftsqlserver,SiAngularjs,SiRedux } from 'react-icons/si';


const initialState = [
    { "name": "Javascript", "descripcion": "Conocimientos sobre el lenguaje, conceptos basicos , ciclos y condicionales", "icono": <IoLogoJavascript className="iconsSkills" />, "tipo": "lenguaje de programacion" },
    { "name": "PHP", "descripcion": "Conocimientos sobre el lenguaje, conceptos basicos y su uso en servidores para conexiones con bases de datos MySQL y PostgreSQL", "icono": <FaPhp className="iconsSkills" />, "tipo": "lenguaje de programacion" },
    { "name": "Python", "descripcion": "Conocimientos sobre el lenguaje, conceptos basicos , ciclos y condicionales, ademas del uso de frameworks como Sanic para su uso en el backend", "icono": <FaPython className="iconsSkills" />, "tipo": "lenguaje de programacion" },
    { "name": "React JS", "descripcion": "Conocimientos sobre el uso,creación y implementación de la libreria React JS para páginas web estáticas y dinamicas,así como funciones props y componentes(Este portafolio fue realizado con ReactJS)", "icono": <FaReact className="iconsSkills" />, "tipo": "Libreria" },
    { "name": "Ubuntu", "descripcion": "Experiencia en el uso del SO Ubuntu, conocimientos sobre comandos básicos de terminal", "icono": <FaUbuntu className="iconsSkills" />, "tipo": "Sistema Operativo" },
    { "name": "MySQL", "descripcion": "Experiencia y conocimientos en el uso de MySQL", "icono": <SiMysql className="iconsSkills" />, "tipo": "Base de Datos" },
    { "name": "PostgreSQL", "descripcion": "Experiencia y conocimientos en el uso de PostgreSQL", "icono": <SiPostgresql className="iconsSkills" />, "tipo": "Base de Datos" },
    { "name": "GitHub", "descripcion": "Experiencia y uso en la plataforma GitHub para control de versiones", "icono": <FaGithub className="iconsSkills" />, "tipo": "Control de versiones" },
    { "name": "HTML", "descripcion": "Experiencia y uso en HTML", "icono": <FaHtml5 className="iconsSkills" />, "tipo": "Lenguaje de marcado" },
    { "name": "CSS", "descripcion": "Experiencia y uso en CSS", "icono": <SiCsswizardry className="iconsSkills" />, "tipo": "Lenguaje de diseño" },
    { "name": "Microsoft SQL Server", "descripcion": "Experiencia y uso en Microsoft SQL Server", "icono": <SiMicrosoftsqlserver className="iconsSkills" />, "tipo": "BDD" },
    { "name": "NodeJS", "descripcion": "Experiencia y uso en NodeJS , así como creación de API´s con Express", "icono": <FaNodeJs className="iconsSkills" />, "tipo": "Entorno de servidor" },
    { "name": "Angular", "descripcion": "Experiencia y uso del Framework Angular", "icono": <SiAngularjs className="iconsSkills" />, "tipo": "Framework" },
    { "name": "Redux Toolkit", "descripcion": "Uso de la libreria Redux Toolkit para control de estados", "icono": <SiRedux className="iconsSkills" />, "tipo": "Libreria" }
];

export const skills = createSlice({
    name:"skills",
    initialState : initialState,
    reducers: {}
});


export default skills.reducer;
