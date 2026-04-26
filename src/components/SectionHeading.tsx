'use client';

import { motion } from 'framer-motion';
import { fadeUp, viewportOnce } from '@/lib/motion';

type Props = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
  light?: boolean;
};

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = 'center',
  light = false,
}: Props) {
  const isCenter = align === 'center';
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={viewportOnce}
      className={`mb-14 md:mb-20 ${isCenter ? 'text-center mx-auto' : 'text-left'} max-w-3xl ${isCenter ? '' : 'mr-auto'}`}
    >
      {eyebrow && (
        <div
          className={`gold-divider-ornament text-[11px] tracking-[0.4em] uppercase font-medium mb-5 ${
            isCenter ? 'justify-center' : 'justify-start'
          }`}
        >
          <span className="px-3 whitespace-nowrap">{eyebrow}</span>
        </div>
      )}
      <h2
        className={`section-title text-3xl sm:text-4xl md:text-5xl ${
          light ? 'text-cream' : 'text-cream'
        } text-balance`}
      >
        {title}
      </h2>
      {subtitle && (
        <p className="mt-5 text-cream/65 text-base md:text-lg max-w-2xl text-balance leading-relaxed mx-auto">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
