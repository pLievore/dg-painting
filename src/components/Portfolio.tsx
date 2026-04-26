'use client';

import Image from 'next/image';
import { useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Expand, X } from 'lucide-react';
import {
  PORTFOLIO_CATEGORIES,
  PORTFOLIO_ITEMS,
  type PortfolioCategory,
} from '@/lib/content';
import { viewportOnce } from '@/lib/motion';
import { SectionHeading } from './SectionHeading';
import { BeforeAfter } from './BeforeAfter';
import { BLUR_PLACEHOLDERS } from '@/lib/blur-placeholders';

const blurFor = (src: string) => {
  const key = src.split('/').pop()?.replace(/\.\w+$/, '') ?? '';
  return BLUR_PLACEHOLDERS[key];
};

const CATEGORY_LABEL: Record<string, string> = {
  residencial: 'Residencial',
  comercial: 'Comercial',
  textura: 'Textura',
  gesso: 'Gesso',
};

export function Portfolio() {
  const [filter, setFilter] = useState<PortfolioCategory>('all');
  const [lightbox, setLightbox] = useState<string | null>(null);

  const filtered = useMemo(
    () =>
      PORTFOLIO_ITEMS.filter(
        (item) => filter === 'all' || item.category === filter
      ),
    [filter]
  );

  return (
    <section
      id="portfolio"
      className="relative py-24 md:py-32 bg-ink overflow-hidden"
    >
      <div className="container-narrow">
        <SectionHeading
          eyebrow="Portfólio"
          title="Nossos Trabalhos"
          subtitle="Veja a qualidade que entregamos em cada projeto. Use o controle deslizante para comparar antes e depois."
        />

        <BeforeAfter />

        {/* Filtros */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ duration: 0.5 }}
          className="flex flex-wrap items-center justify-center gap-2 md:gap-3 mb-10"
        >
          {PORTFOLIO_CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => setFilter(cat.id)}
              className={`relative px-4 md:px-6 py-2 text-xs md:text-sm tracking-widest uppercase font-medium transition-all duration-300 border rounded-sm ${
                filter === cat.id
                  ? 'bg-gold text-ink border-gold shadow-glow-gold'
                  : 'bg-transparent text-cream/70 border-cream/15 hover:border-gold/60 hover:text-gold'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-5">
          {filtered.map((item) => (
            <button
              key={`${filter}-${item.id}`}
              onClick={() => setLightbox(item.id)}
              className="group relative aspect-[4/5] overflow-hidden rounded-sm border border-gold/15 hover:border-gold/60 transition-all duration-500 focus:outline-none focus:ring-2 focus:ring-gold bg-ink-soft"
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                sizes="(min-width: 1024px) 25vw, (min-width: 768px) 33vw, 50vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                placeholder="blur"
                blurDataURL={blurFor(item.image)}
              />

              <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-500" />

              <div className="absolute inset-0 p-4 flex flex-col justify-end opacity-0 group-hover:opacity-100 translate-y-3 group-hover:translate-y-0 transition-all duration-500">
                <span className="self-start px-2 py-0.5 bg-gold text-ink text-[10px] tracking-widest uppercase font-bold rounded-sm mb-2">
                  {CATEGORY_LABEL[item.category] ?? item.category}
                </span>
                <h4 className="font-display text-sm md:text-base text-cream mb-1 leading-tight">
                  {item.title}
                </h4>
                <p className="text-[11px] tracking-wider text-gold/80">
                  {item.location}
                </p>
              </div>

              <div className="absolute top-3 right-3 w-9 h-9 rounded-full bg-ink/70 backdrop-blur border border-gold/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                <Expand className="w-4 h-4 text-gold" />
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[60] bg-ink/95 backdrop-blur-md flex items-center justify-center p-4"
            onClick={() => setLightbox(null)}
          >
            <button
              type="button"
              aria-label="Fechar"
              onClick={() => setLightbox(null)}
              className="absolute top-6 right-6 w-12 h-12 rounded-full bg-ink-card/80 border border-gold/40 flex items-center justify-center text-gold hover:bg-gold hover:text-ink transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
            <motion.div
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.92, opacity: 0 }}
              transition={{ duration: 0.35, ease: [0.2, 0.8, 0.2, 1] }}
              className="relative w-full max-w-5xl aspect-[4/3] border border-gold/30 rounded-sm overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {(() => {
                const item = PORTFOLIO_ITEMS.find((p) => p.id === lightbox);
                if (!item) return null;
                return (
                  <>
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      sizes="100vw"
                      className="object-cover"
                      placeholder="blur"
                      blurDataURL={blurFor(item.image)}
                      priority
                    />
                    <div className="absolute bottom-0 inset-x-0 p-6 bg-gradient-to-t from-ink to-transparent">
                      <span className="inline-block px-2 py-0.5 bg-gold text-ink text-[10px] tracking-widest uppercase font-bold rounded-sm mb-2">
                        {CATEGORY_LABEL[item.category] ?? item.category}
                      </span>
                      <h3 className="font-display text-2xl text-cream">
                        {item.title}
                      </h3>
                      <p className="text-sm text-gold/80 tracking-wider">
                        {item.location}
                      </p>
                    </div>
                  </>
                );
              })()}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
