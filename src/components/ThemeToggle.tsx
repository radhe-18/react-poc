import { useTheme } from "../theme/ThemeProvider";

const ThemeToggle = () => {
  const { theme, setThemeByName } = useTheme();

  return (
    <div className="fixed top-4 right-4 flex gap-2 z-50">
      {Object.keys({ gaming: 1, future: 1 }).map((name) => (
        <button
          key={name}
          onClick={() => setThemeByName(name as "gaming" | "future")}
          className={`px-4 py-2 rounded ${
            theme.name === name ? "bg-accent text-white" : "bg-gray-800 text-gray-200"
          }`}
        >
          {name}
        </button>
      ))}
    </div>
  );
};

export default ThemeToggle;
