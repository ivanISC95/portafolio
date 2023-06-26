import './proyect.css'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
// importacion de las imagenes
import p1 from './p1.gif'
import { projectData } from '../../features/datas/projectsDatas';


export default function Project() {

  return (
    <section className="project-section" id='project'>
      <h1>Projects</h1>
      <div className="project-datas">        
        {
          projectData.map(
            data => (
              <Card sx={{ maxWidth: 345 }} className='project-cards'>
          <CardMedia
            sx={{ height: 140 }}
            image={data.img}
            title="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {data.technology} / {data.name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {data.info}
            </Typography>
          </CardContent>
          <CardActions>
            <a target="_blank" href={data.url}><Button size="small">Go</Button></a>
          </CardActions>
        </Card>
            )
          )
        }
      </div>
    </section>
  )
}