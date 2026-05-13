// templates-mobile.jsx — Mobile homepage, contact, area + Foundations artboards.

// ════════════════════════════════════════════════════════════════════════
// MOBILE HOMEPAGE  (390 width)
// ════════════════════════════════════════════════════════════════════════
function HomepageMobile() {
  return (
    <div className="bp-root" data-screen-label="Homepage / Mobile" style={{ width: 390, position: 'relative', minHeight: '100%' }}>
      {/* Mobile utility bar */}
      <div style={{
        background: 'var(--bp-ink)', color: '#fff',
        padding: '8px 16px', display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        fontSize: 12,
      }}>
        <span style={{
          display: 'inline-flex', alignItems: 'center', gap: 6,
          background: 'var(--bp-red)', padding: '3px 8px', borderRadius: 2,
          fontFamily: 'var(--bp-font-mono)', fontSize: 10, letterSpacing: '0.1em',
          textTransform: 'uppercase', fontWeight: 600,
        }}>
          <span style={{ width: 5, height: 5, borderRadius: '50%', background: '#fff' }} />
          24/7
        </span>
        <strong style={{ fontFamily: 'var(--bp-font-mono)', fontSize: 12, letterSpacing: '0.04em' }}>{BP_PHONE}</strong>
      </div>

      {/* Mobile header */}
      <div style={{
        background: '#fff', padding: '14px 16px',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        borderBottom: '1px solid var(--bp-line)',
      }}>
        <Logo size="sm" />
        <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
          <a href={BP_PHONE_TEL} className="bp-btn bp-btn--cta bp-btn--sm" style={{ height: 38, padding: '0 12px' }}>
            <Icon name="phone" size={14} stroke="#fff" /> Call
          </a>
          <button style={{
            width: 38, height: 38, border: '1px solid var(--bp-line-strong)',
            borderRadius: 2, background: '#fff',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}><Icon name="menu" size={18} /></button>
        </div>
      </div>

      {/* Hero */}
      <section style={{ background: 'var(--bp-stone-100)', padding: '32px 16px 24px' }}>
        <Eyebrow index="01 / 09" label="Kent · Since 2009" />
        <h1 style={{ fontSize: 46, marginTop: 16, letterSpacing: '-0.03em', lineHeight: 1 }}>
          Blocked drain?<br/>
          <span style={{ color: 'var(--bp-stone-500)' }}>We'll be there</span><br/>
          in 60&nbsp;min.
        </h1>
        <p style={{ marginTop: 16, fontSize: 16, lineHeight: 1.5, color: 'var(--bp-stone-600)' }}>
          Six vans, real engineers, working across Kent. Same-day, fixed price, no nonsense.
        </p>
        <a className="bp-btn bp-btn--cta bp-btn--lg" href={BP_PHONE_TEL} style={{ width: '100%', justifyContent: 'center', marginTop: 24 }}>
          <Icon name="phone" size={18} stroke="#fff" />
          Call {BP_PHONE}
        </a>
        <a className="bp-btn bp-btn--ghost" href="#" style={{ width: '100%', justifyContent: 'center', marginTop: 8 }}>
          Get a free quote <Icon name="arrow" size={14} />
        </a>

        <ImageSlot
          label="HERO PHOTO — team + vans · supply"
          style={{ height: 240, marginTop: 28, marginLeft: -16, marginRight: -16, borderRadius: 0 }}
          dark accent
        />
      </section>

      {/* Stats strip */}
      <section style={{ padding: '20px 16px', background: 'var(--bp-ink)', color: '#fff' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 16 }}>
          {[
            { v: '47 min', l: 'Avg. on-site' },
            { v: '4.9★', l: '218 reviews' },
            { v: '6 vans', l: 'On the road' },
            { v: '24/7', l: 'Emergency line' },
          ].map(s => (
            <div key={s.l} style={{ paddingLeft: 12, borderLeft: '2px solid var(--bp-red)' }}>
              <div style={{ fontFamily: 'var(--bp-font-display)', fontWeight: 800, fontSize: 22, lineHeight: 1 }}>{s.v}</div>
              <div style={{ fontFamily: 'var(--bp-font-mono)', fontSize: 10, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.6)', marginTop: 4 }}>{s.l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Services list */}
      <section style={{ padding: '40px 16px', background: 'var(--bp-stone-100)' }}>
        <Eyebrow index="02" label="What we do" />
        <h2 style={{ fontSize: 32, marginTop: 12, marginBottom: 20 }}>Every drainage job.</h2>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 1, background: 'var(--bp-line)', border: '1px solid var(--bp-line)' }}>
          {[
            { icon: 'blocked', name: 'Blocked drains' },
            { icon: 'cctv',    name: 'CCTV surveys' },
            { icon: 'repair',  name: 'Repairs' },
            { icon: 'jetting', name: 'Jetting' },
            { icon: 'tanker',  name: 'Tanker' },
            { icon: 'sewer',   name: 'Sewer relining' },
          ].map((s, i) => (
            <div key={s.name} style={{ background: '#fff', padding: 16 }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <Icon name={s.icon} size={22} />
                <span className="bp-mono" style={{ color: 'var(--bp-fg-faint)' }}>{String(i + 1).padStart(2, '0')}</span>
              </div>
              <div style={{ marginTop: 14, fontWeight: 600, fontSize: 15 }}>{s.name}</div>
              <a href="#" style={{ marginTop: 4, fontSize: 12, fontWeight: 600, color: 'var(--bp-red)' }}>Learn more →</a>
            </div>
          ))}
        </div>
        <a href="#" className="bp-btn bp-btn--ghost" style={{ marginTop: 20, width: '100%', justifyContent: 'center' }}>All services</a>
      </section>

      {/* Single big testimonial */}
      <section style={{ padding: '40px 16px', background: '#fff' }}>
        <Eyebrow index="03" label="Customers say" />
        <h2 style={{ fontSize: 32, marginTop: 12, marginBottom: 20 }}>4.9 from 312 reviews.</h2>
        <div className="bp-card" style={{ padding: 20 }}>
          <div className="bp-stars">★ ★ ★ ★ ★</div>
          <p style={{ marginTop: 12, fontSize: 16, lineHeight: 1.5 }}>"Called at 11pm. Lewis was here by midnight, cleared it in 40 minutes. Exactly what he quoted. Lifesavers."</p>
          <div style={{ marginTop: 14, paddingTop: 14, borderTop: '1px solid var(--bp-line)', display: 'flex', justifyContent: 'space-between' }}>
            <div>
              <div style={{ fontWeight: 600 }}>Sarah M.</div>
              <div className="bp-mono">Whitstable · Google</div>
            </div>
            <span style={{ fontFamily: 'var(--bp-font-mono)', fontSize: 11, color: 'var(--bp-fg-faint)' }}>12 Apr 2026</span>
          </div>
        </div>
      </section>

      {/* Coverage */}
      <section style={{ padding: '40px 16px', background: 'var(--bp-ink)', color: '#fff' }}>
        <Eyebrow index="04" label="Where we work" onDark />
        <h2 style={{ fontSize: 32, color: '#fff', marginTop: 12, marginBottom: 20 }}>Kent through and through.</h2>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
          {BP_AREAS.map(a => (
            <a key={a} href="#" style={{
              padding: '6px 12px', border: '1px solid rgba(255,255,255,0.25)',
              borderRadius: 999, fontSize: 13, color: '#fff',
            }}>{a}</a>
          ))}
        </div>
      </section>

      {/* CTA band */}
      <section style={{ background: 'var(--bp-red)', color: '#fff', padding: '32px 16px' }}>
        <div className="bp-mono" style={{ color: 'rgba(255,255,255,0.85)' }}>24/7 · 365</div>
        <div style={{ fontFamily: 'var(--bp-font-display)', fontWeight: 900, fontSize: 32, letterSpacing: '-0.025em', lineHeight: 1.05, marginTop: 6 }}>
          Drain emergency?<br />Call right now.
        </div>
        <a href={BP_PHONE_TEL} style={{
          marginTop: 20, padding: '16px 20px',
          background: '#fff', color: 'var(--bp-ink)',
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          fontFamily: 'var(--bp-font-display)', fontWeight: 800, fontSize: 22,
          borderRadius: 2,
        }}>
          <span>{BP_PHONE}</span>
          <Icon name="phone" size={22} />
        </a>
      </section>

      {/* Mini footer */}
      <footer style={{ background: 'var(--bp-stone-700)', color: '#fff', padding: '32px 16px 80px' }}>
        <Logo onDark size="sm" />
        <p style={{ marginTop: 16, color: 'rgba(255,255,255,0.6)', fontSize: 13 }}>
          Local, family-run drainage specialists. Kent & the South East. Since 2009.
        </p>
        <div style={{ marginTop: 16, fontSize: 13, color: 'rgba(255,255,255,0.8)' }}>
          <div><strong style={{ fontFamily: 'var(--bp-font-mono)' }}>{BP_PHONE}</strong></div>
          <div>hello@bpdrainssoutheast.co.uk</div>
        </div>
      </footer>

      <FloatingCTAs mobile />
    </div>
  );
}

// ════════════════════════════════════════════════════════════════════════
// MOBILE CONTACT
// ════════════════════════════════════════════════════════════════════════
function ContactMobile() {
  return (
    <div className="bp-root" data-screen-label="Contact / Mobile" style={{ width: 390, position: 'relative' }}>
      <div style={{ background: 'var(--bp-ink)', color: '#fff', padding: '8px 16px', display: 'flex', justifyContent: 'space-between', fontSize: 12 }}>
        <span style={{ background: 'var(--bp-red)', padding: '3px 8px', borderRadius: 2, fontFamily: 'var(--bp-font-mono)', fontSize: 10, letterSpacing: '0.1em', fontWeight: 600 }}>24/7</span>
        <strong style={{ fontFamily: 'var(--bp-font-mono)' }}>{BP_PHONE}</strong>
      </div>
      <div style={{ background: '#fff', padding: '14px 16px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '1px solid var(--bp-line)' }}>
        <Logo size="sm" />
        <button style={{ width: 38, height: 38, border: '1px solid var(--bp-line-strong)', borderRadius: 2, background: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><Icon name="menu" size={18} /></button>
      </div>

      <section style={{ background: 'var(--bp-red)', color: '#fff', padding: '28px 16px' }}>
        <div className="bp-mono" style={{ color: 'rgba(255,255,255,0.85)' }}>Tap to call · answered in 30s</div>
        <a href={BP_PHONE_TEL} style={{
          marginTop: 8, display: 'flex', alignItems: 'baseline', justifyContent: 'space-between',
          fontFamily: 'var(--bp-font-display)', fontWeight: 900, fontSize: 44,
          letterSpacing: '-0.03em', color: '#fff',
        }}>
          {BP_PHONE} <Icon name="phone" size={32} stroke="#fff" />
        </a>
      </section>

      <section style={{ background: 'var(--bp-stone-100)', padding: '32px 16px' }}>
        <h1 style={{ fontSize: 32 }}>Or send us the details.</h1>
        <p style={{ marginTop: 12, color: 'var(--bp-stone-600)', fontSize: 15 }}>We come back within the hour, working day.</p>

        <form style={{ marginTop: 24, display: 'flex', flexDirection: 'column', gap: 14 }}>
          <Field label="Name" placeholder="Sarah Mitchell" />
          <Field label="Phone" placeholder="07__ ___ ____" />
          <Field label="Postcode" placeholder="CT5 1AB" />
          <Field label="What's the issue?" textarea placeholder="Blocked? Smell? Survey? Describe it as you would on the phone." />

          <div>
            <span className="bp-label">Urgency</span>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 6 }}>
              {[{l:'NOW', red:true},{l:'TODAY'},{l:'PLAN'}].map(u => (
                <label key={u.l} style={{
                  textAlign: 'center', padding: '12px 6px',
                  border: u.red ? '1.5px solid var(--bp-red)' : '1px solid var(--bp-line-strong)',
                  background: u.red ? 'var(--bp-red-tint)' : '#fff',
                  color: u.red ? 'var(--bp-red)' : 'var(--bp-ink)',
                  fontFamily: 'var(--bp-font-mono)', fontSize: 11, fontWeight: 700, letterSpacing: '0.1em',
                  borderRadius: 2,
                }}>{u.l}</label>
              ))}
            </div>
          </div>

          <button className="bp-btn bp-btn--cta bp-btn--lg" style={{ width: '100%', justifyContent: 'center', marginTop: 8 }}>
            Send to BP Drains <Icon name="arrow" size={16} stroke="#fff" />
          </button>
        </form>
      </section>

      <section style={{ padding: '32px 16px', background: '#fff' }}>
        <ContactBlock title="Office" icon="pin" lines={[
          <strong>BP Drains South East Ltd</strong>,
          'Unit 4, Canterbury Industrial Park',
          'Canterbury, Kent CT1 0XX',
        ]} />
        <div style={{ height: 16 }} />
        <ContactBlock title="Hours" icon="clock" lines={[
          <span><strong>Mon–Fri</strong> · 07:00–18:00</span>,
          <span><strong>Sat–Sun</strong> · 08:00–17:00</span>,
          <span style={{ color: 'var(--bp-red)', fontWeight: 600 }}>24/7 emergency, always</span>,
        ]} />
      </section>

      <FloatingCTAs mobile />
    </div>
  );
}

// ════════════════════════════════════════════════════════════════════════
// MOBILE AREA PAGE (Margate)
// ════════════════════════════════════════════════════════════════════════
function AreaMobile() {
  return (
    <div className="bp-root" data-screen-label="Area / Mobile · Margate" style={{ width: 390, position: 'relative' }}>
      <div style={{ background: 'var(--bp-ink)', color: '#fff', padding: '8px 16px', display: 'flex', justifyContent: 'space-between', fontSize: 12 }}>
        <span style={{ background: 'var(--bp-red)', padding: '3px 8px', borderRadius: 2, fontFamily: 'var(--bp-font-mono)', fontSize: 10, letterSpacing: '0.1em', fontWeight: 600 }}>24/7</span>
        <strong style={{ fontFamily: 'var(--bp-font-mono)' }}>{BP_PHONE}</strong>
      </div>
      <div style={{ background: '#fff', padding: '14px 16px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '1px solid var(--bp-line)' }}>
        <Logo size="sm" />
        <button style={{ width: 38, height: 38, border: '1px solid var(--bp-line-strong)', borderRadius: 2, background: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><Icon name="menu" size={18} /></button>
      </div>

      <section style={{ background: 'var(--bp-stone-100)', padding: '28px 16px' }}>
        <div className="bp-mono">Areas / <span style={{ color: 'var(--bp-ink)' }}>Margate</span></div>
        <h1 style={{ fontSize: 40, marginTop: 12, letterSpacing: '-0.03em', lineHeight: 1 }}>
          Drainage<br />in <span style={{ background: 'var(--bp-ink)', color: '#fff', padding: '0 8px' }}>Margate</span>
        </h1>
        <p style={{ marginTop: 16, color: 'var(--bp-stone-600)', fontSize: 15 }}>
          Aaron's van — Van 06 — lives in Margate. On-site within 40 minutes, CT9 postcodes covered, day or night.
        </p>
        <a className="bp-btn bp-btn--cta bp-btn--lg" href={BP_PHONE_TEL} style={{ width: '100%', justifyContent: 'center', marginTop: 20 }}>
          <Icon name="phone" size={16} stroke="#fff" /> Call Margate · {BP_PHONE}
        </a>
        <ImageSlot label="MARGATE — Aaron's van + harbour · supply" style={{ height: 180, marginTop: 20, marginLeft: -16, marginRight: -16, borderRadius: 0 }} dark />
      </section>

      <section style={{ padding: '28px 16px', background: '#fff' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 1, background: 'var(--bp-line)', border: '1px solid var(--bp-line)' }}>
          {[
            { v: '38 min', l: 'Avg on-site' },
            { v: '420+', l: 'Margate jobs / yr' },
            { v: 'CT9', l: 'Postcodes covered' },
            { v: 'Van 06', l: 'Your engineer' },
          ].map(s => (
            <div key={s.l} style={{ background: '#fff', padding: 16 }}>
              <div style={{ fontFamily: 'var(--bp-font-display)', fontWeight: 800, fontSize: 22, letterSpacing: '-0.02em' }}>{s.v}</div>
              <div className="bp-mono" style={{ marginTop: 4 }}>{s.l}</div>
            </div>
          ))}
        </div>
      </section>

      <section style={{ background: 'var(--bp-stone-100)', padding: '32px 16px' }}>
        <Eyebrow index="01" label="Services in CT9" />
        <h2 style={{ fontSize: 28, marginTop: 12, marginBottom: 16 }}>Everything we do, available here.</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
          {[
            { icon: 'blocked', name: 'Blocked drains', stat: '32 jobs / mo' },
            { icon: 'cctv', name: 'CCTV surveys', stat: '14 / mo' },
            { icon: 'repair', name: 'Pipe repairs', stat: '11 / mo' },
            { icon: 'jetting', name: 'Jetting', stat: '9 / mo' },
          ].map(s => (
            <div key={s.name} className="bp-card" style={{ padding: 14, display: 'flex', alignItems: 'center', gap: 14 }}>
              <Icon name={s.icon} size={22} />
              <div style={{ flex: 1 }}>
                <div style={{ fontWeight: 600 }}>{s.name}</div>
                <div className="bp-mono">{s.stat} in Margate</div>
              </div>
              <Icon name="arrow" size={16} />
            </div>
          ))}
        </div>
      </section>

      <FloatingCTAs mobile />
    </div>
  );
}

// ════════════════════════════════════════════════════════════════════════
// FOUNDATIONS — for Claude Code handoff
// ════════════════════════════════════════════════════════════════════════
function FoundationsTokens() {
  const swatches = [
    ['--bp-stone-50',  '#F6F5F2', 'Page surface tint'],
    ['--bp-stone-100', '#ECEAE7', 'Default page bg'],
    ['--bp-stone-200', '#D9D6D1', 'Cards / dividers'],
    ['--bp-stone-300', '#B8B3AB', 'Strong divider'],
    ['--bp-stone-400', '#8E8780', 'Faint text'],
    ['--bp-stone-500', '#6E6A65', 'Body muted'],
    ['--bp-stone-600', '#4D4944', 'Body strong'],
    ['--bp-stone-700', '#2F2C28', 'Surface dark'],
    ['--bp-ink',       '#0E0D0B', 'Primary text + structure'],
  ];
  return (
    <div className="bp-root" data-screen-label="Foundations / Tokens" style={{ padding: 48, width: 1280 }}>
      <Eyebrow index="00 / TOKENS" label="BP Drains design system" />
      <h1 style={{ fontSize: 56, marginTop: 16 }}>Foundations.</h1>
      <p style={{ marginTop: 12, fontSize: 17, color: 'var(--bp-stone-600)', maxWidth: 720 }}>
        Industrial-premium. Warm stone neutrals. Heavy black structure. Red reserved strictly for CTAs — never decorative.
        All tokens shipped in <code style={{ fontFamily: 'var(--bp-font-mono)', fontSize: 14, background: 'var(--bp-stone-100)', padding: '2px 6px', borderRadius: 2 }}>tokens.css</code>.
      </p>

      {/* PALETTE */}
      <h2 style={{ marginTop: 56, marginBottom: 24 }}>Palette</h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: 12 }}>
        {swatches.map(([v, hex, use]) => (
          <div key={v} style={{ border: '1px solid var(--bp-line)', borderRadius: 2, overflow: 'hidden' }}>
            <div style={{ background: hex, height: 100, borderBottom: '1px solid var(--bp-line)' }} />
            <div style={{ padding: 14 }}>
              <div style={{ fontFamily: 'var(--bp-font-mono)', fontSize: 12, fontWeight: 600 }}>{hex}</div>
              <div className="bp-mono" style={{ marginTop: 4 }}>{v}</div>
              <div style={{ marginTop: 8, fontSize: 12, color: 'var(--bp-stone-600)' }}>{use}</div>
            </div>
          </div>
        ))}
        {/* red */}
        <div style={{ border: '1px solid var(--bp-line)', borderRadius: 2, overflow: 'hidden' }}>
          <div style={{ background: '#C8102E', height: 100 }} />
          <div style={{ padding: 14 }}>
            <div style={{ fontFamily: 'var(--bp-font-mono)', fontSize: 12, fontWeight: 600 }}>#C8102E</div>
            <div className="bp-mono" style={{ marginTop: 4 }}>--bp-red</div>
            <div style={{ marginTop: 8, fontSize: 12, color: 'var(--bp-red)', fontWeight: 600 }}>★ CTA ONLY — never decorative</div>
          </div>
        </div>
      </div>

      {/* TYPE */}
      <h2 style={{ marginTop: 72, marginBottom: 24 }}>Typography</h2>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 32 }}>
        <div className="bp-card" style={{ padding: 32 }}>
          <div className="bp-mono">Display · Archivo · 800/900</div>
          <div style={{ fontFamily: 'var(--bp-font-display)', fontWeight: 900, fontSize: 80, lineHeight: 0.9, letterSpacing: '-0.03em', marginTop: 12 }}>Aa Gg 1234</div>
          <div style={{ marginTop: 16, display: 'flex', flexDirection: 'column', gap: 6 }}>
            {[['Hero', 88], ['H1', 56], ['H2', 40], ['H3', 28], ['H4', 20]].map(([l, s]) => (
              <div key={l} style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', borderBottom: '1px dotted var(--bp-line)', padding: '6px 0' }}>
                <span style={{ fontFamily: 'var(--bp-font-display)', fontWeight: 800, fontSize: s, lineHeight: 1, letterSpacing: '-0.02em' }}>{l}</span>
                <span className="bp-mono">{s}px / -0.02em</span>
              </div>
            ))}
          </div>
        </div>
        <div className="bp-card" style={{ padding: 32 }}>
          <div className="bp-mono">Body · IBM Plex Sans · 400/500/600</div>
          <p style={{ fontSize: 17, lineHeight: 1.5, marginTop: 12 }}>The quick brown fox jumps over the lazy dog. We turn up when we say we will, fix it properly, and tell you exactly what it cost.</p>
          <hr style={{ border: 0, borderTop: '1px solid var(--bp-line)', margin: '20px 0' }} />
          <div className="bp-mono">Mono · IBM Plex Mono · captions, labels, registration marks</div>
          <div style={{ fontFamily: 'var(--bp-font-mono)', fontSize: 13, letterSpacing: '0.06em', marginTop: 12 }}>BP·SE / HOMEPAGE / 01 — 24/7 EMERGENCY · KENT</div>
        </div>
      </div>

      {/* BUTTONS */}
      <h2 style={{ marginTop: 72, marginBottom: 24 }}>Buttons</h2>
      <div className="bp-card" style={{ padding: 32, display: 'flex', flexDirection: 'column', gap: 20 }}>
        <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
          <button className="bp-btn bp-btn--cta">
            <Icon name="phone" size={14} stroke="#fff" /> Call now
          </button>
          <button className="bp-btn bp-btn--cta bp-btn--lg">
            <Icon name="phone" size={18} stroke="#fff" /> Call {BP_PHONE}
          </button>
          <button className="bp-btn bp-btn--cta bp-btn--sm">
            <Icon name="phone" size={12} stroke="#fff" /> Call
          </button>
          <span className="bp-mono">.bp-btn.bp-btn--cta · RED — CTA ONLY</span>
        </div>
        <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
          <button className="bp-btn bp-btn--ghost">Get a quote <Icon name="arrow" size={14} /></button>
          <button className="bp-btn bp-btn--ghost bp-btn--lg">Browse services</button>
          <button className="bp-btn bp-btn--dark">View gallery</button>
          <span className="bp-mono">Secondary actions — black structure</span>
        </div>
      </div>

      {/* ICON SET */}
      <h2 style={{ marginTop: 72, marginBottom: 24 }}>Service icon set</h2>
      <div className="bp-card" style={{ padding: 24 }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(8, 1fr)', gap: 1, background: 'var(--bp-line)' }}>
          {[
            'blocked', 'cctv', 'repair', 'jetting',
            'tanker', 'sewer', 'septic', 'soakaway',
            'phone', 'message', 'survey', 'clock',
            'shield', 'pin', 'check', 'arrow',
          ].map(n => (
            <div key={n} style={{ background: '#fff', padding: 20, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 10 }}>
              <Icon name={n} size={26} />
              <span className="bp-mono">{n}</span>
            </div>
          ))}
        </div>
      </div>

      {/* SPACING */}
      <h2 style={{ marginTop: 72, marginBottom: 24 }}>Spacing scale</h2>
      <div className="bp-card" style={{ padding: 32 }}>
        <div style={{ display: 'flex', alignItems: 'end', gap: 16 }}>
          {[
            ['s-1', 4], ['s-2', 8], ['s-3', 12], ['s-4', 16], ['s-5', 24],
            ['s-6', 32], ['s-7', 48], ['s-8', 64], ['s-9', 96], ['s-10', 128],
          ].map(([n, v]) => (
            <div key={n} style={{ textAlign: 'center' }}>
              <div style={{ width: v, height: v, background: 'var(--bp-ink)' }} />
              <div className="bp-mono" style={{ marginTop: 8 }}>{n}</div>
              <div className="bp-mono" style={{ color: 'var(--bp-fg-faint)' }}>{v}px</div>
            </div>
          ))}
        </div>
      </div>

      {/* HANDOFF NOTES */}
      <h2 style={{ marginTop: 72, marginBottom: 24 }}>Hand-off notes for Claude Code</h2>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
        {[
          { t: '01 · The Red Rule', d: 'Red (#C8102E) is reserved for actionable elements only: emergency call buttons, primary form submits, message-us / call-now floating buttons. Never use red for decoration, dividers, hover states, badges or icons. The whole identity rests on red always meaning "take action here".' },
          { t: '02 · Files shipped', d: 'tokens.css holds all CSS custom properties for color, type, spacing, radii and density variants. components.jsx contains shared structural elements (header, footer, utility bar, logo, icon set, floating CTAs, image placeholders). One file per template (homepage / contact / area / service / gallery / testimonials).' },
          { t: '03 · Imagery', d: 'Every <ImageSlot /> placeholder must be replaced with real photography of the BP Drains team, fleet and jobs — no stock. The mono caption inside each slot describes the photo brief.' },
          { t: '04 · SEO', d: 'Add LocalBusiness, Service and Review schema at template level. Area pages inherit the LocalBusiness with area-of-service. FAQ schema lives on the service template. Sitemap is per-template-instance.' },
          { t: '05 · Accessibility', d: 'Red on grey passes AA at the sizes used (CTA button text is ≥16px bold). Floating Call Now button needs aria-label "Call BP Drains South East — 0800 612 8038". All form fields have label-for relationships.' },
          { t: '06 · Tweaks', d: 'data-tone, data-density and data-type attributes on .bp-root switch palette, spacing and type pairing without touching templates. Use these as the basis for a CMS theme toggle if needed.' },
        ].map(n => (
          <div key={n.t} style={{ padding: 24, borderLeft: '2px solid var(--bp-ink)', background: 'var(--bp-stone-50)' }}>
            <div style={{ fontWeight: 700, marginBottom: 8 }}>{n.t}</div>
            <p style={{ fontSize: 14, color: 'var(--bp-stone-600)', lineHeight: 1.55 }}>{n.d}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

Object.assign(window, { HomepageMobile, ContactMobile, AreaMobile, FoundationsTokens });
