import me from '../../img/me.png';
import Info from './Info';

export default function Home() {
    return (
        <div>
            <div className="aboutInicio">
                <div className="aboutInfo">                    
                    <h1 className='nombre'>Soy Ivan Perez</h1>
                    <br></br>
                    <h2>Ingeniero en Sitemas Computacionales</h2>                    
                </div>
                <div className="aboutImg">
                    <img src={me}></img>
                </div>
            </div>
            <div>
                <Info></Info>
            </div>
        </div>
    )
}