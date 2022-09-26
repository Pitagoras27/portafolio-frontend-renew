import MenuIcon from '@mui/icons-material/Menu';
import {
  Box,
  IconButton,
  Menu, MenuItem,
  Typography
} from '@mui/material';
import { makeStyles } from '@mui/styles';
import { Link as LinkBlog, useLocation } from "react-router-dom";
import { Link } from "react-scroll";

const useStyles = makeStyles({
  anchorBlog: {
    '& a': {
      color: '#000',
      textDecoration: 'none'
    }
  }
})

export const NavigationMobile = ({
  pages,
  classes,
  anchorElNav,
  handleOpenNavMenu,
  handleCloseNavMenu
}) => {
  const styles = useStyles();
  const location = useLocation();


  return (
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
                className={classes}
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
        <Box className={`${classes} ${styles.anchorBlog}`}>
          <LinkBlog to='/blog'>Blog</LinkBlog>
        </Box>
      </Menu>
    </Box>
  )
}