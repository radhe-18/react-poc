import { Link } from "react-router-dom";
import { useTheme } from "../theme/ThemeProvider";

const About = () => {
  const { theme } = useTheme();
  const stats = [
    { number: "10,0000+", label: "Active Users" },
    { number: "5000+", label: "Companies" },
    { number: "99.9%", label: "Uptime" },
    { number: "24/7", label: "Support" }
  ];

  const team = [
    {
      name: "Gupta's",
      role: "CEO & Co-Founder",
      image: "👩‍💼",
      bio: "Former AI researcher at Google with 10+ years in machine learning."
    },
    {
      name: "Gupta's",
      role: "CTO & Co-Founder",
      image: "👨‍💻",
      bio: "Ex-Microsoft engineer specializing in scalable AI systems."
    },
    {
      name: "Gupta's",
      role: "Head of AI Research",
      image: "👩‍🔬",
      bio: "PhD in Computer Science, published 50+ papers on AI ethics."
    },
    {
      name: "Gupta's",
      role: "VP of Product",
      image: "👨‍🚀",
      bio: "Product leader with experience at Tesla and Airbnb."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-purple-50 py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 animate-slide-up">
              Pioneering the Future of
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600"> AI Innovation</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              At AIForge, we're not just building tools – we're crafting the future of intelligent automation,
              empowering businesses to achieve unprecedented levels of efficiency and innovation.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="animate-fade-in-up">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
                <p className="text-gray-600 mb-4">
                  Founded in 2020 by a team of AI researchers and engineers from leading tech companies,
                  AIForge was born from a simple yet powerful vision: to democratize access to cutting-edge
                  artificial intelligence for businesses of all sizes.
                </p>
                <p className="text-gray-600 mb-4">
                  What started as a small team of four has grown into a global platform serving thousands
                  of companies worldwide. We've processed billions of data points, trained countless models,
                  and helped our clients achieve measurable ROI through intelligent automation.
                </p>
                <p className="text-gray-600">
                  Today, AIForge stands at the forefront of the AI revolution, continuously pushing the
                  boundaries of what's possible with machine learning and intelligent systems.
                </p>
              </div>
              <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                <div className="bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl p-8">
                  <div className="text-center">
                    <div className="text-6xl mb-4">🚀</div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">Our Mission</h3>
                    <p className="text-gray-700">
                      To empower every business with AI capabilities that were once reserved for tech giants,
                      making intelligent automation accessible, affordable, and transformative.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, idx) => (
              <div
                key={idx}
                className="text-center animate-fade-in-up"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <div className="text-4xl font-bold text-blue-600 mb-2">{stat.number}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our diverse team of experts brings together decades of experience in AI, engineering,
              and business innovation.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, idx) => (
              <div
                key={idx}
                className="text-center animate-fade-in-up"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <div className="w-24 h-24 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full flex items-center justify-center mx-auto mb-4 text-4xl">
                  {member.image}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                <p className="text-blue-600 font-medium mb-3">{member.role}</p>
                <p className="text-gray-600 text-sm">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              These core principles guide everything we do at AIForge.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-white rounded-xl shadow-sm animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Innovation First</h3>
              <p className="text-gray-600">We constantly push the boundaries of AI technology to deliver cutting-edge solutions.</p>
            </div>
            <div className="text-center p-6 bg-white rounded-xl shadow-sm animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Trust & Reliability</h3>
              <p className="text-gray-600">We build systems that our clients can depend on, with 99.9% uptime and enterprise-grade security.</p>
            </div>
            <div className="text-center p-6 bg-white rounded-xl shadow-sm animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Community Focus</h3>
              <p className="text-gray-600">We believe in building a supportive community of AI practitioners and businesses.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Join Our Mission?</h2>
          <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
            Be part of the AI revolution. Let's build the future together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              style={{ background: `linear-gradient(to r, ${theme.colors.accent}, ${theme.colors.text})`, color: theme.colors.text, border: `2px solid ${theme.colors.accent}` }}
              className="px-8 py-4 rounded-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300"
            >
              Get in Touch
            </Link>
         <Link
  to="/privacy"
  style={{ background: `linear-gradient(to r, ${theme.colors.accent}, ${theme.colors.text})`, color: theme.colors.text, border: `2px solid ${theme.colors.accent}` }}
  className="px-8 py-4 rounded-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300"
>
  Explore Our Tools
</Link>


          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
