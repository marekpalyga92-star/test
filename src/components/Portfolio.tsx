import { ExternalLink, ArrowRight } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Portfolio() {
  const projects = [
    {
      title: 'E-commerce Lux',
      category: 'Sklep online',
      description: 'Platforma e-commerce dla marki premium z integracją płatności i systemem CRM.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80',
      tags: ['React', 'Node.js', 'Stripe'],
      color: 'from-orange-400 to-rose-500',
    },
    {
      title: 'TechStart SaaS',
      category: 'Aplikacja webowa',
      description: 'Aplikacja SaaS do zarządzania projektami dla zespołów zdalnych.',
      image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&q=80',
      tags: ['TypeScript', 'Next.js', 'PostgreSQL'],
      color: 'from-purple-500 to-pink-500',
    },
    {
      title: 'Wellness Studio',
      category: 'Strona firmowa',
      description: 'Elegancka strona dla studia fitness z systemem rezerwacji online.',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&q=80',
      tags: ['Webflow', 'UI/UX', 'Booking'],
      color: 'from-indigo-500 to-purple-500',
    },
    {
      title: 'FoodHub Delivery',
      category: 'Aplikacja mobilna',
      description: 'Aplikacja PWA do zamawiania jedzenia z restauracji w okolicy.',
      image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&q=80',
      tags: ['PWA', 'Firebase', 'Maps API'],
      color: 'from-rose-400 to-orange-500',
    },
    {
      title: 'Portfolio Creative',
      category: 'Strona portfolio',
      description: 'Minimalistyczne portfolio dla fotografa z galerią i kontaktem.',
      image: 'https://images.unsplash.com/photo-1542744094-3a31f272c490?w=800&q=80',
      tags: ['React', 'Framer Motion', 'Lightbox'],
      color: 'from-orange-500 to-purple-600',
    },
    {
      title: 'FinTech Dashboard',
      category: 'Panel administracyjny',
      description: 'Zaawansowany dashboard do monitorowania finansów i analityki biznesowej.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
      tags: ['React', 'D3.js', 'REST API'],
      color: 'from-purple-600 to-indigo-700',
    },
  ];

  return (
    <section id="portfolio" className="relative py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20 mb-6 shadow-lg">
            <span className="text-sm text-orange-300">Portfolio</span>
          </div>
          <h2 className="text-4xl md:text-5xl mb-6 text-white">
            Projekty, którymi się{' '}
            <span className="bg-gradient-to-r from-orange-300 via-pink-300 to-purple-300 bg-clip-text text-transparent">
              szczycimy
            </span>
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            Zobacz nasze ostatnie realizacje i przekonaj się o jakości naszej pracy
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 overflow-hidden hover:border-white/20 transition-all duration-300"
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <ImageWithFallback
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/50 to-transparent" />
                
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-indigo-950 via-purple-950/90 to-orange-900/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="flex gap-3">
                    <button className="p-3 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 hover:bg-white/20 transition-colors">
                      <ExternalLink className="w-5 h-5 text-white" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className={`inline-flex px-3 py-1 bg-gradient-to-r ${project.color} bg-opacity-10 rounded-full mb-3 shadow-md`}>
                  <span className="text-xs text-white">{project.category}</span>
                </div>

                <h3 className="text-xl mb-2 text-white group-hover:text-orange-300 transition-colors">
                  {project.title}
                </h3>

                <p className="text-white/70 text-sm mb-4">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-white/5 rounded-lg text-xs text-white/80 border border-white/10"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <button className="group inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-orange-500 to-purple-600 text-white rounded-xl hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-300">
            Zobacz wszystkie projekty
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
}