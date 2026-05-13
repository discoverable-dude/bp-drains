import Icon from './Icon';
import Eyebrow from './Eyebrow';
import { BP_PHONE, BP_PHONE_TEL } from '@/lib/constants';

interface CTABandProps {
  area?: string;
}

export default function CTABand({ area }: CTABandProps) {
  return (
    <section style={{ background: 'var(--bp-ink)', color: '#fff', padding: '72px var(--bp-gutter)' }}>
      <div style={{
        maxWidth: 'var(--bp-container)', margin: '0 auto',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        gap: 48, flexWrap: 'wrap',
      }}>
        <div>
          <Eyebrow index="→" label={area ? `Drainage in ${area}` : 'Ready when you are'} onDark />
          <div style={{
            fontFamily: 'var(--bp-font-display)', fontWeight: 900,
            fontSize: 'clamp(32px, 3.3vw, 48px)',
            marginTop: 12, letterSpacing: '-0.025em', lineHeight: 1, color: '#fff',
          }}>
            {area ? `Need us in ${area}? Call now.` : 'Need a drainage engineer? Call now.'}
          </div>
        </div>
        <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
          <a href={BP_PHONE_TEL} className="bp-btn bp-btn--cta bp-btn--lg">
            <Icon name="phone" size={18} stroke="#fff" /> {BP_PHONE}
          </a>
          <a href="/contact" className="bp-btn bp-btn--lg" style={{ background: '#fff', color: 'var(--bp-ink)' }}>
            Get a quote
          </a>
        </div>
      </div>
    </section>
  );
}
