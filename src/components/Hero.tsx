'use client';

import Image from 'next/image';
import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, MessageCircle, Images } from 'lucide-react';
import { whatsappLink, SITE } from '@/lib/content';

/**
 * Slogan ativo do hero.
 * Outras opções (descomente para trocar):
 *   "12 anos elevando o padrão em pintura e acabamentos"
 *   "Excelência em cada pincelada"
 */
const HEADLINE = 'Transformamos paredes em obras de arte';

export function Hero() {
  const orcamento = whatsappLink(
    'Olá! Gostaria de solicitar um orçamento.'
  );

  const words = HEADLINE.split(' ');
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoReady, setVideoReady] = useState(false);

  return (
    <section
      id="inicio"
      className="relative h-screen min-h-[640px] w-full overflow-hidden bg-ink"
    >
      {/* Camada base: fundo abstrato dourado/preto enquanto o vídeo não chega.
          Não usamos a hero-bg.png direta porque ela já contém a logo grande,
          o que faria parecer "duplicada" enquanto o vídeo carrega. */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse at center, #2a2110 0%, #0f0c06 45%, #0a0a0a 100%)',
        }}
      />
      <div
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg width='120' height='120' viewBox='0 0 120 120' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23C9A84C' fill-opacity='0.08'%3E%3Cpath d='M60 58v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4z'/%3E%3C/g%3E%3C/svg%3E\")",
        }}
      />

      {/* TODO: Para trocar o vídeo, substituir /public/images/hero.mp4 (MP4, max 10MB) */}
      {/* Vídeo entra com fade suave quando estiver pronto — elimina o salto fundo→vídeo */}
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        // onLoadedData = primeiros frames disponíveis (mais rápido que onCanPlay)
        onLoadedData={() => {
          videoRef.current?.play().catch(() => {});
          setVideoReady(true);
        }}
        onPlaying={() => setVideoReady(true)}
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-out ${
          videoReady ? 'opacity-100' : 'opacity-0'
        }`}
        aria-hidden="true"
      >
        <source src="/images/hero.mp4" type="video/mp4" />
      </video>

      {/* overlay para legibilidade */}
      <div className="absolute inset-0 bg-gradient-to-b from-ink/60 via-ink/55 to-ink/85" />
      <div className="absolute inset-0 bg-radial-vignette pointer-events-none" style={{
        background: 'radial-gradient(ellipse at center, transparent 30%, rgba(10,10,10,0.7) 100%)',
      }} />

      {/* partículas douradas sutis */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        {[...Array(12)].map((_, i) => (
          <span
            key={i}
            className="absolute block rounded-full bg-gold-light opacity-40 animate-float"
            style={{
              width: `${2 + Math.random() * 3}px`,
              height: `${2 + Math.random() * 3}px`,
              left: `${(i * 8.3) % 100}%`,
              top: `${(i * 13) % 90}%`,
              animationDelay: `${i * 0.7}s`,
              animationDuration: `${6 + (i % 4) * 2}s`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 h-full flex flex-col items-center justify-center px-6 text-center">
        <motion.div
          initial={{ scale: 0.6, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, ease: [0.2, 0.8, 0.2, 1], delay: 0.4 }}
          className="mb-8 drop-shadow-[0_0_30px_rgba(201,168,76,0.4)]"
        >
          <Image
            src="/images/logo.png"
            alt="DG Pinturas"
            width={200}
            height={200}
            priority
            className="w-32 sm:w-40 md:w-48 h-auto"
          />
        </motion.div>

        <h1 className="section-title text-cream text-balance text-3xl sm:text-5xl md:text-6xl lg:text-7xl max-w-5xl mb-6 leading-tight">
          {words.map((word, i) => (
            <motion.span
              key={`${word}-${i}`}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: 0.9 + i * 0.12,
                ease: [0.2, 0.8, 0.2, 1],
              }}
              className="inline-block mr-[0.25em]"
            >
              {word === 'arte' ? (
                <span className="text-shimmer italic">{word}</span>
              ) : (
                word
              )}
            </motion.span>
          ))}
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.6 }}
          className="text-cream/80 text-base sm:text-lg md:text-xl tracking-wide mb-10 max-w-2xl"
        >
          Pinturas e Acabamentos Premium
          <span className="mx-3 text-gold">|</span>
          {SITE.cities.join(' & ')}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.85 }}
          className="flex flex-col sm:flex-row items-center gap-4"
        >
          <a href="#portfolio" className="btn-outline-gold">
            <Images className="w-4 h-4" />
            Ver Portfólio
          </a>
          <a
            href={orcamento}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold"
          >
            <MessageCircle className="w-4 h-4" />
            Fale Conosco
          </a>
        </motion.div>
      </div>

      <motion.a
        href="#servicos"
        aria-label="Rolar para baixo"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-gold/80 hover:text-gold transition-colors"
      >
        <span className="text-[10px] tracking-[0.3em] uppercase">Role</span>
        <motion.span
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ChevronDown className="w-6 h-6" />
        </motion.span>
      </motion.a>
    </section>
  );
}
