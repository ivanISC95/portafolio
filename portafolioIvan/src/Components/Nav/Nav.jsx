import './nav.css'
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';


export default function Nav(){
  return (
    <section className="section-nav">
      <div className="nav-bottons">            
      <Button variant="outlined" href="#contact">Contact</Button> 
      <Button variant="outlined" href="#experience">Experience</Button> 
      <Button variant="outlined" href="#skill">Skill´s</Button> 
      <Button variant="outlined" href="#project">Projects</Button> 
      </div>
    </section>
  )
}