import { ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function PortfolioSection() {
  const projects = [
    {
      title: 'Campanha Digital - Tech Startup',
      category: 'Motion Design & Marketing',
      description: 'Série de vídeos animados para redes sociais que aumentaram o engajamento em 300%.',
      image: '/gradient-1.jpg',
      tags: ['Motion', 'Social Media', 'Branding'],
    },
    {
      title: 'E-commerce Moderno',
      category: 'Desenvolvimento Web',
      description: 'Plataforma de e-commerce completa com integração de pagamentos e gestão de estoque.',
      image: '/tech-bg.jpg',
      tags: ['React', 'E-commerce', 'UX/UI'],
    },
    {
      title: 'Identidade Visual Corporativa',
      category: 'Design Gráfico',
      description: 'Rebranding completo incluindo logo, paleta de cores e manual de identidade visual.',
      image: '/hero-bg.jpg',
      tags: ['Branding', 'Design', 'Identidade'],
    },
    {
      title: 'App de Delivery',
      category: 'Mobile Development',
      description: 'Aplicativo mobile para delivery com rastreamento em tempo real e pagamento integrado.',
      image: '/gradient-1.jpg',
      tags: ['React Native', 'Mobile', 'UX'],
    },
    {
      title: 'Landing Page Conversão',
      category: 'Web Design & Development',
      description: 'Landing page otimizada que alcançou 45% de taxa de conversão.',
      image: '/tech-bg.jpg',
      tags: ['Landing Page', 'SEO', 'Conversão'],
    },
    {
      title: 'Vídeos Institucionais',
      category: 'Motion Design',
      description: 'Série de vídeos institucionais com animações 3D e motion graphics.',
      image: '/hero-bg.jpg',
      tags: ['3D', 'Motion', 'Institucional'],
    },
  ];

  return (
    <section id="portfolio" className="py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-chart-3/30 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 left-1/4 w-96 h-96 bg-primary/30 rounded-full blur-3xl" />
      </div>

      <div className="container relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Nosso <span className="text-gradient">Portfólio</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Conheça alguns dos projetos que transformaram a presença digital dos nossos clientes.
          </p>
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group glass rounded-xl overflow-hidden hover:glow-lime transition-all duration-300"
              data-aos="zoom-in"
              data-aos-delay={index * 100}
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <div
                  className="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                  style={{ backgroundImage: `url(${project.image})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" />
                
                {/* Overlay on Hover */}
                <div className="absolute inset-0 bg-primary/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <Button variant="secondary" size="sm">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Ver Projeto
                  </Button>
                </div>
              </div>

              {/* Project Info */}
              <div className="p-6">
                <div className="text-sm text-primary font-medium mb-2">{project.category}</div>
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">{project.description}</p>
                
                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <p className="text-lg text-muted-foreground mb-6">
            Quer ver mais projetos ou discutir o seu?
          </p>
          <Button size="lg" className="glow-lime" asChild>
            <a href="#contact">Vamos Conversar</a>
          </Button>
        </div>
      </div>
    </section>
  );
}
