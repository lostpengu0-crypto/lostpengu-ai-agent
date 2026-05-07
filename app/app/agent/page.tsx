'use client';

import { useState } from 'react';

export default function AgentPage() {
  const [input, setInput] = useState('');
  const [response, setResponse] = useState('');

  function handleAgent() {
    const userPrompt = input.toLowerCase();

    if (userPrompt.includes('meme')) {
      setResponse('🐧 LostPengu Agent: Generating viral meme strategy for the colony...');
    } else if (userPrompt.includes('token')) {
      setResponse('💰 LostPengu Agent: Token systems are being synchronized on Solana...');
    } else if (userPrompt.includes('code')) {
      setResponse('🤖 LostPengu Agent: Autonomous coding systems are reviewing your request...');
    } else {
      setResponse('🧠 LostPengu Colony AI processed your request successfully.');
    }
  }

  return (
    <main className="min-h-screen bg-black text-green-400 p-6 font-mono">
      <div className="max-w-4xl mx-auto">

        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          LOSTPENGU AI TERMINAL
        </h1>

        <p className="text-green-300 mb-10">
          Autonomous colony intelligence system online.
        </p>

        <div className="border border-green-500 rounded-2xl p-6 bg-green-500/5">

          <div className="mb-4 space-y-2 text-sm text-green-300">
            <p>🟢 Colony Brain: ACTIVE</p>
            <p>🟢 Autonomous Runtime: RUNNING</p>
            <p>🟢 Meme Systems: ONLINE</p>
            <p>🟢 Memory Layer: SYNCHRONIZED</p>
          </div>

          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask LostPengu Agent..."
            className="w-full min-h-32 bg-black border border-green-500 rounded-xl p-4 text-green-400 outline-none"
          />

          <button
            onClick={handleAgent}
            className="mt-5 px-8 py-4 bg-green-500 text-black rounded-xl font-bold hover:scale-105 transition-all"
          >
            Execute Request
          </button>

          {response && (
            <div className="mt-6 border border-green-500 rounded-xl p-4 bg-black">
              <p>{response}</p>
            </div>
          )}

        </div>
      </div>
    </main>
  );
}
