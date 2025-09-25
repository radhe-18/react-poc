import { useState } from "react";
import { useTheme } from "../theme/ThemeProvider";

const Contact = () => {
  const { theme } = useTheme();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Save to localStorage with source
      const leads = JSON.parse(localStorage.getItem("leads") || "[]");
      const newLead = {
        id: Date.now(),
        ...formData,
        timestamp: new Date().toISOString(),
        source: "Contact Form", // <-- added
      };
      leads.push(newLead);
      localStorage.setItem("leads", JSON.stringify(leads));

      // Trigger custom event so Leads page can update in real-time
      window.dispatchEvent(new Event("leadsUpdated"));

      setSubmitMessage("Thank you for your message! We'll get back to you within 24 hours.");
      setFormData({ name: "", email: "", company: "", message: "" });

      setTimeout(() => setSubmitMessage(""), 5000);
    } catch (error) {
      setSubmitMessage("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section style={{ background: `linear-gradient(to br, ${theme.colors.bg}, ${theme.colors.card})` }} className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 style={{ color: theme.colors.text }} className="text-5xl md:text-6xl font-bold mb-6 animate-slide-up">
              Get in
              <span style={{ color: theme.colors.accent }}> Touch</span>
            </h1>
            <p style={{ color: theme.colors.text + '80', animationDelay: '0.2s' }} className="text-xl mb-8 animate-fade-in-up">
              Ready to transform your business with AI? Let's discuss how AIForge can help you achieve your goals.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section style={{ backgroundColor: theme.colors.bg }} className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

              {/* Contact Info */}
              <div className="animate-fade-in-up">
                <h2 style={{ color: theme.colors.text }} className="text-3xl font-bold mb-6">Let's Start a Conversation</h2>
                <p style={{ color: theme.colors.text + '80' }} className="mb-8">
                  Whether you're looking to implement AI solutions, have questions about our tools,
                  or want to explore partnership opportunities, we're here to help.
                </p>
                <div className="space-y-6">
                  {/* Email */}
                  <div className="flex items-start space-x-4">
                    <div style={{ backgroundColor: theme.colors.card }} className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6" style={{ color: theme.colors.accent }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h3 style={{ color: theme.colors.text }} className="text-lg font-semibold">Email Us</h3>
                      <p style={{ color: theme.colors.text + '80' }}>hello@aiforge.com</p>
                      <p style={{ color: theme.colors.text + '80' }}>support@aiforge.com</p>
                    </div>
                  </div>
                  {/* Call */}
                  <div className="flex items-start space-x-4">
                    <div style={{ backgroundColor: theme.colors.card }} className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6" style={{ color: theme.colors.accent }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <h3 style={{ color: theme.colors.text }} className="text-lg font-semibold">Call Us</h3>
                      <p style={{ color: theme.colors.text + '80' }}>+1 (555) 123-4567</p>
                      <p style={{ color: theme.colors.text + '80' }}>Mon-Fri 9AM-6PM EST</p>
                    </div>
                  </div>
                  {/* Visit */}
                  <div className="flex items-start space-x-4">
                    <div style={{ backgroundColor: theme.colors.card }} className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6" style={{ color: theme.colors.accent }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 style={{ color: theme.colors.text }} className="text-lg font-semibold">Visit Us</h3>
                      <p style={{ color: theme.colors.text + '80' }}>123 AI Innovation Drive</p>
                      <p style={{ color: theme.colors.text + '80' }}>San Francisco, CA 94105</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                <div style={{ backgroundColor: theme.colors.card }} className="rounded-2xl p-8">
                  <h3 style={{ color: theme.colors.text }} className="text-2xl font-bold mb-6">Send us a Message</h3>

                  {submitMessage && (
                    <div className={`mb-6 p-4 rounded-lg ${submitMessage.includes('Thank you') ? 'bg-green-50 text-green-800 border border-green-200' : 'bg-red-50 text-red-800 border border-red-200'}`}>
                      {submitMessage}
                    </div>
                  )}

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label htmlFor="name" style={{ color: theme.colors.text }} className="block text-sm font-medium mb-2">Full Name *</label>
                      <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300" placeholder="Your full name" required />
                    </div>
                    <div>
                      <label htmlFor="email" style={{ color: theme.colors.text }} className="block text-sm font-medium mb-2">Email Address *</label>
                      <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300" placeholder="your@email.com" required />
                    </div>
                    <div>
                      <label htmlFor="company" style={{ color: theme.colors.text }} className="block text-sm font-medium mb-2">Company (Optional)</label>
                      <input type="text" id="company" name="company" value={formData.company} onChange={handleChange} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300" placeholder="Your company name" />
                    </div>
                    <div>
                      <label htmlFor="message" style={{ color: theme.colors.text }} className="block text-sm font-medium mb-2">Message *</label>
                      <textarea id="message" name="message" value={formData.message} onChange={handleChange} rows={5} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 resize-none" placeholder="Tell us about your project or ask us anything..." required />
                    </div>
                    <button type="submit" disabled={isSubmitting} style={{ backgroundColor: theme.colors.accent, color: '#ffffff' }} className="w-full py-4 px-6 rounded-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none">
                      {isSubmitting ? (
                        <div className="flex items-center justify-center">
                          <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Sending...
                        </div>
                      ) : "Send Message"}
                    </button>
                  </form>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
