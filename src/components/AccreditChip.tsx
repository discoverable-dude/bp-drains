import Image from 'next/image';
import Icon from './Icon';

interface AccreditChipProps {
  name: string;
  sub: string;
  mark: string;
  logoSrc?: string;
}

export default function AccreditChip({ name, sub, mark, logoSrc }: AccreditChipProps) {
  return (
    <div style={{
      background: 'var(--bp-white)', border: '1px solid var(--bp-line)',
      borderRadius: 'var(--bp-r-2)', padding: 'var(--bp-card-pad)',
      display: 'flex', alignItems: 'center', gap: 14,
      minHeight: 88, cursor: 'pointer',
    }}>
      <div style={{
        width: 48, height: 48, flexShrink: 0,
        background: 'var(--bp-stone-100)',
        border: '1px solid var(--bp-line-strong)',
        borderRadius: 'var(--bp-r-1)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        fontFamily: 'var(--bp-font-display)', fontWeight: 800, fontSize: 14,
        letterSpacing: '-0.02em', color: 'var(--bp-ink)',
        overflow: 'hidden', padding: logoSrc ? 6 : 0,
      }}>
        {logoSrc
          ? <Image src={logoSrc} alt={name} width={36} height={36} style={{ objectFit: 'contain', width: '100%', height: '100%' }} />
          : mark}
      </div>
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{ fontWeight: 600, fontSize: 14, lineHeight: 1.2 }}>{name}</div>
        <div style={{
          fontFamily: 'var(--bp-font-mono)', fontSize: 11, letterSpacing: '0.08em',
          textTransform: 'uppercase', color: 'var(--bp-fg-muted)', marginTop: 4,
        }}>{sub}</div>
      </div>
      <Icon name="plus" size={16} stroke="var(--bp-fg-muted)" />
    </div>
  );
}
