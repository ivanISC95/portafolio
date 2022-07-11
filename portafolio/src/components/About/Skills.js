import { Card,Row } from "react-bootstrap";
import { IoLogoJavascript } from 'react-icons/io5';
import { FaPhp, FaPython, FaReact,FaUbuntu,FaGithub,FaHtml5 } from 'react-icons/fa';
import {SiMysql,SiPostgresql,SiCsswizardry} from 'react-icons/si';
export default function Skills() {
    const data = [{ name: "Javascript", descripcion: "Conocimientos sobre el lenguaje, conceptos basicos , ciclos y condicionales", icono: <IoLogoJavascript className="iconsSkills" />,tipo : "lenguaje de programacion" },
    { name: "PHP", descripcion: "Conocimientos sobre el lenguaje, conceptos basicos y su uso en servidores para conexiones con bases de datos MySQL y PostgreSQL", icono: <FaPhp className="iconsSkills" /> ,tipo : "lenguaje de programacion"},
    { name: "Python", descripcion: "Conocimientos sobre el lenguaje, conceptos basicos , ciclos y condicionales, ademas del uso de frameworks como Sanic para su uso en el backend", icono: <FaPython className="iconsSkills" /> ,tipo : "lenguaje de programacion"},
    { name: "React JS", descripcion: "Conocimientos sobre el uso,creación y implementación de la libreria React JS para páginas web estáticas y dinamicas,así como funciones props y componentes(Este portafolio fue realizado con ReactJS)", icono: <FaReact className="iconsSkills" /> ,tipo : "Libreria"},
    { name: "Ubuntu", descripcion: "Experiencia en el uso del SO Ubuntu, conocimientos sobre comandos básicos de terminal", icono: <FaUbuntu className="iconsSkills" /> ,tipo : "Sistema Operativo"},
    { name: "MySQL", descripcion: "Experiencia y conocimientos en el uso de MySQL", icono: <SiMysql className="iconsSkills" /> ,tipo : "Base de Datos"},
    { name: "PostgreSQL", descripcion: "Experiencia y conocimientos en el uso de PostgreSQL", icono: <SiPostgresql className="iconsSkills" /> ,tipo : "Base de Datos"},
    { name: "GitHub", descripcion: "Experiencia y uso en la plataforma GitHub para control de versiones", icono: <FaGithub className="iconsSkills" /> ,tipo : "Control de versiones"},
    { name: "HTML", descripcion: "Experiencia y uso en HTML", icono: <FaHtml5 className="iconsSkills" /> ,tipo : "Lenguaje de marcado"},
    { name: "CSS", descripcion: "Experiencia y uso en CSS", icono: <SiCsswizardry className="iconsSkills" /> ,tipo : "Lenguaje de diseño"}];
    
    return (
        <div className="skills">
            <div>
                <h1 className='formacion'>Skillś</h1>
            </div>
            <Row xs={2} md={4} className="g-6">
                {
                    data.map(
                        data => (
                            <Card className="skills-card" key={data.name}>
                                <div >
                                    {data.icono}
                                </div>
                                <Card.Body>
                                    <Card.Title>{data.name}</Card.Title>
                                    <Card.Text>
                                        {data.descripcion}
                                    </Card.Text>
                                </Card.Body>
                                <Card.Footer>
                                    <small>Skill: {data.tipo}</small>
                                </Card.Footer>
                            </Card>
                        )
                    )
                }
            </Row>
        </div>

    )
}