import { Box } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { Link as LinkBlog, useLocation } from "react-router-dom";
import { Link } from "react-scroll";
import { useAnimatedStore } from '../../../hooks';

const useStyles = makeStyles({
  anchorBlog: {
    '& a': {
      color: '#fff',
      textDecoration: 'none'
    }
  }
})

export const NavigationDesk = ({ classes, pages }) => {
  const styles = useStyles();
  const location = useLocation();
  const { startAnimated } = useAnimatedStore();

  const handleAnimationByScroll = (section) => {
    setTimeout(() => { startAnimated(section) }, 600);
  }

  return (
    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
      {
        location.pathname === '/' && (
          pages.map(({page, section}) => (
            <Box
              key={page}
              className={classes}
            >
              <Link
                onClick={() => handleAnimationByScroll(section)}
                activeClass='active'
                to={section}
                spy={true}
                offset={-64}
                duration={1000}
              >
                {page}
              </Link>
            </Box>
          )
          )
        )
      }
      <Box className={`${classes} ${styles.anchorBlog}`}>
        <LinkBlog to='/blog'>Blog</LinkBlog>
      </Box>
    </Box>
  )
}