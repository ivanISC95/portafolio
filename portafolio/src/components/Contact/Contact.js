import Redes from "../Home/Redes";
import { Card,Button } from "react-bootstrap";
import cv from '../../PDF/Perez Ugalde Jose Ivan CV.pdf';
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
                    <Card.Body>
                        <Card.Title>Mi CV</Card.Title>
                        <Button href={cv} download={cv} variant="outline-primary">Descargar CV</Button>                        
                    </Card.Body>
                </Card>
            </div>
            <div>
                <Redes></Redes>
            </div>
        </div>
    )
}