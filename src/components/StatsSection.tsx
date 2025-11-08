import { TrendingUp, Users, Award, Rocket } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export default function StatsSection() {
  useScrollAnimation();

  const stats = [
    {
      icon: Users,
      value: '200+',
      label: 'Clientes Satisfeitos',
      color: 'primary',
    },
    {
      icon: Award,
      value: '500+',
      label: 'Projetos Entregues',
      color: 'chart-2',
    },
    {
      icon: TrendingUp,
      value: '98%',
      label: 'Taxa de Satisfação',
      color: 'chart-3',
    },
    {
      icon: Rocket,
      value: '5+',
      label: 'Anos de Experiência',
      color: 'chart-4',
    },
  ];

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/30 rounded-full blur-3xl animate-pulse-slow" />
      </div>

      <div className="container relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className="text-center"
                data-aos="zoom-in"
                data-aos-delay={index * 100}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4 hover:scale-110 transition-transform">
                  <Icon className="w-8 h-8 text-primary" />
                </div>
                <div className="text-4xl md:text-5xl font-bold text-gradient mb-2">
                  {stat.value}
                </div>
                <div className="text-muted-foreground font-medium">
                  {stat.label}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
