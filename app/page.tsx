'use client';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0a1f] text-white overflow-hidden relative font-mono">
      
      {/* Matrix Background */}
      <div className="absolute inset-0 opacity-30 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(transparent_50%,rgba(0,255,100,0.03)_50%)] bg-[length:100%_4px] animate-[matrix_8s_linear_infinite]"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-12 flex flex-col lg:flex-row items-center gap-16 min-h-screen">
        
        {/* Sol Taraf - Pengu Görseli */}
        <div className="flex-1 flex justify-center">
          <div className="relative">
            <div className="absolute -inset-12 bg-gradient-to-br from-purple-600 via-cyan-500 to-fuchsia-500 rounded-[4rem] blur-3xl opacity-30"></div>
            <img 
              src="/pengu.png" 
              alt="LostPengu" 
              className="w-[420px] relative z-10 rounded-3xl shadow-2xl border border-cyan-400/30"
            />
          </div>
        </div>

        {/* Sağ Taraf */}
        <div className="flex-1 space-y-8">
          <div>
            <h1 className="text-7xl font-black tracking-tighter mb-2">LOSTPENGU</h1>
            <p className="text-4xl text-cyan-400 font-light">AI AGENT</p>
          </div>

          <div className="space-y-4">
            <a href="/meme-generator" className="block w-full py-6 bg-gradient-to-r from-purple-600 to-fuchsia-600 rounded-2xl text-center text-2xl font-semibold hover:scale-105 transition-all">
              Create Memes with Pengu
            </a>

            <button className="block w-full py-6 bg-gradient-to-r from-cyan-500 to-emerald-500 rounded-2xl text-center text-2xl font-semibold hover:scale-105 transition-all">
              LostPengu Token
            </button>

            <button className="block w-full py-6 border-2 border-cyan-400/50 hover:bg-cyan-400/10 rounded-2xl text-center text-2xl font-semibold transition-all">
              Talk to Pengu Agent
            </button>
          </div>

          {/* Status Panel */}
          <div className="bg-black/60 border border-cyan-400/30 rounded-3xl p-6 backdrop-blur-xl">
            <p className="text-cyan-400 mb-4 flex items-center gap-2">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
              LOSTPENGU AI SYSTEM
            </p>
            <div className="space-y-2 text-sm">
              <p>🟢 Code Agent: <span className="text-green-400">ONLINE</span></p>
              <p>🟢 Meme Engine: <span className="text-green-400">ACTIVE</span></p>
              <p>🟢 Colony Memory: <span className="text-green-400">SYNCED</span></p>
              <p>🟢 Autonomous Updates: <span className="text-green-400">RUNNING</span></p>
            </div>
          </div>

          {/* Social Buttons */}
          <div className="flex gap-4">
            <a href="https://x.com/lostpengu0" target="_blank" className="flex-1 py-5 border border-white/30 rounded-2xl text-center hover:bg-white/5 transition">🐦 Follow on X</a>
            <a href="https://t.me/LostPengu0" target="_blank" className="flex-1 py-5 border border-white/30 rounded-2xl text-center hover:bg-white/5 transition">📱 Join Telegram</a>
          </div>
        </div>
      </div>
    </main>
  );
}
