'use client';

import type { ReactNode } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import {
  Trophy,
  Target,
  Briefcase,
  Users,
  Eye,
  Sparkles,
  LogIn,
  User,
  LogOut,
  Handshake
} from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';
import Image from 'next/image';
import { useState } from 'react';

const navigationItems = [
  { path: '/', label: 'Home', icon: Trophy },
  { path: '/focus-areas', label: 'Focus Areas', icon: Target },
  { path: '/services', label: 'Services', icon: Briefcase },
  { path: '/team', label: 'Team', icon: Users },
  { path: '/vision-mission', label: 'Vision & Mission', icon: Eye },
  { path: '/partnerships', label: 'Partnerships', icon: Handshake },
];

interface LayoutProps {
  children: ReactNode;
  title: string;
  subtitle?: string;
  backgroundImage?: string;
}

export default function Layout({ children, title, subtitle, backgroundImage }: LayoutProps) {
  const pathname = usePathname();
  const router = useRouter();
  const { user, logout, isAuthenticated } = useAuth();
  const [showUserMenu, setShowUserMenu] = useState(false);

  // Handle logout
  const handleLogout = () => {
    logout();
    setShowUserMenu(false);
    router.push('/');
  };

  // Capsule nav sits below the logo; no mobile overlay menu needed
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Top Navigation Bar - Auth Status */}
      <nav className="relative z-20 w-full">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-22 pt-4 sm:pt-6">
          <div className="flex justify-end">
            <div className="flex items-center gap-3">
              {isAuthenticated && user ? (
                // User is logged in - show email/phone with dropdown menu (visible on all pages)
                <div className="relative">
                  <button
                    onClick={() => setShowUserMenu(!showUserMenu)}
                    className="inline-flex items-center gap-2 px-4 py-2 bg-black/60 backdrop-blur-sm text-cyan-200 border border-cyan-400/40 rounded-full font-medium hover:bg-cyan-500/30 hover:text-yellow-300 hover:border-yellow-400/60 transition-all duration-200"
                  >
                    <User className="w-4 h-4" />
                    <span className="text-sm sm:text-base">{user.email || user.phone}</span>
                  </button>
                  
                  {/* Dropdown menu */}
                  {showUserMenu && (
                    <>
                      <div 
                        className="fixed inset-0 z-10" 
                        onClick={() => setShowUserMenu(false)}
                      />
                      <div className="absolute right-0 mt-2 w-48 bg-black/90 backdrop-blur-md border border-cyan-400/40 rounded-xl shadow-xl z-20 overflow-hidden">
                        <button
                          onClick={handleLogout}
                          className="w-full px-4 py-3 text-left text-sm text-cyan-200 hover:bg-red-500/20 hover:text-red-300 transition-colors flex items-center gap-2"
                        >
                          <LogOut className="w-4 h-4" />
                          <span>Logout</span>
                        </button>
                      </div>
                    </>
                  )}
                </div>
              ) : (
                // User is not logged in - show Login and Sign Up links only on services page
                pathname === '/services' && (
                  <div className="flex items-center gap-3">
                    <Link
                      href="/login"
                      className="inline-flex items-center gap-2 px-4 py-2 bg-black/60 backdrop-blur-sm text-cyan-200 border border-cyan-400/40 rounded-full font-medium hover:bg-cyan-500/30 hover:text-yellow-300 hover:border-yellow-400/60 transition-all duration-200 text-sm sm:text-base"
                    >
                      <LogIn className="w-4 h-4" />
                      <span>Login</span>
                    </Link>
                    <Link
                      href="/signup"
                      className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#FF5E00] to-[#FF5E00]/80 text-white border border-yellow-400/40 rounded-full font-medium hover:from-[#FF5E00]/90 hover:to-[#FF5E00]/70 hover:shadow-lg hover:shadow-orange-400/30 transition-all duration-200 text-sm sm:text-base"
                    >
                      <span>Sign Up</span>
                    </Link>
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </nav>

      {/* Background Image */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: backgroundImage || `url('https://images.pexels.com/photos/274422/pexels-photo-274422.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop')`
          }}
        ></div>
        <div className="absolute inset-0 bg-[linear-gradient(135deg,hsl(var(--background))_0%,hsl(var(--card))_60%)]/90"></div>
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-1/2 -right-1/4 w-96 h-96 bg-gradient-to-br from-primary/10 to-transparent rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-1/3 -left-1/4 w-80 h-80 bg-gradient-to-tr from-accent/20 to-transparent rounded-full blur-2xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/4 left-1/3 w-64 h-64 bg-gradient-to-bl from-secondary/15 to-transparent rounded-full blur-xl animate-bounce delay-2000"></div>
      </div>

      {/* Sidebar + Content layout on desktop; stacked on mobile */}

      {/* Main Content */}
      <div className="relative z-10 pt-6 sm:pt-8">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-22 py-8 lg:py-12">
          <div className="flex flex-col lg:flex-row lg:items-start lg:gap-12">
            {/* Left sidebar: logo + vertical capsules */}
            <aside className="mb-6 lg:mb-0 w-full max-w-xs lg:max-w-none lg:w-80 shrink-0">
              <div className="rounded-2xl bg-black/40 backdrop-blur-md shadow-xl pb-4 pt-4 px-2 sm:px-4 flex flex-col items-center space-y-3 sm:space-y-4">
                {/* Logo & Name */}
                <div className="relative w-24 h-24 sm:w-36 sm:h-36 lg:w-36 lg:h-36 rounded-2xl overflow-hidden 
      shadow-md flex items-center justify-center">
                  <Image
                    src="/images/sportstake30.png"
                    alt="SportsTake"
                    fill
                    className="object-contain"
                    sizes="(max-width:640px) 6rem, (min-width:1024px) 6rem, 4rem"
                    priority
                  />
                </div>
                <span className="mt-1 sm:mt-2 font-extrabold text-xl sm:text-2xl lg:text-3xl 
      bg-clip-text text-transparent 
      bg-gradient-to-r from-cyan-300 via-yellow-400 to-orange-400 
      drop-shadow text-center tracking-tight">
                  Sportstake Labs
                </span>

                {/* Navigation - Capsule Buttons */}
                <nav className="mt-3 sm:mt-5 w-full">
                  <ul className="flex flex-col gap-2 sm:gap-4 items-start w-full ">
                    {navigationItems.map((item) => {
                      const IconComponent = item.icon;
                      const isActive = pathname === item.path;
                      return (
                        <li key={item.path} className="">
                          <Link
                            href={item.path}
                            aria-current={isActive ? 'page' : undefined}
                            className={`
                  inline-flex items-center gap-2 sm:gap-3 px-4 sm:px-6 py-2 sm:py-3 w-full
                  font-semibold text-base sm:text-lg
                  transition-all duration-200
                  ${isActive
                                ? 'rounded-full bg-gradient-to-r from-cyan-200/40 via-cyan-100/30 to-orange-100/20 text-black border border-yellow-200 shadow'
                                : 'rounded-lg bg-transparent text-cyan-200 hover:text-yellow-300 hover:bg-cyan-500/10'
                              }`
                            }
                          >
                            <IconComponent className={`w-5 h-5 sm:w-6 sm:h-6 ${isActive ? 'text-yellow-400/90' : 'text-cyan-300'}`} />
                            <span>{item.label}</span>
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </nav>
              </div>
            </aside>

            {/* Right content area */}
            <section className="flex-1">
              {/* Page Header */}
              <div className="mb-8 lg:mb-12 space-y-4 lg:space-y-6 text-center lg:text-left">
                <h1
                  className="text-3xl sm:text-4xl lg:text-6xl xl:text-7xl font-bold leading-tight"
                  style={{
                    color: '#00d7ef', // vivid cyan
                    textShadow: '0 2px 12px rgba(0,0,0,0.7), 0 1px 0 rgba(0,0,0,0.9)',
                    transition: 'color 0.2s'
                  }}
                >
                  {title}
                  {subtitle && (
                    <span
                      className="block mt-2"
                      style={{
                        color: '#ffd500', // bright yellow for contrast
                        textShadow: '0 2px 8px rgba(0,0,0,0.6)',
                        fontWeight: 600
                      }}
                    >
                      {subtitle}
                    </span>
                  )}
                </h1>
              </div>

              {/* Page Content */}
              {children}
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}