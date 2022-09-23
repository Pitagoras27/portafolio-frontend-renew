import { Box } from '@mui/material';
import { Link } from "react-scroll";
import { useAnimatedStore } from '../../../hooks';

export const NavigationDesk = ({ classes, pages }) => {
  const { startAnimated } = useAnimatedStore();
  const handleAnimationByScroll = (section) => {
    setTimeout(() => { startAnimated(section) }, 400);
  }

  return (
    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
      {pages.map(({page, section}) => (
        <Box
          key={page}
          sx={{ my: 2, color: 'white', display: 'block', margin: '7px 0' }}
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
      ))}
    </Box>
  )
}