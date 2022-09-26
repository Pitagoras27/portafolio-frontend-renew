import { Box, Container } from "@mui/material";
import { makeStyles } from '@mui/styles/';
import { cardsSkillsData } from "../../data";
import { generateId } from "../../helpers";
import { TopicCard } from "../components/TopicCard";

const useStyles = makeStyles({
  cardsContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '20px',
    justifyContent: 'center'
  }
})

export const AllTopics = () => {
  const classes = useStyles();

  return (
    <Box
      sx={{
        backgroundColor: 'white',
        width: '100%',
        marginTop: '64px'
      }}
    >
      <Container maxWidth="lg">
        This is my blog page!

        <Box className={classes.cardsContainer}>
            {
              cardsSkillsData.map((data) => <TopicCard key={generateId()} { ...data }/>)
            }
        </Box>
      </Container>
    </Box>
  )
}