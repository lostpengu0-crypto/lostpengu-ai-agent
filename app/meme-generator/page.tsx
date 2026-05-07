'use client';

import { useEffect, useRef, useState } from 'react';

export default function MemeGenerator() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  const [topText, setTopText] = useState('WHEN THE MARKET IS LOST');
  const [bottomText, setBottomText] = useState('PENGU KEEPS CODING');

  const captions = [
    {
      top: 'WHEN THE MARKET IS LOST',
      bottom: 'PENGU KEEPS CODING',
    },
    {
      top: 'NO TEAM LEFT?',
      bottom: 'THE COLONY STAYS',
    },
    {
      top: 'EVERYONE PANICKING',
      bottom: 'PENGU BUILDING',
    },
  ];

  function drawMeme(top: string, bottom: string) {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const image = new Image();
    image.src = '/pengu.jpg';

    image.onload = () => {
      canvas.width = 1080;
      canvas.height = 1080;

      // Background
      ctx.fillStyle = '#070b17';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Glow
      const gradient = ctx.createLinearGradient(0, 0, 1080, 1080);
      gradient.addColorStop(0, '#7c3aed');
      gradient.addColorStop(1, '#06b6d4');

      ctx.fillStyle = gradient;
      ctx.globalAlpha = 0.15;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.globalAlpha = 1;

      // Image
      ctx.drawImage(image, 140, 160, 800, 670);

      // Text Style
      ctx.font = 'bold 58px Arial';
      ctx.textAlign = 'center';
      ctx.fillStyle = 'white';
      ctx.strokeStyle = 'black';
      ctx.lineWidth = 12;

      // Top Text
      ctx.strokeText(top.toUpperCase(), 540, 90);
      ctx.fillText(top.toUpperCase(), 540, 90);

      // Bottom Text
      ctx.strokeText(bottom.toUpperCase(), 540, 1010);
      ctx.fillText(bottom.toUpperCase(), 540, 1010);

      // Watermark
      ctx.font = 'bold 28px Arial';
      ctx.fillStyle = '#22d3ee';
      ctx.fillText('$LP • LOSTPENGU AI', 900, 1040);
    };
  }

  useEffect(() => {
    drawMeme(topText, bottomText);
  }, []);

  function generateMeme() {
    drawMeme(topText, bottomText);
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
    <main className="min-h-screen bg-[#070b17] text-white px-6 py-12">
      <div className="max-w-6xl mx-auto">

        <div className="text-center mb-12">
          <h1 className="text-6xl md:text-8xl font-black mb-4">
            LOST<span className="text-cyan-400">PENGU</span>
          </h1>

          <p className="text-3xl text-cyan-400 font-light">
            Meme Studio
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10 items-start">

          {/* Left */}
          <div className="rounded-3xl border border-cyan-400/20 bg-white/5 p-6 backdrop-blur-xl">

            <h2 className="text-2xl font-bold mb-6">
              Create Viral Meme
            </h2>

            <input
              value={topText}
              onChange={(e) => setTopText(e.target.value)}
              placeholder="Top text"
              className="w-full mb-4 rounded-2xl bg-black/40 border border-white/10 p-4 text-white outline-none"
            />

            <input
              value={bottomText}
              onChange={(e) => setBottomText(e.target.value)}
              placeholder="Bottom text"
              className="w-full mb-6 rounded-2xl bg-black/40 border border-white/10 p-4 text-white outline-none"
            />

            <div className="flex flex-wrap gap-3 mb-6">
              {captions.map((caption, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setTopText(caption.top);
                    setBottomText(caption.bottom);
                    drawMeme(caption.top, caption.bottom);
                  }}
                  className="px-4 py-3 rounded-xl bg-cyan-500/10 border border-cyan-400/20 hover:bg-cyan-400/20 transition-all text-sm"
                >
                  Viral Caption {index + 1}
                </button>
              ))}
            </div>

            <button
              onClick={generateMeme}
              className="w-full py-5 mb-4 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-2xl font-bold text-lg hover:scale-105 transition-all"
            >
              Generate Meme
            </button>

            <button
              onClick={downloadMeme}
              className="w-full py-5 rounded-2xl border border-cyan-400/30 hover:bg-cyan-400/10 transition-all font-bold"
            >
              Download PNG
            </button>
          </div>

          {/* Right */}
          <div className="rounded-3xl border border-cyan-400/20 bg-black/40 p-5 shadow-2xl">
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
