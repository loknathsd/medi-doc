
import './App.css';
import Sidebar from './components/Sidebar/Sidebar';
import {  ThemeProvider, createTheme } from '@mui/material/styles';
import { createContext, useMemo, useState } from 'react';



const ColorModeContext = createContext({ toggleColorMode: () => {} });


function App() {

  const [mode, setMode] = useState('light');
  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
      },
    }),
    [],
  );

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
          
        },
      }),
    [mode],
  );
  return (
  
      <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <Sidebar  color ={colorMode}></Sidebar>
      </ThemeProvider>
    </ColorModeContext.Provider>
     
    
  );
}

export default App;
