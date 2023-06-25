import { Card, Col, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import { initialState } from '../../features/datas/skills'

export default function Skills() {
    console.log("aqui")
    console.log(initialState)
    
    return (
        <div className="skills">
            <div>
                <h1 className='formacion'>SKILLSET</h1>
            </div>
            <section className='App-content-characters'>
                <Row xs={2} md={4} className="g-5" >
                    {
                        skills.map(
                            data => (
                                <Col key={data.name}>
                                    <Card  key={data.name}>
                                        <div>{data.icono}</div>                                        
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