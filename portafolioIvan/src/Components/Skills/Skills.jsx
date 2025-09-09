import "./skills.css"
import { initialState } from "../../features/datas/skills";

export default function Skills() {  
  return (
    <section id="skill" className="skills">
      <div className="skill-nombre">
        <h2>Skills</h2>
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