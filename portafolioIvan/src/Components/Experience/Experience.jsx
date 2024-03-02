import './experience.css';
import { MdExpandMore } from 'react-icons/md'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';

export default function Experience() {


  return (
    <section id="experience" className="section-experience">
      <h1>Experience</h1>
      <div className="works">
        <Accordion>
          <AccordionSummary
            expandIcon={<MdExpandMore />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography sx={{ width: '33%', flexShrink: 0}} component="span">
              Caja Negra / San Juan del Rio, Queretaro / Mexico 
            </Typography>
            <Typography sx={{ color: 'text.secondary' }} component="span">Ag 2021 - Dic 2021</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography component="span">
              <span>Developer Fullstack</span>
              <ul>
                <li>Web Developer with React.JS</li>
                <li>Make Database in PostgreSQL</li>
                <li>Create views and stored procedures in sql</li>                
                <li>Version control with GIT</li>
              </ul>
            </Typography>
          </AccordionDetails>
        </Accordion>        
        <Accordion>
          <AccordionSummary
            expandIcon={<MdExpandMore />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography sx={{ width: '33%', flexShrink: 0 }} component="span">
              Dataware Solutions / Queretaro / Mexico 
            </Typography>
            <Typography sx={{ color: 'text.secondary' }}>Ag 2022 - Nov 2023</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography component="span">
              <span>Web Developer</span>
              <ul>
                <li>Web Developer with .Net</li>
                <li>Create and modify modules web in .Net</li>
                <li>Microsoft SQL Server admin</li>
                <li>Create and modify views and stored procedures in SQL Server</li>                
                <li>Version control with GIT and SVN</li>
                <li>Standardized</li>                              
              </ul>
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<MdExpandMore />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography sx={{ width: '33%', flexShrink: 0 }} component="span">
              Imbera / San Juan del Rio , Queretaro / Mexico 
            </Typography>
            <Typography sx={{ color: 'text.secondary' }}>Nov 2023 - Today</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography component="span">
              <span>Web Developer</span>
              <ul>
                <li>Web Developer with ReactJS and React with Typescript</li>
                <li>Create and modify modules web</li>
                <li>Use localstorage, sessionStorage and redux in projects.</li>
                <li>Automation with python(Pandas,sharepoint and bigquery)</li>            
                <li>Version control with GIT</li>
              </ul>
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>
    </section>
  )
}