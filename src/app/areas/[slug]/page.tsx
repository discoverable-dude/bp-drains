import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import ReactMarkdown from 'react-markdown';
import { notFound } from 'next/navigation';
import UtilityBar from '@/components/UtilityBar';
import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';
import CTABand from '@/components/CTABand';
import Icon from '@/components/Icon';
import Eyebrow from '@/components/Eyebrow';
import { getAllAreas, getAreaBySlug } from '@/lib/sanity';
import { BP_PHONE, BP_PHONE_TEL, BP_AREAS } from '@/lib/constants';

const AREA_SERVICES = [
  { icon: 'blocked',   name: 'Blocked drains',   stat: '24 / 7' },
  { icon: 'cctv',      name: 'CCTV surveys',      stat: 'Same day' },
  { icon: 'repair',    name: 'Pipe repairs',      stat: 'Fixed price' },
  { icon: 'jetting',   name: 'Jetting',           stat: 'All sizes' },
  { icon: 'tanker',    name: 'Tanker services',   stat: 'Scheduled' },
  { icon: 'sewer',     name: 'Sewer relining',    stat: 'No-dig' },
  { icon: 'septic',    name: 'Septic tanks',      stat: 'Certified' },
  { icon: 'soakaway',  name: 'Soakaways',         stat: 'Installed' },
];

type Params = Promise<{ slug: string }>;

export async function generateStaticParams() {
  const areas = await getAllAreas();
  return areas.map((a: { slug: { current: string } }) => ({ slug: a.slug.current }));
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { slug } = await params;
  const area = await getAreaBySlug(slug);
  if (!area) return {};
  return {
    title: area.seoTitle || `Drainage Services in ${area.name}, Kent`,
    description: area.intro,
  };
}

export default async function AreaPage({ params }: { params: Params }) {
  const { slug } = await params;
  const area = await getAreaBySlug(slug);
  if (!area) notFound();

  const otherAreas = BP_AREAS.filter(a => a.toLowerCase().replace(/\s+/g, '-') !== slug);

  return (
    <>
      <UtilityBar />
      <SiteHeader active="Areas" />

      {/* Breadcrumb */}
      <div style={{ background: 'var(--bp-stone-100)', padding: '20px var(--bp-gutter)', borderBottom: '1px solid var(--bp-line)' }}>
        <div style={{ maxWidth: 'var(--bp-container)', margin: '0 auto', fontFamily: 'var(--bp-font-mono)', fontSize: 12, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--bp-fg-muted)' }}>
          <Link href="/">BP Drains</Link> · Areas covered · <span style={{ color: 'var(--bp-ink)' }}>{area.name}</span>
        </div>
      </div>

      {/* Hero */}
      <section style={{ background: 'var(--bp-stone-100)', padding: '56px var(--bp-gutter) 96px', borderBottom: '1px solid var(--bp-line)' }}>
        <div style={{ maxWidth: 'var(--bp-container)', margin: '0 auto' }}>
          <div className="hero-split-eq">
            <div>
              <Eyebrow label={`${area.name} · Kent`} />
              <h1 style={{ fontSize: 'var(--bp-fs-h1)', marginTop: 20, letterSpacing: '-0.03em' }}>
                Drainage services<br />in <span style={{ background: 'var(--bp-ink)', color: '#fff', padding: '0 12px' }}>{area.name}</span>
              </h1>
              {area.intro && (
                <p style={{ marginTop: 24, fontSize: 18, lineHeight: 1.55, color: 'var(--bp-stone-600)', maxWidth: 540 }}>
                  {area.intro}
                </p>
              )}
              <div style={{ marginTop: 32, display: 'flex', gap: 12, flexWrap: 'wrap' }}>
                <a className="bp-btn bp-btn--cta bp-btn--lg" href={BP_PHONE_TEL}>
                  <Icon name="phone" size={18} stroke="#fff" /> Call now · {BP_PHONE}
                </a>
                <Link className="bp-btn bp-btn--ghost bp-btn--lg" href="/contact">Get a quote</Link>
              </div>
            </div>

            <div style={{ position: 'relative', height: 460, borderRadius: 'var(--bp-r-2)', overflow: 'hidden' }}>
              <Image
                src="/images/vans-in-a-row.webp"
                alt={`BP Drains vans covering ${area.name}, Kent`}
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Body content from Sanity */}
      {area.body && (
        <section style={{ padding: 'var(--bp-section-y) var(--bp-gutter)' }}>
          <div style={{ maxWidth: 'var(--bp-container)', margin: '0 auto' }}>
            <div className="two-col-rev">
              <div>
                <Eyebrow label="Local knowledge" />
                <h2 style={{ marginTop: 20 }}>Drainage in {area.name}</h2>
                <p style={{ marginTop: 16, color: 'var(--bp-stone-600)' }}>
                  Local area, local knowledge. Our engineers know the common issues in {area.name} — the pipe ages, the street layouts, the properties most at risk.
                </p>
                <div style={{ marginTop: 32 }}>
                  <a href={BP_PHONE_TEL} className="bp-btn bp-btn--cta">
                    <Icon name="phone" size={14} stroke="#fff" /> Call us now
                  </a>
                </div>
              </div>
              <div className="bp-prose">
                <ReactMarkdown>{area.body}</ReactMarkdown>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Services grid */}
      <section style={{ background: 'var(--bp-stone-100)', padding: 'var(--bp-section-y) var(--bp-gutter)' }}>
        <div style={{ maxWidth: 'var(--bp-container)', margin: '0 auto' }}>
          <Eyebrow label={`Services in ${area.name}`} />
          <h2 style={{ marginTop: 20, marginBottom: 40 }}>Everything we do, available in {area.name}.</h2>
          <div className="bp-grid-4">
            {AREA_SERVICES.map(s => (
              <div key={s.name} style={{ background: '#fff', padding: 24, display: 'flex', flexDirection: 'column', gap: 16 }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <Icon name={s.icon} size={26} />
                  <span className="bp-mono" style={{ color: 'var(--bp-fg-faint)' }}>{s.stat}</span>
                </div>
                <div style={{ fontWeight: 600 }}>
                  {s.name}
                  <div className="bp-mono" style={{ marginTop: 4 }}>In {area.name}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Nearby areas */}
      <section style={{ background: 'var(--bp-stone-100)', padding: '64px var(--bp-gutter)', borderTop: '1px solid var(--bp-line)' }}>
        <div style={{ maxWidth: 'var(--bp-container)', margin: '0 auto' }}>
          <Eyebrow label="Nearby areas" />
          <h3 style={{ marginTop: 16, marginBottom: 24 }}>We also cover</h3>
          <div className="area-tags">
            {otherAreas.map(a => (
              <Link
                key={a}
                href={`/areas/${a.toLowerCase().replace(/\s+/g, '-')}`}
                style={{
                  padding: '12px 18px', background: '#fff',
                  border: '1px solid var(--bp-line-strong)',
                  borderRadius: 2, fontSize: 14, fontWeight: 500,
                  display: 'inline-flex', alignItems: 'center', gap: 8,
                }}
              >
                {a} <Icon name="arrow" size={12} />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTABand area={area.name} />
      <SiteFooter />
    </>
  );
}
