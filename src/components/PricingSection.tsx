import { Check, Zap, Crown, Rocket } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export default function PricingSection() {
  useScrollAnimation();

  const plans = [
    {
      icon: Zap,
      name: 'Starter',
      price: 'R$ 2.500',
      period: 'projeto único',
      description: 'Ideal para pequenos negócios que estão começando sua jornada digital.',
      features: [
        'Landing Page Responsiva',
        'Design Personalizado',
        '3 Seções de Conteúdo',
        'Formulário de Contato',
        'Otimização SEO Básica',
        '1 Rodada de Revisões',
        'Entrega em 7 dias',
      ],
      highlighted: false,
      color: 'primary',
    },
    {
      icon: Crown,
      name: 'Professional',
      price: 'R$ 6.500',
      period: 'projeto único',
      description: 'Perfeito para empresas que buscam uma presença digital completa e profissional.',
      features: [
        'Site Completo (até 8 páginas)',
        'Design Premium',
        'Animações Avançadas',
        'Sistema de Blog/CMS',
        'Integração Analytics',
        'Otimização SEO Avançada',
        '3 Rodadas de Revisões',
        'Suporte 30 dias',
        'Entrega em 15 dias',
      ],
      highlighted: true,
      color: 'chart-3',
    },
    {
      icon: Rocket,
      name: 'Enterprise',
      price: 'Sob Consulta',
      period: 'projeto personalizado',
      description: 'Soluções completas e personalizadas para grandes empresas e projetos complexos.',
      features: [
        'Plataforma Web Completa',
        'Aplicativo Mobile (iOS/Android)',
        'Design System Completo',
        'Animações Premium',
        'Integração com APIs',
        'Dashboard Administrativo',
        'Suporte Dedicado',
        'Manutenção Mensal',
        'Revisões Ilimitadas',
        'Consultoria Estratégica',
      ],
      highlighted: false,
      color: 'chart-2',
    },
  ];

  return (
    <section id="pricing" className="py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/30 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-chart-2/30 rounded-full blur-3xl animate-pulse-slow" />
      </div>

      <div className="container relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16" data-aos="fade-up">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Planos & <span className="text-gradient">Investimento</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Escolha o plano ideal para transformar sua presença digital e alcançar seus objetivos.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {plans.map((plan, index) => {
            const Icon = plan.icon;
            return (
              <div
                key={index}
                className={`relative rounded-2xl p-8 transition-all duration-300 hover-lift ${
                  plan.highlighted
                    ? 'glass-strong border-2 border-primary scale-105 shadow-2xl'
                    : 'glass'
                }`}
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                {/* Best Value Badge */}
                {plan.highlighted && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-6 py-2 bg-primary text-primary-foreground rounded-full text-sm font-bold">
                    Mais Popular
                  </div>
                )}

                {/* Icon */}
                <div className={`inline-flex items-center justify-center w-14 h-14 rounded-xl bg-primary/10 mb-6 ${
                  plan.highlighted ? 'scale-110' : ''
                }`}>
                  <Icon className="w-7 h-7 text-primary" />
                </div>

                {/* Plan Name */}
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>

                {/* Description */}
                <p className="text-sm text-muted-foreground mb-6">{plan.description}</p>

                {/* Price */}
                <div className="mb-6">
                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl font-bold text-gradient">{plan.price}</span>
                  </div>
                  <div className="text-sm text-muted-foreground mt-1">{plan.period}</div>
                </div>

                {/* Features */}
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-foreground/90">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <Button
                  className={`w-full ${
                    plan.highlighted ? 'glow-lime' : ''
                  }`}
                  variant={plan.highlighted ? 'default' : 'outline'}
                  size="lg"
                  asChild
                >
                  <a href="#contact">
                    {plan.price === 'Sob Consulta' ? 'Solicitar Orçamento' : 'Começar Agora'}
                  </a>
                </Button>
              </div>
            );
          })}
        </div>

        {/* Bottom Info */}
        <div className="mt-16 text-center max-w-3xl mx-auto glass-strong rounded-xl p-8" data-aos="fade-up">
          <p className="text-lg text-muted-foreground mb-4">
            <strong className="text-foreground">Todos os planos incluem:</strong> Código otimizado, 
            design responsivo, hospedagem gratuita no primeiro mês e treinamento de uso.
          </p>
          <p className="text-sm text-muted-foreground">
            Precisa de algo diferente? Entre em contato para criar um plano personalizado para suas necessidades.
          </p>
        </div>
      </div>
    </section>
  );
}
