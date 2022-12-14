import MenuIcon from '@mui/icons-material/Menu';
import {
  Box,
  IconButton,
  Menu, MenuItem,
  Typography
} from '@mui/material';
import { Link as LinkBlog, useLocation } from "react-router-dom";
import { Link } from "react-scroll";
import { Brand } from './Brand';


export const NavigationMobile = ({
  pages,
  classes,
  anchorElNav,
  handleOpenNavMenu,
  handleCloseNavMenu
}) => {
  const location = useLocation();

  return (
    <>
      <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="menu-appbar"
          aria-haspopup="true"
          onClick={handleOpenNavMenu}
          color="inherit"
        >
          <MenuIcon />
        </IconButton>
        <Menu
          id="menu-appbar"
          anchorEl={anchorElNav}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
          }}
          keepMounted
          transformOrigin={{
            vertical: 'top',
            horizontal: 'left',
          }}
          open={Boolean(anchorElNav)}
          onClose={handleCloseNavMenu}
          sx={{
            display: { xs: 'block', md: 'none' },
          }}
        >
          {
            location.pathname === '/' && (
              pages.map(({page, section}) => (
                <MenuItem
                  key={page}
                  onClick={handleCloseNavMenu}
                  className={classes.pAll}
                >
                  <Typography textAlign="center">
                  <Link
                    activeClass="active"
                    to={section}
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                  >
                    {page}
                  </Link>
                  </Typography>
                </MenuItem>
              ))
            )
          }
          <Box className={`${classes.extraLinkMobile}`}>
            <LinkBlog to='/blog'>Blog</LinkBlog>
          </Box>
        </Menu>
      </Box>
      <Brand mobileDisplay="flex" deskDisplay="none" deviceAligment={1} />
    </>
  )
}