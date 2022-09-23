import {
  Box,
  Container,
  Grid, Typography
} from '@mui/material';
import customImage from '../../../assets/imgs/mycellaneous/allDevice.svg';
import { useAnimatedStore } from '../../../hooks';
import { HeaderSection } from '../../../ui';

export const AboutMe = () => {
  const { animatedClass, animatedSection } = useAnimatedStore();

  return (
    <Box sx={{
        backgroundColor: 'white',
        width: '100%',
      }}
    >
      <Container
        maxWidth="lg"
        className={ animatedSection === 'about' ? animatedClass : 'hideSection'}
      >
        <HeaderSection headerTitle="About" idScroll="about"/>
        <Grid container spacing={1}>          
          <Grid item xs={12} md={6}>
            <img src={customImage} alt='Tech devices' style={{
              width: '100%',
              padding: '20px'
            }}/>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="body1" paragraph align="left">
              I’m a Front-End Developer located in Mexico City. I have ten years of experience developing UI and features for multiples companies. I'm a serious person when is time to work but I have a good mood of sense in others environments.
            </Typography>

            <Typography variant="body1" paragraph align="left"> 
              Well-organised person, problem solver, independent employee with high attention to detail. I like outdoor activities, Music, and in this time, I love learn study English language.
            </Typography>

            <Typography variant="body1" paragraph align="left">
              I love my family, I'm father of one entuciastic and smart adolecent girl.
            </Typography>

            <Typography variant="body1" paragraph align="left">
              An effective communicator with great people skills
            </Typography>

            <Typography variant="body1" paragraph align="left">
              I'm focused on my speaking skills
              Work to resolve as quickly as posible
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}