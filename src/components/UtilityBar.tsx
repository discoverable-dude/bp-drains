import Icon from './Icon';
import { BP_PHONE, BP_PHONE_TEL } from '@/lib/constants';

export default function UtilityBar() {
  return (
    <div style={{
      background: 'var(--bp-ink)', color: 'var(--bp-white)',
      borderBottom: '1px solid rgba(255,255,255,0.08)',
    }}>
      <div style={{
        maxWidth: 'var(--bp-container)', margin: '0 auto',
        padding: '10px var(--bp-gutter)',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        fontSize: 13,
      }}>
        <span style={{
          display: 'inline-flex', alignItems: 'center', gap: 8,
          background: 'var(--bp-red)', color: '#fff',
          padding: '4px 10px', borderRadius: 6,
          fontFamily: 'var(--bp-font-mono)', fontSize: 11, letterSpacing: '0.12em',
          textTransform: 'uppercase', fontWeight: 600,
        }}>
          <span style={{
            width: 6, height: 6, borderRadius: '50%', background: '#fff',
            boxShadow: '0 0 0 2px rgba(255,255,255,0.25)',
            animation: 'bpPulse 1.8s ease-in-out infinite',
            display: 'inline-block',
          }} />
          24/7 Emergency
        </span>

        <a href={BP_PHONE_TEL} style={{
          color: '#fff', display: 'inline-flex', alignItems: 'center', gap: 6,
        }}>
          <Icon name="phone" size={14} stroke="#fff" />
          <strong style={{ fontFamily: 'var(--bp-font-mono)', letterSpacing: '0.04em' }}>{BP_PHONE}</strong>
        </a>
      </div>
    </div>
  );
}
