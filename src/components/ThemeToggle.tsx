import { useTheme } from "../theme/ThemeProvider";

const ThemeToggle = () => {
  const { theme, setThemeByName } = useTheme();

  return (
    <div className="fixed top-4 right-4 flex gap-2 z-50">
      {Object.keys({ gaming: 1, futuristic: 1 }).map((name) => (
        <button
          key={name}
          onClick={() => setThemeByName(name as "gaming" | "futuristic")}
          className="px-4 py-2 rounded"
          style={{
            backgroundColor: theme.name === name ? theme.colors.accent : theme.colors.bg,
            color: theme.name === name ? theme.colors.bg : theme.colors.text + '80',
            border: `2px solid ${theme.colors.accent}`
          }}
        >
          {name}
        </button>
      ))}
    </div>
  );
};

export default ThemeToggle;
