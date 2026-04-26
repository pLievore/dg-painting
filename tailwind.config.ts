import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: '#0A0A0A',
          soft: '#1A1A1A',
          card: '#2A2A2A',
        },
        gold: {
          DEFAULT: '#C9A84C',
          light: '#E8D48B',
          dark: '#8B7332',
        },
        cream: '#F5F0E8',
      },
      fontFamily: {
        display: ['var(--font-playfair)', 'Georgia', 'serif'],
        sans: ['var(--font-raleway)', 'system-ui', 'sans-serif'],
        numeric: ['var(--font-cormorant)', 'Georgia', 'serif'],
      },
      boxShadow: {
        'glow-gold': '0 0 24px rgba(201, 168, 76, 0.35)',
        'glow-gold-lg': '0 0 48px rgba(201, 168, 76, 0.55)',
      },
      backgroundImage: {
        'gold-gradient':
          'linear-gradient(135deg, #8B7332 0%, #C9A84C 50%, #E8D48B 100%)',
        'gold-shimmer':
          'linear-gradient(110deg, #8B7332 0%, #E8D48B 30%, #C9A84C 50%, #E8D48B 70%, #8B7332 100%)',
        'ink-fade':
          'linear-gradient(180deg, rgba(10,10,10,0.4) 0%, rgba(10,10,10,0.85) 100%)',
      },
      animation: {
        'pulse-gold': 'pulseGold 2.5s ease-in-out infinite',
        'shimmer': 'shimmer 6s linear infinite',
        'bounce-slow': 'bounce 2.4s ease-in-out infinite',
        'pulse-ring': 'pulseRing 2s cubic-bezier(0.4,0,0.6,1) infinite',
        'float': 'float 8s ease-in-out infinite',
      },
      keyframes: {
        pulseGold: {
          '0%, 100%': { boxShadow: '0 0 0 0 rgba(201, 168, 76, 0.6)' },
          '50%': { boxShadow: '0 0 0 18px rgba(201, 168, 76, 0)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '0% 50%' },
          '100%': { backgroundPosition: '200% 50%' },
        },
        pulseRing: {
          '0%': { transform: 'scale(1)', opacity: '0.7' },
          '100%': { transform: 'scale(1.8)', opacity: '0' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
