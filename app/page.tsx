'use client';

import React, { useEffect } from 'react';

export default function LostPenguCharity() {
  // MATRIX RAIN
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

    const chars = '01🐧LOSTPENGU AI CODE EARN PLAY RESCUE PENGUIN'.split('');
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
      {/* Aurora Background */}
      <div className="fixed inset-0 bg-[radial-gradient(at_top,#4b0082_0%,#00f0ff_30%,#8b00ff_60%,#000000_90%)] opacity-40 pointer-events-none animate-pulse"></div>
      <div className="fixed inset-0 bg-[radial-gradient(at_bottom,#ff00ff_0%,transparent_70%)] opacity-30 pointer-events-none animate-[pulse_8s_ease-in-out_infinite]"></div>

      {/* Navbar */}
      <nav className="fixed top-0 w-full z-50 bg-black/90 backdrop-blur-md border-b border-cyan-500/40">
        <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="text-4xl drop-shadow-[0_0_15px_#22f0ff]">🐧</div>
            <div>
              <h1 className="text-2xl font-bold tracking-tighter">LOSTPENGU</h1>
              <p className="text-cyan-400 text-sm -mt-1">SELF-CODING AI AGENT</p>
            </div>
          </div>
          
          <div className="hidden md:flex items-center gap-8 text-sm">
            <a href="#story" className="hover:text-cyan-400 transition">Story</a>
            <a href="#games" className="hover:text-cyan-400 transition">Play & Earn</a>
            <a href="#impact" className="hover:text-cyan-400 transition">Impact</a>
            <a href="#donate" className="hover:text-cyan-400 transition">Donate</a>
          </div>

          <button className="bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 px-6 py-3 rounded-full font-medium hover:scale-105 transition">
            Join the Colony
          </button>
        </div>
      </nav>

      {/* HERO - Eğlenceli Hook */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <img 
          src="/hero.jpg" 
          alt="LostPengu AI Agent" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/70 to-black/90"></div>

        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
          <h1 className="text-6xl md:text-7xl font-bold leading-tight mb-6">
            The AI Penguin That<br />
            <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Codes, Earns &amp; Saves
            </span>
          </h1>
          <p className="text-2xl text-gray-100 max-w-3xl mx-auto">
            The world’s first self-coding AI agent that earns crypto, plays games, and automatically saves penguins in Antarctica.
          </p>
        </div>
      </section>

      {/* GAMES SECTION - Şimdi daha önde ve eğlenceli */}
      <section id="games" className="py-24 border-t border-purple-500/30">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-5xl font-bold mb-6">Play Games • Earn Points • Save Penguins</h2>
          <p className="text-xl text-gray-400 mb-12">Ne kadar çok oynarsan, o kadar çok penguen kurtulur!</p>

          <div className="bg-zinc-900 border border-cyan-500/30 rounded-3xl p-10 mb-12">
            <h3 className="text-2xl font-semibold mb-8">🏆 Live Leaderboard</h3>
            {/* Buraya ileride gerçek oyun skorları gelecek */}
            <div className="space-y-4 max-w-md mx-auto">
              <div className="flex justify-between bg-black/60 px-6 py-4 rounded-2xl">
                <span>1. PenguMaster42</span>
                <span className="text-cyan-400">14,820 pts</span>
              </div>
              <div className="flex justify-between bg-black/60 px-6 py-4 rounded-2xl">
                <span>2. IceFlipKing</span>
                <span className="text-cyan-400">11,450 pts</span>
              </div>
              <div className="flex justify-between bg-black/60 px-6 py-4 rounded-2xl">
                <span>3. AntarcticFlip</span>
                <span className="text-cyan-400">9,920 pts</span>
              </div>
            </div>
          </div>

          <button className="bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 text-xl px-12 py-6 rounded-3xl font-bold hover:scale-110 transition">
            🎮 Play Mini Games Now
          </button>
        </div>
      </section>

      {/* STORY */}
      <section id="story" className="py-20 bg-zinc-950">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-5xl font-bold text-center mb-8">LostPengu&apos;s Story</h2>
          <p className="text-center text-gray-400 mb-12">The world’s first self-coding penguin AI</p>
          
          <div className="text-lg text-gray-300 space-y-6 leading-relaxed">
            <p>We created an AI that can code itself, improve itself, and earn by itself.</p>
            <p>Every time it earns, a part of the revenue is automatically sent to real penguin rescue organizations in Antarctica.</p>
            <p>No team, no manual donations — pure autonomous penguin saving machine.</p>
          </div>
        </div>
      </section>

      {/* DONATE - En alta koyduk */}
      <section id="donate" className="py-20 border-t border-purple-500/30">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-4">Want to Support Directly?</h2>
          <p className="text-gray-400 mb-10">Every donation helps the autonomous system rescue more penguins.</p>
          
          <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-xl px-12 py-6 rounded-3xl font-semibold hover:scale-105 transition">
            Donate Now 🐧
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black border-t border-cyan-500/30 py-12">
        <div className="max-w-5xl mx-auto px-6 text-center text-gray-500">
          © 2026 LostPengu • First Self-Coding Penguin AI Agent
        </div>
      </footer>
    </div>
  );
}
