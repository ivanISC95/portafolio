import me from '../../img/me.png';

export default function Home() {
    return (
        <div>
            <div className="aboutInicio">
                <div className="aboutInfo">
                    <h2>Ingeniero en Sistemas Computacionales</h2>
                    <img src={me} alt="me" className='HomePhoto'></img>
                    <h1 className='nombre'>Jose Ivan Perez Ugalde</h1>
                </div>
            </div>
        </div>
    )
}