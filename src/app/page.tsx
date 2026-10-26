"use client";

import Header from "@/components/Header";
import TrackingTerminal from "@/components/TrackingTerminal";
import DashboardPreview from "@/components/DashboardPreview";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-[#130621] relative overflow-hidden">
      <Header />
      <main className="flex-1 relative z-10">
        <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
          <div className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] bg-[#FFD700]/30 rounded-full blur-[120px] animate-light-1" />
          <div className="absolute bottom-[-10%] left-[-10%] w-[700px] h-[700px] bg-[#6A0DAD]/40 rounded-full blur-[120px] animate-light-2" />
          <div className="absolute top-[40%] left-[20%] w-[400px] h-[400px] bg-[#FFD700]/10 rounded-full blur-[100px] animate-light-2" />
        </div>

        <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-12 lg:pt-32">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 text-xs font-bold tracking-wide uppercase text-[#FFD700] mb-6 backdrop-blur-md bg-white/10 px-4 py-2 rounded-full border border-white/20 shadow-[0_0_15px_rgba(255,215,0,0.2)]">
              <span className="w-2 h-2 rounded-full bg-[#FFD700] shadow-[0_0_10px_#FFD700]" />
              Captain International Alliance
            </span>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-tight tracking-tight text-white mb-6 drop-shadow-2xl">
              Building the future of{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFD700] to-[#FFA500] drop-shadow-[0_0_30px_rgba(255,215,0,0.4)]">
                Saudi Arabia
              </span>
            </h1>
            <p className="mt-6 text-xl text-purple-100/80 max-w-2xl leading-relaxed mb-10">
              Premium logistics, construction, and recruitment services across the Kingdom. Delivering excellence, reliability, and partnership.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <a href="#services" className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-[#FFD700] to-[#FFA500] px-8 py-4 text-base font-bold text-[#1A0B2E] transition-transform hover:scale-105 shadow-[0_0_30px_rgba(255,215,0,0.5)]">Explore Services</a>
              <a href="#tracking" className="inline-flex items-center justify-center rounded-full border-2 border-white/20 bg-white/10 px-8 py-4 text-base font-bold text-white backdrop-blur-xl transition-all hover:bg-white/20 hover:border-white/40 shadow-lg">Track Shipment</a>
            </div>
          </div>
        </section>

        <TrackingTerminal />

        <section id="services" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Our Core Divisions</h2>
            <p className="text-purple-200/70 max-w-2xl mx-auto text-lg">Delivering excellence across the Kingdom through our specialized enterprise services.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="backdrop-blur-3xl bg-white/10 border border-white/20 p-8 rounded-3xl hover:bg-white/20 hover:border-[#FFD700]/50 transition-all duration-300 group shadow-[0_8px_32px_0_rgba(0,0,0,0.4)] relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#FFD700]/10 rounded-full blur-2xl group-hover:bg-[#FFD700]/20 transition-all" />
              <div className="w-14 h-14 bg-gradient-to-br from-[#FFD700] to-[#FFA500] rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform"><span className="text-[#1A0B2E] font-extrabold text-2xl">01</span></div>
              <h3 className="text-2xl font-bold text-white mb-4">Global Recruitment</h3>
              <p className="text-purple-100/70 leading-relaxed relative z-10">Connecting top-tier talent with premier opportunities. We source, vet, and deploy skilled professionals across all sectors.</p>
            </div>
            <div className="backdrop-blur-3xl bg-white/10 border border-white/20 p-8 rounded-3xl hover:bg-white/20 hover:border-[#FFD700]/50 transition-all duration-300 group shadow-[0_8px_32px_0_rgba(0,0,0,0.4)] relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#FFD700]/10 rounded-full blur-2xl group-hover:bg-[#FFD700]/20 transition-all" />
              <div className="w-14 h-14 bg-gradient-to-br from-[#FFD700] to-[#FFA500] rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform"><span className="text-[#1A0B2E] font-extrabold text-2xl">02</span></div>
              <h3 className="text-2xl font-bold text-white mb-4">Construction</h3>
              <p className="text-purple-100/70 leading-relaxed relative z-10">Building the infrastructure of tomorrow. From large-scale commercial projects to specialized engineering works.</p>
            </div>
            <div className="backdrop-blur-3xl bg-white/10 border border-white/20 p-8 rounded-3xl hover:bg-white/20 hover:border-[#FFD700]/50 transition-all duration-300 group shadow-[0_8px_32px_0_rgba(0,0,0,0.4)] relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#FFD700]/10 rounded-full blur-2xl group-hover:bg-[#FFD700]/20 transition-all" />
              <div className="w-14 h-14 bg-gradient-to-br from-[#FFD700] to-[#FFA500] rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform"><span className="text-[#1A0B2E] font-extrabold text-2xl">03</span></div>
              <h3 className="text-2xl font-bold text-white mb-4">Global Logistics</h3>
              <p className="text-purple-100/70 leading-relaxed relative z-10">Seamless international trade and cargo management. We move your goods with precision, speed, and complete security.</p>
            </div>
          </div>
        </section>

        <DashboardPreview />
      </main>

      <footer className="border-t border-white/10 py-8 text-center relative z-10 bg-black/20 backdrop-blur-md">
        <p className="text-purple-200/50 text-sm">© 2026 Captain International Alliance. Al Khalidiya Tower, Riyadh.</p>
      </footer>

      <a href="https://wa.me/966543765900" target="_blank" rel="noopener noreferrer" className="fixed bottom-8 right-8 z-50 bg-[#25D366] text-white p-5 rounded-full shadow-[0_0_30px_rgba(37,211,102,0.5)] hover:scale-110 transition-transform duration-300 flex items-center justify-center border-2 border-white/20">
        <svg viewBox="0 0 24 24" width="32" height="32" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
      </a>
    </div>
  );
}