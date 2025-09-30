'use client';

import Layout from '@/components/Layout';
import Link from 'next/link';
import { ArrowRight, Users, Trophy, ChartBar as BarChart3, Zap } from 'lucide-react';

export default function Home() {
  return (
    <Layout 
      title="Welcome to" 
      subtitle="SportsTake"
      backgroundImage="url('/images/sportstake5.jpg')"
    >
      <div className="space-y-8 lg:space-y-12">
        {/* Main Content */}
        <div className="relative">
          <div className="absolute -inset-4 bg-gradient-to-r from-green-500/20 via-yellow-500/20 to-emerald-500/20 rounded-2xl blur-xl"></div>
          <div className="relative bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 p-8 lg:p-12">
            <div className="space-y-6 lg:space-y-8">
              <p className="text-base lg:text-xl xl:text-2xl text-white/95 leading-relaxed">
                We are a <span className="font-semibold text-green-200">sports business development</span>, 
                brand strategy, athlete management, and data analytics consulting firm built to help 
                contribute to the sports sector's development.
              </p>
              <p className="text-base lg:text-xl xl:text-2xl text-white/95 leading-relaxed">
                We bring talent, expertise, and skills that can contribute towards the development of 
                the sports economy and market by unlocking value for stakeholders through 
                <span className="font-semibold text-yellow-200"> data-oriented business</span> and 
                industry development processes that will deliver robust value for athletes, teams/clubs, 
                and governing organizations.
              </p>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          <div className="group bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 p-4 lg:p-6 transition-all duration-300 hover:bg-white/15 hover:scale-105">
            <div className="flex items-center space-x-4 mb-4">
              <div className="p-2 lg:p-3 bg-green-500/20 rounded-lg">
                <BarChart3 className="w-5 h-5 lg:w-6 lg:h-6 text-green-300" />
              </div>
              <h3 className="text-base lg:text-lg font-semibold text-white">Data Analytics</h3>
            </div>
            <p className="text-sm lg:text-base text-white/80">Advanced sports analytics and data development for informed decision-making.</p>
          </div>

          <div className="group bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 p-4 lg:p-6 transition-all duration-300 hover:bg-white/15 hover:scale-105">
            <div className="flex items-center space-x-4 mb-4">
              <div className="p-2 lg:p-3 bg-yellow-500/20 rounded-lg">
                <Trophy className="w-5 h-5 lg:w-6 lg:h-6 text-yellow-300" />
              </div>
              <h3 className="text-base lg:text-lg font-semibold text-white">Athlete Management</h3>
            </div>
            <p className="text-sm lg:text-base text-white/80">Comprehensive athlete career development and talent management services.</p>
          </div>

          <div className="group bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 p-4 lg:p-6 transition-all duration-300 hover:bg-white/15 hover:scale-105 sm:col-span-2 lg:col-span-1">
            <div className="flex items-center space-x-4 mb-4">
              <div className="p-2 lg:p-3 bg-emerald-500/20 rounded-lg">
                <Zap className="w-5 h-5 lg:w-6 lg:h-6 text-emerald-300" />
              </div>
              <h3 className="text-base lg:text-lg font-semibold text-white">Business Strategy</h3>
            </div>
            <p className="text-sm lg:text-base text-white/80">Strategic business development and brand strategy consultation.</p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="flex flex-col sm:flex-row gap-4 lg:gap-6 justify-center">
          <Link
            href="/services"
            className="group relative px-6 lg:px-8 py-3 lg:py-4 bg-green-600/30 backdrop-blur-sm text-white font-semibold rounded-xl border border-green-400/40 transition-all duration-300 hover:bg-green-600/40 hover:scale-105 hover:shadow-xl text-center"
          >
            <span className="relative z-10 flex items-center justify-center space-x-2 text-sm lg:text-base">
              <span>Explore Our Services</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl transform -skew-x-12"></div>
          </Link>
          <Link
            href="/team"
            className="group px-6 lg:px-8 py-3 lg:py-4 bg-transparent text-white font-semibold rounded-xl border-2 border-white/40 transition-all duration-300 hover:bg-white/10 hover:scale-105 hover:border-white/60 text-center"
          >
            <span className="flex items-center justify-center space-x-2 text-sm lg:text-base">
              <Users className="w-4 h-4" />
              <span>Meet Our Team</span>
            </span>
          </Link>
        </div>
      </div>
    </Layout>
  );
}