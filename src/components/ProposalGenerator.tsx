import { Button } from '@/components/ui/button';
import { FileText, Download } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export default function ProposalGenerator() {
  useScrollAnimation();

  return (
    <section id="generator" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-chart-2/10" />

      <div className="container relative z-10">
        <div className="max-w-4xl mx-auto glass-strong rounded-2xl p-12 text-center" data-aos="zoom-in">
          {/* Icon */}
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/20 mb-6">
            <FileText className="w-10 h-10 text-primary" />
          </div>

          {/* Heading */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Gerador de <span className="text-gradient">Propostas</span>
          </h2>

          {/* Description */}
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Crie propostas e contratos profissionais em minutos. Nossa ferramenta 
            offline permite gerar documentos personalizados com sua marca.
          </p>

          {/* Features List */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8 text-left max-w-2xl mx-auto">
            <div className="flex items-center gap-3 glass rounded-lg p-4">
              <div className="w-2 h-2 rounded-full bg-primary" />
              <span>Geração offline de propostas</span>
            </div>
            <div className="flex items-center gap-3 glass rounded-lg p-4">
              <div className="w-2 h-2 rounded-full bg-primary" />
              <span>Contratos personalizados</span>
            </div>
            <div className="flex items-center gap-3 glass rounded-lg p-4">
              <div className="w-2 h-2 rounded-full bg-primary" />
              <span>Upload de logotipo</span>
            </div>
            <div className="flex items-center gap-3 glass rounded-lg p-4">
              <div className="w-2 h-2 rounded-full bg-primary" />
              <span>Assinatura digital</span>
            </div>
          </div>

          {/* CTA */}
          <div className="space-y-4">
            <Button size="lg" className="glow-lime">
              <Download className="mr-2 w-5 h-5" />
              Acessar Gerador
            </Button>
            <p className="text-sm text-muted-foreground">
              Funcionalidade completa disponível em breve
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
