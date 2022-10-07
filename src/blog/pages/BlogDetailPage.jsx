
import { Box, Container, Grid, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useParams } from "react-router-dom";
import { Link } from "react-scroll";
import { ContentHtml } from "../";
import { contentSection, pathSection } from "../../helpers/utils";
import { useBlogStore } from "../../hooks";
import { LayoutBlog } from "./LayoutBlog";

const useStyles = makeStyles({
  marginSectionText: {
    margin: '15px 0 40px !important',
  },
  marginIntroText: {
    margin: '40px 0 10px !important',
    textAlign: 'center !important'
  },
  mainImage: {
    background: 'cover',
  },
  imageContainer: {
    height: '300px',
    overflow: 'hidden',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    padding: '3%',
    filter: 'brightness(0.7) contrast(1.2) invert(0.03) saturate(1.2) !important',
    '& span': {
      position: 'absolute',
      color: 'white',
      fontSize: '40px',
      padding: '3%',
    }
  },
  articleIndex: {
    fontWeight: 700,
    textAlign: 'center',
    display: 'inline-block',
    width: '100%',
    marginBottom: '15px',
  },
  linkStyles: {
    cursor: 'pointer',
    '&:hover': {
      textDecoration: 'underline',
      fontStyle: 'italic',
      color: '#0375b8'
    }
  },
  indexArticleMargin: {
    marginBottom: '20px !important',
  }
});

export const BlogDetailPage = () => {
  const classes = useStyles();
  const { topics } = useBlogStore();

  const { section, title, id } = useParams();

  const { intro, content } = contentSection(topics, id);
  
  const result = content.map(item => {
    if(item.type === 'h4') {
      return item.node
    }
  }).filter(Boolean)

  const mainImage = topics.find(item => item.id === Number(id)).mainImage

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
              <Typography variant="subtitle1" className={classes.indexArticleMargin}>
                <span className={classes.articleIndex}>INDICE: </span>
                { result.map(item => (
                  <li key={item}>
                    <Link
                      activeClass='active'
                      className={classes.linkStyles}
                      to={item}
                      offset={-64}
                    >
                      { item }
                    </Link>
                  </li>)
                )}
              </Typography>
            </Grid>
            <Grid item xs={12} md={9} align="center" className={classes.imageContainer}>
              <span>{ pathSection(title) }</span>
              <img
                src={mainImage}
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
