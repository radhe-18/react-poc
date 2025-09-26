import { useState } from "react";
import { useTheme } from "../theme/ThemeProvider";

interface FormData {
  name: string;
  email: string;
  company?: string;
  message: string;
}

const BuyForm = () => {
  const { theme } = useTheme();
  const [form, setForm] = useState<FormData>({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  const [success, setSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const storedLeads = JSON.parse(localStorage.getItem("leads") || "[]");
    const newLead = {
      id: Date.now(),
      ...form,
      timestamp: new Date().toISOString(),
      source: "Buy Product Form", // Mark as Buy Form
    };

    localStorage.setItem("leads", JSON.stringify([...storedLeads, newLead]));
    window.dispatchEvent(new Event("leadsUpdated")); // update Leads table

    setSuccess(true); // show success message
    setForm({ name: "", email: "", company: "", message: "" }); // reset form
  };

  return (
    <div className="min-h-screen flex items-center justify-center" style={{ backgroundColor: theme.colors.bg }}>
      <div className="rounded-2xl p-8 max-w-md w-full" style={{ backgroundColor: theme.colors.card, boxShadow: theme.effects.cardShadow }}>
        <h2 className="text-2xl font-bold mb-6" style={{ color: theme.colors.text }}>Buy Product</h2>

        {success && (
          <div className="p-3 rounded mb-4 text-center" style={{ backgroundColor: theme.colors.accent + '10', color: theme.colors.accent }}>
            Your request has been submitted successfully!
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block mb-1" style={{ color: theme.colors.text + '80' }}>Name</label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2"
              style={{ borderColor: theme.colors.text + '30', '--tw-ring-color': theme.colors.accent } as any}
            />
          </div>
          <div>
            <label className="block mb-1" style={{ color: theme.colors.text + '80' }}>Email</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2"
              style={{ borderColor: theme.colors.text + '30', '--tw-ring-color': theme.colors.accent } as any}
            />
          </div>
          <div>
            <label className="block mb-1" style={{ color: theme.colors.text + '80' }}>Company</label>
            <input
              type="text"
              name="company"
              value={form.company}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2"
              style={{ borderColor: theme.colors.text + '30', '--tw-ring-color': theme.colors.accent } as any}
            />
          </div>
          <div>
            <label className="block mb-1" style={{ color: theme.colors.text + '80' }}>Message</label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              rows={3}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2"
              style={{ borderColor: theme.colors.text + '30', '--tw-ring-color': theme.colors.accent } as any}
            />
          </div>
          <button
            type="submit"
            style={{ backgroundColor: theme.colors.accent, color: '#ffffff', border: `1px solid ${theme.colors.accent}30` }}
            className="w-full px-6 py-3 rounded-lg font-medium hover:shadow-lg hover:scale-105 transition-all duration-300"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default BuyForm;
