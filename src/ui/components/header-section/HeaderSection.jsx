import { Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  marginHeaders: {
    paddingTop: '40px',
    paddingBottom: '10px',
    color: 'rgb(43, 93, 115)',
    textTransform: 'uppercase',
  }
})

export const HeaderSection = ({ headerTitle, idScroll }) => {
  const classes = useStyles();
  return (
    <Typography
      gutterBottom
      variant="h3"
      align="center"
      className={classes.marginHeaders}
      id={ idScroll }
    >
        { headerTitle }
    </Typography>
  )
}