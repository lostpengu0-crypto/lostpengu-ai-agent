'use client';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0f1c] text-white overflow-hidden relative">
      
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6 text-center">
        
        {/* Animasyonlu Penguen */}
        <div className="relative mb-10 group">
          <div className="absolute -inset-24 bg-gradient-to-br from-cyan-400 via-purple-500 to-pink-500 rounded-full opacity-20 blur-3xl group-hover:opacity-40 transition-all duration-1000 animate-pulse"></div>
          
          <img 
            src="/pengu.jpg" 
            alt="LostPengu"
            className="w-80 md:w-[420px] rounded-3xl shadow-2xl border-4 border-cyan-400/40 
                       hover:scale-110 hover:rotate-3 transition-all duration-700 
                       animate-bounce-slow"
          />
        </div>

        <h1 className="text-7xl md:text-8xl font-black tracking-tighter mb-4">
          LOST<span className="text-cyan-400">PENGU</span>
        </h1>
        
        <p className="text-4xl font-light text-cyan-400 mb-10">AI AGENT</p>

        <p className="max-w-xl text-lg text-gray-300 mb-16">
          Deep in the frozen Antarctic Sanctuary.<br />
          The first self-coding penguin colony on Solana.
        </p>

        <div className="flex flex-col sm:flex-row gap-5 mb-8">
          <button 
            onClick={() => alert("🎨 Meme Generator Coming Soon!")}
            className="px-10 py-6 bg-gradient-to-r from-purple-500 to-violet-500 hover:from-purple-600 hover:to-violet-600 rounded-3xl text-xl font-semibold transition-all active:scale-95"
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

        <div className="flex gap-8 text-2xl">
          <a href="https://x.com/LostPengu0" target="_blank" className="hover:text-cyan-400">🐦 X</a>
          <a href="https://t.me/LostPengu0" target="_blank" className="hover:text-cyan-400">📱 Telegram</a>
        </div>

      </div>
    </main>
  );
}