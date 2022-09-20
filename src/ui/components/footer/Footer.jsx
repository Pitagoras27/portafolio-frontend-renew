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
      '& span': {
        fontSize: 'initial',
        justifyContent: 'right'
      }
  },
  socialMedia: {
    fontSize: '40px',
    color: 'white !important',
    textDecoration: 'none !important',
    margin: '8px !important'
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
                    <em>&ldquo;{ getQuote(quotes).quote }&rdquo;</em>
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
            <Link className={classes.socialMedia} href='https://github.com/Pitagoras27/'>
              <i className='icon-linkeding-icon'></i>
            </Link>
            <Link className={classes.socialMedia} href='https://github.com/Pitagoras27/'>
              <i className='icon-freecodecamp-icon'></i>
            </Link>
          </Grid>
        </Container>
      </Box>
    </>
  )
}