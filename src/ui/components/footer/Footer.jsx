import { Box, Container, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import ornametFooter from "../../../assets/imgs/mycellaneous/ornamentFooter.svg";
import { getQuote } from "../../../helpers";
import { useFetch } from "../../../hooks";
import { Loader } from "../Loader";

const useStyles = makeStyles({
  quoteStyle: {
    display: 'flex',
    flexDirection: 'column',
    textStyle: 'italic',
    color: 'rgb(195, 221, 235)',
      '& span': {
        fontSize: 'initial',
        justifyContent: 'right'
      }
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
        background: 'linear-gradient( #1c3643, #273b47 25%, #1e5372);',
        paddingTop: '30px',
        paddingBottom: '50px',
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
        </Container>
      </Box>
    </>
  )
}