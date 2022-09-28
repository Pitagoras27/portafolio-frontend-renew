
import { Box, Container, Grid, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useLocation, useParams } from "react-router-dom";
import mainImage from "../../assets/imgs/skill-cards/algoritmo-e1547171172471.jpg";
import { contentSection, pathSection } from "../../helpers/utils";
import { useBlogStore } from "../../hooks";
import { LayoutBlog } from "./LayoutBlog";

const useStyles = makeStyles({
  marginMainTitle: {
    margin: '50px 0 35px !important',
  },
  mainImage: {
    background: 'cover',
    height: '300px'
  }
});

export const BlogDetailPage = () => {
  const classes = useStyles();
  const { topics } = useBlogStore();

  const navigate = useLocation();
  const { section, title, id } = useParams();

  const mainTitle = pathSection(title);
  const { text } = contentSection(topics, id);

  const onNavigateBack = () => {
    // const lastPage = id.split("-")[0];
    // navigate(`/${lastPage}`);
  };

  return (
    <LayoutBlog>
      <Box
        sx={{
          backgroundColor: 'white',
          width: '100%',
          paddingTop: '100px',
          paddingBottom: '140px'
        }}
      >
        <Container maxWidth="lg">
          <Grid container>
            <Grid item xs={12} align="end">
              <Typography variant='h6' component='h6'>{ section }</Typography>
            </Grid>
            <Grid item xs={12} align="center" className={classes.marginMainTitle}>
              <Typography variant='h4' component='h4'>{ mainTitle }</Typography>
            </Grid>
            <Grid item xs={12} align="center">
              <img src={mainImage} alt={title} className={classes.mainImage}/>
            </Grid>

            <Grid item xs={12}>
            <Typography variant="body1" paragraph align="left" className={classes.marginMainTitle}>
              { text }
            </Typography>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </LayoutBlog>
  )
}