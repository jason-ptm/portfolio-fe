import { CssBaseline, ThemeProvider } from '@mui/material';
import { Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import { NavBar, Tools } from './components';
import { ColorModeContext, useMode } from './utils';
import './utils/TraductionsService';
import { AboutMe, Projects, Resume, Welcome } from './views';

function App() {
  const { theme, colorMode } = useMode();

  return (
    <>
      <Suspense fallback="loading">
        <ColorModeContext.Provider value={colorMode}>
          <ThemeProvider theme={theme}>
            <BrowserRouter>
              <CssBaseline />
              <Tools />
              <NavBar />
              <Welcome />
              <AboutMe />
              <Resume />
              <Projects />
            </BrowserRouter>
          </ThemeProvider>
        </ColorModeContext.Provider>
      </Suspense>
    </>
  );
}

export default App;
