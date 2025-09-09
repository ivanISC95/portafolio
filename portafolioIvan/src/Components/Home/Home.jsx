import './home.css'
import Skills from '../Skills/Skills'
import Experience from '../Experience/Experience'
import Contact from '../Contact/Contact'
import Project from '../Projects/Project'
import Nav from '../Nav/Nav'
import { AiOutlineHome } from 'react-icons/ai'
export default function Home() {
  const a = "{"
  const b = "}"
  return (
    <>
      <section className="home">
        <div className="principal">
          <h1 className='nombre-principal'> <span className='span-home'>${a}</span>Ivan Fullstack Developer <span className='span-home'>{b}</span></h1>
        </div>
        <div className="informacion">
          <p> <span className="span-skills">C</span>omputer Systems Engineer | Fullstack Developer (React, FastAPI, GCP)</p>
          <p><span className="span-skills">P</span>assionate about building scalable web applications and optimizing databases.</p>
          <p><span className="span-skills">E</span>xperience delivering solutions with React, TypeScript, FastAPI and Angular, deploying services on Google Cloud and Firebase.</p>
          <p><span className="span-skills">S</span>killed in CI/CD automation with GitHub Actions, technical documentation, and mentoring junior developers.</p>
        </div>
        <a className='flotante' href='#' >
          <AiOutlineHome className='flotante-img'/>
        </a>
      </section>     
      <Nav></Nav>
      <Contact></Contact>
      <br />
      <Experience></Experience>   
      <Skills></Skills>
      <Project></Project>
    </>
  )
}