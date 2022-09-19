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
    paddingBottom: '20px',
  }
});

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode !== 'dark' ? '#1A2027' : '#fff',
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
      paddingBottom: "50px"
    }}
      id="about"
    >
      <Container maxWidth="lg">
        <Typography
          gutterBottom
          variant="h4"
          align="center"
          className={classes.marginHeader}
        >
            About Me
        </Typography>
        <Grid container spacing={1}>          
          <Grid item xs={6}>
            <Item>
              <img src={customImage} alt='Tech devices' style={{
                width: '100%',
                padding: '20px'
              }}/>
            </Item>
          </Grid>
          <Grid item xs={6}>
            <Item>
              <Typography variant="body2" paragraph align="left">
                Soy una persona que se considera normal, pero con cualidades bien definidas, soy estudioso y detallista. Me gusta ahondar en la problemática a resolver.
              </Typography>

              <Typography variant="body2" paragraph align="left">
                Encuentro en la colaboración crecimiento personal y humano, por lo que ayudar al crecimiento de otros también lo asumo como un crecimiento propio.
              </Typography>

              <Typography variant="body2" paragraph align="left">
                Me he ido forjando con esfuerzo en ambitos afines al desarrollo tecnológico, en particular al desarrollo web. Y aunque no he trabajado de tiempo completo con tecnologías de servidor propiamente dichas, si he procurado contar con recursos necesarios para llevar a cabo tareas como tales.
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