import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import logo from '../assets/logo.png'
import { Link, useLocation } from 'react-router-dom'

const pages = [

  {
    label: 'Tarefas',
    href: '/Task'
  },

];

const settings = [

  {
    label: 'Profile',
    href: '/Profile'
  },
  {
    label: 'Logout',
    href: '/Login'
  },
];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [showAppBar, setShowAppBar] = React.useState(true);
  const location = useLocation();
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
  React.useEffect(()=>{
    const isShowAppBar = !['/login', '/register'].includes(location.pathname?.toLowerCase())
    setShowAppBar(isShowAppBar)
  },[location])
  return (
  <>
    {showAppBar?
      <AppBar position="fixed" style={{ marginBottom: 60, minWidth: '100vw', top: 0, width: '100%' }}>
        <Container style={{ backgroundColor: '#000', maxWidth: '100%' }}>
          <Toolbar disableGutters>
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/"

              sx={{
                mr: 2,
                display: { xs: 'none', md: 'flex' },
                textDecoration: 'none',
              }}
            >
              <img style={{ width: 120 }} src={logo} />
            </Typography>

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
                id="menu-appbar-mobile"
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
                sx={{ display: { xs: 'block', md: 'none' } }}
              >
                {pages.map((page) => (
                  <MenuItem key={page.label} onClick={handleCloseNavMenu} style={{backgroundColor: '#000'}}>
                    <Link to={page.href} style={{ textDecoration: 'none', color: '#fff', fontFamily: "Oswald", backgroundColor: '#000' }}>{page.label}</Link>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
            <Typography
              variant="h5"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                display: { xs: 'flex', md: 'none' },
                flexGrow: 1,
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
              <img style={{ width: 120 }} src={logo} />
            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
              {pages.map((page) => (
                <Link to={page.href} style={{ textDecoration: 'none', color: '#fff', fontFamily: "Oswald" }}>
                  <Button
                    key={page.label}
                    onClick={handleCloseNavMenu}
                    sx={{ my: 2, color: '#fff', display: 'block' }}
                  >
                    {page.label}
                  </Button>
                </Link>
              ))}
            </Box>
            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: '45px' }}
                id="menu-appbar-desktop"
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
                  <Link to={setting.href} style={{ textDecoration: 'none', color: '#000', fontFamily: "Oswald" }}>
                  <MenuItem key={setting.label} onClick={handleCloseUserMenu}>
                    <Typography sx={{ textAlign: 'center' }}>{setting.label}</Typography>
                  </MenuItem>
                  </Link>
                ))}
              </Menu>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>:
    null}
  </>
  );

}
export default ResponsiveAppBar;