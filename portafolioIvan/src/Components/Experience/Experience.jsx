import './experience.css';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
export default function Experience() {

  return (
    <section id="experience" className="section-experience">
      <h1>Experience</h1>
      <div className="works" style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "0.5rem",
        justifyContent: "center",
        alignItems: "stretch",
      }}>
        <Card sx={{ flex: "1 1 275px", height: "100%" }}>
          <CardContent>
            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
              Caja Negra
            </Typography>
            <Typography variant="h5" component="div">
              Frontend JR Developer (Intern)
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              Aug 2021 – Dec 2021
            </Typography>
            <Typography variant="body2">
              <ul>
                <li>Developed a service management system using React and Flask.</li>
                <li>Configured and maintained company servers, including database installations.</li>
                <li>Assisted in server rental, setup, and application deployment.</li>
              </ul>
            </Typography>
          </CardContent>
        </Card>
        {/* Card Dataware Soluciones */}
        <Card sx={{ flex: "1 1 275px", height: "100%" }}>
          <CardContent>
            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
              Dataware Soluciones S.A de C.V
            </Typography>
            <Typography variant="h5" component="div">
              Software Developer Jr
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              Aug 2022 – Nov 2023
            </Typography>
            <Typography variant="body2">
              <ul>
                <li>Developed and maintained web modules using ASP .Net.</li>
                <li>Optimized SQL Server queries, improving system performance.</li>
                <li>Deployed and managed web applications on IIS.</li>
                <li>Collaborated in Agile teams, delivering features in daily stand-ups and weekly iterations.</li>
                <li>Standardized code practices and created technical documentation.</li>
              </ul>
            </Typography>
          </CardContent>
        </Card>

        {/* Card Imbera Latinoamérica */}
        <Card sx={{ flex: "1 1 275px", height: "100%" }}>
          <CardContent>
            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
              Imbera Latinoamérica
            </Typography>
            <Typography variant="h5" component="div">
              Fullstack Developer Mid
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              Nov 2023 – Present
            </Typography>
            <Typography variant="body2">
              <ul>
                <li>Developed web applications with React + Typescript and FastAPI backend.</li>
                <li>Integrated REST APIs and improved UI/UX based on user feedback.</li>
                <li>Increased system performance by implementing efficient state management with Redux Toolkit.</li>
                <li>Mentored Junior developers, providing guidance and code reviews.</li>
                <li>Implemented best practices for coding standards and technical documentation.</li>
                <li>Automated deployment of web applications and APIs using GitHub Actions, deploying to Firebase Hosting and Google Cloud Run.</li>
                <li>Strengthened API security by implementing token-based authentication.</li>
                <li>Contributed to the development of projects with national and international impact for clients such as Coca-Cola, Heineken, and others.</li>
              </ul>
            </Typography>
          </CardContent>
        </Card>

      </div>
    </section>
  )
}