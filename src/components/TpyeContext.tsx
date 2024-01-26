import React, { createContext, useContext, useState } from 'react';

type Theme = "light" | "dark" | "system";
const ThemeContext = createContext<Theme>("light");

const useGetTheme = () => useContext(ThemeContext);

export default function TpyeContext() {
  const [theme, setTheme] = useState<Theme>('dark');

  return (
    <ThemeContext.Provider value={theme}>
      <MyApp />
    </ThemeContext.Provider>
  )
}

function MyApp() {
  const theme = useGetTheme();

  return (
    <div>
      <p>Current theme: {theme}</p>
    </div>
  )
}
