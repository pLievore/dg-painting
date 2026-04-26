'use client';

import { useEffect, useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Quote, Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { TESTIMONIALS } from '@/lib/content';
import { SectionHeading } from './SectionHeading';

const AUTOPLAY_MS = 6000;

export function Testimonials() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  const goTo = useCallback((i: number) => {
    setIndex((i + TESTIMONIALS.length) % TESTIMONIALS.length);
  }, []);

  const next = useCallback(() => goTo(index + 1), [goTo, index]);
  const prev = useCallback(() => goTo(index - 1), [goTo, index]);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(next, AUTOPLAY_MS);
    return () => clearInterval(id);
  }, [next, paused]);

  const current = TESTIMONIALS[index];
  if (!current) return null;

  return (
    <section
      className="relative py-24 md:py-32 bg-ink-soft noise overflow-hidden"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div
        className="absolute inset-0 opacity-40 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse at center, rgba(201,168,76,0.1), transparent 70%)',
        }}
      />

      <div className="container-narrow relative">
        <SectionHeading
          eyebrow="Depoimentos"
          title="O Que Dizem Nossos Clientes"
          subtitle="A confiança de quem viveu a experiência DG Pinturas."
        />

        <div className="relative max-w-3xl mx-auto">
          <Quote
            className="absolute -top-6 left-1/2 -translate-x-1/2 w-16 h-16 text-gold/25"
            strokeWidth={1}
          />

          <div className="relative min-h-[280px] md:min-h-[240px] flex items-center justify-center px-4 pt-12">
            <AnimatePresence mode="wait">
              <motion.figure
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5, ease: [0.2, 0.8, 0.2, 1] }}
                className="text-center"
              >
                <div className="flex items-center justify-center gap-1 mb-6">
                  {Array.from({ length: current.rating }).map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 text-gold fill-gold"
                      strokeWidth={1}
                    />
                  ))}
                </div>

                <blockquote className="font-display italic text-xl md:text-2xl text-cream leading-relaxed mb-8 text-balance">
                  &ldquo;{current.text}&rdquo;
                </blockquote>

                <figcaption className="space-y-1">
                  <div className="font-semibold text-cream tracking-wide">
                    {current.name}
                  </div>
                  <div className="text-xs tracking-[0.25em] uppercase text-gold/80">
                    {current.service} · {current.location}
                  </div>
                </figcaption>
              </motion.figure>
            </AnimatePresence>
          </div>

          {/* controles */}
          <div className="flex items-center justify-center gap-6 mt-10">
            <button
              type="button"
              aria-label="Anterior"
              onClick={prev}
              className="w-11 h-11 rounded-full border border-gold/40 text-gold flex items-center justify-center hover:bg-gold hover:text-ink transition-all"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2">
              {TESTIMONIALS.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  aria-label={`Ir para depoimento ${i + 1}`}
                  onClick={() => goTo(i)}
                  className={`h-1.5 rounded-full transition-all duration-400 ${
                    i === index ? 'w-10 bg-gold' : 'w-2 bg-cream/25 hover:bg-cream/50'
                  }`}
                />
              ))}
            </div>

            <button
              type="button"
              aria-label="Próximo"
              onClick={next}
              className="w-11 h-11 rounded-full border border-gold/40 text-gold flex items-center justify-center hover:bg-gold hover:text-ink transition-all"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        <p className="text-center text-cream/40 text-xs tracking-widest mt-12">
          {/* TODO: Adicionar/editar depoimentos em src/lib/content.ts (TESTIMONIALS) */}
        </p>
      </div>
    </section>
  );
}
