import { Container, Grid, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  mainContainer: {
    paddingLeft: '0 !important',
    paddingRight: '12px !important',
    marginBottom: '20px', 
  },
  logoStyles: {
    padding: '21px 0 0'
  },
  dateContainer: {
    paddingLeft: '0 !important',
    display: 'flex !important',
    alignItems: 'center',
    margin: 0,
    '& h6': {
      textAlign: 'right',
    },
    '& hr': {
      width: '80px',
      height: '1px',
      border: 0,
      backgroundImage: "linear-gradient(to right, #066daa, #163243, #066daa)",
      flexGrow: 2
    }
  }
});

export const DateJob = ({ startJob, endJob, settingLogo}) => {
  const classes = useStyles();

  return (
    <Container className={ classes.mainContainer }>
      <img src={settingLogo.logo} alt="bank" height={settingLogo.size} className={classes.logoStyles} />
      <Grid container>
        <Grid
          item
          className={ classes.dateContainer }
          xs={12}
          md={4}
        >
          <Typography variant="h6" component="h6">
            { startJob }
          </Typography>
          <hr />
          <Typography variant="h6" component="h6">
            { endJob }
          </Typography>
        </Grid>
      </Grid>

    </Container>
  )
}