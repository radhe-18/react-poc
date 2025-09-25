import { useEffect, useState } from "react";
import axios from "axios";
import { useTheme } from "../theme/ThemeProvider";

export interface Lead {
  id: number;
  name: string;
  email: string;
  company?: string;
  message: string;
  timestamp?: string;
  source?: string; // "Buy Product Form" | "Contact Form" | "API"
}

const Leads = () => {
  const { theme } = useTheme();
  const [leads, setLeads] = useState<Lead[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });

    const fetchLeads = async () => {
      try {
        // Fetch API leads
        const response = await axios.get("https://jsonplaceholder.typicode.com/users");
        const apiLeads: Lead[] = response.data.map((user: any) => ({
          id: user.id,
          name: user.name,
          email: user.email,
          company: user.company?.name || "-",
          message: `Hi, I am ${user.name}.`,
          timestamp: new Date().toISOString(),
          source: "API",
        }));

        // Get localStorage leads (Buy Form + Contact Form)
        const storedLeads: Lead[] = JSON.parse(localStorage.getItem("leads") || "[]");

        // Merge API + local storage
        setLeads([...storedLeads, ...apiLeads]);
      } catch (error) {
        console.error("Error fetching leads:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchLeads();

    // Listen for new submissions
    const handleLeadsUpdate = () => {
      const storedLeads: Lead[] = JSON.parse(localStorage.getItem("leads") || "[]");
      setLeads(storedLeads);
    };

    window.addEventListener("leadsUpdated", handleLeadsUpdate);
    return () => window.removeEventListener("leadsUpdated", handleLeadsUpdate);
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center" style={{ backgroundColor: theme.colors.bg }}>
        <p style={{ color: theme.colors.text + '80' }} className="text-lg">Loading leads...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen" style={{ backgroundColor: theme.colors.bg }}>
      <div className="container mx-auto py-8 px-4">
        <div className="mb-8">
          <h2 style={{ color: theme.colors.text }} className="text-3xl font-bold mb-2">Registered Leads</h2>
          <p style={{ color: theme.colors.text + '80' }}>Manage and view all contact and product form submissions</p>
        </div>

        {leads.length === 0 ? (
          <div style={{ backgroundColor: theme.colors.card, borderColor: theme.colors.text + '20' }} className="rounded-lg shadow-sm border p-12 text-center">
            <div className="text-6xl mb-4">📋</div>
            <h3 style={{ color: theme.colors.text }} className="text-xl font-semibold mb-2">No leads registered yet</h3>
            <p style={{ color: theme.colors.text + '80' }}>Leads will appear here once users submit them.</p>
          </div>
        ) : (
          <div style={{ backgroundColor: theme.colors.card, borderColor: theme.colors.text + '20' }} className="rounded-lg shadow-sm border overflow-x-auto">
            <div style={{ borderBottomColor: theme.colors.text + '20', backgroundColor: theme.colors.bg }} className="px-6 py-4 border-b">
              <h3 style={{ color: theme.colors.text }} className="text-lg font-semibold">Total Leads: {leads.length}</h3>
            </div>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y table-auto" style={{ borderColor: theme.colors.text + '20' }}>
                <thead style={{ backgroundColor: theme.colors.bg }}>
                  <tr>
                    <th style={{ color: theme.colors.text + '60' }} className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider">Name</th>
                    <th style={{ color: theme.colors.text + '60' }} className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider">Email</th>
                    <th style={{ color: theme.colors.text + '60' }} className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider">Company</th>
                    <th style={{ color: theme.colors.text + '60' }} className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider">Message</th>
                    <th style={{ color: theme.colors.text + '60' }} className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider">Submitted At</th>
                    <th style={{ color: theme.colors.text + '60' }} className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider">Source</th>
                  </tr>
                </thead>
                <tbody style={{ backgroundColor: theme.colors.card, borderColor: theme.colors.text + '20' }} className="divide-y">
                  {leads.map((lead) => (
                    <tr key={lead.id} style={{ backgroundColor: theme.colors.card }} className="hover:opacity-80">
                      <td style={{ color: theme.colors.text }} className="px-4 py-3 whitespace-nowrap">{lead.name}</td>
                      <td style={{ color: theme.colors.text }} className="px-4 py-3 whitespace-nowrap">{lead.email}</td>
                      <td style={{ color: theme.colors.text }} className="px-4 py-3 whitespace-nowrap">{lead.company || "-"}</td>
                      <td style={{ color: theme.colors.text }} className="px-4 py-3 truncate max-w-xs" title={lead.message}>{lead.message}</td>
                      <td style={{ color: theme.colors.text }} className="px-4 py-3 whitespace-nowrap">{lead.timestamp ? new Date(lead.timestamp).toLocaleString() : "N/A"}</td>
                      <td className="px-4 py-3 whitespace-nowrap">
                        {lead.source === "Buy Product Form" && (
                          <span style={{ backgroundColor: theme.colors.accent + '20', color: theme.colors.accent }} className="inline-block px-2 py-1 rounded-full text-xs font-semibold">
                            🛒 Buy Form
                          </span>
                        )}
                        {lead.source === "Contact Form" && (
                          <span style={{ backgroundColor: theme.colors.accent + '20', color: theme.colors.accent }} className="inline-block px-2 py-1 rounded-full text-xs font-semibold">
                            📄 Contact Form
                          </span>
                        )}
                        {lead.source === "API" && (
                          <span style={{ backgroundColor: theme.colors.accent + '20', color: theme.colors.accent }} className="inline-block px-2 py-1 rounded-full text-xs font-semibold">
                            API
                          </span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Leads;
