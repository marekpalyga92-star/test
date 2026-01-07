import { ArrowRight, Sparkles, Zap, Code } from 'lucide-react';
import { useState, useEffect } from 'react';

export function Hero() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const heroSection = document.getElementById('home');
      if (!heroSection) return;

      const heroHeight = heroSection.offsetHeight;
      const scrolled = window.scrollY;
      
      // Oblicz progress od 0 do 1 na podstawie scroll przez sekcję hero
      const progress = Math.min(scrolled / (heroHeight || 1), 1);
      setScrollProgress(isNaN(progress) ? 0 : progress);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial call
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Kula powiększa się od 400px do 150vmax (wypełnia cały ekran)
  const sphereScale = 1 + (scrollProgress * 15);
  const sphereOpacity = 1 - (scrollProgress * 0.3);

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToPortfolio = () => {
    const element = document.getElementById('portfolio');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* SVG Filter for Fine Grain Effect */}
      <svg className="absolute w-0 h-0">
        <defs>
          <filter id="grainy">
            <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="3" stitchTiles="stitch"/>
            <feColorMatrix type="saturate" values="0"/>
          </filter>
        </defs>
      </svg>

      {/* Grainy Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-400/80 via-purple-600/70 to-slate-800" />
      
      {/* Grain overlay */}
      <div className="absolute inset-0 opacity-50" style={{ filter: 'url(#grainy)', mixBlendMode: 'overlay' }} />
      
      {/* Additional gradient overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-tr from-rose-400/30 via-transparent to-indigo-900/40" />

      {/* Animated Sphere with Glassmorphism */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div 
          className="sphere-container"
          style={{
            transform: `scale(${sphereScale})`,
            opacity: sphereOpacity,
            transition: 'transform 0.1s ease-out, opacity 0.3s ease-out',
          }}
        >
          {/* Sphere with backdrop blur (glassmorphism effect) */}
          <div className="relative w-[400px] h-[400px] rounded-full overflow-hidden">
            {/* Animated gradient background inside sphere */}
            <div className="absolute inset-0 animate-gradient-shift bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600" />
            <div className="absolute inset-0 animate-gradient-shift-reverse bg-gradient-to-tl from-indigo-600 via-violet-600 to-fuchsia-600 opacity-70" />
            
            {/* Glassmorphism blur overlay */}
            <div className="absolute inset-0 backdrop-blur-3xl bg-white/5" />
            
            {/* Subtle shine effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-transparent" />
          </div>
        </div>
      </div>

      {/* Gradient transition to next section */}
      <div 
        className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-slate-950 pointer-events-none"
        style={{
          opacity: scrollProgress * 2,
        }}
      />

      {/* Floating Icons */}
      <div className="absolute top-32 right-20 hidden lg:block" style={{ opacity: 1 - scrollProgress }}>
        <div className="p-4 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 shadow-lg">
          <Sparkles className="w-8 h-8 text-orange-200" />
        </div>
      </div>

      <div className="absolute bottom-32 left-20 hidden lg:block" style={{ opacity: 1 - scrollProgress }}>
        <div className="p-4 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 shadow-lg">
          <Zap className="w-8 h-8 text-purple-200" />
        </div>
      </div>

      <div className="absolute top-1/2 right-40 hidden lg:block" style={{ opacity: 1 - scrollProgress }}>
        <div className="p-4 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 shadow-lg">
          <Code className="w-8 h-8 text-indigo-200" />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32" style={{ opacity: 1 - scrollProgress }}>
        <div className="text-center">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20 mb-8 shadow-lg">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              <span className="text-sm text-white/90">
                Dostępni dla nowych projektów
              </span>
            </div>
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl mb-6 text-white drop-shadow-lg">
            Tworzymy strony,
            <br />
            które{' '}
            <span className="bg-gradient-to-r from-orange-200 via-pink-200 to-purple-200 bg-clip-text text-transparent">
              sprzedają
            </span>
          </h1>

          <p className="text-xl text-white/80 max-w-3xl mx-auto mb-12 drop-shadow">
            Nowoczesne strony internetowe i aplikacje webowe, które przyciągają uwagę
            i generują wyniki. Projektujemy, kodujemy i optymalizujemy dla Twojego sukcesu.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={scrollToContact}
              className="group px-8 py-4 bg-white/90 text-purple-900 rounded-xl hover:bg-white hover:shadow-2xl transition-all duration-300 flex items-center gap-2"
            >
              Zacznij projekt
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              onClick={scrollToPortfolio}
              className="px-8 py-4 bg-white/10 backdrop-blur-md text-white rounded-xl border border-white/30 hover:bg-white/20 transition-all duration-300"
            >
              Zobacz portfolio
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-24">
            {[
              { number: '150+', label: 'Zrealizowanych projektów' },
              { number: '98%', label: 'Zadowolonych klientów' },
              { number: '5+', label: 'Lat doświadczenia' },
              { number: '24/7', label: 'Wsparcie techniczne' },
            ].map((stat, index) => (
              <div key={index} className="p-6 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 shadow-lg">
                <div className="text-3xl font-bold text-white mb-2">
                  {stat.number}
                </div>
                <div className="text-sm text-white/70">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}