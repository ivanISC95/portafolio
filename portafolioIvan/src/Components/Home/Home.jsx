import './home.css'
import Skills from '../Skills/Skills'
import Experience from '../Experience/Experience'
import Contact from '../Contact/Contact'
import Project from '../Projects/Project'
export default function Home() {
  const a = "{"
  const b = "}"
  return (
    <>
      <section className="home">
        <div className="principal">
          <h1 className='nombre-principal'> <span className='span-home'>${a}</span> Jose Ivan Perez Developer <span>{b}</span></h1>
        </div>
        <div className="informacion">
          <p> <span className="span-skills">C</span>omputer Systems Engineer and Developer. </p>
          <p><span className="span-skills">P</span>assionate about web development and databases.</p>
          <p><span className="span-skills">W</span>eb development experience with React.JS, Angular and .Net Framework and other technologies</p>
        </div>
      </section>
      <nav >
        <ul>
          <li><a className='home-atajos' href="#contact">Contact</a></li>
          <li><a className='home-atajos' href="#experience">Experience</a></li>
          <li><a className='home-atajos' href="#skill">Skills</a></li>
          <li><a className='home-atajos' href="#project">Projects</a></li>
        </ul>
      </nav>   
      <Contact></Contact>
      <br />
      <Experience></Experience>   
      <Skills></Skills>
      <Project></Project>
    </>
  )
}