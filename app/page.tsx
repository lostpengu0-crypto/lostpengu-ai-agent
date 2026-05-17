'use client';

import React, { useEffect, useState } from 'react';

export default function LostPengu() {
  const [showGame, setShowGame] = useState(false);
  const [score, setScore] = useState(0);
  const [playerName, setPlayerName] = useState('');
  const [showSaveForm, setShowSaveForm] = useState(false);
  const [leaderboard, setLeaderboard] = useState([
    { name: "PenguKing", score: 2450 },
    { name: "IceMaster", score: 2180 },
    { name: "FlipLord", score: 1970 },
    { name: "SnowDash", score: 1840 },
    { name: "ArcticPro", score: 1720 },
    { name: "ChillPengu", score: 1650 },
    { name: "FrostByte", score: 1580 },
    { name: "GlacierGod", score: 1490 },
    { name: "PolarFlip", score: 1420 },
    { name: "AntarcticAce", score: 1380 },
  ]);

  // MATRIX RAIN
  useEffect(() => {
    const canvas = document.createElement('canvas');
    canvas.style.position = 'fixed';
    canvas.style.top = '0';
    canvas.style.left = '0';
    canvas.style.zIndex = '-1';
    canvas.style.opacity = '0.65';
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

    const chars = '01🐧LOSTPENGU AI SELF-CODING PLAY RESCUE SOLANA'.split('');
    const fontSize = 17;
    const columns = Math.floor(width / fontSize);
    const drops = new Array(columns).fill(1);

    const draw = () => {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';
      ctx.fillRect(0, 0, width, height);
      ctx.fillStyle = '#c026d3';
      ctx.font = `${fontSize}px monospace`;

      for (let i = 0; i < drops.length; i++) {
        const text = chars[Math.floor(Math.random() * chars.length)];
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        if (drops[i] * fontSize > height && Math.random() > 0.96) drops[i] = 0;
        drops[i]++;
      }
    };

    const interval = setInterval(draw, 32);
    return () => clearInterval(interval);
  }, []);

  const saveScore = () => {
    if (!playerName.trim()) return;
    const newEntry = { name: playerName.trim(), score: score };
    const updated = [...leaderboard, newEntry]
      .sort((a, b) => b.score - a.score)
      .slice(0, 20);
    
    setLeaderboard(updated);
    setShowSaveForm(false);
    setPlayerName('');
    alert(`Score saved! You are now on the leaderboard.`);
  };

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden relative">
      {/* Aurora */}
      <div className="fixed inset-0 bg-[radial-gradient(at_top,#4b0082_0%,#a855f7_30%,#c026d3_55%,#000000_90%)] opacity-70 pointer-events-none animate-pulse"></div>
      <div className="fixed inset-0 bg-[radial-gradient(at_bottom,#ec4899_0%,transparent_65%)] opacity-55 pointer-events-none animate-[pulse_10s_ease-in-out_infinite]"></div>

      {/* Navbar */}
      <nav className="fixed top-0 w-full z-50 bg-black/95 backdrop-blur-md border-b border-purple-500/60">
        <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="text-4xl drop-shadow-[0_0_25px_#c026d3]">🐧</div>
            <div>
              <h1 className="text-2xl font-bold tracking-tighter">$LOSTPENGU</h1>
              <p className="text-purple-400 text-sm -mt-1">SELF-CODING AI AGENT</p>
            </div>
          </div>
          
          <div className="hidden md:flex items-center gap-8 text-sm">
            <a href="#story" className="hover:text-purple-400 transition">Story</a>
            <a href="#play" className="hover:text-purple-400 transition">Play</a>
            <a href="#token" className="hover:text-purple-400 transition">Token</a>
          </div>

          <a href="#token" className="bg-gradient-to-r from-purple-600 via-fuchsia-500 to-pink-500 px-6 py-3 rounded-full font-medium hover:scale-105 transition">
            Buy $LOSTPENGU
          </a>
        </div>
      </nav>

      {/* HERO */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <img src="/hero.jpg" alt="LostPengu" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/70 to-black/90"></div>

        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
          <h1 className="text-6xl md:text-7xl font-bold leading-tight mb-6">
            The First Self-Coding<br />
            <span className="bg-gradient-to-r from-purple-400 via-fuchsia-400 to-pink-400 bg-clip-text text-transparent">
              AI Penguin Agent
            </span>
          </h1>
          <p className="text-2xl text-gray-100 max-w-3xl mx-auto mb-10">
            The world&apos;s first AI agent that codes itself, creates fun, and helps protect penguins in Antarctica.
          </p>

          <div className="flex flex-col sm:flex-row gap-5 justify-center">
            <a href="#token" className="bg-gradient-to-r from-purple-600 via-fuchsia-500 to-pink-500 px-10 py-5 rounded-3xl text-xl font-bold hover:scale-105 transition">
              Buy $LOSTPENGU
            </a>
            <a href="#play" className="border-2 border-purple-400 px-10 py-5 rounded-3xl text-xl font-bold hover:bg-white/10 transition">
              Play Mini Games
            </a>
          </div>
        </div>
      </section>

      {/* PLAY SECTION - İSTEDİĞİN OYUN */}
      <section id="play" className="py-24 bg-zinc-950 border-t border-purple-500/30">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-5xl font-bold mb-6">Just For Fun</h2>
          <p className="text-xl text-gray-400 mb-12">Penguin Jump</p>

          {!showGame ? (
            <div className="max-w-md mx-auto">
              <div onClick={() => setShowGame(true)} className="bg-zinc-900 rounded-3xl p-12 hover:scale-105 cursor-pointer transition border border-transparent hover:border-purple-400">
                <div className="text-8xl mb-6">🐧</div>
                <h3 className="text-3xl font-bold mb-3">Penguin Jump</h3>
                <p className="text-gray-400">Jump as high as you can!</p>
              </div>
            </div>
          ) : (
            <div className="max-w-4xl mx-auto">
              <button onClick={() => setShowGame(false)} className="mb-6 text-purple-400 hover:text-white">
                ← Back to Games
              </button>
              <iframe 
                src="https://html5games.com/game/penguin-jump" 
                width="100%" 
                height="700" 
                className="rounded-3xl border border-purple-500/30 shadow-2xl"
                allowFullScreen
              />
            </div>
          )}

          {/* LEADERBOARD */}
          <div className="mt-16">
            <h3 className="text-3xl font-bold mb-6">🏆 Global Leaderboard</h3>
            <div className="bg-zinc-900 rounded-3xl p-8 max-w-2xl mx-auto">
              {leaderboard.map((entry, index) => (
                <div key={index} className="flex justify-between items-center py-3 border-b border-gray-700 last:border-0">
                  <div className="flex items-center gap-4">
                    <span className="text-purple-400 font-mono w-8">{index + 1}</span>
                    <span>{entry.name}</span>
                  </div>
                  <span className="font-bold text-purple-300">{entry.score}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* STORY */}
      <section id="story" className="py-24 border-t border-purple-500/30">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-5xl font-bold text-center mb-10">LostPengu&apos;s Story</h2>
          <p className="text-lg text-gray-300 text-center">The world&apos;s first self-coding AI Penguin Agent.</p>
        </div>
      </section>

      {/* TOKEN */}
      <section id="token" className="py-24 border-t border-purple-500/30">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-5xl font-bold mb-6">$LOSTPENGU</h2>
          <p className="text-2xl text-gray-300 mb-12">The heart of the self-coding AI ecosystem</p>
          <div className="bg-zinc-950 border border-purple-500/40 rounded-3xl p-12 max-w-lg mx-auto">
            <p className="text-purple-400 text-sm mb-3">LAUNCHING SOON</p>
            <div className="text-5xl font-mono mb-8">Pump.fun</div>
            <a href="#" className="block bg-gradient-to-r from-purple-500 to-pink-500 text-black py-6 rounded-2xl text-2xl font-bold hover:scale-105 transition">
              Buy $LOSTPENGU →
            </a>
          </div>
        </div>
      </section>

      {/* SOCIAL BUTTONS */}
      <footer className="bg-black py-16 border-t border-purple-500/30">
        <div className="max-w-5xl mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-6">
            <a href="https://x.com/lostpengu0" target="_blank" className="flex items-center gap-3 bg-zinc-900 hover:bg-zinc-800 px-8 py-5 rounded-2xl border border-purple-500/30 hover:border-purple-400 transition">
              <span className="text-3xl">𝕏</span><span>X</span>
            </a>
            <a href="https://t.me/LostPengu0" target="_blank" className="flex items-center gap-3 bg-zinc-900 hover:bg-zinc-800 px-8 py-5 rounded-2xl border border-purple-500/30 hover:border-purple-400 transition">
              <span className="text-3xl">📢</span><span>Telegram</span>
            </a>
            <a href="https://github.com/lostpengu0-crypto" target="_blank" className="flex items-center gap-3 bg-zinc-900 hover:bg-zinc-800 px-8 py-5 rounded-2xl border border-purple-500/30 hover:border-purple-400 transition">
              <span className="text-3xl">🐙</span><span>GitHub</span>
            </a>
            <a href="https://www.reddit.com/u/lostpengu01/s/piPat6VW8Z" target="_blank" className="flex items-center gap-3 bg-zinc-900 hover:bg-zinc-800 px-8 py-5 rounded-2xl border border-purple-500/30 hover:border-purple-400 transition">
              <span className="text-3xl">🔴</span><span>Reddit</span>
            </a>
          </div>

          <p className="text-center text-gray-500 mt-10">
            © 2026 $LOSTPENGU • First Self-Coding AI Penguin Agent
          </p>
        </div>
      </footer>

      {/* Save Score Modal */}
      {showSaveForm && (
        <div className="fixed inset-0 bg-black/90 flex items-center justify-center z-50">
          <div className="bg-zinc-900 rounded-3xl p-10 max-w-md w-full mx-4">
            <h3 className="text-3xl font-bold mb-6 text-center">Save Your Score</h3>
            <p className="text-center mb-6">Final Score: <span className="text-purple-400 font-bold text-2xl">{score}</span></p>
            
            <input
              type="text"
              placeholder="Enter your name"
              value={playerName}
              onChange={(e) => setPlayerName(e.target.value)}
              className="w-full bg-black border border-purple-500 rounded-2xl px-6 py-4 text-center text-xl mb-6 outline-none"
            />
            
            <div className="flex gap-4">
              <button onClick={() => setShowSaveForm(false)} className="flex-1 py-4 rounded-2xl border border-gray-600">
                Cancel
              </button>
              <button onClick={saveScore} className="flex-1 py-4 rounded-2xl bg-gradient-to-r from-purple-500 to-pink-500 font-bold">
                Save Score
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

// Penguin Jump Game
function PenguinJumpGame({ score, setScore, setShowSaveForm }: any) {
  const [isJumping, setIsJumping] = useState(false);

  const jump = () => {
    if (isJumping) return;
    setIsJumping(true);
    setScore((prev: number) => prev + Math.floor(Math.random() * 8) + 5);
    setTimeout(() => setIsJumping(false), 650);
  };

  return (
    <div className="bg-zinc-900 rounded-3xl p-12 text-center">
      <h3 className="text-3xl font-bold mb-8">🐧 Penguin Jump</h3>
      
      <div className="relative h-80 bg-gradient-to-b from-sky-950 to-slate-900 rounded-2xl overflow-hidden mb-8 border border-purple-500/30 flex items-center justify-center">
        <div className={`text-8xl transition-all duration-700 ${isJumping ? '-translate-y-52' : 'translate-y-0'}`}>
          🐧
        </div>
      </div>

      <p className="text-4xl mb-8">Score: <span className="text-purple-400 font-bold">{score}</span></p>

      <button 
        onClick={jump}
        className="bg-gradient-to-r from-purple-500 to-pink-500 px-16 py-6 rounded-3xl text-2xl font-bold hover:scale-110 transition w-full"
      >
        JUMP
      </button>

      <button 
        onClick={() => setShowSaveForm(true)}
        className="mt-6 text-purple-400 hover:text-white underline"
      >
        Save My Score
      </button>
    </div>
  );
}
