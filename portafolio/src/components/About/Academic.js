import { Card, Button } from "react-bootstrap";
import tec from '../../img/tec.jpeg';
export default function Academic() {
    return (
        <div>
            <div>
                <h1 className='formacion'>Mi Formación Profesional</h1>
            </div>
            <div>
                <Card className="text-center" border="primary">
                    <Card.Header>Ingenieria</Card.Header>
                    <Card.Body>
                        <Card.Title>Ingenieria en Sistemas Computacionales</Card.Title>
                        <Card.Text>
                        Realice mi carrera profesional en el Tecnologico de San Juan del Rio ,  Queretaro.                            
                        </Card.Text>
                        <img src={tec}></img>
                    </Card.Body>
                    <Card.Footer className="text-muted">Inicio: 2016 - Fin: 2021</Card.Footer>
                </Card>
            </div>
        </div>
    )
}