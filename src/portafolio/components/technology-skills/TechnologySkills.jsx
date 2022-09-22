import { Box, Container, Grid, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles/';
import { SliderSkills } from './SliderSkills';

const useStyles = makeStyles({
  cardsContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '20px',
    justifyContent: 'center'
  }
})

export const TechnologySkills = () => {
  const classes = useStyles();
  return (
    <Box
      id="skills"
      sx={{
        backgroundColor: 'white',
        width: '100%'
      }}
    >
      <Container maxWidth="lg">
        <Grid container>
          <Grid item xs={12} justifyContent="center">
            <Typography
              gutterBottom
              variant="h3"
              align="center"
              className="marginHeaders"
            >
              SKILLS
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="body1" paragraph align="left">
              I started as a webmaster, my main interest was a design UI interfaces and graphs, but the way or fate, got me here develop UI interfaces and doing every time of things related with web, that is a very huge and interesant. I’ve done remote work for colleges,  and collaborated with very talented people to create web products for both business and consumer use.
            </Typography>

            <Typography variant="body1" paragraph align="left">
              I create successful websites and webapps, always with colleges and coworkers. Always improve my work and upgrade as a person, my focuses is built software with best practices and performance, resposive and usefull. The main area of my expertise is front-end development, but also I have work as a Fullstack developer with CMS wordpress, brighspot and customs systems.
            </Typography>

            <Typography variant="body1" paragraph align="left">
              Actually my interest is reforce my design skills in CSS and improve my comunication skills. 
            </Typography>

            <Typography variant="body1" paragraph align="left">
              Visit me in my Linkding profile or get in touch!
            </Typography>
          </Grid>
          
        
          <Grid item xs={12} md={6} justifyContent="flex-end"
            sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
          >
            <SliderSkills areaSkill="Front-end" level={70}/>
            <SliderSkills areaSkill="React" level={55}/>
            <SliderSkills areaSkill="Design" level={45}/>
            <SliderSkills areaSkill="Back-end" level={40} />
            <SliderSkills areaSkill="Typescript" level={35}/>
          </Grid> 
        </Grid>

        <Box className={classes.cardsContainer}>
          {
            // cardsSkillsData.map((data) => <Cards key={generateId()} { ...data }/>)
          }
        </Box>
      </Container>
    </Box>
  );
}

