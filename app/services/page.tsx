'use client';

import Layout from '@/components/Layout';
import {
  ChartBar as BarChart3,
  Building2,
  Users,
  Target,
  ArrowRight,
  BriefcaseBusiness,
  Megaphone,
  Trophy,
} from 'lucide-react';

import Image from 'next/image';

const services = [
  {
    icon: BarChart3,
    imgSrc: '/images/sportstake32.png',
    title: 'Data-Oriented Industry Mapping',
    description:
      'Market intelligence surveys for data rich outputs, research and development on policies, growth frameworks',
    color: 'from-green-500 to-emerald-500',
  },
  {
    imgSrc: '/images/sportstake34.png',
    icon: Building2,
    title: 'Business Model Development',
    description:
      'Pitch deck development, investor readiness scope of works, digital and organizational growth strategy development',
    color: 'from-yellow-500 to-orange-500',
  },
  {
    imgSrc: '/images/sportstake33.png',
    icon: Users,
    title: 'Networking & Events',
    description:
      "Scouting workshops, data and analytics training for teams' admin staff, kit launches, stakeholder roundtables and panel discussions",
    color: 'from-teal-500 to-cyan-500',
  },
  {
    imgSrc: '/images/sportstake35.png',
    icon: Target,
    title: 'Talent Development',
    description:
      'Talent scouting, development work on training, life coaching & placement + team and athlete performance scouting onto player transfer dealflow',
    color: 'from-emerald-500 to-green-600',
  },
];

/** TOP-OF-PAGE service buttons — now with icons */
const serviceButtons = [
  {
    title: 'Sports Business Development',
    description: 'Comprehensive business development solutions for sports organizations',
    href: 'https://docs.google.com/forms/d/1bkj1GbpPDDyPF5qiUZskwtcc1FLS-7GXTp2pV9nZq5Y/viewform?edit_requested=true',
    icon: BriefcaseBusiness,
  },
  {
    title: 'Brand Strategy Development',
    description: 'Strategic brand development and digital marketing solutions',
    href: 'https://docs.google.com/forms/d/1HCvUmo9ftCqtasFsfrL96m4wDkXkpeYD956KX6jQz_0/viewform?edit_requested=true',
    icon: Megaphone,
  },
  {
    title: 'Athlete Career Development',
    description: 'Complete athlete management and career development services',
    href: 'https://docs.google.com/forms/d/1L-MZkQ3DBg8o8yqlCCN9T_glx5s4jQdZFIUO6_0C-cM/viewform?edit_requested=true',
    icon: Trophy,
  },
];

export default function Services() {
  return (
    <Layout
      title="Our"
      subtitle="Services"
      backgroundImage="url('https://images.pexels.com/photos/248547/pexels-photo-248547.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop')"
    >
      <div className="space-y-12 lg:space-y-16">
        {/* === TOP: Service Buttons (cards) linking to Google Forms === */}
        <div className="relative">
          <div className="absolute -inset-4 bg-gradient-to-r from-green-500/20 via-yellow-500/20 to-emerald-500/20 rounded-2xl blur-xl"></div>
          <div className="relative bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 p-8 lg:p-12 text-center">
            <div className="space-y-6 lg:space-y-8">
              <div>
                <h2 className="text-2xl lg:text-4xl font-bold text-white mb-4">Start Here</h2>
                <p className="text-lg lg:text-xl text-white/90 mb-6 lg:mb-8">
                  Pick a track and fill in a quick form — we’ll follow up.
                </p>
              </div>

              <div className="grid sm:grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-6">
                {serviceButtons.map((button) => {
                  const Icon = button.icon;
                  return (
                    <a
                      key={button.title}
                      href={button.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 p-6 lg:p-8 transition-all duration-300 hover:bg-white/20 hover:scale-105 hover:shadow-xl text-center block"
                    >
                      <div className="flex justify-center mb-3">
                        <div className="p-3 rounded-full bg-yellow-400/20">
                          <Icon className="w-6 h-6 text-yellow-400" />
                        </div>
                      </div>
                      <h3 className="text-base lg:text-lg font-semibold text-white mb-2 group-hover:text-green-200 transition-colors duration-300">
                        {button.title}
                      </h3>
                      <p className="text-xs lg:text-sm text-white/70 mb-4">{button.description}</p>
                      <span className="inline-flex items-center justify-center rounded-full px-4 py-2 text-sm font-semibold bg-yellow-400/90 text-black group-hover:bg-yellow-300 transition-colors">
                        Click to Start
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </span>
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 gap-6 lg:gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={index}
                className="group bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 p-4 lg:p-8 transition-all duration-500 hover:bg-white/15 hover:scale-105 hover:shadow-2xl"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <Image src={service.imgSrc} alt="alt" width={50} height={50} />
                <h3 className="text-lg lg:text-xl font-bold text-white mb-3 lg:mb-4 group-hover:text-green-200 transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-sm lg:text-base text-white/80 leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </Layout>
  );
}
