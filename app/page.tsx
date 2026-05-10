'use client';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#05060f] text-white overflow-hidden relative">
      
      {/* Matrix + Aurora Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/30 to-transparent"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,#22d3ee_8%,transparent_50%)] opacity-40"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,#c026d3_15%,transparent_60%)] opacity-30"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-24 min-h-screen flex items-center">
        <div className="grid md:grid-cols-2 gap-16 items-center w-full">
          
          {/* Video / Görsel Alanı */}
          <div className="flex justify-center md:justify-start">
            <div className="relative group">
              <div className="absolute -inset-20 bg-gradient-to-br from-purple-500 via-fuchsia-500 to-cyan-400 rounded-full opacity-30 blur-3xl group-hover:opacity-50 transition-all duration-1000"></div>
              <video 
                src="/lostpengu00.mp4" 
                autoPlay 
                loop 
                muted 
                playsInline
                className="w-[380px] md:w-[520px] rounded-3xl shadow-2xl relative z-10 border border-cyan-500/20"
              />
            </div>
          </div>

          {/* Sağ Taraf */}
          <div className="flex flex-col gap-6 text-center md:text-left">
            <h1 className="text-7xl md:text-8xl font-black tracking-[-3px]">
              LOST<span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-purple-400">PENGU</span>
            </h1>
            
            <p className="text-4xl font-light text-cyan-400">AI AGENT</p>

            <p className="text-xl text-gray-300 max-w-md mx-auto md:mx-0">
              The first self-coding penguin on Solana.<br />
              Building the colony. One commit at a time.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <a 
                href="/meme-generator"
                className="py-6 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-3xl text-xl font-semibold hover:scale-105 transition-all"
              >
                Create Memes with Pengu
              </a>
              <a 
                href="https://x.com/lostpengu0" 
                target="_blank"
                className="py-6 border border-white/40 hover:bg-white/10 rounded-3xl text-xl font-semibold transition-all"
              >
                Follow on X
              </a>
            </div>

            <a href="https://t.me/LostPengu0" target="_blank" className="text-cyan-400 hover:text-cyan-300 mt-4 inline-block">
              Join the Colony →
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
