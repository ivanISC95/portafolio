import './contact.css'
import { AiFillLinkedin, AiOutlineMail, AiFillGithub } from 'react-icons/ai'
import { BsFileEarmarkArrowDown } from 'react-icons/bs'
import IconButton from '@mui/material/IconButton';
import { CiLocationOn } from 'react-icons/ci'
import cv from '../../cv/CV_Jose_Ivan_Perez.pdf'

export default function Contact() {
  return (
    <section className="section-contact" id='contact'>
      <h1>Contact</h1>      
      <div className="cards">
        <div className="card">
          <a href='https://github.com/ivanISC95' target="_blank"><AiFillGithub className="iconsSkills" /></a>
        </div>
        <div className="card">
          <a href='https://www.linkedin.com/in/jose-ivan-perez-ugalde-050a1b221/' target="_blank"><AiFillLinkedin className="iconsSkills" /></a>
        </div>
        <div className="card">          
          <a href="mailto:ivan2295isc@gmail.com?subject=Job%20Opportunity&body=Hello%20Jose%2C%0D%0A%0D%0AI%20would%20like%20to%20contact%20you%20regarding%20..." target="_blank"><AiOutlineMail className="iconsSkills" /></a>
        </div>    
        <div className="card">
        <IconButton color="primary" className="card" href={cv} target="_blank">
          <BsFileEarmarkArrowDown className="iconsSkills"/>
          <p>Download my resume</p>
        </IconButton>
        </div>      
        <div className="card">
        <IconButton color="primary" className="card" href='https://www.google.com.mx/maps/place/San+Juan+del+R%C3%ADo,+Qro./@20.4033863,-100.0146718,13z/data=!3m1!4b1!4m6!3m5!1s0x85d30b6be9806eb5:0xfabddb9e7679cd43!8m2!3d20.3951106!4d-99.9856344!16zL20vMDhkZnc2?entry=ttu' target="_blank">
          <CiLocationOn className="iconsSkills"/>
          <p>San Juan del Rio / Queretaro / Mexico</p>
        </IconButton>
        </div> 
      </div>
      <br />
    </section>
  )
}