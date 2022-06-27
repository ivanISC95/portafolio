import { Card, CardGroup } from "react-bootstrap";
import { IoLogoJavascript } from 'react-icons/io5';
import { FaPhp, FaPython, FaReact,FaUbuntu } from 'react-icons/fa';
export default function Skills() {
    const data = [{ name: "Javascript", descripcion: "Conocimientos sobre el lenguaje, conceptos basicos , ciclos y condicionales", icono: <IoLogoJavascript className="iconsSkills" /> },
    { name: "PHP", descripcion: "Conocimientos sobre el lenguaje, conceptos basicos y su uso en servidores para conexiones con bases de datos MySQL y PostgreSQL", icono: <FaPhp className="iconsSkills" /> },
    { name: "Python", descripcion: "Conocimientos sobre el lenguaje, conceptos basicos , ciclos y condicionales, ademas del uso de frameworks como Sanic para su uso en el backend", icono: <FaPython className="iconsSkills" /> },
    { name: "React JS", descripcion: "Conocimientos sobre el uso,creación y impliementación de la libreria React JS para sitios web estaticos y dinamicos", icono: <FaReact className="iconsSkills" /> },
    { name: "Ubuntu", descripcion: "Experiencia en el uso del SO Ubuntu, conocimientos sobre comandos basicos de terminal", icono: <FaUbuntu className="iconsSkills" /> }];
    console.log(data);
    return (
        <div className="skills">
            <div>
                <h1 className='formacion'>Skillś</h1>
            </div>
            <CardGroup>
                {
                    data.map(
                        data => (
                            <Card>
                                <div>
                                    {data.icono}
                                </div>
                                <Card.Body>
                                    <Card.Title>{data.name}</Card.Title>
                                    <Card.Text>
                                        {data.descripcion}
                                    </Card.Text>
                                </Card.Body>
                                <Card.Footer>
                                    <small className="text-muted">Skillś</small>
                                </Card.Footer>
                            </Card>
                        )
                    )
                }
            </CardGroup>
        </div>

    )
}