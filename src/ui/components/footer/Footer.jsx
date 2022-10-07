import { Box, Container, Grid, Link, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import ornametFooter from "../../../assets/imgs/mycellaneous/ornamentFooter.svg";
import { getQuote } from "../../../helpers";
import { useFetch } from "../../../hooks";
import { Loader } from "../Loader";

const useStyles = makeStyles({
  quoteStyle: {
    display: 'flex',
    flexDirection: 'column',
    color: 'rgb(195, 221, 235)',
    '& blockquote': {
      position: 'relative',
      width: 'fit-content',
      margin: 'auto',
      paddingBottom: '20px'
    },
    '& span': {
      fontSize: 'initial',
      justifyContent: 'right',
      borderBottom: '1px solid #255a74',
    },
    
  },
  socialMedia: {
    fontSize: '40px',
    color: 'white !important',
    textDecoration: 'none !important',
    margin: '8px !important'
  },
  quote: {
    padding: '18px',
    paddingBottom: '14px',
    '& > span':{
      fontSize: '80px',
      position: 'absolute',
    },
  },
  initialQuote: {
    left: '-40px',
    bottom: '-50px'
  },
  endQuote: {
    top: '-10px',
    right: '-20px'
  }
});

export const Footer = () => {
  const classes = useStyles();
  const { loading, data } = useFetch();
  const { quotes } = data;

  return (
    <>
      <Box sx={{ position: 'relative' }}>
        <Box className="shape shape-bottom">
          <img src={ornametFooter} alt="Footer bg" />
        </Box>
      </Box>
      <Box sx={{
        background: 'linear-gradient( #19303b, #153347 20%, #1c4763 43%, #0079c0);',
        padding: '30px 0',
        width: '100%'
      }}>
        <Container maxWidth="lg">
          {
            loading 
              ? <Loader /> 
              : (
                <>
                  <Typography
                    variant="h6"
                    component="h1"
                    className={classes.quoteStyle}
                    align="center"
                  > 
                    <blockquote>
                      <em className={classes.quote}>
                        <span className={classes.initialQuote}>&ldquo;</span>
                        { getQuote(quotes).quote }
                        <span className={classes.endQuote}>&rdquo;</span>
                      </em>
                    </blockquote>
                    <span>{ getQuote(quotes).author }</span>
                  </Typography>
                </>
              )

          }

          <Grid
            container
            justifyContent="center"
            sx={{
              display: 'block',
              textAlign: 'center', 
              marginTop: '20px'
            }}
          >
            <Link className={classes.socialMedia} href='https://github.com/Pitagoras27/'>
              <i className='icon-github-icon'></i>
            </Link>
            <Link className={classes.socialMedia} href='https://www.linkedin.com/in/carlos-guti%C3%A9rrez-39ab891a6/'>
              <i className='icon-linkeding-icon'></i>
            </Link>
            <Link className={classes.socialMedia} href='https://www.freecodecamp.org/learn'>
              <i className='icon-freecodecamp-icon'></i>
            </Link>
          </Grid>
        </Container>
      </Box>
    </>
  )
}