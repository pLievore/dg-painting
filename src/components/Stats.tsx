'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { STATS } from '@/lib/content';

function formatValue(value: number, format?: string): string {
  if (format === 'thousands') {
    return value.toLocaleString('pt-BR');
  }
  return String(value);
}

function Counter({
  value,
  suffix,
  format,
  duration = 2200,
  start,
}: {
  value: number;
  suffix: string;
  format?: string;
  duration?: number;
  start: boolean;
}) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!start) return;
    let raf = 0;
    const startTime = performance.now();
    const tick = (now: number) => {
      const elapsed = now - startTime;
      const t = Math.min(1, elapsed / duration);
      // easeOutCubic
      const eased = 1 - Math.pow(1 - t, 3);
      setCurrent(Math.round(value * eased));
      if (t < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [start, value, duration]);

  return (
    <span>
      {formatValue(current, format)}
      {suffix}
    </span>
  );
}

export function Stats() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.4 });

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ['-15%', '15%']);

  return (
    <section ref={ref} className="relative py-24 md:py-32 overflow-hidden">
      {/* TODO: Para personalizar, trocar o background — usando hero-bg.png como parallax */}
      <motion.div
        style={{ y: bgY }}
        className="absolute inset-0 -top-[15%] -bottom-[15%]"
      >
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url(/images/hero-bg.png)' }}
        />
      </motion.div>
      <div className="absolute inset-0 bg-ink/85" />
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(180deg, rgba(10,10,10,0.5) 0%, rgba(10,10,10,0.92) 50%, rgba(10,10,10,0.5) 100%)',
        }}
      />

      <div className="container-narrow relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-gold text-xs tracking-[0.4em] uppercase">
            Em números
          </p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-12 gap-x-6">
          {STATS.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              className="text-center px-2 group"
            >
              <div className="font-numeric text-5xl sm:text-6xl md:text-7xl text-shimmer leading-none mb-3 font-semibold">
                {stat.value > 0 && (
                  <Counter
                    value={stat.value}
                    suffix={stat.suffix}
                    format={'format' in stat ? stat.format : undefined}
                    start={inView}
                  />
                )}
              </div>
              <div className="gold-divider w-12 mx-auto mb-3 group-hover:w-20 transition-all duration-500" />
              <div className="text-cream/85 text-xs sm:text-sm tracking-[0.25em] uppercase font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
