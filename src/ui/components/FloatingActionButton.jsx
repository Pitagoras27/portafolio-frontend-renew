import UpIcon from '@mui/icons-material/KeyboardArrowUp';
import { Fab } from '@mui/material';
import { blue } from '@mui/material/colors';


const fabStyle = {
  position: 'fixed',
  bottom: 26,
  right: 26,
};

const fabGreenStyle = {
  color: 'common.white',
  bgcolor: blue[500],
  '&:hover': {
    bgcolor: blue[600],
  },
};

export const FloatingActionButton = () => {
  const toTop = () => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: "smooth"
    })
  }

  return (
    <Fab
      sx={{ ...fabStyle, ...fabGreenStyle }}
      aria-label="Expand"
      color="inherit"
      onClick={toTop}
    >
      <UpIcon />
    </Fab>
  );
}