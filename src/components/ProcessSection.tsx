import { MessageSquare, Lightbulb, Code2, Rocket, CheckCircle2, RefreshCw } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export default function ProcessSection() {
  useScrollAnimation();

  const steps = [
    {
      icon: MessageSquare,
      number: '01',
      title: 'Briefing & Planejamento',
      description: 'Entendemos seu negócio, objetivos e público-alvo para criar a estratégia perfeita.',
      color: 'primary',
    },
    {
      icon: Lightbulb,
      number: '02',
      title: 'Design & Criação',
      description: 'Desenvolvemos conceitos visuais e protótipos alinhados com sua identidade.',
      color: 'chart-2',
    },
    {
      icon: Code2,
      number: '03',
      title: 'Desenvolvimento',
      description: 'Transformamos o design em realidade com código limpo e tecnologias modernas.',
      color: 'chart-3',
    },
    {
      icon: CheckCircle2,
      number: '04',
      title: 'Testes & Validação',
      description: 'Garantimos qualidade através de testes rigorosos em múltiplos dispositivos.',
      color: 'chart-4',
    },
    {
      icon: Rocket,
      number: '05',
      title: 'Lançamento',
      description: 'Publicamos seu projeto e garantimos um lançamento suave e bem-sucedido.',
      color: 'primary',
    },
    {
      icon: RefreshCw,
      number: '06',
      title: 'Suporte & Evolução',
      description: 'Oferecemos suporte contínuo e atualizações para manter seu projeto sempre atual.',
      color: 'chart-2',
    },
  ];

  return (
    <section id="process" className="py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-chart-2/30 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/3 w-96 h-96 bg-primary/30 rounded-full blur-3xl" />
      </div>

      <div className="container relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Nosso <span className="text-gradient">Processo</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Um método testado e aprovado que garante resultados excepcionais em cada projeto.
          </p>
        </div>

        {/* Process Steps */}
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div
                  key={index}
                  className="relative"
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                >
                  {/* Connecting Line (not for last items in row) */}
                  {(index + 1) % 3 !== 0 && index < steps.length - 1 && (
                    <div className="hidden lg:block absolute top-1/4 -right-4 w-8 h-0.5 bg-gradient-to-r from-primary/50 to-transparent" />
                  )}

                  <div className="glass rounded-xl p-6 hover:glow-lime transition-all duration-300 h-full">
                    {/* Number Badge */}
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/20 mb-4">
                      <span className="text-primary font-bold text-lg">{step.number}</span>
                    </div>

                    {/* Icon */}
                    <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                      <Icon className="w-7 h-7 text-primary" />
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold mb-3">{step.title}</h3>

                    {/* Description */}
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom Info */}
        <div className="mt-16 text-center max-w-2xl mx-auto glass-strong rounded-xl p-8" data-aos="zoom-in">
          <p className="text-lg text-muted-foreground mb-4">
            <strong className="text-foreground">Transparência Total:</strong> Você acompanha cada etapa 
            do processo e participa ativamente das decisões importantes.
          </p>
          <p className="text-sm text-muted-foreground">
            Mantemos comunicação constante via WhatsApp, email e reuniões online para garantir 
            que o projeto esteja sempre alinhado com suas expectativas.
          </p>
        </div>
      </div>
    </section>
  );
}
