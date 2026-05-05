'use client';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a1428] text-white overflow-hidden relative">
      
      {/* Kar Yağışı */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        {Array.from({ length: 100 }).map((_, i) => (
          <div
            key={i}
            className="absolute bg-white rounded-full animate-fall"
            style={{
              left: `${Math.random() * 100}%`,
              top: `-10px`,
              width: `${Math.random() * 4 + 2}px`,
              height: `${Math.random() * 4 + 2}px`,
              animationDelay: `-${Math.random() * 15}s`,
              opacity: Math.random() * 0.7 + 0.4,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6 text-center">
        
        <div className="relative mb-12 group">
          <div className="absolute -inset-20 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-full opacity-25 blur-3xl group-hover:opacity-40 transition-all duration-1000"></div>
          
          <img 
            src="/pengu.jpg" 
            alt="LostPengu"
            className="w-80 md:w-[420px] rounded-3xl shadow-2xl border-4 border-cyan-300/30 relative z-10 hover:scale-105 transition-all duration-700"
          />
        </div>

        <h1 className="text-7xl md:text-8xl font-black tracking-tighter mb-3">
          LOST<span className="text-cyan-400">PENGU</span>
        </h1>
        
        <p className="text-4xl font-light text-cyan-400 mb-8">AI AGENT</p>

        <p className="max-w-2xl text-lg md:text-xl text-gray-300 mb-16 leading-relaxed">
          Deep in the frozen Antarctic Sanctuary.<br />
          The first self-coding penguin colony on Solana.
        </p>

        <div className="flex flex-col sm:flex-row gap-5 mb-8">
          <button 
            onClick={() => alert("🎨 Meme Generator Coming Soon!\n\nLostPengu ile görsel ve meme üretebileceksin.")}
            className="px-10 py-6 bg-gradient-to-r from-purple-500 to-violet-500 hover:from-purple-600 hover:to-violet-600 rounded-3xl text-xl font-semibold transition-all active:scale-95 cursor-pointer"
          >
            Create Memes with Pengu
          </button>
          
          <button className="px-10 py-6 bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 rounded-3xl text-xl font-semibold transition-all active:scale-95">
            LostPengu Token
          </button>
          
          <button className="px-10 py-6 border-2 border-white/40 hover:bg-white/10 rounded-3xl text-xl font-semibold transition-all">
            About LostPengu
          </button>
        </div>

        <div className="flex flex-col sm:flex-row gap-5">
          <a href="https://x.com/LostPengu0" target="_blank" className="px-10 py-6 border-2 border-white/40 hover:bg-white/10 rounded-3xl text-xl font-semibold transition-all flex items-center gap-3">
            🐦 Follow on X
          </a>
          
          <a href="https://t.me/LostPengu0" target="_blank" className="px-10 py-6 border-2 border-white/40 hover:bg-white/10 rounded-3xl text-xl font-semibold transition-all flex items-center gap-3">
            📱 Join Telegram
          </a>

          <button className="px-10 py-6 border-2 border-white/40 hover:bg-white/10 rounded-3xl text-xl font-semibold transition-all">
            Talk to Pengu Agent
          </button>
        </div>

        <p className="mt-16 text-sm text-gray-500">The Lost Penguin Colony • Antarctic Sanctuary</p>
      </div>
    </main>
  );
}