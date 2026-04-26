'use client';

import { motion } from 'framer-motion';
import { MessageCircle, ArrowRight } from 'lucide-react';
import { whatsappLink, SITE } from '@/lib/content';
import { fadeUp, viewportOnce } from '@/lib/motion';

export function CTA() {
  const orcamento = whatsappLink(
    'Olá! Gostaria de solicitar um orçamento.'
  );

  return (
    <section
      id="contato"
      className="relative py-24 md:py-36 overflow-hidden"
    >
      {/* Background dourado escuro com padrão */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse at center, #2a2110 0%, #0a0a0a 70%)',
        }}
      />
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23C9A84C' fill-opacity='0.06'%3E%3Cpath d='M40 38v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4z'/%3E%3C/g%3E%3C/svg%3E\")",
        }}
      />
      {/* glow superior e inferior */}
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-gold/15 blur-3xl" />

      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        className="container-narrow relative text-center"
      >
        <div className="gold-divider-ornament text-[11px] tracking-[0.4em] uppercase font-medium mb-6 justify-center text-gold">
          <span className="px-3 whitespace-nowrap">Vamos conversar</span>
        </div>

        <h2 className="section-title text-cream text-balance text-3xl sm:text-5xl md:text-6xl max-w-4xl mx-auto mb-6">
          Pronto para{' '}
          <span className="text-shimmer italic">transformar</span> seu espaço?
        </h2>

        <p className="text-cream/70 text-base md:text-lg max-w-2xl mx-auto mb-12 text-balance leading-relaxed">
          Solicite um orçamento gratuito e sem compromisso. Respondemos em
          minutos e organizamos uma visita técnica para entender seu projeto.
        </p>

        <motion.a
          href={orcamento}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.97 }}
          className="group relative inline-flex items-center gap-3 px-8 md:px-10 py-5 md:py-6 bg-[#25D366] text-white font-semibold tracking-wider uppercase text-sm md:text-base rounded-sm border border-gold shadow-glow-gold-lg hover:shadow-[0_0_60px_rgba(201,168,76,0.7)] transition-all duration-500 overflow-hidden animate-pulse-gold"
        >
          <MessageCircle className="w-5 h-5 md:w-6 md:h-6" />
          Chamar no WhatsApp
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </motion.a>

        <p className="text-cream/50 text-sm mt-6">
          Ou ligue:{' '}
          <a
            href={`tel:+${SITE.phoneRaw}`}
            className="text-gold hover:text-gold-light transition-colors font-medium"
          >
            {SITE.phone}
          </a>
        </p>
      </motion.div>
    </section>
  );
}
