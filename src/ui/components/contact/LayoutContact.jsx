import { Typography } from '@mui/material';
import { Notification } from '../../';
import { useContactStore } from '../../../hooks';

export const LayoutContact = ({ children, mainTitle, subtitle }) => {
  const { status } = useContactStore();
  return (
    <>
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
                { mainTitle }
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
              { subtitle.map(text => <span key={text}>{text}</span>) }
            </Typography>
            { children }
          </>
        )
      }
    </>
  )
}