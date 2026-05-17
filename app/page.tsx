"use client";

import { useState } from "react";

export default function Home() {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState("");

  const scanWallet = () => {
    setLoading(true);
    setResult("");

    setTimeout(() => {
      const verdicts = [
        "This wallet emotionally donated liquidity to strangers. LostPengu recommends a cold walk in Antarctica.",
        "FOMO damage detected. This wallet buys tops with confidence and sells bottoms with passion.",
        "This address has survived enough red candles to earn penguin respect.",
        "LostPengu AI detected degen activity, but also potential. Proceed with cold patience.",
      ];

      setResult(`
> SCAN COMPLETE

Pengu Score: ${Math.floor(Math.random() * 40) + 60}/100
FOMO Risk: EXTREME
Rug Survival Rate: ${Math.floor(Math.random() * 50) + 30}%
Psychological Stability: ${Math.floor(Math.random() * 60) + 20}%

AI VERDICT:
"${verdicts[Math.floor(Math.random() * verdicts.length)]}"
      `);

      setLoading(false);
    }, 2800);
  };

  return (
    <main className="min-h-screen bg-black text-white overflow-hidden">
      <section className="relative min-h-screen flex items-center justify-center px-6">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-purple-950/40 to-black" />

        <div className="absolute inset-0 opacity-20 text-purple-400 text-xs font-mono leading-6 animate-pulse overflow-hidden">
          {Array.from({ length: 80 }).map((_, i) => (
            <p key={i}>
              {"{ lostpengu.ai.agent: scanning_solana_chain(); terminal.run(); pengu_score++ }"}
            </p>
          ))}
        </div>

        <div className="relative z-10 text-center max-w-5xl">
          <div className="mb-6 inline-block rounded-full border border-purple-500/50 px-5 py-2 text-purple-300 bg-black/40">
            🐧 SELF CODING AI AGENT ON SOLANA
          </div>

          <h1 className="text-6xl md:text-8xl font-black tracking-tight">
            LOSTPENGU
          </h1>

          <h2 className="mt-4 text-3xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
            AI Terminal for Solana Culture
          </h2>

          <p className="mt-6 text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
            A cinematic AI driven penguin project combining Solana culture,
            community tools and experimental blockchain intelligence.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#"
              className="rounded-full bg-gradient-to-r from-purple-600 to-pink-500 px-8 py-4 font-bold shadow-[0_0_30px_rgba(168,85,247,0.7)]"
            >
              Buy on Pump.fun
            </a>

            <a
              href="#terminal"
              className="rounded-full border border-purple-400 px-8 py-4 font-bold bg-black/40 hover:bg-purple-900/40"
            >
              Launch AI Terminal
            </a>
          </div>
        </div>
      </section>

      <section className="px-6 py-24 bg-black">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-6">What is LostPengu?</h2>
          <p className="text-gray-300 text-lg max-w-3xl">
            LostPengu is not just another meme token. It is an experimental AI
            powered Solana project built around community, humor, blockchain
            culture and autonomous penguin intelligence.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mt-10">
            {["AI Powered", "Built on Solana", "Community Driven"].map((x) => (
              <div
                key={x}
                className="rounded-2xl border border-purple-500/30 bg-purple-950/20 p-6 shadow-[0_0_20px_rgba(168,85,247,0.25)]"
              >
                <h3 className="text-2xl font-bold text-purple-300">{x}</h3>
                <p className="mt-3 text-gray-400">
                  Designed to make crypto culture more fun, interactive and
                  shareable.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="terminal" className="px-6 py-24 bg-gradient-to-b from-black to-purple-950/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4">
            LostPengu AI Terminal
          </h2>
          <p className="text-center text-gray-400 mb-10">
            Paste a Solana wallet or token contract and let the penguin judge it.
          </p>

          <div className="rounded-3xl border border-purple-500 bg-black/80 p-6 shadow-[0_0_40px_rgba(168,85,247,0.6)]">
            <div className="text-purple-300 font-mono mb-4">
              LOSTPENGU TERMINAL v1.0
            </div>

            <input
              className="w-full bg-black border border-green-500 rounded-xl p-4 text-green-400 outline-none font-mono"
              placeholder="Paste Solana wallet or token CA..."
            />

            <button
              onClick={scanWallet}
              className="mt-4 w-full rounded-xl bg-gradient-to-r from-purple-600 to-pink-500 py-4 font-bold"
            >
              SCAN NOW
            </button>

            <div className="mt-6 min-h-[220px] whitespace-pre-line font-mono text-green-400 text-sm">
              {loading
                ? `> Initializing LostPengu AI...
> Connecting to Solana network...
> Reading wallet behavior...
> Detecting FOMO damage...
> Calculating Pengu Score...
> Generating final AI verdict...`
                : result}
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-24 bg-black">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-10">Tokenomics</h2>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              ["Supply", "1,000,000,000"],
              ["Network", "Solana"],
              ["Tax", "0%"],
              ["LP", "Locked / Community Focused"],
            ].map(([title, value]) => (
              <div
                key={title}
                className="rounded-2xl border border-purple-500/30 bg-white/5 p-6"
              >
                <p className="text-gray-400">{title}</p>
                <h3 className="text-2xl font-bold text-purple-300 mt-2">
                  {value}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-24 bg-purple-950/20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-10">Roadmap</h2>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              ["Phase 1", "Website, AI Terminal, Community Launch"],
              ["Phase 2", "Real wallet analytics, meme tools, AI upgrades"],
              ["Phase 3", "Autonomous penguin ecosystem expansion"],
            ].map(([phase, text]) => (
              <div
                key={phase}
                className="rounded-2xl border border-purple-500/30 bg-black/50 p-6"
              >
                <h3 className="text-2xl font-bold text-pink-400">{phase}</h3>
                <p className="mt-3 text-gray-300">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-24 bg-black text-center">
        <h2 className="text-4xl font-bold mb-6">Join the LostPengu Community</h2>

        <div className="flex flex-wrap gap-4 justify-center">
          <a href="#" className="rounded-full border border-purple-400 px-8 py-3">
            X / Twitter
          </a>
          <a href="#" className="rounded-full border border-purple-400 px-8 py-3">
            Telegram
          </a>
          <a href="#" className="rounded-full border border-purple-400 px-8 py-3">
            GitHub
          </a>
        </div>

        <p className="mt-10 text-gray-500">
          Contract Address: Coming Soon
        </p>
      </section>

      <footer className="border-t border-purple-900 px-6 py-8 text-center text-gray-500 bg-black">
        Made with 🐧 on Solana • Entertainment based AI terminal demo • Not financial advice
      </footer>
    </main>
  );
}
