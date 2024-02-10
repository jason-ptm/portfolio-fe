import { CssBaseline, ThemeProvider } from '@mui/material';
import { Suspense } from 'react';
import './App.css';
import { NavBar, Tools } from './components';
import { ColorModeContext, useMode } from './utils';
import './utils/TraductionsService';
import { AboutMe, Footer, Projects, Resume, Welcome } from './views';

function App() {
  const { theme, colorMode } = useMode();

  return (
    <>
      <Suspense fallback="loading">
        <ColorModeContext.Provider value={colorMode}>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <Tools />
            <NavBar />
            <Welcome />
            <AboutMe />
            <Resume />
            <Projects />
            <Footer />
          </ThemeProvider>
        </ColorModeContext.Provider>
      </Suspense>
    </>
  );
}

export default App;
