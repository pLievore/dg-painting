type Props = {
  label?: string;
  variant?: 'a' | 'b';
  className?: string;
};

/**
 * Placeholder elegante para fotos do portfólio que ainda não chegaram.
 * Trocar por <Image src=... /> quando a foto real estiver em /public/images/portfolio/.
 */
export function PortfolioPlaceholder({
  label,
  variant = 'a',
  className = '',
}: Props) {
  const gradient =
    variant === 'a'
      ? 'linear-gradient(135deg, #1a1a1a 0%, #2a2a2a 60%, #0a0a0a 100%)'
      : 'linear-gradient(225deg, #1a1a1a 0%, #2a2a2a 60%, #0a0a0a 100%)';

  return (
    <div
      className={`relative w-full h-full overflow-hidden ${className}`}
      style={{ background: gradient }}
      aria-hidden="true"
    >
      <div
        className="absolute inset-0 opacity-30"
        style={{
          background:
            'radial-gradient(ellipse at center, rgba(201,168,76,0.25) 0%, transparent 65%)',
        }}
      />
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23C9A84C' fill-opacity='0.1'%3E%3Cpath d='M40 38v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4z'/%3E%3C/g%3E%3C/svg%3E\")",
        }}
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center text-gold/60">
        <svg
          viewBox="0 0 40 40"
          className="w-10 h-10 mb-2 opacity-50"
          fill="currentColor"
        >
          <path d="M20 4 L24 14 L34 16 L26 23 L28 34 L20 28 L12 34 L14 23 L6 16 L16 14 Z" />
        </svg>
        {label && (
          <span className="font-display text-sm tracking-widest uppercase opacity-70">
            {label}
          </span>
        )}
      </div>
    </div>
  );
}
