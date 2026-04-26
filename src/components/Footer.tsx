'use client';

import { motion } from 'framer-motion';
import { Phone, Mail, Instagram, MapPin, MessageCircle } from 'lucide-react';
import { Logo } from './Logo';
import { NAV_LINKS, SITE, whatsappLink } from '@/lib/content';

export function Footer() {
  const year = new Date().getFullYear();
  const wa = whatsappLink('Olá! Vi o site da DG Pinturas.');

  return (
    <footer className="relative bg-ink-soft border-t border-gold/15">
      {/* divisor ornamental */}
      <div className="container-narrow pt-12">
        <div className="gold-divider-ornament">
          <span className="text-gold/60 text-lg">❖</span>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="container-narrow py-12 md:py-16"
      >
        {/* Logo central */}
        <div className="flex flex-col items-center text-center mb-12">
          <Logo size={88} />
          <p className="font-display italic text-gold-light/80 text-sm mt-4 tracking-wide">
            Pinturas e Acabamentos Premium
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8 max-w-5xl mx-auto">
          {/* Links de navegação */}
          <div>
            <h4 className="text-gold text-xs tracking-[0.3em] uppercase font-semibold mb-4">
              Navegação
            </h4>
            <ul className="space-y-2.5">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-cream/65 hover:text-gold text-sm transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h4 className="text-gold text-xs tracking-[0.3em] uppercase font-semibold mb-4">
              Contato
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href={`tel:+${SITE.phoneRaw}`}
                  className="flex items-start gap-2.5 text-cream/65 hover:text-gold transition-colors"
                >
                  <Phone className="w-4 h-4 mt-0.5 text-gold flex-shrink-0" />
                  <span>{SITE.phone}</span>
                </a>
              </li>
              <li>
                <a
                  href={wa}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-2.5 text-cream/65 hover:text-gold transition-colors"
                >
                  <MessageCircle className="w-4 h-4 mt-0.5 text-gold flex-shrink-0" />
                  <span>WhatsApp: {SITE.phone}</span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${SITE.email}`}
                  className="flex items-start gap-2.5 text-cream/65 hover:text-gold transition-colors break-all"
                >
                  <Mail className="w-4 h-4 mt-0.5 text-gold flex-shrink-0" />
                  <span>{SITE.email}</span>
                </a>
              </li>
              <li>
                <a
                  href={SITE.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-2.5 text-cream/65 hover:text-gold transition-colors"
                >
                  <Instagram className="w-4 h-4 mt-0.5 text-gold flex-shrink-0" />
                  <span>@{SITE.instagram}</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Atuação */}
          <div>
            <h4 className="text-gold text-xs tracking-[0.3em] uppercase font-semibold mb-4">
              Atendemos
            </h4>
            <ul className="space-y-2.5">
              {SITE.cities.map((city) => (
                <li
                  key={city}
                  className="flex items-start gap-2.5 text-cream/65 text-sm"
                >
                  <MapPin className="w-4 h-4 mt-0.5 text-gold flex-shrink-0" />
                  <span>{city}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </motion.div>

      <div className="border-t border-gold/10">
        <div className="container-narrow py-6 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-cream/45">
          <p>
            © {year} {SITE.name} — Todos os direitos reservados.
          </p>
          <p>
            Entre em contato - desenvolvedor{' '}
            <a
              href="https://pauloleoni.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Portfólio de Paulo Lievore Leoni"
              className="text-gold/80 hover:text-gold transition-colors"
            >
              https://pauloleoni.vercel.app/
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
