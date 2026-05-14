'use client';

import { useEffect, useState } from 'react';

export default function GamePage() {
  const [playerX, setPlayerX] = useState(180);
  const [coins, setCoins] = useState([{ x: 100, y: 0 }]);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') {
        setPlayerX((prev) => Math.max(prev - 25, 0));
      }

      if (e.key === 'ArrowRight') {
        setPlayerX((prev) => Math.min(prev + 25, 360));
      }
    };

    window.addEventListener('keydown', handleKey);

    return () => {
      window.removeEventListener('keydown', handleKey);
    };
  }, []);

  useEffect(() => {
    if (gameOver) return;

    const interval = setInterval(() => {
      setCoins((prev) =>
        prev
          .map((coin) => ({
            ...coin,
            y: coin.y + 12,
          }))
          .filter((coin) => {
            const hit =
              coin.y > 500 &&
              coin.x > playerX - 40 &&
              coin.x < playerX + 40;

            if (hit) {
              setScore((s) => s + 1);
              return false;
            }

            if (coin.y > 620) {
              setGameOver(true);
            }

            return coin.y < 650;
          })
      );

      if (Math.random() > 0.7) {
        setCoins((prev) => [
          ...prev,
          {
            x: Math.random() * 360,
            y: 0,
          },
        ]);
      }
    }, 120);

    return () => clearInterval(interval);
  }, [playerX, gameOver]);

  const restartGame = () => {
    setCoins([{ x: 100, y: 0 }]);
    setScore(0);
    setGameOver(false);
    setPlayerX(180);
  };

  return (
    <main className="min-h-screen bg-[#02040f] text-white flex flex-col items-center justify-center font-mono overflow-hidden">

      <a
        href="/"
        className="absolute top-6 left-6 text-cyan-300 hover:text-cyan-200"
      >
        ← Back
      </a>

      <h1 className="text-5xl font-black mb-2">
        LOST<span className="text-cyan-400">PENGU</span>
      </h1>

      <p className="text-cyan-300 mb-6">
        Collect Solana coins with Pengu 🐧
      </p>

      <div className="text-2xl mb-4">
        Score: {score}
      </div>

      <div className="relative w-[420px] h-[620px] bg-black border-2 border-cyan-400 rounded-3xl overflow-hidden shadow-2xl">

        {/* Falling Coins */}
        {coins.map((coin, index) => (
          <div
            key={index}
            className="absolute text-3xl"
            style={{
              left: `${coin.x}px`,
              top: `${coin.y}px`,
            }}
          >
            🟣
          </div>
        ))}

        {/* Pengu */}
        <div
          className="absolute bottom-4 text-6xl transition-all"
          style={{
            left: `${playerX}px`,
          }}
        >
          🐧
        </div>

        {/* Game Over */}
        {gameOver && (
          <div className="absolute inset-0 bg-black/80 flex flex-col items-center justify-center">
            <h2 className="text-5xl font-black text-red-500 mb-4">
              GAME OVER
            </h2>

            <p className="text-2xl mb-6">
              Final Score: {score}
            </p>

            <button
              onClick={restartGame}
              className="px-8 py-4 rounded-full bg-cyan-500 hover:bg-cyan-600 text-xl font-bold"
            >
              Play Again
            </button>
          </div>
        )}
      </div>

      <p className="mt-6 text-gray-400">
        Use ← → arrow keys to move
      </p>
    </main>
  );
}
