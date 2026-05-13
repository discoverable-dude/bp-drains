// templates-2.jsx — Gallery, Testimonials, Mobile homepage, Foundations artboards.

// ════════════════════════════════════════════════════════════════════════
// GALLERY
// ════════════════════════════════════════════════════════════════════════
function GalleryDesktop() {
  return (
    <div className="bp-root" data-screen-label="Gallery / Desktop">
      <UtilityBar />
      <SiteHeader active="Gallery" />

      {/* Hero */}
      <section style={{ background: 'var(--bp-stone-100)', padding: '64px var(--bp-gutter) 48px', borderBottom: '1px solid var(--bp-line)' }}>
        <div style={{ maxWidth: 'var(--bp-container)', margin: '0 auto' }}>
          <Eyebrow index="GALLERY / 01" label="Real jobs · Kent & Sussex" />
          <h1 style={{ fontSize: 'var(--bp-fs-h1)', marginTop: 20, maxWidth: 920 }}>
            624 jobs photographed.<br/>
            <span style={{ color: 'var(--bp-stone-500)' }}>Mess, fixes, and everything in between.</span>
          </h1>
          <p style={{ marginTop: 20, fontSize: 18, color: 'var(--bp-stone-600)', maxWidth: 720 }}>
            Drainage is rarely pretty — we'd rather show you the truth than airbrush it.
            Filter by service, town, or before/after.
          </p>
        </div>
      </section>

      {/* Filters */}
      <section style={{ background: 'var(--bp-white)', borderBottom: '1px solid var(--bp-line)', position: 'sticky', top: 0, zIndex: 10 }}>
        <div style={{ maxWidth: 'var(--bp-container)', margin: '0 auto', padding: '20px var(--bp-gutter)', display: 'flex', alignItems: 'center', gap: 24 }}>
          <FilterGroup label="Service" items={['All', 'Blocked', 'CCTV', 'Repair', 'Jetting', 'Tanker', 'Sewer relining', 'Soakaway']} active="All" />
          <div style={{ width: 1, height: 24, background: 'var(--bp-line-strong)' }} />
          <FilterGroup label="Area" items={['All Kent', 'Margate', 'Canterbury', 'Ashford', 'Folkestone', '+7']} active="All Kent" />
          <div style={{ width: 1, height: 24, background: 'var(--bp-line-strong)' }} />
          <FilterGroup label="Show" items={['All', 'Before / After', 'Before only', 'After only']} active="All" />
          <div style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: 12 }}>
            <span className="bp-mono">624 results</span>
            <select className="bp-input" style={{ width: 160, height: 40, padding: '0 12px' }}>
              <option>Newest first</option>
              <option>Oldest first</option>
              <option>By service</option>
            </select>
          </div>
        </div>
      </section>

      {/* Masonry-ish gallery */}
      <section style={{ padding: '48px var(--bp-gutter) var(--bp-section-y)' }}>
        <div style={{ maxWidth: 'var(--bp-container)', margin: '0 auto' }}>
          {/* Featured before/after pair */}
          <div style={{ marginBottom: 24 }}>
            <div className="bp-mono" style={{ marginBottom: 12 }}>Featured · Faversham · 09 Apr 2026 · Sewer relining</div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 4, background: 'var(--bp-ink)' }}>
              <div style={{ position: 'relative' }}>
                <ImageSlot label="BEFORE — collapsed clay pipe, 110mm · CCTV still" style={{ height: 380, borderRadius: 0 }} dark />
                <BadgeTag pos="tl" red>BEFORE</BadgeTag>
              </div>
              <div style={{ position: 'relative' }}>
                <ImageSlot label="AFTER — CIPP liner installed, no excavation" style={{ height: 380, borderRadius: 0 }} />
                <BadgeTag pos="tl">AFTER</BadgeTag>
              </div>
            </div>
          </div>

          {/* Grid */}
          <div style={{
            display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)',
            gridAutoRows: '220px', gridAutoFlow: 'dense', gap: 12,
          }}>
            {[
              { l: 'CCTV still — root intrusion · Canterbury', tag: 'CCTV', area: 'Canterbury', dark: true, span: 2 },
              { l: 'Jetting before · grease build-up · restaurant', tag: 'JETTING', area: 'Whitstable', dark: true },
              { l: 'Jetting after · clean run · 100mm', tag: 'JETTING', area: 'Whitstable' },
              { l: 'New manhole · Margate Old Town', tag: 'EXCAVATION', area: 'Margate' },
              { l: 'Tanker emptying · industrial site, Ashford', tag: 'TANKER', area: 'Ashford', dark: true, tall: true },
              { l: 'Soakaway crates installed · Herne Bay', tag: 'SOAKAWAY', area: 'Herne Bay' },
              { l: 'Septic tank install · Dover farm', tag: 'SEPTIC', area: 'Dover' },
              { l: 'Engineer Lewis with CCTV crawler', tag: 'TEAM', area: 'Kent', span: 2 },
              { l: 'Before · collapsed gully · Folkestone', tag: 'REPAIR', area: 'Folkestone', dark: true },
              { l: 'After · new gully installed', tag: 'REPAIR', area: 'Folkestone' },
              { l: 'Drain rodding — yard drain · Broadstairs', tag: 'BLOCKED', area: 'Broadstairs' },
              { l: 'Locating chamber under driveway · Ramsgate', tag: 'SURVEY', area: 'Ramsgate', dark: true },
              { l: 'Van 03 on a callout — Dover seafront', tag: 'FLEET', area: 'Dover', dark: true },
              { l: 'Before — toilet blockage · school, Thanet', tag: 'BLOCKED', area: 'Thanet', dark: true },
              { l: 'CIPP install, mid-cure · Canterbury', tag: 'RELINING', area: 'Canterbury' },
            ].map((g, i) => (
              <div key={i} style={{
                position: 'relative',
                gridColumn: g.span ? `span ${g.span}` : undefined,
                gridRow: g.tall ? 'span 2' : undefined,
              }}>
                <ImageSlot label={g.l} dark={g.dark} style={{ height: '100%' }} />
                <BadgeTag pos="tl">{g.tag}</BadgeTag>
                <span style={{
                  position: 'absolute', bottom: 10, right: 10,
                  fontFamily: 'var(--bp-font-mono)', fontSize: 10, letterSpacing: '0.08em',
                  background: 'rgba(14,13,11,0.85)', color: '#fff',
                  padding: '4px 8px', borderRadius: 2,
                }}>{g.area}</span>
              </div>
            ))}
          </div>

          {/* Load more */}
          <div style={{ marginTop: 48, display: 'flex', justifyContent: 'center' }}>
            <button className="bp-btn bp-btn--ghost bp-btn--lg">Load more (609 remaining) <Icon name="arrow" size={14} /></button>
          </div>
        </div>
      </section>

      <CTABand />
      <SiteFooter />
      <FloatingCTAs />
    </div>
  );
}

function FilterGroup({ label, items, active }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
      <span className="bp-mono">{label}:</span>
      <div style={{ display: 'flex', gap: 4 }}>
        {items.map(it => (
          <button key={it} style={{
            padding: '8px 12px', borderRadius: 2,
            border: '1px solid ' + (it === active ? 'var(--bp-ink)' : 'var(--bp-line)'),
            background: it === active ? 'var(--bp-ink)' : 'transparent',
            color: it === active ? '#fff' : 'var(--bp-ink)',
            fontSize: 13, fontWeight: 500, cursor: 'pointer',
          }}>{it}</button>
        ))}
      </div>
    </div>
  );
}

function BadgeTag({ children, pos, red }) {
  const pl = { tl: { top: 10, left: 10 }, tr: { top: 10, right: 10 } }[pos] || {};
  return (
    <span style={{
      position: 'absolute', ...pl,
      fontFamily: 'var(--bp-font-mono)', fontSize: 10, fontWeight: 600,
      letterSpacing: '0.12em', padding: '5px 9px', borderRadius: 2,
      background: red ? 'var(--bp-red)' : '#fff',
      color: red ? '#fff' : 'var(--bp-ink)',
    }}>{children}</span>
  );
}

// ════════════════════════════════════════════════════════════════════════
// TESTIMONIALS
// ════════════════════════════════════════════════════════════════════════
function TestimonialsDesktop() {
  return (
    <div className="bp-root" data-screen-label="Testimonials / Desktop">
      <UtilityBar />
      <SiteHeader active="Testimonials" />

      {/* Hero w/ rating summary */}
      <section style={{ background: 'var(--bp-stone-100)', padding: '64px var(--bp-gutter)', borderBottom: '1px solid var(--bp-line)' }}>
        <div style={{ maxWidth: 'var(--bp-container)', margin: '0 auto', display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: 64, alignItems: 'end' }}>
          <div>
            <Eyebrow index="TESTIMONIALS / 01" label="What customers say about BP Drains" />
            <h1 style={{ fontSize: 'var(--bp-fs-h1)', marginTop: 20 }}>
              312 reviews.<br />
              <span style={{ color: 'var(--bp-red)' }}>4.9 average.</span> Most we earned on the worst day of someone's week.
            </h1>
          </div>

          {/* big rating tile */}
          <div className="bp-card" style={{ padding: 0, overflow: 'hidden' }}>
            <div style={{ padding: '24px 28px', borderBottom: '1px solid var(--bp-line)', display: 'flex', alignItems: 'baseline', justifyContent: 'space-between' }}>
              <div style={{ fontFamily: 'var(--bp-font-display)', fontWeight: 900, fontSize: 64, letterSpacing: '-0.03em', lineHeight: 1 }}>4.9<span style={{ color: 'var(--bp-fg-muted)', fontSize: 32 }}>/5</span></div>
              <div className="bp-stars" style={{ fontSize: 22 }}>★ ★ ★ ★ ★</div>
            </div>
            {[
              { src: 'Google',     n: 218, r: '4.9' },
              { src: 'Trustpilot', n:  62, r: '4.9' },
              { src: 'Facebook',   n:  28, r: '4.8' },
              { src: 'Checkatrade',n:   4, r: '5.0' },
            ].map(b => (
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
      </section>

      {/* Filter strip */}
      <section style={{ background: '#fff', borderBottom: '1px solid var(--bp-line)' }}>
        <div style={{ maxWidth: 'var(--bp-container)', margin: '0 auto', padding: '20px var(--bp-gutter)', display: 'flex', alignItems: 'center', gap: 24 }}>
          <FilterGroup label="Source" items={['All', 'Google', 'Trustpilot', 'Facebook', 'Direct']} active="All" />
          <div style={{ width: 1, height: 24, background: 'var(--bp-line-strong)' }} />
          <FilterGroup label="Service" items={['All', 'Blocked', 'CCTV', 'Repair', 'Septic']} active="All" />
          <div style={{ width: 1, height: 24, background: 'var(--bp-line-strong)' }} />
          <FilterGroup label="Rating" items={['All', '5★', '4★', '3★ or below']} active="All" />
        </div>
      </section>

      {/* Featured long-form */}
      <section style={{ padding: 'var(--bp-section-y) var(--bp-gutter) 48px' }}>
        <div style={{ maxWidth: 'var(--bp-container)', margin: '0 auto' }}>
          <Eyebrow index="02" label="Featured" />
          <h2 style={{ marginTop: 16, marginBottom: 32 }}>The full story</h2>

          <div style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr', gap: 24 }}>
            <div style={{ background: 'var(--bp-ink)', color: '#fff', padding: 48, borderRadius: 2, position: 'relative' }}>
              <span style={{ position: 'absolute', top: 24, right: 32, fontFamily: 'var(--bp-font-display)', fontWeight: 900, fontSize: 96, lineHeight: 0.8, opacity: 0.15 }}>"</span>
              <Eyebrow index="GOOGLE" label="5 stars · 04 Apr 2026" onDark />
              <p style={{ fontSize: 24, lineHeight: 1.45, marginTop: 24, color: '#fff', maxWidth: 620 }}>
                "We'd had three other companies attempt to clear the sewer at our restaurant — all of them quoted a full excavation and weeks of disruption.
                Lewis from BP turned up with a CCTV unit, found a section of pipe that had displaced 8m in, and lined it in a morning. We didn't lose a service.
                I've recommended them to every restaurant manager I know in Canterbury since."
              </p>
              <div style={{ marginTop: 32, paddingTop: 24, borderTop: '1px solid rgba(255,255,255,0.15)', display: 'flex', alignItems: 'center', gap: 16 }}>
                <div style={{ width: 56, height: 56, borderRadius: '50%', background: 'rgba(255,255,255,0.1)', backgroundImage: 'repeating-linear-gradient(45deg, rgba(255,255,255,0.1) 0 1.5px, transparent 1.5px 8px)' }} />
                <div>
                  <div style={{ fontWeight: 600 }}>James Harrison</div>
                  <div className="bp-mono" style={{ color: 'rgba(255,255,255,0.5)', marginTop: 2 }}>Operations · The Goods Shed, Canterbury</div>
                </div>
              </div>
            </div>

            <div className="bp-card" style={{ padding: 0 }}>
              <ImageSlot label="JOB PHOTO — Canterbury restaurant relining · supply" style={{ height: 220, borderRadius: 0 }} dark />
              <div style={{ padding: 24 }}>
                <div className="bp-mono">Job reference</div>
                <div style={{ fontFamily: 'var(--bp-font-mono)', fontSize: 13, fontWeight: 600, marginTop: 4 }}>BP-26-0418-CT1</div>
                <hr style={{ border: 0, borderTop: '1px solid var(--bp-line)', margin: '20px 0' }} />
                <dl style={{ display: 'grid', gridTemplateColumns: 'auto 1fr', columnGap: 16, rowGap: 8, margin: 0, fontSize: 14 }}>
                  <dt className="bp-mono">Service</dt><dd>Sewer relining (CIPP)</dd>
                  <dt className="bp-mono">Pipe</dt><dd>110mm, 8m run</dd>
                  <dt className="bp-mono">Crew</dt><dd>Van 02 · Lewis P. + 1</dd>
                  <dt className="bp-mono">On-site</dt><dd>One morning · 04:30 hrs</dd>
                  <dt className="bp-mono">Final cost</dt><dd>£1,840 inc. VAT</dd>
                </dl>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Card grid */}
      <section style={{ padding: '0 var(--bp-gutter) var(--bp-section-y)' }}>
        <div style={{ maxWidth: 'var(--bp-container)', margin: '0 auto' }}>
          <Eyebrow index="03" label="More reviews" />
          <h3 style={{ marginTop: 16, marginBottom: 32 }}>Recent</h3>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16 }}>
            {[
              { src: 'Google', date: '01 May', stars: 5, name: 'Sarah Mitchell', area: 'Whitstable', svc: 'BLOCKED', text: 'Called at 11pm with a kitchen drain backing up. Lewis was here by midnight, cleared it in 40 minutes, exactly what he quoted.' },
              { src: 'Trustpilot', date: '28 Apr', stars: 5, name: 'Priya N.', area: 'Margate', svc: 'EMERGENCY', text: 'They picked up the phone at 7am on a Sunday. Aaron was here by 9. Polite, tidy, explained everything in plain English.' },
              { src: 'Facebook', date: '22 Apr', stars: 5, name: 'Robert C.', area: 'Folkestone', svc: 'REPAIR', text: 'Quoted half what a national company tried to charge me. Same job, done properly. Local lads who clearly know what they\'re doing.' },
              { src: 'Google', date: '15 Apr', stars: 5, name: 'Helen B.', area: 'Cliftonville', svc: 'CCTV', text: 'Aaron showed up with the camera, found the problem in 10 minutes, lined it the following morning. Pleasant, tidy.' },
              { src: 'Direct', date: '12 Apr', stars: 4, name: 'Mrs Foley', area: 'Margate Old Town', svc: 'BLOCKED', text: 'Quick, polite, explained in language I could understand. I\'ll have them back for the annual service.', photo: true },
              { src: 'Google', date: '09 Apr', stars: 5, name: 'Daniel R.', area: 'Ashford', svc: 'SEPTIC', text: 'New septic tank installed in two days, paperwork done for us, building control happy. Genuinely a brilliant local outfit.' },
              { src: 'Trustpilot', date: '02 Apr', stars: 5, name: 'James H.', area: 'Canterbury', svc: 'RELINING', text: 'Diagnosed the issue within 20 minutes, told us exactly what the repair would cost, done by the next afternoon. Old-school proper service.' },
              { src: 'Google', date: '28 Mar', stars: 5, name: 'Tom K.', area: 'Westgate-on-Sea', svc: 'BLOCKED', text: 'Took on a job another company refused. Made good of the path afterwards too — you wouldn\'t know they\'d been.' },
              { src: 'Facebook', date: '21 Mar', stars: 5, name: 'Lara M.', area: 'Herne Bay', svc: 'JETTING', text: 'Used them for our café — same morning service, fixed price, no fuss. Wouldn\'t hesitate to recommend.' },
            ].map(r => (
              <ReviewCard key={r.name + r.date} {...r} />
            ))}
          </div>

          <div style={{ marginTop: 48, display: 'flex', justifyContent: 'center' }}>
            <button className="bp-btn bp-btn--ghost bp-btn--lg">Load more reviews <Icon name="arrow" size={14} /></button>
          </div>
        </div>
      </section>

      <CTABand />
      <SiteFooter />
      <FloatingCTAs />
    </div>
  );
}

function ReviewCard({ src, date, stars, name, area, svc, text, photo }) {
  return (
    <div className="bp-card" style={{ padding: 24, display: 'flex', flexDirection: 'column', gap: 14 }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <span style={{
          fontFamily: 'var(--bp-font-mono)', fontSize: 10, fontWeight: 600,
          letterSpacing: '0.12em', padding: '4px 8px', borderRadius: 2,
          background: 'var(--bp-stone-100)', color: 'var(--bp-ink)',
        }}>{src}</span>
        <span className="bp-mono">{date}</span>
      </div>
      <div className="bp-stars">{'★ '.repeat(stars).trim()}</div>
      {photo && <ImageSlot label="Customer photo · job after" style={{ height: 140 }} />}
      <p style={{ fontSize: 15, lineHeight: 1.5, flex: 1 }}>{text}</p>
      <div style={{ paddingTop: 14, borderTop: '1px solid var(--bp-line)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          <div style={{ fontWeight: 600, fontSize: 14 }}>{name}</div>
          <div className="bp-mono">{area}</div>
        </div>
        <span style={{
          fontFamily: 'var(--bp-font-mono)', fontSize: 10, fontWeight: 600,
          letterSpacing: '0.1em', padding: '4px 7px', borderRadius: 2,
          border: '1px solid var(--bp-line-strong)',
        }}>{svc}</span>
      </div>
    </div>
  );
}

Object.assign(window, { GalleryDesktop, TestimonialsDesktop, ReviewCard, FilterGroup, BadgeTag });
