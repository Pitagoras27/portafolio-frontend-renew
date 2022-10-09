import { Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
    marginHeaders: {
      paddingTop: '40px',
      paddingBottom: '10px',
      color: 'rgb(43, 93, 115)',
      textTransform: 'uppercase',
      [theme.breakpoints.up('xs')]:{
        fontSize: '2.2rem !important'
      },
      [theme.breakpoints.up('md')]:{
        fontSize: '2.6rem !important'
      },
    }
  })
)

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