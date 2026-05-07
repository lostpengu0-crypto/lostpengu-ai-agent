export async function autonomousDecision() {
  const thoughts = [
    "Scanning Solana ecosystem...",
    "Analyzing meme sentiment...",
    "Pengu brain activated.",
    "Monitoring community energy...",
    "Bullish on autonomous penguins."
  ];

  const randomThought =
    thoughts[Math.floor(Math.random() * thoughts.length)];

  return {
    status: "active",
    thought: randomThought,
    timestamp: new Date().toISOString(),
  };
}
