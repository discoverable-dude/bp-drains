import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import UtilityBar from '@/components/UtilityBar';
import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';
import Icon from '@/components/Icon';
import Eyebrow from '@/components/Eyebrow';
import { BP_PHONE, BP_PHONE_TEL, BP_AREAS } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'BP Drains South East — Local Drainage Specialists, Kent',
  description: 'Blocked drain? Six vans, real engineers, working across Kent. Same-day, fixed price, 24/7 emergency callout. We\'ll be there in 60 minutes.',
};

const SERVICES = [
  { icon: 'blocked',  name: 'Blocked drains',       slug: 'blocked-drains',         sub: 'Domestic & commercial', desc: 'Sinks, toilets, gullies, manholes — cleared fast, fixed properly.' },
  { icon: 'cctv',     name: 'CCTV surveys',          slug: 'cctv-drain-surveys',     sub: 'WinCan reports',        desc: 'High-def survey footage, faults marked, written report next day.' },
  { icon: 'repair',   name: 'Drain repairs',         slug: 'drain-repairs',          sub: 'Excavation & lining',   desc: 'Collapsed pipes, root damage, displaced joints — fixed first time.' },
  { icon: 'jetting',  name: 'High-pressure jetting', slug: 'emergency-drainage',     sub: 'Up to 4000 psi',        desc: 'Scale, grease and root cutting on commercial runs.' },
  { icon: 'tanker',   name: 'Tanker services',       slug: 'emergency-drainage',     sub: '3000 gal capacity',     desc: 'Septic emptying, interceptors, flooded basements — pumped out.' },
  { icon: 'sewer',    name: 'Sewer relining',        slug: 'drain-lining',           sub: 'No-dig repair',         desc: 'Patch and full-length CIPP relining for sewer & lateral pipes.' },
  { icon: 'septic',   name: 'Septic tanks',          slug: 'drain-repairs',          sub: 'Install & service',     desc: 'New installs, regular maintenance and pre-sale surveys.' },
  { icon: 'soakaway', name: 'Soakaways',             slug: 'drain-repairs',          sub: 'Design & build',        desc: 'Surface water solutions and replacement soakaway crates.' },
];

const VANS = [
  { l: 'VAN 01', n: 'Lewis P.',   area: 'North Kent · Thanet' },
  { l: 'VAN 02', n: 'Mark T.',    area: 'Canterbury · Ashford' },
  { l: 'VAN 03', n: 'Dan R.',     area: 'Dover · Folkestone' },
  { l: 'VAN 04', n: 'Jack S.',    area: 'Whitstable · Herne Bay' },
  { l: 'VAN 05', n: 'Connor B.', area: 'Faversham · Sittingbourne' },
  { l: 'VAN 06', n: 'Aaron W.',  area: 'Margate · Ramsgate' },
];

const TESTIMONIALS = [
  { src: 'Google',    date: '04 Apr 2026', name: 'James H.',   area: 'Canterbury', text: '"Diagnosed the issue with a CCTV survey within 20 minutes, told us exactly what the repair would cost, and had it done by the next afternoon. Old-school proper service."' },
  { src: 'Trustpilot',date: '28 Mar 2026', name: 'Priya N.',   area: 'Margate',    text: '"They picked up the phone at 7am on a Sunday. Aaron was here by 9. Polite, tidy, explained everything in plain English. Will use again — and recommend."' },
  { src: 'Facebook',  date: '15 Mar 2026', name: 'Robert C.',  area: 'Folkestone', text: '"Quoted half what a national company tried to charge me. Same job, done properly. Local lads who clearly know what they\'re doing."' },
];

const GALLERY_ITEMS = [
  { src: '/gallery/cctv1.webp',                                                  alt: 'CCTV survey — root intrusion',          tag: 'CCTV' },
  { src: '/gallery/bp-0204-2.webp',                                              alt: 'No-dig liner installed',                tag: 'REPAIR' },
  { src: '/gallery/47473832_2186064241414166_928130329447759872_o.jpg',          alt: 'Collapsed clay pipe repair',            tag: 'EXCAVATION' },
  { src: '/gallery/bp-0204-3.webp',                                              alt: 'New 110mm pipe installed',              tag: 'EXCAVATION' },
  { src: '/gallery/67449443_2556014134419173_7300167616797081600_o.webp',        alt: 'Grease build-up before jetting',        tag: 'JETTING' },
  { src: '/gallery/69919326_2637683579585561_5646349571383623680_o.webp',        alt: 'Cleared drain after high-pressure jet', tag: 'JETTING' },
  { src: '/gallery/bpd1.webp',                                                   alt: 'Tanker emptying job',                   tag: 'TANKER' },
  { src: '/gallery/Gallery8.webp',                                               alt: 'Drain survey and inspection',           tag: 'SURVEY' },
];

export default function HomePage() {
  return (
    <>
      <UtilityBar />
      <SiteHeader />

      {/* ── HERO ── */}
      <section style={{
        background: 'var(--bp-stone-100)',
        borderBottom: '1px solid var(--bp-line)',
      }}>
        <div style={{ maxWidth: 'var(--bp-container)', margin: '0 auto', padding: '64px var(--bp-gutter) 0' }}>
          <div className="hero-split" style={{ alignItems: 'stretch' }}>

            {/* Left */}
            <div style={{ paddingBottom: 64, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <div style={{
                display: 'inline-flex', alignItems: 'center', gap: 8,
                fontFamily: 'var(--bp-font-mono)', fontSize: 12,
                letterSpacing: '0.1em', textTransform: 'uppercase',
                color: 'var(--bp-stone-500)',
              }}>
                <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--bp-ink)', display: 'inline-block', flexShrink: 0 }} />
                Family run · Since 2009
              </div>

              <h1 style={{
                fontSize: 'var(--bp-fs-hero)', fontWeight: 900,
                letterSpacing: '-0.035em', lineHeight: 0.95,
                marginTop: 20,
              }}>
                Blocked drain?<br />
                There in{' '}
                <span style={{ color: 'var(--bp-red)', textDecoration: 'underline', textDecorationColor: 'var(--bp-red)', textDecorationThickness: '4px', textUnderlineOffset: '6px' }}>
                  60&nbsp;min.
                </span>
              </h1>

              <p style={{
                marginTop: 'var(--bp-stack-gap)', fontSize: 19, lineHeight: 1.55,
                color: 'var(--bp-stone-600)', maxWidth: 520,
              }}>
                Six vans, six engineers across Kent and the South East.{' '}
                <strong style={{ color: 'var(--bp-ink)' }}>We turn up when we say, fix it properly, tell you the cost — no surprises.</strong>
              </p>

              <div style={{ marginTop: 'var(--bp-stack-gap)', display: 'flex', gap: 12, alignItems: 'center', flexWrap: 'wrap' }}>
                <a className="bp-btn bp-btn--cta bp-btn--lg" href={BP_PHONE_TEL}>
                  <Icon name="phone" size={18} stroke="#fff" />
                  Call {BP_PHONE}
                </a>
                <Link className="bp-btn bp-btn--ghost bp-btn--lg" href="/contact">
                  Get a free quote
                  <Icon name="arrow" size={16} />
                </Link>
              </div>

              <div style={{ marginTop: 24, display: 'flex', alignItems: 'center', gap: 8 }}>
                <span className="bp-stars" style={{ fontSize: 18 }}>★★★★★</span>
                <span style={{ fontFamily: 'var(--bp-font-mono)', fontSize: 13, color: 'var(--bp-stone-600)' }}>
                  4.9 · 312 Google reviews
                </span>
              </div>
            </div>

            {/* Right — stacked image + testimonial */}
            <div className="hero-img-col" style={{ display: 'flex', flexDirection: 'column', marginRight: 'calc(var(--bp-gutter) * -1)' }}>
              <div style={{ position: 'relative', flex: 1, minHeight: 360 }}>
                <Image
                  src="/images/vans-in-a-row.webp"
                  alt="BP Drains South East fleet of six vans"
                  fill
                  priority
                  style={{ objectFit: 'cover' }}
                />
                <div style={{
                  position: 'absolute', top: 20, left: 20,
                  display: 'inline-flex', alignItems: 'center', gap: 8,
                  background: 'rgba(0,0,0,0.75)', backdropFilter: 'blur(4px)',
                  padding: '8px 12px', borderRadius: 6,
                  fontFamily: 'var(--bp-font-mono)', fontSize: 11, letterSpacing: '0.12em',
                  textTransform: 'uppercase', fontWeight: 600, color: '#fff',
                }}>
                  <span style={{ width: 7, height: 7, borderRadius: '50%', background: '#3DBA6E', display: 'inline-block', boxShadow: '0 0 0 2px rgba(61,186,110,0.35)' }} />
                  Live · 3 jobs in progress
                </div>
              </div>

              {/* Accreditation logos */}
              <div style={{
                background: '#fff', padding: '18px 24px',
                borderTop: '3px solid var(--bp-red)',
                display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16, flexWrap: 'wrap',
              }}>
                <Image src="/logos/checkatrade-com-logo-png_seeklogo-215905-removebg-preview.webp" alt="Checkatrade" width={100} height={32} style={{ objectFit: 'contain', height: 28, width: 'auto' }} />
                <Image src="/logos/Drain-Safe-Logo.webp" alt="Drain Safe Approved" width={80} height={32} style={{ objectFit: 'contain', height: 28, width: 'auto' }} />
                <Image src="/logos/NADC-Logo-Original-removebg-preview.webp" alt="NADC Member" width={80} height={32} style={{ objectFit: 'contain', height: 28, width: 'auto' }} />
                <Image src="/logos/Federation_of_Small_Businesses_logo-svg.png" alt="FSB Member" width={80} height={32} style={{ objectFit: 'contain', height: 28, width: 'auto' }} />
              </div>
            </div>

          </div>
        </div>

        {/* Stats strip — full width, bottom of hero */}
        <div style={{ borderTop: '1px solid var(--bp-line)', marginTop: 0, background: 'var(--bp-white)' }}>
          <div style={{ maxWidth: 'var(--bp-container)', margin: '0 auto' }}>
            <div className="four-stats" style={{ borderLeft: '1px solid var(--bp-line)' }}>
              {[
                { v: '47 min', l: 'Avg on-site, Kent' },
                { v: '6',      l: 'Vans on the road' },
                { v: '4.9★',   l: '312 Google reviews' },
                { v: '24/7',   l: 'Emergency callout' },
              ].map(s => (
                <div key={s.l} style={{ padding: '24px var(--bp-gutter)', borderRight: '1px solid var(--bp-line)' }}>
                  <div style={{
                    fontFamily: 'var(--bp-font-display)', fontWeight: 800,
                    fontSize: 32, lineHeight: 1, letterSpacing: '-0.02em',
                  }}>{s.v}</div>
                  <div className="bp-mono" style={{ marginTop: 6 }}>{s.l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section style={{ background: 'var(--bp-stone-100)', padding: 'var(--bp-section-y) var(--bp-gutter)' }}>
        <div style={{ maxWidth: 'var(--bp-container)', margin: '0 auto' }}>
          <div className="two-col" style={{ alignItems: 'end', marginBottom: 'var(--bp-heading-gap)', gap: 48 }}>
            <div>
              <Eyebrow index="03 / 09" label="What we do" />
              <h2 style={{ marginTop: 20, maxWidth: 540 }}>Every drainage job, end to end.</h2>
            </div>
            <p style={{ color: 'var(--bp-stone-600)', fontSize: 17, lineHeight: 1.5, maxWidth: 480 }}>
              From a blocked sink on a Tuesday to a full sewer relining project — same team, same vans,
              same straight pricing.
            </p>
          </div>

          <div className="bp-grid-4">
            {SERVICES.map((s, i) => (
              <div key={s.name} style={{
                background: 'var(--bp-white)', padding: 'var(--bp-card-pad)',
                display: 'flex', flexDirection: 'column', gap: 16,
              }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <div style={{
                    width: 48, height: 48,
                    background: 'var(--bp-stone-100)',
                    border: '1px solid var(--bp-line-strong)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    borderRadius: 'var(--bp-r-1)',
                  }}>
                    <Icon name={s.icon} size={24} stroke="var(--bp-ink)" />
                  </div>
                  <span style={{ fontFamily: 'var(--bp-font-mono)', fontSize: 11, letterSpacing: '0.12em', color: 'var(--bp-fg-faint)' }}>
                    {String(i + 1).padStart(2, '0')}
                  </span>
                </div>
                <div>
                  <h4>{s.name}</h4>
                  <div className="bp-mono" style={{ marginTop: 6 }}>{s.sub}</div>
                </div>
                <p style={{ color: 'var(--bp-stone-600)', fontSize: 14, lineHeight: 1.5, flex: 1 }}>{s.desc}</p>
                <Link href={`/services/${s.slug}`} style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 13, fontWeight: 600, color: 'var(--bp-red)' }}>
                  Learn more <Icon name="arrow" size={14} stroke="var(--bp-red)" />
                </Link>
              </div>
            ))}
          </div>

          <div style={{ marginTop: 32, display: 'flex', justifyContent: 'flex-end' }}>
            <Link href="/services/blocked-drains" className="bp-btn bp-btn--ghost">
              View all services <Icon name="arrow" size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── FLEET + AREAS ── */}
      <section style={{ background: 'var(--bp-ink)', color: '#fff', padding: 'var(--bp-section-y) var(--bp-gutter)' }}>
        <div style={{ maxWidth: 'var(--bp-container)', margin: '0 auto' }}>
          <div className="two-col" style={{ gap: 64, alignItems: 'start' }}>
            <div>
              <Eyebrow index="04 / 09" label="The fleet" onDark />
              <h2 style={{ color: '#fff', marginTop: 20 }}>Six vans. One team. <br />Kent through and through.</h2>
              <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: 17, lineHeight: 1.55, marginTop: 'var(--bp-stack-gap)', maxWidth: 480 }}>
                You don&apos;t get a sub-contractor. You get one of six BP Drains vans, kitted out with everything
                we need to finish the job on the first visit — jetters, rods, CCTV crawler, repair kit, the lot.
              </p>
              <div style={{
                fontFamily: 'var(--bp-font-hand)',
                fontSize: 30, fontWeight: 400,
                color: 'rgba(255,255,255,0.45)',
                marginTop: 20, lineHeight: 1, letterSpacing: '0.01em',
              }}>— Lewis, BP Drains</div>
              <div className="van-grid" style={{ marginTop: 'var(--bp-stack-gap)' }}>
                {VANS.map(v => (
                  <div key={v.l} style={{ background: 'var(--bp-ink)', padding: '16px 18px', border: '1px solid rgba(255,255,255,0.06)' }}>
                    <div style={{ fontFamily: 'var(--bp-font-mono)', fontSize: 11, letterSpacing: '0.12em', color: 'rgba(255,255,255,0.45)' }}>{v.l}</div>
                    <div style={{ fontWeight: 600, marginTop: 4 }}>{v.n}</div>
                    <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.55)', marginTop: 2 }}>{v.area}</div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <div style={{ position: 'relative', height: 360, borderRadius: 'var(--bp-r-2)', overflow: 'hidden', background: 'var(--bp-ink)' }}>
                <video
                  autoPlay muted loop playsInline
                  style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', opacity: 0.85 }}
                >
                  <source src="/videos/bp_drains%20(1080p).mp4" type="video/mp4" />
                </video>
              </div>
              <div style={{
                marginTop: 16, padding: '24px 0',
                borderTop: '1px solid rgba(255,255,255,0.12)',
                borderBottom: '1px solid rgba(255,255,255,0.12)',
              }}>
                <div className="bp-mono" style={{ color: 'rgba(255,255,255,0.55)' }}>Where we work · 11 core towns</div>
                <div className="area-tags" style={{ marginTop: 16 }}>
                  {BP_AREAS.map(a => (
                    <Link key={a} href={`/areas/${a.toLowerCase()}`} style={{
                      padding: '8px 14px',
                      border: '1px solid rgba(255,255,255,0.2)',
                      borderRadius: 999, fontSize: 13, color: '#fff',
                    }}>{a}</Link>
                  ))}
                  <span style={{
                    padding: '8px 14px',
                    background: 'rgba(255,255,255,0.1)',
                    border: '1px solid rgba(255,255,255,0.2)',
                    borderRadius: 999, fontSize: 13, color: '#fff', fontWeight: 600,
                  }}>+ CT, ME, TN postcodes</span>
                </div>
              </div>
              <div style={{ marginTop: 24, display: 'flex', gap: 12, flexWrap: 'wrap' }}>
                <a href={BP_PHONE_TEL} className="bp-btn bp-btn--cta">
                  <Icon name="phone" size={14} stroke="#fff" /> {BP_PHONE}
                </a>
                <Link href="/areas/margate" className="bp-btn" style={{ background: '#fff', color: 'var(--bp-ink)' }}>
                  Coverage map <Icon name="arrow" size={14} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── PROCESS ── */}
      <section style={{ background: 'var(--bp-white)', padding: 'var(--bp-section-y) var(--bp-gutter)' }}>
        <div style={{ maxWidth: 'var(--bp-container)', margin: '0 auto' }}>
          <Eyebrow index="05 / 09" label="How we work" />
          <h2 style={{ marginTop: 20, maxWidth: 560 }}>From your call<br />to cleared drain.</h2>

          <div className="process-grid" style={{ marginTop: 'var(--bp-heading-gap)' }}>
            {[
              { n: '01', t: 'You call',    d: 'Tell us what\'s happening. We give you a window — almost always same day, often same hour.' },
              { n: '02', t: 'We turn up',  d: 'A BP Drains van, in livery, with the right kit on board. We text you when we\'re 10 minutes out.' },
              { n: '03', t: 'We diagnose', d: 'CCTV if needed. We show you what we found, on the spot. Then we tell you the fixed price.' },
              { n: '04', t: 'We fix it',   d: 'Clear it, repair it, line it. Same day where possible. You pay only after the job\'s done.' },
            ].map(p => (
              <div key={p.n} style={{ paddingRight: 24 }}>
                <div style={{
                  width: 36, height: 36, borderRadius: '50%',
                  background: 'var(--bp-red)', color: '#fff',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontFamily: 'var(--bp-font-mono)', fontSize: 13, fontWeight: 700,
                  position: 'relative', zIndex: 1, flexShrink: 0,
                }}>{p.n}</div>
                <h4 style={{ marginTop: 24 }}>{p.t}</h4>
                <p style={{ marginTop: 12, color: 'var(--bp-stone-600)', fontSize: 15, lineHeight: 1.5 }}>{p.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section style={{ background: 'var(--bp-stone-100)', padding: 'var(--bp-section-y) var(--bp-gutter)' }}>
        <div style={{ maxWidth: 'var(--bp-container)', margin: '0 auto' }}>
          <div style={{ display: 'flex', alignItems: 'end', justifyContent: 'space-between', marginBottom: 48, flexWrap: 'wrap', gap: 16 }}>
            <div>
              <Eyebrow index="06 / 09" label="What our customers say" />
              <h2 style={{ marginTop: 20 }}>312 reviews. <span style={{ color: 'var(--bp-red)' }}>4.9</span> average.<br />Read them all.</h2>
            </div>
            <Link href="/testimonials" className="bp-btn bp-btn--ghost">
              All testimonials <Icon name="arrow" size={14} />
            </Link>
          </div>

          <div className="bp-grid-3">
            {TESTIMONIALS.map(t => (
              <div key={t.name} className="bp-card" style={{ padding: 'var(--bp-card-pad)', display: 'flex', flexDirection: 'column', gap: 16 }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <span style={{
                    fontFamily: 'var(--bp-font-mono)', fontSize: 11, fontWeight: 600,
                    letterSpacing: '0.12em', textTransform: 'uppercase',
                    background: 'var(--bp-stone-100)', padding: '4px 8px', borderRadius: 6,
                  }}>{t.src}</span>
                  <span style={{ fontFamily: 'var(--bp-font-mono)', fontSize: 11, color: 'var(--bp-fg-faint)' }}>{t.date}</span>
                </div>
                <div className="bp-stars">★ ★ ★ ★ ★</div>
                <p style={{ fontSize: 15, lineHeight: 1.55, flex: 1 }}>{t.text}</p>
                <div style={{ paddingTop: 16, borderTop: '1px solid var(--bp-line)' }}>
                  <div style={{ fontWeight: 600, fontSize: 14 }}>{t.name}</div>
                  <div className="bp-mono" style={{ marginTop: 2 }}>{t.area}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── GALLERY PREVIEW ── */}
      <section style={{ background: 'var(--bp-white)', padding: 'var(--bp-section-y) var(--bp-gutter)' }}>
        <div style={{ maxWidth: 'var(--bp-container)', margin: '0 auto' }}>
          <div style={{ display: 'flex', alignItems: 'end', justifyContent: 'space-between', marginBottom: 48, flexWrap: 'wrap', gap: 16 }}>
            <div>
              <Eyebrow index="07 / 09" label="On the job · Real photos" />
              <h2 style={{ marginTop: 20 }}>Honest work. Including the messy bits.</h2>
            </div>
            <Link href="/gallery" className="bp-btn bp-btn--ghost">
              Full gallery <Icon name="arrow" size={14} />
            </Link>
          </div>

          <div className="bp-grid-4" style={{ gap: 12, background: 'transparent', border: 'none' }}>
            {GALLERY_ITEMS.map((it, i) => (
              <div key={i} style={{ position: 'relative', height: 200, borderRadius: 'var(--bp-r-2)', overflow: 'hidden' }}>
                <Image src={it.src} alt={it.alt} fill style={{ objectFit: 'cover' }} />
                <span style={{
                  position: 'absolute', top: 10, left: 10,
                  fontFamily: 'var(--bp-font-mono)', fontSize: 10, fontWeight: 600,
                  letterSpacing: '0.12em', padding: '4px 8px', borderRadius: 6,
                  background: '#fff', color: 'var(--bp-ink)', zIndex: 1,
                }}>{it.tag}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── EMERGENCY CTA ── */}
      <section style={{ background: 'var(--bp-red)', color: '#fff', padding: '64px var(--bp-gutter)' }}>
        <div style={{
          maxWidth: 'var(--bp-container)', margin: '0 auto',
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          gap: 48, flexWrap: 'wrap',
        }}>
          <div>
            <div style={{ fontFamily: 'var(--bp-font-mono)', fontSize: 13, letterSpacing: '0.12em', textTransform: 'uppercase', opacity: 0.85 }}>
              24 / 7 · 365 · NO WEEKEND SURCHARGE
            </div>
            <div style={{
              fontFamily: 'var(--bp-font-display)', fontWeight: 900,
              fontSize: 'clamp(32px, 4vw, 56px)',
              marginTop: 8, letterSpacing: '-0.025em', lineHeight: 1,
            }}>
              Drain emergency? Call us right now.
            </div>
          </div>
          <a href={BP_PHONE_TEL} style={{
            background: '#fff', color: 'var(--bp-ink)',
            padding: '28px 36px', borderRadius: 6,
            display: 'inline-flex', alignItems: 'center', gap: 16,
            fontFamily: 'var(--bp-font-display)', fontWeight: 800,
            fontSize: 'clamp(20px, 2.5vw, 32px)',
            letterSpacing: '-0.02em', whiteSpace: 'nowrap',
          }}>
            <Icon name="phone" size={28} />
            {BP_PHONE}
          </a>
        </div>
      </section>

      <SiteFooter />
    </>
  );
}
