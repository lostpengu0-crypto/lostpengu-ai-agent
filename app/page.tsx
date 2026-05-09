      {/* LIVE COMMUNITY STATS */}
      <div className="mt-20 w-full max-w-5xl mx-auto px-6 py-12 border-t border-white/10">
        <div className="flex items-center gap-4 mb-8">
          <div className="w-4 h-4 bg-cyan-500 rounded-full animate-pulse"></div>
          <h2 className="text-3xl font-bold tracking-tight">COLONY GROWTH STATUS</h2>
          <span className="text-xs px-4 py-1 bg-cyan-500/10 text-cyan-400 rounded-full">LIVE</span>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <a href="https://github.com/lostpengu0-crypto/lostpengu-ai-agent" target="_blank" rel="noopener noreferrer" className="bg-zinc-950 border border-zinc-800 rounded-3xl p-6 text-center hover:border-cyan-400 transition-all">
            <div className="text-4xl mb-2">🐙</div>
            <div className="text-5xl font-bold text-white">12</div>
            <div className="text-sm text-gray-400">GitHub Stars</div>
          </a>

          <a href="https://x.com/lostpengu0" target="_blank" rel="noopener noreferrer" className="bg-zinc-950 border border-zinc-800 rounded-3xl p-6 text-center hover:border-cyan-400 transition-all">
            <div className="text-4xl mb-2">𝕏</div>
            <div className="text-5xl font-bold text-white">177</div>
            <div className="text-sm text-gray-400">@LostPengu0</div>
          </a>

          <a href="https://t.me/LostPengu0" target="_blank" rel="noopener noreferrer" className="bg-zinc-950 border border-zinc-800 rounded-3xl p-6 text-center hover:border-cyan-400 transition-all">
            <div className="text-4xl mb-2">📱</div>
            <div className="text-5xl font-bold text-white">302</div>
            <div className="text-sm text-gray-400">Telegram Colony</div>
          </a>

          <div className="bg-zinc-950 border border-zinc-800 rounded-3xl p-6 flex flex-col justify-center">
            <div className="text-sm text-gray-400 mb-3">COLONY GROWTH METER</div>
            <div className="text-6xl font-bold text-cyan-400 mb-4">48</div>
            <div className="h-3 bg-zinc-800 rounded-full overflow-hidden">
              <div className="h-full bg-gradient-to-r from-cyan-400 to-emerald-400 w-[48%]"></div>
            </div>
          </div>
        </div>

        <p className="text-center text-xs text-gray-500 mt-8">Click the cards to join the colony</p>
      </div>
