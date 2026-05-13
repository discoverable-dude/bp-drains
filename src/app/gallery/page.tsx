import type { Metadata } from 'next';
import UtilityBar from '@/components/UtilityBar';
import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';
import CTABand from '@/components/CTABand';
import Icon from '@/components/Icon';
import ImageSlot from '@/components/ImageSlot';
import Eyebrow from '@/components/Eyebrow';

export const metadata: Metadata = {
  title: 'Gallery — Real Drainage Jobs, Kent',
  description: '624 jobs photographed. Blocked drains, CCTV surveys, repairs, jetting and more across Kent and Sussex. Before & after photography.',
};

const FILTER_SERVICES = ['All', 'Blocked', 'CCTV', 'Repair', 'Jetting', 'Tanker', 'Sewer relining', 'Soakaway'];
const FILTER_AREAS    = ['All Kent', 'Margate', 'Canterbury', 'Ashford', 'Folkestone'];

const GRID_ITEMS = [
  { l: 'CCTV still — root intrusion · Canterbury',         tag: 'CCTV',       area: 'Canterbury', dark: true,  span: 2 },
  { l: 'Jetting before · grease build-up · restaurant',    tag: 'JETTING',    area: 'Whitstable', dark: true },
  { l: 'Jetting after · clean run · 100mm',                tag: 'JETTING',    area: 'Whitstable' },
  { l: 'New manhole · Margate Old Town',                   tag: 'EXCAVATION', area: 'Margate' },
  { l: 'Tanker emptying · industrial site, Ashford',       tag: 'TANKER',     area: 'Ashford',    dark: true, tall: true },
  { l: 'Soakaway crates installed · Herne Bay',            tag: 'SOAKAWAY',   area: 'Herne Bay' },
  { l: 'Septic tank install · Dover farm',                 tag: 'SEPTIC',     area: 'Dover' },
  { l: 'Engineer Lewis with CCTV crawler',                 tag: 'TEAM',       area: 'Kent',       span: 2 },
  { l: 'Before · collapsed gully · Folkestone',            tag: 'REPAIR',     area: 'Folkestone', dark: true },
  { l: 'After · new gully installed',                      tag: 'REPAIR',     area: 'Folkestone' },
  { l: 'Drain rodding — yard drain · Broadstairs',         tag: 'BLOCKED',    area: 'Broadstairs' },
  { l: 'Locating chamber under driveway · Ramsgate',       tag: 'SURVEY',     area: 'Ramsgate',   dark: true },
  { l: 'Van 03 on a callout — Dover seafront',             tag: 'FLEET',      area: 'Dover',      dark: true },
  { l: 'Before — toilet blockage · school, Thanet',        tag: 'BLOCKED',    area: 'Thanet',     dark: true },
  { l: 'CIPP install, mid-cure · Canterbury',              tag: 'RELINING',   area: 'Canterbury' },
];

function BadgeTag({ children, red }: { children: React.ReactNode; red?: boolean }) {
  return (
    <span style={{
      position: 'absolute', top: 10, left: 10,
      fontFamily: 'var(--bp-font-mono)', fontSize: 10, fontWeight: 600,
      letterSpacing: '0.12em', padding: '5px 9px', borderRadius: 2,
      background: red ? 'var(--bp-red)' : '#fff',
      color: red ? '#fff' : 'var(--bp-ink)',
    }}>{children}</span>
  );
}

function FilterChip({ label, active }: { label: string; active?: boolean }) {
  return (
    <button style={{
      padding: '8px 12px', borderRadius: 2,
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
            <div className="bp-mono" style={{ marginBottom: 12 }}>Featured · Faversham · 09 Apr 2026 · Sewer relining</div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 4, background: 'var(--bp-ink)' }}>
              <div style={{ position: 'relative' }}>
                <ImageSlot label="BEFORE — collapsed clay pipe, 110mm · CCTV still" style={{ height: 380, borderRadius: 0 }} dark />
                <BadgeTag red>BEFORE</BadgeTag>
              </div>
              <div style={{ position: 'relative' }}>
                <ImageSlot label="AFTER — CIPP liner installed, no excavation" style={{ height: 380, borderRadius: 0 }} />
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
                <ImageSlot label={g.l} dark={g.dark} style={{ height: '100%' }} />
                <BadgeTag>{g.tag}</BadgeTag>
                <span style={{
                  position: 'absolute', bottom: 10, right: 10,
                  fontFamily: 'var(--bp-font-mono)', fontSize: 10, letterSpacing: '0.08em',
                  background: 'rgba(14,13,11,0.85)', color: '#fff',
                  padding: '4px 8px', borderRadius: 2,
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
