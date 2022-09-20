import { Box, Container, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles/';
import { cardsSkillsData } from '../../../data';
import { generateId } from '../../../helpers';
import { Cards } from "./Cards";

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
        <Typography
          gutterBottom
          variant="h4"
          align="center"
          className="marginHeaders"
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

