"use client";

import { useState } from "react";

export default function Home() {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState("");

  const scan = () => {
    setLoading(true);
    setResult("");

    setTimeout(() => {
      setResult(`TECHNICAL ANALYSIS
Wallet Age: 187 days
Whale Exposure: MEDIUM
Liquidity Status: WATCHING
Dev Activity: DETECTED

SOCIAL ANALYSIS
X Signal: ACTIVE
Community Heat: HIGH
Meme Exposure: CRITICAL

PSYCHOLOGICAL ANALYSIS
FOMO Damage: EXTREME
Patience Level: LOW
Diamond Hands Probability: 24%

LOSTPENGU VERDICT
"This wallet has survived red candles, bad entries and emotional damage. LostPengu recommends patience, snow and fewer panic sells."`);
      setLoading(false);
    }, 2500);
  };

  return (
    <main className="min-h-screen bg-black text-white overflow-hidden">
      <nav className="fixed top-0 z-50 w-full border-b border-purple-500/20 bg-black/50 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div>
            <div className="text-xl font-black">🐧 LOSTPENGU</div>
            <div className="text-xs text-purple-300">
              AI Agent on Solana
            </div>
          </div>

          <div className="hidden gap-6 text-sm text-gray-300 md:flex">
            <a href="#story">Story</a>
            <a href="#terminal">AI Terminal</a>
            <a href="#chart">Chart</a>
            <a href="#tokenomics">Tokenomics</a>
            <a href="#community">Community</a>
          </div>

          <a
            className="rounded-full bg-purple-600 px-5 py-2 text-sm font-bold"
            href="#"
          >
            Coming Soon
          </a>
        </div>
      </nav>

      <section className="relative flex min-h-screen items-center px-6 pt-24">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-purple-950/50 to-black" />

        <div className="absolute inset-0 opacity-20">
          <div className="animate-[rain_18s_linear_infinite] font-mono text-xs leading-6 text-purple-300">
            {Array.from({ length: 120 }).map((_, i) => (
              <p key={i}>
                0101 LOSTPENGU_AI SOLANA_TERMINAL WALLET_SCAN
                COMMUNITY_SIGNAL 0101
              </p>
            ))}
          </div>
        </div>

        <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-12 md:grid-cols-2">
          <div>
            <div className="mb-6 inline-block rounded-full border border-purple-400/40 bg-white/5 px-5 py-2 text-sm text-purple-200">
              🐧 SELF CODING AI AGENT ON SOLANA
            </div>

            <h1 className="text-6xl font-black tracking-tight md:text-8xl">
              LOSTPENGU
            </h1>

            <h2 className="mt-4 bg-gradient-to-r from-purple-300 via-pink-300 to-blue-300 bg-clip-text text-3xl font-bold text-transparent md:text-5xl">
              The First Self Coding AI Penguin on Solana
            </h2>

            <p className="mt-6 max-w-xl text-lg text-gray-300">
              An experimental AI driven project combining Solana culture,
              autonomous intelligence and community powered tools.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#"
                className="rounded-full bg-gradient-to-r from-purple-600 to-pink-500 px-8 py-4 font-bold shadow-[0_0_30px_rgba(168,85,247,.6)]"
              >
                Buy on Pump.fun
              </a>

              <a
                href="#terminal"
                className="rounded-full border border-purple-400 px-8 py-4 font-bold"
              >
                Launch AI Terminal
              </a>
            </div>

            <div className="mt-8 rounded-2xl border border-purple-500/30 bg-black/50 p-4 font-mono text-sm text-purple-200">
              &gt; LostPengu AI initialized...
              <br />
              &gt; Monitoring Solana network...
              <br />
              &gt; Community signal detected...
            </div>
          </div>

          <div className="flex justify-center">
            <div className="rounded-[2rem] border border-purple-500/30 bg-purple-950/20 p-4 shadow-[0_0_60px_rgba(168,85,247,.4)]">
              <img
                src="/pengu-main.png"
                alt="LostPengu"
                className="max-h-[520px] rounded-[1.5rem] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="story" className="px-6 py-24">
        <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-2">
          <div className="rounded-3xl border border-purple-500/30 bg-white/5 p-6">
            <div className="flex h-80 items-center justify-center rounded-2xl border border-purple-500/20 bg-black/60 text-gray-400">
              Story video will be here
            </div>
          </div>

          <div>
            <h2 className="text-4xl font-black">
              The Rise of LostPengu
            </h2>

            <p className="mt-6 text-lg leading-8 text-gray-300">
              Most tokens appear overnight. Nobody knows where they came from.
              Nobody knows why they exist.
              <br />
              <br />
              But LostPengu chose to tell its story.
              <br />
              <br />
              This is what makes it different.
              <br />
              <br />
              Before becoming part of Solana culture, LostPengu had a beginning.
              <br />
              <br />
              If you want to discover how the penguin entered this world, watch
              the origin story.
            </p>
          </div>
        </div>
      </section>

      <section className="px-6 py-24 bg-purple-950/20">
        <div className="mx-auto max-w-5xl text-center">
          <h2 className="text-4xl font-black">The AI System</h2>

          <p className="mt-6 text-lg text-gray-300">
            After entering the Solana ecosystem, LostPengu began developing
            experimental AI systems designed to observe blockchain activity,
            wallet behavior and meme culture. One of these systems became the
            LostPengu AI Terminal.
          </p>
        </div>
      </section>

      <section id="terminal" className="px-6 py-24">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-center text-4xl font-black">
            LostPengu AI Terminal
          </h2>

          <p className="mt-4 text-center text-gray-400">
            Paste a wallet or token CA and let the penguin analyze it.
          </p>

          <div className="mt-10 rounded-3xl border border-purple-500 bg-black/80 p-6 font-mono shadow-[0_0_50px_rgba(168,85,247,.5)]">
            <input
              className="w-full rounded-xl border border-purple-500 bg-black p-4 text-purple-200 outline-none"
              placeholder="Paste Solana wallet or token CA..."
            />

            <button
              onClick={scan}
              className="mt-4 w-full rounded-xl bg-gradient-to-r from-purple-600 to-pink-500 py-4 font-bold text-white"
            >
              SCAN NOW
            </button>

            <pre className="mt-6 min-h-[300px] whitespace-pre-wrap text-sm text-purple-200">
              {loading
                ? `> initializing lostpengu ai...
> scanning chain activity...
> detecting social exposure...
> analyzing emotional damage...
> generating verdict...`
                : result}
            </pre>
          </div>
        </div>
      </section>

      <section id="chart" className="px-6 py-24 bg-purple-950/20">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-4xl font-black">Live Market Data</h2>

          <div className="mt-8 rounded-3xl border border-purple-500/30 bg-black/70 p-6">
            <div className="flex h-96 items-center justify-center text-gray-400">
              Dexscreener chart will be embedded here
            </div>
          </div>
        </div>
      </section>

      <section id="tokenomics" className="px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-4xl font-black">Tokenomics</h2>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {[
              ["Supply", "1,000,000,000"],
              ["Network", "Solana"],
              ["Tax", "0%"],
              ["LP Status", "Community Focused"],
              ["Launch Type", "Pump.fun"],
              ["AI Status", "Experiment Active"],
            ].map(([a, b]) => (
              <div
                key={a}
                className="rounded-2xl border border-purple-500/30 bg-white/5 p-6"
              >
                <p className="text-gray-400">{a}</p>

                <h3 className="mt-2 text-2xl font-bold text-purple-300">
                  {b}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-24 bg-purple-950/20">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-4xl font-black">
            How to Join the Colony
          </h2>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {[
              [
                "1. Create a Wallet",
                "Download Phantom Wallet and create your Solana wallet securely.",
              ],
              [
                "2. Get SOL",
                "Buy or transfer SOL to your wallet to prepare for trading.",
              ],
              [
                "3. Buy LostPengu",
                "Connect your wallet and join the LostPengu ecosystem through Pump.fun or supported Solana markets.",
              ],
            ].map(([a, b]) => (
              <div
                key={a}
                className="rounded-2xl border border-purple-500/30 bg-black/50 p-6"
              >
                <h3 className="text-2xl font-bold text-purple-300">
                  {a}
                </h3>

                <p className="mt-3 text-gray-300">{b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-4xl font-black">
            Evolution Roadmap
          </h2>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {[
              [
                "Phase 1",
                "Website launch, AI Terminal, community formation and Solana presence.",
              ],
              [
                "Phase 2",
                "Real wallet analytics, meme intelligence system, AI upgrades and community tools.",
              ],
              [
                "Phase 3",
                "Self improving AI systems, ecosystem expansion and unknown experiments.",
              ],
            ].map(([a, b]) => (
              <div
                key={a}
                className="rounded-2xl border border-purple-500/30 bg-white/5 p-6"
              >
                <h3 className="text-2xl font-bold text-pink-300">
                  {a}
                </h3>

                <p className="mt-3 text-gray-300">{b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="community"
        className="px-6 py-24 bg-purple-950/20 text-center"
      >
        <h2 className="text-4xl font-black">
          Join the LostPengu Community
        </h2>

        <p className="mt-4 text-gray-300">
          A growing Solana colony powered by AI and community.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <a
            href="https://x.com/LostPengu0"
            target="_blank"
            className="rounded-full border border-purple-400 px-8 py-3 hover:bg-purple-700/30"
          >
            X / Twitter
          </a>

          <a
            href="https://x.com/lostpengu0?s=21"
            target="_blank"
            className="rounded-full border border-purple-400 px-8 py-3 hover:bg-purple-700/30"
          >
            X Community
          </a>

          <a
            href="https://t.me/LostPengu0"
            target="_blank"
            className="rounded-full border border-purple-400 px-8 py-3 hover:bg-purple-700/30"
          >
            Telegram
          </a>

          <a
            href="https://www.reddit.com/u/lostpengu01"
            target="_blank"
            className="rounded-full border border-purple-400 px-8 py-3 hover:bg-purple-700/30"
          >
            Reddit
          </a>

          <a
            href="https://github.com/lostpengu0-crypto"
            target="_blank"
            className="rounded-full border border-purple-400 px-8 py-3 hover:bg-purple-700/30"
          >
            GitHub
          </a>
        </div>
      </section>

      <footer className="border-t border-purple-900 bg-black px-6 py-8 text-center text-gray-500">
        Contract Address: Coming Soon
        <br />
        Made with 🐧 on Solana
        <br />
        maybe we were never lost.
      </footer>

      <style jsx global>{`
        @keyframes rain {
          0% {
            transform: translateY(-30%);
          }
          100% {
            transform: translateY(20%);
          }
        }
      `}</style>
    </main>
  );
}
