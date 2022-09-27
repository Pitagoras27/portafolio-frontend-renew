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
    '& img': {
      backgroundPosition: 'right',
      width: '60% !important',
      height: '60px'
    },
    '&:hover': {
      '-webkitTransform': 'translate3d(0,-3px,0)',
      transform: 'translate3d(0,-4px,0)'
    }
  }
})
export const TopicCard = ({ title, text, image }) => {
  const classes = useStyles();

  return (
    <Card sx={{ maxWidth: 345 }} className={classes.lift}>
      <CardMedia
        component="img"
        alt={title}
        height="60px"
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
