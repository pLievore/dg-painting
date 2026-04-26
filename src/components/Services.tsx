'use client';

import { motion } from 'framer-motion';
import { Home, Building2, Palette, Layers, type LucideIcon } from 'lucide-react';
import { SERVICES } from '@/lib/content';
import { fadeUp, staggerContainer, viewportOnce } from '@/lib/motion';
import { SectionHeading } from './SectionHeading';

const ICONS: Record<string, LucideIcon> = {
  Home,
  Building2,
  Palette,
  Layers,
};

export function Services() {
  return (
    <section
      id="servicos"
      className="relative py-24 md:py-32 bg-ink-soft noise overflow-hidden"
    >
      <div
        className="absolute inset-0 opacity-30 pointer-events-none"
        style={{
          backgroundImage:
            'radial-gradient(ellipse at top, rgba(201,168,76,0.12), transparent 60%)',
        }}
      />

      <div className="container-narrow relative">
        <SectionHeading
          eyebrow="O que fazemos"
          title="Nossos Serviços"
          subtitle="Soluções completas para transformar seu ambiente com qualidade premium e atenção aos detalhes."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-7"
        >
          {SERVICES.map((service) => {
            const Icon = ICONS[service.icon] ?? Home;
            return (
              <motion.article
                key={service.title}
                variants={fadeUp}
                className="glass-card group rounded-sm p-7 md:p-8 flex flex-col items-start"
              >
                <div className="relative mb-6">
                  <div className="absolute inset-0 rounded-full bg-gold/15 blur-xl group-hover:bg-gold/35 transition-all duration-500" />
                  <div className="relative w-14 h-14 rounded-full border border-gold/40 flex items-center justify-center group-hover:border-gold transition-all duration-500">
                    <Icon
                      className="w-6 h-6 text-gold group-hover:text-gold-light group-hover:scale-110 transition-all duration-500"
                      strokeWidth={1.5}
                    />
                  </div>
                </div>

                <h3 className="font-display text-xl md:text-2xl text-cream mb-3 leading-snug">
                  {service.title}
                </h3>

                <div className="w-10 h-px bg-gold/50 mb-4 group-hover:w-20 group-hover:bg-gold transition-all duration-500" />

                <p className="text-cream/65 text-sm leading-relaxed">
                  {service.description}
                </p>
              </motion.article>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
