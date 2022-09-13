import { Box, Button, Container, Paper } from '@mui/material';
import { makeStyles } from '@mui/styles';


const useStyles = makeStyles({
  heading: {
    color: 'red',
  },
  checkButton: {
    color: 'red',
  },
  filters: {
    filter: 'hue-rotate(90deg)'
    
  }
});

const styleBox = {
  marginTop: 'auto',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  flexWrap: 'wrap',
  height: 500,
  '& > :not(style)': {
    m: 1,
    width: 428,
  },
}

const stylePaper = (image) => ({
  backgroundImage: `url(${image})`,
  backgroundSize: 'cover',
  height: '500px',
  backgroundPosition: '0% 100%'
})

export const CarouselItem = ({ item, image, handleOpen }) => {
  const classes = useStyles();
  return (
    <Paper
      style={stylePaper(image)}
      className={`${classes.filters} ${classes.container}`}
      elevation={12}
    >
      <Container maxWidth="xl" >
        <Box
          sx={styleBox}
        >
          <h2 className={ classes.heading }>{ item.name }</h2>
          <p>{item.description}</p>

          <Button
            className={ classes.checkButton }
            onClick={() => handleOpen(true)}
          > Check it out! </Button>
        </Box>
      </Container>
    </Paper>
  )
}