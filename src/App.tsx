import { CssBaseline, ThemeProvider } from '@mui/material';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import { NavBar } from './components';
import { ColorModeContext, useMode } from './utils';
import { Welcome } from './views';

function App() {
  const { theme, colorMode } = useMode();

  return (
    <>
      <ColorModeContext.Provider value={colorMode}>
        <ThemeProvider theme={theme}>
          <BrowserRouter>
            <CssBaseline />
            <NavBar />
            <Welcome />
          </BrowserRouter>
        </ThemeProvider>
      </ColorModeContext.Provider>
    </>
  );
}

export default App;
