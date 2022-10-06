import {
  AppBar, Container, Toolbar
} from '@mui/material';
import { makeStyles } from '@mui/styles';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { pages } from '../../../data';
import { useAuthStore, useDetectDevice } from '../../../hooks';
import { Brand } from './Brand';
import { NavigationDesk } from './NavigationDesk';
import { NavigationMobile } from './NavigationMobile';
import { NavigationSettingUser } from './NavigationSettingUser';

const useStyles = makeStyles({
  backgroundAppBar: {
    background: 'linear-gradient( #19303b, #153347 40%, #1c4763 48%, #0079C0)'
  },
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
      display: 'block !important',
      cursor: 'pointer',
    }
  },
  extraLink: {
    color: '#FFF',
    '& a': {
      color: '#FFF',
      textDecoration: 'none'
    }
  },
  extraLinkMobile: {
    '& a' :{
      color: 'black',
      textDecoration: 'none',
      padding: '0px 10px',
      marginTop: '5px',
      display: 'block'
    }
  }
});

export const NavigationBar = () => {
  const classes = useStyles();
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);
  const isMobile = useDetectDevice();
  const { user, status, startLogout }= useAuthStore();
  const navigate = useNavigate();

  const handleOpenNavMenu = event => setAnchorElNav(event.currentTarget);

  const handleOpenUserMenu = event => setAnchorElUser(event.currentTarget);

  const handleCloseNavMenu = () => setAnchorElNav(null);
  
  const handleCloseUserMenu = () => setAnchorElUser(null);

  const handleCloseSession = () => {
    startLogout();
    setAnchorElUser(null);
    navigate('/auth/login');
  }

  return (
    <AppBar
      position="fixed"
      id="initial"
      className={classes.backgroundAppBar}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>

          { !isMobile ? (
              <>
                <Brand mobileDisplay="none" deskDisplay="flex" />
                <NavigationDesk
                  classes={classes}
                  pages={pages}
                />
              </>
            ) : (
              <>
                <NavigationMobile
                  pages={pages}
                  classes={classes}
                  anchorElNav={anchorElNav}
                  handleOpenNavMenu={handleOpenNavMenu}
                  handleCloseNavMenu={handleCloseNavMenu}                  
                  />
              </>
            )
          }

          <NavigationSettingUser
            status={status}
            user={user}
            handleOpenUserMenu={handleOpenUserMenu}
            anchorElUser={anchorElUser}
            handleCloseUserMenu={handleCloseUserMenu}
            handleCloseSession={handleCloseSession}
            extraLinkStyle={classes.extraLink}
          />
        </Toolbar>
      </Container>
    </AppBar>
  );
};
