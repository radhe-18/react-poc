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

export const gaming: Theme = {
  name: "gaming",
  colors: {
    bg: "#0f0f1a",
    text: "#00ffcc",
    accent: "#ff00ff",
    card: "#1a1a2e",
  },
  effects: {
    cardShadow: "0 4px 20px rgba(0, 255, 204, 0.5)",
    transition: "all 0.3s ease-in-out",
  },
};

export const future: Theme = {
  name: "future",
  colors: {
    bg: "#1a1a2e",
    text: "#e94560",
    accent: "#00ffff",
    card: "#0d0d1a",
  },
  effects: {
    cardShadow: "0 6px 30px rgba(233, 69, 96, 0.5)",
    transition: "all 0.4s ease-in-out",
  },
};

export const themes = { gaming, future };
