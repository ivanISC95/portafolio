import './contact.css'
import { AiFillLinkedin, AiOutlineMail, AiFillGithub } from 'react-icons/ai'

export default function Contact(){
  return(
    <section className="section-contact" id='contact'>
      <h1>Contact</h1>
      <div className="contact-datas">
        <div>
          <AiFillLinkedin />
        </div>  
        <div>
          <AiOutlineMail />
          <p>ivan2295isc@gmail.com</p>
        </div>
        <div>
          <AiFillGithub />
        </div>
      </div>   
    </section>  
  )
}