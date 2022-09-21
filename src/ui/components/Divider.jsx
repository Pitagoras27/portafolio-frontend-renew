import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  hrStyle: {
    border: 0,
    height: '1px',
    backgroundImage: 'linear-gradient(to right, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0))'
  }
});

export const Divider = () => {
  const classes = useStyles();

  return (
    <hr className={classes.hrStyle}/>
  )
}