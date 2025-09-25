import { createContext, useContext, useState } from "react";
import type { ReactNode } from "react";
import { themes } from "./Theme";
import type { Theme } from "./Theme";

interface ThemeContextType {
  theme: Theme;
  setThemeByName: (name: keyof typeof themes) => void;
}

const ThemeContext = createContext<ThemeContextType>({
  theme: themes.gaming,
  setThemeByName: () => {},
});

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState<Theme>(themes.gaming);

  const setThemeByName = (name: keyof typeof themes) => {
    setTheme(themes[name]);
    document.documentElement.className = name; // add theme class to html for Tailwind if needed
  };

  return (
    <ThemeContext.Provider value={{ theme, setThemeByName }}>
      {children}
    </ThemeContext.Provider>
  );
};
