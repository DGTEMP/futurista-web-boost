import { Button } from '@/components/ui/button';
import { ArrowRight, Sparkles, Zap } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export default function HeroSection() {
  useScrollAnimation();

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-chart-2/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-chart-3/10 rounded-full blur-3xl animate-pulse-slow" />
      </div>

      {/* Content */}
      <div className="container relative z-10 pt-20">
        <div className="max-w-5xl mx-auto text-center">
          {/* Badge */}
          <div
            className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full mb-8"
            data-aos="fade-down"
          >
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium">Soluções Criativas & Digitais</span>
          </div>

          {/* Main Heading */}
          <h1
            className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-8 leading-tight"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Transforme Ideias em{' '}
            <span className="text-gradient">Realidade Digital</span>
          </h1>

          {/* Description */}
          <p
            className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Motion design, desenvolvimento web e soluções criativas que elevam sua marca 
            e geram resultados reais.
          </p>

          {/* CTA Buttons */}
          <div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <Button size="lg" className="glow-lime group text-lg px-8" asChild>
              <a href="#generator">
                Criar Proposta Grátis
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8" asChild>
              <a href="#portfolio">
                <Zap className="mr-2 w-5 h-5" />
                Ver Nosso Trabalho
              </a>
            </Button>
          </div>

          {/* Trust Indicators */}
          <div
            className="mt-16 flex flex-wrap justify-center gap-8 text-sm text-muted-foreground"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span>200+ Clientes Satisfeitos</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span>500+ Projetos Entregues</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span>98% de Satisfação</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-2 bg-primary rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
}
