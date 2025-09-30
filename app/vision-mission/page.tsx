'use client';

import Layout from '@/components/Layout';
import { Target, Eye, Sparkles, Globe, TrendingUp, Users } from 'lucide-react';

export default function VisionMission() {
  return (
    <Layout 
      title="Vision &" 
      subtitle="Mission"
      backgroundImage="url('https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop')"
    >
      <div className="space-y-12 lg:space-y-16">
        {/* Mission Section */}
        <div className="relative">
          <div className="absolute -inset-4 bg-gradient-to-r from-green-500/20 via-yellow-500/20 to-emerald-500/20 rounded-2xl blur-xl"></div>
          <div className="relative bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 p-8 lg:p-12">
            <div className="flex items-center space-x-4 mb-6 lg:mb-8">
              <div className="p-3 lg:p-4 bg-green-500/20 rounded-xl">
                <Target className="w-6 h-6 lg:w-8 lg:h-8 text-green-300" />
              </div>
              <h2 className="text-2xl lg:text-5xl font-bold text-white">Mission</h2>
            </div>
            
            <div className="space-y-4 lg:space-y-6 text-sm lg:text-xl text-white/95 leading-relaxed">
              <p>
                Our objective is to deliver/establish Africa's 1st bona-fide <span className="font-semibold text-green-200">sports business development Accelerator</span> with a Pan-African footprint, churning out top notch sports industry innovation to get us up to speed with Global standards. Kickstarting a sports business development revolution in Zimbabwe then onto Africa, developing & accelerating a myriad of high growth value streams for different stakeholders that include artists, athletes, teams, institutions among others by creating synergies within connected industries that offer value to sports development, the creative economy and administrative bodies among others by leveraging <span className="font-semibold text-yellow-200">analytics, open data development</span> to guide business/organizational processes to drive innovation and uptake of cutting edge solutions that enrich the sports development ecosystem in Zim and beyond.
              </p>
              <p>
                Enabling interface between Private and public players through collaboration aimed at Unlocking capital and growth finance backed by extensive data oriented design thinking processes across branding, marketing, fan engagement, etc with growth paths like robust content development, financial management, sponsorship dealflow etc.
              </p>
            </div>
          </div>
        </div>

        {/* Vision Section */}
        <div className="relative">
          <div className="absolute -inset-4 bg-gradient-to-r from-yellow-500/20 via-emerald-500/20 to-green-500/20 rounded-2xl blur-xl"></div>
          <div className="relative bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 p-8 lg:p-12">
            <div className="flex items-center space-x-4 mb-6 lg:mb-8">
              <div className="p-3 lg:p-4 bg-yellow-500/20 rounded-xl">
                <Eye className="w-6 h-6 lg:w-8 lg:h-8 text-yellow-300" />
              </div>
              <h2 className="text-2xl lg:text-5xl font-bold text-white">Vision</h2>
            </div>
            
            <div className="text-sm lg:text-xl text-white/95 leading-relaxed text-center max-w-4xl mx-auto">
              <p>
                To become a major contributor to Zimbabwean & more broadly, <span className="font-semibold text-emerald-200">African Sports Industry development</span>, helping build solid and expansive business processes & frameworks deployed via different value streams in Media, Marketing, Apparel, Design works, financial management & more. All work fostering collaboration with stakeholders working in Tandem in a highly deliberate framework including Governing bodies, development agencies, teams, creatives and athletes to harness broad & high growth monetary value which will contribute significantly to <span className="font-semibold text-yellow-200">local communities, GDP & the economy</span> at large.
              </p>
            </div>
          </div>
        </div>

        {/* Impact Areas */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          <div className="group bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 p-4 lg:p-6 transition-all duration-300 hover:bg-white/15 hover:scale-105 text-center">
            <div className="p-3 bg-green-500/20 rounded-lg inline-flex mb-4">
              <Globe className="w-5 h-5 lg:w-6 lg:h-6 text-green-300" />
            </div>
            <h3 className="text-base lg:text-lg font-semibold text-white mb-2">Pan-African Impact</h3>
            <p className="text-white/80 text-xs lg:text-sm">Building sports business infrastructure across the African continent.</p>
          </div>

          <div className="group bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 p-4 lg:p-6 transition-all duration-300 hover:bg-white/15 hover:scale-105 text-center">
            <div className="p-3 bg-yellow-500/20 rounded-lg inline-flex mb-4">
              <TrendingUp className="w-5 h-5 lg:w-6 lg:h-6 text-yellow-300" />
            </div>
            <h3 className="text-base lg:text-lg font-semibold text-white mb-2">Economic Growth</h3>
            <p className="text-white/80 text-xs lg:text-sm">Contributing significantly to GDP and local community development.</p>
          </div>

          <div className="group bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 p-4 lg:p-6 transition-all duration-300 hover:bg-white/15 hover:scale-105 text-center sm:col-span-2 lg:col-span-1">
            <div className="p-3 bg-emerald-500/20 rounded-lg inline-flex mb-4">
              <Users className="w-5 h-5 lg:w-6 lg:h-6 text-emerald-300" />
            </div>
            <h3 className="text-base lg:text-lg font-semibold text-white mb-2">Stakeholder Collaboration</h3>
            <p className="text-white/80 text-xs lg:text-sm">Fostering partnerships between athletes, teams, and governing bodies.</p>
          </div>
        </div>
      </div>
    </Layout>
  );
}