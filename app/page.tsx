'use client';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#02040f] text-white overflow-hidden relative font-mono">
      
      {/* Matrix Rain */}
      <div className="absolute inset-0 z-0 opacity-30 pointer-events-none overflow-hidden">
        {Array.from({ length: 30 }).map((_, i) => (
          <div
            key={i}
            className="absolute text-emerald-400/70 text-xs whitespace-nowrap animate-fall"
            style={{
              left: `${Math.random() * 100}%`,
              animationDuration: `${Math.random() * 10 + 8}s`,
              animationDelay: `-${Math.random() * 20}s`,
            }}
          >
            {Array.from({ length: 35 }).map(() => 
              String.fromCharCode(33 + Math.floor(Math.random() * 90))
            ).join('')}
          </div>
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-12 min-h-screen flex flex-col lg:flex-row items-center gap-16">
        
        {/* Sol Taraf - LostPengu Görseli */}
        <div className="flex-1 flex justify-center lg:justify-end">
          <div className="relative">
            <div className="absolute -inset-16 bg-gradient-to-br from-cyan-400 via-purple-600 to-pink-500 rounded-full opacity-30 blur-[120px]"></div>
            
            <img 
              src="https://i.ibb.co/KqY7Z7s/lostpengu.png" 
              alt="LostPengu"
              className="w-[380px] lg:w-[500px] rounded-3xl shadow-2xl relative z-10 border border-cyan-400/30"
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
            <a href="/meme-generator" className="block w-full py-6 bg-gradient-to-r from-purple-600 to-fuchsia-600 rounded-3xl text-center text-2xl font-semibold hover:scale-105 transition-all">
              Create Memes with Pengu
            </a>

            <button className="block w-full py-6 bg-gradient-to-r from-cyan-500 to-emerald-500 rounded-3xl text-center text-2xl font-semibold hover:scale-105 transition-all">
              LostPengu Token
            </button>

            <button className="block w-full py-6 border-2 border-cyan-400/60 hover:bg-cyan-400/10 rounded-3xl text-center text-2xl font-semibold transition-all">
              Talk to Pengu Agent
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
