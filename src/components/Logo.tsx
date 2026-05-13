import Link from 'next/link';

interface LogoProps {
  onDark?: boolean;
  size?: 'sm' | 'md' | 'lg';
}

export default function Logo({ onDark, size = 'md' }: LogoProps) {
  const fg = onDark ? '#FFFFFF' : 'var(--bp-ink)';
  const heightMap = { sm: 22, md: 28, lg: 40 };
  const h = heightMap[size];

  return (
    <Link href="/" style={{ display: 'inline-flex', alignItems: 'center', gap: 10 }}>
      <svg width={h} height={h} viewBox="0 0 40 40" style={{ flex: '0 0 auto' }} aria-hidden>
        <rect width="40" height="40" rx="3" fill={fg} />
        <path d="M11 28 L11 12 L20 12 Q26 12 26 17 Q26 20 23 21 Q27 22 27 25 Q27 28 21 28 Z M15.5 19 L20 19 Q22 19 22 17.5 Q22 16 20 16 L15.5 16 Z M15.5 24.5 L20.5 24.5 Q23 24.5 23 23 Q23 21.5 20.5 21.5 L15.5 21.5 Z" fill="#C8102E" />
      </svg>
      <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 1 }}>
        <span style={{
          fontFamily: 'var(--bp-font-display)',
          fontWeight: 800,
          fontSize: h * 0.62,
          letterSpacing: '-0.03em',
          color: fg,
        }}>BP DRAINS</span>
        <span style={{
          fontFamily: 'var(--bp-font-mono)',
          fontSize: h * 0.30,
          letterSpacing: '0.18em',
          color: onDark ? 'rgba(255,255,255,0.55)' : 'var(--bp-fg-muted)',
          marginTop: 3,
        }}>SOUTH&nbsp;EAST · EST.&nbsp;2009</span>
      </div>
    </Link>
  );
}
