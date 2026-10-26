import { Activity, Users, Container, ArrowUpRight } from "lucide-react";

export default function DashboardPreview() {
  return (
    <div className="w-full max-w-5xl mx-auto p-6 mb-20 relative z-10">
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-white">Enterprise Command Center</h2>
        <p className="text-gray-400 text-sm mt-1">Real-time operational metrics</p>
      </div>

      {/* Metrics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-6">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-gray-400 text-sm font-medium">SLA Fulfillment Rate</p>
              <h3 className="text-3xl font-bold text-white mt-2">99.5%</h3>
            </div>
            <div className="p-3 bg-[#D4AF37]/10 rounded-xl">
              <Activity className="text-[#D4AF37]" size={24} />
            </div>
          </div>
        </div>

        <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-6">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-gray-400 text-sm font-medium">Active Cargo</p>
              <h3 className="text-3xl font-bold text-white mt-2">142</h3>
            </div>
            <div className="p-3 bg-[#D4AF37]/10 rounded-xl">
              <Container className="text-[#D4AF37]" size={24} />
            </div>
          </div>
        </div>

        <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-6">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-gray-400 text-sm font-medium">Deployed Manpower</p>
              <h3 className="text-3xl font-bold text-white mt-2">850</h3>
            </div>
            <div className="p-3 bg-[#D4AF37]/10 rounded-xl">
              <Users className="text-[#D4AF37]" size={24} />
            </div>
          </div>
        </div>
      </div>

      {/* Mock Data Table */}
      <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-6 overflow-hidden">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-lg font-bold text-white">Recent Operations</h3>
          <button className="text-sm text-[#D4AF37] flex items-center gap-1 hover:text-[#FFD700] transition-colors">
            View All <ArrowUpRight size={16} />
          </button>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-white/10 text-gray-400 text-sm">
                <th className="pb-3 font-medium">Operation ID</th>
                <th className="pb-3 font-medium">Location</th>
                <th className="pb-3 font-medium">Status</th>
                <th className="pb-3 font-medium">Progress</th>
              </tr>
            </thead>
            <tbody className="text-white text-sm">
              <tr className="border-b border-white/5 hover:bg-white/5 transition-colors">
                <td className="py-4">#OP-8492</td>
                <td className="py-4">King Abdulaziz Port</td>
                <td className="py-4"><span className="px-2 py-1 bg-green-500/20 text-green-400 rounded-md text-xs font-medium">Active</span></td>
                <td className="py-4 text-[#D4AF37]">Customs Cleared</td>
              </tr>
              <tr className="border-b border-white/5 hover:bg-white/5 transition-colors">
                <td className="py-4">#OP-8493</td>
                <td className="py-4">Riyadh Construction Hub</td>
                <td className="py-4"><span className="px-2 py-1 bg-blue-500/20 text-blue-400 rounded-md text-xs font-medium">In Transit</span></td>
                <td className="py-4 text-gray-400">En route</td>
              </tr>
              <tr className="hover:bg-white/5 transition-colors">
                <td className="py-4">#OP-8494</td>
                <td className="py-4">Al Khalidiya HQ</td>
                <td className="py-4"><span className="px-2 py-1 bg-green-500/20 text-green-400 rounded-md text-xs font-medium">Active</span></td>
                <td className="py-4 text-[#D4AF37]">Manpower Deployed</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}