import { Box, Button, Container, createTheme, CssBaseline, Divider, IconButton, Link, } from '@mui/material'
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { ThemeProvider } from '@emotion/react';
import { useState } from 'react';
import Header from './components/Header';
import Experience from './components/Experience';


const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

const lightTheme = createTheme({
  palette: {
    mode: 'light',
  },
});

function App() {
  const [darkMode, setDarkMode] = useState<boolean>(true);

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <CssBaseline />
      <Container maxWidth='sm'>
        <Box sx={{ width: '100%', display: 'flex', justifyContent: 'space-between' }}>
          <Box>
            <Link color='inherit' underline='none' href='#' component={Button}>Experience</Link>
            <Link color='inherit' underline='none' href='#' component={Button}>Projects</Link>
          </Box>
          <Box>
            <IconButton onClick={() => setDarkMode(!darkMode)}>{darkMode ? <LightModeIcon /> : <DarkModeIcon />}</IconButton>
          </Box>
        </Box>
      </Container>
      <Container maxWidth="sm" sx={{ marginTop: '50px' }}>
        <Box height='90vh' display='flex' alignItems='center'>
          <Box>
            {Header()}
          </Box>
        </Box>
        <Divider sx={{ margin: '20px 0px' }} />
        {Experience()}
        <Divider sx={{ margin: '20px 0px' }} />
      </Container>
    </ThemeProvider >
  )
}

export default App
