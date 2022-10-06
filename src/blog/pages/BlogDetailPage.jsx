
import { Box, Container, Grid, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useLocation, useParams } from "react-router-dom";
import { ContentHtml } from "../";
import { contentSection, pathSection } from "../../helpers/utils";
import { useBlogStore } from "../../hooks";
import { LayoutBlog } from "./LayoutBlog";

const useStyles = makeStyles({
  marginSectionText: {
    margin: '15px 0 40px !important',
  },
  marginIntroText: {
    margin: '80px 0 40px !important',
    textAlign: 'center !important'
  },
  mainImage: {
    background: 'cover',
  },
  imageContainer: {
    height: '300px',
    overflow: 'hidden'
  }
});

const hedingsT = [1,2,3,4,5]
export const BlogDetailPage = () => {
  const classes = useStyles();
  const { topics } = useBlogStore();

  const navigate = useLocation();
  const { section, title, id } = useParams();

  const mainTitle = pathSection(title);
  const { intro, content } = contentSection(topics, id);

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
          paddingBottom: '100px'
        }}
      >
        <Container maxWidth="lg">
          <Grid container>
            <Grid item xs={12} align="end" className={classes.marginSectionText}>
              <Typography variant='h6' component='h6'>{ section }</Typography>
            </Grid>
            
            <Grid item xs={12} md={3} align="left">
              <Typography variant="subtitle1">
                { hedingsT }
              </Typography>
            </Grid>
            <Grid item xs={12} md={9} align="center" className={classes.imageContainer}>
              <img
                src={`/src/assets/imgs/skill-cards/detail-topics/${title}.png`}
                alt={title}
                className={classes.mainImage}
              />
            </Grid>

            <Grid item xs={12}>
            <Typography variant="body1" paragraph align="left" className={classes.marginIntroText}>
              <em>{ intro }</em>
            </Typography>
            </Grid>

            <Grid>
              <ContentHtml content={content} id={id} />
            </Grid>
          </Grid>
        </Container>
      </Box>
    </LayoutBlog>
  )
}
