export const SITE = {
  name: 'DG Pinturas',
  tagline: 'Pinturas e Acabamentos',
  founder: 'Guilherme Rocha Santos',
  yearsExperience: 12,
  phone: '(42) 99843-4058',
  phoneRaw: '5542998434058',
  whatsappBase: 'https://wa.me/5542998434058',
  email: 'contato@dgpinturas.com.br',
  instagram: 'dgpinturas___',
  instagramUrl: 'https://instagram.com/dgpinturas___',
  cities: ['Londrina - PR', 'São Paulo - SP'],
} as const;

export const whatsappLink = (message: string) =>
  `${SITE.whatsappBase}?text=${encodeURIComponent(message)}`;

export const NAV_LINKS = [
  { href: '#inicio', label: 'Início' },
  { href: '#servicos', label: 'Serviços' },
  { href: '#portfolio', label: 'Portfólio' },
  { href: '#sobre', label: 'Sobre' },
  { href: '#contato', label: 'Contato' },
] as const;

export const SERVICES = [
  {
    icon: 'Home',
    title: 'Pintura Residencial',
    description:
      'Transforme sua casa com acabamento impecável. Trabalhamos com as melhores tintas e técnicas para garantir durabilidade e beleza em cada cômodo.',
  },
  {
    icon: 'Building2',
    title: 'Pintura Comercial',
    description:
      'Ambientes comerciais que impressionam. Atendemos escritórios, lojas, restaurantes e espaços corporativos com agilidade e mínima interferência na sua operação.',
  },
  {
    icon: 'Palette',
    title: 'Textura e Grafiato',
    description:
      'Dê personalidade às suas paredes com texturas exclusivas. Grafiato, marmorizado, efeito cimento queimado e técnicas decorativas que transformam qualquer espaço.',
  },
  {
    icon: 'Layers',
    title: 'Gesso, Drywall e Massa Corrida',
    description:
      'Preparação e acabamento perfeitos. Forro de gesso, divisórias em drywall e aplicação de massa corrida com acabamento liso e uniforme.',
  },
] as const;

export const STATS = [
  { value: 500, suffix: '+', label: 'Projetos Entregues' },
  { value: 50000, suffix: '+', label: 'm² Pintados', format: 'thousands' },
  { value: 12, suffix: '', label: 'Anos de Experiência' },
  { value: 100, suffix: '%', label: 'Clientes Satisfeitos' },
] as const;

export const DIFFERENTIALS = [
  'Profissionais treinados e qualificados',
  'Materiais de primeira linha',
  'Pontualidade e respeito aos prazos',
  'Limpeza completa ao final do serviço',
  'Garantia de satisfação',
] as const;

export const PROCESS_STEPS = [
  {
    icon: 'Phone',
    title: 'Contato',
    description: 'Fale conosco via WhatsApp ou telefone',
  },
  {
    icon: 'ClipboardCheck',
    title: 'Visita Técnica',
    description: 'Avaliamos o local e entendemos suas necessidades',
  },
  {
    icon: 'FileText',
    title: 'Orçamento',
    description: 'Proposta detalhada, sem surpresas',
  },
  {
    icon: 'Brush',
    title: 'Execução',
    description: 'Mãos à obra com qualidade e pontualidade',
  },
  {
    icon: 'Sparkles',
    title: 'Entrega',
    description: 'Ambiente transformado, cliente satisfeito',
  },
] as const;

// TODO: Substituir pelos depoimentos reais dos clientes (nome, texto, serviço, cidade)
export const TESTIMONIALS = [
  {
    name: 'Mariana Silva',
    service: 'Pintura Residencial',
    location: 'Londrina - PR',
    rating: 5,
    text: 'Equipe extremamente profissional e pontual. O acabamento ficou impecável e a casa parece nova. Recomendo sem hesitação!',
  },
  {
    name: 'Carlos Eduardo',
    service: 'Pintura Comercial',
    location: 'São Paulo - SP',
    rating: 5,
    text: 'Pintaram todo o nosso escritório no fim de semana, sem interromper as atividades. Qualidade impressionante e zero bagunça.',
  },
  {
    name: 'Patrícia Almeida',
    service: 'Textura e Grafiato',
    location: 'Londrina - PR',
    rating: 5,
    text: 'O grafiato ficou exatamente como eu sonhava. Atenção aos detalhes e capricho em cada centímetro. Estou apaixonada pelo resultado.',
  },
  {
    name: 'Roberto Mendes',
    service: 'Gesso e Drywall',
    location: 'São Paulo - SP',
    rating: 5,
    text: 'Trabalho rápido, limpo e perfeito. O Guilherme entende muito do que faz e a equipe é nota dez. Já indiquei para vários amigos.',
  },
] as const;

export const PORTFOLIO_CATEGORIES = [
  { id: 'all', label: 'Todos' },
  { id: 'residencial', label: 'Residencial' },
  { id: 'comercial', label: 'Comercial' },
  { id: 'textura', label: 'Textura' },
  { id: 'gesso', label: 'Gesso' },
] as const;

export type PortfolioCategory =
  (typeof PORTFOLIO_CATEGORIES)[number]['id'];

// Itens do portfólio com fotos reais em /public/images/portfolio/
// Para adicionar mais: salve a foto em PNG ou JPG e adicione o item aqui apontando para o .jpg otimizado.
export const PORTFOLIO_ITEMS: Array<{
  id: string;
  title: string;
  category: Exclude<PortfolioCategory, 'all'>;
  location: string;
  image: string;
}> = [
  { id: 'p1', title: 'Sala de Estar Moderna', category: 'residencial', location: 'Londrina - PR', image: '/images/portfolio/sala.jpg' },
  { id: 'p2', title: 'Escritório Corporativo', category: 'comercial', location: 'São Paulo - SP', image: '/images/portfolio/escritorio.jpg' },
  { id: 'p3', title: 'Fachada Comercial', category: 'comercial', location: 'Londrina - PR', image: '/images/portfolio/fachada.jpg' },
  { id: 'p4', title: 'Quarto com Textura', category: 'textura', location: 'São Paulo - SP', image: '/images/portfolio/quartotextura.jpg' },
  { id: 'p5', title: 'Forro de Gesso', category: 'gesso', location: 'Londrina - PR', image: '/images/portfolio/forrogesso.jpg' },
  { id: 'p6', title: 'Cozinha Gourmet', category: 'residencial', location: 'São Paulo - SP', image: '/images/portfolio/cozinha.jpg' },
  { id: 'p7', title: 'Loja Boutique', category: 'comercial', location: 'Londrina - PR', image: '/images/portfolio/lojaboutique.jpg' },
  { id: 'p8', title: 'Grafiato Decorativo', category: 'textura', location: 'São Paulo - SP', image: '/images/portfolio/grafiato.jpg' },
  { id: 'p9', title: 'Drywall Divisórias', category: 'gesso', location: 'Londrina - PR', image: '/images/portfolio/drywall.jpg' },
];

// Pares de fotos antes/depois em /public/images/before-after/
// Para adicionar mais: salve antesN.jpg + depoisN.jpg e adicione aqui
export const BEFORE_AFTER_ITEMS = [
  {
    id: 'ba1',
    title: 'Projeto 01 — Transformação Completa',
    location: 'Londrina - PR',
    before: '/images/before-after/antes1.jpg',
    after: '/images/before-after/depois1.jpg',
  },
  {
    id: 'ba2',
    title: 'Projeto 02 — Acabamento Premium',
    location: 'São Paulo - SP',
    before: '/images/before-after/antes2.jpg',
    after: '/images/before-after/depois2.jpg',
  },
  {
    id: 'ba3',
    title: 'Projeto 03 — Renovação Total',
    location: 'Londrina - PR',
    before: '/images/before-after/antes3.jpg',
    after: '/images/before-after/depois3.jpg',
  },
] as const;
