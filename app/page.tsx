"use client";

import { useState } from "react";

const CONTRACT_ADDRESS = "3hp7FfaNwp74QT2h82XVjaEW2f8SwBG9cxPCSV5tpump";
const DEXSCREENER_URL =
  "https://dexscreener.com/solana/5vym5pasbe2okbyyihth2wny959wfe2yhywbbv3qzxmg";
const PUMPFUN_URL = "https://pump.fun";

export default function Home() {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState("");

  const scanWallet = () => {
    setLoading(true);
    setResult("");

    setTimeout(() => {
      setResult(`> LOSTPENGU AI TERMINAL

TECHNICAL ANALYSIS
Wallet Age: 214 days
Whale Exposure: MEDIUM
Dev Wallet Activity: DETECTED
Rug Probability: LOW

SOCIAL ANALYSIS
X Signal: ACTIVE
Community Heat: GROWING
Meme Exposure: HIGH

PSYCHOLOGICAL ANALYSIS
FOMO Damage: EXTREME
Patience Level: LOW
Diamond Hands Probability: 24%

AI VERDICT
"This wallet survived meme warfare and emotional damage.
LostPengu recommends patience."`);
      setLoading(false);
    }, 2200);
  };

  const copyCA = async () => {
    await navigator.clipboard.writeText(CONTRACT_ADDRESS);
    alert("Contract address copied!");
  };

  return (
    <main className="min-h-screen overflow-hidden bg-[#030007] text-white">
      <nav className="fixed top-0 z-50 w-full border-b border-purple-500/20 bg-black/55 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
            <img
              src="/pengu-logo.png"
              alt="LostPengu Logo"
              className="h-14 w-14 rounded-full border border-purple-400/40 object-cover shadow-[0_0_22px_rgba(217,70,239,.65)]"
            />

            <div>
              <div className="text-2xl font-black">LOSTPENGU</div>
              <div className="text-xs text-purple-300">AI Agent on Solana</div>
            </div>
          </div>

          <div className="hidden gap-8 text-sm md:flex">
            <a href="#story">Story</a>
            <a href="#about">About</a>
            <a href="#terminal">AI Terminal</a>
            <a href="#chart">Chart</a>
            <a href="#tokenomics">Tokenomics</a>
            <a href="#community">Community</a>
          </div>

          <a
            href={PUMPFUN_URL}
            target="_blank"
            className="rounded-full bg-gradient-to-r from-purple-600 to-pink-500 px-7 py-3 font-bold shadow-[0_0_35px_rgba(217,70,239,.55)]"
          >
            Buy Now
          </a>
        </div>
      </nav>

      <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 pt-32 text-center">
        <img
          src="/pengu-colony.png"
          alt="Pengu Colony"
          className="absolute inset-0 h-full w-full object-cover opacity-95"
        />

        <div className="absolute inset-0 bg-black/30" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(168,85,247,0.25),transparent_65%)]" />

        <div className="relative z-10 mx-auto max-w-6xl">
          <div className="mb-6 inline-block rounded-full border border-purple-300/40 bg-black/30 px-7 py-3 text-sm text-purple-100 backdrop-blur-md">
            SELF CODING AI PENGUIN ON SOLANA
          </div>

          <h1 className="bg-gradient-to-r from-white via-purple-100 to-pink-300 bg-clip-text text-7xl font-black text-transparent md:text-9xl">
            LostPengu
          </h1>

          <p className="mx-auto mt-7 max-w-3xl text-xl leading-9 text-gray-100">
            A cinematic Solana AI project combining autonomous systems,
            storytelling, meme culture and community powered tools.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-5">
            <a
              href={PUMPFUN_URL}
              target="_blank"
              className="rounded-full bg-gradient-to-r from-purple-600 to-pink-500 px-10 py-4 font-bold shadow-[0_0_30px_rgba(217,70,239,.55)]"
            >
              Buy on Pump.fun
            </a>

            <a
              href="#terminal"
              className="rounded-full border border-purple-300/30 bg-black/30 px-10 py-4 font-bold backdrop-blur-md"
            >
              Launch AI Terminal
            </a>
          </div>

          <div className="mx-auto mt-10 grid max-w-4xl gap-6 rounded-3xl border border-purple-500/20 bg-black/40 p-6 text-left backdrop-blur-xl md:grid-cols-2">
            <div>
              <p className="text-sm uppercase tracking-[0.25em] text-gray-400">
                Contract Address
              </p>

              <div className="mt-4 rounded-2xl border border-purple-500/20 bg-black/60 p-5 shadow-[0_0_25px_rgba(168,85,247,.15)]">
                <p className="break-all font-mono text-sm leading-7 text-purple-200">
                  {CONTRACT_ADDRESS}
                </p>
              </div>

              <div className="mt-5 flex flex-wrap gap-3">
                <button
                  onClick={copyCA}
                  className="rounded-full border border-purple-400/30 bg-black/40 px-6 py-3 text-sm font-bold backdrop-blur-md"
                >
                  Copy CA
                </button>

                <a
                  href={PUMPFUN_URL}
                  target="_blank"
                  className="rounded-full bg-gradient-to-r from-purple-600 to-pink-500 px-6 py-3 text-sm font-bold shadow-[0_0_30px_rgba(217,70,239,.45)]"
                >
                  Buy on Pump.fun
                </a>

                <a
                  href={DEXSCREENER_URL}
                  target="_blank"
                  className="rounded-full border border-purple-400/30 bg-black/40 px-6 py-3 text-sm font-bold backdrop-blur-md"
                >
                  View DexScreener
                </a>
              </div>
            </div>

            <div className="flex flex-col items-start justify-center gap-3 md:items-end">
              <div className="flex items-center gap-3">
                <div className="h-3 w-3 rounded-full bg-green-400 shadow-[0_0_15px_rgba(74,222,128,.9)]" />

                <p className="font-bold text-green-400">
                  Token Successfully Launched
                </p>
              </div>

              <p className="max-w-sm text-sm leading-7 text-gray-400 md:text-right">
                LostPengu is now officially live on Solana. Community, AI
                systems and the terminal ecosystem are now active.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="story" className="relative px-6 py-28">
        <div className="pointer-events-none absolute right-10 top-10 text-[240px] opacity-[0.03]">
          🐧
        </div>

        <div className="mx-auto grid max-w-7xl items-center gap-16 md:grid-cols-[420px_1fr]">
          <div className="mx-auto w-full max-w-[360px] rounded-[2rem] border border-purple-500/30 bg-black/40 p-4 shadow-[0_0_35px_rgba(217,70,239,.25)] backdrop-blur-xl">
            <video
              className="aspect-[9/16] w-full rounded-[1.5rem] object-cover"
              controls
              muted
              loop
              playsInline
            >
              <source src="/story.mp4" type="video/mp4" />
            </video>
          </div>

          <div>
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.35em] text-purple-300">
              THE ORIGIN STORY
            </p>

            <h2 className="text-5xl font-black leading-tight md:text-6xl">
              The Rise of LostPengu
            </h2>

            <p className="mt-8 max-w-3xl text-lg leading-9 text-gray-300">
              Most tokens appear overnight. Nobody knows where they came from.
              Nobody knows why they exist.
              <br />
              <br />
              LostPengu chose a different path.
              <br />
              <br />
              Before becoming part of Solana culture, the penguin had a
              beginning. Its story explains how LostPengu entered this world, why
              it started observing blockchain behavior, and how it evolved into a
              self coding AI agent.
              <br />
              <br />
              From that origin, the first system was born:
              <span className="font-bold text-purple-300">
                {" "}
                the LostPengu AI Terminal.
              </span>
            </p>
          </div>
        </div>
      </section>

      <section
        id="about"
        className="relative border-y border-purple-500/10 bg-purple-950/10 px-6 py-28"
      >
        <div className="pointer-events-none absolute left-10 top-10 text-[230px] opacity-[0.03]">
          🐧
        </div>

        <div className="mx-auto max-w-7xl">
          <div className="max-w-4xl">
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.35em] text-purple-300">
              ABOUT THE SYSTEM
            </p>

            <h2 className="text-5xl font-black leading-tight">
              Why LostPengu Built The Terminal?
            </h2>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {[
              [
                "AI Driven",
                "Experimental AI systems designed to observe blockchain behavior, community signals and evolving meme culture.",
              ],
              [
                "Community Focused",
                "LostPengu was created for the colony. Every system evolves with community interaction and transparency.",
              ],
              [
                "Transparency First",
                "Unlike most meme projects, LostPengu chose to reveal its story, systems and experimental direction.",
              ],
            ].map(([title, text]) => (
              <div
                key={title}
                className="rounded-3xl border border-purple-500/20 bg-black/40 p-8 backdrop-blur-xl"
              >
                <h3 className="text-2xl font-bold text-purple-300">{title}</h3>
                <p className="mt-5 leading-8 text-gray-300">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="terminal" className="relative px-6 py-28">
        <div className="pointer-events-none absolute right-10 top-10 text-[240px] opacity-[0.03]">
          🐧
        </div>

        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.35em] text-purple-300">
              LOSTPENGU AI TERMINAL
            </p>

            <h2 className="text-5xl font-black">
              Analyze. Detect. Understand.
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-300">
              Analyze wallets, detect social exposure, study meme psychology and
              explore the experimental LostPengu AI system.
            </p>
          </div>

          <div className="mt-14 rounded-[2rem] border border-purple-500/20 bg-black/50 p-7 shadow-[0_0_40px_rgba(168,85,247,.25)] backdrop-blur-xl">
            <div className="flex gap-4">
              <input
                placeholder="Paste Solana wallet or token CA..."
                className="w-full rounded-xl border border-purple-500/20 bg-black p-4 text-purple-200 outline-none"
              />

              <button
                onClick={scanWallet}
                className="rounded-xl bg-gradient-to-r from-purple-600 to-pink-500 px-8 font-bold"
              >
                Scan
              </button>
            </div>

            <pre className="mt-6 min-h-[250px] whitespace-pre-wrap rounded-2xl border border-purple-500/20 bg-black/70 p-6 font-mono text-sm text-green-400">
              {loading
                ? `> Initializing LostPengu AI...
> Connecting to Solana...
> Detecting signals...
> Generating verdict...`
                : result}
            </pre>
          </div>
        </div>
      </section>

      <section
        id="chart"
        className="relative border-y border-purple-500/10 bg-purple-950/10 px-6 py-28"
      >
        <div className="mx-auto max-w-7xl">
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.35em] text-purple-300">
            LIVE MARKET DATA
          </p>

          <h2 className="text-5xl font-black">Live Chart</h2>

          <div className="mt-12 overflow-hidden rounded-[2rem] border border-purple-500/20 bg-black/45 backdrop-blur-xl">
            <iframe
              src="https://dexscreener.com/solana/5vym5pasbe2okbyyihth2wny959wfe2yhywbbv3qzxmg?embed=1&theme=dark"
              className="h-[520px] w-full"
            />
          </div>
        </div>
      </section>

      <section id="tokenomics" className="relative px-6 py-28">
        <div className="pointer-events-none absolute left-12 top-12 text-[230px] opacity-[0.03]">
          🐧
        </div>

        <div className="mx-auto max-w-7xl">
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.35em] text-purple-300">
            TOKEN DETAILS
          </p>

          <h2 className="text-5xl font-black">Tokenomics</h2>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              ["Supply", "1,000,000,000"],
              ["Network", "Solana"],
              ["Tax", "0%"],
              ["Launch", "Pump.fun"],
              ["LP Status", "Community Focused"],
              ["AI Status", "Experiment Active"],
            ].map(([label, value]) => (
              <div
                key={label}
                className="rounded-3xl border border-purple-500/20 bg-black/40 p-8 backdrop-blur-xl"
              >
                <p className="text-gray-400">{label}</p>
                <h3 className="mt-4 text-3xl font-black text-purple-300">
                  {value}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="how-to-buy"
        className="border-y border-purple-500/10 bg-purple-950/10 px-6 py-28"
      >
        <div className="mx-auto max-w-7xl">
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.35em] text-purple-300">
            HOW TO BUY
          </p>

          <h2 className="text-5xl font-black">How to Join the Colony</h2>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
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
                "Connect your wallet and join through Pump.fun or supported Solana markets.",
              ],
            ].map(([title, text]) => (
              <div
                key={title}
                className="rounded-3xl border border-purple-500/20 bg-black/40 p-8 backdrop-blur-xl"
              >
                <h3 className="text-2xl font-bold text-purple-300">{title}</h3>
                <p className="mt-5 leading-8 text-gray-300">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="roadmap" className="relative px-6 py-28">
        <div className="mx-auto max-w-7xl">
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.35em] text-purple-300">
            EVOLUTION ROADMAP
          </p>

          <h2 className="text-5xl font-black">Evolution Roadmap</h2>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              [
                "Phase 1",
                "Website launch, origin story, AI Terminal demo, community formation and Solana presence.",
              ],
              [
                "Phase 2",
                "Real wallet analytics, meme intelligence system, social signal tracking and AI upgrades.",
              ],
              [
                "Phase 3",
                "Self improving AI systems, ecosystem expansion, public tools and unknown experiments.",
              ],
            ].map(([title, text]) => (
              <div
                key={title}
                className="rounded-3xl border border-purple-500/20 bg-black/40 p-8 backdrop-blur-xl"
              >
                <h3 className="text-2xl font-bold text-pink-300">{title}</h3>
                <p className="mt-5 leading-8 text-gray-300">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="community"
        className="relative border-t border-purple-500/10 bg-purple-950/10 px-6 py-28 text-center"
      >
        <div className="pointer-events-none absolute right-10 top-8 text-[230px] opacity-[0.035]">
          🐧
        </div>

        <h2 className="text-5xl font-black">Join The LostPengu Community</h2>

        <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-300">
          A growing digital penguin colony powered by Solana, AI systems and
          community culture.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-5">
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

          <a
            href={DEXSCREENER_URL}
            target="_blank"
            className="rounded-full border border-purple-400/30 bg-white/5 px-8 py-4 backdrop-blur-md"
          >
            DexScreener
          </a>
        </div>
      </section>

      <footer className="border-t border-purple-500/20 px-6 py-10 text-center text-gray-500">
        Contract Address:
        <br />
        <span className="break-all font-mono text-purple-300">
          {CONTRACT_ADDRESS}
        </span>
        <br />
        Made with 🐧 on Solana
        <br />
        maybe we were never lost.
      </footer>
    </main>
  );
}
