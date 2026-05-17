"use client";

import { useState } from "react";

export default function Home() {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState("");

  const handleScan = () => {
    setLoading(true);
    setResult("");

    setTimeout(() => {
      setResult(`
WALLET ANALYSIS COMPLETE

Wallet Age: 214 days
Whale Exposure: MEDIUM
Dev Wallet Activity: DETECTED
Social Signal: ACTIVE
Community Heat: HIGH
Rug Probability: LOW

AI VERDICT

"This wallet survived emotional damage,
panic selling and meme warfare.

LostPengu recommends patience."
      `);

      setLoading(false);
    }, 2500);
  };

  return (
    <main className="bg-black text-white overflow-hidden">
      {/* NAVBAR */}

      <nav className="fixed top-0 left-0 z-50 w-full border-b border-purple-500/20 bg-black/40 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div>
            <h1 className="text-2xl font-black">🐧 LOSTPENGU</h1>
            <p className="text-xs text-purple-300">
              AI Agent on Solana
            </p>
          </div>

          <div className="hidden gap-8 text-sm md:flex">
            <a href="#story" className="hover:text-purple-300">
              Story
            </a>

            <a href="#about" className="hover:text-purple-300">
              About
            </a>

            <a href="#terminal" className="hover:text-purple-300">
              AI Terminal
            </a>

            <a href="#tokenomics" className="hover:text-purple-300">
              Tokenomics
            </a>

            <a href="#community" className="hover:text-purple-300">
              Community
            </a>
          </div>

          <a
            href="#"
            className="rounded-full bg-gradient-to-r from-purple-600 to-pink-500 px-6 py-3 text-sm font-bold shadow-[0_0_30px_rgba(168,85,247,.5)]"
          >
            Coming Soon
          </a>
        </div>
      </nav>

      {/* HERO */}

      <section className="relative flex min-h-screen items-center overflow-hidden px-6">
        {/* BACKGROUND */}

        <div className="absolute inset-0">
          <img
            src="/pengu-colony.jpg"
            alt="Penguin Colony"
            className="h-full w-full object-cover opacity-30"
          />
        </div>

        {/* DARK OVERLAY */}

        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-purple-950/40 to-black" />

        {/* BIG PENGU LOGO */}

        <div className="absolute inset-0 flex items-center justify-center opacity-[0.05]">
          <img
            src="/pengu-logo.png"
            alt="logo"
            className="w-[700px]"
          />
        </div>

        {/* LIGHT CODE FLOW */}

        <div className="absolute inset-0 opacity-[0.04]">
          <div className="animate-[float_20s_linear_infinite] font-mono text-xs leading-7 text-purple-200">
            {Array.from({ length: 70 }).map((_, i) => (
              <p key={i}>
                🐧 LOSTPENGU SOLANA AI TERMINAL COMMUNITY SIGNAL
              </p>
            ))}
          </div>
        </div>

        {/* CONTENT */}

        <div className="relative z-10 mx-auto max-w-5xl text-center">
          <div className="mb-6 inline-block rounded-full border border-purple-400/30 bg-white/5 px-6 py-3 text-sm text-purple-200 backdrop-blur-md">
            SELF CODING AI PENGUIN ON SOLANA
          </div>

          <h1 className="text-7xl font-black tracking-tight md:text-9xl">
            LOSTPENGU
          </h1>

          <h2 className="mt-6 bg-gradient-to-r from-purple-300 via-pink-300 to-blue-300 bg-clip-text text-3xl font-black text-transparent md:text-6xl">
            The First Self Coding AI Penguin
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-gray-300 md:text-xl">
            A cinematic Solana AI project combining autonomous systems,
            storytelling, meme culture and community powered tools.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-5">
            <a
              href="#"
              className="rounded-full bg-gradient-to-r from-purple-600 to-pink-500 px-10 py-5 font-bold shadow-[0_0_40px_rgba(168,85,247,.5)] transition hover:scale-105"
            >
              Buy on Pump.fun
            </a>

            <a
              href="#terminal"
              className="rounded-full border border-purple-400/40 bg-white/5 px-10 py-5 font-bold backdrop-blur-md transition hover:bg-purple-500/10"
            >
              Launch AI Terminal
            </a>
          </div>
        </div>
      </section>

      {/* STORY */}

      <section
        id="story"
        className="relative px-6 py-32"
      >
        <div className="mx-auto grid max-w-7xl items-center gap-16 md:grid-cols-2">
          <div className="rounded-[2rem] border border-purple-500/20 bg-white/5 p-5 backdrop-blur-xl">
            <div className="flex h-[400px] items-center justify-center rounded-[1.5rem] border border-purple-500/20 bg-black/60 text-gray-400">
              Story Video Here
            </div>
          </div>

          <div>
            <h2 className="text-5xl font-black">
              The Rise of LostPengu
            </h2>

            <p className="mt-8 text-lg leading-9 text-gray-300">
              Most tokens appear overnight.
              Nobody knows where they came from.
              Nobody knows why they exist.
              <br />
              <br />
              But LostPengu chose to tell its story.
              <br />
              <br />
              Before becoming part of Solana culture,
              the penguin had a beginning.
              <br />
              <br />
              If you want to discover how LostPengu entered
              this world, watch the origin story.
            </p>
          </div>
        </div>
      </section>

      {/* ABOUT */}

      <section
        id="about"
        className="relative overflow-hidden bg-purple-950/20 px-6 py-32"
      >
        <div className="absolute right-0 top-0 opacity-[0.03]">
          <img
            src="/pengu-logo.png"
            alt=""
            className="w-[600px]"
          />
        </div>

        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 md:grid-cols-2">
            <div>
              <p className="mb-4 text-sm uppercase tracking-[0.4em] text-purple-300">
                ABOUT THE AI SYSTEM
              </p>

              <h2 className="text-5xl font-black leading-tight">
                Why LostPengu Built The Terminal
              </h2>

              <p className="mt-8 text-lg leading-9 text-gray-300">
                After entering the Solana ecosystem,
                LostPengu began studying wallet behavior,
                meme culture and blockchain psychology.
                <br />
                <br />
                Instead of creating another meaningless token,
                the penguin started building experimental AI systems
                focused on interaction, transparency and community tools.
                <br />
                <br />
                The LostPengu AI Terminal became the first step
                of this evolving vision.
              </p>
            </div>

            <div className="rounded-[2rem] border border-purple-500/20 bg-black/40 p-10 backdrop-blur-xl">
              <div className="text-6xl text-purple-400">“</div>

              <p className="mt-6 text-3xl font-bold leading-relaxed">
                Most projects launched silently.
                <br />
                LostPengu chose to build openly.
              </p>

              <p className="mt-8 text-gray-400">
                LostPengu AI System
              </p>
            </div>
          </div>

          {/* CARDS */}

          <div className="mt-16 grid gap-6 md:grid-cols-3">
            <div className="rounded-3xl border border-purple-500/20 bg-black/40 p-8">
              <h3 className="text-2xl font-bold text-purple-300">
                AI Driven
              </h3>

              <p className="mt-4 text-gray-300">
                Experimental Solana AI systems designed for interaction,
                analysis and evolution.
              </p>
            </div>

            <div className="rounded-3xl border border-purple-500/20 bg-black/40 p-8">
              <h3 className="text-2xl font-bold text-pink-300">
                Community Powered
              </h3>

              <p className="mt-4 text-gray-300">
                Built together with the colony through open development
                and growing community culture.
              </p>
            </div>

            <div className="rounded-3xl border border-purple-500/20 bg-black/40 p-8">
              <h3 className="text-2xl font-bold text-blue-300">
                Transparency First
              </h3>

              <p className="mt-4 text-gray-300">
                Story driven identity, public systems and evolving
                experimental infrastructure.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* TERMINAL */}

      <section
        id="terminal"
        className="relative overflow-hidden px-6 py-32"
      >
        {/* MATRIX */}

        <div className="absolute inset-0 opacity-[0.05]">
          <div className="animate-[float_15s_linear_infinite] font-mono text-xs leading-7 text-green-300">
            {Array.from({ length: 100 }).map((_, i) => (
              <p key={i}>
                010101 LOSTPENGU TERMINAL WALLET SCAN AI SIGNAL 🐧
              </p>
            ))}
          </div>
        </div>

        <div className="relative z-10 mx-auto max-w-5xl">
          <h2 className="text-center text-6xl font-black">
            LostPengu AI Terminal
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-center text-lg leading-8 text-gray-300">
            Analyze wallets, detect social exposure,
            study meme psychology and explore the experimental
            LostPengu AI system.
          </p>

          <div className="mt-14 rounded-[2rem] border border-purple-500/30 bg-black/80 p-8 shadow-[0_0_60px_rgba(168,85,247,.4)] backdrop-blur-xl">
            <input
              placeholder="Paste Solana wallet or token CA..."
              className="w-full rounded-2xl border border-purple-500/30 bg-black p-5 text-purple-200 outline-none"
            />

            <button
              onClick={handleScan}
              className="mt-5 w-full rounded-2xl bg-gradient-to-r from-purple-600 to-pink-500 py-5 text-lg font-black transition hover:scale-[1.01]"
            >
              SCAN NOW
            </button>

            <pre className="mt-8 min-h-[280px] whitespace-pre-wrap rounded-2xl border border-purple-500/20 bg-black/60 p-6 font-mono text-sm text-purple-200">
              {loading
                ? `> Initializing LostPengu AI...
> Connecting to Solana...
> Analyzing social exposure...
> Detecting whale activity...
> Generating verdict...`
                : result}
            </pre>
          </div>
        </div>
      </section>

      {/* TOKENOMICS */}

      <section
        id="tokenomics"
        className="bg-purple-950/20 px-6 py-32"
      >
        <div className="mx-auto max-w-7xl">
          <h2 className="text-5xl font-black">
            Tokenomics
          </h2>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {[
              ["Supply", "1,000,000,000"],
              ["Network", "Solana"],
              ["Tax", "0%"],
              ["Launch", "Pump.fun"],
              ["AI Status", "Active"],
              ["Community", "Growing"],
            ].map(([a, b]) => (
              <div
                key={a}
                className="rounded-3xl border border-purple-500/20 bg-black/40 p-8"
              >
                <p className="text-gray-400">{a}</p>

                <h3 className="mt-4 text-3xl font-black text-purple-300">
                  {b}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COMMUNITY */}

      <section
        id="community"
        className="px-6 py-32 text-center"
      >
        <h2 className="text-5xl font-black">
          Join The Colony
        </h2>

        <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-300">
          A growing digital penguin colony powered by Solana,
          AI systems and community culture.
        </p>

        <div className="mt-12 flex flex-wrap justify-center gap-5">
          <a
            href="https://x.com/LostPengu0"
            target="_blank"
            className="rounded-full border border-purple-400/30 bg-white/5 px-8 py-4 backdrop-blur-md"
          >
            X / Twitter
          </a>

          <a
            href="https://x.com/lostpengu0?s=21"
            target="_blank"
            className="rounded-full border border-purple-400/30 bg-white/5 px-8 py-4 backdrop-blur-md"
          >
            X Community
          </a>

          <a
            href="https://t.me/LostPengu0"
            target="_blank"
            className="rounded-full border border-purple-400/30 bg-white/5 px-8 py-4 backdrop-blur-md"
          >
            Telegram
          </a>

          <a
            href="https://www.reddit.com/u/lostpengu01"
            target="_blank"
            className="rounded-full border border-purple-400/30 bg-white/5 px-8 py-4 backdrop-blur-md"
          >
            Reddit
          </a>

          <a
            href="https://github.com/lostpengu0-crypto"
            target="_blank"
            className="rounded-full border border-purple-400/30 bg-white/5 px-8 py-4 backdrop-blur-md"
          >
            GitHub
          </a>
        </div>
      </section>

      {/* FOOTER */}

      <footer className="border-t border-purple-500/20 px-6 py-10 text-center text-gray-500">
        Contract Address: Coming Soon
        <br />
        Made with 🐧 on Solana
        <br />
        maybe we were never lost.
      </footer>

      {/* ANIMATION */}

      <style jsx global>{`
        @keyframes float {
          0% {
            transform: translateY(-10%);
          }

          100% {
            transform: translateY(10%);
          }
        }
      `}</style>
    </main>
  );
}
