'use client';

import { useEffect, useRef, useState } from 'react';

type Item = {
  id: number;
  x: number;
  y: number;
  type: 'coin' | 'ice';
};

export default function GamePage() {
  const gameRef = useRef<HTMLDivElement | null>(null);

  const [playerX, setPlayerX] = useState(180);
  const [items, setItems] = useState<Item[]>([]);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);

  const movePengu = (clientX: number) => {
    const game = gameRef.current;
    if (!game) return;

    const rect = game.getBoundingClientRect();
    const x = clientX - rect.left;

    setPlayerX(Math.max(0, Math.min(x - 28, rect.width - 60)));
  };

  useEffect(() => {
    if (gameOver) return;

    const speed = Math.min(5 + Math.floor(score / 8), 10);

    const interval = setInterval(() => {
      setItems((prev) => {
        const movedItems = prev
          .map((item) => ({
            ...item,
            y: item.y + speed,
          }))
          .filter((item) => {
            const isNearPengu =
              item.y > 500 &&
              item.y < 590 &&
              item.x > playerX - 45 &&
              item.x < playerX + 55;

            if (isNearPengu && item.type === 'coin') {
              setScore((s) => s + 1);
              return false;
            }

            if (isNearPengu && item.type === 'ice') {
              setGameOver(true);
              return false;
            }

            return item.y < 650;
          });

        if (Math.random() > 0.88) {
          movedItems.push({
            id: Date.now() + Math.random(),
            x: Math.random() * 360,
            y: -20,
            type: Math.random() > 0.28 ? 'coin' : 'ice',
          });
        }

        return movedItems;
      });
    }, 90);

    return () => clearInterval(interval);
  }, [playerX, score, gameOver]);

  const restartGame = () => {
    setItems([]);
    setScore(0);
    setGameOver(false);
    setPlayerX(180);
  };

  return (
    <main className="min-h-screen bg-[#02040f] text-white flex flex-col items-center justify-center font-mono overflow-hidden px-4">

      <a
        href="/"
        className="absolute top-6 left-6 text-cyan-300 hover:text-cyan-200"
      >
        ← Back
      </a>

      <h1 className="text-4xl sm:text-5xl font-black mb-2 text-center">
        LOST<span className="text-cyan-400">PENGU</span>
      </h1>

      <p className="text-cyan-300 mb-3 text-center">
        Collect Solana coins. Avoid ice cubes.
      </p>

      <div className="text-2xl mb-4">
        Score: {score}
      </div>

      <div
        ref={gameRef}
        onMouseMove={(e) => movePengu(e.clientX)}
        onTouchMove={(e) => movePengu(e.touches[0].clientX)}
        className="relative w-full max-w-[420px] h-[620px] bg-black border-2 border-cyan-400 rounded-3xl overflow-hidden shadow-2xl touch-none select-none"
      >

        {items.map((item) => (
          <div
            key={item.id}
            className="absolute text-3xl"
            style={{
              left: `${item.x}px`,
              top: `${item.y}px`,
            }}
          >
            {item.type === 'coin' ? '🟣' : '🧊'}
          </div>
        ))}

        <div
          className="absolute bottom-4 text-6xl transition-all"
          style={{
            left: `${playerX}px`,
          }}
        >
          🐧
        </div>

        {gameOver && (
          <div className="absolute inset-0 bg-black/85 flex flex-col items-center justify-center">
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

      <p className="mt-6 text-gray-400 text-center">
        Move with mouse or swipe with your finger
      </p>
    </main>
  );
}
