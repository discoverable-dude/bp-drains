import type { Metadata } from 'next';
import UtilityBar from '@/components/UtilityBar';
import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';
import Icon from '@/components/Icon';
import ImageSlot from '@/components/ImageSlot';
import Eyebrow from '@/components/Eyebrow';
import { BP_PHONE, BP_PHONE_TEL } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'One number. Six vans. Someone always answers. Call 0800 612 8038 or send us the details — we come back within the hour.',
};

export default function ContactPage() {
  return (
    <>
      <UtilityBar />
      <SiteHeader active="Contact" />

      {/* Hero */}
      <section style={{
        background: 'var(--bp-stone-100)',
        padding: '72px var(--bp-gutter) 0',
        borderBottom: '1px solid var(--bp-line)',
      }}>
        <div style={{ maxWidth: 'var(--bp-container)', margin: '0 auto' }}>
          <Eyebrow index="01 / 04" label="Contact" />
          <h1 style={{ fontSize: 'var(--bp-fs-h1)', marginTop: 20, maxWidth: 760 }}>
            One number. Six vans. Someone always answers.
          </h1>
          <p style={{ fontSize: 19, lineHeight: 1.5, color: 'var(--bp-stone-600)', maxWidth: 640, marginTop: 24 }}>
            Most jobs we book in the same day — often the same hour. Pick the option that suits you.
          </p>

          <div style={{
            marginTop: 56, padding: '32px 36px',
            background: 'var(--bp-red)', color: '#fff',
            display: 'flex', alignItems: 'center', justifyContent: 'space-between',
            borderRadius: 'var(--bp-r-2)', boxShadow: 'var(--bp-shadow-cta)',
            flexWrap: 'wrap', gap: 24,
          }}>
            <div>
              <div style={{ fontFamily: 'var(--bp-font-mono)', fontSize: 12, letterSpacing: '0.12em', textTransform: 'uppercase', opacity: 0.85 }}>
                Emergency line · 24 / 7 · 365
              </div>
              <a href={BP_PHONE_TEL} style={{
                fontFamily: 'var(--bp-font-display)', fontWeight: 900,
                fontSize: 'clamp(36px, 5vw, 64px)', marginTop: 8, letterSpacing: '-0.03em', lineHeight: 1,
                color: '#fff', display: 'block',
              }}>{BP_PHONE}</a>
            </div>
            <div style={{ textAlign: 'right' }}>
              <div style={{ fontSize: 14, opacity: 0.85 }}>Avg. answer time</div>
              <div style={{ fontFamily: 'var(--bp-font-display)', fontWeight: 800, fontSize: 32 }}>under 30s</div>
            </div>
          </div>
        </div>
      </section>

      {/* Form + details */}
      <section style={{ padding: 'var(--bp-section-y) var(--bp-gutter)' }}>
        <div style={{ maxWidth: 'var(--bp-container)', margin: '0 auto' }}>
          <div className="two-col-form">
            {/* Form */}
            <div>
              <Eyebrow index="02 / 04" label="Or send us the details" />
              <h2 style={{ marginTop: 16 }}>Tell us what&apos;s going on.</h2>
              <p style={{ marginTop: 12, color: 'var(--bp-stone-600)' }}>
                We&apos;ll come back within the hour during the working day. Out of hours? Please call.
              </p>

              <form style={{ marginTop: 36, display: 'flex', flexDirection: 'column', gap: 20 }}>
                <label style={{ display: 'block' }}>
                  <span className="bp-label">Your name</span>
                  <input className="bp-input" placeholder="e.g. Sarah Mitchell" type="text" name="name" />
                </label>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
                  <label style={{ display: 'block' }}>
                    <span className="bp-label">Phone number</span>
                    <input className="bp-input" placeholder="07__ ___ ____" type="tel" name="phone" />
                  </label>
                  <label style={{ display: 'block' }}>
                    <span className="bp-label">Postcode</span>
                    <input className="bp-input" placeholder="CT5 1AB" type="text" name="postcode" />
                  </label>
                </div>
                <label style={{ display: 'block' }}>
                  <span className="bp-label">Email (optional)</span>
                  <input className="bp-input" placeholder="you@example.co.uk" type="email" name="email" />
                </label>
                <label style={{ display: 'block' }}>
                  <span className="bp-label">What&apos;s the issue?</span>
                  <textarea className="bp-input bp-textarea" placeholder="Blocked drain? Bad smell? Survey for a sale? Describe it as you would on the phone." name="issue" />
                </label>

                {/* Photo upload */}
                <div>
                  <span className="bp-label">Photo (optional)</span>
                  <label style={{
                    border: '1.5px dashed var(--bp-line-strong)',
                    borderRadius: 'var(--bp-r-2)', padding: 24,
                    display: 'flex', alignItems: 'center', gap: 16,
                    background: 'var(--bp-stone-50)', cursor: 'pointer',
                  }}>
                    <input type="file" accept="image/*" style={{ display: 'none' }} name="photo" />
                    <div style={{
                      width: 48, height: 48, border: '1px solid var(--bp-line-strong)',
                      borderRadius: 'var(--bp-r-1)', display: 'flex', alignItems: 'center', justifyContent: 'center',
                      background: '#fff', flexShrink: 0,
                    }}>
                      <Icon name="plus" size={20} />
                    </div>
                    <div>
                      <div style={{ fontWeight: 600 }}>Drag in a photo, or click to upload</div>
                      <div className="bp-mono" style={{ marginTop: 4 }}>Often the fastest way to diagnose — JPG, HEIC, PNG up to 10MB</div>
                    </div>
                  </label>
                </div>

                {/* Urgency */}
                <div>
                  <span className="bp-label">How urgent?</span>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 8 }}>
                    {[
                      { l: 'Right now',         s: 'Calling won\'t wait', red: true },
                      { l: 'Today / tomorrow',  s: 'Same-day or next' },
                      { l: 'Planned',           s: 'Quote first' },
                    ].map(u => (
                      <label key={u.l} style={{
                        border: u.red ? '1.5px solid var(--bp-red)' : '1px solid var(--bp-line-strong)',
                        background: u.red ? 'var(--bp-red-tint)' : '#fff',
                        borderRadius: 'var(--bp-r-2)', padding: 14, cursor: 'pointer',
                      }}>
                        <input type="radio" name="urgency" value={u.l} style={{ display: 'none' }} defaultChecked={u.red} />
                        <div style={{ fontWeight: 600, color: u.red ? 'var(--bp-red)' : 'var(--bp-ink)' }}>{u.l}</div>
                        <div className="bp-mono" style={{ marginTop: 4 }}>{u.s}</div>
                      </label>
                    ))}
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginTop: 8, flexWrap: 'wrap' }}>
                  <button type="submit" className="bp-btn bp-btn--cta bp-btn--lg">
                    Send to BP Drains <Icon name="arrow" size={16} stroke="#fff" />
                  </button>
                  <span style={{ fontSize: 13, color: 'var(--bp-fg-muted)' }}>
                    Or call <strong>{BP_PHONE}</strong>
                  </span>
                </div>
              </form>
            </div>

            {/* Details column */}
            <aside style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
              <ContactBlock title="Office" icon="pin" lines={[
                <strong key="name">BP Drains South East Ltd</strong>,
                'Unit 4, Canterbury Industrial Park',
                'Canterbury, Kent CT1 0XX',
                <a key="maps" href="#" style={{ textDecoration: 'underline' }}>Open in Maps →</a>,
              ]} />
              <ContactBlock title="Hours" icon="clock" lines={[
                <span key="wk"><strong>Mon–Fri</strong> &nbsp;·&nbsp; 07:00 – 18:00</span>,
                <span key="wk2"><strong>Sat–Sun</strong> &nbsp;·&nbsp; 08:00 – 17:00</span>,
                <span key="em" style={{ color: 'var(--bp-red)', fontWeight: 600 }}>24/7 emergency line, always</span>,
              ]} />
              <ContactBlock title="Direct" icon="message" lines={[
                <span key="phone"><strong style={{ fontFamily: 'var(--bp-font-mono)' }}>{BP_PHONE}</strong> — phone, 24/7</span>,
                <span key="wa">WhatsApp: <strong>{BP_PHONE}</strong></span>,
                <span key="email">hello@bpdrainssoutheast.co.uk</span>,
              ]} />

              <div className="bp-card" style={{ padding: 0, overflow: 'hidden' }}>
                <div style={{ padding: '18px 24px', borderBottom: '1px solid var(--bp-line)' }}>
                  <div className="bp-mono">Coverage</div>
                  <div style={{ fontWeight: 600, marginTop: 4 }}>Kent &amp; the South East</div>
                </div>
                <ImageSlot
                  label="MAP — coverage area: CT, ME, TN postcodes · embed Google Map"
                  style={{ height: 220, borderRadius: 0 }}
                />
              </div>
            </aside>
          </div>
        </div>
      </section>

      <SiteFooter />
    </>
  );
}

function ContactBlock({ title, icon, lines }: { title: string; icon: string; lines: React.ReactNode[] }) {
  return (
    <div className="bp-card" style={{ padding: 24 }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 12 }}>
        <Icon name={icon} size={18} />
        <span className="bp-mono">{title}</span>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 8, fontSize: 15 }}>
        {lines.map((l, i) => <div key={i}>{l}</div>)}
      </div>
    </div>
  );
}
