'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { SITE, DIFFERENTIALS } from '@/lib/content';
import { fadeLeft, fadeRight, viewportOnce, staggerContainer, fadeUp } from '@/lib/motion';
import { BLUR_PLACEHOLDERS } from '@/lib/blur-placeholders';

export function About() {
  return (
    <section
      id="sobre"
      className="relative py-24 md:py-32 bg-ink-soft noise overflow-hidden"
    >
      <div className="container-narrow grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
        {/* Foto */}
        <motion.div
          variants={fadeLeft}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="lg:col-span-5 relative"
        >
          <div className="relative aspect-[4/5] max-w-md mx-auto lg:mx-0 rounded-sm overflow-hidden border border-gold/30 shadow-glow-gold bg-ink-soft">
            <Image
              src="/images/team/guilherme.jpg"
              alt={`${SITE.founder} — Fundador da DG Pinturas`}
              fill
              sizes="(min-width: 1024px) 40vw, (min-width: 640px) 60vw, 90vw"
              className="object-cover"
              placeholder="blur"
              blurDataURL={BLUR_PLACEHOLDERS.guilherme}
            />
            {/* gradiente sutil de baixo pra cima para integrar com o fundo */}
            <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-ink-soft/60 to-transparent pointer-events-none" />
          </div>

          {/* badge anos de experiência sobreposto */}
          <div className="absolute -bottom-6 -right-2 lg:-right-6 bg-ink border border-gold rounded-sm px-6 py-4 shadow-glow-gold-lg">
            <div className="font-numeric text-4xl text-shimmer font-semibold leading-none">
              {SITE.yearsExperience}
            </div>
            <div className="text-[10px] tracking-[0.25em] uppercase text-cream/70 mt-1">
              Anos de
              <br />
              Experiência
            </div>
          </div>
        </motion.div>

        {/* Texto */}
        <motion.div
          variants={fadeRight}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="lg:col-span-7"
        >
          <p className="text-gold text-xs tracking-[0.4em] uppercase mb-4">
            Quem Somos
          </p>
          <h2 className="section-title text-3xl sm:text-4xl md:text-5xl text-cream mb-2">
            {SITE.founder}
          </h2>
          <p className="text-gold-light/90 italic font-display text-lg mb-8">
            Fundador — DG Pinturas
          </p>

          <div className="gold-divider w-24 mb-8" />

          <p className="text-cream/75 text-base md:text-lg leading-relaxed mb-10">
            Com mais de {SITE.yearsExperience} anos dedicados ao mercado de
            pintura e acabamentos, fundei a DG Pinturas com um propósito claro:{' '}
            <span className="text-cream">entregar excelência em cada projeto</span>.
            Atuando em Londrina e São Paulo, nossa missão é transformar
            ambientes com técnica, qualidade e atenção aos detalhes. Cada
            parede que pintamos carrega o nosso compromisso com a perfeição.
          </p>

          <motion.ul
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            className="space-y-3"
          >
            {DIFFERENTIALS.map((item) => (
              <motion.li
                key={item}
                variants={fadeUp}
                className="flex items-start gap-3 text-cream/85"
              >
                <span className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-gold/15 border border-gold/50 flex items-center justify-center">
                  <Check className="w-3 h-3 text-gold" strokeWidth={3} />
                </span>
                <span className="text-base">{item}</span>
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>
      </div>
    </section>
  );
}
