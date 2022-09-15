import { Box, Container, Typography } from '@mui/material';
import '../../../styles/notification.css';

export const Notification = ({ status }) => {
  return (
    <Container>
      <Box className={`screenAlert-icon screenAlert-${status} animate`}>
        {
          (status === 'success') ? (
            <>
              <Box className="screenAlert-line screenAlert-tip animateSuccessTip"></Box>
              <Box className="screenAlert-line screenAlert-long animateSuccessLong"></Box>
            </>
          ) : (
            <>
              <Box className="screenAlert-x-mark">
                <Box className="screenAlert-line screenAlert-left animateXLeft"></Box>
                <Box className="screenAlert-line screenAlert-right animateXRight"></Box>
              </Box>
            </>
          )
        }
        <Box className="screenAlert-placeholder"></Box>
        <Box className="screenAlert-fix"></Box>
      </Box>
      <Typography
        align='center'
        className="text-center"
        variant="h5"
        gutterBottom
      >
        {
          (status === 'fail') ? (
            'Your message don\'t have been sent'
          ) : (
            'Your message have been sent successfully.'
          )
        }
      </Typography>

      <Typography
        align='center'
        className="text-center font-weight-light"
        variant="subtitle1"
        gutterBottom
      >
        {
          (status === 'fail') ? (
            'Some error occurs, please try later'
          ) : (
            'I will be in contact with you soon!'
          )
        }
      </Typography>
    </Container>
  )
}