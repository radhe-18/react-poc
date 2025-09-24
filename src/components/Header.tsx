import { Link } from "react-router-dom";
import { useState } from "react";
import { useTheme } from "../theme/ThemeProvider";

const Header = () => {
  const { theme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header style={{ backgroundColor: theme.colors.bg, boxShadow: theme.effects.cardShadow, borderBottom: `1px solid ${theme.colors.text}20` }} className="sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <svg
                className="w-6 h-6 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                />
              </svg>
            </div>
            <div>
              <h1 style={{ color: theme.colors.text }} className="text-2xl font-bold">AIForge</h1>
              <p style={{ color: theme.colors.text }} className="text-xs -mt-1">AI Solutions</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link
              to="/"
              style={{ color: theme.colors.text }}
              className="font-medium transition-colors duration-300 relative group"
            >
              Home
              <span style={{ backgroundColor: theme.colors.accent }} className="absolute -bottom-1 left-0 w-0 h-0.5 group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link
              to="/about"
              style={{ color: theme.colors.text }}
              className="font-medium transition-colors duration-300 relative group"
            >
              About
              <span style={{ backgroundColor: theme.colors.accent }} className="absolute -bottom-1 left-0 w-0 h-0.5 group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link
              to="/contact"
              style={{ color: theme.colors.text }}
              className="font-medium transition-colors duration-300 relative group"
            >
              Contact
              <span style={{ backgroundColor: theme.colors.accent }} className="absolute -bottom-1 left-0 w-0 h-0.5 group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link
              to="/terms"
              style={{ color: theme.colors.text }}
              className="font-medium transition-colors duration-300 relative group"
            >
              Terms
              <span style={{ backgroundColor: theme.colors.accent }} className="absolute -bottom-1 left-0 w-0 h-0.5 group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link
              to="/privacy"
              style={{ color: theme.colors.text }}
              className="font-medium transition-colors duration-300 relative group"
            >
              Privacy
              <span style={{ backgroundColor: theme.colors.accent }} className="absolute -bottom-1 left-0 w-0 h-0.5 group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link
              to="/leads"
              style={{ color: theme.colors.text }}
              className="font-medium transition-colors duration-300 relative group"
            >
              Leads
              <span style={{ backgroundColor: theme.colors.accent }} className="absolute -bottom-1 left-0 w-0 h-0.5 group-hover:w-full transition-all duration-300"></span>
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            style={{ backgroundColor: theme.colors.text + '20' }}
            className="md:hidden p-2 rounded-lg transition-colors duration-300"
          >
            <svg
              style={{ color: theme.colors.text }}
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div style={{ borderTop: `1px solid ${theme.colors.text}20` }} className="md:hidden mt-4 pb-4 animate-fade-in">
            <nav className="flex flex-col space-y-4 pt-4">
              <Link
                to="/"
                style={{ color: theme.colors.text }}
                className="font-medium transition-colors duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/about"
                style={{ color: theme.colors.text }}
                className="font-medium transition-colors duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link
                to="/contact"
                style={{ color: theme.colors.text }}
                className="font-medium transition-colors duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
              <Link
                to="/terms"
                style={{ color: theme.colors.text }}
                className="font-medium transition-colors duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                Terms
              </Link>
              <Link
                to="/privacy"
                style={{ color: theme.colors.text }}
                className="font-medium transition-colors duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                Privacy
              </Link>
              <Link
                to="/leads"
                style={{ color: theme.colors.text }}
                className="font-medium transition-colors duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                Leads
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
