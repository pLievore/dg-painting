'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import {
  Phone,
  ClipboardCheck,
  FileText,
  Brush,
  Sparkles,
  type LucideIcon,
} from 'lucide-react';
import { PROCESS_STEPS } from '@/lib/content';
import { SectionHeading } from './SectionHeading';

const ICONS: Record<string, LucideIcon> = {
  Phone,
  ClipboardCheck,
  FileText,
  Brush,
  Sparkles,
};

export function Process() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 70%', 'end 30%'],
  });
  const lineHeight = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  return (
    <section className="relative py-24 md:py-32 bg-ink overflow-hidden">
      <div className="container-narrow">
        <SectionHeading
          eyebrow="Processo"
          title="Como Trabalhamos"
          subtitle="Transparência do primeiro contato à entrega final."
        />

        <div ref={ref} className="relative max-w-4xl mx-auto">
          {/* Linha vertical (mobile) e horizontal (desktop) */}
          {/* Mobile: linha vertical à esquerda */}
          <div className="md:hidden absolute left-6 top-0 bottom-0 w-px bg-gold/15" />
          <motion.div
            style={{ height: lineHeight }}
            className="md:hidden absolute left-6 top-0 w-px bg-gradient-to-b from-gold via-gold-light to-gold origin-top"
          />

          {/* Desktop: linha horizontal centralizada */}
          <div className="hidden md:block absolute top-7 left-0 right-0 h-px bg-gold/15" />
          <motion.div
            style={{ width: lineHeight }}
            className="hidden md:block absolute top-7 left-0 h-px bg-gradient-to-r from-gold via-gold-light to-gold origin-left"
          />

          <ul className="grid grid-cols-1 md:grid-cols-5 gap-10 md:gap-4 relative">
            {PROCESS_STEPS.map((step, i) => {
              const Icon = ICONS[step.icon] ?? Phone;
              return (
                <motion.li
                  key={step.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.6, delay: i * 0.15 }}
                  className="relative flex md:flex-col items-start md:items-center gap-5 md:gap-4 md:text-center"
                >
                  <div className="relative z-10 flex-shrink-0 w-14 h-14 rounded-full bg-ink border-2 border-gold flex items-center justify-center shadow-glow-gold">
                    <Icon className="w-6 h-6 text-gold" strokeWidth={1.5} />
                  </div>
                  <div className="md:px-2">
                    <div className="text-gold/70 text-[10px] tracking-[0.3em] uppercase mb-1">
                      Etapa 0{i + 1}
                    </div>
                    <h4 className="font-display text-lg md:text-xl text-cream mb-2 leading-tight">
                      {step.title}
                    </h4>
                    <p className="text-cream/65 text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </motion.li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
