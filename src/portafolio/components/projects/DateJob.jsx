import { Container, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  mainContainer: {
    paddingLeft: '0 !important',
    marginBottom: '20px' 
  },
  logoStyles: {
    padding: '21px 0 0'
  },
  dateContainer: {
    width: '380px !important',
    paddingLeft: '0 !important',
    display: 'flex !important',
    alignItems: 'right !important',
    // margin: 0
  }
});

export const DateJob = ({ startJob, endJob, settingLogo}) => {
  const classes = useStyles();

  return (
    <Container className={ classes.mainContainer }>
      <img src={settingLogo.logo} alt="bank" height={settingLogo.size} className={classes.logoStyles} />
      <Container sx={{
        alignItems: 'center',
        margin: 0
      }}
      className={ classes.dateContainer }
      >
        <Typography variant="h6" component="h6">
          { startJob }
        </Typography>
        <hr 
          style={{
            width: '80px',
            height: '1px',
            border: 0,
            backgroundImage: "linear-gradient(to right, #066daa, #163243, #066daa)"
          }}
        />
        <Typography variant="h6" component="h6">
          { endJob }
        </Typography>
      </Container>
    </Container>
  )
}