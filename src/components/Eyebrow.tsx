interface EyebrowProps {
  label: string;
  index?: string;
  onDark?: boolean;
}

export default function Eyebrow({ label, onDark }: EyebrowProps) {
  return (
    <div style={{
      fontFamily: 'var(--bp-font-body)',
      fontSize: 12,
      fontWeight: 600,
      letterSpacing: '0.12em',
      textTransform: 'uppercase',
      color: onDark ? 'rgba(255,255,255,0.5)' : 'var(--bp-fg-muted)',
    }}>
      {label}
    </div>
  );
}
