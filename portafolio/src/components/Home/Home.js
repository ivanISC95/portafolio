import me from '../../img/me.png';
export default function Home() {
    return (
        <div>
            <div className="inicio">
                <h1>Home</h1>
            </div>
            <div className="body">
                <div className="foto">
                    <img src={me} alt="me"></img>
                </div>
                <div className="informacion">
                    <h2 className="nombre">Soy Jose Ivan</h2>
                    <p className="profesion">Ingeniero en Sistemas Computacionales</p>
                </div>
            </div>
        </div>
    )
}