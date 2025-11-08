# R9 - Soluções Criativas & Digitais

Site profissional da R9 com design futurista, apresentando serviços de motion design, desenvolvimento web, design gráfico e marketing digital.

## 🚀 Características

- **Design Futurista**: Interface moderna com gradientes vibrantes, glassmorphism e animações suaves
- **Totalmente Responsivo**: Adaptado para desktop, tablet e mobile
- **Seções Completas**:
  - Hero Section impactante
  - Sobre a R9
  - Estatísticas de sucesso
  - Serviços detalhados
  - Portfólio de projetos
  - Processo de trabalho
  - Depoimentos de clientes
  - FAQ (Perguntas Frequentes)
  - Formulário de contato
  - Gerador de propostas offline
- **Animações**: Scroll reveal animations usando AOS
- **SEO Otimizado**: Meta tags completas e structured data
- **Performance**: Otimizado para carregamento rápido

## 🛠️ Tecnologias

- React 18
- TypeScript
- Tailwind CSS com design system customizado
- Vite
- React Router
- AOS (Animate On Scroll)
- Lucide React (ícones)
- shadcn/ui components

## 📦 Instalação

```bash
# Instalar dependências
npm install

# Iniciar servidor de desenvolvimento
npm run dev

# Build para produção
npm run build

# Preview do build
npm run preview
```

## 🌐 Deploy no GitHub Pages

1. **Configure o repositório**:
   - Crie um repositório no GitHub
   - Push o código para o repositório

2. **Configure o GitHub Pages**:
   - Vá em Settings > Pages
   - Em "Source", selecione "GitHub Actions"

3. **Adicione o workflow** (já incluído em `.github/workflows/deploy.yml`):
   - O workflow faz build automático e deploy no GitHub Pages
   - Toda vez que você fizer push na branch `main`, o site será atualizado

4. **Acesse seu site**:
   - `https://seu-usuario.github.io/nome-do-repositorio/`

## 📝 Estrutura do Projeto

```
src/
├── components/          # Componentes React
│   ├── ui/             # Componentes base (shadcn)
│   ├── Navigation.tsx  # Navegação principal
│   ├── HeroSection.tsx # Hero section
│   ├── AboutSection.tsx
│   ├── StatsSection.tsx
│   ├── ServicesSection.tsx
│   ├── PortfolioSection.tsx
│   ├── CTASection.tsx
│   ├── ProcessSection.tsx
│   ├── TestimonialsSection.tsx
│   ├── FAQSection.tsx
│   ├── ContactSection.tsx
│   ├── ProposalGenerator.tsx
│   └── Footer.tsx
├── hooks/              # Custom hooks
│   └── useScrollAnimation.ts
├── pages/              # Páginas
│   ├── Index.tsx      # Página principal
│   └── NotFound.tsx   # 404
├── index.css          # Estilos globais e design system
└── App.tsx            # App principal

public/                # Assets estáticos
```

## 🎨 Design System

O projeto usa um design system completo definido em `src/index.css`:

- **Cores primárias**: Verde limão (#C6F000) e gradientes
- **Tipografia**: Space Grotesk para títulos, Inter para corpo
- **Efeitos**: Glass morphism, glows, gradientes
- **Animações**: Float, pulse, hover effects
- **Tema**: Dark mode futurista

## 📄 Customização

### Cores
Edite as variáveis CSS em `src/index.css` na seção `:root`

### Conteúdo
- **Textos**: Edite os componentes em `src/components/`
- **Imagens**: Substitua as imagens em `public/`
- **SEO**: Atualize as meta tags em `index.html`

### Componentes
Todos os componentes usam Tailwind CSS e seguem o design system. Evite estilos inline.

## 🔧 Scripts Disponíveis

- `npm run dev` - Inicia servidor de desenvolvimento
- `npm run build` - Cria build de produção
- `npm run preview` - Preview do build localmente
- `npm run lint` - Verifica código com ESLint

## 📱 Responsividade

O site é totalmente responsivo com breakpoints:
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## ⚡ Performance

- Lazy loading de imagens
- Code splitting automático (Vite)
- Animações otimizadas
- CSS moderno e eficiente

## 📞 Suporte

Para dúvidas ou sugestões, entre em contato através do formulário no site.

## 📜 Licença

Todos os direitos reservados © 2024 R9 - Soluções Criativas & Digitais
