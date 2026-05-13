import { CSSProperties } from 'react';

interface ImageSlotProps {
  label?: string;
  ratio?: string;
  height?: number | string;
  dark?: boolean;
  style?: CSSProperties;
  accent?: boolean;
}

export default function ImageSlot({ label, ratio, height, dark, style, accent }: ImageSlotProps) {
  const fg = dark ? 'rgba(255,255,255,0.10)' : 'rgba(14,13,11,0.08)';
  const bg = dark ? '#1A1816' : '#D9D6D1';
  const labelBg = dark ? '#0E0D0B' : '#F6F5F2';
  const labelFg = dark ? 'rgba(255,255,255,0.65)' : 'rgba(14,13,11,0.55)';

  return (
    <div style={{
      position: 'relative',
      width: '100%',
      aspectRatio: ratio,
      height,
      background: bg,
      backgroundImage: `repeating-linear-gradient(45deg, ${fg} 0 1.5px, transparent 1.5px 14px)`,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      overflow: 'hidden',
      borderRadius: 'var(--bp-r-2)',
      ...style,
    }}>
      {accent && (
        <div style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(180deg, rgba(14,13,11,0) 60%, rgba(14,13,11,0.35) 100%)',
        }} />
      )}
      {label && (
        <span style={{
          position: 'relative',
          background: labelBg,
          color: labelFg,
          fontFamily: 'var(--bp-font-mono)',
          fontSize: 11,
          letterSpacing: '0.1em',
          textTransform: 'uppercase',
          padding: '6px 10px',
          borderRadius: 2,
          textAlign: 'center',
          lineHeight: 1.3,
          maxWidth: '80%',
        }}>{label}</span>
      )}
    </div>
  );
}
