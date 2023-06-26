import './home.css'
import Skills from '../Skills/Skills'
import Experience from '../Experience/Experience'
import Contact from '../Contact/Contact'
import Project from '../Projects/Project'
import Nav from '../Nav/Nav'
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
      <Nav></Nav>
      <Contact></Contact>
      <br />
      <Experience></Experience>   
      <Skills></Skills>
      <Project></Project>
    </>
  )
}