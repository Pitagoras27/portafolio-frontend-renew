import { Box, Button } from '@mui/material';
import { Link } from "react-scroll";

export const NavigationDesk = ({ classes, pages, handleCloseNavMenu }) => {
  return (
    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
      {pages.map(({page, section}) => (
        <Button
          key={page}
          onClick={handleCloseNavMenu}
          sx={{ my: 2, color: 'white', display: 'block', margin: '7px 0' }}
          className={classes}
        >
          <Link
            activeClass="active"
            to={section}
            spy={true}
            smooth={true}
            offset={-64}
            duration={500}
          >
            {page}
          </Link>
        </Button>
      ))}
    </Box>
  )
}