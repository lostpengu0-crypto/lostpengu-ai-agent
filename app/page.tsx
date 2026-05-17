'use client';

import React from 'react';

export default function LostPenguCharity() {
  return (
    <div className="min-h-screen bg-black text-white overflow-hidden relative">
      {/* Matrix + Aurora Background */}
      <div className="fixed inset-0 bg-[radial-gradient(at_top,#4b0082_0%,transparent_50%)] opacity-40"></div>
      
      {/* Matrix Rain (CSS ile basit versiyon) */}
      <div className="matrix-rain fixed inset-0 pointer-events-none opacity-20"></div>

      {/* Navbar */}
      <nav className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-purple-500/30">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-cyan-400 rounded-full flex items-center justify-center text-2xl">
              🐧
            </div>
            <div>
              <h1 className="text-2xl font-bold tracking-tight">LostPengu</h1>
              <p className="text-xs text-purple-400 -mt-1">CHARITY AI AGENT</p>
            </div>
          </div>
          
          <div className="hidden md:flex items-center gap-8 text-sm">
            <a href="#story" className="hover:text-purple-400 transition">Story</a>
            <a href="#donate" className="hover:text-purple-400 transition">Donate</a>
            <a href="#impact" className="hover:text-purple-400 transition">Impact</a>
          </div>

          <button className="bg-purple-600 hover:bg-purple-500 px-6 py-2.5 rounded-full font-medium transition">
            Support Penguins
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 relative">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 bg-purple-950/50 border border-purple-500/30 rounded-full px-4 py-1 text-sm mb-6">
            🐧 SOLANA CHARITY PROJECT
          </div>
          
          <h1 className="text-6xl md:text-7xl font-bold leading-tight mb-6">
            Save The Penguins.<br />
            <span className="bg-gradient-to-r from-purple-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent">
              One Flip At A Time.
            </span>
          </h1>

          <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-10">
            LostPengu AI Agent, yalnız ve yardıma muhtaç penguenler için bağış toplayan 
            ilk otonom AI Charity projesidir.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#donate" className="bg-gradient-to-r from-purple-600 to-purple-500 hover:from-purple-500 hover:to-purple-400 px-10 py-4 rounded-2xl text-lg font-semibold transition">
              Donate Now
            </a>
            <a href="#story" className="border border-purple-500/50 hover:bg-white/5 px-10 py-4 rounded-2xl text-lg font-semibold transition">
              Their Story
            </a>
          </div>
        </div>
      </section>

      {/* Token Address - Coming Soon */}
      <div className="max-w-4xl mx-auto px-6 mb-20">
        <div className="bg-zinc-950 border border-purple-500/20 rounded-3xl p-8 text-center">
          <p className="text-purple-400 text-sm mb-2">TOKEN CONTRACT ADDRESS</p>
          <div className="bg-black/50 p-4 rounded-2xl font-mono text-sm break-all">
            Coming Soon After Launch...
          </div>
          <p className="text-xs text-gray-500 mt-3">Will be announced on Pump.fun</p>
        </div>
      </div>

      {/* Daha fazla bölüm gelecek... */}

      <div className="h-32"></div>
    </div>
  );
}
