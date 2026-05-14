import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import MarkdownBody from '@/components/MarkdownBody';
import UtilityBar from '@/components/UtilityBar';
import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';
import CTABand from '@/components/CTABand';
import Icon from '@/components/Icon';
import Eyebrow from '@/components/Eyebrow';
import { getAllServices, getServiceBySlug } from '@/lib/sanity';
import { BP_PHONE, BP_PHONE_TEL, BP_AREAS } from '@/lib/constants';

const PROCESS_STEPS = [
  { n: '01', l: 'You call',       d: 'We pick up. Give you an arrival window and a ballpark price.' },
  { n: '02', l: 'Van arrives',    d: 'Marked van. We text 10 minutes before arrival.' },
  { n: '03', l: 'Diagnose',       d: 'We assess the issue fully before quoting.' },
  { n: '04', l: 'Fixed price',    d: 'You approve the quote before any work starts.' },
  { n: '05', l: 'Job done',       d: 'Site left clean. Card, transfer or invoice.' },
];

type Params = Promise<{ slug: string }>;

export const dynamicParams = true;
export const revalidate = 3600;

export async function generateStaticParams() {
  try {
    const services = await getAllServices();
    return services.map((s: { slug: { current: string } }) => ({ slug: s.slug.current }));
  } catch {
    return [];
  }
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { slug } = await params;
  const service = await getServiceBySlug(slug);
  if (!service) return {};
  return {
    title: service.seoTitle || `${service.title} — BP Drains Kent`,
    description: service.intro,
  };
}

export default async function ServicePage({ params }: { params: Params }) {
  const { slug } = await params;
  const service = await getServiceBySlug(slug);
  if (!service) notFound();

  return (
    <>
      <UtilityBar />
      <SiteHeader active="Services" />

      {/* Breadcrumb */}
      <div style={{ background: 'var(--bp-stone-100)', padding: '20px var(--bp-gutter)', borderBottom: '1px solid var(--bp-line)' }}>
        <div style={{ maxWidth: 'var(--bp-container)', margin: '0 auto', fontFamily: 'var(--bp-font-mono)', fontSize: 12, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--bp-fg-muted)' }}>
          <Link href="/">BP Drains</Link> · Services · <span style={{ color: 'var(--bp-ink)' }}>{service.title}</span>
        </div>
      </div>

      {/* Hero */}
      <section style={{ background: 'var(--bp-stone-100)', padding: '64px var(--bp-gutter) 96px', borderBottom: '1px solid var(--bp-line)' }}>
        <div style={{ maxWidth: 'var(--bp-container)', margin: '0 auto' }}>
          <div className="hero-split-eq">
            <div>
              <Eyebrow label={service.title} />
              <h1 style={{ fontSize: 'var(--bp-fs-h1)', marginTop: 20 }}>
                {service.h1 || service.title}
              </h1>
              {service.intro && (
                <p style={{ marginTop: 24, fontSize: 18, lineHeight: 1.55, color: 'var(--bp-stone-600)', maxWidth: 540 }}>
                  {service.intro}
                </p>
              )}
              <div style={{ marginTop: 32, display: 'flex', gap: 12, flexWrap: 'wrap' }}>
                <a className="bp-btn bp-btn--cta bp-btn--lg" href={BP_PHONE_TEL}>
                  <Icon name="phone" size={18} stroke="#fff" /> {BP_PHONE}
                </a>
                <Link className="bp-btn bp-btn--ghost bp-btn--lg" href="/contact">Free quote</Link>
              </div>
            </div>

            <div style={{ position: 'relative', height: 540, borderRadius: 'var(--bp-r-2)', overflow: 'hidden' }}>
              <Image
                src="/images/clearing-a-sewer-line-with-a-compressor.webp"
                alt={`BP Drains — ${service.title}`}
                fill
                priority
                style={{ objectFit: 'cover' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Body content from Sanity */}
      {service.body && (
        <section style={{ padding: 'var(--bp-section-y) var(--bp-gutter)' }}>
          <div style={{ maxWidth: 'var(--bp-container)', margin: '0 auto' }}>
            <div className="two-col-rev">
              <div>
                <Eyebrow label="About this service" />
                <h2 style={{ marginTop: 20 }}>What&apos;s involved</h2>
                <p style={{ marginTop: 16, color: 'var(--bp-stone-600)' }}>
                  Honest, fixed-price work across Kent. We explain what needs doing and why before starting anything.
                </p>
                <div style={{ marginTop: 32 }}>
                  <a href={BP_PHONE_TEL} className="bp-btn bp-btn--cta">
                    <Icon name="phone" size={14} stroke="#fff" /> Call us now
                  </a>
                </div>
              </div>
              <MarkdownBody content={service.body} />
            </div>
          </div>
        </section>
      )}

      {/* Process */}
      <section style={{ background: 'var(--bp-stone-100)', padding: 'var(--bp-section-y) var(--bp-gutter)' }}>
        <div style={{ maxWidth: 'var(--bp-container)', margin: '0 auto' }}>
          <Eyebrow label="What to expect" />
          <h2 style={{ marginTop: 20, marginBottom: 56 }}>From phone-call to fixed.</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: 1, background: 'var(--bp-line)', border: '1px solid var(--bp-line)' }}
               className="process-steps">
            <style>{`.process-steps { grid-template-columns: repeat(5, 1fr) !important; } @media (max-width: 767px) { .process-steps { grid-template-columns: 1fr !important; } }`}</style>
            {PROCESS_STEPS.map(p => (
              <div key={p.n} style={{ background: '#fff', padding: '24px 20px', display: 'flex', flexDirection: 'column', gap: 12 }}>
                <span style={{ fontFamily: 'var(--bp-font-mono)', fontSize: 11, letterSpacing: '0.1em', color: 'var(--bp-fg-muted)' }}>STEP {p.n}</span>
                <h4>{p.l}</h4>
                <p style={{ fontSize: 14, color: 'var(--bp-stone-600)', lineHeight: 1.5 }}>{p.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Areas covered */}
      <section style={{ padding: 'var(--bp-section-y) var(--bp-gutter)' }}>
        <div style={{ maxWidth: 'var(--bp-container)', margin: '0 auto' }}>
          <Eyebrow label="Where we work" />
          <h2 style={{ marginTop: 20, marginBottom: 32 }}>{service.title} across Kent.</h2>
          <div className="area-tags">
            {BP_AREAS.map(a => (
              <Link
                key={a}
                href={`/areas/${a.toLowerCase().replace(/\s+/g, '-')}`}
                style={{
                  padding: '12px 18px', background: 'var(--bp-stone-100)',
                  border: '1px solid var(--bp-line-strong)',
                  borderRadius: 6, fontSize: 14, fontWeight: 500,
                  display: 'inline-flex', alignItems: 'center', gap: 8,
                }}
              >
                {a} <Icon name="arrow" size={12} />
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
