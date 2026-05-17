'use client';

import React from 'react';

export default function LostPenguCharity() {
  return (
    <div className="min-h-screen bg-black text-white overflow-hidden relative">
      {/* Aurora Background */}
      <div className="fixed inset-0 bg-[radial-gradient(at_top,#4b0082_0%,#000000_70%)] opacity-60"></div>

      {/* Navbar */}
      <nav className="fixed top-0 w-full z-50 bg-black/90 backdrop-blur-md border-b border-purple-500/30">
        <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="text-3xl">🐧</div>
            <div>
              <h1 className="text-2xl font-bold">LostPengu</h1>
              <p className="text-purple-400 text-sm -mt-1">CHARITY AI AGENT</p>
            </div>
          </div>
          <div className="flex gap-8 text-sm">
            <a href="#story" className="hover:text-purple-400">Story</a>
            <a href="#impact" className="hover:text-purple-400">Impact</a>
            <a href="#donate" className="hover:text-purple-400">Donate</a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-24 relative text-center">
        <div className="max-w-5xl mx-auto px-6">
          <h1 className="text-6xl md:text-7xl font-bold leading-tight mb-6">
            Save The Penguins.<br />
            <span className="bg-gradient-to-r from-purple-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent">
              One Flip At A Time.
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            LostPengu AI Agent, yalnız ve yardıma muhtaç penguenler için mücadele eden ilk otonom charity projesidir.
          </p>
        </div>
      </section>

      {/* Token Address */}
      <div className="max-w-4xl mx-auto px-6 mb-20">
        <div className="bg-zinc-950 border border-purple-500/30 rounded-3xl p-8 text-center">
          <p className="text-purple-400 mb-3">TOKEN CONTRACT ADDRESS</p>
          <div className="bg-black p-5 rounded-2xl font-mono text-sm break-all">
            Coming Soon After Launch...
          </div>
        </div>
      </div>

      {/* Story Section */}
      <section id="story" className="py-20 border-t border-purple-500/20">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-5xl font-bold text-center mb-16">The Story of LostPengu</h2>
          
          <div className="space-y-16">
            {/* Chapter 1 */}
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <div>
                <h3 className="text-purple-400 text-sm">CHAPTER 1</h3>
                <h4 className="text-4xl font-bold mt-2">Rescue</h4>
                <p className="text-gray-300 mt-4">LostPengu, soğuk Antarktika'da yalnız kalan ve insan müdahalesine ihtiyaç duyan penguenlerin hikayesini anlatıyor.</p>
              </div>
              <div className="bg-zinc-900 rounded-3xl p-8 text-center">🐧 Görsel gelecek</div>
            </div>

            {/* Chapter 2, 3, 4 gelecek... */}
          </div>
        </div>
      </section>

      {/* Donate Section */}
      <section id="donate" className="py-20 bg-zinc-950 border-t border-purple-500/20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-5xl font-bold mb-6">Support The Penguins Now</h2>
          <p className="text-xl text-gray-400 mb-10">Her bağış doğrudan penguenlerin kurtarılmasına ve korunmasına gidiyor.</p>
          
          <button className="bg-gradient-to-r from-purple-600 to-purple-500 text-white text-xl px-12 py-6 rounded-3xl font-semibold hover:scale-105 transition">
            Donate Now 🐧
          </button>
        </div>
      </section>

      <div className="h-32"></div>
    </div>
  );
}
