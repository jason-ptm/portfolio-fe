import { CssBaseline, ThemeProvider } from '@mui/material';
import './App.css';
import { NavBar } from './components';
import { ColorModeContext, useMode } from './utils/theme';
import { BrowserRouter } from 'react-router-dom';

function App() {
  const { theme, colorMode } = useMode();

  return (
    <>
      <ColorModeContext.Provider value={colorMode}>
        <ThemeProvider theme={theme}>
          <BrowserRouter>
            <CssBaseline />
            <NavBar />
          </BrowserRouter>
        </ThemeProvider>
      </ColorModeContext.Provider>
    </>
  );
}

export default App;
