'use client';

import { useState } from 'react';

const examples = [
  {
    title: 'Cyberpunk Pengu',
    prompt: 'LostPengu, a cute penguin wearing a purple scarf, standing in a neon cyberpunk city, Solana vibes, cinematic lighting, ultra detailed, viral meme style'
  },
  {
    title: 'Rich Pengu',
    prompt: 'LostPengu wearing a purple scarf, sitting like a rich crypto boss near a luxury pool, Solana colors, funny but premium meme style'
  },
  {
    title: 'Hacker Pengu',
    prompt: 'LostPengu coding on multiple screens, purple scarf, dark room, matrix code background, self-coding AI penguin on Solana'
  },
  {
    title: 'Space Pengu',
    prompt: 'LostPengu astronaut on Mars, purple scarf floating, Solana logo vibes, cinematic space meme, futuristic colony'
  },
  {
    title: 'CEO Pengu',
    prompt: 'LostPengu as a powerful CEO penguin, purple scarf, modern office, laptop open, building a Web3 empire'
  },
  {
    title: 'Army Pengu',
    prompt: 'LostPengu leading a penguin army, purple scarves, icy battlefield, heroic cinematic meme, community power'
  },
  {
    title: 'Trader Pengu',
    prompt: 'LostPengu trading Solana charts, purple scarf, glowing crypto screens, focused expression, viral trading meme'
  },
  {
    title: 'Pengu Family',
    prompt: 'LostPengu with a global penguin family, purple scarves, world map background, warm community feeling'
  },
  {
    title: 'Ice Kingdom',
    prompt: 'LostPengu king of an ice kingdom, purple scarf, glowing throne, cinematic fantasy meme style'
  },
  {
    title: 'Quiet Builder',
    prompt: 'LostPengu working silently at night, purple scarf, laptop, soft neon light, move in silence, build in public'
  }
];

export default function MemeGenerator() {
  const [idea, setIdea] = useState('');
  const [finalPrompt, setFinalPrompt] = useState('');

  const createPrompt = () => {
    if (!idea.trim()) return;

    setFinalPrompt(
      `LostPengu, a cute but powerful penguin wearing a purple scarf, ${idea.trim()}, Solana vibes, cinematic lighting, high quality, viral meme style, clean composition, ultra detailed, Web3 community energy`
    );
  };

  const copyPrompt = async (text: string) => {
    await navigator.clipboard.writeText(text);
    alert('Prompt copied!');
  };

  return (
    <main className="min-h-screen bg-[#02040f] text-white font-mono px-6 py-10">
      <div className="max-w-6xl mx-auto">

        <a href="/" className="text-cyan-300 hover:text-cyan-200">
          ← Back to Home
        </a>

        <section className="text-center mt-10 mb-12">
          <h1 className="text-5xl lg:text-7xl font-black tracking-tighter">
            LOST<span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-purple-400">PENGU</span>
          </h1>

          <p className="text-3xl text-cyan-400 mt-3">
            PROMPT GENERATOR
          </p>

          <p className="text-gray-300 max-w-2xl mx-auto mt-6 text-lg">
            Create powerful LostPengu image prompts for free. Copy your prompt and use it in Grok, ChatGPT, Bing Image Creator, Ideogram or any AI image tool.
          </p>
        </section>

        <section className="bg-white/5 border border-cyan-400/20 rounded-3xl p-6 lg:p-8 mb-12 shadow-2xl">
          <label className="block text-cyan-300 mb-3 text-sm tracking-widest">
            WRITE YOUR IDEA
          </label>

          <textarea
            value={idea}
            onChange={(e) => setIdea(e.target.value)}
            placeholder="Example: driving a cyber truck, building a colony, trading Solana, walking in a neon city..."
            className="w-full h-36 bg-black/50 border border-white/20 rounded-2xl p-5 text-white focus:outline-none focus:border-cyan-400 resize-none"
          />

          <button
            onClick={createPrompt}
            className="mt-5 w-full py-5 bg-gradient-to-r from-purple-600 to-fuchsia-600 rounded-2xl text-xl font-bold hover:scale-[1.02] transition-all"
          >
            Create LostPengu Prompt
          </button>

          {finalPrompt && (
            <div className="mt-6 bg-black/50 border border-purple-400/30 rounded-2xl p-5">
              <p className="text-cyan-300 text-sm mb-3 tracking-widest">
                YOUR PROMPT
              </p>

              <p className="text-gray-200 leading-relaxed">
                {finalPrompt}
              </p>

              <button
                onClick={() => copyPrompt(finalPrompt)}
                className="mt-5 px-6 py-3 bg-cyan-500 hover:bg-cyan-600 rounded-full font-bold"
              >
                Copy Prompt
              </button>
            </div>
          )}
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-6">
            Example LostPengu Prompts
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {examples.map((item, index) => (
              <div
                key={index}
                className="bg-white/5 border border-white/10 rounded-3xl p-5 hover:border-cyan-400/40 transition-all"
              >
                <div className="h-36 rounded-2xl bg-gradient-to-br from-purple-600/30 via-cyan-500/20 to-black border border-white/10 flex items-center justify-center text-5xl mb-5">
                  🐧
                </div>

                <h3 className="text-xl font-bold text-cyan-300 mb-3">
                  {item.title}
                </h3>

                <p className="text-gray-300 text-sm leading-relaxed min-h-[120px]">
                  {item.prompt}
                </p>

                <button
                  onClick={() => {
                    setIdea(item.title);
                    setFinalPrompt(item.prompt);
                    copyPrompt(item.prompt);
                  }}
                  className="mt-5 w-full py-3 rounded-full bg-white/10 hover:bg-white/20 transition-all"
                >
                  Copy This Prompt
                </button>
              </div>
            ))}
          </div>
        </section>

      </div>
    </main>
  );
}
