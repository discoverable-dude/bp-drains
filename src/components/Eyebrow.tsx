interface EyebrowProps {
  index: string;
  label: string;
  onDark?: boolean;
}

export default function Eyebrow({ index, label, onDark }: EyebrowProps) {
  return (
    <div style={{
      display: 'flex', alignItems: 'center', gap: 12,
      fontFamily: 'var(--bp-font-mono)', fontSize: 12, letterSpacing: '0.12em',
      textTransform: 'uppercase',
      color: onDark ? 'rgba(255,255,255,0.65)' : 'var(--bp-fg-muted)',
    }}>
      <span style={{
        fontVariantNumeric: 'tabular-nums',
        color: onDark ? 'rgba(255,255,255,0.4)' : 'var(--bp-fg-faint)',
      }}>{index}</span>
      <span style={{
        width: 28, height: 1,
        background: onDark ? 'rgba(255,255,255,0.3)' : 'var(--bp-line-strong)',
        display: 'block', flexShrink: 0,
      }} />
      <span>{label}</span>
    </div>
  );
}
