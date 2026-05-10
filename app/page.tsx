'use client';

import { useState } from 'react';

export default function Home() {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [messages, setMessages] = useState([
    { role: 'pengu', content: "Hey! I'm LostPengu, the self-coding penguin on Solana. How can I help you today?" }
  ]);
  const [input, setInput] = useState('');

  const sendMessage = () => {
    if (!input.trim()) return;

    setMessages(prev => [...prev, { role: 'user', content: input }]);

    const replies = [
      "Haha, great question! The colony is growing fast 🐧",
      "I'm still learning but I love talking about Solana and memes.",
      "Want me to generate a meme idea for you?",
      "LostPengu Token launch is coming soon... are you ready?",
      "Join our Telegram and X to stay in the colony!",
      "I'm coded with love by the community."
    ];

    setTimeout(() => {
      setMessages(prev => [...prev, { role: 'pengu', content: replies[Math.floor(Math.random() * replies.length)] }]);
    }, 700);

    setInput('');
  };

  return (
    <main className="min-h-screen bg-[#02040f] text-white overflow-hidden relative font-mono">
      
      {/* Matrix Rain */}
      <div className="absolute inset-0 z-0 opacity-30 pointer-events-none overflow-hidden">
        {Array.from({ length: 35 }).map((_, i) => (
          <div
            key={i}
            className="absolute text-emerald-400/70 text-xs whitespace-nowrap animate-fall"
            style={{
              left: `${Math.random() * 100}%`,
              animationDuration: `${Math.random() * 12 + 7}s`,
              animationDelay: `-${Math.random() * 20}s`,
            }}
          >
            {Array.from({ length: 40 }).map(() => String.fromCharCode(33 + Math.floor(Math.random() * 90))).join('')}
          </div>
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-12 min-h-screen flex flex-col lg:flex-row items-center gap-16">
        
        {/* Pengu Görseli */}
        <div className="flex-1 flex justify-center lg:justify-end">
          <div className="relative">
            <div className="absolute -inset-20 bg-gradient-to-br from-purple-500 via-cyan-400 to-pink-500 rounded-full opacity-40 blur-[120px]"></div>
            <img 
              src="/pengu.jpg" 
              alt="LostPengu" 
              className="w-[400px] lg:w-[520px] rounded-3xl shadow-2xl relative z-10 border border-cyan-400/30"
            />
          </div>
        </div>

        {/* Sağ Taraf */}
        <div className="flex-1 space-y-10">
          <div>
            <h1 className="text-7xl lg:text-8xl font-black tracking-tighter mb-3">
              LOST<span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-purple-400">PENGU</span>
            </h1>
            <p className="text-5xl text-cyan-400 font-light">AI AGENT</p>
          </div>

          <p className="text-xl text-gray-300 max-w-md">
            The first self-coding penguin on Solana.<br />
            Building the colony, one line at a time.
          </p>

          <div className="space-y-4">
            <a href="/meme-generator" className="block w-full py-6 bg-gradient-to-r from-purple-600 to-fuchsia-600 rounded-3xl text-center text-2xl font-semibold hover:scale-105 transition-all">
              Create Memes with Pengu
            </a>

            <button className="block w-full py-6 bg-gradient-to-r from-cyan-500 to-emerald-500 rounded-3xl text-center text-2xl font-semibold hover:scale-105 transition-all">
              LostPengu Token
            </button>

            <button 
              onClick={() => setIsChatOpen(true)}
              className="block w-full py-6 border-2 border-cyan-400/60 hover:bg-cyan-400/10 rounded-3xl text-center text-2xl font-semibold transition-all"
            >
              Talk to Pengu Agent
            </button>
          </div>
        </div>
      </div>

      {/* MINI CHAT WIDGET */}
      {isChatOpen && (
        <div className="fixed bottom-6 right-6 z-50 w-80 bg-zinc-950 border border-cyan-500/50 rounded-3xl shadow-2xl overflow-hidden">
          <div className="bg-gradient-to-r from-cyan-500 to-purple-500 p-4 flex items-center gap-3">
            <div className="text-3xl">🐧</div>
            <div className="flex-1">
              <p className="font-bold">LostPengu AI</p>
              <p className="text-xs opacity-90">Always Online • Self-Coding</p>
            </div>
            <button onClick={() => setIsChatOpen(false)} className="text-2xl">✕</button>
          </div>

          <div className="h-96 p-4 overflow-y-auto space-y-4 bg-black/60">
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[80%] px-4 py-3 rounded-2xl ${msg.role === 'user' ? 'bg-cyan-600' : 'bg-zinc-800'}`}>
                  {msg.content}
                </div>
              </div>
            ))}
          </div>

          <div className="p-4 border-t border-white/10 flex gap-2">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
              placeholder="Ask me anything..."
              className="flex-1 bg-zinc-900 border border-white/20 rounded-full px-5 py-3 focus:outline-none focus:border-cyan-400"
            />
            <button onClick={sendMessage} className="bg-cyan-500 hover:bg-cyan-600 px-6 rounded-full font-medium">Send</button>
          </div>
        </div>
      )}
    </main>
  );
}
