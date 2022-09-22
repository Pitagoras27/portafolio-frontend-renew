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
              <em>
                Working for a financial organization such as a bank, I had the opportunity to improve my technical and comunicative skills. I learnt how to work with a team talent and upgrade my soft skills
              </em>
            </Typography>
          </Grid>

          <Grid item xs={12} md={6}>
            <img src={lastCompany} className="img-responsive" alt="last job" />
          </Grid>

          <Grid item xs={12} md={6}>
            <Typography variant="h6" sx={{ marginTop: '20px', fontWeight: '700'}}>
              Perfil: Front-end developer
            </Typography>
            <Typography variant="h6">
              <em>Company: Financial, Bank</em>
            </Typography>
            <br />
            <Typography variant="h6">
              Tecnologies and job:
            </Typography>
            <ul>
              <li>React and custom components</li>
              <li>Angular</li>
              <li>Feed app with API Rest</li>
              <li>Unit test with Jest for react and karma</li>
              <li>Deploy and security</li>
              <li>Best paractices with scanners of code Fortify and Blak Duck</li>
              <li>Scrum methodology</li>
            </ul>
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
              <em> Lorem Dolore enim labore quis enim. Adipisicing et voluptate cillum ea anim elit ut. </em>
            </Typography>
              
            <Typography>
              Adipisicing aliquip cupidatat sit aliquip enim officia.Enim anim id minim eu duis amet deserunt esse.Est laborum laborum Lorem amet consectetur dolor cupidatat adipisicing veniam Lorem.Nulla amet dolor enim laboris nostrud quis labore ullamco incididunt exercitation nisi.
            </Typography>
          </Grid>

          <Grid item xs={12} md={6}>
            <Box sx={{ mt: 5 }} />
            <Typography variant="h6" sx={{ marginTop: '20px', fontWeight: '700'}}>
              Perfil: Front-end developer
            </Typography>
            <Typography variant="h6">
              <em> Company: Financial, Insurances</em>
            </Typography>
            <br />
            <Typography variant="h6">
              Tecnologies and job:
            </Typography>

            <ul>
              <li>React</li>
              <li>Redux</li>
              <li>Feed app with API Rest</li>
              <li>Material UI</li>
            </ul>
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

          <Grid item xs={8}>
            <img src={firstCompany} className="img-responsive" alt="last job" />
          </Grid>

          <Grid item xs={4}>
            <em> Work for huge cantity of information requires solutions modulars and scalars</em>
            
            <Typography variant="h6" sx={{ marginTop: '20px', fontWeight: '700'}}>
              Perfil: Fullstack developer
            </Typography>

            <Typography variant="h6">
              <em>
                Company: Entertainment, TV
              </em>
            </Typography>
            <br />

            <Typography variant="h6">
              Tecnologies and work
            </Typography>
            <ul>
              <li>React</li>
              <li>Storybook</li>
              <li>Wordpress</li>
              <li>Brighspot</li>
              <li>jQuery</li>
              <li>PHP</li>
              <li>And more...</li>
            </ul>
          </Grid>
        </Grid>

      </Container>
    </Box>
  )
}