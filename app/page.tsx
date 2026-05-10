'use client';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#05060f] text-white overflow-hidden relative">
      {/* Kuzey Işıkları */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/40 to-transparent"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,#2233ee_10%,transparent_50%)] opacity-40 animate-pulse"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,#c026d3_20%,transparent_60%)] opacity-30 animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-20 min-h-screen flex items-center">
        <div className="grid md:grid-cols-2 gap-16 items-center w-full">
          {/* Sol Taraf İçerik */}
          {/* ... buraya kendi içeriklerin gelecek */}
        </div>
      </div>
    </main>
  );
}
