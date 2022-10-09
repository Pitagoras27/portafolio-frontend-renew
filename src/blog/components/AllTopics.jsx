import { Box, Container } from "@mui/material";
import { makeStyles } from '@mui/styles/';
import { useEffect, useState } from "react";
import { generateId } from "../../helpers";
import { useBlogStore } from "../../hooks";
import { TopicCard } from "../components/TopicCard";

const useStyles = makeStyles({
  mainContainer: {
    backgroundColor: 'white',
    width: '100%',
    paddingTop: '100px',
    paddingBottom: '100px',
  },
  cardsContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    transition: 'all 1s',
    gap: '30px',
    justifyContent: 'center'
  }
});

export const AllTopics = () => {
  const [classAnimated, setClassAnimated] = useState('');

  useEffect(() => {
    setClassAnimated('animatedGrid');
  }, []);

  const classes = useStyles();

  const { topics, filterList } = useBlogStore();
  const allTopics = filterList.length < 1 ? topics : filterList;

  return (
    <Box className={classes.mainContainer}>
      <Container maxWidth="lg">

        <Box className={`${classAnimated ? classAnimated : '' } ${classes.cardsContainer}`}>
            {
              allTopics.map((data) => (<TopicCard key={generateId()} { ...data }/>))
            }
        </Box>
      </Container>
    </Box>
  )
}