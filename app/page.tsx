'use client';

import React from 'react';

export default function LostPenguCharity() {
  return (
    <div className="min-h-screen bg-black text-white overflow-hidden relative">
      {/* Aurora Background */}
      <div className="fixed inset-0 bg-[radial-gradient(at_top,#4b0082_0%,#0a001f_50%,#000000_80%)] opacity-70 pointer-events-none"></div>

      {/* Navbar */}
      <nav className="fixed top-0 w-full z-50 bg-black/90 backdrop-blur-md border-b border-purple-500/30">
        <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="text-4xl">🐧</div>
            <div>
              <h1 className="text-2xl font-bold tracking-tighter">LOSTPENGU</h1>
              <p className="text-purple-400 text-sm -mt-1">CHARITY AI AGENT</p>
            </div>
          </div>
          
          <div className="hidden md:flex items-center gap-8 text-sm">
            <a href="#story" className="hover:text-purple-400 transition">Story</a>
            <a href="#impact" className="hover:text-purple-400 transition">Impact</a>
            <a href="#donate" className="hover:text-purple-400 transition">Donate</a>
            <a href="#howto" className="hover:text-purple-400 transition">How to Support</a>
          </div>

          <button className="bg-gradient-to-r from-purple-600 to-purple-500 px-6 py-3 rounded-full font-medium hover:scale-105 transition">
            Support Penguins
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 relative text-center">
        <div className="max-w-5xl mx-auto px-6">
          <div className="inline-flex items-center gap-2 bg-purple-950/50 border border-purple-500/30 rounded-full px-5 py-1.5 text-sm mb-6">
            🐧 SOLANA CHARITY PROJECT
          </div>
          
          <h1 className="text-6xl md:text-7xl font-bold leading-tight mb-6">
            Save The Penguins.<br />
            <span className="bg-gradient-to-r from-purple-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Support The Colony.
            </span>
          </h1>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            LostPengu AI Agent, yalnız ve yardıma muhtaç penguenler için mücadele eden ilk otonom charity projesidir.
          </p>
        </div>
      </section>

      {/* Token Address */}
      <div className="max-w-4xl mx-auto px-6 mb-20">
        <div className="bg-zinc-950 border border-purple-500/30 rounded-3xl p-8 text-center">
          <p className="text-purple-400 text-sm mb-3">TOKEN CONTRACT ADDRESS</p>
          <div className="bg-black/70 p-5 rounded-2xl font-mono text-sm break-all border border-purple-500/20">
            Coming Soon After Launch...
          </div>
          <p className="text-xs text-gray-500 mt-4">Will be announced on Pump.fun</p>
        </div>
      </div>

      {/* Story Section */}
      <section id="story" className="py-20 border-t border-purple-500/20">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-5xl font-bold text-center mb-4">LostPengu&apos;s Story</h2>
          <p className="text-center text-gray-400 mb-16">From rescue to real impact</p>
          {/* Chapterlar buraya eklenecek */}
        </div>
      </section>

      {/* Why LostPengu */}
      <section className="py-20 bg-zinc-950 border-t border-purple-500/20">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-4">Why LostPengu Exists</h2>
          <p className="text-center text-gray-400 mb-12">Built for purpose, not hype</p>
          {/* Kartlar buraya */}
        </div>
      </section>

      {/* Live Charity Tracking */}
      <section id="donate" className="py-20 border-t border-purple-500/20">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-5xl font-bold mb-6">Live Charity Tracking</h2>
          <p className="text-gray-400 mb-12">Her bağış şeffaf bir şekilde takip ediliyor</p>
          {/* Donation kartı */}
        </div>
      </section>

      {/* How to Support */}
      <section id="howto" className="py-20 bg-zinc-950 border-t border-purple-500/20">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-5xl font-bold text-center mb-4">How to Support Penguins</h2>
          <p className="text-center text-gray-400 mb-16">4 basit adımda penguenlere yardım et</p>
          {/* Adımlar buraya */}
        </div>
      </section>

      {/* Footer - Sosyal Medya Butonları */}
      <footer className="bg-black border-t border-purple-500/30 py-12">
        <div className="max-w-5xl mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-6">
            <a href="https://x.com/lostpengusup" target="_blank" className="flex items-center gap-3 bg-zinc-900 hover:bg-zinc-800 transition px-6 py-4 rounded-2xl border border-purple-500/20">
              <span className="text-2xl">𝕏</span>
              <span>Twitter / X</span>
            </a>
            
            <a href="#" target="_blank" className="flex items-center gap-3 bg-zinc-900 hover:bg-zinc-800 transition px-6 py-4 rounded-2xl border border-purple-500/20">
              <span className="text-2xl">📢</span>
              <span>Telegram</span>
            </a>
            
            <a href="https://github.com/lostpengu0-crypto/lostpengu-ai-agent" target="_blank" className="flex items-center gap-3 bg-zinc-900 hover:bg-zinc-800 transition px-6 py-4 rounded-2xl border border-purple-500/20">
              <span className="text-2xl">🐙</span>
              <span>GitHub</span>
            </a>
            
            <a href="#" target="_blank" className="flex items-center gap-3 bg-zinc-900 hover:bg-zinc-800 transition px-6 py-4 rounded-2xl border border-purple-500/20">
              <span className="text-2xl">🔴</span>
              <span>Reddit</span>
            </a>
          </div>

          <p className="text-center text-gray-500 text-sm mt-10">
            © 2026 LostPengu Charity AI Agent • All Rights Reserved
          </p>
        </div>
      </footer>
    </div>
  );
}
