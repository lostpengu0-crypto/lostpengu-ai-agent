'use client';

import React, { useEffect } from 'react';

export default function LostPengu() {
  // MATRIX RAIN (Kayan kod yağmuru)
  useEffect(() => {
    const canvas = document.createElement('canvas');
    canvas.style.position = 'fixed';
    canvas.style.top = '0';
    canvas.style.left = '0';
    canvas.style.zIndex = '-1';
    canvas.style.opacity = '0.32';
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

    const chars = '01🐧LOSTPENGU AI CODE EARN PLAY RESCUE SOLANA'.split('');
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

      {/* HERO SECTION */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <img 
          src="/hero.jpg" 
          alt="LostPengu AI Penguin" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/70 to-black/90"></div>

        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
          <h1 className="text-6xl md:text-7xl font-bold leading-tight mb-6">
            The First AI Penguin<br />
            <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              That Codes Itself
            </span>
          </h1>
          <p className="text-2xl text-gray-100 max-w-3xl mx-auto mb-10">
            Kendi kendine kod yazan, oyun oynayan ve Antarktika’daki penguenleri kurtarmak için çalışan ilk AI ajan.
          </p>

          <div className="flex flex-col sm:flex-row gap-5 justify-center">
            <a href="#token" className="bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 px-10 py-5 rounded-3xl text-xl font-bold hover:scale-105 transition">
              Buy $LOSTPENGU
            </a>
            <a href="#play" className="border-2 border-cyan-400 px-10 py-5 rounded-3xl text-xl font-bold hover:bg-white/10 transition">
              Play Fun Games
            </a>
          </div>
        </div>
      </section>

      {/* PLAY SECTION - Eğlence Odaklı */}
      <section id="play" className="py-24 border-t border-purple-500/30">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-5xl font-bold mb-6">Just For Fun</h2>
          <p className="text-xl text-gray-400 mb-16">Oyunlar sadece seni eğlendirmek için var. Keyfine bak!</p>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-zinc-900 rounded-3xl p-8 hover:scale-105 transition border border-transparent hover:border-cyan-400">
              <div className="text-7xl mb-6">❄️</div>
              <h3 className="text-2xl font-bold mb-3">Penguin Flip</h3>
              <p className="text-gray-400">Zamanlamanı test et</p>
            </div>

            <div className="bg-zinc-900 rounded-3xl p-8 hover:scale-105 transition border border-transparent hover:border-cyan-400">
              <div className="text-7xl mb-6">🏔️</div>
              <h3 className="text-2xl font-bold mb-3">Ice Slide</h3>
              <p className="text-gray-400">Kay ve eğlen</p>
            </div>

            <div className="bg-zinc-900 rounded-3xl p-8 hover:scale-105 transition border border-transparent hover:border-cyan-400">
              <div className="text-7xl mb-6">🧊</div>
              <h3 className="text-2xl font-bold mb-3">Colony Match</h3>
              <p className="text-gray-400">Eşleştirme oyunu</p>
            </div>
          </div>

          <button className="mt-12 bg-white text-black px-12 py-6 rounded-3xl text-xl font-bold hover:scale-105 transition">
            🎮 Start Playing
          </button>
        </div>
      </section>

      {/* TOKEN SECTION */}
      <section id="token" className="py-24 bg-zinc-950 border-t border-purple-500/30">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-5xl font-bold mb-6">$LOSTPENGU</h2>
          <p className="text-2xl text-gray-300 mb-12">The token behind the first self-coding AI penguin</p>

          <div className="bg-black border border-cyan-500/50 rounded-3xl p-12 max-w-lg mx-auto">
            <p className="text-cyan-400 mb-4">LAUNCHING SOON</p>
            <div className="text-4xl font-mono mb-8 text-white/80">Pump.fun</div>
            
            <a href="#" className="block bg-gradient-to-r from-cyan-400 to-purple-500 text-black py-6 rounded-2xl text-2xl font-bold hover:scale-105 transition">
              Get $LOSTPENGU →
            </a>
          </div>
        </div>
      </section>

      {/* STORY */}
      <section id="story" className="py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-8">LostPengu&apos;s Story</h2>
          <p className="text-lg text-gray-300 leading-relaxed">
            Kendi kendine kod yazabilen ilk AI penguen. 
            Sürekli gelişiyor, oyunlar üretiyor ve Antarktika’daki penguen dostlarını korumak için çalışıyor.
          </p>
        </div>
      </section>

      {/* DONATE - En altta ve küçük */}
      <section id="donate" className="py-16 border-t border-purple-500/30 bg-black/50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Want to Help Directly?</h2>
          <p className="text-gray-400 mb-8">Token dışında ekstra destek olmak istersen</p>
          <button className="bg-purple-600 hover:bg-purple-700 px-10 py-4 rounded-2xl text-lg">
            Donate 🐧
          </button>
        </div>
      </section>

      <footer className="bg-black py-10 text-center text-gray-500 border-t border-cyan-500/20">
        © 2026 $LOSTPENGU • First Self-Coding AI Penguin Agent
      </footer>
    </div>
  );
}
