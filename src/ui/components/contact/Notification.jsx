import { Typography } from '@mui/material';
import '../../../styles/notification.css';

export const Notification = ({ status }) => {
  return (
    <div className='container'>
      <div className={`screenAlert-icon screenAlert-${status} animate`}>
        {
          (status === 'success') ? (
            <>
              <span className="screenAlert-line screenAlert-tip animateSuccessTip"></span>
              <span className="screenAlert-line screenAlert-long animateSuccessLong"></span>
            </>
          ) : (
            <>
              <span className="screenAlert-x-mark">
                <span className="screenAlert-line screenAlert-left animateXLeft"></span>
                <span className="screenAlert-line screenAlert-right animateXRight"></span>
              </span>
            </>
          )
        }
        <div className="screenAlert-placeholder"></div>
        <div className="screenAlert-fix"></div>
      </div>
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
            'I will be in contact soon.'
          )
        }
      </Typography>
    </div>
  )
}