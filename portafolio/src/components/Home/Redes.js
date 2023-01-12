import { SiGmail,SiFacebook,SiInstagram,SiGithub } from "react-icons/si";

export default function Redes() {
    const correo = () => {
        alert("ivan2295isc@gmail.com");
    }
    return (
        <div className="redes">
            <div>
                <h1 className='nombre'>Mis Redes</h1>
            </div>
            <div>
                <ul>
                    <li><a className='nombre' href="https://www.facebook.com/ivan.perezugalde/"><SiFacebook /></a></li>
                    <li><a className='nombre' href="https://www.instagram.com/perezivan2/"><SiInstagram /></a></li>
                    <li><a className='nombre' href="https://github.com/ivanISC95"><SiGithub /> </a></li>
                    <li onClick={correo}><SiGmail /></li>
                </ul>
            </div>
        </div>
    )
}