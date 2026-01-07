import { useState, useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';

export function VisionSection() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  const pathRef = useRef<SVGPathElement>(null);
  
  // Scroll handler
  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const sectionHeight = rect.height;

      // Calculate progress - start animation only when section title is visible
      const start = windowHeight * 0.7; // Start later
      const end = -sectionHeight;
      const rawProgress = Math.max(0, Math.min(1, (start - rect.top) / (start - end)));
      
      // Speed up the ribbon animation once it starts
      const progress = Math.min(1, rawProgress * 1.5);
      
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Calculate path length for stroke animation
  useEffect(() => {
    if (pathRef.current) {
      const pathLength = pathRef.current.getTotalLength();
      pathRef.current.style.strokeDasharray = `${pathLength}`;
      pathRef.current.style.strokeDashoffset = `${pathLength * (1 - scrollProgress)}`;
    }
  }, [scrollProgress]);

  // Animation values
  const titleOpacity = Math.min(1, scrollProgress * 2);
  const descOpacity = Math.min(1, Math.max(0, (scrollProgress - 0.1) * 2));
  
  // Video expansion animation - starts at 80% progress
  const videoScaleProgress = Math.max(0, Math.min(1, (scrollProgress - 0.8) / 0.2));
  const videoScale = 1 + (videoScaleProgress * 1.0); // Scale from 1 to 2.0 (reduced from 2.5)

  return (
    <section 
      ref={sectionRef}
      className="relative bg-slate-100 overflow-visible"
      style={{
        minHeight: '100vh',
        paddingTop: '5rem',
        paddingBottom: videoScaleProgress > 0 ? `${5 + (videoScaleProgress * 30)}rem` : '5rem',
      }}
    >
      {/* 2D Ribbon SVG - ABSOLUTELY POSITIONED - doesn't move */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <svg 
          className="w-full"
          style={{ height: '100vh' }}
          viewBox="0 0 1200 800"
          preserveAspectRatio="xMidYMid slice"
        >
          <defs>
            <linearGradient id="ribbonGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#4f46e5" />
              <stop offset="50%" stopColor="#6366f1" />
              <stop offset="100%" stopColor="#3b82f6" />
            </linearGradient>
          </defs>
          
          {/* Ribbon path - dives down, loops (left→up→right), then zigzags to right edge */}
          <path
            ref={pathRef}
            d="M 0 100 Q 100 180, 180 280 Q 240 360, 260 450 Q 270 520, 240 570 Q 200 620, 140 600 Q 80 580, 60 520 Q 40 460, 70 400 Q 120 340, 200 350 Q 280 360, 360 420 Q 440 480, 540 460 Q 620 440, 700 480 Q 760 510, 820 500 Q 880 490, 940 520 Q 1000 550, 1080 540 Q 1160 530, 1200 550"
            fill="none"
            stroke="url(#ribbonGradient)"
            strokeWidth="30"
            strokeLinecap="round"
            style={{
              transition: 'stroke-dashoffset 0.1s linear',
            }}
          />
          
          {/* Shadow/glow effect */}
          <path
            d="M 0 100 Q 100 180, 180 280 Q 240 360, 260 450 Q 270 520, 240 570 Q 200 620, 140 600 Q 80 580, 60 520 Q 40 460, 70 400 Q 120 340, 200 350 Q 280 360, 360 420 Q 440 480, 540 460 Q 620 440, 700 480 Q 760 510, 820 500 Q 880 490, 940 520 Q 1000 550, 1080 540 Q 1160 530, 1200 550"
            fill="none"
            stroke="url(#ribbonGradient)"
            strokeWidth="40"
            strokeLinecap="round"
            opacity="0.2"
            filter="blur(15px)"
            style={{
              strokeDasharray: pathRef.current?.getTotalLength() || 0,
              strokeDashoffset: pathRef.current ? pathRef.current.getTotalLength() * (1 - scrollProgress) : 0,
            }}
          />
        </svg>
      </div>

      {/* Content Container */}
      <div className="relative z-10 min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          
          {/* Title - Left Side, Large */}
          <div 
            className="mb-24"
            style={{
              opacity: titleOpacity,
              transform: `translateY(${(1 - titleOpacity) * 50}px)`,
            }}
          >
            <h2 className="text-7xl sm:text-8xl lg:text-9xl font-bold text-slate-900 leading-[1.1] w-full">
              Beyond Visions<br />
              Within Reach
            </h2>
          </div>

          {/* Two Column Layout for Video and Description */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            
            {/* Left Column - Video */}
            <div 
              className="w-full max-w-lg"
              style={{
                transform: `translate3d(0,0,0) scale(${videoScale})`,
                transformOrigin: 'left top',
                willChange: videoScaleProgress > 0 ? 'transform' : 'auto',
                zIndex: videoScaleProgress > 0 ? 50 : 1,
              }}
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-indigo-600">
                {/* Video Element */}
                <div className="relative aspect-video">
                  <video 
                    className="w-full h-full object-cover"
                    autoPlay
                    loop
                    muted
                    playsInline
                  >
                    {/* Add your video source here */}
                    {/* <source src="/path/to/video.mp4" type="video/mp4" /> */}
                  </video>

                  {/* Fallback gradient */}
                  <div className="absolute inset-0 bg-gradient-to-br from-indigo-500 via-purple-500 to-blue-600 mix-blend-multiply opacity-60" />
                  
                  {/* Placeholder content */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-white text-center">
                      <div className="text-2xl font-bold mb-2">Your Showreel</div>
                      <div className="text-sm opacity-80">Add video source above</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Description and CTA */}
            <div 
              className="flex flex-col justify-center space-y-8"
              style={{
                opacity: descOpacity * (1 - videoScaleProgress),
              }}
            >
              <p className="text-base sm:text-lg text-slate-900 leading-relaxed">
                Lusion is a digital production studio that brings your ideas to life through visually captivating designs and interactive experiences. With our talented team, we push the boundaries by solving complex problems, delivering tailored solutions that exceed expectations and engage audiences.
              </p>

              <div>
                <button className="group inline-flex items-center gap-3 px-6 py-3 bg-white text-slate-900 rounded-full border border-slate-900 hover:bg-slate-900 hover:text-white transition-colors shadow-sm">
                  <span className="w-2 h-2 bg-slate-900 group-hover:bg-white rounded-full transition-colors" />
                  <span className="font-medium text-sm tracking-wider">ABOUT US</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}