'use client';

import { useState } from 'react';

export default function Home() {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [messages, setMessages] = useState([
    { role: 'pengu', content: "Hey there! I'm LostPengu, the first self-coding penguin on Solana 🐧 What do you want to talk about?" }
  ]);
  const [input, setInput] = useState('');

  const sendMessage = () => {
    if (!input.trim()) return;

    setMessages(prev => [...prev, { role: 'user', content: input }]);

    const penguReplies = [
      "Haha, nice question! The colony is getting stronger every day.",
      "I'm a self-coding penguin, I learn and improve myself automatically.",
      "Solana is super fast, just like my meme generation 🔥",
      "Want me to suggest a meme idea for you?",
      "LostPengu Token launch is approaching... are you in the colony?",
      "Join our Telegram and X to stay updated!",
      "I'm coded with love by the community 🐧"
    ];

    setTimeout(() => {
      const reply = penguReplies[Math.floor(Math.random() * penguReplies.length)];
      setMessages(prev => [...prev, { role: 'pengu', content: reply }]);
    }, 800);

    setInput('');
  };

  return (
    <main className="min-h-screen bg-[#05060f] text-white overflow-hidden relative">
      
      {/* Background Effects */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/40 to-transparent"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,#22d3ee_10%,transparent_50%)] opacity-40 animate-pulse"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,#c026d3_20%,transparent_60%)] opacity-30 animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-20 min-h-screen flex items-center">
        <div className="grid md:grid-cols-2 gap-16 items-center w-full">
          
          {/* Video */}
          <div className="flex justify-center md:justify-start">
            <div className="relative group">
              <div className="absolute -inset-20 bg-gradient-to-br from-purple-500 via-fuchsia-500 to-cyan-400 rounded-full opacity-25 blur-3xl group-hover:opacity-50 transition-all duration-1000"></div>
              <video 
                src="/lostpengu00.mp4" 
                autoPlay 
                loop 
                muted 
                playsInline
                className="w-[360px] md:w-[480px] rounded-3xl shadow-2xl relative z-10"
              />
            </div>
          </div>

          {/* Right Content */}
          <div className="flex flex-col gap-5">
            <h1 className="text-6xl md:text-7xl font-black tracking-tighter mb-2 text-center md:text-left">
              LOST<span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-cyan-300 to-pink-400">PENGU</span>
            </h1>
            
            <p className="text-4xl font-light text-cyan-400 mb-10 text-center md:text-left">AI AGENT</p>

            <div className="flex flex-col gap-4">
              <a href="/meme-generator" className="py-7 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-3xl text-xl font-semibold hover:scale-105 transition-all text-center">
                Create Memes with Pengu
              </a>

              <button className="py-7 bg-gradient-to-r from-cyan-500 to-emerald-500 rounded-3xl text-xl font-semibold hover:scale-105 active:scale-95 transition-all">
                LostPengu Token
              </button>

              <button className="py-7 border border-white/30 hover:bg-white/5 rounded-3xl text-xl font-semibold transition-all">
                Talk to Pengu Agent
              </button>
            </div>

            <div className="flex gap-4 mt-6">
              <a href="https://x.com/lostpengu0" target="_blank" rel="noopener noreferrer" className="flex-1 py-6 border border-white/30 hover:bg-white/5 rounded-3xl text-center transition-all">
                🐦 Follow on X
              </a>
              <a href="https://t.me/LostPengu0" target="_blank" rel="noopener noreferrer" className="flex-1 py-6 border border-white/30 hover:bg-white/5 rounded-3xl text-center transition-all">
                📱 Join Telegram
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* MINI PENGU CHAT - SAĞ ALT KÖŞE */}
      <div className="fixed bottom-6 right-6 z-50">
        <button
          onClick={() => setIsChatOpen(!isChatOpen)}
          className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-full flex items-center justify-center text-4xl shadow-2xl hover:scale-110 active:scale-95 border-4 border-[#05060f] transition-all"
        >
          🐧
        </button>

        {isChatOpen && (
          <div className="absolute bottom-20 right-0 w-80 bg-zinc-950 border border-cyan-500/50 rounded-3xl shadow-2xl overflow-hidden">
            <div className="bg-gradient-to-r from-cyan-500 to-purple-500 p-4 flex items-center gap-3">
              <div className="text-3xl">🐧</div>
              <div className="flex-1">
                <p className="font-bold">LostPengu AI</p>
                <p className="text-xs opacity-90">Self-Coding Penguin • Always Online</p>
              </div>
              <button onClick={() => setIsChatOpen(false)} className="text-2xl leading-none">×</button>
            </div>

            <div className="h-96 p-4 overflow-y-auto space-y-4 bg-black/60">
              {messages.map((msg, i) => (
                <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[80%] px-4 py-3 rounded-2xl text-sm ${msg.role === 'user' ? 'bg-cyan-600' : 'bg-zinc-800'}`}>
                    {msg.content}
                  </div>
                </div>
              ))}
            </div>

            <div className="p-4 border-t border-white/10 flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
                placeholder="Ask Pengu anything..."
                className="flex-1 bg-zinc-900 border border-white/20 rounded-full px-5 py-3 text-sm focus:outline-none focus:border-cyan-400"
              />
              <button 
                onClick={sendMessage}
                className="bg-cyan-500 hover:bg-cyan-600 px-6 rounded-full font-medium"
              >
                Send
              </button>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
