'use client';

import Layout from '@/components/Layout';
import { Twitter, Facebook, Linkedin, MessageCircle } from 'lucide-react';

const teamMembers = [
  {
    name: 'Larry Michael Dube',
    role: 'Co-Founder & Economics Lead',
    image: '/images/sportstake36.png',
    description: 'An innovator majoring in Economics with a focus on investment analysis, emerging markets, information technology, sports data development, and performance. A Professional at market intelligence holding a B.Com Economics (hons) and languages.',
    social: {
      twitter: '#',
      linkedin: '#',
      facebook: '#'
    }
  },
  {
    name: 'Paul Ntonya',
    role: 'Co-Founder & Business Development',
    image: '/images/sportstake37.png',
    description: 'A growing business developer & strategic systems thinker with a knack for spotting opportunities & Synergy development across Technology, Arts & economics. Certified Google digital marketer as well as a versatile creative with interests in sports, creative ecosystems development, Fashion and Apparel design. PFSA UK certified Scout.',
    social: {
      twitter: '#',
      linkedin: '#',
      facebook: '#'
    }
  },
  // {
  //   name: 'Kudzai Chitima',
  //   role: 'Strategic Advisor',
  //   image: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
  //   description: 'Strategic advisor with extensive experience in sports business development and market analysis. Focused on driving innovation and growth across African sports markets.',
  //   social: {
  //     twitter: '#',
  //     linkedin: '#',
  //     facebook: '#'
  //   }
  // }
];

export default function Team() {
  return (
    <Layout 
      title="Our" 
      subtitle="Team"
      backgroundImage="url('https://images.pexels.com/photos/416978/pexels-photo-416978.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop')"
    >
      <div className="space-y-12 lg:space-y-16">
        {/* Team Grid */}
        <div className="grid sm:grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="group bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 p-4 lg:p-8 transition-all duration-500 hover:bg-white/15 hover:scale-105 hover:shadow-2xl text-center"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Profile Image */}
              <div className="relative mb-4 lg:mb-6">
                <div className="w-24 h-24 lg:w-32 lg:h-32 mx-auto rounded-full overflow-hidden border-4 border-white/20 group-hover:border-white/40 transition-all duration-300">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* Member Info */}
              <div className="space-y-3 lg:space-y-4">
                <div>
                  <h3 className="text-lg lg:text-xl font-bold text-white mb-2 group-hover:text-green-200 transition-colors duration-300">
                    {member.name}
                  </h3>
                  <p className="text-yellow-300 font-medium text-sm lg:text-base">
                    {member.role}
                  </p>
                </div>

                <p className="text-white/80 leading-relaxed text-xs lg:text-sm">
                  {member.description}
                </p>

                {/* Social Links */}
                <div className="flex justify-center space-x-3 lg:space-x-4 pt-3 lg:pt-4">
                  <a
                    href={member.social.twitter}
                    className="p-2 bg-white/10 rounded-lg border border-white/20 text-white/70 hover:text-white hover:bg-white/20 transition-all duration-300 hover:scale-110"
                  >
                    <Twitter className="w-4 h-4" />
                  </a>
                  <a
                    href={member.social.linkedin}
                    className="p-2 bg-white/10 rounded-lg border border-white/20 text-white/70 hover:text-white hover:bg-white/20 transition-all duration-300 hover:scale-110"
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>
                  <a
                    href={member.social.facebook}
                    className="p-2 bg-white/10 rounded-lg border border-white/20 text-white/70 hover:text-white hover:bg-white/20 transition-all duration-300 hover:scale-110"
                  >
                    <Facebook className="w-4 h-4" />
                  </a>
                  <a
                    href="#"
                    className="p-2 bg-white/10 rounded-lg border border-white/20 text-white/70 hover:text-white hover:bg-white/20 transition-all duration-300 hover:scale-110"
                  >
                    <MessageCircle className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Contact Section */}
        <div className="relative">
          <div className="absolute -inset-4 bg-gradient-to-r from-green-500/20 via-yellow-500/20 to-emerald-500/20 rounded-2xl blur-xl"></div>
          <div className="relative bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 p-8 lg:p-12 text-center">
            <h2 className="text-2xl lg:text-4xl font-bold text-white mb-4">
              Join Our Team
            </h2>
            <p className="text-base lg:text-xl text-white/90 mb-6 lg:mb-8 max-w-2xl mx-auto">
              We're always looking for talented individuals who share our passion for sports business development and innovation.
            </p>
            <div className="flex justify-center space-x-4 lg:space-x-6">
              <a
                href="#"
                className="p-3 bg-white/10 rounded-xl border border-white/20 text-white/70 hover:text-white hover:bg-white/20 transition-all duration-300 hover:scale-110"
              >
                <Twitter className="w-5 h-5 lg:w-6 lg:h-6" />
              </a>
              <a
                href="#"
                className="p-3 bg-white/10 rounded-xl border border-white/20 text-white/70 hover:text-white hover:bg-white/20 transition-all duration-300 hover:scale-110"
              >
                <Facebook className="w-5 h-5 lg:w-6 lg:h-6" />
              </a>
              <a
                href="#"
                className="p-3 bg-white/10 rounded-xl border border-white/20 text-white/70 hover:text-white hover:bg-white/20 transition-all duration-300 hover:scale-110"
              >
                <MessageCircle className="w-5 h-5 lg:w-6 lg:h-6" />
              </a>
              <a
                href="#"
                className="p-3 bg-white/10 rounded-xl border border-white/20 text-white/70 hover:text-white hover:bg-white/20 transition-all duration-300 hover:scale-110"
              >
                <Linkedin className="w-5 h-5 lg:w-6 lg:h-6" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}