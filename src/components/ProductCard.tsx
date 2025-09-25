import { useTheme } from "../theme/ThemeProvider";

type ProductCardProps = {
  title: string;
  description: string;
  icon?: string;
  category?: string;
};

const ProductCard = ({ title, description, icon, category }: ProductCardProps) => {
  const { theme } = useTheme();
  return (
    <div style={{ backgroundColor: theme.colors.bg, border: `1px solid ${theme.colors.text}20` }} className="rounded-xl shadow-sm hover:shadow-xl hover:scale-105 transition-all duration-300 ease-in-out cursor-pointer group overflow-hidden">
      <div className="p-6">
        <div className="flex items-center justify-between mb-4">
          <div className="text-3xl">{icon || "🤖"}</div>
          {category && (
            <span style={{ color: theme.colors.accent, backgroundColor: theme.colors.accent + '20' }} className="text-xs font-medium px-2 py-1 rounded-full">
              {category}
            </span>
          )}
        </div>
        <h3 style={{ color: theme.colors.text }} className="font-bold text-xl mb-3 transition-colors duration-300" onMouseEnter={(e) => e.currentTarget.style.color = theme.colors.accent} onMouseLeave={(e) => e.currentTarget.style.color = theme.colors.text}>
          {title}
        </h3>
        <p style={{ color: theme.colors.text + '80' }} className="transition-colors duration-300 text-sm leading-relaxed">
          {description}
        </p>
        <div className="mt-6 flex justify-between items-center">
          <button
            style={{
              backgroundColor: theme.colors.accent,
              color: '#ffffff',
            }}
            className="px-8 py-4 rounded-lg font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300"
          >
            Learn More
          </button>
          <svg
            style={{ color: theme.colors.text + '60' }}
            className="w-5 h-5 transition-colors duration-300 opacity-0 group-hover:opacity-100"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            onMouseEnter={(e) => e.currentTarget.style.color = theme.colors.accent}
            onMouseLeave={(e) => e.currentTarget.style.color = theme.colors.text + '60'}
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </div>
      <div style={{ background: `linear-gradient(to r, ${theme.colors.accent}, ${theme.colors.text})` }} className="h-1 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
    </div>
  );
};

export default ProductCard;
