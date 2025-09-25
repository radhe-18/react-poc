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
      <section style={{ background: `linear-gradient(to br, ${theme.colors.bg}, ${theme.colors.card})` }} className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 style={{ color: theme.colors.text }} className="text-5xl md:text-6xl font-bold mb-6 animate-slide-up">
              Pioneering the Future of
              <span style={{ color: theme.colors.accent }}> AI Innovation</span>
            </h1>
            <p style={{ color: theme.colors.text + '80', animationDelay: '0.2s' }} className="text-xl mb-8 animate-fade-in-up">
              At AIForge, we're not just building tools – we're crafting the future of intelligent automation,
              empowering businesses to achieve unprecedented levels of efficiency and innovation.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section style={{ backgroundColor: theme.colors.bg }} className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="animate-fade-in-up">
                <h2 style={{ color: theme.colors.text }} className="text-3xl font-bold mb-6">Our Story</h2>
                <p style={{ color: theme.colors.text + '80' }} className="mb-4">
                  Founded in 2020 by a team of AI researchers and engineers from leading tech companies,
                  AIForge was born from a simple yet powerful vision: to democratize access to cutting-edge
                  artificial intelligence for businesses of all sizes.
                </p>
                <p style={{ color: theme.colors.text + '80' }} className="mb-4">
                  What started as a small team of four has grown into a global platform serving thousands
                  of companies worldwide. We've processed billions of data points, trained countless models,
                  and helped our clients achieve measurable ROI through intelligent automation.
                </p>
                <p style={{ color: theme.colors.text + '80' }}>
                  Today, AIForge stands at the forefront of the AI revolution, continuously pushing the
                  boundaries of what's possible with machine learning and intelligent systems.
                </p>
              </div>
              <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                <div style={{ background: `linear-gradient(to br, ${theme.colors.card}, ${theme.colors.bg})` }} className="rounded-2xl p-8">
                  <div className="text-center">
                    <div className="text-6xl mb-4">🚀</div>
                    <h3 style={{ color: theme.colors.text }} className="text-2xl font-bold mb-2">Our Mission</h3>
                    <p style={{ color: theme.colors.text + '80' }}>
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
      <section style={{ backgroundColor: theme.colors.card }} className="py-16">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, idx) => (
              <div
                key={idx}
                className="text-center animate-fade-in-up"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <div style={{ color: theme.colors.accent }} className="text-4xl font-bold mb-2">{stat.number}</div>
                <div style={{ color: theme.colors.text + '80' }} className="font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section style={{ backgroundColor: theme.colors.bg }} className="py-16">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 style={{ color: theme.colors.text }} className="text-3xl font-bold mb-4">Meet Our Team</h2>
            <p style={{ color: theme.colors.text + '80' }} className="max-w-2xl mx-auto">
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
                <div style={{ background: `linear-gradient(to br, ${theme.colors.card}, ${theme.colors.bg})` }} className="w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-4 text-4xl">
                  {member.image}
                </div>
                <h3 style={{ color: theme.colors.text }} className="text-xl font-bold mb-1">{member.name}</h3>
                <p style={{ color: theme.colors.accent }} className="font-medium mb-3">{member.role}</p>
                <p style={{ color: theme.colors.text + '80' }} className="text-sm">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section style={{ backgroundColor: theme.colors.card }} className="py-16">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 style={{ color: theme.colors.text }} className="text-3xl font-bold mb-4">Our Values</h2>
            <p style={{ color: theme.colors.text + '80' }} className="max-w-2xl mx-auto">
              These core principles guide everything we do at AIForge.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div style={{ backgroundColor: theme.colors.bg, animationDelay: '0.1s' }} className="text-center p-6 rounded-xl shadow-sm animate-fade-in-up">
              <div style={{ backgroundColor: theme.colors.card }} className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8" style={{ color: theme.colors.accent }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 style={{ color: theme.colors.text }} className="text-xl font-bold mb-2">Innovation First</h3>
              <p style={{ color: theme.colors.text + '80' }}>We constantly push the boundaries of AI technology to deliver cutting-edge solutions.</p>
            </div>
            <div style={{ backgroundColor: theme.colors.bg, animationDelay: '0.2s' }} className="text-center p-6 rounded-xl shadow-sm animate-fade-in-up">
              <div style={{ backgroundColor: theme.colors.card }} className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8" style={{ color: theme.colors.accent }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 style={{ color: theme.colors.text }} className="text-xl font-bold mb-2">Trust & Reliability</h3>
              <p style={{ color: theme.colors.text + '80' }}>We build systems that our clients can depend on, with 99.9% uptime and enterprise-grade security.</p>
            </div>
            <div style={{ backgroundColor: theme.colors.bg, animationDelay: '0.3s' }} className="text-center p-6 rounded-xl shadow-sm animate-fade-in-up">
              <div style={{ backgroundColor: theme.colors.card }} className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8" style={{ color: theme.colors.accent }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 style={{ color: theme.colors.text }} className="text-xl font-bold mb-2">Community Focus</h3>
              <p style={{ color: theme.colors.text + '80' }}>We believe in building a supportive community of AI practitioners and businesses.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section style={{ background: `linear-gradient(to r, ${theme.colors.accent}, ${theme.colors.text})` }} className="py-16">
        <div className="container mx-auto px-6 text-center">
          <h2 style={{ color: theme.colors.bg }} className="text-3xl font-bold mb-4">Ready to Join Our Mission?</h2>
          <p style={{ color: theme.colors.bg + '80' }} className="mb-8 max-w-2xl mx-auto">
            Be part of the AI revolution. Let's build the future together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              style={{ background: `linear-gradient(to r, ${theme.colors.accent}, ${theme.colors.text})`, color: theme.colors.text, border: `2px solid ${theme.colors.accent}` }}
              className="px-8 py-4 rounded-lg font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300 inline-block text-center"
            >
              <span style={{ color: theme.colors.text }}>Get in Touch</span>
            </Link>
            <Link
              to="/privacy"
              style={{ background: `linear-gradient(to r, ${theme.colors.accent}, ${theme.colors.text})`, color: theme.colors.text, border: `2px solid ${theme.colors.accent}` }}
              className="px-8 py-4 rounded-lg font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300 inline-block text-center"
            >
              <span style={{ color: theme.colors.text }}>Explore Our Tools</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
