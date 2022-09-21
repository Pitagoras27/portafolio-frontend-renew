import { Backdrop, Box, Fade, Modal, Typography } from '@mui/material';
import { Contact, Notification } from '../';
import { useContactStore } from '../../hooks';
import { useAuthStore } from '../../hooks/useAuthStore';
import { Divider } from '../../ui';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 500,
  bgcolor: '#f1f6f9',
  border: '2px solid #000',
  boxShadow:524,
  p: 4,
  '&:hr': {
    height: '10px'
  }
}

export function ModalContact({ open, handleClose }) {
  const { status } = useContactStore();
  
  const { user } = useAuthStore();
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
              Hi { user.name }
            </Typography>

            <Divider />

            {
              (status === 'success' || status === 'fail') ? 
              (
                <Notification status={status} />
              ) : (
                <>
                  <Typography
                    id="transition-modal-description"
                    variant="h5"
                    sx={{ mt: 2, textAlign: 'center', color: '#004b6e', fontWeight: 700 }}>
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
                    Gracias por tomarte el tiempo de comunicarte conmigo<br />
                    ¿Cómo puedo ayudarte?
                  </Typography>
                  <Contact />
                </>
              )
            }
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}