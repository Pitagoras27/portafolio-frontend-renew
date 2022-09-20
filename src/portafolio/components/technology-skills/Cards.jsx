import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia, Typography
} from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  lift: {
    '-webkit-transition': 'box-shadow .25s ease,-webkit-transform .25s ease',
    
    transition: 'box-shadow .25s ease, transform .25s ease',
    '&:hover': {
      '-webkitTransform': 'translate3d(0,-3px,0)',
      transform: 'translate3d(0,-4px,0)'
    }
  }
})
export const Cards = ({ title, text, image }) => {
  const classes = useStyles();

  // animate__animated animate__pulse
  return (
    <Card sx={{ maxWidth: 345 }} className={classes.lift}>
      <CardMedia
        component="img"
        alt={title}
        height="140"
        image={image}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          { title }
        </Typography>
        <Typography variant="body2" color="text.secondary">
          { text }
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  )
}