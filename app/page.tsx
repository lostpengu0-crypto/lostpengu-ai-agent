'use client';

import { useEffect, useState } from 'react';

type Snowflake = {
  id: number;
  left: number;
  delay: number;
  duration: number;
  text: string;
};

export default function About() {
  const [snowflakes, setSnowflakes] = useState<Snowflake[]>([]);

  useEffect(() => {
    const flakes: Snowflake[] = Array.from({ length: 80 }).map((_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * -25,
      duration: Math.random() * 12 + 15,
      text: Array.from({ length: 15 }).map(() => 
        String.fromCharCode(33 + Math.floor(Math.random() * 94))
      ).join('')
    }));
    setSnowflakes(flakes);
  }, []);

  return (
    <main className="min-h-screen bg-[#05060f] text-white overflow-hidden relative">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/40 to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 py-24">
        <h1 className="text-6xl font-black text-center mb-12">About LostPengu</h1>
        
        <div className="prose prose-invert max-w-none text-lg leading-relaxed">
          <p className="text-cyan-400 text-xl mb-8 text-center">
            The first self-coding penguin on Solana.
          </p>
          
          <p>
            LostPengu is an autonomous AI agent that writes its own code, 
            generates memes, and builds its colony on the Solana blockchain.
          </p>
        </div>
      </div>

      {/* Snowflakes */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden opacity-30">
        {snowflakes.map((flake) => (
          <div
            key={flake.id}
            className="absolute text-purple-400/70 text-xs font-mono tracking-widest animate-fall"
            style={{
              left: `${flake.left}%`,
              top: '-60px',
              animationDelay: `${flake.delay}s`,
              animationDuration: `${flake.duration}s`,
            }}
          >
            {flake.text}
          </div>
        ))}
      </div>
    </main>
  );
}
