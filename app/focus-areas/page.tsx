'use client';

import { useState } from 'react';
import Image from 'next/image';
import Layout from '@/components/Layout';
import Modal from '@/components/Modal';

type FocusArea = {
  id: string;
  title: string;
  color: string; // still used for subtle hover tint
  description: string;
  fullContent: string;
  image?: string; // optional per-item image override
};

const focusAreas: FocusArea[] = [
  {
    id: 'data-development',
    image: '/images/sportstake11.png',
    title: 'Data Development & Growth Strategy Formulation',
    color: 'from-blue-500 to-cyan-500',
    description:
      "The Zimbabwean & more broadly, African sports industry has a dearth deficit in sports related research & open data development which subsequently means that all purported domestic solutions are premised on overseas adopted, plagiarised ideas and concepts that don't fit the exact needs of local sports industry entities and players.",
    fullContent: `The Zimbabwean & more broadly, African sports industry has a dearth deficit in sports related research & open data development which subsequently means that all purported domestic solutions are premised on overseas adopted, plagiarised ideas and concepts that don't fit the exact needs of local sports industry entities and players.

These ever-growing deficits in the requisite content, design thinking methodologies & contextualised systems thinking needed to build solid solutions go on to continuously hamper all efforts by different stakeholders as there are subsequent voids in comprehensive quantitative evaluation of the economic development of the sports industry, especially in the statistics of the output value of the sports industry, which lacks a comprehensive understanding of the economic development of the industry. In the state of dual demand research and application, it is imperative to reveal the publicity and education of industrial scale, industrial structure, industrial function and industrial synergies across sport and related industries i.e the creative economy. In this regard, we are building towards the establishment of an economic model for the sports industry which mainly applies data developing technology. After allowing the extraction of information from the sports industry database, it informs different industry growth pathways by fostering stakeholder collaboration based on tangible & locally applicable data. All this will run on scientific and proficient processing methods to analyze a large number of diverse datasets, to process and analyze the economic development data of our sports industry in detail, and conduct corresponding quantitative analysis according to the industry requirements which will guide and inform real world solutions.`,
  },
  {
    id: 'business-development',
    title: 'Sports Business & Industry Development',
    image: '/images/sportstake8.png',
    color: 'from-purple-500 to-pink-500',
    description:
      'With how poorly the sports industry has performed & almost all failed to contribute significantly to economic development, our Business Development cluster exists to consult on behalf of corporations, governments, athletes & teams.',
    fullContent: `With how poorly the sports industry has performed & almost all failed to contribute significantly to economic development, our Business Development cluster exists to consults on behalf of corporations, governments, athletes & teams to strategically identify sports team oriented ventures and entertainment marketing, sponsorship, licensing and athlete partnership opportunities. We seek to bridge the ever growing gap between corporates & teams by being an intermediary as well as execution partner of contracts, events, growth venture initiatives & related partnerships through business process management.

Our team is committed to helping sports team owners, athletes and corporate clients to successfully navigate the many facets of the sports marketing, events and sponsorship industries as we build with governing bodies to develop solid and integrated sports policy frameworks that will drive sustainable growth.

There's a great need for monitoring mechanisms for clubs' & athletes' sustained development that involves different facets such as financial modelling, literacy and operating model proficiency developments leveraging set Key-performance-indicators (KPIs) co-created by SportsTake Labs and our partners aforementioned.`,
  },
  {
    id: 'technology-innovation',
    title: 'Sports Technology Innovation',
    image: '/images/sportstake9.png',
    color: 'from-green-500 to-emerald-500',
    description:
      'Technology innovation plays a vital role in modern sport, yet often proceeds in an ad hoc manner, emerging as just an after thought by sports organisations rather than as a prioritized strategically programmed activity.',
    fullContent: `Technology innovation plays a vital role in modern sport, yet often proceeds in an ad hoc manner, emerging as just an after thought by sports organisations rather than as a prioritized strategically programmed activity. In this regard its imperative that the industry begins to structure itself for technology adoption and integration, identifying key opportunities with start up innovators building local sports technology solutions whilst collaboratively building digital infrastructure rails that include sports analytics, media tools, design and digital marketing models, cross marketing, etc across different segments of the sports industry to streamline the inception of different technologies.

Our model uses a needs assessment, context and stakeholder theory, which stipulates that Co-creating all the solutions with teams owners, governing orgs, athletes is the most effective and efficient way and delivering sustainable growth.

Together with structured enquiries on establishing technological literacy and identify translational and technology-ready opportunities to meet existing and emerging needs. It consolidates existing knowledge, translates exemplars of innovation from sport and other settings and highlights process innovation as being a vital element in the achievement of innovation. The model will then be applied in a tailored framework to professional sports organizations demonstrating its utility as an organizational tool for innovation planning and growth strategy development, all highlighting areas of best practices which will pave way for Identification of near and mid-term opportunities for innovation.`,
  },
  {
    id: 'brand-marketing',
    title: 'Brand & Digital Marketing Strategy Development',
    image: '/images/sportstake10.png',
    color: 'from-orange-500 to-red-500',
    description:
      "As the sports sector & marketing segment changes, so should your digital marketing strategies. It's important to stay aware of the changing landscape along with digital activities.",
    fullContent: `As the sports sector & marketing segment changes, so should your digital marketing strategies. It's important to stay aware of the changing landscape along with digital activities, and the new advancements in technology that can make sports organizations' lives much easier.

With the growth of digital technologies and as the sports industry goes global, today's fans are different than before. They interact differently with their favorite brands, consume sports media and content in a shorter amount of time, move from one channel to another, and want to be fully involved.

The main characteristic of these fluid fans is that they've become very demanding and very active across digital platforms, unapologetically sharing their opinions. They move and change quickly between channels and types of content online, they also want to be part of the game and to engage with their favorite teams. Digital technologies have made it easier for sports fans to discover and do more. Knowing these new habits, teams and leagues have to innovate to mobilize their fans and get them involved in a manner that allows for maximum monetization for team owners and deliver great content along with entertainment for the fans.`,
  },
  {
    id: 'partnership-sponsorship',
    title: 'Partnership & Sponsorship Dealflow',
    image: '/images/sportstake13.png',
    color: 'from-indigo-500 to-blue-500',
    description:
      'Potential Investors in the sports industry view many sports, leagues & individual teams locally as risky zones to throw capital at, rather than commercially underdeveloped and ripe growth areas.',
    fullContent: `Potential Investors in the sports industry view many sports, leagues & individual teams locally as risky zones to throw capital at, rather than commercially underdeveloped and ripe growth areas that can yield great returns, all of which calls for a drastic shift in perspective, only achievable through clear growth data metrics, brand appeal & market equity. This presents the opportunity for institutions like ours to use our expertise to significantly enhance clubs' business models and revenue generating architecture as well as frameworks to transform the entities' long-term profitability and sustain fan base growth.

Attracting significant investment towards sports business is a volatile balancing act, as it requires huge investment that if not well structured could well end up not delivering the sought after results. Sports value creation is heavily premised on fans' attention span hence the great need to work with clubs & individual sport athletes to build their playing brands, style and appeal making it all important for a partner like us who can draw together different stakeholders and contributors to create a higher standard of play, concerted league developments involving regulators, governing bodies, team owners, scouts and managers.

With a sustained operating model we will eventually be able to deliver high value commercial deals across various professional and college/school sports in the short to long term.`,
  },
  {
    id: 'talent-management',
    title: 'Talent Management',
    image: '/images/sportstake14.png',
    color: 'from-teal-500 to-cyan-500',
    description:
      'Our aim is to deliver top tier innovation in the recruitment, management and grooming of athletes on and off their varying playing arenas by leveraging technology tools.',
    fullContent: `Our aim is to deliver top tier innovation in the recruitment, management and grooming of athletes on and off their varying playing arenas by leveraging technology tools, working with key stakeholders such as performance and conditioning coaches, professional and school teams, etc in a collaborative framework that will ensure that no special talents are overlooked or stunted even after being discovered.

We believe in the transformative power of sports for economic growth, financial sustainability for athletes with a key focus on contributing to National Team success. It is in this regard that our R&D work is heavily focused in technologies for scouting, athlete brand development & media grooming, deployment & Deployment of professional scouts, All of which will work within our services ecosystem to deliver top talents to local teams, ship out talents to top sports markets in the USA and Europe at Academy, College and semi Pro-Professional level leagues.`,
  },
  {
    id: 'apparel-design',
    title: 'Apparel Design',
    image: '/images/sportstake15.png',
    color: 'from-pink-500 to-rose-500',
    description:
      'We firmly believe that a key part of brand Equity which will spur growth and unlock the elusive youthful fan bases is apparel innovation along with brand appeal remodeling.',
    fullContent: `We firmly believe that a key part of brand Equity which will spur growth and unlock the elusive youthful fan bases is apparel innovation along with brand appeal remodeling as well as renewal. Teams & athletes in first world economies have invested heavily into the aesthetic appeal of their franchises, changing logos, pushing the envelope on kit design, constantly pushing Research and development into funky and sleek fan merchandise knowing fully well how fashion conscious the average sports fan is today, in this regard it is imperative that bespoke design innovation modules be applied by our local teams, leveraging the good pool of creatives we have as a nation.

We will actively seek to Provide clients with innovative performance sportswear design, sustainable & circular design that will correlate with efforts in the strategic brand development clusters of our services offering including collaborations with artists.`,
  },
];

export default function FocusAreas() {
  const [selectedArea, setSelectedArea] = useState<FocusArea | null>(null);

  return (
    <Layout
      title="Focus"
      subtitle="Areas"
      backgroundImage="url('/images/sportstake8.jpg')"
    >
      {/* Circles grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-y-12 gap-x-8 mb-12 lg:mb-16">
        {focusAreas.map((area, idx) => (
          <div key={area.id} className="flex flex-col items-center">
            <button
              type="button"
              onClick={() => setSelectedArea(area)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') setSelectedArea(area);
              }}
              aria-label={`Open ${area.title}`}
              className="group relative rounded-full w-32 h-32 md:w-36 md:h-36 lg:w-40 lg:h-40 overflow-hidden ring-4 ring-black/50 hover:ring-yellow-300 focus:ring-yellow-300 transition-all duration-300 shadow-xl focus:outline-none"
              style={{ animationDelay: `${idx * 80}ms` }}
            >
              {/* placeholder or per-item image */}
              <Image
                src={area.image || '/images/sportstake11.png'}
                alt=""
                fill
                className="object-cover"
                sizes="(max-width: 768px) 10rem, (max-width: 1024px) 13rem, 14rem"
                priority={idx < 3}
              />
              {/* subtle tint on hover to match brand gradient */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${area.color} opacity-0 group-hover:opacity-20 transition-opacity`}
              />
              {/* inner vignette for readability */}
              <div className="pointer-events-none absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors" />
            </button>

            <h3 className="mt-4 text-center text-white font-bold text-base md:text-lg leading-tight">
              {area.title}
            </h3>
          </div>
        ))}
      </div>

      {/* Modal with the long copy */}
      {selectedArea && (
        <Modal
          isOpen
          onClose={() => setSelectedArea(null)}
          title={selectedArea.title}
          content={selectedArea.fullContent}
        />
      )}
    </Layout>
  );
}
