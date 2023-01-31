import { Card, Col, Row } from "react-bootstrap";
import { useSelector } from "react-redux";


export default function Skills() {
    const skills = useSelector(state => state.skills);
    return (
        <div className="skills">
            <div>
                <h1 className='formacion'>Skillś</h1>
            </div>
            <section className='App-content-characters'>
                <Row xs={2} md={4} className="g-5" >
                    {
                        skills.map(
                            data => (
                                <Col key={data.name}>
                                    <Card border="secondary" key={data.name}>
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
                                </Col>
                            )
                        )
                    }
                </Row>
            </section>
        </div>

    )
}