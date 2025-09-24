import { useState } from "react";
import { useTheme } from "../theme/ThemeProvider";
import { themes } from "../theme/Theme";

const ThemeSwitcher = () => {
  const { setThemeByName } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

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
        <div className="absolute bottom-14 right-0 bg-white dark:bg-gray-800 rounded-lg shadow-xl p-3 space-y-1 min-w-28 border border-gray-200 dark:border-gray-700">
          <button
            onClick={() => handleThemeChange("day")}
            className="w-full text-left px-2 py-1 rounded text-sm hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
          >
            ☀️ Day
          </button>
          <button
            onClick={() => handleThemeChange("dark")}
            className="w-full text-left px-2 py-1 rounded text-sm hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
          >
            🌙 Dark
          </button>
          <button
            onClick={() => handleThemeChange("gaming")}
            className="w-full text-left px-2 py-1 rounded text-sm hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
          >
            🎮 Gaming
          </button>
          <button
            onClick={() => handleThemeChange("futuristic")}
            className="w-full text-left px-2 py-1 rounded text-sm hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
          >
            🚀 Futuristic
          </button>
        </div>
      )}
    </div>
  );
};

export default ThemeSwitcher;
