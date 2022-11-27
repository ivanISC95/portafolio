import backEnd from '../../img/backEnd.jpg';
import frontEnd from '../../img/frontEnd.jpg';
import Red1 from '../../img/Red1.jpg';
import Red2 from '../../img/Red2.jpg';
import gitCertificado from '../../img/gitCertificado.jpg';
import { IoLogoJavascript } from 'react-icons/io5';
import { FaPhp, FaPython, FaReact, FaUbuntu, FaGithub, FaHtml5 } from 'react-icons/fa';
import { SiMysql, SiPostgresql, SiCsswizardry } from 'react-icons/si';

const works = [
    {"id": 1,"descripcion": "Prueba técnica la cual llevo como finalidad crear una aplicación web que muestre los personajes de la serie de “The Rick and Morty”. Para ello se utilizará un API en la cual se obtuvo toda la información sobre los personajes y la serie","tecnologia":"React.JS","URL":"https://ivanisc95.github.io/rick-and-morty-characters/"},
    {"id": 2,"descripcion": "Pagina de contacto para la empresa CPGE , especializada en consultoria y gestión en el estado de Queretaro","tecnologia":"React.JS","URL":"https://ivanisc95.github.io/cpge/"}
];
const courses = [
    {"id": 1,"img":backEnd,"titulo": "Desarrollador Back-end", "descripcion": "Curso de capacitación para Desarrollador Back-end , dicho curso consto de la arquitectura cliente-servidor, modelo vista controlador, diferencias entre web estática y dinámica"},
    { "id":2,"img": frontEnd, "titulo": "Desarrollador Front-end", "descripcion": "Curso de capacitación para Desarrollo Front-end , dicho curso consto de tipos de sitios web(dinámicos y estáticos),proceso de desarrollo , requerimientos y filtrado de estos, sintaxis básica de HTML, CSS y JAVASCRIPT" },
    { "id":3,"img": Red1, "titulo": "CCNAv7: Switching, Routing and Wireless Essentials", "descripcion": "Configurar las VLAN y el enrutamiento entre VLAN aplicando las mejores prácticas de seguridad Solucionar problemas de ruteo entre redes VLAN en dispositivos de capa 3. Configurar la redundancia en una red conmutada utilizando STP y EtherChannel" },
    { "id":4,"img": Red2, "titulo": "CCNAv7: Introducción a Redes", "descripcion": "Configurar los switch y dispositivos finales para proporcionar acceso a recursos de redes locales y remotos." },
    { "id":5,"img": gitCertificado, "titulo": "Git Para Todos", "descripcion": "Manejo de repositorios locales y remotos, así como de comandos para la gestión de repositorios" }
];
const skills = [
    { "name": "Javascript", "descripcion": "Conocimientos sobre el lenguaje, conceptos basicos , ciclos y condicionales", "icono": <IoLogoJavascript className="iconsSkills" />, "tipo": "lenguaje de programacion" },
    { "name": "PHP", "descripcion": "Conocimientos sobre el lenguaje, conceptos basicos y su uso en servidores para conexiones con bases de datos MySQL y PostgreSQL", "icono": <FaPhp className="iconsSkills" />, "tipo": "lenguaje de programacion" },
    { "name": "Python", "descripcion": "Conocimientos sobre el lenguaje, conceptos basicos , ciclos y condicionales, ademas del uso de frameworks como Sanic para su uso en el backend", "icono": <FaPython className="iconsSkills" />, "tipo": "lenguaje de programacion" },
    { "name": "React JS", "descripcion": "Conocimientos sobre el uso,creación y implementación de la libreria React JS para páginas web estáticas y dinamicas,así como funciones props y componentes(Este portafolio fue realizado con ReactJS)", "icono": <FaReact className="iconsSkills" />, "tipo": "Libreria" },
    { "name": "Ubuntu", "descripcion": "Experiencia en el uso del SO Ubuntu, conocimientos sobre comandos básicos de terminal", "icono": <FaUbuntu className="iconsSkills" />, "tipo": "Sistema Operativo" },
    { "name": "MySQL", "descripcion": "Experiencia y conocimientos en el uso de MySQL", "icono": <SiMysql className="iconsSkills" />, "tipo": "Base de Datos" },
    { "name": "PostgreSQL", "descripcion": "Experiencia y conocimientos en el uso de PostgreSQL", "icono": <SiPostgresql className="iconsSkills" />, "tipo": "Base de Datos" },
    { "name": "GitHub", "descripcion": "Experiencia y uso en la plataforma GitHub para control de versiones", "icono": <FaGithub className="iconsSkills" />, "tipo": "Control de versiones" },
    { "name": "HTML", "descripcion": "Experiencia y uso en HTML", "icono": <FaHtml5 className="iconsSkills" />, "tipo": "Lenguaje de marcado" },
    { "name": "CSS", "descripcion": "Experiencia y uso en CSS", "icono": <SiCsswizardry className="iconsSkills" />, "tipo": "Lenguaje de diseño" }
];
export {works,courses,skills};