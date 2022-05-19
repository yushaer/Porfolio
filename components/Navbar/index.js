import { cloneElement, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Button, Typography, IconButton, AppBar, Toolbar, Menu, MenuItem, Box } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import styled from 'styled-components';
import Logo from '../Logo/'
function ElevationScroll(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    disableHysteresis: false,
    threshold: 0

  });

  return cloneElement(children, {
    color: trigger ? "primary" : "transparent",

  });
}


const NavBar = (props) => {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);
  function switchMode() {
    props.setMode(props.mode === 'light' ? 'dark' : 'light');
  }
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
  const pages = [
    { name: 'Blog', link: '/blog' },

  ]

  return (
    <>
      <AppBar elevation={0} color="primary">
        <Toolbar>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
          >
            <Link href={"/"}>
              <a>
                <Logo />
              </a>
            </Link>
            {/* <Image src="/logo.svg" width={64} height={64} /> */}
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
              {pages.map((page, idx) => (
                <MenuItem key={idx} onClick={handleCloseNavMenu}
                  sx={{ flexGrow: 1 }}>
                  <Link href={page.link}>

                    {page.name}

                  </Link>
                </MenuItem>
              ))}
              <MenuItem>
                <IconButton sx={{ ml: 1 }} onClick={switchMode} color="inherit">
                  {props.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
                </IconButton>
              </MenuItem>
            </Menu>
          </Box>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
          >
            <Logo />
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page, idx) => (
              <Link key={idx} href={page.link}  >
                <Button
                  key={page.name}
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: 'inherit', display: 'block' }}
                >
                  {page.name}
                </Button>
              </Link>
            ))}
            <IconButton sx={{ ml: 1 }} onClick={switchMode} color="inherit">
              {props.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      <Toolbar /></>
  )
}
export default NavBar;