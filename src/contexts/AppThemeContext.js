import { createContext, useMemo, useState } from "react";
import { createTheme } from '@mui/material/styles';

export const AppThemeContext = createContext()

const AppThemeContextProvider = (props) => {

  const fromLS = localStorage.getItem(process.env.REACT_APP_LS_KEY_COLOR)
  const [mode, setMode] = useState(fromLS !== null ? fromLS : 'light')

  const colorMode = useMemo(() => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'))
        localStorage.setItem(process.env.REACT_APP_LS_KEY_COLOR, mode === 'light' ? 'dark' : 'light')
      }
    }), 
    [mode]
  )

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
    <AppThemeContext.Provider value={{ colorMode, theme, mode }}>
      {props.children}
    </AppThemeContext.Provider>
  )

}

export default AppThemeContextProvider