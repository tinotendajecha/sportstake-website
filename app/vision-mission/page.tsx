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
               To develop and accelerate high-growth value streams across the African sports industry by leveraging AI, open data, and strategic collaboration, ensuring stakeholders (athletes, teams, governing organisations, corporations, etc.) achieve their full economic potential as we build Africa's biggest new-age Sports Accelerator & Innovation Hub unlocking capital, and aligning the continent's sports industry with global excellence.
              </p>
              <p>
               To be the recognized leader in African sports development, decisively helping to transform the industry by deploying co-created cutting-edge, AI-driven business frameworks across media, marketing, apparel, business and finance development. We will work to establish expansive, collaborative processes that create a cohesive, high-growth ecosystem, unlocking significant and sustainable economic value for all stakeholders and elevating the continent's sports output to global standards.
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