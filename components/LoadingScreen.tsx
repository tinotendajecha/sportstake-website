'use client';

import { useEffect, useState } from 'react';
// import { Football, Whistle } from 'lucide-react'; // example icons for football and whistle
import Image from 'next/image';
// import { mdiFootball, mdiWhistle } from '@mdi/js';
import { FaFootballBall } from 'react-icons/fa';
import { GiWhistle } from 'react-icons/gi';

export default function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2500);

    const progressTimer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressTimer);
          return 100;
        }
        return prev + 2;
      });
    }, 50);

    return () => {
      clearTimeout(timer);
      clearInterval(progressTimer);
    };
  }, []);

  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black">
      {/* Gradient Glow Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-600 via-black to-orange-900 opacity-90"></div>

      {/* Pulsing Glow Circles */}
      <div className="absolute top-10 left-10 w-60 h-60 bg-cyan-500 rounded-full opacity-20 animate-pulse blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-56 h-56 bg-orange-600 rounded-full opacity-25 animate-pulse animate-delay-700 blur-2xl"></div>

      <div className="relative z-10 flex flex-col items-center space-y-8 px-4">
        {/* Logo */}
        <div className="relative group">
          <div className="p-2 bg-black/50 backdrop-blur-sm rounded-lg border border-cyan-500">
            <div className="relative w-16 h-16 lg:w-22 lg:h-22">
              <Image
                src="/images/sportstake22.png"
                alt="SportsTake"
                fill
                className="object-contain"
                sizes="(min-width:1024px) 2.5rem, 2rem"
                priority
              />
            </div>
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent opacity-0 group-hover:opacity-80 transition-opacity duration-500 rounded-2xl transform -skew-x-12"></div>
        </div>

        {/* Brand Name */}
        <div className="text-center space-y-2">
          <h1 className="text-4xl md:text-5xl font-bold text-cyan-400">SportsTake</h1>
          <p className="text-lg text-yellow-400/80 font-semibold">Sports Business Development</p>
        </div>

        {/* Animated Loading Icons */}
        <div className="flex space-x-6 text-neon-orange">
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              className={`transform transition-transform duration-700 ease-in-out animate-loadingBounce delay-${i * 300}`}
              style={{ color: i % 2 === 0 ? '#FF5E00' : '#FFD500' }}
            >
              {i % 2 === 0 ? <FaFootballBall size={24} color="#FF5E00" />: <GiWhistle size={24} color="#FFD500" />}
            </div>
          ))}
        </div>

        {/* Progress Bar */}
        <div className="w-72 h-3 bg-cyan-900 rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-cyan-400 via-yellow-400 to-orange-500 rounded-full transition-all duration-300 ease-out"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>

      <style jsx>{`
        @keyframes loadingBounce {
          0%, 100% { transform: translateY(0) scale(1); opacity: 1; }
          50% { transform: translateY(-20%) scale(1.2); opacity: 0.7; }
        }
        .animate-loadingBounce {
          animation: loadingBounce 1.5s infinite;
        }
        .delay-0 {
          animation-delay: 0s;
        }
        .delay-300 {
          animation-delay: 0.3s;
        }
        .delay-600 {
          animation-delay: 0.6s;
        }
      `}</style>
    </div>
  );
}
