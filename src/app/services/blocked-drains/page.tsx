import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import UtilityBar from '@/components/UtilityBar';
import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';
import CTABand from '@/components/CTABand';
import Icon from '@/components/Icon';
import Eyebrow from '@/components/Eyebrow';
import { BP_PHONE, BP_PHONE_TEL } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Blocked Drains — Cleared Today',
  description: 'Blocked drain in Kent? Sinks, toilets, gullies, manholes — cleared fast, fixed properly. Same-day service, fixed price, 24/7. From £95.',
};

const COVERS = [
  'Kitchen sinks and food-waste blockages',
  'Bathroom — toilets, baths, showers, basins',
  'Outdoor gullies and yard drains',
  'Manholes, inspection chambers, rodding eyes',
  'Soakaways and rainwater pipes',
  'Commercial floor drains, grease traps',
  'Toilet vent stacks and soil pipes',
  'Section 24 / shared private sewers',
];

const SIGNS = [
  'Water draining slowly',
  'Gurgling sound from the plughole',
  'A bad smell outside, near a gully',
  'Toilet not flushing properly',
  'Sewage at a manhole cover',
  'Multiple drains affected at once',
];

const STEPS = [
  { t: '00:00', l: 'You call',      d: 'We pick up. Give you an arrival window.' },
  { t: '00:45', l: 'Van arrives',   d: 'Marked van. We text 10 mins out.' },
  { t: '01:00', l: 'Diagnose',      d: 'Rods first, CCTV if it doesn\'t clear.' },
  { t: '01:30', l: 'Fixed price',   d: 'Quoted before any work starts.' },
  { t: '02:15', l: 'Cleared & gone',d: 'Site left clean. Card payment.' },
];

const PRICING = [
  { l: 'Standard blockage clearance', sub: 'Up to 1 hour on-site',          p: '£95' },
  { l: 'Out-of-hours / weekend',      sub: 'After 6pm or Sat/Sun',           p: '£155' },
  { l: 'With CCTV diagnostic',        sub: 'Includes written report',         p: '£245' },
  { l: 'Manhole lift / external',     sub: 'External blockages, multiple chambers', p: 'From £180' },
  { l: 'Commercial / multi-property', sub: 'Bespoke',                         p: 'Quoted' },
];

const FAQS = [
  { q: 'How quickly can you get here?',    a: 'Usually 45–90 minutes within Kent. We send 10-minute heads-up by text.' },
  { q: 'Do I have to be there?',           a: 'No, as long as we can access the drain. Many landlord jobs we attend with just a phone number.' },
  { q: 'Will you make a mess inside?',     a: 'External-only on most blockages — we go in through a manhole or gully, not your kitchen.' },
  { q: 'What payment do you take?',        a: 'Card, bank transfer, or invoice for trade. Payment only after the job\'s signed off.' },
  { q: 'Are you insured?',                 a: 'Yes — £5m public liability and £10m employer\'s liability. Certificate on request.' },
];

export default function BlockedDrainsPage() {
  return (
    <>
      <UtilityBar />
      <SiteHeader active="Services" />

      <div style={{ background: 'var(--bp-stone-100)', padding: '20px var(--bp-gutter)', borderBottom: '1px solid var(--bp-line)' }}>
        <div style={{ maxWidth: 'var(--bp-container)', margin: '0 auto', fontFamily: 'var(--bp-font-mono)', fontSize: 12, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--bp-fg-muted)' }}>
          <Link href="/">BP Drains</Link> · Services · <span style={{ color: 'var(--bp-ink)' }}>Blocked drains</span>
        </div>
      </div>

      {/* Hero */}
      <section style={{ background: 'var(--bp-stone-100)', padding: '64px var(--bp-gutter) 96px', borderBottom: '1px solid var(--bp-line)' }}>
        <div style={{ maxWidth: 'var(--bp-container)', margin: '0 auto' }}>
          <div className="hero-split-eq">
            <div>
              <Eyebrow index="SERVICE / 01" label="Blocked drains" />
              <h1 style={{ fontSize: 'var(--bp-fs-h1)', marginTop: 20 }}>
                Blocked drain.<br />
                <span style={{ color: 'var(--bp-stone-500)' }}>Cleared today.</span>
              </h1>
              <p style={{ marginTop: 24, fontSize: 18, lineHeight: 1.55, color: 'var(--bp-stone-600)', maxWidth: 540 }}>
                Sinks, showers, toilets, gullies, manholes, soakaways — if water isn&apos;t going where it should,
                we&apos;ll find out why and put it right. Almost always in one visit.
              </p>
              <div style={{ marginTop: 32, display: 'flex', gap: 12, flexWrap: 'wrap' }}>
                <a className="bp-btn bp-btn--cta bp-btn--lg" href={BP_PHONE_TEL}>
                  <Icon name="phone" size={18} stroke="#fff" /> {BP_PHONE}
                </a>
                <Link className="bp-btn bp-btn--ghost bp-btn--lg" href="/contact">Free quote</Link>
              </div>

              {/* Price strip */}
              <div style={{ marginTop: 40, display: 'inline-flex', alignItems: 'center', gap: 0, border: '1px solid var(--bp-line-strong)', borderRadius: 2, overflow: 'hidden', background: '#fff', flexWrap: 'wrap' }}>
                {[
                  { l: 'Typical price', v: '£95 – £180' },
                  { l: 'Out-of-hours',  v: '+£60' },
                  { l: 'Time on-site',  v: '≈ 45 min' },
                ].map((p, i) => (
                  <div key={p.l} style={{ padding: '14px 20px', borderRight: i < 2 ? '1px solid var(--bp-line)' : undefined }}>
                    <div className="bp-mono">{p.l}</div>
                    <div style={{ fontFamily: 'var(--bp-font-display)', fontWeight: 800, fontSize: 28 }}>{p.v}</div>
                  </div>
                ))}
              </div>
            </div>

            <div style={{ position: 'relative', height: 540, borderRadius: 'var(--bp-r-2)', overflow: 'hidden' }}>
              <Image src="/images/clearing-a-sewer-line-with-a-compressor.webp" alt="Engineer clearing a blocked drain" fill priority style={{ objectFit: 'cover' }} />
            </div>
          </div>
        </div>
      </section>

      {/* What it covers + signs */}
      <section style={{ padding: 'var(--bp-section-y) var(--bp-gutter)' }}>
        <div style={{ maxWidth: 'var(--bp-container)', margin: '0 auto' }}>
          <div className="two-col">
            <div>
              <Eyebrow index="01" label="What this covers" />
              <h2 style={{ marginTop: 20, marginBottom: 24 }}>Every drain you can think of.</h2>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
                {COVERS.map(l => (
                  <li key={l} style={{ display: 'flex', alignItems: 'center', gap: 12, fontSize: 16 }}>
                    <Icon name="check" size={18} stroke="var(--bp-red)" />
                    <span>{l}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <Eyebrow index="02" label="Signs you need us" />
              <h2 style={{ marginTop: 20, marginBottom: 24 }}>You probably already know.</h2>
              <div className="bp-grid-2">
                {SIGNS.map(s => (
                  <div key={s} className="bp-card" style={{ padding: 16, display: 'flex', alignItems: 'center', gap: 10 }}>
                    <span style={{ width: 4, height: 24, background: 'var(--bp-red)', flexShrink: 0 }} />
                    <span style={{ fontSize: 14, fontWeight: 500 }}>{s}</span>
                  </div>
                ))}
              </div>
              <div style={{ marginTop: 24, padding: 20, background: 'var(--bp-ink)', color: '#fff', borderRadius: 2 }}>
                <div className="bp-mono" style={{ color: 'rgba(255,255,255,0.55)' }}>Rule of thumb</div>
                <p style={{ marginTop: 6, fontSize: 16, lineHeight: 1.5 }}>
                  If two or more fixtures are affected at the same time, the blockage is outside the house — and we should look at it before it backs up further.{' '}
                  <a href={BP_PHONE_TEL} style={{ color: '#fff', textDecoration: 'underline', fontWeight: 600 }}>Call us</a>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section style={{ background: 'var(--bp-stone-100)', padding: 'var(--bp-section-y) var(--bp-gutter)' }}>
        <div style={{ maxWidth: 'var(--bp-container)', margin: '0 auto' }}>
          <Eyebrow index="03" label="What to expect" />
          <h2 style={{ marginTop: 20, marginBottom: 56 }}>From phone-call to fixed.</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: 1, background: 'var(--bp-line)', border: '1px solid var(--bp-line)' }}
               className="process-steps">
            <style>{`.process-steps { grid-template-columns: repeat(5, 1fr) !important; } @media (max-width: 767px) { .process-steps { grid-template-columns: repeat(1, 1fr) !important; } }`}</style>
            {STEPS.map((p, i) => (
              <div key={p.t} style={{ background: '#fff', padding: '24px 20px', display: 'flex', flexDirection: 'column', gap: 12 }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <span style={{ fontFamily: 'var(--bp-font-mono)', fontSize: 11, letterSpacing: '0.1em', color: 'var(--bp-fg-muted)' }}>STEP {String(i + 1).padStart(2, '0')}</span>
                  <span style={{ fontFamily: 'var(--bp-font-mono)', fontSize: 11, letterSpacing: '0.06em', background: 'var(--bp-ink)', color: '#fff', padding: '2px 6px', borderRadius: 2 }}>{p.t}</span>
                </div>
                <h4>{p.l}</h4>
                <p style={{ fontSize: 14, color: 'var(--bp-stone-600)', lineHeight: 1.5 }}>{p.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section style={{ padding: 'var(--bp-section-y) var(--bp-gutter)' }}>
        <div style={{ maxWidth: 'var(--bp-container)', margin: '0 auto' }}>
          <div className="two-col-rev">
            <div>
              <Eyebrow index="04" label="Pricing" />
              <h2 style={{ marginTop: 20 }}>Honest. Fixed before we start.</h2>
              <p style={{ marginTop: 16, color: 'var(--bp-stone-600)', fontSize: 16 }}>
                Every job gets a fixed quote before tools come out. If it turns out to be more (we&apos;ll show you why), you say yes or no. No &ldquo;while we&apos;re here&rdquo; creep.
              </p>
            </div>
            <div>
              {PRICING.map(r => (
                <div key={r.l} style={{
                  display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                  padding: '24px 0', borderBottom: '1px solid var(--bp-line)',
                }}>
                  <div>
                    <div style={{ fontWeight: 600, fontSize: 17 }}>{r.l}</div>
                    <div className="bp-mono" style={{ marginTop: 4 }}>{r.sub}</div>
                  </div>
                  <div style={{ fontFamily: 'var(--bp-font-display)', fontWeight: 800, fontSize: 28, letterSpacing: '-0.02em' }}>{r.p}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ background: 'var(--bp-stone-100)', padding: 'var(--bp-section-y) var(--bp-gutter)' }}>
        <div style={{ maxWidth: 'var(--bp-container)', margin: '0 auto' }}>
          <div className="two-col-rev">
            <div>
              <Eyebrow index="05" label="FAQs" />
              <h2 style={{ marginTop: 20 }}>Asked, answered.</h2>
              <p style={{ marginTop: 16, color: 'var(--bp-stone-600)' }}>
                Can&apos;t see your question?{' '}
                <a href={BP_PHONE_TEL} style={{ textDecoration: 'underline', fontWeight: 600 }}>Call {BP_PHONE}</a>.
              </p>
            </div>
            <div>
              {FAQS.map((f, i) => (
                <details key={i} style={{ borderBottom: '1px solid var(--bp-line-strong)', padding: '24px 0' }} open={i === 0}>
                  <summary style={{ cursor: 'pointer', display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontWeight: 600, fontSize: 18, listStyle: 'none' }}>
                    <span>{f.q}</span>
                    <Icon name="plus" size={20} />
                  </summary>
                  <p style={{ marginTop: 12, color: 'var(--bp-stone-600)', fontSize: 16, lineHeight: 1.6, maxWidth: 640 }}>{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Related services */}
      <section style={{ padding: 'var(--bp-section-y) var(--bp-gutter)' }}>
        <div style={{ maxWidth: 'var(--bp-container)', margin: '0 auto' }}>
          <Eyebrow index="06" label="Related services" />
          <h3 style={{ marginTop: 16, marginBottom: 24 }}>Other things we do</h3>
          <div className="bp-grid-3">
            {[
              { icon: 'cctv',    name: 'CCTV survey',          desc: 'Pinpoint the cause when rodding doesn\'t clear it.' },
              { icon: 'jetting', name: 'High-pressure jetting', desc: 'For commercial grease, scale and roots.' },
              { icon: 'repair',  name: 'Drain repair',          desc: 'Damaged pipework excavated and replaced.' },
            ].map(r => (
              <Link key={r.name} href="/services/blocked-drains" className="bp-card" style={{ padding: 24, display: 'flex', flexDirection: 'column', gap: 12 }}>
                <Icon name={r.icon} size={28} />
                <div style={{ fontWeight: 600 }}>{r.name}</div>
                <p style={{ fontSize: 14, color: 'var(--bp-stone-600)' }}>{r.desc}</p>
                <span style={{ fontSize: 13, fontWeight: 600, display: 'inline-flex', alignItems: 'center', gap: 6 }}>
                  Read more <Icon name="arrow" size={14} />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTABand />
      <SiteFooter />
    </>
  );
}
