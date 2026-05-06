'use client';
import { useEffect, useState } from 'react';

export default function Home() {
  const [snowflakes, setSnowflakes] = useState([]);

  useEffect(() => {
    const flakes = Array.from({ length: 100 }).map((_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * -25,
      duration: Math.random() * 12 + 15,
      text: Array.from({ length: 18 }).map(() => 
        String.fromCharCode(33 + Math.floor(Math.random() * 94))
      ).join('')
    }));
    setSnowflakes(flakes);
  }, []);

  return (
    <main className="min-h-screen bg-[#05060f] text-white overflow-hidden relative">
      
      {/* Kuzey Işıkları */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/40 to-transparent"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,#22d3ee_10%,transparent_50%)] opacity-40 animate-pulse"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,#c026d3_20%,transparent_60%)] opacity-30 animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>

      {/* Neon Kod Yağmuru - Artık Hydration Hatası Vermez */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden opacity-60">
        {snowflakes.map((flake) => (
          <div
            key={flake.id}
            className="absolute text-purple-400/70 text-xs font-mono tracking-widest animate-fall"
            style={{
              left: `${flake.left}%`,
              top: `-60px`,
              animationDelay: `${flake.delay}s`,
              animationDuration: `${flake.duration}s`,
            }}
          >
            {flake.text}
          </div>
        ))}
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-20 min-h-screen flex items-center">
        <div className="grid md:grid-cols-2 gap-16 items-center w-full">
          
          <div className="flex justify-center md:justify-start">
            <div className="relative group">
              <div className="absolute -inset-20 bg-gradient-to-br from-purple-500 via-fuchsia-500 to-cyan-400 rounded-full opacity-25 blur-3xl group-hover:opacity-50 transition-all duration-1000"></div>
              
              <video 
                src="/lostpengu00.mp4" 
                autoPlay 
                loop 
                muted 
                playsInline
                className="w-[360px] md:w-[480px] rounded-3xl shadow-2xl relative z-10"
              />
            </div>
          </div>

          <div className="flex flex-col gap-5">
            <h1 className="text-6xl md:text-7xl font-black tracking-tighter mb-2 text-center md:text-left">
              LOST<span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-cyan-300 to-pink-400">PENGU</span>
            </h1>
            
            <p className="text-4xl font-light text-cyan-400 mb-10 text-center md:text-left">AI AGENT</p>

            <div className="flex flex-col gap-4">
              <button 
                onClick={() => alert("🎨 Meme Generator Coming Soon!")}
                className="py-7 bg-gradient-to-r from-purple-600 to-violet-600 rounded-3xl text-xl font-semibold hover:scale-105 active:scale-95 transition-all"
              >
                Create Memes with Pengu
              </button>

              <button className="py-7 bg-gradient-to-r from-cyan-500 to-emerald-500 rounded-3xl text-xl font-semibold hover:scale-105 active:scale-95 transition-all">
                LostPengu Token
              </button>

              <button className="py-7 border border-white/30 hover:bg-white/5 rounded-3xl text-xl font-semibold transition-all">
                Talk to Pengu Agent
              </button>
            </div>

            <div className="flex gap-4 mt-6">
              <a href="https://x.com/LostPengu0" target="_blank" className="flex-1 py-6 border border-white/30 hover:bg-white/5 rounded-3xl text-center transition-all">
                🐦 Follow on X
              </a>
              <a href="https://t.me/LostPengu0" target="_blank" className="flex-1 py-6 border border-white/30 hover:bg-white/5 rounded-3xl text-center transition-all">
                📱 Join Telegram
              </a>
            </div>

            <a href="/about" className="py-6 border border-white/20 hover:bg-white/5 rounded-3xl text-lg mt-4 text-center transition-all">
              About LostPengu
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-sm text-gray-500 tracking-widest">
        "Lost but never alone. Coded by the colony."
      </div>
    </main>
  );
}