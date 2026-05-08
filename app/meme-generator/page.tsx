'use client';

import { useEffect, useRef, useState } from 'react';

export default function MemeGenerator() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  const [topText, setTopText] = useState('WHEN THE MARKET IS LOST');
  const [bottomText, setBottomText] = useState('PENGU KEEPS CODING');

  const captions = [
    ['WHEN THE MARKET IS LOST', 'PENGU KEEPS CODING'],
    ['EVERYONE PANICKING', 'THE COLONY IS BUILDING'],
    ['NO HYPE LEFT?', 'LOSTPENGU STILL ONLINE'],
    ['MEMECOINS ARE SLEEPING', 'PENGU IS COMPILING'],
  ];

  function drawMeme(top = topText, bottom = bottomText) {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const image = new Image();
    image.src = '/pengu.jpg';

    image.onload = () => {
      canvas.width = 1080;
      canvas.height = 1080;

      const bg = ctx.createLinearGradient(0, 0, 1080, 1080);
      bg.addColorStop(0, '#05060f');
      bg.addColorStop(0.45, '#201044');
      bg.addColorStop(1, '#061827');
      ctx.fillStyle = bg;
      ctx.fillRect(0, 0, 1080, 1080);

      ctx.fillStyle = 'rgba(34, 211, 238, 0.12)';
      ctx.beginPath();
      ctx.arc(540, 520, 430, 0, Math.PI * 2);
      ctx.fill();

      ctx.shadowColor = '#a855f7';
      ctx.shadowBlur = 45;
      ctx.drawImage(image, 180, 210, 720, 620);
      ctx.shadowBlur = 0;

      ctx.textAlign = 'center';
      ctx.lineJoin = 'round';

      ctx.font = 'bold 62px Arial';
      ctx.fillStyle = '#ffffff';
      ctx.strokeStyle = '#000000';
      ctx.lineWidth = 12;

      ctx.strokeText(top.toUpperCase(), 540, 115);
      ctx.fillText(top.toUpperCase(), 540, 115);

      ctx.strokeText(bottom.toUpperCase(), 540, 990);
      ctx.fillText(bottom.toUpperCase(), 540, 990);

      ctx.font = 'bold 30px Arial';
      ctx.fillStyle = '#22d3ee';
      ctx.fillText('$LP • LOSTPENGU AI', 540, 1040);
    };
  }

  useEffect(() => {
    drawMeme();
  }, []);

  function useCaption(top: string, bottom: string) {
    setTopText(top);
    setBottomText(bottom);
    drawMeme(top, bottom);
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
    <main className="min-h-screen bg-[#05060f] text-white overflow-hidden relative px-6 py-12">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/40 to-transparent"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,#22d3ee_10%,transparent_55%)] opacity-40 animate-pulse"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,#c026d3_20%,transparent_65%)] opacity-30 animate-pulse"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <p className="text-cyan-300 tracking-[0.4em] text-xs mb-4">
            LOSTPENGU CREATIVE LAB
          </p>

          <h1 className="text-5xl md:text-7xl font-black tracking-tighter">
            MEME <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-cyan-300 to-pink-400">STUDIO</span>
          </h1>

          <p className="text-gray-300 mt-4 max-w-2xl mx-auto">
            Create LostPengu themed meme visuals for the colony. Write your caption, generate the image, and download it as PNG.
          </p>
        </div>

        <div className="grid lg:grid-cols-[420px_1fr] gap-8 items-start">
          <div className="rounded-3xl border border-cyan-400/20 bg-black/45 p-6 shadow-2xl backdrop-blur-xl">
            <h2 className="text-2xl font-bold mb-2">Create your meme</h2>
            <p className="text-sm text-gray-400 mb-6">
              Write anything you want. The studio will place it on the LostPengu visual.
            </p>

            <label className="text-sm text-cyan-300">Top text</label>
            <textarea
              value={topText}
              onChange={(e) => setTopText(e.target.value)}
              className="mt-2 mb-4 w-full min-h-24 rounded-2xl bg-white/10 border border-white/15 p-4 text-white outline-none focus:border-cyan-400"
              placeholder="Example: When the market is lost..."
            />

            <label className="text-sm text-cyan-300">Bottom text</label>
            <textarea
              value={bottomText}
              onChange={(e) => setBottomText(e.target.value)}
              className="mt-2 mb-5 w-full min-h-24 rounded-2xl bg-white/10 border border-white/15 p-4 text-white outline-none focus:border-cyan-400"
              placeholder="Example: Pengu keeps coding..."
            />

            <button
              onClick={() => drawMeme()}
              className="w-full py-5 rounded-2xl bg-gradient-to-r from-purple-600 to-cyan-500 font-bold text-lg hover:scale-105 transition-all"
            >
              Generate Meme
            </button>

            <button
              onClick={downloadMeme}
              className="mt-4 w-full py-5 rounded-2xl border border-cyan-400/40 hover:bg-cyan-400/10 font-bold transition-all"
            >
              Download PNG
            </button>

            <div className="mt-7">
              <p className="text-sm text-gray-400 mb-3">Viral caption presets</p>

              <div className="grid gap-3">
                {captions.map(([top, bottom], index) => (
                  <button
                    key={index}
                    onClick={() => useCaption(top, bottom)}
                    className="text-left rounded-2xl border border-white/10 bg-white/5 p-4 hover:border-cyan-400/40 hover:bg-cyan-400/10 transition-all"
                  >
                    <p className="text-sm font-bold">{top}</p>
                    <p className="text-xs text-gray-400">{bottom}</p>
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="rounded-3xl border border-purple-400/25 bg-black/40 p-5 shadow-2xl">
            <div className="mb-4 flex items-center justify-between text-sm text-gray-400">
              <span>Live Preview</span>
              <span>1080 × 1080 PNG</span>
            </div>

            <canvas
              ref={canvasRef}
              className="w-full rounded-3xl bg-black border border-white/10"
            />
          </div>
        </div>
      </div>
    </main>
  );
}
