import { Box, Container, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles/';
import { cardsSkillsData } from '../../../data';
import { generateId } from '../../../helpers';
import { Cards } from "./Cards";

const useStyles = makeStyles({
  backgroundImage: 'linear-gradient(#1c3643, white 2%)',
  marginHeader: {
    paddingTop: '40px',
    paddingBottom: '40px',
    color: 'rgb(43, 93, 115)'
  },
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
    <Box sx={{
      backgroundColor: 'white',
      backgroundImage: 'linear-gradient(#1c3643, white 2%)',
      width: '100%'
    }}>
      <Container maxWidth="lg">
        <Typography
          gutterBottom
          variant="h4"
          align="center"
          className={classes.marginHeader}
        >
          Technology Skills
        </Typography>
        <Box className={classes.cardsContainer}>
          {
            cardsSkillsData.map((data) => <Cards key={generateId()} { ...data }/>)
          }
        </Box>
      </Container>
    </Box>
  );
}

