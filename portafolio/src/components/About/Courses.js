import {Carousel } from "react-bootstrap";
import {courses} from '../Datas/Datas';

export default function Courses() {
    return (
        <div className="courses">
            <div>
                <h1 className='formacion'>Courses</h1>                                
            </div>
            <Carousel variant="dark">
                {
                    courses.map(
                        data => (
                            <Carousel.Item key={data.titulo}>
                                <img                                    
                                    className="courses-img"
                                    src={data.img}  
                                    alt="cursos"                                  
                                />                                
                            </Carousel.Item>
                        )
                    )
                }
            </Carousel>
        </div>
    )
}