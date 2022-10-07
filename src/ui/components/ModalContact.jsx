import { Backdrop, Box, Fade, Modal, Typography, useMediaQuery } from '@mui/material';
import { Contact, LayoutContact } from '../';
import { useAuthStore } from '../../hooks/useAuthStore';
import { Divider } from '../../ui';

const style = (deviceMedia) => ({
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: deviceMedia ? 500 : '100%',
  bgcolor: '#f1f6f9',
  border: '2px solid #000',
  boxShadow:524,
  p: 4,
  '&:hr': {
    height: '10px'
  }
})

export function ModalContact({ open, handleClose }) {
  const matches = useMediaQuery('(min-width:600px)');
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
          <Box sx={style(matches)}>
            <Typography id="transition-modal-title" variant="h6" component="h6">
              {
                user.name ? `Hi ${ user.name }!` : 'Contact' 
              }
            </Typography>

            <Divider />

            <LayoutContact 
              mainTitle='Write a Message' 
              subtitle={['I appreciate your interest in me.', <br/>, 'How can I help you?']}
            >
              <Contact />
            </LayoutContact>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}