import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { useState } from 'react';
import { toast } from 'sonner';

export default function ContactSection() {
  useScrollAnimation();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      content: 'contato@r9.digital',
      link: 'mailto:contato@r9.digital',
    },
    {
      icon: Phone,
      title: 'Telefone',
      content: '(11) 9 9999-9999',
      link: 'tel:+5511999999999',
    },
    {
      icon: MapPin,
      title: 'Localização',
      content: 'São Paulo, SP - Brasil',
      link: '#',
    },
  ];

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));

    toast.success('Mensagem enviada com sucesso! Entraremos em contato em breve.');
    setIsSubmitting(false);
    
    // Reset form
    (e.target as HTMLFormElement).reset();
  };

  return (
    <section id="contact" className="py-24 bg-card/30 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `radial-gradient(circle, oklch(0.65 0.25 330) 1px, transparent 1px)`,
            backgroundSize: '30px 30px',
          }}
        />
      </div>

      <div className="container relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Vamos Conversar?
          </h2>
          <p className="text-xl text-muted-foreground">
            Entre em contato e descubra como podemos transformar sua presença digital.
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="glass-strong rounded-xl p-8" data-aos="fade-right">
            <h3 className="text-2xl font-bold mb-6">Envie uma Mensagem</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Nome Completo *
                </label>
                <Input
                  id="name"
                  name="name"
                  required
                  placeholder="Seu nome"
                  className="bg-background/50"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email *
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="seu@email.com"
                  className="bg-background/50"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium mb-2">
                  Telefone
                </label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder="(11) 9 9999-9999"
                  className="bg-background/50"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Mensagem *
                </label>
                <Textarea
                  id="message"
                  name="message"
                  required
                  placeholder="Conte-nos sobre seu projeto..."
                  rows={5}
                  className="bg-background/50 resize-none"
                />
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full glow-lime group"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  'Enviando...'
                ) : (
                  <>
                    Enviar Mensagem
                    <Send className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </Button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-6" data-aos="fade-left">
            <div className="glass-strong rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-6">Informações de Contato</h3>
              
              <div className="space-y-6">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon;
                  return (
                    <a
                      key={index}
                      href={info.link}
                      className="flex items-start gap-4 group hover:translate-x-2 transition-transform"
                    >
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <div className="font-semibold text-sm text-muted-foreground mb-1">
                          {info.title}
                        </div>
                        <div className="text-foreground group-hover:text-primary transition-colors">
                          {info.content}
                        </div>
                      </div>
                    </a>
                  );
                })}
              </div>
            </div>

            <div className="glass-strong rounded-xl p-8">
              <h3 className="text-xl font-bold mb-4">Horário de Atendimento</h3>
              <div className="space-y-2 text-muted-foreground">
                <p><strong className="text-foreground">Segunda a Sexta:</strong> 9h às 18h</p>
                <p><strong className="text-foreground">Finais de Semana:</strong> Fechado</p>
                <p className="text-sm pt-2 border-t border-border/50 mt-4">
                  Respondemos todas as mensagens em até 24 horas úteis.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
