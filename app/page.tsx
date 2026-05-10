'use client';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#02040f] text-white overflow-hidden relative font-mono">
      
      {/* Matrix Rain Background */}
      <div className="absolute inset-0 z-0 opacity-40 pointer-events-none overflow-hidden">
        {Array.from({ length: 25 }).map((_, i) => (
          <div
            key={i}
            className="absolute text-emerald-400 text-xs whitespace-nowrap animate-fall"
            style={{
              left: `${Math.random() * 100}%`,
              animationDuration: `${Math.random() * 8 + 6}s`,
              animationDelay: `-${Math.random() * 15}s`,
              opacity: Math.random() * 0.6 + 0.4,
            }}
          >
            {Array.from({ length: 30 }).map(() => 
              String.fromCharCode(33 + Math.floor(Math.random() * 94))
            ).join('')}
          </div>
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-12 min-h-screen flex flex-col lg:flex-row items-center gap-16">
        
        {/* Sol Taraf - Pengu */}
        <div className="flex-1 flex justify-center lg:justify-end">
          <div className="relative">
            <div className="absolute -inset-20 bg-gradient-to-br from-cyan-400 via-purple-600 to-fuchsia-500 rounded-full opacity-30 blur-[100px] animate-pulse"></div>
            
            <img 
              src="https://picsum.photos/id/1015/600/700" 
              alt="LostPengu"
              className="w-[380px] lg:w-[480px] rounded-3xl shadow-2xl relative z-10 border border-cyan-400/40 hover:scale-105 transition-transform duration-700"
            />
          </div>
        </div>

        {/* Sağ Taraf */}
        <div className="flex-1 space-y-10">
          <div>
            <h1 className="text-7xl lg:text-8xl font-black tracking-tighter mb-3">
              LOST<span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-purple-400">PENGU</span>
            </h1>
            <p className="text-5xl text-cyan-400 font-light">AI AGENT</p>
          </div>

          <p className="text-xl text-gray-300 max-w-md">
            The first self-coding penguin on Solana.<br />
            Building the colony, one line at a time.
          </p>

          <div className="space-y-4">
            <a href="/meme-generator" className="block w-full py-6 bg-gradient-to-r from-purple-600 to-fuchsia-600 rounded-3xl text-center text-2xl font-semibold hover:scale-105 transition-all active:scale-95">
              Create Memes with Pengu
            </a>

            <button className="block w-full py-6 bg-gradient-to-r from-cyan-500 to-emerald-500 rounded-3xl text-center text-2xl font-semibold hover:scale-105 transition-all active:scale-95">
              LostPengu Token
            </button>

            <button className="block w-full py-6 border-2 border-cyan-400/60 hover:bg-cyan-400/10 rounded-3xl text-center text-2xl font-semibold transition-all">
              Talk to Pengu Agent
            </button>
          </div>

          {/* Status */}
          <div className="bg-black/70 border border-cyan-400/30 rounded-3xl p-6">
            <p className="text-emerald-400 mb-4 flex items-center gap-2">
              <span className="w-3 h-3 bg-emerald-500 rounded-full animate-pulse"></span>
              SYSTEM STATUS
            </p>
            <div className="grid grid-cols-2 gap-y-2 text-sm">
              <p>Code Agent</p><p className="text-emerald-400">ONLINE</p>
              <p>Meme Engine</p><p className="text-emerald-400">ACTIVE</p>
              <p>Colony Memory</p><p className="text-emerald-400">SYNCED</p>
              <p>Autonomous Updates</p><p className="text-emerald-400">RUNNING</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
