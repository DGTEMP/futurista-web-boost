import { Target, Eye, Heart, Rocket } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export default function AboutSection() {
  useScrollAnimation();

  const values = [
    {
      icon: Target,
      title: 'Missão',
      description: 'Transformar ideias em experiências digitais memoráveis que impulsionam o sucesso dos nossos clientes.',
    },
    {
      icon: Eye,
      title: 'Visão',
      description: 'Ser referência em soluções criativas e digitais, reconhecidos pela inovação e qualidade.',
    },
    {
      icon: Heart,
      title: 'Valores',
      description: 'Criatividade, excelência, compromisso, inovação e parceria com nossos clientes.',
    },
    {
      icon: Rocket,
      title: 'Propósito',
      description: 'Elevar marcas através do design, tecnologia e estratégias que realmente funcionam.',
    },
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `radial-gradient(circle, oklch(0.60 0.25 270) 1px, transparent 1px)`,
            backgroundSize: '50px 50px',
          }}
        />
      </div>

      <div className="container relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Sobre a <span className="text-gradient">R9</span>
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Somos uma equipe apaixonada por criar soluções digitais que fazem a diferença. 
            Com anos de experiência em design, desenvolvimento e marketing, ajudamos empresas 
            a alcançarem seu máximo potencial no mundo digital.
          </p>
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <div
                key={index}
                className="glass rounded-xl p-6 hover:glow-purple transition-all duration-300 hover-lift"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {value.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Story Section */}
        <div className="mt-24 max-w-4xl mx-auto glass-strong rounded-2xl p-8 md:p-12" data-aos="zoom-in">
          <h3 className="text-3xl font-bold mb-6 text-center">
            Nossa <span className="text-gradient-purple">História</span>
          </h3>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              A R9 nasceu da paixão por criar experiências digitais únicas e memoráveis. 
              Desde o início, nosso foco sempre foi entregar soluções que não apenas atendem, 
              mas superam as expectativas dos nossos clientes.
            </p>
            <p>
              Com uma equipe multidisciplinar de designers, desenvolvedores e estrategistas, 
              combinamos criatividade, tecnologia e dados para criar projetos que realmente 
              fazem a diferença no mercado.
            </p>
            <p>
              Hoje, orgulhosamente já entregamos mais de 500 projetos para clientes de diversos 
              segmentos, sempre mantendo nosso compromisso com a excelência e inovação.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
