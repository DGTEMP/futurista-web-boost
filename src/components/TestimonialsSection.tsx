import { Star, Quote } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export default function TestimonialsSection() {
  useScrollAnimation();

  const testimonials = [
    {
      name: 'Carlos Silva',
      role: 'CEO, Tech Solutions',
      content: 'A R9 transformou completamente nossa presença digital. O site ficou incrível e as animações deram vida à nossa marca. Recomendo muito!',
      rating: 5,
      image: '/gradient-1.jpg',
    },
    {
      name: 'Ana Paula',
      role: 'Diretora de Marketing, Fashion Co',
      content: 'Trabalho impecável! A equipe entendeu perfeitamente nossa visão e entregou além do esperado. Nosso engajamento nas redes aumentou 250%.',
      rating: 5,
      image: '/hero-bg.jpg',
    },
    {
      name: 'Roberto Mendes',
      role: 'Fundador, Startup Digital',
      content: 'Profissionais excepcionais! Desde o primeiro contato até a entrega final, tudo foi perfeito. O app mobile ficou fantástico.',
      rating: 5,
      image: '/tech-bg.jpg',
    },
    {
      name: 'Mariana Costa',
      role: 'Gerente de Projetos, Innovation Hub',
      content: 'A R9 é sinônimo de qualidade e criatividade. Cada projeto é tratado com atenção aos detalhes e muita dedicação.',
      rating: 5,
      image: '/gradient-1.jpg',
    },
    {
      name: 'Pedro Santos',
      role: 'Owner, Restaurant Group',
      content: 'O sistema de delivery desenvolvido pela R9 revolucionou nosso negócio. Interface intuitiva e funcionalidades perfeitas!',
      rating: 5,
      image: '/hero-bg.jpg',
    },
    {
      name: 'Julia Fernandes',
      role: 'CMO, Beauty Brand',
      content: 'Parceria incrível! A identidade visual criada pela R9 elevou nossa marca a outro nível. Superou todas as expectativas.',
      rating: 5,
      image: '/tech-bg.jpg',
    },
  ];

  return (
    <section className="py-24 bg-card/30 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `radial-gradient(circle, hsl(var(--primary)) 1px, transparent 1px)`,
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      <div className="container relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            O Que Dizem <span className="text-gradient">Nossos Clientes</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Histórias reais de sucesso e transformação digital.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="glass-strong rounded-xl p-6 hover:glow-cyan transition-all duration-300 hover-lift"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              {/* Quote Icon */}
              <Quote className="w-8 h-8 text-primary/30 mb-4" />

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-primary text-primary"
                  />
                ))}
              </div>

              {/* Content */}
              <p className="text-foreground/90 mb-6 leading-relaxed">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div
                  className="w-12 h-12 rounded-full bg-cover bg-center border-2 border-primary/20"
                  style={{ backgroundImage: `url(${testimonial.image})` }}
                />
                <div>
                  <div className="font-semibold text-foreground">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {testimonial.role}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
