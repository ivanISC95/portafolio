import { BsGithub } from "react-icons/bs";
import { SiGmail } from "react-icons/si";
import {BsFacebook,BsInstagram} from 'react-icons/bs';
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
                <li><a href="https://www.facebook.com/ivan.perezugalde/"><BsFacebook /></a></li>
                    <li><a href="https://www.instagram.com/perezivan2/"><BsInstagram /></a></li>
                    <li><a href="https://github.com/ivanISC95"><BsGithub /> </a></li>
                    <li onClick={correo}><SiGmail/></li>                    
                </ul>
            </div>            
        </div>        
    )
}