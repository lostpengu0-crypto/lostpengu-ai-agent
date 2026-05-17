'use client';

import React, { useEffect } from 'react';

export default function LostPenguCharity() {
  // Matrix Rain
  useEffect(() => {
    const canvas = document.createElement('canvas');
    canvas.style.position = 'fixed';
    canvas.style.top = '0';
    canvas.style.left = '0';
    canvas.style.zIndex = '-1';
    canvas.style.opacity = '0.35';
    canvas.style.pointerEvents = 'none';
    document.body.appendChild(canvas);

    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    let width = window.innerWidth;
    let height = window.innerHeight;

    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };
    resize();
    window.addEventListener('resize', resize);

    const chars = '01🐧LOSTPENGU PENGUIN AI AGENT RESCUE COLONY SOLANA'.split('');
    const fontSize = 16;
    const columns = Math.floor(width / fontSize);
    const drops = new Array(columns).fill(1);

    const draw = () => {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';
      ctx.fillRect(0, 0, width, height);
      ctx.fillStyle = '#67e8f9';
      ctx.font = `${fontSize}px monospace`;

      for (let i = 0; i < drops.length; i++) {
        const text = chars[Math.floor(Math.random() * chars.length)];
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        if (drops[i] * fontSize > height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }
    };

    const interval = setInterval(draw, 40);

    return () => {
      clearInterval(interval);
      window.removeEventListener('resize', resize);
      if (document.body.contains(canvas)) document.body.removeChild(canvas);
    };
  }, []);

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden relative">
      {/* Animated Aurora */}
      <div className="fixed inset-0 bg-[radial-gradient(at_top,#4b0082_0%,#00f0ff_30%,#8b00ff_60%,#000000_90%)] opacity-40 pointer-events-none animate-pulse"></div>
      <div className="fixed inset-0 bg-[radial-gradient(at_bottom,#ff00ff_0%,transparent_70%)] opacity-30 pointer-events-none animate-[pulse_8s_ease-in-out_infinite]"></div>

      {/* Navbar */}
      <nav className="fixed top-0 w-full z-50 bg-black/90 backdrop-blur-md border-b border-cyan-500/40">
        <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="text-4xl drop-shadow-[0_0_15px_#22f0ff]">🐧</div>
            <div>
              <h1 className="text-2xl font-bold tracking-tighter">LOSTPENGU</h1>
              <p className="text-cyan-400 text-sm -mt-1">CHARITY AI AGENT</p>
            </div>
          </div>
          
          <div className="hidden md:flex items-center gap-8 text-sm">
            <a href="#story" className="hover:text-cyan-400 transition">Story</a>
            <a href="#impact" className="hover:text-cyan-400 transition">Impact</a>
            <a href="#donate" className="hover:text-cyan-400 transition">Donate</a>
            <a href="#howto" className="hover:text-cyan-400 transition">How to Support</a>
          </div>

          <button className="bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 px-6 py-3 rounded-full font-medium hover:scale-105 transition shadow-lg shadow-purple-500/50">
            Support Penguins
          </button>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <img 
          src="/hero.jpg" 
          alt="Penguin Colony with Aurora" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/70 to-black/90"></div>

        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-black/60 border border-cyan-400/50 rounded-full px-5 py-1.5 text-sm mb-6">
            🐧 SOLANA CHARITY PROJECT
          </div>
          
          <h1 className="text-6xl md:text-7xl font-bold leading-tight mb-6">
            Save The Penguins.<br />
            <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Support The Colony.
            </span>
          </h1>
          
          <p className="text-xl text-gray-100 max-w-3xl mx-auto">
            LostPengu AI Agent is the first autonomous charity project fighting for lonely and needy penguins.
          </p>
        </div>
      </section>

      {/* Token Address */}
      <div className="max-w-4xl mx-auto px-6 mb-20">
        <div className="bg-zinc-950 border border-cyan-500/40 rounded-3xl p-8 text-center">
          <p className="text-cyan-400 text-sm mb-3">TOKEN CONTRACT ADDRESS</p>
          <div className="bg-black/70 p-5 rounded-2xl font-mono text-sm break-all border border-purple-500/30">
            Coming Soon After Launch...
          </div>
          <p className="text-xs text-gray-500 mt-4">Will be announced on Pump.fun</p>
        </div>
      </div>

      {/* Story Section */}
      <section id="story" className="py-20 border-t border-purple-500/30">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-5xl font-bold text-center mb-4">LostPengu&apos;s Story</h2>
          <p className="text-center text-gray-400 mb-16">From rescue to real impact</p>

          <div className="space-y-24">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-cyan-400">CHAPTER 1</h3>
                <h4 className="text-4xl font-bold mt-3">Rescue</h4>
                <p className="text-gray-300 mt-6">Penguins struggling in the harsh conditions of Antarctica were noticed by LostPengu AI Agent and their rescue journey began.</p>
              </div>
              <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-purple-500/30">
                <img src="/pengu.jpg" alt="Penguin Rescue" className="w-full h-full object-cover hover:scale-105 transition duration-700" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black border-t border-cyan-500/30 py-16">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <div className="flex flex-wrap justify-center gap-6 mb-12">
            <a href="https://x.com/lostpengusup" target="_blank" className="flex items-center gap-3 bg-zinc-900 hover:bg-zinc-800 px-8 py-5 rounded-2xl border border-cyan-500/30 hover:border-cyan-400 transition">
              <span className="text-3xl">𝕏</span><span>X</span>
            </a>
            <a href="#" target="_blank" className="flex items-center gap-3 bg-zinc-900 hover:bg-zinc-800 px-8 py-5 rounded-2xl border border-cyan-500/30 hover:border-cyan-400 transition">
              <span className="text-3xl">📢</span><span>Telegram</span>
            </a>
            <a href="https://github.com/lostpengu0-crypto/lostpengu-ai-agent" target="_blank" className="flex items-center gap-3 bg-zinc-900 hover:bg-zinc-800 px-8 py-5 rounded-2xl border border-cyan-500/30 hover:border-cyan-400 transition">
              <span className="text-3xl">🐙</span><span>GitHub</span>
            </a>
            <a href="#" target="_blank" className="flex items-center gap-3 bg-zinc-900 hover:bg-zinc-800 px-8 py-5 rounded-2xl border border-cyan-500/30 hover:border-cyan-400 transition">
              <span className="text-3xl">🔴</span><span>Reddit</span>
            </a>
          </div>
          <p className="text-gray-500">© 2026 LostPengu Charity AI Agent • All Rights Reserved</p>
        </div>
      </footer>
    </div>
  );
}
