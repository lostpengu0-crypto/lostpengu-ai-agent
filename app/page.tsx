'use client';
import { useState, useEffect } from 'react';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#05060f] text-white overflow-hidden relative">
      
      {/* Kuzey Işıkları */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/40 to-transparent"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,#22d3ee_10%,transparent_50%)] opacity-40 animate-pulse"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,#c026d3_20%,transparent_60%)] opacity-30 animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-20 min-h-screen flex items-center">
        <div className="grid md:grid-cols-2 gap-16 items-center w-full">
          
          {/* Video */}
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

          {/* Sağ Taraf */}
          <div className="flex flex-col gap-5">
            <h1 className="text-6xl md:text-7xl font-black tracking-tighter mb-2 text-center md:text-left">
              LOST<span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-cyan-300 to-pink-400">PENGU</span>
            </h1>
            
            <p className="text-4xl font-light text-cyan-400 mb-10 text-center md:text-left">AI AGENT</p>

            <div className="flex flex-col gap-4">
             <a
              href="/meme-generator"
             className="py-7 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-3xl text-xl font-semibold hover:scale-105 transition-all text-center"
             >
              Create Memes with Pengu
             </a>                Create Memes with Pengu
              </button>

              <button className="py-7 bg-gradient-to-r from-cyan-500 to-emerald-500 rounded-3xl text-xl font-semibold hover:scale-105 active:scale-95 transition-all">
                LostPengu Token
              </button>

              <button className="py-7 border border-white/30 hover:bg-white/5 rounded-3xl text-xl font-semibold transition-all">
                Talk to Pengu Agent
              </button>
              <div className="mt-6 rounded-3xl border border-cyan-400/30 bg-black/40 p-5 shadow-2xl">
  <p className="text-sm text-cyan-300 mb-3">🐧 LostPengu AI System</p>

  <div className="space-y-2 text-sm text-gray-300">
    <p>🟢 Code Agent: ONLINE</p>
    <p>🟢 Meme Engine: ACTIVE</p>
    <p>🟢 Colony Memory: SYNCED</p>
    <p>🟢 Autonomous Updates: RUNNING</p>
  </div>
</div>
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
             {/* LIVE COMMUNITY STATS */}
      <div className="mt-20 w-full max-w-5xl mx-auto px-6 py-12 border-t border-white/10">
        <div className="flex items-center gap-4 mb-8">
          <div className="w-4 h-4 bg-cyan-500 rounded-full animate-pulse"></div>
          <h2 className="text-3xl font-bold tracking-tight">COLONY GROWTH STATUS</h2>
          <span className="text-xs px-4 py-1 bg-cyan-500/10 text-cyan-400 rounded-full">LIVE</span>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {/* GitHub Stars */}
          <a href="https://github.com/lostpengu0-crypto/lostpengu-ai-agent" target="_blank" className="bg-zinc-950 border border-zinc-800 rounded-3xl p-6 text-center hover:border-cyan-400 transition-all">
            <div className="text-4xl mb-2">🐙</div>
            <div id="stars" className="text-5xl font-bold text-white">5</div>
            <div className="text-sm text-gray-400">GitHub Stars</div>
          </a>

          {/* X / Twitter */}
          <a href="https://x.com/lostpengu0" target="_blank" className="bg-zinc-950 border border-zinc-800 rounded-3xl p-6 text-center hover:border-cyan-400 transition-all">
            <div className="text-4xl mb-2">𝕏</div>
            <div className="text-5xl font-bold text-white">177</div>
            <div className="text-sm text-gray-400">@LostPengu0</div>
          </a>

          {/* Telegram */}
          <a href="https://t.me/LostPengu0" target="_blank" className="bg-zinc-950 border border-zinc-800 rounded-3xl p-6 text-center hover:border-cyan-400 transition-all">
            <div className="text-4xl mb-2">📱</div>
            <div className="text-5xl font-bold text-white">302</div>
            <div className="text-sm text-gray-400">Telegram Colony</div>
          </a>

          {/* Growth Meter */}
          <div className="bg-zinc-950 border border-zinc-800 rounded-3xl p-6 flex flex-col justify-center">
            <div className="text-sm text-gray-400 mb-3">COLONY GROWTH METER</div>
            <div id="growth" className="text-6xl font-bold text-cyan-400 mb-4">42</div>
            <div className="h-3 bg-zinc-800 rounded-full overflow-hidden">
              <div id="bar" className="h-full bg-gradient-to-r from-cyan-400 to-emerald-400 transition-all w-[42%]"></div>
            </div>
          </div>
        </div>

        <p className="text-center text-xs text-gray-500 mt-8">Real-time data • Click cards to join</p>
      </div>   
    </main>
  );
    // Live GitHub Stats Updater
  useEffect(() => {
    const updateGitHubStats = async () => {
      try {
        const response = await fetch('https://api.github.com/repos/lostpengu0-crypto/lostpengu-ai-agent');
        const data = await response.json();

        const starsEl = document.getElementById('stars');
        if (starsEl) starsEl.textContent = data.stargazers_count || 5;

        // Growth meter update
        const growth = Math.min(25 + (data.stargazers_count || 5) * 2, 100);
        const growthEl = document.getElementById('growth');
        const barEl = document.getElementById('bar');
        
        if (growthEl) growthEl.textContent = growth;
        if (barEl) barEl.style.width = `${growth}%`;
      } catch (error) {
        console.log("GitHub stats could not be updated");
      }
    };

    updateGitHubStats();
    const interval = setInterval(updateGitHubStats, 60000); // every 60 seconds
    return () => clearInterval(interval);
  }, []);
}
