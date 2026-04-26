# DG Pinturas — Site Institucional

Site profissional e premium para a **DG Pinturas — Pinturas e Acabamentos**, construído com Next.js 14, Tailwind CSS e Framer Motion.

---

## 🚀 Stack

- **Next.js 14** (App Router) + **TypeScript**
- **Tailwind CSS** com paleta customizada (preto + dourado)
- **Framer Motion** para animações cinematográficas
- **Lucide React** para ícones
- **next/font** com Playfair Display, Raleway e Cormorant Garamond
- Pronto para deploy na **Vercel**

---

## 📦 Como rodar localmente

```bash
# 1. Instalar dependências
npm install

# 2. Rodar em modo desenvolvimento
npm run dev

# 3. Abrir no navegador
# http://localhost:3000

# 4. Build de produção
npm run build
npm start
```

Requer **Node.js 18.17+** ou superior.

---

## 🎨 Como trocar conteúdo e imagens

### Logo
Substituir `public/images/logo.png` mantendo o mesmo nome.
Recomendado: PNG com fundo transparente, mínimo 512×512px.

### Vídeo do Hero
Substituir `public/images/hero.mp4` (formato MP4, máximo 10MB recomendado).
Manter `hero-bg.png` como poster (primeiro frame estático).

### Foto do Guilherme (seção Sobre)
Adicionar foto em `public/images/team/guilherme.jpg` (recomendado 800×1000px) e
trocar o placeholder em [src/components/About.tsx](src/components/About.tsx) por:

```tsx
<Image src="/images/team/guilherme.jpg" alt="Guilherme Rocha Santos" fill className="object-cover" />
```

### Fotos do Portfólio
Salvar em `public/images/portfolio/<id>.jpg` (1200×800px, proporção 3:2).
Habilitar a propriedade `image` em cada item de `PORTFOLIO_ITEMS`
em [src/lib/content.ts](src/lib/content.ts) e trocar `<PortfolioPlaceholder />`
por `<Image />` em [src/components/Portfolio.tsx](src/components/Portfolio.tsx).

### Antes & Depois
Salvar pares em `public/images/before-after/<id>-antes.jpg` e
`<id>-depois.jpg` e trocar os `<PortfolioPlaceholder />` em
[src/components/BeforeAfter.tsx](src/components/BeforeAfter.tsx).

### Depoimentos
Editar o array `TESTIMONIALS` em [src/lib/content.ts](src/lib/content.ts).

### Textos, telefone, e-mail e Instagram
Tudo centralizado em [src/lib/content.ts](src/lib/content.ts) (constante `SITE`).

### Slogan do Hero
Editar a constante `HEADLINE` em [src/components/Hero.tsx](src/components/Hero.tsx).
Há 2 opções alternativas comentadas no topo do arquivo.

### Nome do desenvolvedor (footer)
Procurar `[Seu Nome]` em [src/components/Footer.tsx](src/components/Footer.tsx).

---

## 🎯 Estrutura

```
src/
├── app/
│   ├── layout.tsx       # fonts, metadata SEO, JSON-LD LocalBusiness
│   ├── page.tsx         # composição das seções
│   ├── sitemap.ts       # sitemap dinâmico
│   └── globals.css      # tokens, utilities, scrollbar
├── components/
│   ├── Logo.tsx
│   ├── Navbar.tsx
│   ├── Hero.tsx          # vídeo background + headline reveal
│   ├── Services.tsx      # 4 cards glassmorphism
│   ├── Portfolio.tsx     # filtros + grid + lightbox
│   ├── BeforeAfter.tsx   # slider drag horizontal
│   ├── Stats.tsx         # contadores animados + parallax
│   ├── About.tsx         # layout assimétrico
│   ├── Process.tsx       # timeline com linha animada
│   ├── Testimonials.tsx  # carrossel autoplay
│   ├── CoverageArea.tsx
│   ├── CTA.tsx           # botão WhatsApp grande
│   ├── Footer.tsx
│   ├── WhatsAppButton.tsx       # FAB flutuante
│   ├── PortfolioPlaceholder.tsx # placeholder elegante (gradiente)
│   └── SectionHeading.tsx
└── lib/
    ├── motion.ts        # variants Framer reutilizáveis
    └── content.ts       # textos centralizados (serviços, stats, etc.)
```

---

## ☁️ Deploy na Vercel

### Opção 1 — Via dashboard
1. Suba o código para um repositório no GitHub.
2. Em [vercel.com/new](https://vercel.com/new), importe o repositório.
3. A Vercel detecta Next.js automaticamente — basta clicar em **Deploy**.

### Opção 2 — Via CLI
```bash
npm i -g vercel
vercel
```

### Domínio personalizado
No painel do projeto na Vercel: **Settings → Domains** → adicionar `dgpinturas.com.br`
e seguir as instruções de DNS.

---

## 🔍 SEO

- Meta tags completas (title, description, OG, Twitter)
- Schema markup JSON-LD para `LocalBusiness`
- Sitemap em `/sitemap.xml`
- `robots.txt` em `/robots.txt`
- Imagens otimizadas via `next/image` (formatos AVIF/WebP automáticos)

> **Atenção:** o domínio canônico está fixado em `https://dgpinturas.com.br` no
> [layout.tsx](src/app/layout.tsx) (constante `metadataBase`) e em [sitemap.ts](src/app/sitemap.ts).
> Trocar caso o domínio final seja diferente.

---

## 📞 Dados da Empresa

- **Telefone / WhatsApp:** (42) 99843-4058
- **E-mail:** contato@dgpinturas.com.br
- **Instagram:** [@dgpinturas___](https://instagram.com/dgpinturas___)
- **Atuação:** Londrina-PR e São Paulo-SP

---

## 🎨 Paleta da Marca

| Cor | Hex | Uso |
|---|---|---|
| Preto profundo | `#0A0A0A` | Fundo principal |
| Cinza escuro | `#1A1A1A` | Seções alternadas |
| Cinza médio | `#2A2A2A` | Cards |
| Dourado | `#C9A84C` | Destaques, CTAs, bordas |
| Dourado claro | `#E8D48B` | Gradientes, hover |
| Dourado escuro | `#8B7332` | Sombras, acentos |
| Off-white | `#F5F0E8` | Textos sobre fundo escuro |

Tokens declarados em [tailwind.config.ts](tailwind.config.ts) e
[src/app/globals.css](src/app/globals.css).
