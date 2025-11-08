import { Plus, Minus } from 'lucide-react';
import { useState } from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export default function FAQSection() {
  useScrollAnimation();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: 'Quanto tempo leva para desenvolver um projeto?',
      answer: 'O prazo varia de acordo com a complexidade do projeto. Um site institucional pode levar de 2 a 4 semanas, enquanto projetos mais complexos como e-commerce ou aplicativos podem levar de 6 a 12 semanas. Fornecemos um cronograma detalhado na proposta.',
    },
    {
      question: 'Vocês oferecem suporte após a entrega?',
      answer: 'Sim! Oferecemos suporte técnico e manutenção contínua. Todos os projetos incluem um período de garantia e oferecemos pacotes de manutenção mensal para atualizações e melhorias contínuas.',
    },
    {
      question: 'Como funciona o processo de desenvolvimento?',
      answer: 'Nosso processo é dividido em 5 etapas: 1) Briefing e planejamento, 2) Design e aprovação, 3) Desenvolvimento, 4) Testes e ajustes, 5) Entrega e treinamento. Você acompanha cada fase e valida as entregas.',
    },
    {
      question: 'Quais formas de pagamento vocês aceitam?',
      answer: 'Aceitamos diversas formas de pagamento: PIX, transferência bancária, boleto e cartão de crédito (parcelado). O pagamento geralmente é dividido em etapas: entrada, desenvolvimento e entrega final.',
    },
    {
      question: 'Vocês criam sites responsivos?',
      answer: 'Absolutamente! Todos os nossos projetos são desenvolvidos com design responsivo, garantindo perfeita visualização em smartphones, tablets e desktops. Testamos em múltiplos dispositivos e navegadores.',
    },
    {
      question: 'Posso fazer alterações no site depois de pronto?',
      answer: 'Sim! Desenvolvemos sites com painéis administrativos intuitivos quando necessário, permitindo que você faça atualizações de conteúdo. Também oferecemos treinamento e documentação completa.',
    },
    {
      question: 'Vocês trabalham com clientes de outras cidades/estados?',
      answer: 'Sim! Atendemos clientes em todo o Brasil. Todas as reuniões podem ser online, e mantemos comunicação constante via WhatsApp, email e videoconferência. A distância não é problema!',
    },
    {
      question: 'O que preciso fornecer para começar o projeto?',
      answer: 'Basicamente: logo da empresa (se houver), conteúdos (textos e imagens), referências visuais e informações sobre seu público-alvo. Ajudamos você a organizar tudo isso no briefing inicial.',
    },
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 right-1/3 w-96 h-96 bg-chart-4/30 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-primary/30 rounded-full blur-3xl" />
      </div>

      <div className="container relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Perguntas <span className="text-gradient">Frequentes</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Tire suas dúvidas sobre nossos serviços e processo de trabalho.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="glass rounded-xl overflow-hidden transition-all duration-300"
              data-aos="fade-up"
              data-aos-delay={index * 50}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full p-6 flex items-center justify-between text-left hover:bg-primary/5 transition-colors"
              >
                <span className="text-lg font-semibold pr-8">{faq.question}</span>
                <div className="flex-shrink-0">
                  {openIndex === index ? (
                    <Minus className="w-5 h-5 text-primary" />
                  ) : (
                    <Plus className="w-5 h-5 text-primary" />
                  )}
                </div>
              </button>

              {openIndex === index && (
                <div className="px-6 pb-6 text-muted-foreground leading-relaxed animate-in fade-in slide-in-from-top-2 duration-300">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <p className="text-lg text-muted-foreground mb-6">
            Não encontrou sua resposta?
          </p>
          <a
            href="#contact"
            className="inline-flex items-center text-primary hover:text-primary/80 transition-colors font-semibold"
          >
            Entre em contato conosco →
          </a>
        </div>
      </div>
    </section>
  );
}
