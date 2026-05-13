import Link from 'next/link';
import Logo from './Logo';
import Icon from './Icon';
import { BP_PHONE, BP_PHONE_TEL, BP_AREAS } from '@/lib/constants';

function FooterCol({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <div style={{
        fontFamily: 'var(--bp-font-mono)', fontSize: 11, letterSpacing: '0.12em',
        textTransform: 'uppercase', color: 'rgba(255,255,255,0.45)', marginBottom: 18,
      }}>{title}</div>
      {children}
    </div>
  );
}

export default function SiteFooter() {
  return (
    <footer style={{ background: 'var(--bp-ink)', color: '#fff' }}>
      <div style={{
        maxWidth: 'var(--bp-container)', margin: '0 auto',
        padding: '72px var(--bp-gutter) 32px',
      }}>
        <div className="footer-grid">
          <div>
            <Logo onDark size="lg" />
            <p style={{ marginTop: 24, color: 'rgba(255,255,255,0.65)', maxWidth: 320, fontSize: 15 }}>
              Local, family-run drainage specialists covering Kent and the South East since 2009.
              Six vans, real engineers, honest work.
            </p>
            <div style={{ marginTop: 28, display: 'flex', gap: 12, flexWrap: 'wrap' }}>
              <a href={BP_PHONE_TEL} className="bp-btn bp-btn--cta bp-btn--sm">
                <Icon name="phone" size={14} stroke="#fff" /> {BP_PHONE}
              </a>
              <Link href="/contact" className="bp-btn bp-btn--sm" style={{
                background: 'transparent', color: '#fff', border: '1.5px solid rgba(255,255,255,0.3)',
              }}>Get a quote</Link>
            </div>
          </div>

          <FooterCol title="Services">
            <ul style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {[
                { label: 'Blocked drains',        slug: 'blocked-drains' },
                { label: 'CCTV surveys',           slug: 'cctv-drain-surveys' },
                { label: 'Drain repairs',          slug: 'drain-repairs' },
                { label: 'Drain lining',           slug: 'drain-lining' },
                { label: 'Emergency drainage',     slug: 'emergency-drainage' },
                { label: 'Gutter cleaning',        slug: 'gutter-cleaning' },
              ].map(s => (
                <li key={s.slug}><Link href={`/services/${s.slug}`} style={{ fontSize: 14, color: 'rgba(255,255,255,0.85)' }}>{s.label}</Link></li>
              ))}
            </ul>
          </FooterCol>

          <FooterCol title="Areas">
            <ul style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {BP_AREAS.slice(0, 8).map(a => (
                <li key={a}><Link href={`/areas/${a.toLowerCase().replace(/\s+/g, '-')}`} style={{ fontSize: 14, color: 'rgba(255,255,255,0.85)' }}>{a}</Link></li>
              ))}
            </ul>
          </FooterCol>

          <FooterCol title="Contact">
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              <div>
                <strong style={{ fontFamily: 'var(--bp-font-mono)', fontSize: 14, color: '#fff' }}>{BP_PHONE}</strong>
                <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: 12, marginTop: 2 }}>24/7 emergency line</div>
              </div>
              <div style={{ fontSize: 14, color: 'rgba(255,255,255,0.85)' }}>hello@bpdrainssoutheast.co.uk</div>
              <div style={{ fontSize: 14, color: 'rgba(255,255,255,0.85)' }}>
                Unit 4, Canterbury Industrial Park,<br />Canterbury, Kent CT1 0XX
              </div>
              <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: 12 }}>Mon–Sun · 24h emergency</div>
            </div>
          </FooterCol>
        </div>

        <div style={{
          marginTop: 64, paddingTop: 24,
          borderTop: '1px solid rgba(255,255,255,0.12)',
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          flexWrap: 'wrap', gap: 16,
          color: 'rgba(255,255,255,0.5)', fontSize: 12,
        }}>
          <span style={{ fontFamily: 'var(--bp-font-mono)', letterSpacing: '0.06em' }}>
            © 2026 BP DRAINS SOUTH EAST LTD · COMPANY NO. 07412XXX · VAT GB 124 XXXX XX
          </span>
          <div style={{ display: 'flex', gap: 24 }}>
            <a href="#">Privacy</a>
            <a href="#">Terms</a>
            <a href="#">Cookies</a>
            <a href="#">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
