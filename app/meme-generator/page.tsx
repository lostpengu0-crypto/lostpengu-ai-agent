'use client';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0f1c] text-white overflow-hidden">
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6 text-center">
        
        {/* Ana Penguen */}
        <div className="mb-10">
          <img 
            src="/pengu.jpg" 
            alt="LostPengu"
            className="w-80 md:w-[420px] rounded-3xl shadow-2xl border-4 border-cyan-400/40"
          />
        </div>

        <h1 className="text-7xl md:text-8xl font-black tracking-tighter mb-4">
          LOST<span className="text-cyan-400">PENGU</span>
        </h1>
        
        <p className="text-4xl font-light text-cyan-400 mb-10">AI AGENT</p>

        <p className="max-w-xl text-lg text-gray-300 mb-16">
          The first self-coding penguin on Solana.<br />
          Tell it what you want — it codes, builds, and deploys.
        </p>

        {/* Butonlar */}
        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <button 
            onClick={() => alert("🎨 Meme Generator Coming Soon!")}
            className="px-10 py-6 bg-gradient-to-r from-purple-500 to-violet-500 rounded-3xl text-xl font-semibold hover:scale-105 transition"
          >
            Create Memes with Pengu
          </button>
          
          <button className="px-10 py-6 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-3xl text-xl font-semibold hover:scale-105 transition">
            LostPengu Token
          </button>
          
          <button className="px-10 py-6 border border-white/40 rounded-3xl text-xl font-semibold hover:bg-white/10 transition">
            About LostPengu
          </button>
        </div>

        <div className="flex gap-6 text-2xl">
          <a href="https://x.com/LostPengu0" target="_blank" className="hover:text-cyan-400">🐦 X</a>
          <a href="https://t.me/LostPengu0" target="_blank" className="hover:text-cyan-400">📱 Telegram</a>
        </div>

      </div>
    </main>
  );
}