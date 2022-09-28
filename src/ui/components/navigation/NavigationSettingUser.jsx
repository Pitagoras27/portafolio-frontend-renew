import { Box, IconButton, Menu, MenuItem, Tooltip, Typography } from "@mui/material";
import { Link } from 'react-router-dom';
import { settings } from '../../../data';

export const NavigationSettingUser = ({
  status,
  user,
  handleOpenUserMenu,
  anchorElUser,
  handleCloseUserMenu,
  handleCloseSession,
  extraLinkStyle
}) => {
  const [ login, logout ] = settings;

  return (
    <Box sx={{ flexGrow: 0 }}>
      <Tooltip title="Open settings">
        <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
          <Typography variant='h6' component='h6' className={extraLinkStyle}>
          { status === 'authenticated'
              ? `Hi! ${user.name}`
              : <Link  to='/auth/login'>{ login }</Link>
          }
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
        <MenuItem onClick={handleCloseSession}>
          <Typography textAlign="center">{ logout }</Typography>
        </MenuItem>
      </Menu>
    </Box>
  )
}