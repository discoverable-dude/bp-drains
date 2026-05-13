import Icon from './Icon';
import { BP_PHONE, BP_PHONE_TEL } from '@/lib/constants';

export default function FloatingCTAs() {
  return (
    <div style={{
      position: 'fixed',
      right: 24, bottom: 24,
      display: 'flex', flexDirection: 'column', gap: 12,
      zIndex: 50,
    }}>
      <a href="/contact" title="Message us" style={{
        width: 60, height: 60, borderRadius: 999,
        border: '1px solid var(--bp-line)', background: 'var(--bp-white)',
        boxShadow: '0 6px 20px rgba(14,13,11,0.18)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
      }}>
        <Icon name="message" size={22} />
      </a>
      <a href={BP_PHONE_TEL}
        title="Call BP Drains South East — 0800 612 8038"
        aria-label="Call BP Drains South East — 0800 612 8038"
        style={{
          width: 68, height: 68, borderRadius: 999,
          border: 'none', background: 'var(--bp-red)',
          boxShadow: '0 10px 28px rgba(200,16,46,0.45)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          color: '#fff', position: 'relative',
        }}>
        <Icon name="phone" size={26} stroke="#fff" />
        <span style={{
          position: 'absolute', inset: -4, borderRadius: 999,
          border: '2px solid rgba(200,16,46,0.45)',
          animation: 'bpRing 2s ease-out infinite',
          pointerEvents: 'none',
        }} />
      </a>
    </div>
  );
}
