'use client';

import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';
import { fadeUp, staggerContainer, viewportOnce } from '@/lib/motion';
import { SectionHeading } from './SectionHeading';

const CITIES = [
  {
    name: 'Londrina',
    state: 'PR',
    description: 'Atendemos a região metropolitana e cidades próximas',
    accentPosition: 'top-right',
  },
  {
    name: 'São Paulo',
    state: 'SP',
    description: 'Cobertura na grande SP e ABC paulista',
    accentPosition: 'bottom-left',
  },
] as const;

export function CoverageArea() {
  return (
    <section className="relative py-24 md:py-32 bg-ink overflow-hidden">
      <div className="container-narrow">
        <SectionHeading
          eyebrow="Cobertura"
          title="Onde Atuamos"
          subtitle="Excelência DG Pinturas em duas das principais regiões do Brasil."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-4xl mx-auto"
        >
          {CITIES.map((city) => (
            <motion.article
              key={city.name}
              variants={fadeUp}
              className="group relative aspect-[4/3] rounded-sm overflow-hidden border border-gold/20 hover:border-gold/60 transition-all duration-500 placeholder-gradient"
            >
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                style={{
                  background:
                    'radial-gradient(ellipse at center, rgba(201,168,76,0.18), transparent 70%)',
                }}
              />

              <div className="relative h-full flex flex-col justify-between p-8 md:p-10">
                <MapPin
                  className="w-8 h-8 text-gold opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500"
                  strokeWidth={1.5}
                />

                <div>
                  <div className="text-gold/70 text-xs tracking-[0.4em] uppercase mb-2">
                    {city.state}
                  </div>
                  <h3 className="font-display text-4xl md:text-5xl text-cream mb-3 leading-tight">
                    {city.name}
                  </h3>
                  <div className="gold-divider w-16 mb-4 group-hover:w-24 transition-all duration-500" />
                  <p className="text-cream/65 text-sm leading-relaxed">
                    {city.description}
                  </p>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
