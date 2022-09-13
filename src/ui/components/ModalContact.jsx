import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Fade from '@mui/material/Fade';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  hrStyle: {
    border: 0,
    height: '1px',
    backgroundImage: 'linear-gradient(to right, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0))'
  }
});

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: '#f1f6f9',
  border: '2px solid #000',
  boxShadow:524,
  p: 3,
  '&:hr': {
    height: '10px'
  }
}



export function ModalContact({ open, handleClose }) {
  const classes = useStyles();
  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <Typography id="transition-modal-title" variant="h6" component="h6">
              Contacto
            </Typography>
            <hr className={classes.hrStyle}/>
            <Typography
              id="transition-modal-description"
              variant="h5"
              sx={{ mt: 2, textAlign: 'center' }}>
                Write a Message
            </Typography>
            <Typography
              variant="body1"
              display="block"
              align="center"
              gutterBottom
              sx={{
                lineHeight: '20px', marginTop: '15px'
              }}
            >
              Gracias por tomarte el tiempo de comunicarte.
              ¿Cómo puedo ayudarte?
            </Typography>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}