import type { Metadata } from 'next';
import Image from 'next/image';
import UtilityBar from '@/components/UtilityBar';
import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';
import CTABand from '@/components/CTABand';
import Icon from '@/components/Icon';
import Eyebrow from '@/components/Eyebrow';

export const metadata: Metadata = {
  title: 'Customer Reviews — 4.9 from 312 Reviews',
  description: '312 reviews. 4.9 average across Google, Trustpilot, Facebook and Checkatrade. Read what Kent customers say about BP Drains South East.',
};

const RATING_BREAKDOWN = [
  { src: 'Google',      n: 218, r: '4.9' },
  { src: 'Trustpilot',  n:  62, r: '4.9' },
  { src: 'Facebook',    n:  28, r: '4.8' },
  { src: 'Checkatrade', n:   4, r: '5.0' },
];

const REVIEWS = [
  { src: 'Google',     date: '01 May', stars: 5, name: 'Sarah Mitchell', area: 'Whitstable',      svc: 'BLOCKED',   text: 'Called at 11pm with a kitchen drain backing up. Lewis was here by midnight, cleared it in 40 minutes, exactly what he quoted.' },
  { src: 'Trustpilot', date: '28 Apr', stars: 5, name: 'Priya N.',       area: 'Margate',          svc: 'EMERGENCY', text: 'They picked up the phone at 7am on a Sunday. Aaron was here by 9. Polite, tidy, explained everything in plain English.' },
  { src: 'Facebook',   date: '22 Apr', stars: 5, name: 'Robert C.',      area: 'Folkestone',       svc: 'REPAIR',    text: 'Quoted half what a national company tried to charge me. Same job, done properly. Local lads who clearly know what they\'re doing.' },
  { src: 'Google',     date: '15 Apr', stars: 5, name: 'Helen B.',       area: 'Cliftonville',     svc: 'CCTV',      text: 'Aaron showed up with the camera, found the problem in 10 minutes, lined it the following morning. Pleasant, tidy.' },
  { src: 'Direct',     date: '12 Apr', stars: 4, name: 'Mrs Foley',      area: 'Margate Old Town', svc: 'BLOCKED',   text: 'Quick, polite, explained in language I could understand. I\'ll have them back for the annual service.', photo: true },
  { src: 'Google',     date: '09 Apr', stars: 5, name: 'Daniel R.',      area: 'Ashford',          svc: 'SEPTIC',    text: 'New septic tank installed in two days, paperwork done for us, building control happy. Genuinely a brilliant local outfit.' },
  { src: 'Trustpilot', date: '02 Apr', stars: 5, name: 'James H.',       area: 'Canterbury',       svc: 'RELINING',  text: 'Diagnosed the issue within 20 minutes, told us exactly what the repair would cost, done by the next afternoon. Old-school proper service.' },
  { src: 'Google',     date: '28 Mar', stars: 5, name: 'Tom K.',         area: 'Westgate-on-Sea',  svc: 'BLOCKED',   text: 'Took on a job another company refused. Made good of the path afterwards too — you wouldn\'t know they\'d been.' },
  { src: 'Facebook',   date: '21 Mar', stars: 5, name: 'Lara M.',        area: 'Herne Bay',         svc: 'JETTING',   text: 'Used them for our café — same morning service, fixed price, no fuss. Wouldn\'t hesitate to recommend.' },
];

const FILTER_SOURCES  = ['All', 'Google', 'Trustpilot', 'Facebook', 'Direct'];
const FILTER_SERVICES = ['All', 'Blocked', 'CCTV', 'Repair', 'Septic'];
const FILTER_RATINGS  = ['All', '5★', '4★', '3★ or below'];

function FilterChip({ label, active }: { label: string; active?: boolean }) {
  return (
    <button style={{
      padding: '8px 12px', borderRadius: 2,
      border: `1px solid ${active ? 'var(--bp-ink)' : 'var(--bp-line)'}`,
      background: active ? 'var(--bp-ink)' : 'transparent',
      color: active ? '#fff' : 'var(--bp-ink)',
      fontSize: 13, fontWeight: 500, cursor: 'pointer', whiteSpace: 'nowrap',
    }}>{label}</button>
  );
}

export default function TestimonialsPage() {
  return (
    <>
      <UtilityBar />
      <SiteHeader active="Testimonials" />

      {/* Hero + rating summary */}
      <section style={{ background: 'var(--bp-stone-100)', padding: '64px var(--bp-gutter)', borderBottom: '1px solid var(--bp-line)' }}>
        <div style={{ maxWidth: 'var(--bp-container)', margin: '0 auto' }}>
          <div className="two-col-wide" style={{ alignItems: 'end', gap: 64 }}>
            <div>
              <Eyebrow index="TESTIMONIALS / 01" label="What customers say about BP Drains" />
              <h1 style={{ fontSize: 'var(--bp-fs-h1)', marginTop: 20 }}>
                312 reviews.<br />
                <span style={{ color: 'var(--bp-red)' }}>4.9 average.</span>{' '}
                Most we earned on the worst day of someone&apos;s week.
              </h1>
            </div>

            {/* Rating tile */}
            <div className="bp-card" style={{ padding: 0, overflow: 'hidden' }}>
              <div style={{ padding: '24px 28px', borderBottom: '1px solid var(--bp-line)', display: 'flex', alignItems: 'baseline', justifyContent: 'space-between' }}>
                <div style={{ fontFamily: 'var(--bp-font-display)', fontWeight: 900, fontSize: 64, letterSpacing: '-0.03em', lineHeight: 1 }}>
                  4.9<span style={{ color: 'var(--bp-fg-muted)', fontSize: 32 }}>/5</span>
                </div>
                <div className="bp-stars" style={{ fontSize: 22 }}>★ ★ ★ ★ ★</div>
              </div>
              {RATING_BREAKDOWN.map(b => (
                <div key={b.src} style={{ padding: '14px 28px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '1px solid var(--bp-line)' }}>
                  <div style={{ fontWeight: 600 }}>{b.src}</div>
                  <div style={{ display: 'flex', gap: 16, alignItems: 'baseline' }}>
                    <span className="bp-mono">{b.n} reviews</span>
                    <span style={{ fontFamily: 'var(--bp-font-display)', fontWeight: 700, fontSize: 17 }}>{b.r}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Filter strip */}
      <section style={{ background: 'var(--bp-white)', borderBottom: '1px solid var(--bp-line)' }}>
        <div style={{ maxWidth: 'var(--bp-container)', margin: '0 auto', padding: '16px var(--bp-gutter)', overflowX: 'auto' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 16, minWidth: 'max-content' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <span className="bp-mono">Source:</span>
              <div style={{ display: 'flex', gap: 4 }}>
                {FILTER_SOURCES.map((it, i) => <FilterChip key={it} label={it} active={i === 0} />)}
              </div>
            </div>
            <div style={{ width: 1, height: 24, background: 'var(--bp-line-strong)', flexShrink: 0 }} />
            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <span className="bp-mono">Service:</span>
              <div style={{ display: 'flex', gap: 4 }}>
                {FILTER_SERVICES.map((it, i) => <FilterChip key={it} label={it} active={i === 0} />)}
              </div>
            </div>
            <div style={{ width: 1, height: 24, background: 'var(--bp-line-strong)', flexShrink: 0 }} />
            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <span className="bp-mono">Rating:</span>
              <div style={{ display: 'flex', gap: 4 }}>
                {FILTER_RATINGS.map((it, i) => <FilterChip key={it} label={it} active={i === 0} />)}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured long-form */}
      <section style={{ padding: 'var(--bp-section-y) var(--bp-gutter) 48px' }}>
        <div style={{ maxWidth: 'var(--bp-container)', margin: '0 auto' }}>
          <Eyebrow index="02" label="Featured" />
          <h2 style={{ marginTop: 16, marginBottom: 32 }}>The full story</h2>

          <div className="two-col-wide" style={{ gap: 24 }}>
            <div style={{ background: 'var(--bp-ink)', color: '#fff', padding: 48, borderRadius: 2, position: 'relative' }}>
              <span style={{ position: 'absolute', top: 24, right: 32, fontFamily: 'var(--bp-font-display)', fontWeight: 900, fontSize: 96, lineHeight: 0.8, opacity: 0.15 }}>&ldquo;</span>
              <Eyebrow index="GOOGLE" label="5 stars · 04 Apr 2026" onDark />
              <p style={{ fontSize: 24, lineHeight: 1.45, marginTop: 24, color: '#fff', maxWidth: 620 }}>
                &ldquo;We&apos;d had three other companies attempt to clear the sewer at our restaurant — all of them quoted a full excavation and weeks of disruption.
                Lewis from BP turned up with a CCTV unit, found a section of pipe that had displaced 8m in, and lined it in a morning. We didn&apos;t lose a service.
                I&apos;ve recommended them to every restaurant manager I know in Canterbury since.&rdquo;
              </p>
              <div style={{ marginTop: 32, paddingTop: 24, borderTop: '1px solid rgba(255,255,255,0.15)', display: 'flex', alignItems: 'center', gap: 16 }}>
                <div style={{ width: 56, height: 56, borderRadius: '50%', background: 'rgba(255,255,255,0.1)', backgroundImage: 'repeating-linear-gradient(45deg, rgba(255,255,255,0.1) 0 1.5px, transparent 1.5px 8px)', flexShrink: 0 }} />
                <div>
                  <div style={{ fontWeight: 600 }}>James Harrison</div>
                  <div className="bp-mono" style={{ color: 'rgba(255,255,255,0.5)', marginTop: 2 }}>Operations · The Goods Shed, Canterbury</div>
                </div>
              </div>
            </div>

            <div className="bp-card" style={{ padding: 0 }}>
              <div style={{ position: 'relative', height: 220 }}>
                <Image src="/images/Crawler-Cam.webp" alt="CCTV crawler camera used on the job" fill style={{ objectFit: 'cover' }} />
              </div>
              <div style={{ padding: 24 }}>
                <div className="bp-mono">Job reference</div>
                <div style={{ fontFamily: 'var(--bp-font-mono)', fontSize: 13, fontWeight: 600, marginTop: 4 }}>BP-26-0418-CT1</div>
                <hr style={{ border: 0, borderTop: '1px solid var(--bp-line)', margin: '20px 0' }} />
                <dl style={{ display: 'grid', gridTemplateColumns: 'auto 1fr', columnGap: 16, rowGap: 8, margin: 0, fontSize: 14 }}>
                  {[
                    ['Service',   'Sewer relining (CIPP)'],
                    ['Pipe',      '110mm, 8m run'],
                    ['Crew',      'Van 02 · Lewis P. + 1'],
                    ['On-site',   'One morning · 04:30 hrs'],
                    ['Final cost','£1,840 inc. VAT'],
                  ].map(([dt, dd]) => (
                    <>
                      <dt key={`dt-${dt}`} className="bp-mono">{dt}</dt>
                      <dd key={`dd-${dt}`}>{dd}</dd>
                    </>
                  ))}
                </dl>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Review grid */}
      <section style={{ padding: '0 var(--bp-gutter) var(--bp-section-y)' }}>
        <div style={{ maxWidth: 'var(--bp-container)', margin: '0 auto' }}>
          <Eyebrow index="03" label="More reviews" />
          <h3 style={{ marginTop: 16, marginBottom: 32 }}>Recent</h3>

          <div className="bp-grid-3">
            {REVIEWS.map(r => (
              <div key={r.name + r.date} className="bp-card" style={{ padding: 'var(--bp-card-pad)', display: 'flex', flexDirection: 'column', gap: 14 }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <span style={{
                    fontFamily: 'var(--bp-font-mono)', fontSize: 10, fontWeight: 600,
                    letterSpacing: '0.12em', padding: '4px 8px', borderRadius: 2,
                    background: 'var(--bp-stone-100)', color: 'var(--bp-ink)',
                  }}>{r.src}</span>
                  <span className="bp-mono">{r.date}</span>
                </div>
                <div className="bp-stars">{'★ '.repeat(r.stars).trim()}</div>
                {r.photo && (
                  <div style={{ position: 'relative', height: 140, borderRadius: 'var(--bp-r-2)', overflow: 'hidden' }}>
                    <Image src="/gallery/gutter-outside-house.webp" alt="Job photo" fill style={{ objectFit: 'cover' }} />
                  </div>
                )}
                <p style={{ fontSize: 15, lineHeight: 1.5, flex: 1 }}>{r.text}</p>
                <div style={{ paddingTop: 14, borderTop: '1px solid var(--bp-line)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div>
                    <div style={{ fontWeight: 600, fontSize: 14 }}>{r.name}</div>
                    <div className="bp-mono">{r.area}</div>
                  </div>
                  <span style={{
                    fontFamily: 'var(--bp-font-mono)', fontSize: 10, fontWeight: 600,
                    letterSpacing: '0.1em', padding: '4px 7px', borderRadius: 2,
                    border: '1px solid var(--bp-line-strong)',
                  }}>{r.svc}</span>
                </div>
              </div>
            ))}
          </div>

          <div style={{ marginTop: 48, display: 'flex', justifyContent: 'center' }}>
            <button className="bp-btn bp-btn--ghost bp-btn--lg">
              Load more reviews <Icon name="arrow" size={14} />
            </button>
          </div>
        </div>
      </section>

      <CTABand />
      <SiteFooter />
    </>
  );
}
