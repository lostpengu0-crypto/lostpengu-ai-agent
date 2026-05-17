'use client';

import React, { useEffect } from 'react';

export default function LostPenguCharity() {
  // Matrix Rain Effect
  useEffect(() => {
    const canvas = document.createElement('canvas');
    canvas.style.position = 'fixed';
    canvas.style.top = '0';
    canvas.style.left = '0';
    canvas.style.zIndex = '-1';
    canvas.style.opacity = '0.15';
    canvas.style.pointerEvents = 'none';
    document.body.appendChild(canvas);

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resize = () => {
      canvas.height = window.innerHeight;
      canvas.width = window.innerWidth;
    };
    resize();
    window.addEventListener('resize', resize);

    const chars = '01アイウエオ penguin LOSTPENGU AI AGENT  penguins  🐧'.split('');
    const fontSize = 14;
    const columns = canvas.width / fontSize;
    const drops: number[] = new Array(Math.floor(columns)).fill(1);

    const draw = () => {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = '#a855f7';
      ctx.font = `${fontSize}px monospace`;

      for (let i = 0; i < drops.length; i++) {
        const text = chars[Math.floor(Math.random() * chars.length)];
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }
    };

    const interval = setInterval(draw, 35);

    return () => {
      clearInterval(interval);
      window.removeEventListener('resize', resize);
      document.body.removeChild(canvas);
    };
  }, []);

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden relative">
      {/* Aurora Background */}
      <div className="fixed inset-0 bg-[radial-gradient(at_top,#4b0082_0%,#0a001f_50%,#000000_80%)] opacity-60 pointer-events-none"></div>

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

      {/* Diğer bölümler (Story, Why, Donate, How to Support) */}
      <section id="story" className="py-20 border-t border-purple-500/20">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-5xl font-bold mb-4">LostPengu&apos;s Story</h2>
          <p className="text-gray-400">From rescue to real impact</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black border-t border-purple-500/30 py-12">
        <div className="max-w-5xl mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-6">
            <a href="https://x.com/lostpengusup" target="_blank" className="flex items-center gap-3 bg-zinc-900 hover:bg-zinc-800 px-6 py-4 rounded-2xl border border-purple-500/20 hover:border-purple-500 transition">
              <span className="text-2xl">𝕏</span>
              <span>X</span>
            </a>
            <a href="#" target="_blank" className="flex items-center gap-3 bg-zinc-900 hover:bg-zinc-800 px-6 py-4 rounded-2xl border border-purple-500/20 hover:border-purple-500 transition">
              <span className="text-2xl">📢</span>
              <span>Telegram</span>
            </a>
            <a href="https://github.com/lostpengu0-crypto/lostpengu-ai-agent" target="_blank" className="flex items-center gap-3 bg-zinc-900 hover:bg-zinc-800 px-6 py-4 rounded-2xl border border-purple-500/20 hover:border-purple-500 transition">
              <span className="text-2xl">🐙</span>
              <span>GitHub</span>
            </a>
            <a href="#" target="_blank" className="flex items-center gap-3 bg-zinc-900 hover:bg-zinc-800 px-6 py-4 rounded-2xl border border-purple-500/20 hover:border-purple-500 transition">
              <span className="text-2xl">🔴</span>
              <span>Reddit</span>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
