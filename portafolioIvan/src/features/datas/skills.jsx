// importacion de librerias img
import { IoLogoJavascript } from 'react-icons/io5';
import { FaReact, FaGithub, FaHtml5, FaPython } from 'react-icons/fa';
import { 
  SiPostgresql, 
  SiCsswizardry,
  SiMicrosoftsqlserver,
  SiAngularjs,
  SiRedux,
  SiTypescript,
  SiGooglecloud,
  SiFastapi
} from 'react-icons/si';
import './img.css';

export const initialState = [
  { 
    "name": "React", 
    "descripcion": "Conocimientos sobre el uso, creación e implementación de la librería React JS para páginas web estáticas y dinámicas, así como funciones props y componentes (Este portafolio fue realizado con ReactJS)", 
    "icono": <FaReact className="iconsSkills" />, 
    "tipo": "Librería" 
  },

  { 
    "name": "Typescript", 
    "descripcion": "Conocimientos sobre el lenguaje, tipado estricto y buenas prácticas en proyectos a escala", 
    "icono": <SiTypescript className="iconsSkills" />, 
    "tipo": "Lenguaje de programación" 
  },

  { 
    "name": "Javascript", 
    "descripcion": "Amplia experiencia en el lenguaje base para desarrollo frontend y backend", 
    "icono": <IoLogoJavascript className="iconsSkills" />, 
    "tipo": "Lenguaje de programación" 
  },

  { 
    "name": "Python", 
    "descripcion": "Experiencia en desarrollo backend y scripting con Python, incluyendo integración con frameworks modernos", 
    "icono": <FaPython className="iconsSkills" />, 
    "tipo": "Lenguaje de programación" 
  },

  { 
    "name": "FastAPI", 
    "descripcion": "Desarrollo de APIs modernas, rápidas y seguras usando FastAPI, integradas con frontend y bases de datos", 
    "icono": <SiFastapi className="iconsSkills" />, 
    "tipo": "Framework Backend" 
  },

  { 
    "name": "Google Cloud", 
    "descripcion": "Experiencia en despliegue y gestión de aplicaciones en la nube usando Google Cloud Run, Firebase Hosting y servicios asociados", 
    "icono": <SiGooglecloud className="iconsSkills" />, 
    "tipo": "Cloud Platform" 
  },

  { 
    "name": "Redux Toolkit", 
    "descripcion": "Uso de la librería Redux Toolkit para control eficiente de estados en aplicaciones grandes", 
    "icono": <SiRedux className="iconsSkills" />, 
    "tipo": "Librería" 
  },

  { 
    "name": "Angular", 
    "descripcion": "Experiencia y uso del Framework Angular en desarrollo frontend", 
    "icono": <SiAngularjs className="iconsSkills" />, 
    "tipo": "Framework" 
  },

  { 
    "name": "PostgreSQL", 
    "descripcion": "Experiencia y conocimientos en el uso de PostgreSQL como base de datos relacional", 
    "icono": <SiPostgresql className="iconsSkills" />, 
    "tipo": "Base de Datos" 
  },

  { 
    "name": "Microsoft SQL Server", 
    "descripcion": "Experiencia y uso en Microsoft SQL Server para desarrollo empresarial", 
    "icono": <SiMicrosoftsqlserver className="iconsSkills" />, 
    "tipo": "Base de Datos" 
  },

  { 
    "name": "GitHub", 
    "descripcion": "Experiencia y uso en la plataforma GitHub para control de versiones y colaboración en equipo", 
    "icono": <FaGithub className="iconsSkills" />, 
    "tipo": "Control de versiones" 
  },

  { 
    "name": "HTML", 
    "descripcion": "Experiencia y uso en HTML", 
    "icono": <FaHtml5 className="iconsSkills" />, 
    "tipo": "Lenguaje de marcado" 
  },

  { 
    "name": "CSS", 
    "descripcion": "Experiencia y uso en CSS para diseño responsivo y estilos personalizados", 
    "icono": <SiCsswizardry className="iconsSkills" />, 
    "tipo": "Lenguaje de diseño" 
  },
];
