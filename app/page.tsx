'use client';

import { useState } from 'react';

export default function MemeGenerator() {
  const [prompt, setPrompt] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedMeme, setGeneratedMeme] = useState('');

  const generateMeme = async () => {
    if (!prompt.trim()) return;
    
    setIsGenerating(true);
    
    // Şimdilik placeholder (gerçek API bağlayabiliriz)
    setTimeout(() => {
      setGeneratedMeme(`https://picsum.photos/id/${Math.floor(Math.random() * 1000)}/600/600`);
      setIsGenerating(false);
    }, 1500);
  };

  return (
    <main className="min-h-screen bg-[#05060f] text-white py-12 px-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl font-black text-center mb-4">Pengu Meme Generator</h1>
        <p className="text-cyan-400 text-center mb-12">LostPengu AI ile viral meme yarat</p>

        <div className="bg-zinc-950 border border-cyan-500/30 rounded-3xl p-8">
          <div className="flex gap-4 mb-8">
            <input
              type="text"
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              placeholder="Örnek: LostPengu Solana'da dans ediyor..."
              className="flex-1 bg-black border border-white/20 rounded-2xl px-6 py-4 text-lg focus:outline-none focus:border-cyan-400"
            />
            <button
              onClick={generateMeme}
              disabled={isGenerating}
              className="bg-gradient-to-r from-purple-500 to-cyan-500 px-10 rounded-2xl font-semibold hover:scale-105 transition disabled:opacity-50"
            >
              {isGenerating ? 'Generating...' : 'Generate Meme'}
            </button>
          </div>

          {generatedMeme && (
            <div className="text-center">
              <img 
                src={generatedMeme} 
                alt="Generated Meme" 
                className="mx-auto rounded-3xl shadow-2xl border border-cyan-500/30"
              />
              <button className="mt-6 px-8 py-3 bg-white text-black rounded-full font-semibold hover:bg-cyan-400 transition">
                Download Meme
              </button>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
