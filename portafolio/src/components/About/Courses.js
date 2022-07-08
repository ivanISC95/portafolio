import {Carousel } from "react-bootstrap";
import backEnd from '../../img/backEnd.jpg';
import frontEnd from '../../img/frontEnd.jpg';
import Red1 from '../../img/Red1.jpg';
import Red2 from '../../img/Red2.jpg';
import gitCertificado from '../../img/gitCertificado.jpg';

export default function Courses() {
    const data = [{ img: backEnd, titulo: "Desarrollador Back-end", descripcion: "Curso de capacitación para Desarrollador Back-end , dicho curso consto de la arquitectura cliente-servidor, modelo vista controlador, diferencias entre web estática y dinámica" },
    { img: frontEnd, titulo: "Desarrollador Front-end", descripcion: "Curso de capacitación para Desarrollo Front-end , dicho curso consto de tipos de sitios web(dinámicos y estáticos),proceso de desarrollo , requerimientos y filtrado de estos, sintaxis básica de HTML, CSS y JAVASCRIPT" },
    { img: Red1, titulo: "CCNAv7: Switching, Routing and Wireless Essentials", descripcion: "Configurar las VLAN y el enrutamiento entre VLAN aplicando las mejores prácticas de seguridad Solucionar problemas de ruteo entre redes VLAN en dispositivos de capa 3. Configurar la redundancia en una red conmutada utilizando STP y EtherChannel" },
    { img: Red2, titulo: "CCNAv7: Introducción a Redes", descripcion: "Configurar los switch y dispositivos finales para proporcionar acceso a recursos de redes locales y remotos." },
    { img: gitCertificado, titulo: "Git Para Todos", descripcion: "Manejo de repositorios locales y remotos, así como de comandos para la gestión de repositorios" }]
    return (
        <div className="courses">
            <div>
                <h1 className='formacion'>Courses</h1>                                
            </div>
            <Carousel variant="dark">
                {
                    data.map(
                        data => (
                            <Carousel.Item key={data.titulo}>
                                <img                                    
                                    className="courses-img"
                                    src={data.img}  
                                    alt="cursos"                                  
                                />
                                <br></br>
                                <br></br>
                                <br></br>
                                <br></br>
                                <br></br>
                                <Carousel.Caption>                                    
                                    <h1>{data.titulo}</h1>
                                    <p>{data.descripcion}</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                        )
                    )
                }
            </Carousel>
        </div>
    )
}