'use client';

import { useState } from 'react';

export default function MemeGenerator() {
  const [idea, setIdea] = useState('');
  const [result, setResult] = useState('');

  function generateMemePrompt() {
    const userIdea = idea.trim() || 'LostPengu building its AI colony';

    const prompt = `🐧 LostPengu Meme Prompt:

Create a viral crypto meme featuring LostPengu, a self-coding penguin AI agent on Solana.

Scene idea: ${userIdea}

Style: funny, cinematic, web3 culture, icy Antarctic base, glowing AI screens, meme energy, community-driven, high detail.

Caption idea:
"Lost? Never. The colony is coding."

Suggested hashtags:
#LostPengu #Solana #Memecoin #AIAgent #CryptoMeme`;

    setResult(prompt);
  }

  return (
    <main className="min-h-screen bg-[#0a0f1c] text-white overflow-hidden relative">
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6 py-16 text-center">
        <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-4">
          LOST<span className="text-cyan-400">PENGU</span>
        </h1>

        <p className="text-2xl md:text-4xl font-light text-cyan-400 mb-8">
          Meme Agent
        </p>

        <p className="max-w-xl text-gray-300 mb-8">
          Generate LostPengu meme prompts, captions, and viral content ideas.
        </p>

        <div className="w-full max-w-2xl rounded-3xl border border-cyan-400/30 bg-black/40 p-6 shadow-2xl">
          <textarea
            value={idea}
            onChange={(e) => setIdea(e.target.value)}
            placeholder="Example: LostPengu coding while whales are watching..."
            className="w-full min-h-32 rounded-2xl bg-white/10 border border-white/20 p-4 text-white outline-none"
          />

          <button
            onClick={generateMemePrompt}
            className="mt-5 w-full py-5 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-2xl text-lg font-semibold hover:scale-105 active:scale-95 transition-all"
          >
            Generate Meme Prompt
          </button>

          {result && (
            <div className="mt-6 text-left whitespace-pre-wrap rounded-2xl bg-black/50 border border-white/10 p-5 text-sm text-gray-200">
              {result}
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
