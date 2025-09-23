import ProductCard from "../components/ProductCard";
import { Link } from "react-router-dom";

export const products = [
  {
    title: "CodeAssist AI",
    description: "Intelligent code completion and debugging assistant that learns from your coding patterns.",
    icon: "💻",
    category: "Development",
    subServices: [
      "Context-aware code suggestions",
      "Debugging assistance",
      "Syntax error detection",
      "Code snippet generation"
    ]
  },
  {
    title: "DataViz Pro",
    description: "Transform complex data into stunning visualizations with AI-powered insights and recommendations.",
    icon: "📊",
    category: "Analytics",
    subServices: [
      "Interactive dashboards",
      "AI-powered chart recommendations",
      "Real-time data updates",
      "Export visual reports"
    ]
  },
  {
    title: "ContentGenius",
    description: "AI-powered content creation tool that generates high-quality articles, social posts, and marketing copy.",
    icon: "✍️",
    category: "Content",
    subServices: [
      "Blog/article generation",
      "Social media copywriting",
      "SEO-optimized content",
      "Multi-language support"
    ]
  },
  {
    title: "SmartScheduler",
    description: "Intelligent meeting scheduler that optimizes your calendar and suggests optimal time slots.",
    icon: "📅",
    category: "Productivity",
    subServices: [
      "Automated meeting suggestions",
      "Time zone support",
      "Calendar conflict detection",
      "Integration with Google/Outlook"
    ]
  },
  {
    title: "ImageCraft AI",
    description: "Advanced image generation and editing tool powered by cutting-edge AI algorithms.",
    icon: "🎨",
    category: "Creative",
    subServices: [
      "AI image generation",
      "Background removal",
      "Style transfer",
      "High-res export"
    ]
  },
  {
    title: "VoiceBot Pro",
    description: "Conversational AI assistant for customer service with natural language processing.",
    icon: "🎤",
    category: "Communication",
    subServices: [
      "Multi-language support",
      "24/7 automated responses",
      "Customer sentiment analysis",
      "CRM integration"
    ]
  },
  {
    title: "PredictAI",
    description: "Machine learning platform for predictive analytics and business forecasting.",
    icon: "🔮",
    category: "Analytics",
    subServices: [
      "Sales forecasting",
      "Trend prediction",
      "Custom ML models",
      "Data-driven recommendations"
    ]
  },
  {
    title: "SecureGuard",
    description: "AI-powered cybersecurity tool that detects and prevents threats in real-time.",
    icon: "🛡️",
    category: "Security",
    subServices: [
      "Real-time threat detection",
      "Malware analysis",
      "Network security monitoring",
      "Security alerts & reports"
    ]
  },
  {
    title: "EduMentor",
    description: "Personalized learning platform that adapts to individual student needs and pace.",
    icon: "🎓",
    category: "Education",
    subServices: [
      "Adaptive learning paths",
      "Progress tracking",
      "Personalized quizzes",
      "Interactive lessons"
    ]
  },
  {
    title: "HealthAI",
    description: "Medical diagnosis assistant that helps healthcare professionals with accurate assessments.",
    icon: "🏥",
    category: "Healthcare",
    subServices: [
      "Symptom analysis",
      "Predictive diagnosis",
      "Treatment suggestions",
      "Patient monitoring integration"
    ]
  },
  {
    title: "FinanceWise",
    description: "AI-driven financial planning and investment recommendation system.",
    icon: "💰",
    category: "Finance",
    subServices: [
      "Investment portfolio suggestions",
      "Risk assessment",
      "Expense tracking",
      "Financial forecasting"
    ]
  },
  {
    title: "EcoTracker",
    description: "Environmental monitoring tool that tracks carbon footprint and suggests sustainability improvements.",
    icon: "🌱",
    category: "Environment",
    subServices: [
      "Carbon footprint tracking",
      "Sustainability recommendations",
      "Environmental reporting",
      "Energy consumption analysis"
    ]
  }
];

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 py-20">
        <div className="container mx-auto px-6 text-center animate-fade-in">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 animate-slide-up">
              Revolutionize Your Workflow with
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600"> AIForge</span>
            </h1>
            <p className="text-xl text-white mb-8 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              Discover cutting-edge AI tools designed to boost productivity, streamline operations, and unlock new possibilities for your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
              <Link
                to="/contact"
                className="bg-gradient-to-r from-blue-700 to-indigo-700 text-white px-8 py-4 rounded-lg font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300 inline-block text-center"
              >
                <span className="text-white">Get Started Free</span>
              </Link>

<Link
  to="./About"
  className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-lg font-semibold hover:border-blue-600 hover:text-blue-600 transition-all duration-300 inline-block text-center"
>
  Learn More
</Link>

            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose AIForge?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our AI-powered solutions are designed to transform the way you work, making complex tasks simple and efficient.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Lightning Fast</h3>
              <p className="text-gray-600">Process data and generate insights in seconds, not hours.</p>
            </div>
            <div className="text-center p-6 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Highly Accurate</h3>
              <p className="text-gray-600">Industry-leading accuracy rates with continuous learning capabilities.</p>
            </div>
            <div className="text-center p-6 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Secure & Private</h3>
              <p className="text-gray-600">Enterprise-grade security with end-to-end encryption and privacy protection.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our AI Tools</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Explore our comprehensive suite of AI-powered tools designed to enhance productivity and drive innovation.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, idx) => (
              <Link
                to={`/product/${encodeURIComponent(product.title)}`}
                key={idx}
                className="block animate-fade-in-up"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <ProductCard
                  title={product.title}
                  description={product.description}
                  icon={product.icon}
                  category={product.category}
                />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Transform Your Business?</h2>
          <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
            Join thousands of companies already using AIForge to streamline operations and boost productivity.
          </p>
          <Link
            to="/contact"
            className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300"
          >
            Start Your Free Trial
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
