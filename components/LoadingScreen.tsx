'use client';

import { useEffect, useState } from 'react';
import { Trophy, Target, TrendingUp, Users } from 'lucide-react';

export default function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);

    const progressTimer = setInterval(() => {
      setProgress(prev => {
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
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-emerald-800 via-green-700 to-teal-800">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -right-1/4 w-96 h-96 bg-gradient-to-br from-white/20 to-transparent rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-1/3 -left-1/4 w-80 h-80 bg-gradient-to-tr from-yellow-400/30 to-transparent rounded-full blur-2xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 flex flex-col items-center space-y-8 px-4">
        {/* Logo */}
        <div className="relative group">
          <div className="p-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 transition-all duration-500 hover:bg-white/15 hover:scale-105">
            <Trophy className="w-16 h-16 text-white" />
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl transform -skew-x-12"></div>
        </div>

        {/* Brand Name */}
        <div className="text-center space-y-2">
          <h1 className="text-4xl md:text-5xl font-bold text-white">SportsTake</h1>
          <p className="text-lg text-white/80">Sports Business Development</p>
        </div>

        {/* Loading Animation */}
        <div className="flex space-x-4">
          <div className="w-3 h-3 bg-white/60 rounded-full animate-bounce"></div>
          <div className="w-3 h-3 bg-white/60 rounded-full animate-bounce delay-100"></div>
          <div className="w-3 h-3 bg-white/60 rounded-full animate-bounce delay-200"></div>
        </div>

        {/* Progress Bar */}
        <div className="w-64 h-2 bg-white/20 rounded-full overflow-hidden">
          <div 
            className="h-full bg-gradient-to-r from-green-400 to-yellow-400 rounded-full transition-all duration-300 ease-out"
            style={{ width: `${progress}%` }}
          ></div>
        </div>

        {/* Floating Icons */}
        <div className="absolute top-20 left-10 animate-float">
          <Target className="w-6 h-6 text-white/40" />
        </div>
        <div className="absolute top-32 right-16 animate-float delay-500">
          <TrendingUp className="w-8 h-8 text-white/30" />
        </div>
        <div className="absolute bottom-24 left-20 animate-float delay-1000">
          <Users className="w-5 h-5 text-white/50" />
        </div>
      </div>
    </div>
  );
}