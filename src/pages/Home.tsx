import ProductCard from "../components/ProductCard";
import { Link } from "react-router-dom";
import { useTheme } from "../theme/ThemeProvider";
import { motion } from "framer-motion";

export const products = [
  {
    title: "CodeAssist AI",
    description: "Intelligent code completion and debugging assistant that learns from your coding patterns.",
    icon: "💻",
    category: "Development",
  },
  {
    title: "DataViz Pro",
    description: "Transform complex data into stunning visualizations with AI-powered insights and recommendations.",
    icon: "📊",
    category: "Analytics",
  },
  {
    title: "ContentGenius",
    description: "AI-powered content creation tool that generates high-quality articles, social posts, and marketing copy.",
    icon: "✍️",
    category: "Content",
  },
  {
    title: "SmartScheduler",
    description: "Intelligent meeting scheduler that optimizes your calendar and suggests optimal time slots.",
    icon: "📅",
    category: "Productivity",
  },
  {
    title: "ImageCraft AI",
    description: "Advanced image generation and editing tool powered by cutting-edge AI algorithms.",
    icon: "🎨",
    category: "Creative",
  },
  {
    title: "VoiceBot Pro",
    description: "Conversational AI assistant for customer service with natural language processing.",
    icon: "🎤",
    category: "Communication",
  },
  {
    title: "PredictAI",
    description: "Machine learning platform for predictive analytics and business forecasting.",
    icon: "🔮",
    category: "Analytics",
  },
  {
    title: "SecureGuard",
    description: "AI-powered cybersecurity tool that detects and prevents threats in real-time.",
    icon: "🛡️",
    category: "Security",
  },
  {
    title: "EduMentor",
    description: "Personalized learning platform that adapts to individual student needs and pace.",
    icon: "🎓",
    category: "Education",
  },
  {
    title: "HealthAI",
    description: "Medical diagnosis assistant that helps healthcare professionals with accurate assessments.",
    icon: "🏥",
    category: "Healthcare",
  },
  {
    title: "FinanceWise",
    description: "AI-driven financial planning and investment recommendation system.",
    icon: "💰",
    category: "Finance",
  },
  {
    title: "EcoTracker",
    description: "Environmental monitoring tool that tracks carbon footprint and suggests sustainability improvements.",
    icon: "🌱",
    category: "Environment",
  },
];

const Home = () => {
  const { theme } = useTheme();

  return (
    <div className="min-h-screen">
      {/* ================= Banner Section ================= */}
     <section className="relative w-full h-[65vh] flex items-center justify-center overflow-hidden rounded-b-2xl shadow-xl">
      {/* Scrolling background marquee with multiple different images, duplicated for seamless loop */}
      <div className="absolute inset-0 opacity-80 overflow-hidden">
        <motion.div 
          className="flex h-full" 
          style={{ width: '800vw' }}
          initial={{ x: "0%" }}
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        >
          <div className="w-screen h-full" style={{ backgroundImage: `url('https://picsum.photos/1920/1080?random=1')`, backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
          <div className="w-screen h-full" style={{ backgroundImage: `url('https://picsum.photos/1920/1080?random=2')`, backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
          <div className="w-screen h-full" style={{ backgroundImage: `url('https://picsum.photos/1920/1080?random=3')`, backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
          <div className="w-screen h-full" style={{ backgroundImage: `url('https://picsum.photos/1920/1080?random=4')`, backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
          <div className="w-screen h-full" style={{ backgroundImage: `url('https://picsum.photos/1920/1080?random=1')`, backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
          <div className="w-screen h-full" style={{ backgroundImage: `url('https://picsum.photos/1920/1080?random=2')`, backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
          <div className="w-screen h-full" style={{ backgroundImage: `url('https://picsum.photos/1920/1080?random=3')`, backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
          <div className="w-screen h-full" style={{ backgroundImage: `url('https://picsum.photos/1920/1080?random=4')`, backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
        </motion.div>
      </div>

      {/* Overlay for gradient */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="relative z-10 text-center px-6">
        <h1 className="text-5xl md:text-6xl font-extrabold mb-6 text-white drop-shadow-lg">
          Welcome to <span className="text-accent">AIForge</span>
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8 text-white/80">
          Unlock next-gen AI tools to transform how you work, create, and innovate — tailored for the future 🚀
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/contact"
            style={{ backgroundColor: theme.colors.accent, color: '#ffffff' }}
            className="px-8 py-4 rounded-lg font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300 drop-shadow-lg"
          >
            Get Started
          </Link>
          <Link
            to="/about"
            style={{ backgroundColor: theme.colors.accent, color: '#ffffff' }}
            className="px-8 py-4 rounded-lg font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300 drop-shadow-lg"
          >
            Learn More
          </Link>
        </div>
      </div>
    </section>

      {/* ================= Features Section ================= */}
      <section style={{ backgroundColor: theme.colors.bg }} className="py-16">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 style={{ color: theme.colors.text }} className="text-3xl font-bold mb-4">Why Choose AIForge?</h2>
            <p style={{ color: theme.colors.text + '80' }} className="max-w-2xl mx-auto">
              Our AI-powered solutions are designed to transform the way you work, making complex tasks simple and efficient.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <h3 style={{ color: theme.colors.text }} className="text-xl font-semibold mb-2">Lightning Fast</h3>
              <p style={{ color: theme.colors.text + '80' }}>Process data and generate insights in seconds, not hours.</p>
            </div>
            <div className="text-center p-6">
              <h3 style={{ color: theme.colors.text }} className="text-xl font-semibold mb-2">Highly Accurate</h3>
              <p style={{ color: theme.colors.text + '80' }}>Industry-leading accuracy rates with continuous learning capabilities.</p>
            </div>
            <div className="text-center p-6">
              <h3 style={{ color: theme.colors.text }} className="text-xl font-semibold mb-2">Secure & Private</h3>
              <p style={{ color: theme.colors.text + '80' }}>Enterprise-grade security with end-to-end encryption and privacy protection.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= Products Section ================= */}
      <section style={{ backgroundColor: theme.colors.bg }} className="py-16">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 style={{ color: theme.colors.text }} className="text-3xl font-bold mb-4">Our AI Tools</h2>
            <p style={{ color: theme.colors.text + '80' }} className="max-w-2xl mx-auto">
              Explore our comprehensive suite of AI-powered tools designed to enhance productivity and drive innovation.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, idx) => (
              <ProductCard
                key={idx}
                title={product.title}
                description={product.description}
                icon={product.icon}
                category={product.category}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ================= CTA Section ================= */}
      <section style={{ background: `linear-gradient(to r, ${theme.colors.accent}, ${theme.colors.text})` }} className="py-16">
        <div className="container mx-auto px-6 text-center">
          <h2 style={{ color: theme.colors.text }} className="text-3xl font-bold mb-4">Ready to Transform Your Business?</h2>
          <p style={{ color: theme.colors.text + '80' }} className="mb-8 max-w-2xl mx-auto">
            Join thousands of companies already using AIForge to streamline operations and boost productivity.
          </p>
          <Link
            to="/contact"
            style={{ background: `linear-gradient(to r, ${theme.colors.accent}, ${theme.colors.text})`, color: theme.colors.text, border: `2px solid ${theme.colors.accent}` }}
            className="px-8 py-4 rounded-lg font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300 inline-block text-center"
          >
            <span style={{ color: theme.colors.text }}>Start Your Free Trial</span>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
