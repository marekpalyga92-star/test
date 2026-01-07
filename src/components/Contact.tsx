import { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock submission
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', phone: '', service: '', message: '' });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'kontakt@webcraft.pl',
      link: 'mailto:kontakt@webcraft.pl',
    },
    {
      icon: Phone,
      title: 'Telefon',
      value: '+48 123 456 789',
      link: 'tel:+48123456789',
    },
    {
      icon: MapPin,
      title: 'Adres',
      value: 'ul. Nowoczesna 15, 00-001 Warszawa',
      link: '#',
    },
  ];

  return (
    <section id="contact" className="relative py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20 mb-6 shadow-lg">
            <span className="text-sm text-orange-300">Kontakt</span>
          </div>
          <h2 className="text-4xl md:text-5xl mb-6 text-white">
            Rozpocznij{' '}
            <span className="bg-gradient-to-r from-orange-300 via-pink-300 to-purple-300 bg-clip-text text-transparent">
              swój projekt
            </span>
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            Skontaktuj się z nami, aby omówić szczegóły projektu. Odpowiemy w ciągu 24 godzin
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <div className="mb-12">
              <h3 className="text-2xl mb-6 text-white">
                Dane kontaktowe
              </h3>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <a
                    key={index}
                    href={info.link}
                    className="flex items-start gap-4 p-4 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:bg-white/10 transition-all duration-300 group"
                  >
                    <div className="p-3 bg-gradient-to-br from-orange-500 to-purple-600 rounded-lg group-hover:scale-110 transition-transform shadow-lg">
                      <info.icon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <div className="text-sm text-white/70 mb-1">{info.title}</div>
                      <div className="text-white">{info.value}</div>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            <div className="p-8 bg-gradient-to-br from-orange-600/10 to-purple-600/10 rounded-2xl border border-white/10">
              <h3 className="text-xl mb-4 text-white">
                Godziny pracy
              </h3>
              <div className="space-y-2 text-white/80">
                <div className="flex justify-between">
                  <span>Poniedziałek - Piątek</span>
                  <span>9:00 - 18:00</span>
                </div>
                <div className="flex justify-between">
                  <span>Sobota</span>
                  <span>10:00 - 14:00</span>
                </div>
                <div className="flex justify-between text-white/60">
                  <span>Niedziela</span>
                  <span>Zamknięte</span>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm mb-2 text-white/80">
                  Imię i nazwisko *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 text-white placeholder-white/50 focus:border-orange-500 focus:outline-none transition-colors"
                  placeholder="Jan Kowalski"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="email" className="block text-sm mb-2 text-white/80">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 text-white placeholder-white/50 focus:border-orange-500 focus:outline-none transition-colors"
                    placeholder="jan@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm mb-2 text-white/80">
                    Telefon
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 text-white placeholder-white/50 focus:border-orange-500 focus:outline-none transition-colors"
                    placeholder="+48 123 456 789"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="service" className="block text-sm mb-2 text-white/80">
                  Rodzaj usługi *
                </label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 text-white focus:border-orange-500 focus:outline-none transition-colors"
                >
                  <option value="" className="bg-slate-900">Wybierz usługę</option>
                  <option value="website" className="bg-slate-900">Strona internetowa</option>
                  <option value="ecommerce" className="bg-slate-900">Sklep online</option>
                  <option value="webapp" className="bg-slate-900">Aplikacja webowa</option>
                  <option value="design" className="bg-slate-900">UI/UX Design</option>
                  <option value="seo" className="bg-slate-900">SEO & Marketing</option>
                  <option value="consulting" className="bg-slate-900">Konsulting</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm mb-2 text-white/80">
                  Wiadomość *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 text-white placeholder-white/50 focus:border-orange-500 focus:outline-none transition-colors resize-none"
                  placeholder="Opowiedz nam o swoim projekcie..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitted}
                className="w-full px-8 py-4 bg-gradient-to-r from-orange-500 to-purple-600 text-white rounded-xl hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitted ? (
                  <>
                    <CheckCircle className="w-5 h-5" />
                    Wysłano pomyślnie!
                  </>
                ) : (
                  <>
                    Wyślij wiadomość
                    <Send className="w-5 h-5" />
                  </>
                )}
              </button>

              <p className="text-sm text-white/60 text-center">
                * Pola wymagane. Twoje dane są bezpieczne i nie będą udostępniane osobom trzecim.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}