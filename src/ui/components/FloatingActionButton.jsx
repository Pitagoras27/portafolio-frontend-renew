import UpIcon from '@mui/icons-material/KeyboardArrowUp';
import { Fab } from '@mui/material';
import { blue } from '@mui/material/colors';
import { makeStyles } from '@mui/styles';
import { useEffect, useRef, useState } from 'react';

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
  const fabEl = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  const useStyles = makeStyles({
    showFab: {
      visibility: isVisible ? 'visible' : 'hidden'
    }
  })

  const classes = useStyles();

  useEffect(() => {
    const handleScroll = () => {
      const distanceToTopFab = window.pageYOffset + fabEl.current.getBoundingClientRect().top;
      (distanceToTopFab > 1000) ? setIsVisible(true) : setIsVisible(false);
    }
    
    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [isVisible])
  
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
      ref={fabEl}
      className={classes.showFab}
    >
      <UpIcon />
    </Fab>
  );

}