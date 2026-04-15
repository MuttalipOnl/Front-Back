import { createContext, useEffect, useState } from "react";
export const ThemeContext = createContext();

export function ThemeContextProvider({ children }) {
  const savedTheme = localStorage.getItem("theme");
  const initialTheme = savedTheme ? JSON.parse(savedTheme) : "dark";
  const [theme, setTheme] = useState(initialTheme);

  useEffect(() => {
    localStorage.setItem("theme", JSON.stringify(theme));
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
