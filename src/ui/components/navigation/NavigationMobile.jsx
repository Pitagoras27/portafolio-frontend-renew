import MenuIcon from '@mui/icons-material/Menu';
import {
  Box,
  IconButton,
  Menu, MenuItem,
  Typography
} from '@mui/material';
import { Link } from "react-scroll";

export const NavigationMobile = ({
  pages,
  classes,
  anchorElNav,
  handleOpenNavMenu,
  handleCloseNavMenu
}) => {
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
        {pages.map(({page, section}) => (
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
        ))}
      </Menu>
    </Box>
  )
}