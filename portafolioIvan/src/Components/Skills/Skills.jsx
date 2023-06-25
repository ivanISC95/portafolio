import "./skills.css"
import { FaBeer } from 'react-icons/fa';
import { initialState } from "../../features/datas/skills";

export default function Skills() {  
  return (
    <section id="skill" className="skills">
      <div className="skill-nombre">
        <h2>Skills, languages ​​and technologies</h2>
      </div>
      <div className="cards">        
        {
          initialState.map(
            data => (
              <div className="card" key={data.name}>{data.icono}
                <figcaption>{data.name}</figcaption>
              </div>                            
            )
          )
        }
      </div>

    </section>
  )
}