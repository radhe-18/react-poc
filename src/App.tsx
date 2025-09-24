import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import PrivacyPolicy from "./pages/Privacy";
import Terms from "./pages/Terms";
import Leads from "./pages/Leads";
import ProductDetail from "./components/ProductDetail";
import BuyForm from "./pages/BuyForm";

const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <Header />
      <main className="min-h-screen p-6">
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
  );
};

export default App;
