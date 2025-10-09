'use client';

import { useEffect, useRef, useState } from 'react';
import Layout from '@/components/Layout';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const placeholders = Array.from({ length: 12 }).map((_, i) => ({
  id: i,
  name: `Partner ${i + 1}`,
}));

export default function PartnershipsPage() {
  const [index, setIndex] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const visible = 5; // items visible on desktop

  useEffect(() => {
    startAuto();
    return stopAuto;
  }, []);

  const startAuto = () => {
    stopAuto();
    intervalRef.current = setInterval(() => {
      setIndex((prev) => (prev + 1) % placeholders.length);
    }, 3000);
  };

  const stopAuto = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
  };

  const prev = () => setIndex((prev) => (prev - 1 + placeholders.length) % placeholders.length);
  const next = () => setIndex((prev) => (prev + 1) % placeholders.length);

  // Compute the window of items to show (infinite loop style)
  const getVisibleItems = () => {
    const items = [] as { id: number; name: string }[];
    for (let i = 0; i < visible; i++) {
      items.push(placeholders[(index + i) % placeholders.length]);
    }
    return items;
  };

  return (
    <Layout
      title="Our"
      subtitle="Partnerships"
      backgroundImage="url('https://images.pexels.com/photos/47730/the-ball-stadion-football-the-pitch-47730.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop')"
    >
      <div className="space-y-10 lg:space-y-16">
        {/* Carousel */}
        <div className="relative" onMouseEnter={stopAuto} onMouseLeave={startAuto}>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl lg:text-4xl font-bold text-white">Our Partners</h2>
            <div className="hidden sm:flex gap-2">
              <button onClick={prev} className="p-2 rounded-full bg-white/10 border border-white/20 text-white hover:bg-white/20 transition-colors">
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button onClick={next} className="p-2 rounded-full bg-white/10 border border-white/20 text-white hover:bg-white/20 transition-colors">
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          <div className="overflow-hidden">
            <div 
              className="flex gap-4 transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${index * (100 / visible)}%)` }}
            >
              {placeholders.map((p) => (
                <div
                  key={p.id}
                  className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/5"
                >
                  <div className="aspect-[4/3] rounded-xl border border-white/20 bg-white/5 backdrop-blur-sm flex items-center justify-center text-white/80 text-sm lg:text-base">
                    {/* Placeholder logo box */}
                    <div className="w-20 h-12 lg:w-28 lg:h-16 rounded-md bg-gradient-to-br from-white/60 to-white/30 flex items-center justify-center text-black/70 font-semibold">
                      Logo
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile controls */}
          <div className="mt-4 sm:hidden flex justify-center gap-3">
            <button onClick={prev} className="p-2 rounded-full bg-white/10 border border-white/20 text-white hover:bg-white/20 transition-colors">
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button onClick={next} className="p-2 rounded-full bg-white/10 border border-white/20 text-white hover:bg-white/20 transition-colors">
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Placeholder copy */}
        <p className="text-white/85 text-base lg:text-lg max-w-3xl">
          We collaborate with organizations across the sports ecosystem. This section will showcase partner logos in an interactive carousel. Placeholders are shown for now while assets are prepared.
        </p>
      </div>
    </Layout>
  );
}


