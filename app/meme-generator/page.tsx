'use client';

import { useEffect, useRef, useState } from 'react';

export default function MemeGenerator() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  const [topText, setTopText] = useState('WHEN YOU BUY THE DIP');
  const [bottomText, setBottomText] = useState('BUT IT KEEPS DIPPING');

  useEffect(() => {
    generateMeme();
  }, [topText, bottomText]);

  const generateMeme = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const img = new Image();
    img.src = '/pengu.jpg';

    img.onload = () => {
      canvas.width = img.width;
      canvas.height = img.height;

      ctx.drawImage(img, 0, 0);

      ctx.font = 'bold 48px Arial';
      ctx.fillStyle = 'white';
      ctx.strokeStyle = 'black';
      ctx.lineWidth = 5;
      ctx.textAlign = 'center';

      // Top Text
      ctx.strokeText(topText.toUpperCase(), canvas.width / 2, 70);
      ctx.fillText(topText.toUpperCase(), canvas.width / 2, 70);

      // Bottom Text
      ctx.strokeText(
        bottomText.toUpperCase(),
        canvas.width / 2,
        canvas.height - 40
      );

      ctx.fillText(
        bottomText.toUpperCase(),
        canvas.width / 2,
        canvas.height - 40
      );
    };
  };

  const downloadMeme = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const link = document.createElement('a');
    link.download = 'lostpengu-meme.png';
    link.href = canvas.toDataURL();
    link.click();
  };

  return (
    <main className="min-h-screen bg-[#02040f] text-white font-mono px-6 py-10">
      <div className="max-w-6xl mx-auto">

        <a href="/" className="text-cyan-300 hover:text-cyan-200">
          ← Back to Home
        </a>

        {/* HERO */}
        <section className="text-center mt-10 mb-12">
          <h1 className="text-5xl lg:text-7xl font-black tracking-tighter">
            LOST
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-purple-400">
              PENGU
            </span>
          </h1>

          <p className="text-3xl text-cyan-400 mt-3">
            MEME STUDIO
          </p>

          <p className="text-gray-300 max-w-2xl mx-auto mt-6 text-lg">
            Create viral LostPengu memes in seconds.
          </p>
        </section>

        {/* GENERATOR */}
        <div className="grid lg:grid-cols-2 gap-10 items-start">

          {/* LEFT PANEL */}
          <div className="bg-white/5 border border-cyan-400/20 rounded-3xl p-6 shadow-2xl">

            <label className="block text-cyan-300 mb-3 text-sm tracking-widest">
              TOP TEXT
            </label>

            <input
              value={topText}
              onChange={(e) => setTopText(e.target.value)}
              className="w-full bg-black/50 border border-white/20 rounded-2xl p-4 mb-6 text-white focus:outline-none focus:border-cyan-400"
            />

            <label className="block text-cyan-300 mb-3 text-sm tracking-widest">
              BOTTOM TEXT
            </label>

            <input
              value={bottomText}
              onChange={(e) => setBottomText(e.target.value)}
              className="w-full bg-black/50 border border-white/20 rounded-2xl p-4 mb-8 text-white focus:outline-none focus:border-cyan-400"
            />

            <button
              onClick={downloadMeme}
              className="w-full py-5 bg-gradient-to-r from-purple-600 to-fuchsia-600 rounded-2xl text-xl font-bold hover:scale-[1.02] transition-all"
            >
              Download Meme
            </button>

            {/* EXAMPLES */}
            <div className="mt-10">
              <h2 className="text-2xl font-bold mb-5">
                Meme Ideas
              </h2>

              <div className="space-y-3">

                <button
                  onClick={() => {
                    setTopText('WHEN THE COMMUNITY IS REAL');
                    setBottomText('AND NOT FULL OF BOTS');
                  }}
                  className="w-full text-left bg-white/5 hover:bg-white/10 border border-white/10 rounded-2xl p-4 transition-all"
                >
                  Real Community
                </button>

                <button
                  onClick={() => {
                    setTopText('159 COMMITS LATER');
                    setBottomText('WE ARE STILL BUILDING');
                  }}
                  className="w-full text-left bg-white/5 hover:bg-white/10 border border-white/10 rounded-2xl p-4 transition-all"
                >
                  Build In Public
                </button>

                <button
                  onClick={() => {
                    setTopText('WHEN YOU BUY LOSTPENGU EARLY');
                    setBottomText('AND EVERYONE CALLS YOU CRAZY');
                  }}
                  className="w-full text-left bg-white/5 hover:bg-white/10 border border-white/10 rounded-2xl p-4 transition-all"
                >
                  Early Holder
                </button>

                <button
                  onClick={() => {
                    setTopText('MOVE IN SILENCE');
                    setBottomText('BUILD IN PUBLIC');
                  }}
                  className="w-full text-left bg-white/5 hover:bg-white/10 border border-white/10 rounded-2xl p-4 transition-all"
                >
                  Silent Builder
                </button>

              </div>
            </div>
          </div>

          {/* RIGHT PANEL */}
          <div className="flex justify-center">
            <div className="relative">

              <div className="absolute -inset-10 bg-gradient-to-br from-purple-500 via-cyan-400 to-pink-500 rounded-full opacity-30 blur-[100px]"></div>

              <canvas
                ref={canvasRef}
                className="relative z-10 rounded-3xl border border-cyan-400/30 shadow-2xl max-w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
