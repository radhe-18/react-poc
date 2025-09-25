import { useState } from "react";
import { useTheme } from "../theme/ThemeProvider";
import { themes } from "../theme/Theme";
import "../index.css"
const ThemeSwitcher = () => {
  const { setThemeByName } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
console.log(setThemeByName,"setThemeByNamesetThemeByNamesetThemeByName");

  const handleThemeChange = (themeName: keyof typeof themes) => {
    setThemeByName(themeName);
    setIsOpen(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center text-white font-bold text-lg"
        title="Change Theme"
      >
        🎨
      </button>

      {/* Theme Options */}
     {isOpen && (
  <div className="theme-popup absolute bottom-14 right-0 rounded-lg shadow-xl p-3 space-y-1 min-w-28">
    <button
      onClick={() => handleThemeChange("day")}
      className="w-full text-left px-2 py-1 rounded text-sm transition-colors hover:opacity-80"
    >
      ☀️ Day
    </button>
    <button
      onClick={() => handleThemeChange("dark")}
      className="w-full text-left px-2 py-1 rounded text-sm transition-colors hover:opacity-80"
    >
      🌙 Dark
    </button>
    <button
      onClick={() => handleThemeChange("gaming")}
      className="w-full text-left px-2 py-1 rounded text-sm transition-colors hover:opacity-80"
    >
      🎮 Gaming
    </button>
    <button
      onClick={() => handleThemeChange("futuristic")}
      className="w-full text-left px-2 py-1 rounded text-sm transition-colors hover:opacity-80"
    >
      🚀 Futuristic
    </button>
  </div>
)}

    </div>
  );
};

export default ThemeSwitcher;
