'use client';

import React, { useEffect, useState } from 'react';

export default function LostPengu() {
  const [showGame, setShowGame] = useState(false);

  // MATRIX RAIN
  useEffect(() => {
    const canvas = document.createElement('canvas');
    canvas.style.position = 'fixed';
    canvas.style.top = '0';
    canvas.style.left = '0';
    canvas.style.zIndex = '-1';
    canvas.style.opacity = '0.45';
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

    const chars = '01🐧LOSTPENGU AI SELF-CODING AUTONOMOUS EARN PLAY RESCUE SOLANA'.split('');
    const fontSize = 17;
    const columns = Math.floor(width / fontSize);
    const drops = new Array(columns).fill(1);

    const draw = () => {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.08)';
      ctx.fillRect(0, 0, width, height);
      ctx.fillStyle = '#67e8f9';
      ctx.font = `${fontSize}px monospace`;

      for (let i = 0; i < drops.length; i++) {
        const text = chars[Math.floor(Math.random() * chars.length)];
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        if (drops[i] * fontSize > height && Math.random() > 0.97) {
          drops[i] = 0;
        }
        drops[i]++;
      }
    };

    const interval = setInterval(draw, 35);

    return () => {
      clearInterval(interval);
      window.removeEventListener('resize', resize);
      if (document.body.contains(canvas)) document.body.removeChild(canvas);
    };
  }, []);

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden relative">
      {/* Aurora Background */}
      <div className="fixed inset-0 bg-[radial-gradient(at_top,#4b0082_0%,#00f0ff_25%,#8b00ff_50%,#4b0082_75%,#000000_100%)] opacity-50 pointer-events-none animate-pulse"></div>
      <div className="fixed inset-0 bg-[radial-gradient(at_bottom,#ff00ff_0%,transparent_60%)] opacity-40 pointer-events-none animate-[pulse_12s_ease-in-out_infinite]"></div>

      {/* Navbar */}
      <nav className="fixed top-0 w-full z-50 bg-black/90 backdrop-blur-md border-b border-cyan-500/40">
        <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="text-4xl drop-shadow-[0_0_20px_#22f0ff]">🐧</div>
            <div>
              <h1 className="text-2xl font-bold tracking-tighter">$LOSTPENGU</h1>
              <p className="text-cyan-400 text-sm -mt-1">SELF-CODING AI AGENT</p>
            </div>
          </div>
          
          <div className="hidden md:flex items-center gap-8 text-sm">
            <a href="#story" className="hover:text-cyan-400 transition">Story</a>
            <a href="#play" className="hover:text-cyan-400 transition">Play</a>
            <a href="#token" className="hover:text-cyan-400 transition">Token</a>
          </div>

          <a href="#token" className="bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 px-6 py-3 rounded-full font-medium hover:scale-105 transition">
            Buy $LOSTPENGU
          </a>
        </div>
      </nav>

      {/* HERO */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <img 
          src="/hero.jpg" 
          alt="LostPengu AI Penguin" 
          className="absolute inset-0 w-full h-full object-cover" 
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/70 to-black/90"></div>

        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
          <h1 className="text-6xl md:text-7xl font-bold leading-tight mb-6">
            The First Self-Coding<br />
            <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              AI Penguin Agent
            </span>
          </h1>
          <p className="text-2xl text-gray-100 max-w-3xl mx-auto mb-10">
            The world&apos;s first AI agent that codes itself, creates entertainment, and helps protect penguins in Antarctica.
          </p>

          <div className="flex flex-col sm:flex-row gap-5 justify-center">
            <a href="#token" className="bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 px-10 py-5 rounded-3xl text-xl font-bold hover:scale-105 transition">
              Buy $LOSTPENGU
            </a>
            <a href="#play" className="border-2 border-cyan-400 px-10 py-5 rounded-3xl text-xl font-bold hover:bg-white/10 transition">
              Play Games
            </a>
          </div>
        </div>
      </section>

      {/* STORY */}
      <section id="story" className="py-24 border-t border-purple-500/30">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-5xl font-bold text-center mb-10">LostPengu&apos;s Story</h2>
          
          <div className="prose prose-invert max-w-none text-gray-300 text-lg leading-relaxed space-y-8">
            <p>
              LostPengu is not just a memecoin. We are building a new system.
            </p>
            <p>
              We created the world&apos;s first <strong>self-coding AI Agent</strong>. 
              This agent can write and improve its own code, develop new features, and grow continuously.
            </p>
            <p>
              Our goal is not temporary hype. We aim to create a <strong>sustainable, long-term ecosystem</strong> that benefits the community.
            </p>
            <p>
              $LOSTPENGU is the core of this ecosystem. People can enjoy themselves, join the community, and support a project with real vision.
            </p>
            <p>
              The games on this site are completely free and made purely for entertainment. Our goal is to give people fun moments and keep the community active.
            </p>
            <p>
              A portion of the system&apos;s revenue is <strong>automatically sent</strong> to penguin protection foundations in Antarctica. 
              Pump.fun rewards and other income streams allow LostPengu to create real impact in the background.
            </p>

            <div className="bg-gradient-to-br from-purple-900/70 to-cyan-900/70 border border-cyan-400/30 rounded-3xl p-10 my-12 text-center">
              <p className="italic text-2xl leading-relaxed text-cyan-200">
                Our vision is to provide both entertainment and earning opportunities for people,<br />
                while contributing to the world by protecting penguins.
              </p>
            </div>

            <p className="text-center text-xl text-purple-300">
              This is only the beginning. LostPengu will continue to evolve, grow its community, and protect penguins — forever.
            </p>
          </div>
        </div>
      </section>

      {/* PLAY SECTION with Real Game */}
      <section id="play" className="py-24 bg-zinc-950 border-t border-purple-500/30">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-5xl font-bold mb-6">Just For Fun</h2>
          <p className="text-xl text-gray-400 mb-12">Games are made purely for entertainment</p>

          {!showGame ? (
            <div className="grid md:grid-cols-3 gap-8">
              <div 
                onClick={() => setShowGame(true)} 
                className="bg-zinc-900 rounded-3xl p-10 hover:scale-105 cursor-pointer transition border border-transparent hover:border-cyan-400"
              >
                <div className="text-7xl mb-6">❄️</div>
                <h3 className="text-2xl font-bold mb-3">Penguin Flip</h3>
                <p className="text-gray-400">Test your timing</p>
              </div>
            </div>
          ) : (
            <div className="max-w-2xl mx-auto">
              <button 
                onClick={() => setShowGame(false)} 
                className="mb-8 text-cyan-400 hover:text-white flex items-center gap-2 mx-auto"
              >
                ← Back to Games
              </button>
              <PenguinFlipGame />
            </div>
          )}
        </div>
      </section>

      {/* TOKEN SECTION */}
      <section id="token" className="py-24 border-t border-purple-500/30">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-5xl font-bold mb-6">$LOSTPENGU</h2>
          <p className="text-2xl text-gray-300 mb-12">The heart of the self-coding AI ecosystem</p>
          
          <div className="bg-zinc-950 border border-cyan-500/40 rounded-3xl p-12 max-w-lg mx-auto">
            <p className="text-cyan-400 text-sm mb-3">LAUNCHING SOON</p>
            <div className="text-5xl font-mono mb-8">Pump.fun</div>
            <a href="#" className="block bg-gradient-to-r from-cyan-400 to-purple-500 text-black py-6 rounded-2xl text-2xl font-bold hover:scale-105 transition">
              Buy $LOSTPENGU →
            </a>
          </div>
        </div>
      </section>

      <footer className="bg-black py-12 text-center text-gray-500 border-t border-cyan-500/30">
        © 2026 $LOSTPENGU • First Self-Coding AI Penguin Agent
      </footer>
    </div>
  );
}

// Simple Penguin Flip Game
function PenguinFlipGame() {
  const [score, setScore] = useState(0);
  const [isFlipping, setIsFlipping] = useState(false);

  const flip = () => {
    if (isFlipping) return;
    setIsFlipping(true);
    
    const success = Math.random() > 0.35;
    if (success) setScore(prev => prev + 10);

    setTimeout(() => setIsFlipping(false), 600);
  };

  return (
    <div className="bg-zinc-900 rounded-3xl p-12 text-center">
      <h3 className="text-3xl font-bold mb-8">🐧 Penguin Flip</h3>
      <div 
        className="text-8xl mb-10 transition-transform duration-700" 
        style={{ transform: isFlipping ? 'rotate(720deg)' : 'rotate(0deg)' }}
      >
        🐧
      </div>
      
      <p className="text-3xl mb-10">Score: <span className="text-cyan-400 font-bold">{score}</span></p>
      
      <button 
        onClick={flip}
        className="bg-gradient-to-r from-cyan-500 to-purple-500 px-16 py-6 rounded-3xl text-2xl font-bold hover:scale-110 transition"
      >
        FLIP THE PENGUIN
      </button>
      
      <p className="text-gray-400 mt-6">Click at the perfect moment!</p>
    </div>
  );
}
