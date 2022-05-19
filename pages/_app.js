import { useMemo, useState } from 'react'
import useMediaQuery from '@mui/material/useMediaQuery';
import styled, { ThemeProvider } from 'styled-components';
import { createTheme, ThemeProvider as MuiThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Navbar from '../components/Navbar'
import '../components/style.css'
import { amber, deepOrange, grey } from '@mui/material/colors';
function MyApp({ Component, pageProps }) {
  const [mode, setMode] = useState('light')
  function test(value) {
    setMode(value);
  }
  const theme = useMemo(() =>
    createTheme({
      palette: {



        neutral: {
          main: '#D3D0CB',
          dark: '#393e41',
          contrastText: '#fff',
        },
        mode: mode,
        ...mode === 'light' ? {
          background: {
            default: '#f3f2ef',
            skills: '#ffffff'

          },
        } : {
          background: {

            skills: '#1b1b1b'

          }
        }

      },
    }),
    [mode],
  );
  return (

    <MuiThemeProvider theme={theme}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Navbar setMode={setMode} mode={mode} />
        <Component {...pageProps} setMode={setMode} mode={mode} />
      </ThemeProvider>
    </MuiThemeProvider>

  )
}

export default MyApp
