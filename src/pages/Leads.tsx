import { useEffect, useState } from "react";
import axios from "axios";

interface Lead {
  id: number;
  name: string;
  email: string;
  company?: string;
  message: string;
  timestamp?: string;
}

const Leads = () => {
  const [leads, setLeads] = useState<Lead[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });

    const fetchLeads = async () => {
      try {
        // 1️⃣ Fetch API leads
        const response = await axios.get("https://jsonplaceholder.typicode.com/users");
        const apiLeads = response.data.map((user: any) => ({
          id: user.id,
          name: user.name,
          email: user.email,
          company: user.company?.name || "-",
          message: `Hi, I am ${user.name}.`,
          timestamp: new Date().toISOString(),
        }));

        // 2️⃣ Get localStorage leads
        const storedLeads = JSON.parse(localStorage.getItem("leads") || "[]");

        // 3️⃣ Merge and set state
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
      const storedLeads = JSON.parse(localStorage.getItem("leads") || "[]");
      setLeads(prev => [...storedLeads]); // update state immediately
    };

    window.addEventListener("leadsUpdated", handleLeadsUpdate);
    return () => window.removeEventListener("leadsUpdated", handleLeadsUpdate);
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-gray-600 text-lg">Loading leads...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <div className="container mx-auto py-8 px-6">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Registered Leads</h2>
          <p className="text-gray-600">Manage and view all contact form submissions</p>
        </div>

        {leads.length === 0 ? (
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-12 text-center">
            <div className="text-6xl mb-4">📋</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No leads registered yet</h3>
            <p className="text-gray-600">Leads will appear here once users submit them.</p>
          </div>
        ) : (
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
            <div className="px-6 py-4 border-b border-gray-200 bg-gray-50">
              <h3 className="text-lg font-semibold text-gray-900">Total Leads: {leads.length}</h3>
            </div>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Company</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Message</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Submitted At</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {leads.map((lead) => (
                    <tr key={lead.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap">{lead.name}</td>
                      <td className="px-6 py-4 whitespace-nowrap">{lead.email}</td>
                      <td className="px-6 py-4 whitespace-nowrap">{lead.company || "-"}</td>
                      <td className="px-6 py-4 truncate max-w-xs" title={lead.message}>{lead.message}</td>
                      <td className="px-6 py-4 whitespace-nowrap">{lead.timestamp ? new Date(lead.timestamp).toLocaleString() : "N/A"}</td>
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
