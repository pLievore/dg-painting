import Image from 'next/image';
import Link from 'next/link';

type Props = {
  size?: number;
  href?: string | null;
  className?: string;
  priority?: boolean;
};

/**
 * Logo da DG Pinturas.
 * Para trocar o arquivo: substituir /public/images/logo.png mantendo o nome.
 * Recomendado PNG com fundo transparente, no mínimo 512x512px.
 */
export function Logo({
  size = 64,
  href = '#inicio',
  className = '',
  priority = false,
}: Props) {
  const img = (
    <Image
      src="/images/logo.png"
      alt="DG Pinturas — Pinturas e Acabamentos"
      width={size}
      height={size}
      priority={priority}
      className={`h-auto w-auto ${className}`}
      style={{ maxHeight: size, width: 'auto' }}
    />
  );

  if (!href) return img;
  return (
    <Link href={href} aria-label="DG Pinturas — voltar ao início" className="inline-flex">
      {img}
    </Link>
  );
}
