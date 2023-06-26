import './contact.css'
import { AiFillLinkedin, AiOutlineMail, AiFillGithub } from 'react-icons/ai'
import { BsFileEarmarkArrowDown } from 'react-icons/bs'
import IconButton from '@mui/material/IconButton';
//import { cv } from '../../cv/Perez Ugalde Jose Ivan CV.pdf'
import cv from '../../cv/Perez Ugalde Jose Ivan CV.pdf'

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
          <a><AiOutlineMail className="iconsSkills" /></a>
          <p>ivan2295isc@gmail.com</p>
        </div>    
        <div className="card">
        <IconButton color="primary" className="card" href={cv} target="_blank">
          <BsFileEarmarkArrowDown className="iconsSkills"/>
        </IconButton>
        </div>      
      </div>
      <br />
    </section>
  )
}