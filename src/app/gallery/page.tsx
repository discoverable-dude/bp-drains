import type { Metadata } from 'next';
import Image from 'next/image';
import UtilityBar from '@/components/UtilityBar';
import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';
import CTABand from '@/components/CTABand';
import Icon from '@/components/Icon';
import Eyebrow from '@/components/Eyebrow';

export const metadata: Metadata = {
  title: 'Gallery — Real Drainage Jobs, Kent',
  description: '624 jobs photographed. Blocked drains, CCTV surveys, repairs, jetting and more across Kent and Sussex. Before & after photography.',
};

const FILTER_SERVICES = ['All', 'Blocked', 'CCTV', 'Repair', 'Jetting', 'Tanker', 'Sewer relining', 'Soakaway'];
const FILTER_AREAS    = ['All Kent', 'Margate', 'Canterbury', 'Ashford', 'Folkestone'];

const GRID_ITEMS = [
  { src: '/gallery/cctv1.webp',                                              alt: 'CCTV survey — root intrusion, Canterbury',  tag: 'CCTV',       area: 'Canterbury', span: 2 },
  { src: '/gallery/67449443_2556014134419173_7300167616797081600_o.webp',   alt: 'Grease build-up before jetting',            tag: 'JETTING',    area: 'Whitstable' },
  { src: '/gallery/69919326_2637683579585561_5646349571383623680_o.webp',   alt: 'Cleared drain after high-pressure jetting', tag: 'JETTING',    area: 'Whitstable' },
  { src: '/gallery/drain-in-driveway.webp',                                  alt: 'Drain repair in driveway',                  tag: 'EXCAVATION', area: 'Margate' },
  { src: '/gallery/bpd1.webp',                                               alt: 'Tanker emptying industrial site',           tag: 'TANKER',     area: 'Ashford',    tall: true },
  { src: '/gallery/bpdrain2.webp',                                            alt: 'Drainage installation',                     tag: 'SOAKAWAY',   area: 'Herne Bay' },
  { src: '/gallery/Gallery8.webp',                                            alt: 'Drain survey and inspection',               tag: 'SURVEY',     area: 'Dover' },
  { src: '/gallery/119486480_3527917627228814_2237385892678992918_o.webp',  alt: 'BP Drains team on site',                    tag: 'TEAM',       area: 'Kent',       span: 2 },
  { src: '/gallery/47473832_2186064241414166_928130329447759872_o.jpg',     alt: 'Before — collapsed pipe repair',            tag: 'REPAIR',     area: 'Folkestone' },
  { src: '/gallery/bp-0204-2.webp',                                          alt: 'After — pipe repair complete',              tag: 'REPAIR',     area: 'Folkestone' },
  { src: '/gallery/71030581_2637683709585548_4431080925643669504_o.webp',   alt: 'Drain rodding — yard drain',                tag: 'BLOCKED',    area: 'Broadstairs' },
  { src: '/gallery/AdobeStock_306187055.webp',                               alt: 'Drain survey and chamber location',         tag: 'SURVEY',     area: 'Ramsgate' },
  { src: '/gallery/119592196_3527918563895387_4499695224378497610_o.webp',  alt: 'BP Drains van on callout',                  tag: 'FLEET',      area: 'Dover' },
  { src: '/gallery/119604470_3527918147228762_7275274311276178422_o.webp',  alt: 'Drain blockage clearance',                  tag: 'BLOCKED',    area: 'Thanet' },
  { src: '/gallery/cctv5.webp',                                               alt: 'CIPP liner installation',                   tag: 'RELINING',   area: 'Canterbury' },
];

function BadgeTag({ children, red }: { children: React.ReactNode; red?: boolean }) {
  return (
    <span style={{
      position: 'absolute', top: 10, left: 10,
      fontFamily: 'var(--bp-font-mono)', fontSize: 10, fontWeight: 600,
      letterSpacing: '0.12em', padding: '5px 9px', borderRadius: 6,
      background: red ? 'var(--bp-red)' : '#fff',
      color: red ? '#fff' : 'var(--bp-ink)',
    }}>{children}</span>
  );
}

function FilterChip({ label, active }: { label: string; active?: boolean }) {
  return (
    <button style={{
      padding: '8px 12px', borderRadius: 6,
      border: `1px solid ${active ? 'var(--bp-ink)' : 'var(--bp-line)'}`,
      background: active ? 'var(--bp-ink)' : 'transparent',
      color: active ? '#fff' : 'var(--bp-ink)',
      fontSize: 13, fontWeight: 500, cursor: 'pointer',
      whiteSpace: 'nowrap',
    }}>{label}</button>
  );
}

export default function GalleryPage() {
  return (
    <>
      <UtilityBar />
      <SiteHeader active="Gallery" />

      {/* Hero */}
      <section style={{ background: 'var(--bp-stone-100)', padding: '64px var(--bp-gutter) 48px', borderBottom: '1px solid var(--bp-line)' }}>
        <div style={{ maxWidth: 'var(--bp-container)', margin: '0 auto' }}>
          <Eyebrow index="GALLERY / 01" label="Real jobs · Kent & Sussex" />
          <h1 style={{ fontSize: 'var(--bp-fs-h1)', marginTop: 20, maxWidth: 920 }}>
            624 jobs photographed.<br />
            <span style={{ color: 'var(--bp-stone-500)' }}>Mess, fixes, and everything in between.</span>
          </h1>
          <p style={{ marginTop: 20, fontSize: 18, color: 'var(--bp-stone-600)', maxWidth: 720 }}>
            Drainage is rarely pretty — we&apos;d rather show you the truth than airbrush it.
            Filter by service, town, or before/after.
          </p>
        </div>
      </section>

      {/* Filters */}
      <section style={{ background: 'var(--bp-white)', borderBottom: '1px solid var(--bp-line)', position: 'sticky', top: 0, zIndex: 10 }}>
        <div style={{ maxWidth: 'var(--bp-container)', margin: '0 auto', padding: '16px var(--bp-gutter)', overflowX: 'auto' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 16, minWidth: 'max-content' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <span className="bp-mono">Service:</span>
              <div style={{ display: 'flex', gap: 4 }}>
                {FILTER_SERVICES.map((it, i) => <FilterChip key={it} label={it} active={i === 0} />)}
              </div>
            </div>
            <div style={{ width: 1, height: 24, background: 'var(--bp-line-strong)', flexShrink: 0 }} />
            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <span className="bp-mono">Area:</span>
              <div style={{ display: 'flex', gap: 4 }}>
                {FILTER_AREAS.map((it, i) => <FilterChip key={it} label={it} active={i === 0} />)}
              </div>
            </div>
            <div style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: 12 }}>
              <span className="bp-mono">624 results</span>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section style={{ padding: '48px var(--bp-gutter) var(--bp-section-y)' }}>
        <div style={{ maxWidth: 'var(--bp-container)', margin: '0 auto' }}>
          {/* Featured before/after pair */}
          <div style={{ marginBottom: 24 }}>
            <div className="bp-mono" style={{ marginBottom: 12 }}>Featured · Canterbury · CCTV survey &amp; relining</div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 4, background: 'var(--bp-ink)' }}>
              <div style={{ position: 'relative', height: 380 }}>
                <Image src="/gallery/cctv3.webp" alt="Before — CCTV survey showing pipe fault" fill style={{ objectFit: 'cover' }} />
                <BadgeTag red>BEFORE</BadgeTag>
              </div>
              <div style={{ position: 'relative', height: 380 }}>
                <Image src="/gallery/bp-0204-4.webp" alt="After — repair complete" fill style={{ objectFit: 'cover' }} />
                <BadgeTag>AFTER</BadgeTag>
              </div>
            </div>
          </div>

          {/* Masonry grid */}
          <div className="gallery-grid">
            {GRID_ITEMS.map((g, i) => (
              <div key={i} style={{
                position: 'relative',
                gridColumn: g.span ? `span ${g.span}` : undefined,
                gridRow: g.tall ? 'span 2' : undefined,
              }}>
                <Image src={g.src} alt={g.alt} fill style={{ objectFit: 'cover' }} />
                <BadgeTag>{g.tag}</BadgeTag>
                <span style={{
                  position: 'absolute', bottom: 10, right: 10,
                  fontFamily: 'var(--bp-font-mono)', fontSize: 10, letterSpacing: '0.08em',
                  background: 'rgba(14,13,11,0.85)', color: '#fff',
                  padding: '4px 8px', borderRadius: 6,
                }}>{g.area}</span>
              </div>
            ))}
          </div>

          <div style={{ marginTop: 48, display: 'flex', justifyContent: 'center' }}>
            <button className="bp-btn bp-btn--ghost bp-btn--lg">
              Load more (609 remaining) <Icon name="arrow" size={14} />
            </button>
          </div>
        </div>
      </section>

      <CTABand />
      <SiteFooter />
    </>
  );
}
