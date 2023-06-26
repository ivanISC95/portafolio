import './contact.css'
import { AiFillLinkedin, AiOutlineMail, AiFillGithub } from 'react-icons/ai'

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
      </div>
      <br />
    </section>
  )
}