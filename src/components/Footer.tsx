import { Instagram, Linkedin, Mail, Phone } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export default function Footer() {
  useScrollAnimation();

  const currentYear = new Date().getFullYear();

  const footerLinks = {
    navigation: [
      { label: 'Início', href: '#home' },
      { label: 'Sobre', href: '#about' },
      { label: 'Serviços', href: '#services' },
      { label: 'Portfólio', href: '#portfolio' },
    ],
    services: [
      { label: 'Motion Design', href: '#services' },
      { label: 'Desenvolvimento Web', href: '#services' },
      { label: 'Design Gráfico', href: '#services' },
      { label: 'Marketing Digital', href: '#services' },
    ],
  };

  const socialLinks = [
    { icon: Instagram, href: 'https://instagram.com/r9digital', label: 'Instagram' },
    { icon: Linkedin, href: 'https://linkedin.com/company/r9digital', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:contato@r9.digital', label: 'Email' },
    { icon: Phone, href: 'tel:+5511999999999', label: 'Telefone' },
  ];

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-card/50 border-t border-border/50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `radial-gradient(circle, oklch(0.65 0.25 142) 1px, transparent 1px)`,
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      <div className="container relative z-10 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="text-3xl font-bold text-gradient">R9</div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Transformando ideias em realidade digital através de design, 
              tecnologia e estratégias inovadoras.
            </p>
            {/* Social Links */}
            <div className="flex gap-3 pt-4">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-lg bg-primary/10 hover:bg-primary/20 flex items-center justify-center transition-colors group"
                    aria-label={social.label}
                  >
                    <Icon className="w-5 h-5 text-primary group-hover:scale-110 transition-transform" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Navigation Links */}
          <div>
            <h3 className="font-semibold mb-4">Navegação</h3>
            <ul className="space-y-2">
              {footerLinks.navigation.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    onClick={(e) => scrollToSection(e, link.href)}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h3 className="font-semibold mb-4">Serviços</h3>
            <ul className="space-y-2">
              {footerLinks.services.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    onClick={(e) => scrollToSection(e, link.href)}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold mb-4">Contato</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <Mail className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                <a
                  href="mailto:contato@r9.digital"
                  className="hover:text-primary transition-colors"
                >
                  contato@r9.digital
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Phone className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                <a
                  href="tel:+5511999999999"
                  className="hover:text-primary transition-colors"
                >
                  (11) 9 9999-9999
                </a>
              </li>
              <li className="pt-2 text-xs">
                <strong className="text-foreground">Horário:</strong><br />
                Seg a Sex: 9h às 18h
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border/50">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
            <p>
              © {currentYear} R9 - Soluções Criativas & Digitais. Todos os direitos reservados.
            </p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-primary transition-colors">
                Política de Privacidade
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                Termos de Uso
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
