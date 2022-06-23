import Redes from "../Home/Redes";
import { Card, Nav, Button } from "react-bootstrap";
import { BsGithub } from "react-icons/bs";
import { SiGmail } from "react-icons/si";
import { BsFacebook, BsInstagram } from 'react-icons/bs';
export default function Contact() {
    return (
        <div>
            <div className="inicio">
                <h1>Contact</h1>
            </div>
            <div className="academic">
                <h1 className='formacion'>Mis datos de contacto se muestran a continuación</h1>
                <Card>

                    <Card.Body>
                        <Card.Title>Correo Electronico</Card.Title>
                        <Card.Text>
                            ivan2295isc@gmail.com
                        </Card.Text>                        
                    </Card.Body>
                </Card>
            </div>
            <div>
                <Redes></Redes>
            </div>
        </div>
    )
}