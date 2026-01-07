import { Globe, Smartphone, ShoppingCart, Rocket, Palette, Search } from 'lucide-react';

export function Services() {
  const services = [
    {
      icon: Globe,
      title: 'Strony internetowe',
      description: 'Responsywne strony WWW dostosowane do Twojej marki i celów biznesowych.',
      features: ['Design na miarę', 'SEO friendly', 'Szybkie ładowanie'],
      color: 'from-orange-400 to-rose-500',
    },
    {
      icon: ShoppingCart,
      title: 'Sklepy online',
      description: 'Kompleksowe rozwiązania e-commerce, które zwiększają konwersję.',
      features: ['Integracje płatności', 'Panel zarządzania', 'Analityka sprzedaży'],
      color: 'from-purple-500 to-pink-500',
    },
    {
      icon: Smartphone,
      title: 'Aplikacje webowe',
      description: 'Nowoczesne aplikacje PWA działające jak natywne.',
      features: ['React & TypeScript', 'Offline mode', 'Push notifications'],
      color: 'from-indigo-500 to-purple-500',
    },
    {
      icon: Palette,
      title: 'UI/UX Design',
      description: 'Projekty interfejsów, które zachwycają użytkowników.',
      features: ['User research', 'Prototypy', 'Design system'],
      color: 'from-rose-400 to-orange-500',
    },
    {
      icon: Search,
      title: 'SEO & Marketing',
      description: 'Optymalizacja i strategie marketingowe dla lepszej widoczności.',
      features: ['On-page SEO', 'Google Analytics', 'Content strategy'],
      color: 'from-orange-500 to-purple-600',
    },
    {
      icon: Rocket,
      title: 'Konsulting techniczny',
      description: 'Doradztwo w zakresie architektury i optymalizacji projektów.',
      features: ['Code review', 'Performance audit', 'Tech stack'],
      color: 'from-purple-600 to-indigo-700',
    },
  ];

  return (
    <section id="services" className="relative py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20 mb-6 shadow-lg">
            <span className="text-sm text-orange-300">Nasze usługi</span>
          </div>
          <h2 className="text-4xl md:text-5xl mb-6 text-white">
            Kompleksowe rozwiązania{' '}
            <span className="bg-gradient-to-r from-orange-300 via-pink-300 to-purple-300 bg-clip-text text-transparent">
              dla Twojego biznesu
            </span>
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            Od pomysłu przez projekt, aż po wdrożenie i wsparcie – zajmiemy się wszystkim
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative p-8 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:bg-white/10 transition-all duration-300"
            >
              {/* Gradient overlay on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300`} />
              
              <div className="relative">
                <div className={`inline-flex p-3 bg-gradient-to-br ${service.color} rounded-xl mb-6 shadow-lg`}>
                  <service.icon className="w-6 h-6 text-white" />
                </div>

                <h3 className="text-2xl mb-3 text-white">
                  {service.title}
                </h3>

                <p className="text-white/70 mb-6">
                  {service.description}
                </p>

                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-white/80">
                      <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${service.color}`} />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}