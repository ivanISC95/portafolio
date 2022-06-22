import logo from '../../img/graduacion.png'
export default function About(){
    return(
        <div>
            <div className="inicio">
                <h1>About Us</h1>
            </div>
            <div className="aboutInicio">
                <div className="aboutImg">
                    <img src={logo}></img>
                </div>                
                <div className="aboutInfo">
                    <p className='descripcion'>Soy ingeniero en Sistemas Computacionales , egresado del Tecnológico de San Juan del Rio, Qro, en el año del 2021.
                    Me apasiona el desarrollo web , tanto front-end y back-end, en ambos tengo habilidades y conocimientos para desempeñarme como desarrollador full-stack, tengo experiencia desarrollando proyectos escolares y proyectos privados.</p>
                </div>
            </div>
        </div>
    )
}