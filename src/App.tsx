import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider, useTheme } from "./theme/ThemeProvider";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import ThemeSwitcher from "./components/ThemeSwitcher";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import PrivacyPolicy from "./pages/Privacy";
import Terms from "./pages/Terms";
import Leads from "./pages/Leads";
import ProductDetail from "./components/ProductDetail";
import BuyForm from "./pages/BuyForm";

const AppContent = () => {
  const { theme } = useTheme();

  return (
    <div style={{ backgroundColor: theme.colors.bg, color: theme.colors.text, minHeight: '100vh' }}>
      <Router>
        <ScrollToTop />
        <Header />
        <ThemeSwitcher /> {/* Can switch themes */}
        <main className="min-h-screen w-full">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacy" element={<PrivacyPolicy />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/leads" element={<Leads />} />
            <Route path="/product/:title" element={<ProductDetail />} /> {/* Dynamic product route */}
            <Route path="/buy/:title" element={<BuyForm />} />
          </Routes>
        </main>
        <Footer />
      </Router>
    </div>
  );
};

const App = () => {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
};

export default App;
