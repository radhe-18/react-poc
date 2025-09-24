export interface Theme {
  name: string;
  colors: {
    bg: string;
    text: string;
    accent: string;
    card: string;
  };
  effects: {
    cardShadow: string;
    transition: string;
  };
}

export const day: Theme = {
  name: "day",
  colors: {
    bg: "#f8fafc",
    text: "#1e293b",
    accent: "#3b82f6",
    card: "#ffffff",
  },
  effects: {
    cardShadow: "0 1px 3px rgba(0, 0, 0, 0.1)",
    transition: "all 0.2s ease-in-out",
  },
};

export const dark: Theme = {
  name: "dark",
  colors: {
    bg: "#0f172a",
    text: "#f1f5f9",
    accent: "#8b5cf6",
    card: "#1e293b",
  },
  effects: {
    cardShadow: "0 1px 3px rgba(0, 0, 0, 0.3)",
    transition: "all 0.2s ease-in-out",
  },
};

export const gaming: Theme = {
  name: "gaming",
  colors: {
    bg: "#0a0a0f",
    text: "#00ff88",
    accent: "#ff0080",
    card: "#1a1a2e",
  },
  effects: {
    cardShadow: "0 2px 8px rgba(0, 255, 136, 0.2)",
    transition: "all 0.2s ease-in-out",
  },
};

export const futuristic: Theme = {
  name: "futuristic",
  colors: {
    bg: "#0d1421",
    text: "#00d4ff",
    accent: "#ff6b35",
    card: "#1a2332",
  },
  effects: {
    cardShadow: "0 2px 8px rgba(0, 212, 255, 0.2)",
    transition: "all 0.2s ease-in-out",
  },
};

export const themes = { day, dark, gaming, futuristic };
