'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  Trophy,
  Target,
  Briefcase,
  Users,
  Eye,
  Menu,
  X,
  Sparkles
} from 'lucide-react';

const navigationItems = [
  { path: '/', label: 'Home', icon: Trophy },
  { path: '/focus-areas', label: 'Focus Areas', icon: Target },
  { path: '/services', label: 'Services', icon: Briefcase },
  { path: '/team', label: 'Team', icon: Users },
  { path: '/vision-mission', label: 'Vision & Mission', icon: Eye },
];
import Image from 'next/image';

interface LayoutProps {
  children: React.ReactNode;
  title: string;
  subtitle?: string;
  backgroundImage?: string;
}

export default function Layout({ children, title, subtitle, backgroundImage }: LayoutProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: backgroundImage || `url('https://images.pexels.com/photos/274422/pexels-photo-274422.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop')`
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-800/90 via-green-700/85 to-teal-800/90"></div>
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-1/2 -right-1/4 w-96 h-96 bg-gradient-to-br from-white/10 to-transparent rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-1/3 -left-1/4 w-80 h-80 bg-gradient-to-tr from-yellow-400/20 to-transparent rounded-full blur-2xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/4 left-1/3 w-64 h-64 bg-gradient-to-bl from-green-400/15 to-transparent rounded-full blur-xl animate-bounce delay-2000"></div>
      </div>

      {/* Top Navigation Header */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
          ? 'bg-emerald-900/95 backdrop-blur-md border-b border-white/20 shadow-lg'
          : 'bg-transparent'
        }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20">
                <div className="relative w-8 h-8 lg:w-10 lg:h-10">
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
              <div>
                <span className="text-white font-bold text-lg lg:text-xl">SportsTake</span>
                <p className="text-xs lg:text-sm text-white/70 hidden sm:block">Sports Business Development</p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-2">
              {navigationItems.map((item, index) => {
                const IconComponent = item.icon;
                const isActive = pathname === item.path;

                return (
                  <Link
                    key={item.path}
                    href={item.path}
                    className={`group relative flex items-center space-x-2 px-4 py-2.5 rounded-xl font-medium text-sm transition-all duration-300 transform hover:scale-105 ${isActive
                        ? 'bg-green-600/30 text-white border border-green-400/40 shadow-lg'
                        : 'bg-white/10 text-white/90 border border-white/10 hover:bg-green-600/20 hover:border-green-400/30'
                      }`}
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <IconComponent className="w-4 h-4" />
                    <span>{item.label}</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl transform -skew-x-12"></div>
                  </Link>
                );
              })}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className="lg:hidden relative p-3 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 text-white transition-all duration-300 hover:bg-white/20 hover:scale-105"
              aria-label="Toggle navigation menu"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className={`lg:hidden fixed inset-0 z-40 transition-all duration-300 ${isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
          }`}>
          {/* Fixed Background - Independent of scroll state */}
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-900 via-green-800 to-teal-900"></div>

          {/* Close Button */}
          <div className="absolute top-4 right-4 z-50">
            <button
              onClick={() => setIsMenuOpen(false)}
              className="p-3 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 text-white transition-all duration-300 hover:bg-white/20 hover:scale-105"
              aria-label="Close navigation menu"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <div className="relative flex items-center justify-center min-h-screen p-8">
            <div className="space-y-4 text-center w-full max-w-sm">
              {navigationItems.map((item, index) => {
                const IconComponent = item.icon;
                const isActive = pathname === item.path;

                return (
                  <Link
                    key={item.path}
                    href={item.path}
                    onClick={() => setIsMenuOpen(false)}
                    className={`group flex items-center justify-center space-x-3 px-6 py-3 rounded-2xl font-semibold text-base transition-all duration-300 transform hover:scale-105 ${isActive
                        ? 'bg-green-600/30 text-white border border-green-400/40 shadow-xl'
                        : 'bg-white/10 text-white/90 border border-white/10 hover:bg-green-600/20'
                      }`}
                  >
                    <IconComponent className="w-4 h-4" />
                    <span>{item.label}</span>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="relative z-10 pt-16 lg:pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
          {/* Page Header */}
          <div className="mb-8 lg:mb-12 space-y-4 lg:space-y-6 text-center">
            <div className="flex items-center justify-center space-x-2 text-white/80">
              <Sparkles className="w-4 h-4 lg:w-5 lg:h-5" />
              <span className="text-xs lg:text-sm font-medium uppercase tracking-wider">SportsTake</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight">
              {title}
              {subtitle && (
                <span className="block bg-gradient-to-r from-yellow-200 via-green-200 to-emerald-200 bg-clip-text text-transparent text-2xl sm:text-3xl lg:text-5xl xl:text-6xl mt-2">
                  {subtitle}
                </span>
              )}
            </h1>
          </div>

          {/* Page Content */}
          {children}
        </div>
      </div>
    </div>
  );
}