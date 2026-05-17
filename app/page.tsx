'use client';

import React, { useEffect } from 'react';

export default function LostPenguCharity() {
  // Matrix Rain + Aurora
  useEffect(() => {
    const canvas = document.createElement('canvas');
    canvas.style.position = 'fixed';
    canvas.style.top = '0';
    canvas.style.left = '0';
    canvas.style.zIndex = '-1';
    canvas.style.opacity = '0.18';
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

    const chars = '01🐧LOSTPENGU PENGUIN AI AGENT RESCUE COLONY 冰'.split('');
    const fontSize = 14;
    const columns = canvas.width / fontSize;
    const drops: number[] = new Array(Math.floor(columns)).fill(1);

    const draw = () => {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.06)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = '#c026d3';
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
      if (document.body.contains(canvas)) document.body.removeChild(canvas);
    };
  }, []);

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden relative">
      {/* Aurora Background */}
      <div className="fixed inset-0 bg-[radial-gradient(at_top,#4b0082_0%,#1e0033_40%,#000000_80%)] opacity-75 pointer-events-none"></div>

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

      {/* Hero */}
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

          <div className="space-y-20">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-purple-400">CHAPTER 1</h3>
                <h4 className="text-4xl font-bold mt-3">Rescue</h4>
                <p className="text-gray-300 mt-6">Antarktika&apos;nın zorlu koşullarında yalnız kalan penguenler, LostPengu AI Agent tarafından fark edildi.</p>
              </div>
              <div className="bg-zinc-900 rounded-3xl aspect-video flex items-center justify-center text-7xl border border-purple-500/20">🐧</div>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="bg-zinc-900 rounded-3xl aspect-video flex items-center justify-center text-7xl border border-purple-500/20">❄️</div>
              <div>
                <h3 className="text-purple-400">CHAPTER 2</h3>
                <h4 className="text-4xl font-bold mt-3">Hope</h4>
                <p className="text-gray-300 mt-6">Her penguenin ikinci bir şansı hak ettiğine inanıyoruz. LostPengu bu umudu gerçeğe dönüştürüyor.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why LostPengu Exists */}
      <section id="impact" className="py-20 bg-zinc-950 border-t border-purple-500/20">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-4">Why LostPengu Exists</h2>
          <p className="text-center text-gray-400 mb-12">Built for purpose, not hype</p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: "❤️", title: "Real Impact", desc: "Bağışlar doğrudan penguen kurtarma, beslenme ve koruma çalışmalarına gidiyor." },
              { icon: "🔍", title: "Transparent Giving", desc: "Tüm işlemler ve bağışlar şeffaf şekilde takip edilebiliyor." },
              { icon: "👥", title: "Community Powered", desc: "Topluluk olarak penguen kolonisini birlikte kurtarıyoruz." },
              { icon: "🌟", title: "Charity Innovation", desc: "Dünyanın ilk otonom AI Charity penguen projesi." }
            ].map((item, i) => (
              <div key={i} className="bg-zinc-900 border border-purple-500/20 rounded-3xl p-8 hover:border-purple-500/50 transition">
                <div className="text-5xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                <p className="text-gray-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Live Charity Tracking */}
      <section id="donate" className="py-20 border-t border-purple-500/20">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-5xl font-bold mb-6">Live Charity Tracking</h2>
          <p className="text-gray-400 mb-12">Her bağış şeffaf bir şekilde takip ediliyor</p>
          
          <div className="bg-zinc-950 border border-purple-500/30 rounded-3xl p-10 max-w-2xl mx-auto">
            <div className="text-left mb-8">
              <p className="text-purple-400">FUNDING GOAL</p>
              <div className="h-4 bg-zinc-800 rounded-full mt-4 overflow-hidden">
                <div className="h-full w-[65%] bg-gradient-to-r from-purple-500 to-cyan-400 rounded-full"></div>
              </div>
            </div>
            <button className="bg-gradient-to-r from-purple-600 to-purple-500 text-white text-xl px-12 py-6 rounded-3xl font-semibold w-full hover:scale-105 transition">
              Donate Now 🐧
            </button>
          </div>
        </div>
      </section>

      {/* How to Support */}
      <section id="howto" className="py-20 bg-zinc-950 border-t border-purple-500/20">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-5xl font-bold text-center mb-4">How to Support Penguins</h2>
          <p className="text-center text-gray-400 mb-16">4 basit adımda penguenlere yardım et</p>
          
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { num: "01", title: "Phantom Wallet", desc: "Solana cüzdanı indir ve kur" },
              { num: "02", title: "SOL Al", desc: "Cüzdanına SOL yükle" },
              { num: "03", title: "Token Al", desc: "LostPengu tokenını al" },
              { num: "04", title: "Hold & Support", desc: "Tut ve penguen kolonisini destekle" }
            ].map((step, i) => (
              <div key={i} className="bg-zinc-900 rounded-3xl p-8 text-center border border-purple-500/20 hover:border-purple-500 transition">
                <div className="text-purple-400 text-3xl font-mono mb-4">{step.num}</div>
                <h3 className="font-semibold text-xl mb-3">{step.title}</h3>
                <p className="text-gray-400">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer - Social Links */}
      <footer className="bg-black border-t border-purple-500/30 py-16">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <div className="flex flex-wrap justify-center gap-6 mb-12">
            <a href="https://x.com/lostpengusup" target="_blank" className="flex items-center gap-3 bg-zinc-900 hover:bg-zinc-800 px-8 py-5 rounded-2xl border border-purple-500/20 hover:border-purple-500 transition">
              <span className="text-3xl">𝕏</span><span>X</span>
            </a>
            <a href="#" target="_blank" className="flex items-center gap-3 bg-zinc-900 hover:bg-zinc-800 px-8 py-5 rounded-2xl border border-purple-500/20 hover:border-purple-500 transition">
              <span className="text-3xl">📢</span><span>Telegram</span>
            </a>
            <a href="https://github.com/lostpengu0-crypto/lostpengu-ai-agent" target="_blank" className="flex items-center gap-3 bg-zinc-900 hover:bg-zinc-800 px-8 py-5 rounded-2xl border border-purple-500/20 hover:border-purple-500 transition">
              <span className="text-3xl">🐙</span><span>GitHub</span>
            </a>
            <a href="#" target="_blank" className="flex items-center gap-3 bg-zinc-900 hover:bg-zinc-800 px-8 py-5 rounded-2xl border border-purple-500/20 hover:border-purple-500 transition">
              <span className="text-3xl">🔴</span><span>Reddit</span>
            </a>
          </div>
          <p className="text-gray-500">© 2026 LostPengu Charity AI Agent • All Rights Reserved</p>
        </div>
      </footer>
    </div>
  );
}
