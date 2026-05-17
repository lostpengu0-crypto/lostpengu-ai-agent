'use client';

import React, { useEffect } from 'react';

export default function LostPenguCharity() {
  // MATRIX RAIN (Kayan kod yağmuru)
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

    const chars = '01🐧LOSTPENGU PENGUIN AI AGENT SELF-CODING AUTONOMOUS RESCUE COLONY SOLANA'.split('');
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
            <a href="#impact" className="hover:text-cyan-400 transition">Impact</a>
            <a href="#games" className="hover:text-cyan-400 transition">Play & Earn</a>
            <a href="#donate" className="hover:text-cyan-400 transition">Donate</a>
          </div>

          <button className="bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 px-6 py-3 rounded-full font-medium hover:scale-105 transition shadow-lg shadow-purple-500/50">
            Support the Colony
          </button>
        </div>
      </nav>

      {/* HERO */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <img 
          src="/hero.jpg" 
          alt="LostPengu AI Agent" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/70 to-black/90"></div>

        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
          <h1 className="text-6xl md:text-7xl font-bold leading-tight mb-6">
            The First Self-Coding<br />
            <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Penguin AI Agent
            </span>
          </h1>
          <p className="text-xl text-gray-100 max-w-2xl mx-auto">
            We don&apos;t just build charity — we code autonomous AI agents that run forever and automatically donate every earned revenue to real penguin rescue organizations in Antarctica.
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

      {/* STORY */}
      <section id="story" className="py-20 border-t border-purple-500/30">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-5xl font-bold text-center mb-4">LostPengu&apos;s Story</h2>
          <p className="text-center text-gray-400 mb-16">The world&apos;s first self-coding penguin AI agent</p>

          <div className="prose prose-invert max-w-none text-gray-300 space-y-8 text-lg leading-relaxed">
            <p>
              LostPengu was born when a group of developers decided to create something that had never existed before: 
              <strong>an AI agent that can code itself, run itself, and sustain itself</strong>.
            </p>
            <p>
              While most crypto projects chase hype and quick profits, we built an autonomous system. 
              LostPengu AI Agent continuously writes, improves, and deploys new code.
            </p>
            <p>
              Every revenue the agent generates is <strong>automatically sent</strong> to verified penguin rescue organizations in Antarctica. 
              No middleman. Pure code-to-charity pipeline.
            </p>
            <p>
              Our mission is not to make money. Our mission is to make the system sustainable forever.
            </p>
          </div>
        </div>
      </section>

      {/* IMPACT */}
      <section id="impact" className="py-20 bg-zinc-950 border-t border-purple-500/30">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12">Why LostPengu Exists</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: "🧬", title: "Self-Coding AI", desc: "LostPengu writes and improves its own code 24/7" },
              { icon: "⚡", title: "Fully Autonomous", desc: "No team intervention needed after launch" },
              { icon: "🌍", title: "Automatic Donations", desc: "Every revenue goes straight to Antarctic penguin rescues" },
              { icon: "♾️", title: "Sustainable Forever", desc: "Built to run and donate without any profit motive" }
            ].map((item, i) => (
              <div key={i} className="bg-black/70 border border-cyan-500/30 rounded-3xl p-8 hover:border-cyan-400 transition">
                <div className="text-5xl mb-4">{item.icon}</div>
                <h3 className="text-2xl font-semibold mb-3">{item.title}</h3>
                <p className="text-gray-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GAMES */}
      <section id="games" className="py-20 border-t border-purple-500/30">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-5xl font-bold text-center mb-4">Play &amp; Earn for Penguins</h2>
          <p className="text-center text-gray-400 mb-16">
            Mini games that actually help penguins. Every point you score = more automatic donations.
          </p>

          <div className="bg-zinc-900 border border-cyan-500/30 rounded-3xl p-8 mb-12">
            <h3 className="text-2xl font-semibold mb-6 text-center">🏆 Global Leaderboard (Live)</h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center bg-black/50 px-6 py-4 rounded-2xl">
                <div className="flex items-center gap-4"><span className="text-cyan-400 font-mono">01</span><span>PenguMaster42</span></div>
                <span className="text-cyan-300 font-bold">12,450 pts</span>
              </div>
              <div className="flex justify-between items-center bg-black/50 px-6 py-4 rounded-2xl">
                <div className="flex items-center gap-4"><span className="text-cyan-400 font-mono">02</span><span>IceFlipKing</span></div>
                <span className="text-cyan-300 font-bold">9,820 pts</span>
              </div>
              <div className="flex justify-between items-center bg-black/50 px-6 py-4 rounded-2xl">
                <div className="flex items-center gap-4"><span className="text-cyan-400 font-mono">03</span><span>AntarcticHero</span></div>
                <span className="text-cyan-300 font-bold">8,710 pts</span>
              </div>
            </div>
          </div>

          <div className="text-center">
            <button className="bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 px-10 py-5 rounded-3xl font-semibold text-xl hover:scale-105 transition">
              Play Mini Games Now 🐧
            </button>
          </div>
        </div>
      </section>

      {/* DONATE */}
      <section id="donate" className="py-20 bg-zinc-950 border-t border-purple-500/30">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-5xl font-bold mb-6">Direct Support</h2>
          <p className="text-gray-400 mb-12">Your donation goes straight into the autonomous system</p>
          
          <button className="bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 text-white text-xl px-12 py-6 rounded-3xl font-semibold hover:scale-105 transition">
            Donate Now 🐧
          </button>
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
          <p className="text-gray-500">© 2026 LostPengu • First Self-Coding Penguin AI Agent</p>
        </div>
      </footer>
    </div>
  );
}
