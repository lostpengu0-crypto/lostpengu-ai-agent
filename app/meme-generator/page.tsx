'use client';

import { useRef, useState } from 'react';

export default function MemeGenerator() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [topText, setTopText] = useState('WHEN THE MARKET IS LOST');
  const [bottomText, setBottomText] = useState('PENGU KEEPS CODING');

  function generateMeme() {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const image = new Image();
    image.src = '/pengu.jpg';

    image.onload = () => {
      canvas.width = 1080;
      canvas.height = 1080;

      ctx.fillStyle = '#0a0f1c';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.drawImage(image, 140, 180, 800, 650);

      ctx.font = 'bold 58px Arial';
      ctx.textAlign = 'center';
      ctx.fillStyle = 'white';
      ctx.strokeStyle = 'black';
      ctx.lineWidth = 10;

      ctx.strokeText(topText.toUpperCase(), 540, 100);
      ctx.fillText(topText.toUpperCase(), 540, 100);

      ctx.strokeText(bottomText.toUpperCase(), 540, 1010);
      ctx.fillText(bottomText.toUpperCase(), 540, 1010);
    };
  }

  function downloadMeme() {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const link = document.createElement('a');
    link.download = 'lostpengu-meme.png';
    link.href = canvas.toDataURL('image/png');
    link.click();
  }

  return (
    <main className="min-h-screen bg-[#0a0f1c] text-white px-6 py-12">
      <div className="max-w-5xl mx-auto text-center">
        <h1 className="text-5xl md:text-7xl font-black mb-4">
          LOST<span className="text-cyan-400">PENGU</span>
        </h1>

        <p className="text-2xl text-cyan-400 mb-10">
          Meme Image Generator
        </p>

        <div className="grid md:grid-cols-2 gap-8 items-start">
          <div className="rounded-3xl border border-white/20 bg-white/5 p-6">
            <input
              value={topText}
              onChange={(e) => setTopText(e.target.value)}
              className="w-full mb-4 rounded-2xl bg-black/40 border border-white/20 p-4 text-white outline-none"
              placeholder="Top text"
            />

            <input
              value={bottomText}
              onChange={(e) => setBottomText(e.target.value)}
              className="w-full mb-4 rounded-2xl bg-black/40 border border-white/20 p-4 text-white outline-none"
              placeholder="Bottom text"
            />

            <button
              onClick={generateMeme}
              className="w-full py-5 mb-4 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-2xl font-bold hover:scale-105 transition-all"
            >
              Generate Meme
            </button>

            <button
              onClick={downloadMeme}
              className="w-full py-5 border border-cyan-400/40 rounded-2xl font-bold hover:bg-cyan-400/10 transition-all"
            >
              Download PNG
            </button>
          </div>

          <div className="rounded-3xl border border-cyan-400/30 bg-black/40 p-4">
            <canvas
              ref={canvasRef}
              className="w-full rounded-2xl bg-black"
            />
          </div>
        </div>
      </div>
    </main>
  );
}
