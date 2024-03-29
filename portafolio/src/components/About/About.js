import logo from '../../img/graduacion.png'
import Academic from './Academic'
import Skills from './Skills'
export default function About(){
    return(
        <div>
            <div className="aboutInicio">                                    
                <div className="aboutImg">
                    <h1><strong>Ingeniero en Sistemas Computacionales / Desarrollador</strong></h1>
                    <p>Ingeniero en Sistemas Computacionales , egresado del Tecnológico de San Juan del Rio, Qro, en el año del 2021.
                    Me apasiona el desarrollo web , tanto front-end y back-end, en ambos tengo habilidades y conocimientos para desempeñarme como desarrollador full-stack, tengo experiencia desarrollando proyectos escolares y proyectos privados.
                    </p>
                    <img src={logo} alt="Me" className='HomePhoto'></img>                             
                </div>
            </div>
            <Academic></Academic>            
            <Skills></Skills>            
        </div>
    )
}