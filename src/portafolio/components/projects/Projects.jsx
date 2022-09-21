import { Box, Container, Grid, Typography } from "@mui/material";
import lastCompany from "../../../assets/imgs/projects/finance.png";
import prevCompany from "../../../assets/imgs/projects/gnp.jpg";
import firstCompany from "../../../assets/imgs/projects/televisas.png";
import { DateJob } from "./DateJob";

import logoTelevisa from "../../../assets/imgs/projects/Logotipo_de_Televisa.png";
import logoGnp from "../../../assets/imgs/projects/Logo_del_GNP.svg.png";
import bankImage from "../../../assets/imgs/projects/Scotiabank_logo.svg";

export const Projects = () => {
  return (
    <Box      
      sx={{
        backgroundColor: 'white',
        width: '100%',
        paddingBottom: '70px'
      }}
    >
      <Container maxWidth="lg" fixed={false}>
        <Typography
            id="projects"
            gutterBottom
            variant="h3"
            align="center"
            className="marginHeaders"
          >
            PROJECTS
        </Typography>

        <Grid container spacing={1}>
          <Grid item xs={12}>
            <DateJob
              startJob="August 2020"
              endJob="September 2021"
              settingLogo={{
                logo: bankImage,
                size: "50px"
              }}
            />

            <Typography>
              Al trabajar para una organización financiera como lo es un banco, tuve la oportunidad de mejorar mis habilidades técnicas y definitivamente me ayudo a jamás subestimar el desarrollo tecnológico. Mejoré en mis tiempos de entrega y aprendí técnicas y herramientas en tiempo record. Ahora cuento con una gestión del tiempo más eficaz y un gusto más azusado por el detalle
            </Typography>
          </Grid>

          <Grid item xs={12} md={6}>
            <img src={lastCompany} className="img-responsive" alt="last job" />
          </Grid>

          <Grid item xs={12} md={6}>
            <Typography>
              Aparte de una intensa planeación y discución sobre posibilidades y deuda, cada parte del desarrollo cuenta con su conjunto de pruebas unitarias, experiencia de usuario, performance y una continua mejora de la totalidad de cada uno de los proyectos 
            </Typography>
          </Grid>
        </Grid>

        <Grid container spacing={1}>
          <Grid item xs={12}>
            <DateJob
              startJob="October 2019"
              endJob="June 2021"
              settingLogo={{
                logo: logoGnp,
                size: "50px"
              }}
            />
            <Typography>
              Lorem Dolore enim labore quis enim. Adipisicing et voluptate cillum ea anim elit ut.
            </Typography>
              
            <Typography>
              Adipisicing aliquip cupidatat sit aliquip enim officia.Enim anim id minim eu duis amet deserunt esse.Est laborum laborum Lorem amet consectetur dolor cupidatat adipisicing veniam Lorem.Nulla amet dolor enim laboris nostrud quis labore ullamco incididunt exercitation nisi.
            </Typography>
          </Grid>

          <Grid item xs={12} md={6}>
            <Typography>
              Aparte de una intensa planeación y discución sobre posibilidades...
            </Typography>
          </Grid>

          <Grid item xs={12} md={6}>
            <img src={prevCompany} className="img-responsive" alt="last job" />

          </Grid>
        </Grid>

        <Grid container spacing={1}>          
          <DateJob
            startJob="October 2015"
            endJob="October 2019"
            settingLogo={{
              logo: logoTelevisa,
              size: "80px"
            }}
          />

          <Grid item xs={12}>
            Labore fugiat velit ut ut fugiat ad dolore enim. Lorem in consectetur ex sit do ea.
          </Grid>

          <Grid item xs={6}>
            <img src={firstCompany} className="img-responsive" alt="last job" />
          </Grid>

          <Grid item xs={6}>
            Sint eiusmod ad Lorem nostrud eiusmod irure commodo. Officia incididunt est quis cupidatat culpa excepteur ut fugiat.Consequat nulla fugiat quis eu officia tempor tempor consequat magna anim incididunt.
          </Grid>
        </Grid>

      </Container>
    </Box>
  )
}