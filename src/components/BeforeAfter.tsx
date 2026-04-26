'use client';

import Image from 'next/image';
import { useRef, useState, useCallback, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { BEFORE_AFTER_ITEMS } from '@/lib/content';
import { BLUR_PLACEHOLDERS } from '@/lib/blur-placeholders';

const blurFor = (src: string) => {
  const key = src.split('/').pop()?.replace(/\.\w+$/, '') ?? '';
  return BLUR_PLACEHOLDERS[key];
};

function Slider({
  title,
  location,
  before,
  after,
}: {
  title: string;
  location: string;
  before: string;
  after: string;
}) {
  const [pos, setPos] = useState(50);
  const ref = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);

  const handleMove = useCallback((clientX: number) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const pct = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setPos(pct);
  }, []);

  useEffect(() => {
    const onMove = (e: MouseEvent | TouchEvent) => {
      if (!dragging.current) return;
      const clientX =
        'touches' in e ? e.touches[0]?.clientX ?? 0 : (e as MouseEvent).clientX;
      handleMove(clientX);
    };
    const onUp = () => {
      dragging.current = false;
    };
    window.addEventListener('mousemove', onMove);
    window.addEventListener('touchmove', onMove, { passive: true });
    window.addEventListener('mouseup', onUp);
    window.addEventListener('touchend', onUp);
    return () => {
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('touchmove', onMove);
      window.removeEventListener('mouseup', onUp);
      window.removeEventListener('touchend', onUp);
    };
  }, [handleMove]);

  return (
    <div className="space-y-4">
      <div
        ref={ref}
        className="relative aspect-[16/10] w-full overflow-hidden rounded-sm border border-gold/20 select-none cursor-ew-resize touch-none shadow-glow-gold bg-ink-soft"
        onMouseDown={(e) => {
          dragging.current = true;
          handleMove(e.clientX);
        }}
        onTouchStart={(e) => {
          dragging.current = true;
          if (e.touches[0]) handleMove(e.touches[0].clientX);
        }}
      >
        {/* Camada DEPOIS: ocupa o container inteiro */}
        <Image
          src={after}
          alt={`${title} — depois`}
          fill
          sizes="(min-width: 1024px) 50vw, 100vw"
          className="object-cover pointer-events-none"
          draggable={false}
          placeholder="blur"
          blurDataURL={blurFor(after)}
        />
        <span className="absolute top-4 right-4 z-20 px-3 py-1.5 bg-gold text-ink text-xs font-bold tracking-widest uppercase rounded-sm shadow">
          Depois
        </span>

        {/* Camada ANTES: clip-path mostra apenas a faixa esquerda até `pos%` */}
        <div
          className="absolute inset-0"
          style={{
            clipPath: `polygon(0 0, ${pos}% 0, ${pos}% 100%, 0 100%)`,
            WebkitClipPath: `polygon(0 0, ${pos}% 0, ${pos}% 100%, 0 100%)`,
          }}
        >
          <Image
            src={before}
            alt={`${title} — antes`}
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover pointer-events-none"
            draggable={false}
            placeholder="blur"
            blurDataURL={blurFor(before)}
          />
        </div>
        <span
          className="absolute top-4 z-20 px-3 py-1.5 bg-ink/80 text-cream text-xs font-bold tracking-widest uppercase rounded-sm border border-gold/30 backdrop-blur transition-opacity"
          style={{
            left: '1rem',
            opacity: pos > 12 ? 1 : 0,
          }}
        >
          Antes
        </span>

        {/* Divisor vertical com handle */}
        <div
          className="absolute inset-y-0 w-0.5 bg-gold pointer-events-none z-30"
          style={{ left: `${pos}%`, transform: 'translateX(-50%)' }}
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-gold border-4 border-ink shadow-glow-gold flex items-center justify-center">
            <ChevronLeft className="w-3 h-3 text-ink" strokeWidth={3} />
            <ChevronRight className="w-3 h-3 text-ink" strokeWidth={3} />
          </div>
        </div>
      </div>

      <div className="flex items-baseline justify-between">
        <h4 className="font-display text-lg text-cream">{title}</h4>
        <span className="text-xs tracking-widest uppercase text-gold/70">
          {location}
        </span>
      </div>
    </div>
  );
}

export function BeforeAfter() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.7 }}
      className="space-y-12 mb-20"
    >
      <div className="text-center">
        <p className="text-gold text-xs tracking-[0.4em] uppercase mb-2">
          Arraste para comparar
        </p>
        <h3 className="font-display text-2xl md:text-3xl text-cream">
          Antes & Depois
        </h3>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {BEFORE_AFTER_ITEMS.map((item) => (
          <Slider
            key={item.id}
            title={item.title}
            location={item.location}
            before={item.before}
            after={item.after}
          />
        ))}
      </div>
    </motion.div>
  );
}
