import { Box, Button, Container, Paper } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  overlay: {
    '&::before': {
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      position: 'absolute',
      backgroundColor: 'rgba(0, 0, 0, .5)',
    },
    '&:hover': {
      filter: 'contrast(1.1)'
    }
  }
});

const styleBox = {
  marginTop: 'auto',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  flexWrap: 'wrap',
  height: 500,
  '& > div': {
    // backgroundColor: 'rgba(231, 239, 243, 0.5)',
    padding: '20px',
    borderRadius: '10px 10px',
    '& button': {
      alignItems: 'flexStart',
      paddingTop: '8px',
      color: '#f5f7f9',
      backgroundColor: '#1e5372',
      float: 'right',
      marginRight: '20px'
    }
  },
  '& > :not(style)': {
    m: 1,
    width: 428,
    marginTop: '-30PX'
  }
}

const stylePaper = (image, type) => ({
  color: `${(type === 1) ? '#2b5d73' : '#c3ddeb'}`,
  backgroundImage: `url(${image})`,
  backgroundSize: 'cover',
  height: '500px',
  backgroundPosition: '0% 100%'
})

export const CarouselItem = ({ item, image, handleOpen, type }) => {
  const classes = useStyles();
  return (
    <Paper
      style={stylePaper(image, type)}
      className={`${classes.filters} ${classes.container} ${classes.overlay}`}
      elevation={12}
    >
      <Container maxWidth="xl">
        <Box
          sx={styleBox}
        > 
          <div className={ classes.fontColor }>
            <h1>{ item.name }</h1>
            <p>{item.description}</p>

            <Button
              className={ classes.checkButton }
              onClick={() => handleOpen(true)}
              // variant="outlined"
              variant="contained"
            > Check it out! </Button>
          </div>
        </Box>
      </Container>
    </Paper>
  )
}
