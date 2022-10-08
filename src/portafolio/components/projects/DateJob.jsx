import { Container, Typography } from "@mui/material";
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
    width: '360px !important',
    paddingLeft: '0 !important',
    display: 'flex !important',
    alignItems: 'right !important',
    '& h6': {
      textAlign: 'right',
    }
  }
});

export const DateJob = ({ startJob, endJob, settingLogo}) => {
  const classes = useStyles();

  return (
    <Container className={ classes.mainContainer }>
      <img src={settingLogo.logo} alt="bank" height={settingLogo.size} className={classes.logoStyles} />
      <Container sx={{
        alignItems: 'center',
        margin: 0,
        paddingRight: '12px !important'
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
            backgroundImage: "linear-gradient(to right, #066daa, #163243, #066daa)",
            flexGrow: 2
          }}
        />
        <Typography variant="h6" component="h6">
          { endJob }
        </Typography>
      </Container>
    </Container>
  )
}