import {
  AppBar, Box,
  Container,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Tooltip,
  Typography
} from '@mui/material';
import { makeStyles } from '@mui/styles';
import { useState } from 'react';
import { pages, settings } from '../../../data';
import { useAuthStore, useDetectDevice } from '../../../hooks';
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

export const NavigationBar = () => {
  const classes = useStyles();
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);
  const isMobile = useDetectDevice();
  const { user, startLogout }= useAuthStore();

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
    startLogout();
    // setAnchorElUser(null);
  };

  return (
    <AppBar
      position="fixed"
      id="initial"
      sx={{
        background: 'linear-gradient( #19303b, #153347 40%, #1c4763 48%, #0079C0)',
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>

          { !isMobile ? (
              <>
                <Brand mobileDisplay="none" deskDisplay="flex" />
                <NavigationDesk
                  classes={classes.pAll}
                  pages={pages}
                />
              </>
            ) : (
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
                <Typography variant='h6' component='h6' sx={{ color: 'white' }}>
                  {`Hi! ${user.name}`}
                </Typography>
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
              <MenuItem onClick={handleCloseUserMenu}>
                <Typography textAlign="center">{settings}</Typography>
              </MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
