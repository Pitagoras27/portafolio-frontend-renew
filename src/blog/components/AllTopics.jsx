import { Box, Container } from "@mui/material";
import { makeStyles } from '@mui/styles/';
import { generateId } from "../../helpers";
import { useBlogStore } from "../../hooks";
import { TopicCard } from "../components/TopicCard";

const useStyles = makeStyles({
  cardsContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '50px',
    justifyContent: 'center'
  }
})

export const AllTopics = () => {
  const classes = useStyles();

  const { topics, filterList } = useBlogStore();
  const allTopics = filterList.length < 1 ? topics : filterList;

  return (
    <Box
      sx={{
        backgroundColor: 'white',
        width: '100%',
        paddingTop: '100px',
        paddingBottom: '100px'
      }}
    >
      <Container maxWidth="lg">

        <Box className={classes.cardsContainer}>
            {
              allTopics.map((data) => (<TopicCard key={generateId()} { ...data }/>))
            }
        </Box>
      </Container>
    </Box>
  )
}