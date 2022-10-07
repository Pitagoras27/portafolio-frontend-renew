import { Box, Button, Container, Paper, useMediaQuery } from '@mui/material';
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

const styleBox = (deviceMedia) => ({
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
      color: '#ffffff',
      float: 'right',
      marginRight: '20px'
    }
  },
  '& > :not(style)': {
    m: 1,
    width: deviceMedia ? 428 : '100%',
    marginTop: '-30px'
  }
})

const stylePaper = (image, type) => ({
  color: `${(type === 1) ? '#2b5d73' : '#c3ddeb'}`,
  backgroundImage: `url(${image})`,
  backgroundSize: 'cover',
  height: '500px',
  backgroundPosition: '0% 100%'
})

export const CarouselItem = ({ item, image, handleOpen, type }) => {
  const matches = useMediaQuery('(min-width:600px)');
  const classes = useStyles();
  return (
    <Paper
      style={stylePaper(image, type)}
      className={`${classes.filters} ${classes.container} ${classes.overlay}`}
      elevation={12}
    >
      <Container maxWidth="xl">
        <Box
          sx={styleBox(matches)}
        > 
          <div className={ classes.fontColor }>
            <h1>{ item.name }</h1>
            <p>{item.description}</p>

            <Button
              className={ classes.checkButton }
              onClick={() => handleOpen(true)}
              color="secondary"
              variant="contained"
            > Get in touch! </Button>
          </div>
        </Box>
      </Container>
    </Paper>
  )
}
