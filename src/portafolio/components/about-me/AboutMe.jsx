import {
  Box,
  Container,
  Grid, Paper, Typography
} from '@mui/material';
import { makeStyles, styled } from '@mui/styles/';
import customImage from '../../../assets/imgs/mycellaneous/allDevice.svg';

const useStyles = makeStyles({
  marginHeader: {
    color: 'rgb(43, 93, 115)',
    paddingTop: '40px',
    paddingBottom: '40px',
  }
});

const Item = styled(Paper)(({ theme }) => ({
  // backgroundColor: theme.palette.mode !== 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export const AboutMe = () => {
  const classes = useStyles();
  return (
    <Box sx={{
      backgroundColor: 'white',
      width: '100%',
    }}
      id="about"
    >
      <Container maxWidth="lg">
        <Typography
          gutterBottom
          variant="h4"
          align="center"
          className="marginHeaders"
        >
            About Me
        </Typography>
        <Grid container spacing={1}>          
          <Grid item xs={12} md={6}>
            <Item>
              <img src={customImage} alt='Tech devices' style={{
                width: '100%',
                padding: '20px'
              }}/>
            </Item>
          </Grid>
          <Grid item xs={12} md={6}>
            <Item>
              <Typography variant="body2" paragraph align="left">
                I’m a Front-End Developer located in Mexico City. I have ten years of experience developing UI and features for multiples companies. I'm a serious person when is time to work but I have a good mood of sense in others environments.
              </Typography>

              <Typography variant="body2" paragraph align="left"> 
                Well-organised person, problem solver, independent employee with high attention to detail. I like outdoor activities, Musinc, and in this time lern English language. A love family, I'm father of one entuciastic and smart adolecent girl.
              </Typography>

              <Typography variant="body2" paragraph align="left">

              </Typography>

              <Typography variant="body2" paragraph align="left">
                Continuamente me actualizo a través de cursos, en la escuela de desarrollo digital de Udemy.
              </Typography>
            </Item>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}