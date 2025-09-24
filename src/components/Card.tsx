import { useTheme } from "../theme/ThemeProvider";

const Card = ({ children }: { children: React.ReactNode }) => {
  const { theme } = useTheme();

  return (
    <div
      className="p-6 rounded-lg"
      style={{
        backgroundColor: theme.colors.card,
        color: theme.colors.text,
        boxShadow: theme.effects.cardShadow,
        transition: theme.effects.transition,
      }}
    >
      {children}
    </div>
  );
};

export default Card;
