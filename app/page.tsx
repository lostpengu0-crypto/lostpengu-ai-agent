"use client";

import { useState } from "react";

export default function Home() {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState("");

  const scan = () => {
    setLoading(true);
    setResult("");

    setTimeout(() => {
      setResult(`> TECHNICAL ANALYSIS
Wallet Age: 214 days
Whale Exposure: MEDIUM
Dev Wallet Activity: DETECTED
Rug Probability: LOW

> SOCIAL ANALYSIS
X Signal: ACTIVE
Community Heat: GROWING
Meme Exposure: HIGH

> PSYCHOLOGICAL ANALYSIS
FOMO Damage: EXTREME
Patience Level: LOW
Diamond Hands Probability: 24%

> LOSTPENGU VERDICT
"This wallet survived emotional damage, panic selling and meme warfare. LostPengu recommends patience, snow and fewer panic sells."`);
      setLoading(false);
    }, 2300);
  };

  return (
    <main className="min-h-screen bg-[#030007] text-white overflow-hidden">
      <nav className="fixed top-0 z-50 w-full border-b border-purple-500/20 bg-black/55 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div>
            <div className="text-2xl font-black">🐧 LOSTPENGU</div>
            <div className="text-xs text-purple-300">AI Agent on Solana</div>
          </div>

          <div className="hidden gap-8 text-sm md:flex">
            <a href="#story">Story</a>
            <a href="#about">About</a>
            <a href="#terminal">AI Terminal</a>
            <a href="#tokenomics">Tokenomics</a>
            <a href="#community">Community</a>
          </div>

          <a href="#" className="rounded-full bg-gradient-to-r from-purple-600 to-pink-500 px-7 py-3 font-bold shadow-[0_0_35px_rgba(217,70,239,.55)]">
            Coming Soon
          </a>
        </div>
      </nav>

      <section className="relative min-h-screen flex items-center justify-center px-6 pt-24 text-center">
        <img
          src="/pengu-colony.png"
          alt="LostPengu Colony"
          className="absolute inset-0 h-full w-full object-cover opacity-80"
        />

        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/25 to-[#030007]" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/45 via-transparent to-black/45" />

        <div className="relative z-10 mx-auto max-w-6xl">
          <div className="mb-6 inline-block rounded-full border border-purple-300/40 bg-black/35 px-6 py-3 text-sm text-purple-100 backdrop-blur-md">
            SELF CODING AI PENGUIN ON SOLANA
          </div>

          <h1 className="text-6xl font-black tracking-tight md:text-8xl bg-gradient-to-r from-white via-purple-100 to-pink-300 bg-clip-text text-transparent">
            LostPengu
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-100 md:text-xl">
            A cinematic Solana AI project combining autonomous systems,
            storytelling, meme culture and community powered tools.
          </p>

          <div className="mt-9 flex flex-wrap justify-center gap-5">
            <a href="#" className="rounded-full bg-gradient-to-r from-purple-600 to-pink-500 px-9 py-4 font-bold shadow-[0_0_35px_rgba(217,70,239,.55)]">
              Buy on Pump.fun
            </a>

            <a href="#terminal" className="rounded-full border border-purple-200/40 bg-black/35 px-9 py-4 font-bold backdrop-blur-md">
              Launch AI Terminal
            </a>
          </div>

          <div className="mx-auto mt-8 grid max-w-2xl gap-4 rounded-2xl border border-purple-400/40 bg-black/35 p-5 text-left backdrop-blur-md md:grid-cols-2">
            <div>
              <p className="text-sm text-gray-300">Contract Address</p>
              <p className="mt-1 font-mono text-xl font-bold">Coming Soon</p>
            </div>

            <div className="flex items-center justify-start gap-2 md:justify-end">
              <span className="h-3 w-3 rounded-full bg-green-400" />
              <div>
                <p className="font-bold text-green-400">Solana Verified</p>
                <p className="text-sm text-gray-400">CA will be added after launch</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="story" className="relative px-6 py-28">
        <div className="pointer-events-none absolute right-12 top-20 text-[260px] opacity-[0.035]">
          🐧
        </div>

        <div className="mx-auto grid max-w-7xl items-center gap-14 md:grid-cols-[420px_1fr]">
          <div className="mx-auto w-full max-w-[360px] rounded-[2rem] border border-pink-400/40 bg-white/5 p-4 shadow-[0_0_35px_rgba(217,70,239,.35)] backdrop-blur-xl">
            <div className="flex aspect-[9/16] items-center justify-center rounded-[1.5rem] border border-purple-500/30 bg-black/60 text-gray-400">
              Story Video Here
            </div>
          </div>

          <div>
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.35em] text-purple-300">
              The Origin Story
            </p>

            <h2 className="text-5xl font-black">The Rise of LostPengu</h2>

            <p className="mt-7 max-w-3xl text-lg leading-8 text-gray-300">
              Most tokens appear overnight. Nobody knows where they came from.
              Nobody knows why they exist.
              <br /><br />
              LostPengu chose a different path.
              <br /><br />
              Before becoming part of Solana culture, the penguin had a beginning.
              Its story explains how LostPengu entered this world, why it started
              observing blockchain behavior, and how it evolved into a self coding AI agent.
              <br /><br />
              From that origin, the first system was born:
              <span className="font-bold text-purple-300"> the LostPengu AI Terminal.</span>
            </p>
          </div>
        </div>
      </section>

      <section id="about" className="relative border-y border-purple-500/10 bg-purple-950/15 px-6 py-28">
        <div className="pointer-events-none absolute right-12 top-12 text-[230px] opacity-[0.035]">
          🐧
        </div>

        <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[1fr_1.4fr]">
          <div>
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.35em] text-purple-300">
              About The AI System
            </p>

            <h2 className="text-5xl font-black leading-tight">
              Why LostPengu Built The Terminal?
            </h2>

            <p className="mt-6 text-lg leading-8 text-gray-300">
              Built for transparency. Designed for the colony. Powered by AI.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {[
              ["AI Driven", "Experimental Solana AI systems designed for interaction, analysis and evolution."],
              ["Community Powered", "Built together with the colony through open development and growing community culture."],
              ["Transparency First", "Story driven identity, public systems and evolving experimental infrastructure."],
            ].map(([title, text]) => (
              <div key={title} className="rounded-3xl border border-purple-500/20 bg-black/45 p-7 backdrop-blur-md">
                <h3 className="text-xl font-bold text-purple-300">{title}</h3>
                <p className="mt-4 text-sm leading-6 text-gray-300">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="terminal" className="relative px-6 py-28">
        <div className="pointer-events-none absolute left-10 top-20 text-[230px] opacity-[0.03]">
          🐧
        </div>

        <div className="mx-auto grid max-w-7xl items-center gap-10 md:grid-cols-[0.8fr_1.4fr]">
          <div>
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.35em] text-purple-300">
              LostPengu AI Terminal
            </p>

            <h2 className="text-5xl font-black leading-tight">
              Analyze. Detect. Understand.
            </h2>

            <p className="mt-6 text-lg leading-8 text-gray-300">
              Analyze wallets, detect social exposure, study meme psychology and
              explore the experimental LostPengu AI system.
            </p>
          </div>

          <div className="rounded-[2rem] border border-purple-500/30 bg-black/80 p-7 shadow-[0_0_45px_rgba(168,85,247,.35)] backdrop-blur-xl">
            <div className="flex gap-3">
              <input
                placeholder="Paste Solana wallet or token CA..."
                className="w-full rounded-xl border border-purple-500/30 bg-black p-4 text-purple-200 outline-none"
              />

              <button onClick={scan} className="rounded-xl bg-gradient-to-r from-purple-600 to-pink-500 px-7 font-bold whitespace-nowrap">
                Scan Now
              </button>
            </div>

            <pre className="mt-5 min-h-[260px] whitespace-pre-wrap rounded-xl border border-purple-500/20 bg-black/60 p-5 font-mono text-sm text-green-400">
              {loading
                ? `> Initializing LostPengu AI...
> Connecting to Solana...
> Analyzing wallet behavior...
> Detecting social exposure...
> Generating verdict...`
                : result}
            </pre>
          </div>
        </div>
      </section>

      <section id="tokenomics" className="relative bg-purple-950/15 px-6 py-28">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-5xl font-black">Tokenomics</h2>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              ["Supply", "1,000,000,000"],
              ["Network", "Solana"],
              ["Tax", "0%"],
              ["Launch", "Pump.fun"],
              ["AI Status", "Active"],
              ["Community", "Growing"],
            ].map(([a, b]) => (
              <div key={a} className="rounded-3xl border border-purple-500/20 bg-black/45 p-8">
                <p className="text-gray-400">{a}</p>
                <h3 className="mt-4 text-3xl font-black text-purple-300">{b}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-28">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-5xl font-black">How to Join the Colony</h2>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              ["1. Create a Wallet", "Download Phantom Wallet and create your Solana wallet securely."],
              ["2. Get SOL", "Buy or transfer SOL to your wallet to prepare for trading."],
              ["3. Buy LostPengu", "Connect your wallet and join the LostPengu ecosystem through Pump.fun or supported Solana markets."],
            ].map(([title, text]) => (
              <div key={title} className="rounded-3xl border border-purple-500/20 bg-black/45 p-8">
                <h3 className="text-2xl font-bold text-purple-300">{title}</h3>
                <p className="mt-4 text-gray-300">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="community" className="relative bg-purple-950/15 px-6 py-28 text-center">
        <div className="pointer-events-none absolute right-10 top-8 text-[230px] opacity-[0.035]">
          🐧
        </div>

        <h2 className="text-5xl font-black">Join The Colony</h2>

        <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-300">
          A growing digital penguin colony powered by Solana, AI systems and community culture.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-5">
          <a href="https://x.com/LostPengu0" target="_blank" className="rounded-full border border-purple-400/30 bg-white/5 px-8 py-4">X / Twitter</a>
          <a href="https://x.com/lostpengu0?s=21" target="_blank" className="rounded-full border border-purple-400/30 bg-white/5 px-8 py-4">X Community</a>
          <a href="https://t.me/LostPengu0" target="_blank" className="rounded-full border border-purple-400/30 bg-white/5 px-8 py-4">Telegram</a>
          <a href="https://www.reddit.com/u/lostpengu01" target="_blank" className="rounded-full border border-purple-400/30 bg-white/5 px-8 py-4">Reddit</a>
          <a href="https://github.com/lostpengu0-crypto" target="_blank" className="rounded-full border border-purple-400/30 bg-white/5 px-8 py-4">GitHub</a>
        </div>
      </section>

      <footer className="border-t border-purple-500/20 px-6 py-10 text-center text-gray-500">
        Contract Address: Coming Soon
        <br />
        Made with 🐧 on Solana
        <br />
        maybe we were never lost.
      </footer>
    </main>
  );
}
