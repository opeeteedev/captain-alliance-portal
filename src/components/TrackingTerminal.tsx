"use client";

import { useState } from "react";
import { Search, Package, ShieldCheck, Truck } from "lucide-react";

export default function TrackingTerminal() {
  const [trackingNumber, setTrackingNumber] = useState("");
  const [isTracking, setIsTracking] = useState(false);

  const handleTrack = () => {
    if (trackingNumber.trim() !== "") setIsTracking(true);
  };

  return (
    <div id="tracking" className="w-full max-w-5xl mx-auto p-6 mt-12 mb-20 relative z-10">
      <div className="relative overflow-hidden backdrop-blur-3xl bg-white/10 border border-white/30 rounded-[2rem] p-8 md:p-10 shadow-[0_20px_50px_rgba(0,0,0,0.6),inset_0_0_0_1px_rgba(255,255,255,0.2)]">
        <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-transparent pointer-events-none" />
        <div className="absolute -inset-1 bg-gradient-to-r from-[#FFD700]/20 to-[#6A0DAD]/20 blur-2xl -z-10" />
        <div className="relative z-10 flex flex-col md:flex-row justify-between items-start md:items-center mb-10">
          <div>
            <h2 className="text-3xl font-extrabold text-white mb-2 tracking-tight drop-shadow-md">Global Tracking Network</h2>
            <p className="text-[#FFD700] text-sm font-bold tracking-widest uppercase shadow-black drop-shadow-sm">Demo Tracking Data</p>
          </div>
          <div className="flex w-full md:w-auto mt-6 md:mt-0 shadow-2xl rounded-xl overflow-hidden border border-white/30 bg-black/30 backdrop-blur-md">
            <input type="text" placeholder="Enter Tracking No." className="bg-transparent text-white px-6 py-4 focus:outline-none w-full md:w-72 transition-colors font-medium placeholder-gray-300" value={trackingNumber} onChange={(e) => setTrackingNumber(e.target.value)} />
            <button onClick={handleTrack} className="bg-gradient-to-r from-[#FFD700] to-[#FFA500] hover:brightness-110 text-[#1A0B2E] font-extrabold px-8 py-4 transition-all flex items-center gap-2 uppercase tracking-wide">
              <Search size={20} /> Track
            </button>
          </div>
        </div>
        {isTracking && (
          <div className="relative z-10 mt-8 border-t border-white/20 pt-10 transition-all duration-500 ease-in-out">
            <div className="flex flex-col md:flex-row justify-between items-center gap-8 relative">
              <div className="flex flex-col items-center text-center z-10">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#FFD700] to-[#FFA500] flex items-center justify-center mb-4 shadow-[0_0_30px_rgba(255,215,0,0.6)] border-2 border-white/40">
                  <Package className="text-[#1A0B2E]" size={36} />
                </div>
                <p className="text-white font-bold text-xl drop-shadow-md">Cargo Received</p>
                <p className="text-purple-200 text-sm mt-1">Riyadh Hub</p>
              </div>
              <div className="hidden md:block absolute top-10 left-20 right-20 h-2 bg-gradient-to-r from-[#FFD700] to-white/20 -z-0 shadow-[0_0_15px_#FFD700]"></div>
              <div className="flex flex-col items-center text-center z-10">
                <div className="w-20 h-20 rounded-full bg-black/40 backdrop-blur-xl border-2 border-[#FFD700] flex items-center justify-center mb-4 shadow-[0_0_20px_rgba(255,215,0,0.3)]">
                  <ShieldCheck className="text-[#FFD700]" size={36} />
                </div>
                <p className="text-white font-bold text-xl drop-shadow-md">Customs Cleared</p>
                <p className="text-purple-200 text-sm mt-1">King Abdulaziz Port</p>
              </div>
              <div className="hidden md:block absolute top-10 left-1/2 right-20 h-2 bg-white/10 -z-0"></div>
              <div className="flex flex-col items-center text-center z-10">
                <div className="w-20 h-20 rounded-full bg-white/10 backdrop-blur-md border-2 border-white/30 flex items-center justify-center mb-4">
                  <Truck className="text-gray-300" size={36} />
                </div>
                <p className="text-gray-200 font-bold text-xl drop-shadow-md">Out for Delivery</p>
                <p className="text-gray-400 text-sm mt-1">Pending</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}