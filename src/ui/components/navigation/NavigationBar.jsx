import {
  AppBar,
  Avatar, Box,
  Container,
  IconButton,
  Menu, MenuItem,
  Toolbar,
  Tooltip,
  Typography
} from '@mui/material';
import { makeStyles } from '@mui/styles';
import { useState } from 'react';
import useDeviceDetect from '../../../hooks/useDetectDevice';
import { Brand } from './Brand';
import { NavigationDesk } from './NavigationDesk';
import { NavigationMobile } from './NavigationMobile';

const useStyles = makeStyles({
  pAll: {
    padding: '0 !important',
    justifyContent: 'left',
    textAlign: 'left',
    '& p': {
      padding: '5px 10px',
      width: '100%',
      textAlign: 'left',
      '& a': {
        display: 'block'
      },
    },
    '& span': {
      width: '100%'
    },
    '& > a': {
      padding: '8px 10px',
      display: 'block !important'
    }
  }
});

const pages = [
  { page: 'Skills', section: 'skills' },
  { page: 'About of me', section: 'about' },
  { page: 'Contact', section: 'contact' },
  { page: 'Proyects', section: 'proyects' },
  { page: 'Curriculum', section: '#' }
];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

export const NavigationBar = () => {
  const classes = useStyles();
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);
  const isMobile = useDeviceDetect();

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar
      position="fixed"
      sx={{
        background: 'linear-gradient( #1c3643, #273b47 25%, #1e5372)',
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>

          { !isMobile && (
              <>
                <Brand mobileDisplay="none" deskDisplay="flex" />
                <NavigationDesk
                  classes={classes.pAll}
                  pages={pages}
                  handleCloseNavMenu={handleCloseNavMenu} 
                />
              </>
            )
          }

          { isMobile && (
              <>
                <Brand mobileDisplay="flex" deskDisplay="none" deviceAligment={1} />
                <NavigationMobile
                  pages={pages}
                  classes={classes.pAll}
                  anchorElNav={anchorElNav}
                  handleOpenNavMenu={handleOpenNavMenu}
                  handleCloseNavMenu={handleCloseNavMenu}
                />
              </>
            )
          }

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src={`/assets/imgs/avatar/identicon.png`} /> {/* // todo: Load this avatar image dinamicaly */ }
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
