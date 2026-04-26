'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, MessageCircle } from 'lucide-react';
import { Logo } from './Logo';
import { NAV_LINKS, whatsappLink } from '@/lib/content';

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  const orcamento = whatsappLink(
    'Olá! Gostaria de solicitar um orçamento.'
  );

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.2, 0.8, 0.2, 1], delay: 0.2 }}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled || open
          ? 'bg-ink/85 backdrop-blur-md border-b border-gold/15 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <nav className="container-narrow flex items-center justify-between">
        <Logo size={scrolled || open ? 48 : 60} priority />

        <div className="hidden lg:flex items-center gap-10">
          <ul className="flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm font-medium tracking-wider uppercase text-cream/85 hover:text-gold transition-colors duration-300 relative group"
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-px bg-gold-light transition-all duration-300 group-hover:w-full" />
                </a>
              </li>
            ))}
          </ul>
          <a
            href={orcamento}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold !py-2.5 !px-5 !text-xs"
          >
            <MessageCircle className="w-4 h-4" />
            Solicite um Orçamento
          </a>
        </div>

        <button
          type="button"
          aria-label={open ? 'Fechar menu' : 'Abrir menu'}
          onClick={() => setOpen((v) => !v)}
          className="lg:hidden p-2 text-gold hover:text-gold-light transition-colors"
        >
          {open ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35, ease: 'easeInOut' }}
            className="lg:hidden overflow-hidden bg-ink/95 backdrop-blur-md border-t border-gold/15"
          >
            <ul className="container-narrow flex flex-col gap-1 py-6">
              {NAV_LINKS.map((link, i) => (
                <motion.li
                  key={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 * i }}
                >
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="block py-3 text-base font-medium tracking-wider uppercase text-cream/90 hover:text-gold border-b border-gold/10"
                  >
                    {link.label}
                  </a>
                </motion.li>
              ))}
              <motion.li
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                className="pt-4"
              >
                <a
                  href={orcamento}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-gold w-full"
                  onClick={() => setOpen(false)}
                >
                  <MessageCircle className="w-4 h-4" />
                  Solicite um Orçamento
                </a>
              </motion.li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
