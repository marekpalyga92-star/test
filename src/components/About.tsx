import { Users, Target, Award, Heart } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function About() {
  const values = [
    {
      icon: Target,
      title: 'Skupienie na celu',
      description: 'Każdy projekt tworzymy z myślą o Twoich celach biznesowych i potrzebach użytkowników.',
    },
    {
      icon: Award,
      title: 'Najwyższa jakość',
      description: 'Używamy najnowszych technologii i best practices, aby dostarczyć kod najwyższej jakości.',
    },
    {
      icon: Users,
      title: 'Transparentna współpraca',
      description: 'Jesteś na bieżąco informowany o postępach projektu. Twój feedback jest dla nas kluczowy.',
    },
    {
      icon: Heart,
      title: 'Pasja do tworzenia',
      description: 'Kochamy to, co robimy. Każdy projekt traktujemy indywidualnie i angażujemy się w 100%.',
    },
  ];

  const team = [
    {
      name: 'Anna Kowalska',
      role: 'CEO & Lead Designer',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80',
    },
    {
      name: 'Piotr Nowak',
      role: 'CTO & Full-Stack Developer',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80',
    },
    {
      name: 'Karolina Wiśniewska',
      role: 'UI/UX Designer',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80',
    },
    {
      name: 'Michał Lewandowski',
      role: 'Frontend Developer',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80',
    },
  ];

  return (
    <section id="about" className="relative py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20 mb-6 shadow-lg">
            <span className="text-sm text-orange-300">O nas</span>
          </div>
          <h2 className="text-4xl md:text-5xl mb-6 text-white">
            Poznaj zespół{' '}
            <span className="bg-gradient-to-r from-orange-300 via-pink-300 to-purple-300 bg-clip-text text-transparent">
              WebCraft
            </span>
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            Jesteśmy grupą pasjonatów, którzy łączą kreatywność z technologią, aby tworzyć wyjątkowe doświadczenia cyfrowe
          </p>
        </div>

        {/* Values */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
          {values.map((value, index) => (
            <div
              key={index}
              className="p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 text-center"
            >
              <div className="inline-flex p-4 bg-gradient-to-br from-orange-500 to-purple-600 rounded-xl mb-4 shadow-lg">
                <value.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg mb-2 text-white">
                {value.title}
              </h3>
              <p className="text-sm text-white/70">
                {value.description}
              </p>
            </div>
          ))}
        </div>

        {/* Team Grid */}
        <div className="mb-12">
          <h3 className="text-3xl mb-12 text-center text-white">
            Nasz zespół
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="group">
                <div className="relative mb-4 overflow-hidden rounded-2xl">
                  <ImageWithFallback
                    src={member.image}
                    alt={member.name}
                    className="w-full aspect-square object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-indigo-950 via-transparent to-transparent opacity-60" />
                </div>
                <h4 className="text-lg text-white mb-1">
                  {member.name}
                </h4>
                <p className="text-sm text-white/70">
                  {member.role}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Story Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mt-24">
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-orange-500/20 to-purple-600/20 rounded-3xl blur-2xl" />
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1700561570982-5f845601c505?w=800&q=80"
              alt="Team working"
              className="relative rounded-2xl w-full"
            />
          </div>

          <div>
            <h3 className="text-3xl mb-6 text-white">
              Nasza historia
            </h3>
            <p className="text-white/70 mb-4">
              WebCraft powstał z pasji do tworzenia wyjątkowych doświadczeń cyfrowych. 
              Od 5 lat pomagamy firmom z różnych branż osiągać sukces w internecie.
            </p>
            <p className="text-white/70 mb-4">
              Nasz zespół składa się z doświadczonych projektantów, programistów i specjalistów od marketingu. 
              Łączymy kreatywność z technologią, aby dostarczać rozwiązania, które nie tylko wyglądają świetnie, 
              ale przede wszystkim generują wymierne rezultaty.
            </p>
            <p className="text-white/70 mb-6">
              Zrealizowaliśmy ponad 150 projektów dla klientów z Polski i zagranicy. 
              Każdy projekt traktujemy indywidualnie, dbając o najmniejsze detale i zawsze 
              dążąc do przekraczania oczekiwań naszych klientów.
            </p>

            <div className="grid grid-cols-3 gap-6">
              <div>
                <div className="text-3xl bg-gradient-to-r from-orange-300 via-pink-300 to-purple-300 bg-clip-text text-transparent mb-1">
                  150+
                </div>
                <div className="text-sm text-white/70">Projektów</div>
              </div>
              <div>
                <div className="text-3xl bg-gradient-to-r from-orange-300 via-pink-300 to-purple-300 bg-clip-text text-transparent mb-1">
                  98%
                </div>
                <div className="text-sm text-white/70">Satysfakcja</div>
              </div>
              <div>
                <div className="text-3xl bg-gradient-to-r from-orange-300 via-pink-300 to-purple-300 bg-clip-text text-transparent mb-1">
                  5+
                </div>
                <div className="text-sm text-white/70">Lat na rynku</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}