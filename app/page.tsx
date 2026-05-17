"use client";

import { useState } from "react";

export default function Home() {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState("");

  const verdicts = [
    "This wallet emotionally donated liquidity to strangers.",
    "FOMO levels critical. Please step away from PumpFun.",
    "LostPengu AI detected extreme degen behavior.",
    "This trader buys tops professionally.",
    "Psychological stability below acceptable levels.",
  ];

  const scanWallet = () => {
    setLoading(true);
    setResult("");

    setTimeout(() => {
      const randomVerdict =
        verdicts[Math.floor(Math.random() * verdicts.length)];

      setResult(`
> WALLET SCAN COMPLETE

Pengu Score: ${Math.floor(Math.random() * 100)}/100
FOMO Risk: EXTREME
Rug Survival Rate: ${Math.floor(Math.random() * 100)}%
Psychological Stability: ${Math.floor(Math.random() * 100)}%

AI Verdict:
"${randomVerdict}"
      `);

      setLoading(false);
    }, 3000);
  };

  return (
    <main className="min-h-screen bg-black text-green-400 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1517783999520-f068d7431a60?q=80&w=1974&auto=format&fit=crop')] bg-cover bg-center opacity-20"></div>

      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6 text-center">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">
          LOSTPENGU AI TERMINAL
        </h1>

        <p className="text-lg md:text-2xl text-purple-300 mb-10 max-w-2xl">
          Scan Solana wallets through the most savage penguin AI on the blockchain.
        </p>

        <div className="w-full max-w-2xl bg-black/70 border border-purple-500 rounded-2xl p-6 shadow-[0_0_30px_rgba(168,85,247,0.5)] backdrop-blur-md">
          <div className="text-left mb-4 text-sm text-purple-400">
            LOSTPENGU TERMINAL v1.0
          </div>

          <input
            type="text"
            placeholder="Paste Solana wallet or token CA..."
            className="w-full bg-black border border-green-500 rounded-lg p-4 text-green-400 outline-none mb-4"
          />

          <button
            onClick={scanWallet}
            className="w-full bg-gradient-to-r from-purple-600 to-pink-500 text-white font-bold py-4 rounded-lg hover:scale-105 transition"
          >
            SCAN NOW
          </button>

          <div className="mt-6 text-left whitespace-pre-line font-mono text-sm min-h-[200px]">
            {loading ? (
              <div className="animate-pulse">
                {`> Initializing LostPengu AI...
> Connecting to Solana network...
> Reading wallet behavior...
> Detecting FOMO damage...
> Generating final verdict...`}
              </div>
            ) : (
              result
            )}
          </div>
        </div>

        <p className="mt-10 text-gray-500 text-sm">
          Built by LostPengu AI • Entertainment based AI terminal demo
        </p>
      </div>
    </main>
  );
}
