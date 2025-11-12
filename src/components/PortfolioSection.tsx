import { ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export default function PortfolioSection() {
  useScrollAnimation();
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
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-chart-3/30 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-1/3 left-1/4 w-96 h-96 bg-primary/30 rounded-full blur-3xl animate-pulse-slow" />
      </div>

      <div className="container relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16" data-aos="fade-up">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Nosso <span className="text-gradient">Portfólio</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Conheça alguns dos projetos que transformaram a presença digital dos nossos clientes.
          </p>
        </div>

        {/* Portfolio Grid - Bento Style */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`group glass-strong rounded-2xl overflow-hidden hover-lift transition-all duration-500 ${
                index === 0 || index === 5 ? 'md:col-span-2 md:row-span-2' : ''
              }`}
              data-aos="fade-up"
              data-aos-delay={index * 50}
            >
              {/* Project Image with Gradient Overlay */}
              <div className={`relative overflow-hidden ${
                index === 0 || index === 5 ? 'h-[400px]' : 'h-[280px]'
              }`}>
                {/* Gradient Background instead of image */}
                <div className={`absolute inset-0 transition-all duration-700 group-hover:scale-110 ${
                  index % 6 === 0 ? 'bg-gradient-to-br from-primary via-chart-2 to-chart-3' :
                  index % 6 === 1 ? 'bg-gradient-to-br from-chart-1 via-primary to-chart-4' :
                  index % 6 === 2 ? 'bg-gradient-to-br from-chart-2 via-chart-3 to-primary' :
                  index % 6 === 3 ? 'bg-gradient-to-br from-chart-4 via-primary to-chart-1' :
                  index % 6 === 4 ? 'bg-gradient-to-br from-primary via-chart-4 to-chart-2' :
                  'bg-gradient-to-br from-chart-3 via-chart-1 to-primary'
                } opacity-80 group-hover:opacity-100`} />
                
                {/* Overlay Pattern */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_50%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Content Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent opacity-90 group-hover:opacity-70 transition-opacity duration-500" />
                
                {/* Hover Button */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 transform scale-90 group-hover:scale-100">
                  <Button variant="secondary" size="lg" className="shadow-2xl">
                    <ExternalLink className="w-5 h-5 mr-2" />
                    Ver Projeto
                  </Button>
                </div>

                {/* Category Badge */}
                <div className="absolute top-4 left-4 px-4 py-2 rounded-full bg-background/50 backdrop-blur-md border border-primary/20">
                  <span className="text-xs font-semibold text-primary">{project.category}</span>
                </div>
              </div>

              {/* Project Info */}
              <div className={`p-6 ${index === 0 || index === 5 ? 'lg:p-8' : ''}`}>
                <h3 className={`font-bold mb-3 group-hover:text-primary transition-colors ${
                  index === 0 || index === 5 ? 'text-2xl' : 'text-xl'
                }`}>
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                  {project.description}
                </p>
                
                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="text-xs px-3 py-1.5 rounded-full glass border border-primary/20 text-foreground font-medium hover:border-primary/40 transition-colors"
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
        <div className="mt-16 text-center" data-aos="fade-up" data-aos-delay="400">
          <p className="text-lg text-muted-foreground mb-6">
            Quer ver mais projetos ou discutir o seu?
          </p>
          <Button size="lg" className="glow-lime text-lg px-8" asChild>
            <a href="#contact">Vamos Conversar</a>
          </Button>
        </div>
      </div>
    </section>
  );
}
