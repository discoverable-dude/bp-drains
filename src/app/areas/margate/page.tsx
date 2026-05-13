import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import UtilityBar from '@/components/UtilityBar';
import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';
import CTABand from '@/components/CTABand';
import Icon from '@/components/Icon';
import ImageSlot from '@/components/ImageSlot';
import Eyebrow from '@/components/Eyebrow';
import { BP_PHONE, BP_PHONE_TEL, BP_AREAS } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Drainage Services in Margate, CT9',
  description: 'Local drainage specialists in Margate. Aaron\'s van — Van 06 — lives in Margate. Typically on-site within 40 minutes. CT9 postcodes, day and night.',
};

const AREA_SERVICES = [
  { icon: 'blocked', name: 'Blocked drains', stat: '32 / mo' },
  { icon: 'cctv',    name: 'CCTV surveys',   stat: '14 / mo' },
  { icon: 'repair',  name: 'Pipe repairs',   stat: '11 / mo' },
  { icon: 'jetting', name: 'Jetting',        stat: '9 / mo'  },
  { icon: 'tanker',  name: 'Tanker services',stat: '4 / mo'  },
  { icon: 'sewer',   name: 'Sewer relining', stat: '3 / mo'  },
  { icon: 'septic',  name: 'Septic tanks',   stat: '2 / mo'  },
  { icon: 'soakaway',name: 'Soakaways',      stat: '1 / mo'  },
];

const LOCAL_TESTIMONIALS = [
  { src: 'Google',     name: 'Helen B.',   area: 'Cliftonville',      date: '02 Apr', text: '"Aaron showed up with the camera, found the problem in 10 minutes, and had it lined the following morning. Pleasant, tidy, and the price didn\'t move."' },
  { src: 'Trustpilot', name: 'Tom K.',     area: 'Westgate-on-Sea',   date: '21 Mar', text: '"Took on a job another company refused. Made good of the path afterwards too — you wouldn\'t know they\'d been."' },
  { src: 'Direct',     name: 'Mrs Foley', area: 'Margate Old Town', date: '14 Mar', text: '"Quick, polite, explained what was wrong with my drains in language I could understand. I\'ll have them back for the annual service."' },
];

const NEIGHBOURHOODS = ['Cliftonville', 'Westgate-on-Sea', 'Birchington', 'Garlinge', 'Northdown', 'Westbrook', 'Palm Bay', 'Margate Old Town'];

export default function MargatePage() {
  return (
    <>
      <UtilityBar />
      <SiteHeader active="Areas" />

      {/* Breadcrumb */}
      <div style={{ background: 'var(--bp-stone-100)', padding: '20px var(--bp-gutter)', borderBottom: '1px solid var(--bp-line)' }}>
        <div style={{ maxWidth: 'var(--bp-container)', margin: '0 auto', fontFamily: 'var(--bp-font-mono)', fontSize: 12, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--bp-fg-muted)' }}>
          <Link href="/">BP Drains</Link> · <Link href="/areas/margate">Areas covered</Link> · <span style={{ color: 'var(--bp-ink)' }}>Margate</span>
        </div>
      </div>

      {/* Hero */}
      <section style={{ background: 'var(--bp-stone-100)', padding: '56px var(--bp-gutter) 96px', borderBottom: '1px solid var(--bp-line)' }}>
        <div style={{ maxWidth: 'var(--bp-container)', margin: '0 auto' }}>
          <div className="hero-split-eq">
            <div>
              <Eyebrow index="LOCAL · CT9" label="Margate · Thanet · Kent" />
              <h1 style={{ fontSize: 'var(--bp-fs-h1)', marginTop: 20, letterSpacing: '-0.03em' }}>
                Drainage services<br />in <span style={{ background: 'var(--bp-ink)', color: '#fff', padding: '0 12px' }}>Margate</span>
              </h1>
              <p style={{ marginTop: 24, fontSize: 18, lineHeight: 1.55, color: 'var(--bp-stone-600)', maxWidth: 540 }}>
                Aaron&apos;s van — Van 06 — lives in Margate. From Cliftonville to Westgate-on-Sea, we&apos;re typically on-site within 40 minutes. CT9 postcodes covered, weekdays and weekends, day and night.
              </p>
              <div style={{ marginTop: 32, display: 'flex', gap: 12, flexWrap: 'wrap' }}>
                <a className="bp-btn bp-btn--cta bp-btn--lg" href={BP_PHONE_TEL}>
                  <Icon name="phone" size={18} stroke="#fff" /> Call Margate · {BP_PHONE}
                </a>
                <Link className="bp-btn bp-btn--ghost bp-btn--lg" href="/contact">Get a Margate quote</Link>
              </div>

              <div className="four-stats" style={{ marginTop: 40, paddingTop: 20, borderTop: '1px solid var(--bp-line-strong)' }}>
                {[
                  { v: '38 min', l: 'Avg. on-site, CT9' },
                  { v: '420+',   l: 'Margate jobs / yr' },
                  { v: 'CT9',    l: 'Postcode covered' },
                  { v: 'Van 06', l: 'Your local engineer' },
                ].map(s => (
                  <div key={s.l}>
                    <div style={{ fontFamily: 'var(--bp-font-display)', fontWeight: 800, fontSize: 24, letterSpacing: '-0.02em' }}>{s.v}</div>
                    <div className="bp-mono" style={{ marginTop: 4 }}>{s.l}</div>
                  </div>
                ))}
              </div>
            </div>

            <div style={{ position: 'relative' }}>
              <div style={{ position: 'relative', height: 460, borderRadius: 'var(--bp-r-2)', overflow: 'hidden' }}>
                <Image src="/images/vans-in-a-row.webp" alt="BP Drains vans covering Margate and Thanet" fill style={{ objectFit: 'cover' }} />
              </div>
              <div style={{
                position: 'absolute', left: 16, bottom: 16, right: 16,
                background: '#fff', padding: 16,
                borderLeft: '4px solid var(--bp-ink)', borderRadius: 2,
                boxShadow: 'var(--bp-shadow-md)',
                display: 'flex', alignItems: 'center', gap: 14,
              }}>
                <div style={{
                  width: 48, height: 48, borderRadius: '50%', flexShrink: 0,
                  background: 'var(--bp-stone-200)',
                  backgroundImage: 'repeating-linear-gradient(45deg, rgba(0,0,0,0.08) 0 1.5px, transparent 1.5px 8px)',
                }} />
                <div style={{ flex: 1 }}>
                  <div style={{ fontWeight: 600 }}>Aaron W. · Van 06</div>
                  <div className="bp-mono" style={{ marginTop: 2 }}>Lives in Margate · 8 yrs at BP Drains</div>
                </div>
                <Icon name="check" size={20} stroke="#3DBA6E" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Local intro */}
      <section style={{ padding: 'var(--bp-section-y) var(--bp-gutter)' }}>
        <div style={{ maxWidth: 'var(--bp-container)', margin: '0 auto' }}>
          <div className="two-col-rev">
            <div>
              <Eyebrow index="01" label="The area" />
              <h2 style={{ marginTop: 20 }}>Old town, new pipes,<br />sea air on everything.</h2>
            </div>
            <div style={{ fontSize: 17, lineHeight: 1.7, color: 'var(--bp-stone-600)' }}>
              <p>Margate keeps us busy. The mix of period property in the Old Town and post-war stock around Northdown means we see the full range — Victorian salt-glazed clay that&apos;s been in the ground 130 years, mid-century pitch fibre that&apos;s gone oval, and modern plastic that&apos;s been laid on too steep a fall.</p>
              <p style={{ marginTop: 18 }}>The sea air doesn&apos;t help. Cast iron stacks corrode fast, and we replace more of them in Margate than anywhere else in our patch. If you&apos;ve got a smell from a hopper head or a slow gully near the gutter, that&apos;s usually it.</p>
              <p style={{ marginTop: 18 }}>Whatever it is — same-day diagnosis, fixed-price repair, no nonsense. <a href={BP_PHONE_TEL} style={{ textDecoration: 'underline', fontWeight: 600 }}>Call us</a> and Aaron will be there before lunch.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services in area */}
      <section style={{ background: 'var(--bp-stone-100)', padding: 'var(--bp-section-y) var(--bp-gutter)' }}>
        <div style={{ maxWidth: 'var(--bp-container)', margin: '0 auto' }}>
          <Eyebrow index="02" label="Services in CT9" />
          <h2 style={{ marginTop: 20, marginBottom: 40 }}>Everything we do, available in Margate.</h2>
          <div className="bp-grid-4">
            {AREA_SERVICES.map(s => (
              <div key={s.name} style={{ background: '#fff', padding: 24, display: 'flex', flexDirection: 'column', gap: 16 }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <Icon name={s.icon} size={26} />
                  <span className="bp-mono" style={{ color: 'var(--bp-fg-faint)' }}>{s.stat}</span>
                </div>
                <div style={{ fontWeight: 600 }}>
                  {s.name}
                  <div className="bp-mono" style={{ marginTop: 4 }}>In Margate</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Local testimonials + map */}
      <section style={{ padding: 'var(--bp-section-y) var(--bp-gutter)' }}>
        <div style={{ maxWidth: 'var(--bp-container)', margin: '0 auto' }}>
          <div className="two-col" style={{ gap: 64 }}>
            <div>
              <Eyebrow index="03" label="Margate customers" />
              <h2 style={{ marginTop: 20, marginBottom: 32 }}>From CT9 itself.</h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                {LOCAL_TESTIMONIALS.map(t => (
                  <div key={t.name} className="bp-card" style={{ padding: 20, display: 'flex', gap: 20 }}>
                    <div style={{ width: 4, alignSelf: 'stretch', background: 'var(--bp-ink)', flexShrink: 0 }} />
                    <div style={{ flex: 1 }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8, flexWrap: 'wrap', gap: 8 }}>
                        <span className="bp-mono">{t.src} · {t.date}</span>
                        <div className="bp-stars">★ ★ ★ ★ ★</div>
                      </div>
                      <p style={{ fontSize: 15, lineHeight: 1.5 }}>{t.text}</p>
                      <div style={{ marginTop: 12, fontSize: 13 }}>
                        <strong>{t.name}</strong> · <span style={{ color: 'var(--bp-fg-muted)' }}>{t.area}, Margate</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <Eyebrow index="04" label="Coverage" />
              <h2 style={{ marginTop: 20, marginBottom: 24 }}>CT9 and the Thanet loop.</h2>
              <ImageSlot label="MAP — Margate / Thanet coverage outline · CT9 · postcodes shaded" style={{ height: 320 }} />
              <div className="area-tags" style={{ marginTop: 16 }}>
                {NEIGHBOURHOODS.map(t => (
                  <span key={t} style={{
                    fontFamily: 'var(--bp-font-mono)', fontSize: 11, letterSpacing: '0.08em',
                    background: 'var(--bp-stone-100)', padding: '6px 10px', borderRadius: 2,
                  }}>{t}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Nearby areas */}
      <section style={{ background: 'var(--bp-stone-100)', padding: '64px var(--bp-gutter)', borderTop: '1px solid var(--bp-line)' }}>
        <div style={{ maxWidth: 'var(--bp-container)', margin: '0 auto' }}>
          <Eyebrow index="05" label="Nearby areas" />
          <h3 style={{ marginTop: 16, marginBottom: 24 }}>We also cover</h3>
          <div className="area-tags">
            {BP_AREAS.filter(a => a !== 'Margate').map(a => (
              <Link key={a} href={`/areas/${a.toLowerCase()}`} style={{
                padding: '12px 18px', background: '#fff',
                border: '1px solid var(--bp-line-strong)',
                borderRadius: 2, fontSize: 14, fontWeight: 500,
                display: 'inline-flex', alignItems: 'center', gap: 8,
              }}>{a} <Icon name="arrow" size={12} /></Link>
            ))}
          </div>
        </div>
      </section>

      <CTABand area="Margate" />
      <SiteFooter />
    </>
  );
}
