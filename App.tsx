
import React, { useState, useEffect, useRef } from 'react';
import { 
  Menu, 
  X, 
  ChevronRight, 
  Mail, 
  Phone, 
  ExternalLink, 
  LayoutDashboard, 
  Briefcase, 
  Sparkles,
  MessageSquare,
  ArrowRight,
  ShoppingCart,
  Headphones,
  CheckCircle2,
  Globe,
  ClipboardCheck,
  Quote,
  Send,
  Calendar,
  Layers
} from 'lucide-react';
import { GoogleGenAI } from '@google/genai';
import { SERVICES, EXPERIENCE, SKILLS, CONTACT_INFO, TESTIMONIALS, PROJECTS } from './constants';

// Theme Colors Mapping:
// #1f4529: Deep Forest (Primary Dark)
// #47663b: Moss Green (Secondary Dark)
// #e8ecd7: Parchment (Light Base)
// #eed3b1: Sunset Glow (Accent Peach)

// Helper to convert Google Drive link to a direct viewable image link
const getDirectDriveLink = (url: string) => {
  const match = url.match(/[-\w]{25,}/);
  return match ? `https://lh3.googleusercontent.com/d/${match[0]}` : url;
};

const PROFILE_IMAGE = getDirectDriveLink("https://drive.google.com/file/d/1qmSqc9vgEVp_czrytF--B6BXS8j43VOs/view?usp=sharing");

// --- Sub-components ---

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'py-3' : 'py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`glass-panel border border-[#47663b]/10 rounded-3xl shadow-lg transition-all duration-300 ${scrolled ? 'bg-[#e8ecd7]/90' : 'bg-[#e8ecd7]/40'}`}>
          <div className="flex justify-between h-16 items-center px-6">
            <div className="flex-shrink-0 flex items-center gap-3 group">
              <div className="w-10 h-10 rounded-xl bg-[#1f4529] flex items-center justify-center text-[#eed3b1] font-bold shadow-lg shadow-[#1f4529]/20 group-hover:scale-110 transition-transform">
                H
              </div>
              <span className="text-xl font-bold font-outfit tracking-tight text-[#1f4529]">Haidee<span className="text-[#47663b]">.</span>Capili</span>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-center space-x-1">
                {['Home', 'Services', 'Projects', 'Experience', 'Contact'].map((item) => (
                  <a 
                    key={item} 
                    href={`#${item.toLowerCase()}`} 
                    className="text-[#47663b] hover:text-[#1f4529] px-4 py-2 text-sm font-semibold transition-colors rounded-xl hover:bg-[#eed3b1]/50"
                  >
                    {item}
                  </a>
                ))}
                <a href="#contact" className="ml-4 bg-[#1f4529] text-[#eed3b1] px-6 py-2.5 rounded-2xl text-sm font-bold hover:bg-[#47663b] transition-all shadow-md hover:shadow-xl hover:-translate-y-0.5 active:scale-95">
                  Hire Me
                </a>
              </div>
            </div>
            <div className="md:hidden">
              <button onClick={() => setIsOpen(!isOpen)} className="text-[#1f4529] p-2 hover:bg-[#eed3b1] rounded-xl transition-colors">
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-4 right-4 mt-2">
          <div className="bg-[#e8ecd7] rounded-3xl shadow-2xl border border-[#eed3b1] p-4 space-y-2 animate-in fade-in zoom-in-95 duration-200">
            {['Home', 'Services', 'Projects', 'Experience', 'Contact'].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`} 
                onClick={() => setIsOpen(false)}
                className="text-[#1f4529] hover:text-[#47663b] block px-4 py-3 text-base font-semibold hover:bg-[#eed3b1]/50 rounded-2xl transition-all"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

const Hero = () => (
  <section id="home" className="pt-32 pb-16 lg:pt-48 lg:pb-32 overflow-hidden bg-[radial-gradient(circle_at_top_right,_#eed3b144,_#e8ecd7)]">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
        <div className="relative z-10 text-center lg:text-left mb-16 lg:mb-0">
          <div className="inline-flex items-center px-4 py-1.5 rounded-full text-xs font-bold bg-[#eed3b1] text-[#1f4529] mb-8 border border-[#47663b]/20 uppercase tracking-widest shadow-sm">
            <span className="flex h-2 w-2 rounded-full bg-green-700 mr-2 animate-pulse"></span>
            Open for New Projects
          </div>
          <h1 className="text-5xl lg:text-[5.5rem] font-bold font-outfit tracking-tighter leading-[0.95] text-[#1f4529] mb-8">
            Virtual Assistant <br />
            <span className="text-[#47663b]">& Customer Success</span>
          </h1>
          <p className="text-xl text-[#47663b] max-w-xl mx-auto lg:mx-0 mb-10 leading-relaxed font-light">
            Expert <span className="text-[#1f4529] font-semibold">Shopify management</span> and multi-channel support for scaling brands. Dedicated to operational precision and customer loyalty.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <a href="#contact" className="px-10 py-5 bg-[#1f4529] text-[#eed3b1] rounded-3xl font-bold hover:bg-[#47663b] transition-all shadow-xl shadow-[#1f4529]/20 hover:shadow-[#1f4529]/40 flex items-center justify-center gap-2 group">
              Start a Conversation <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="#services" className="px-10 py-5 bg-white text-[#47663b] border border-[#eed3b1] rounded-3xl font-bold hover:bg-[#e8ecd7] transition-all flex items-center justify-center gap-2">
              View Services
            </a>
          </div>
          
          <div className="mt-16 flex items-center justify-center lg:justify-start gap-12 opacity-80">
            <div className="flex flex-col items-center lg:items-start">
              <span className="font-black text-2xl text-[#1f4529] leading-none">BS EE</span>
              <span className="text-[10px] font-bold text-[#47663b] uppercase tracking-widest mt-1">Background</span>
            </div>
            <div className="h-8 w-px bg-[#47663b]/20 hidden sm:block"></div>
            <div className="flex flex-col items-center lg:items-start">
              <span className="font-black text-2xl text-[#1f4529] leading-none">100%</span>
              <span className="text-[10px] font-bold text-[#47663b] uppercase tracking-widest mt-1">SOP Compliance</span>
            </div>
            <div className="h-8 w-px bg-[#47663b]/20 hidden sm:block"></div>
            <div className="flex flex-col items-center lg:items-start">
              <span className="font-black text-2xl text-[#1f4529] leading-none">24/7</span>
              <span className="text-[10px] font-bold text-[#47663b] uppercase tracking-widest mt-1">Mindset</span>
            </div>
          </div>
        </div>
        
        <div className="relative">
          <div className="relative w-full max-w-lg mx-auto aspect-square lg:aspect-[4/5]">
             {/* Dynamic background shapes using the palette */}
             <div className="absolute -top-10 -right-10 w-64 h-64 bg-[#eed3b1]/40 rounded-full blur-3xl animate-blob"></div>
             <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-[#47663b]/20 rounded-full blur-3xl animate-blob animation-delay-2000"></div>
             
             <div className="relative h-full w-full bg-[#eed3b1]/30 p-3 rounded-[48px] shadow-2xl border border-white/50 overflow-hidden transform hover:-rotate-1 transition-transform duration-700">
               <div className="h-full w-full rounded-[40px] overflow-hidden bg-[#e8ecd7] group">
                 <img 
                   src={PROFILE_IMAGE} 
                   alt="Haidee Capili - Professional VA" 
                   className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                   onError={(e) => {
                     e.currentTarget.src = "https://picsum.photos/seed/haidee/800/1000";
                   }}
                 />
                 <div className="absolute inset-0 bg-gradient-to-t from-[#1f4529]/40 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity"></div>
               </div>
               
               {/* Floating Badges */}
               <div className="absolute bottom-10 right-10 bg-white/90 backdrop-blur-md px-6 py-4 rounded-3xl shadow-2xl border border-[#eed3b1]/50 transform hover:scale-105 transition-all group/badge">
                 <div className="flex items-center gap-4">
                   <div className="p-3 bg-[#e8ecd7] text-[#1f4529] rounded-2xl group-hover/badge:scale-110 transition-transform">
                     <CheckCircle2 size={24} />
                   </div>
                   <div>
                     <p className="text-[10px] font-black text-[#47663b] uppercase tracking-widest leading-none mb-1">Status</p>
                     <p className="font-bold text-[#1f4529] text-lg">Online & Active</p>
                   </div>
                 </div>
               </div>

               <div className="absolute top-12 -left-8 bg-white/95 backdrop-blur-md px-6 py-4 rounded-3xl shadow-xl border border-[#eed3b1]/20 hidden sm:block transform -rotate-3 hover:rotate-0 transition-all">
                 <div className="flex items-center gap-3">
                    <div className="p-2 bg-[#eed3b1] text-[#1f4529] rounded-xl">
                      <ShoppingCart size={20} />
                    </div>
                    <div>
                      <p className="text-[#1f4529] font-bold text-xl leading-none">Shopify</p>
                      <p className="text-[10px] font-black text-[#47663b] uppercase tracking-widest">Expert Level</p>
                    </div>
                 </div>
               </div>
             </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const ProjectsSection = () => (
  <section id="projects" className="py-32 bg-[#e8ecd7]">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-24">
        <span className="text-[#47663b] font-black text-xs uppercase tracking-[0.3em] block mb-4">Portfolio</span>
        <h2 className="text-5xl md:text-6xl font-bold font-outfit tracking-tight text-[#1f4529] mb-6">
          My Projects
        </h2>
        <p className="mt-4 max-w-2xl text-xl text-[#47663b] mx-auto font-light leading-relaxed">
          A showcase of creative assets, technical store management, and professional deliverables.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {PROJECTS.map((project, idx) => (
          <div key={idx} className="group bg-white rounded-[48px] overflow-hidden border border-[#eed3b1]/40 shadow-sm hover:shadow-2xl transition-all duration-700 flex flex-col md:flex-row h-full">
            <div className="md:w-1/2 overflow-hidden h-64 md:h-auto relative">
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
              />
              <div className="absolute inset-0 bg-[#1f4529]/10 group-hover:bg-transparent transition-colors"></div>
            </div>
            <div className="p-10 md:w-1/2 flex flex-col justify-between">
              <div>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map(tag => (
                    <span key={tag} className="px-3 py-1 bg-[#e8ecd7] text-[#47663b] text-[10px] font-black uppercase tracking-widest rounded-full border border-[#eed3b1]">
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-2xl font-bold mb-4 text-[#1f4529] font-outfit leading-tight">{project.title}</h3>
                <p className="text-[#47663b] leading-relaxed mb-8 text-base font-light">
                  {project.description}
                </p>
              </div>
              <a 
                href={project.link} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center gap-3 text-sm font-bold text-[#1f4529] hover:text-[#47663b] transition-colors group/btn"
              >
                <div className="p-2 bg-[#eed3b1] rounded-lg group-hover/btn:bg-[#1f4529] group-hover/btn:text-[#eed3b1] transition-all">
                  <ExternalLink size={18} />
                </div>
                View Project
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Dashboard = () => {
  return (
    <section className="py-24 bg-[#eed3b1]/10 border-y border-[#47663b]/10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-bold font-outfit mb-4 tracking-tight text-[#1f4529]">Technical Proficiency</h2>
            <p className="text-[#47663b] text-lg font-light leading-relaxed">
              Combining engineering precision with customer service excellence.
            </p>
          </div>
          <div className="flex gap-4">
             <div className="px-6 py-3 bg-white rounded-2xl border border-[#eed3b1] text-sm font-bold text-[#1f4529] flex items-center gap-3 shadow-sm">
               <span className="flex h-3 w-3 rounded-full bg-green-600 shadow-[0_0_10px_rgba(22,101,52,0.3)]"></span>
               Operational Status: High
             </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 bg-white rounded-[48px] p-10 md:p-14 shadow-sm border border-[#eed3b1]/30 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#eed3b1]/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:scale-150 transition-transform duration-700"></div>
            <div className="flex items-center justify-between mb-12 relative">
              <h3 className="font-bold text-3xl font-outfit text-[#1f4529]">Core Skills Index</h3>
              <div className="p-4 bg-[#e8ecd7] text-[#1f4529] rounded-2xl shadow-sm">
                <Sparkles size={28} />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-10 relative">
              {SKILLS.filter(s => s.category === 'primary').map((skill) => (
                <div key={skill.name} className="group/skill">
                  <div className="flex justify-between mb-3 items-end">
                    <span className="text-lg font-bold text-[#1f4529] group-hover/skill:text-[#47663b] transition-colors">{skill.name}</span>
                    <span className="text-sm font-black text-[#47663b] uppercase tracking-widest">{skill.level}%</span>
                  </div>
                  <div className="h-3 bg-[#e8ecd7] rounded-full overflow-hidden p-0.5 border border-[#eed3b1]/20">
                    <div 
                      className="h-full bg-gradient-to-r from-[#47663b] to-[#1f4529] rounded-full transition-all duration-1000 shadow-[0_0_15px_rgba(31,69,41,0.2)]" 
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-[#1f4529] rounded-[48px] p-10 md:p-14 text-[#e8ecd7] shadow-2xl flex flex-col relative overflow-hidden group">
            <div className="absolute top-0 left-0 w-full h-2 bg-[#eed3b1]"></div>
            <div className="flex items-center justify-between mb-12">
              <h3 className="font-bold text-3xl font-outfit">Tool Stack</h3>
              <LayoutDashboard size={28} className="text-[#eed3b1]/40 group-hover:text-[#eed3b1] transition-colors" />
            </div>
            <div className="flex flex-wrap gap-4 mb-auto">
              {SKILLS.filter(s => s.category === 'tool').map((tool) => (
                <span key={tool.name} className="px-5 py-3 bg-white/5 hover:bg-white/10 transition-all rounded-2xl text-sm font-bold border border-white/10 flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-[#eed3b1] shadow-[0_0_10px_rgba(238,211,177,0.5)]"></div>
                  {tool.name}
                </span>
              ))}
              <span className="px-5 py-3 bg-white/5 rounded-2xl text-sm font-bold border border-white/10">Zendesk</span>
              <span className="px-5 py-3 bg-white/5 rounded-2xl text-sm font-bold border border-white/10">Gorgias</span>
              <span className="px-5 py-3 bg-white/5 rounded-2xl text-sm font-bold border border-white/10">Shopify Admin</span>
            </div>
            <div className="mt-16 pt-10 border-t border-white/10">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-[10px] text-[#eed3b1]/50 uppercase font-black tracking-[0.3em] mb-2">Global Operations</p>
                  <p className="text-2xl font-bold font-outfit">Remote Native</p>
                </div>
                <div className="p-4 bg-white/5 rounded-3xl text-[#eed3b1]/40 group-hover:text-[#eed3b1] transition-colors">
                  <Globe size={32} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Services = () => (
  <section id="services" className="py-32 bg-[#e8ecd7]">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-24">
        <span className="text-[#47663b] font-black text-xs uppercase tracking-[0.3em] block mb-4">Service Menu</span>
        <h2 className="text-5xl md:text-6xl font-bold font-outfit tracking-tight text-[#1f4529] mb-6">
          Tailored Business Support
        </h2>
        <p className="mt-4 max-w-2xl text-xl text-[#47663b] mx-auto font-light leading-relaxed">
          Operational backbone services for high-growth e-commerce ventures and professional teams.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {SERVICES.map((service, idx) => (
          <div key={idx} className="group relative bg-white rounded-[48px] overflow-hidden border border-[#eed3b1]/30 hover:border-[#47663b]/40 shadow-sm hover:shadow-2xl transition-all duration-700 hover:-translate-y-4">
            <div className="h-72 w-full overflow-hidden relative">
              <img 
                src={service.image} 
                alt={service.title} 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-white via-white/20 to-transparent"></div>
            </div>
            <div className="p-12 relative -mt-16 bg-white mx-4 rounded-[40px] shadow-sm group-hover:shadow-none transition-shadow border border-[#e8ecd7] group-hover:border-transparent">
              <div className="w-16 h-16 bg-[#1f4529] text-[#eed3b1] rounded-3xl flex items-center justify-center mb-8 shadow-xl shadow-[#1f4529]/10 group-hover:scale-110 transition-transform">
                {service.icon === 'shopping-cart' && <ShoppingCart size={32} />}
                {service.icon === 'headphones' && <Headphones size={32} />}
                {service.icon === 'clipboard' && <ClipboardCheck size={32} />}
              </div>
              <h3 className="text-2xl font-bold mb-4 text-[#1f4529] font-outfit">{service.title}</h3>
              <p className="text-[#47663b] leading-relaxed mb-8 text-lg font-light">
                {service.description}
              </p>
              <a href="#contact" className="inline-flex items-center text-xs font-black text-[#47663b] hover:text-[#1f4529] transition-colors uppercase tracking-widest group/link">
                Inquire Service <ArrowRight size={18} className="ml-2 group-hover/link:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const ExperienceSection = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo = direction === 'left' ? scrollLeft - clientWidth : scrollLeft + clientWidth;
      scrollRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  return (
    <section id="experience" className="py-32 bg-[#eed3b1]/10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="max-w-2xl text-center md:text-left">
            <span className="text-[#47663b] font-black text-xs uppercase tracking-[0.3em] block mb-4">The Journey</span>
            <h2 className="text-5xl font-bold font-outfit tracking-tight text-[#1f4529]">Professional Milestones</h2>
            <p className="mt-4 text-xl text-[#47663b] font-light leading-relaxed">
              A timeline of dedication, operational excellence, and academic success.
            </p>
          </div>
          <div className="hidden md:flex gap-4">
            <button 
              onClick={() => scroll('left')}
              className="p-5 bg-white border border-[#eed3b1] text-[#1f4529] rounded-2xl hover:bg-[#1f4529] hover:text-[#eed3b1] transition-all shadow-sm active:scale-95"
            >
              <ArrowRight size={24} className="rotate-180" />
            </button>
            <button 
              onClick={() => scroll('right')}
              className="p-5 bg-[#1f4529] text-[#eed3b1] rounded-2xl hover:bg-[#47663b] transition-all shadow-xl shadow-[#1f4529]/10 active:scale-95"
            >
              <ArrowRight size={24} />
            </button>
          </div>
        </div>

        {/* Horizontal Scroll Container */}
        <div className="relative">
          {/* Timeline Path Line */}
          <div className="absolute top-[130px] left-0 w-full h-1 bg-[#47663b]/10 hidden lg:block z-0"></div>
          
          <div 
            ref={scrollRef}
            className="flex gap-8 overflow-x-auto pb-12 pt-8 scrollbar-hide snap-x snap-mandatory relative z-10"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {EXPERIENCE.map((item, idx) => (
              <div 
                key={idx} 
                className="flex-shrink-0 w-[85vw] md:w-[480px] snap-start group"
              >
                {/* Year Indicator */}
                <div className="mb-10 flex flex-col items-center lg:items-start lg:pl-6 relative">
                  <div className="w-16 h-16 rounded-3xl bg-white border-4 border-[#e8ecd7] shadow-xl flex items-center justify-center text-[#1f4529] z-20 group-hover:bg-[#1f4529] group-hover:text-[#eed3b1] transition-all duration-500 group-hover:scale-110 mb-4">
                    <Calendar size={28} />
                  </div>
                  <span className="text-xs font-black text-[#1f4529] bg-[#eed3b1] px-4 py-2 rounded-full uppercase tracking-widest shadow-sm">
                    {item.period}
                  </span>
                </div>

                {/* Content Card */}
                <div className="bg-white p-10 rounded-[48px] shadow-sm border border-[#eed3b1]/30 hover:border-[#47663b]/30 hover:shadow-2xl transition-all duration-500 min-h-[420px] flex flex-col">
                  <div className="mb-8">
                    <h3 className="text-2xl font-bold text-[#1f4529] font-outfit mb-2 group-hover:text-[#47663b] transition-colors leading-tight">{item.role}</h3>
                    <p className="text-lg font-bold text-[#47663b]">{item.company}</p>
                  </div>
                  
                  <div className="h-px w-full bg-[#eed3b1]/30 mb-8"></div>

                  <ul className="space-y-5 flex-1">
                    {item.highlights.map((bullet, bIdx) => (
                      <li key={bIdx} className="flex items-start gap-4 text-[#47663b] leading-relaxed font-light">
                        <div className="mt-2.5 w-2 h-2 rounded-full bg-[#eed3b1] shrink-0"></div>
                        <span className="text-base">{bullet}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-10 pt-8 border-t border-[#e8ecd7] flex items-center justify-between opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="text-[10px] font-black text-[#eed3b1] uppercase tracking-[0.2em]">Verified Role</span>
                    <div className="p-2 bg-[#e8ecd7] text-[#1f4529] rounded-xl"><Briefcase size={16} /></div>
                  </div>
                </div>
              </div>
            ))}
            
            {/* End of Journey Card */}
            <div className="flex-shrink-0 w-[85vw] md:w-[480px] snap-start">
               <div className="mt-[150px] h-[420px] bg-[#1f4529] rounded-[48px] flex flex-col items-center justify-center text-center p-12 text-[#eed3b1]">
                  <div className="w-24 h-24 rounded-full bg-[#47663b]/30 flex items-center justify-center mb-8 border border-[#eed3b1]/20 animate-pulse">
                    <Sparkles size={48} />
                  </div>
                  <h3 className="text-3xl font-bold font-outfit mb-4">Your Project Next?</h3>
                  <p className="text-lg font-light opacity-80 mb-10">Let's write the next chapter of operational excellence together.</p>
                  <a href="#contact" className="px-8 py-4 bg-[#eed3b1] text-[#1f4529] rounded-2xl font-bold hover:scale-105 transition-transform flex items-center gap-2">
                    Start Collaboration <ArrowRight size={20} />
                  </a>
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const TestimonialsSection = () => (
  <section id="testimonials" className="py-32 bg-[#e8ecd7] relative overflow-hidden">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="text-center mb-24">
        <span className="text-[#47663b] font-black text-xs uppercase tracking-[0.3em] block mb-4">Client Echoes</span>
        <h2 className="text-5xl font-bold font-outfit tracking-tight text-[#1f4529]">Professional Validation</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {TESTIMONIALS.map((testimonial, idx) => (
          <div key={idx} className="bg-white/60 p-12 rounded-[48px] border border-[#eed3b1] hover:border-[#47663b]/30 transition-all duration-500 group relative flex flex-col">
            <Quote className="absolute top-10 right-10 text-[#eed3b1]/40 group-hover:text-[#eed3b1]/60 transition-colors" size={72} />
            <div className="relative z-10 flex-1">
              <div className="flex gap-1.5 mb-8">
                {[...Array(5)].map((_, i) => (
                  <Sparkles key={i} size={16} className="text-[#47663b]" />
                ))}
              </div>
              <p className="text-[#1f4529] leading-relaxed text-xl italic font-light mb-12">
                "{testimonial.quote}"
              </p>
            </div>
            <div className="flex items-center gap-5 mt-auto relative z-10">
              <div className="w-14 h-14 rounded-2xl bg-[#1f4529] flex items-center justify-center text-[#eed3b1] font-bold text-xl shadow-lg">
                {testimonial.author.charAt(0)}
              </div>
              <div>
                <h4 className="font-bold text-[#1f4529] font-outfit text-lg mb-0.5">{testimonial.author}</h4>
                <p className="text-xs font-black text-[#47663b] uppercase tracking-widest">
                  {testimonial.position} <span className="text-[#eed3b1]">@</span> {testimonial.company}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const ContactSection = () => {
  const [formStatus, setFormStatus] = useState<'idle' | 'sending' | 'sent'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('sending');
    setTimeout(() => setFormStatus('sent'), 1500);
  };

  return (
    <section id="contact" className="py-32 bg-[#eed3b1]/20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="lg:grid lg:grid-cols-2 lg:gap-24 items-start">
          <div>
            <h2 className="text-5xl lg:text-[5.5rem] font-bold font-outfit mb-12 tracking-tighter leading-[0.95] text-[#1f4529]">Ready to <br/><span className="text-[#47663b] underline decoration-[#eed3b1] decoration-8 underline-offset-8">Scale Together?</span></h2>
            <p className="text-xl text-[#47663b] mb-16 max-w-lg leading-relaxed font-light">
              Available for full-time roles, project collaborations, and strategic operational support.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <a href={`mailto:${CONTACT_INFO.email}`} className="flex flex-col gap-6 p-10 rounded-[40px] bg-white border border-[#eed3b1] hover:border-[#47663b] hover:shadow-2xl transition-all group">
                <div className="w-16 h-16 rounded-2xl bg-[#e8ecd7] flex items-center justify-center text-[#1f4529] shadow-md group-hover:bg-[#1f4529] group-hover:text-[#eed3b1] transition-all">
                  <Mail size={32} />
                </div>
                <div>
                  <p className="text-[10px] font-black text-[#47663b] uppercase tracking-[0.2em] mb-2">Direct Email</p>
                  <p className="text-lg font-bold text-[#1f4529] break-all">{CONTACT_INFO.email}</p>
                </div>
              </a>

              <a href={`tel:${CONTACT_INFO.phone.replace(/\s/g, '')}`} className="flex flex-col gap-6 p-10 rounded-[40px] bg-white border border-[#eed3b1] hover:border-[#47663b] hover:shadow-2xl transition-all group">
                <div className="w-16 h-16 rounded-2xl bg-[#e8ecd7] flex items-center justify-center text-[#1f4529] shadow-md group-hover:bg-[#1f4529] group-hover:text-[#eed3b1] transition-all">
                  <Phone size={32} />
                </div>
                <div>
                  <p className="text-[10px] font-black text-[#47663b] uppercase tracking-[0.2em] mb-2">WhatsApp / Call</p>
                  <p className="text-lg font-bold text-[#1f4529]">{CONTACT_INFO.phone}</p>
                </div>
              </a>
              
              <a href={CONTACT_INFO.onlineJobs} target="_blank" rel="noopener noreferrer" className="sm:col-span-2 flex items-center justify-between p-10 rounded-[40px] bg-[#1f4529] text-[#eed3b1] shadow-2xl hover:bg-[#47663b] transition-all group">
                <div className="flex items-center gap-8">
                  <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center text-white">
                    <ExternalLink size={32} />
                  </div>
                  <div>
                    <p className="text-[10px] font-black text-white/50 uppercase tracking-[0.2em] mb-1">Verified Profile</p>
                    <p className="text-2xl font-bold font-outfit">OnlineJobs.ph Profile</p>
                  </div>
                </div>
                <ChevronRight className="group-hover:translate-x-2 transition-transform" size={32} />
              </a>
            </div>
          </div>

          <div className="mt-20 lg:mt-0 bg-white p-10 md:p-14 rounded-[56px] border border-[#eed3b1] shadow-2xl relative">
            {formStatus === 'sent' ? (
              <div className="py-20 text-center animate-in fade-in zoom-in-95 duration-500">
                <div className="w-24 h-24 bg-[#e8ecd7] text-green-700 rounded-full flex items-center justify-center mx-auto mb-8">
                  <CheckCircle2 size={48} />
                </div>
                <h3 className="text-3xl font-bold mb-4 font-outfit text-[#1f4529]">Message Received!</h3>
                <p className="text-[#47663b] text-lg mb-10">I'll get back to you within 24 hours.</p>
                <button onClick={() => setFormStatus('idle')} className="px-8 py-4 bg-[#e8ecd7] text-[#1f4529] rounded-2xl font-bold hover:bg-[#eed3b1] transition-all">Send Another</button>
              </div>
            ) : (
              <>
                <h3 className="text-4xl font-bold mb-10 flex items-center gap-5 text-[#1f4529] font-outfit">
                  <div className="p-3 bg-[#e8ecd7] text-[#1f4529] rounded-2xl"><MessageSquare /></div> Let's Chat
                </h3>
                <form className="space-y-8" onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-black text-[#47663b] uppercase tracking-widest mb-4">Your Name</label>
                      <input required type="text" className="w-full px-8 py-5 rounded-3xl border border-[#eed3b1] focus:ring-2 focus:ring-[#47663b] focus:border-transparent transition-all outline-none bg-[#e8ecd7]/30 text-[#1f4529] font-medium placeholder:text-[#47663b]/30" placeholder="John Doe" />
                    </div>
                    <div>
                      <label className="block text-xs font-black text-[#47663b] uppercase tracking-widest mb-4">Your Email</label>
                      <input required type="email" className="w-full px-8 py-5 rounded-3xl border border-[#eed3b1] focus:ring-2 focus:ring-[#47663b] focus:border-transparent transition-all outline-none bg-[#e8ecd7]/30 text-[#1f4529] font-medium placeholder:text-[#47663b]/30" placeholder="john@company.com" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-black text-[#47663b] uppercase tracking-widest mb-4">How can I help?</label>
                    <select className="w-full px-8 py-5 rounded-3xl border border-[#eed3b1] focus:ring-2 focus:ring-[#47663b] focus:border-transparent transition-all outline-none bg-[#e8ecd7]/30 text-[#1f4529] font-bold appearance-none">
                      <option>E-commerce Customer Support</option>
                      <option>Shopify Admin & Ops</option>
                      <option>Inventory Management</option>
                      <option>Research & Admin VA</option>
                      <option>Other / General Inquiry</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-black text-[#47663b] uppercase tracking-widest mb-4">Message</label>
                    <textarea required className="w-full px-8 py-5 rounded-3xl border border-[#eed3b1] focus:ring-2 focus:ring-[#47663b] focus:border-transparent transition-all outline-none min-h-[160px] bg-[#e8ecd7]/30 text-[#1f4529] font-medium placeholder:text-[#47663b]/30" placeholder="Tell me about your project..."></textarea>
                  </div>
                  <button 
                    disabled={formStatus === 'sending'}
                    className="w-full py-6 bg-[#1f4529] text-[#eed3b1] rounded-[2rem] font-black uppercase tracking-[0.25em] hover:bg-[#47663b] transition-all shadow-xl shadow-[#1f4529]/10 hover:-translate-y-1 active:scale-[0.98] disabled:opacity-50 flex items-center justify-center gap-3"
                  >
                    {formStatus === 'sending' ? (
                      <>
                        <div className="w-5 h-5 border-4 border-[#eed3b1]/30 border-t-[#eed3b1] rounded-full animate-spin"></div>
                        Transmitting...
                      </>
                    ) : (
                      <>
                        Send Message <Send size={20} />
                      </>
                    )}
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

const PortfolioChat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{role: 'user' | 'bot', text: string}[]>([
    { role: 'bot', text: "Hi! I'm Haidee's AI assistant. I can answer questions about her background, Shopify expertise, or availability. How can I help you?" }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const chatEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, loading]);

  const handleSend = async () => {
    if (!input.trim() || loading) return;
    
    const userMsg = input;
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setLoading(true);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: `You are a professional, helpful AI representative for Haidee Capili.
        Profile Summary: Haidee is a highly meticulous Virtual Assistant & Customer Service Specialist with a BS in Electrical Engineering.
        Core Experience: 
        1. E-commerce Support (Jan 2025-2026): Shopify management, tracking subscriptions, de-escalation.
        2. Inventory (Aboitiz Company): Monitoring micro ingredients, ensuring zero production interruptions.
        3. Academic Tutoring (Psychology research co-writer, Math/Science specialized).
        Skills: Shopify, Zendesk, Gorgias, Google Workspace, ChatGPT/AI for ops, SOP compliance.
        Tone: Professional, accommodating, efficient, and intelligent.
        Contact: haidee.capili@gmail.com | +63 995 372 9069.
        User asks: ${userMsg}`,
      });
      
      const botResponse = response.text || "I can definitely help with that. Haidee has deep experience in Shopify operations and high-touch customer support. Would you like her direct contact details?";
      setMessages(prev => [...prev, { role: 'bot', text: botResponse }]);
    } catch (err) {
      setMessages(prev => [...prev, { role: 'bot', text: "I encountered a minor glitch! Feel free to reach Haidee at haidee.capili@gmail.com for an immediate response." }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-[60] flex flex-col items-end">
      {isOpen && (
        <div className="mb-4 w-[380px] sm:w-[420px] max-w-[calc(100vw-2rem)] glass-panel rounded-[2.5rem] shadow-[0_32px_128px_-15px_rgba(0,0,0,0.3)] overflow-hidden border border-[#47663b]/20 flex flex-col h-[600px] animate-in fade-in slide-in-from-bottom-12 duration-500">
          <div className="bg-[#1f4529] p-8 text-[#eed3b1] flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-[#47663b] flex items-center justify-center shadow-lg">
                <Sparkles size={24} />
              </div>
              <div>
                <p className="font-bold text-lg font-outfit leading-none">AI Assistant</p>
                <div className="flex items-center gap-1.5 mt-1.5">
                  <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse"></span>
                  <span className="text-[10px] text-[#eed3b1]/60 uppercase tracking-widest font-black">Online Now</span>
                </div>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="hover:bg-white/10 p-3 rounded-2xl transition-all">
              <X size={24} />
            </button>
          </div>
          <div className="flex-1 overflow-y-auto p-8 space-y-6 bg-[#e8ecd7]/50 scrollbar-thin scrollbar-thumb-[#47663b]/30">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[90%] p-5 rounded-[1.5rem] text-sm font-medium leading-relaxed ${m.role === 'user' ? 'bg-[#1f4529] text-[#eed3b1] rounded-tr-none shadow-xl' : 'bg-white text-[#1f4529] shadow-md border border-[#eed3b1] rounded-tl-none'}`}>
                  {m.text}
                </div>
              </div>
            ))}
            {loading && (
              <div className="flex justify-start">
                <div className="bg-white px-6 py-4 rounded-3xl shadow-sm border border-[#eed3b1] flex gap-1.5">
                  <div className="w-2 h-2 bg-[#47663b] rounded-full animate-bounce"></div>
                  <div className="w-2 h-2 bg-[#47663b] rounded-full animate-bounce [animation-delay:0.2s]"></div>
                  <div className="w-2 h-2 bg-[#47663b] rounded-full animate-bounce [animation-delay:0.4s]"></div>
                </div>
              </div>
            )}
            <div ref={chatEndRef} />
          </div>
          <div className="p-5 bg-white border-t border-[#eed3b1]/30 flex gap-3 items-center">
            <input 
              type="text" 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Type a question..."
              className="flex-1 bg-[#e8ecd7] px-6 py-4 rounded-[1.25rem] text-sm outline-none focus:ring-2 focus:ring-[#47663b]/20 transition-all font-bold text-[#1f4529] placeholder:text-[#47663b]/40"
            />
            <button 
              onClick={handleSend}
              disabled={!input.trim() || loading}
              className="bg-[#1f4529] text-[#eed3b1] p-4 rounded-[1.25rem] hover:bg-[#47663b] transition-all shadow-lg disabled:opacity-50"
            >
              <ArrowRight size={24} />
            </button>
          </div>
        </div>
      )}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className={`w-20 h-20 rounded-[2.5rem] flex items-center justify-center text-[#eed3b1] shadow-2xl transition-all duration-500 hover:scale-110 active:scale-95 ${isOpen ? 'bg-[#1f4529] rotate-90 scale-90' : 'bg-[#47663b] hover:bg-[#1f4529]'}`}
      >
        {isOpen ? <X size={32} /> : <MessageSquare size={32} />}
        {!isOpen && (
          <span className="absolute -top-1 -right-1 w-5 h-5 bg-green-600 rounded-full border-4 border-[#e8ecd7]"></span>
        )}
      </button>
    </div>
  );
};

export default function App() {
  return (
    <div className="min-h-screen selection:bg-[#1f4529] selection:text-[#eed3b1] bg-[#e8ecd7]">
      <Navbar />
      <Hero />
      <Dashboard />
      <Services />
      <ProjectsSection />
      <ExperienceSection />
      <TestimonialsSection />
      <ContactSection />
      
      <footer className="bg-[#1f4529] py-32 text-center text-[#eed3b1]/60 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#47663b] to-transparent opacity-30"></div>
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="flex flex-col items-center gap-12">
            <div className="flex items-center gap-4 group cursor-pointer">
              <div className="w-14 h-14 rounded-2xl bg-[#47663b] flex items-center justify-center text-[#eed3b1] font-black text-2xl shadow-xl shadow-black/20 group-hover:scale-110 transition-transform">H</div>
              <span className="text-3xl font-bold font-outfit tracking-tighter text-[#eed3b1]">Haidee Capili</span>
            </div>
            
            <div className="flex flex-wrap justify-center gap-x-12 gap-y-6">
              {['Home', 'Services', 'Projects', 'Experience', 'Contact'].map(link => (
                <a key={link} href={`#${link.toLowerCase()}`} className="hover:text-[#eed3b1] transition-all text-sm font-black uppercase tracking-[0.3em] hover:-translate-y-1">
                  {link}
                </a>
              ))}
            </div>
            
            <div className="h-px w-full max-w-2xl bg-white/5"></div>
            
            <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
              <p className="text-sm font-bold uppercase tracking-widest text-[#eed3b1]/40 flex items-center gap-2">
                <Globe size={14} /> Based in Philippines • Serving Worldwide
              </p>
              <p className="text-sm font-bold uppercase tracking-widest text-[#eed3b1]/40 flex items-center gap-2">
                <Briefcase size={14} /> Available for full-time & projects
              </p>
            </div>
            
            <p className="text-xs font-black text-[#47663b] uppercase tracking-[0.4em] mt-12">
              © {new Date().getFullYear()} Haidee Capili • Built for Scale
            </p>
          </div>
        </div>
      </footer>
      <PortfolioChat />
    </div>
  );
}
