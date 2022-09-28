import { Box } from '@mui/material';
import { Link as LinkBlog, useLocation } from "react-router-dom";
import { Link } from "react-scroll";
import { useAnimatedStore } from '../../../hooks';

export const NavigationDesk = ({ classes, pages }) => {
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
              className={classes.pAll}
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
          ))
        )
      }
      <Box className={`${classes.pAll} ${classes.extraLink}`}>
        <LinkBlog to='/blog'>Blog</LinkBlog>
      </Box>
    </Box>
  )
}