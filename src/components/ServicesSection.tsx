import { Video, Code, Palette, Megaphone, Smartphone, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function ServicesSection() {
  const services = [
    {
      icon: Video,
      title: 'Motion Design',
      description: 'Criação de animações e vídeos curtos para reels, stories e ads que capturam atenção e engajam seu público.',
      features: ['Animações 2D/3D', 'Motion Graphics', 'Video Editing', 'Efeitos Visuais'],
      color: 'primary',
    },
    {
      icon: Code,
      title: 'Desenvolvimento Web',
      description: 'Sites e aplicações web modernas, responsivas e otimizadas para performance e conversão.',
      features: ['React & Next.js', 'Landing Pages', 'E-commerce', 'Web Apps'],
      color: 'chart-2',
    },
    {
      icon: Palette,
      title: 'Design Gráfico',
      description: 'Identidade visual completa e materiais gráficos que refletem a essência da sua marca.',
      features: ['Branding', 'UI/UX Design', 'Social Media', 'Materiais Impressos'],
      color: 'chart-3',
    },
    {
      icon: Megaphone,
      title: 'Marketing Digital',
      description: 'Estratégias de marketing digital para aumentar sua presença online e gerar resultados.',
      features: ['Social Media', 'Google Ads', 'SEO', 'Content Marketing'],
      color: 'chart-4',
    },
    {
      icon: Smartphone,
      title: 'Aplicativos Mobile',
      description: 'Desenvolvimento de aplicativos nativos e híbridos para iOS e Android.',
      features: ['React Native', 'Flutter', 'App Design', 'App Store Deploy'],
      color: 'primary',
    },
    {
      icon: Globe,
      title: 'Consultoria Digital',
      description: 'Orientação estratégica para transformação digital e otimização de processos.',
      features: ['Estratégia Digital', 'UX Research', 'Tech Stack', 'Growth Hacking'],
      color: 'chart-2',
    },
  ];

  return (
    <section id="services" className="py-24 bg-card/30 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `radial-gradient(circle, hsl(var(--primary)) 1px, transparent 1px)`,
            backgroundSize: '30px 30px',
          }}
        />
      </div>

      <div className="container relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Nossos <span className="text-gradient">Serviços</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Soluções completas e personalizadas para elevar sua presença digital e impulsionar seus resultados.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="glass rounded-xl p-6 hover:glow-lime transition-all duration-300 group"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                {/* Icon */}
                <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Icon className="w-7 h-7 text-primary" />
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold mb-3">{service.title}</h3>

                {/* Description */}
                <p className="text-muted-foreground mb-4">{service.description}</p>

                {/* Features */}
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  Saiba Mais
                </Button>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <p className="text-lg text-muted-foreground mb-6">
            Não encontrou o que procura? Entre em contato para soluções personalizadas.
          </p>
          <Button size="lg" className="glow-lime" asChild>
            <a href="#contact">Fale Conosco</a>
          </Button>
        </div>
      </div>
    </section>
  );
}
