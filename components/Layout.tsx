'use client';

import type { ReactNode } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  Trophy,
  Target,
  Briefcase,
  Users,
  Eye,
  Sparkles
} from 'lucide-react';

const navigationItems = [
  { path: '/', label: 'Home', icon: Trophy },
  { path: '/focus-areas', label: 'Focus Areas', icon: Target },
  { path: '/services', label: 'Services', icon: Briefcase },
  { path: '/team', label: 'Team', icon: Users },
  { path: '/vision-mission', label: 'Vision & Mission', icon: Eye },
  { path: '/partnerships', label: 'Partnerships', icon: Users },
];
import Image from 'next/image';

interface LayoutProps {
  children: ReactNode;
  title: string;
  subtitle?: string;
  backgroundImage?: string;
}

export default function Layout({ children, title, subtitle, backgroundImage }: LayoutProps) {
  const pathname = usePathname();

  // Capsule nav sits below the logo; no mobile overlay menu needed

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

      {/* Sidebar + Content layout on desktop; stacked on mobile */}

      {/* Main Content */}
      <div className="relative z-10 pt-6 sm:pt-8">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-22 py-8 lg:py-12">
          <div className="flex flex-col lg:flex-row lg:items-start lg:gap-12">
            {/* Left sidebar: logo + vertical capsules */}
            <aside className="mb-8 lg:mb-0 lg:w-80 shrink-0">
              <div className="flex flex-col space-x-3">
                <div className="p-1 rounded-2xl ">
                  <div className="relative w-40 h-40 lg:w-48 lg:h-48 rounded-2xl overflow-hidden bg-transparent">
                    <Image
                      src="/images/sportstake30.png"
                      alt="SportsTake"
                      fill
                      className="object-contain"
                      sizes="(min-width:1024px) 6rem, 4rem"
                      priority
                    />
                  </div>
                </div>
                {/* <div>
                  <span className="text-white font-bold text-2xl lg:text-3xl leading-tight">Sportstake Labs</span>
                </div> */}
              </div>

              <nav className="mt-4 lg:mt-6">
                <ul className="flex flex-col gap-3 items-start">
                  {navigationItems.map((item) => {
                    const IconComponent = item.icon;
                    const isActive = pathname === item.path;
                    return (
                      <li key={item.path}>
                        <Link
                          href={item.path}
                          aria-current={isActive ? 'page' : undefined}
                          className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full border text-base font-medium transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent focus-visible:ring-white/40 ${isActive
                              ? 'border-white text-white bg-white/10'
                              : 'border-white/60 text-white/90 hover:bg-white/10 hover:border-white'
                            }`}
                        >
                          <IconComponent className="w-4 h-4" />
                          <span>{item.label}</span>
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </nav>
            </aside>

            {/* Right content area */}
            <section className="flex-1">
              {/* Page Header */}
              <div className="mb-8 lg:mb-12 space-y-4 lg:space-y-6 text-center lg:text-left">
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
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}