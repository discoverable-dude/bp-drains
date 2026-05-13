// components.jsx — BP Drains shared building blocks
// Logo wordmark, utility bar (24/7 strip), main nav header, footer,
// floating CTAs, icon set (restyled grey/black), image placeholders, badges.

const BP_PHONE = '0800 612 8038';
const BP_PHONE_TEL = 'tel:08006128038';
const BP_AREAS = [
  'Margate', 'Faversham', 'Broadstairs', 'Whitstable', 'Canterbury',
  'Herne Bay', 'Dover', 'Thanet', 'Ashford', 'Folkestone', 'Ramsgate',
];

// ─── Striped image placeholder ─────────────────────────────────────────────
function ImageSlot({ label, ratio, height, dark, style, accent, children }) {
  const isDark = !!dark;
  const fg = isDark ? 'rgba(255,255,255,0.10)' : 'rgba(14,13,11,0.08)';
  const bg = isDark ? '#1A1816' : '#D9D6D1';
  const labelBg = isDark ? '#0E0D0B' : '#F6F5F2';
  const labelFg = isDark ? 'rgba(255,255,255,0.65)' : 'rgba(14,13,11,0.55)';
  const styleResolved = {
    position: 'relative',
    width: '100%',
    aspectRatio: ratio,
    height: height,
    background: bg,
    backgroundImage: `repeating-linear-gradient(45deg, ${fg} 0 1.5px, transparent 1.5px 14px)`,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
    borderRadius: 'var(--bp-r-2)',
    ...style,
  };
  return (
    <div style={styleResolved}>
      {accent && (
        <div style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(180deg, rgba(14,13,11,0) 60%, rgba(14,13,11,0.35) 100%)',
        }} />
      )}
      {label && (
        <span style={{
          position: 'relative',
          background: labelBg,
          color: labelFg,
          fontFamily: 'var(--bp-font-mono)',
          fontSize: 11,
          letterSpacing: '0.1em',
          textTransform: 'uppercase',
          padding: '6px 10px',
          borderRadius: 2,
          textAlign: 'center',
          lineHeight: 1.3,
          maxWidth: '80%',
        }}>{label}</span>
      )}
      {children}
    </div>
  );
}

// ─── Logo (wordmark with chevron mark) ─────────────────────────────────────
function Logo({ onDark, size = 'md' }) {
  const fg = onDark ? '#FFFFFF' : 'var(--bp-ink)';
  const heightMap = { sm: 22, md: 28, lg: 40 };
  const h = heightMap[size];
  return (
    <a href="#" style={{ display: 'inline-flex', alignItems: 'center', gap: 10 }}>
      {/* mark */}
      <svg width={h} height={h} viewBox="0 0 40 40" style={{ flex: '0 0 auto' }}>
        <rect width="40" height="40" rx="3" fill={fg} />
        <path d="M11 28 L11 12 L20 12 Q26 12 26 17 Q26 20 23 21 Q27 22 27 25 Q27 28 21 28 Z M15.5 19 L20 19 Q22 19 22 17.5 Q22 16 20 16 L15.5 16 Z M15.5 24.5 L20.5 24.5 Q23 24.5 23 23 Q23 21.5 20.5 21.5 L15.5 21.5 Z" fill="#C8102E" />
      </svg>
      <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 1 }}>
        <span style={{
          fontFamily: 'var(--bp-font-display)',
          fontWeight: 800,
          fontSize: h * 0.62,
          letterSpacing: '-0.03em',
          color: fg,
        }}>BP DRAINS</span>
        <span style={{
          fontFamily: 'var(--bp-font-mono)',
          fontSize: h * 0.30,
          letterSpacing: '0.18em',
          color: onDark ? 'rgba(255,255,255,0.55)' : 'var(--bp-fg-muted)',
          marginTop: 3,
        }}>SOUTH&nbsp;EAST · EST.&nbsp;2009</span>
      </div>
    </a>
  );
}

// ─── 24/7 Emergency utility bar (top of every page) ────────────────────────
function UtilityBar() {
  return (
    <div style={{
      background: 'var(--bp-ink)', color: 'var(--bp-white)',
      borderBottom: '1px solid rgba(255,255,255,0.08)',
    }}>
      <div style={{
        maxWidth: 'var(--bp-container)', margin: '0 auto',
        padding: '10px var(--bp-gutter)',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        fontSize: 13, fontFamily: 'var(--bp-font-body)',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 18, fontWeight: 500 }}>
          <span style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            background: 'var(--bp-red)', color: '#fff',
            padding: '4px 10px', borderRadius: 2,
            fontFamily: 'var(--bp-font-mono)', fontSize: 11, letterSpacing: '0.12em',
            textTransform: 'uppercase', fontWeight: 600,
          }}>
            <span style={{
              width: 6, height: 6, borderRadius: '50%', background: '#fff',
              boxShadow: '0 0 0 2px rgba(255,255,255,0.25)',
              animation: 'bpPulse 1.8s ease-in-out infinite',
            }} />
            24/7 Emergency
          </span>
          <a href={BP_PHONE_TEL} style={{
            color: '#fff', display: 'inline-flex', alignItems: 'center', gap: 6,
          }}>
            <Icon name="phone" size={14} stroke="#fff" />
            <strong style={{ fontFamily: 'var(--bp-font-mono)', letterSpacing: '0.04em' }}>{BP_PHONE}</strong>
            <span style={{ color: 'rgba(255,255,255,0.55)' }}>· call now</span>
          </a>
        </div>
        <div style={{ display: 'flex', gap: 22, color: 'rgba(255,255,255,0.65)', fontSize: 12 }}>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }}>
            <span style={{ width: 5, height: 5, borderRadius: '50%', background: '#3DBA6E' }} />
            6 vans on the road today
          </span>
          <span>Avg. on-site: 47 min · Kent</span>
        </div>
      </div>
      <style>{`@keyframes bpPulse{0%,100%{opacity:1}50%{opacity:.35}}`}</style>
    </div>
  );
}

// ─── Main site header / nav ────────────────────────────────────────────────
function SiteHeader({ active }) {
  const items = ['Services', 'Areas', 'Gallery', 'Testimonials', 'About', 'Contact'];
  return (
    <header style={{
      background: 'var(--bp-white)',
      borderBottom: '1px solid var(--bp-line)',
      position: 'relative',
    }}>
      <div style={{
        maxWidth: 'var(--bp-container)', margin: '0 auto',
        padding: '18px var(--bp-gutter)',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      }}>
        <Logo />
        <nav style={{ display: 'flex', alignItems: 'center', gap: 28 }}>
          {items.map(item => (
            <a key={item} href="#" style={{
              fontSize: 14, fontWeight: 500, color: 'var(--bp-ink)',
              padding: '8px 0',
              borderBottom: active === item ? '2px solid var(--bp-ink)' : '2px solid transparent',
            }}>{item}</a>
          ))}
        </nav>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <a href={BP_PHONE_TEL} style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            fontFamily: 'var(--bp-font-mono)', fontSize: 13, fontWeight: 600,
            letterSpacing: '0.02em',
          }}>
            <Icon name="phone" size={14} />
            {BP_PHONE}
          </a>
          <a href="#contact" className="bp-btn bp-btn--cta bp-btn--sm">
            <Icon name="phone" size={14} stroke="#fff" />
            Call Now
          </a>
        </div>
      </div>
    </header>
  );
}

// ─── Footer ────────────────────────────────────────────────────────────────
function SiteFooter() {
  return (
    <footer style={{ background: 'var(--bp-ink)', color: '#fff' }}>
      <div style={{
        maxWidth: 'var(--bp-container)', margin: '0 auto',
        padding: '72px var(--bp-gutter) 32px',
      }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1.6fr 1fr 1fr 1fr', gap: 48 }}>
          <div>
            <Logo onDark size="lg" />
            <p style={{ marginTop: 24, color: 'rgba(255,255,255,0.65)', maxWidth: 320, fontSize: 15 }}>
              Local, family-run drainage specialists covering Kent and the South East since 2009.
              Six vans, real engineers, honest work.
            </p>
            <div style={{ marginTop: 28, display: 'flex', gap: 12 }}>
              <a href={BP_PHONE_TEL} className="bp-btn bp-btn--cta bp-btn--sm">
                <Icon name="phone" size={14} stroke="#fff" /> {BP_PHONE}
              </a>
              <a href="#contact" className="bp-btn bp-btn--sm" style={{
                background: 'transparent', color: '#fff', border: '1.5px solid rgba(255,255,255,0.3)',
              }}>Get a quote</a>
            </div>
          </div>
          <FooterCol title="Services" items={[
            'Blocked drains', 'CCTV surveys', 'Drain repairs',
            'High-pressure jetting', 'Tanker services', 'Sewer relining',
          ]} />
          <FooterCol title="Areas" items={BP_AREAS.slice(0, 8)} />
          <FooterCol title="Contact" items={[
            <span style={{ display: 'block' }}>
              <strong style={{ fontFamily: 'var(--bp-font-mono)' }}>{BP_PHONE}</strong>
              <br />
              <span style={{ color: 'rgba(255,255,255,0.5)', fontSize: 12 }}>24/7 emergency line</span>
            </span>,
            <span>hello@bpdrainssoutheast.co.uk</span>,
            <span>Unit 4, Canterbury Industrial Park,<br />Canterbury, Kent CT1 0XX</span>,
            <span style={{ color: 'rgba(255,255,255,0.5)', fontSize: 12 }}>Mon–Sun · 24h emergency</span>,
          ]} />
        </div>

        {/* legal strip */}
        <div style={{
          marginTop: 64, paddingTop: 24,
          borderTop: '1px solid rgba(255,255,255,0.12)',
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          color: 'rgba(255,255,255,0.5)', fontSize: 12,
        }}>
          <span style={{ fontFamily: 'var(--bp-font-mono)', letterSpacing: '0.06em' }}>
            © 2026 BP DRAINS SOUTH EAST LTD · COMPANY NO. 07412XXX · VAT GB 124 XXXX XX
          </span>
          <div style={{ display: 'flex', gap: 24 }}>
            <a href="#">Privacy</a>
            <a href="#">Terms</a>
            <a href="#">Cookies</a>
            <a href="#">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, items }) {
  return (
    <div>
      <div style={{
        fontFamily: 'var(--bp-font-mono)', fontSize: 11, letterSpacing: '0.12em',
        textTransform: 'uppercase', color: 'rgba(255,255,255,0.45)', marginBottom: 18,
      }}>{title}</div>
      <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 12 }}>
        {items.map((it, i) => <li key={i} style={{ fontSize: 14, color: 'rgba(255,255,255,0.85)' }}>{it}</li>)}
      </ul>
    </div>
  );
}

// ─── Floating CTAs (sticky right-bottom on every page) ─────────────────────
function FloatingCTAs({ mobile }) {
  const baseSize = mobile ? 56 : 60;
  return (
    <div style={{
      position: 'absolute',
      right: mobile ? 16 : 24,
      bottom: mobile ? 16 : 24,
      display: 'flex', flexDirection: 'column', gap: 12,
      zIndex: 50, pointerEvents: 'none',
    }}>
      <button title="Message us" style={{
        width: baseSize, height: baseSize, borderRadius: 999,
        border: '1px solid var(--bp-line)', background: 'var(--bp-white)',
        boxShadow: '0 6px 20px rgba(14,13,11,0.18)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        cursor: 'pointer', pointerEvents: 'auto',
      }}>
        <Icon name="message" size={22} />
      </button>
      <button title="Call now" style={{
        width: baseSize + 8, height: baseSize + 8, borderRadius: 999,
        border: 'none', background: 'var(--bp-red)',
        boxShadow: '0 10px 28px rgba(200,16,46,0.45)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        cursor: 'pointer', pointerEvents: 'auto', color: '#fff',
        position: 'relative',
      }}>
        <Icon name="phone" size={26} stroke="#fff" />
        <span style={{
          position: 'absolute', inset: -4, borderRadius: 999,
          border: '2px solid rgba(200,16,46,0.45)',
          animation: 'bpRing 2s ease-out infinite',
        }} />
      </button>
      <style>{`@keyframes bpRing{0%{transform:scale(1);opacity:.7}100%{transform:scale(1.5);opacity:0}}`}</style>
    </div>
  );
}

// ─── Icon set (line, 1.5px stroke, restyled in ink/red) ────────────────────
function Icon({ name, size = 24, stroke = 'currentColor', fill = 'none' }) {
  const s = stroke;
  const props = {
    width: size, height: size, viewBox: '0 0 24 24',
    fill: 'none', stroke: s, strokeWidth: 1.5,
    strokeLinecap: 'round', strokeLinejoin: 'round',
    style: { flex: '0 0 auto' },
  };
  switch (name) {
    case 'phone': return (
      <svg {...props}><path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A15 15 0 0 1 3 6a2 2 0 0 1 2-2z"/></svg>
    );
    case 'message': return (
      <svg {...props}><path d="M4 5h16v11H8l-4 4z"/><path d="M8 10h8M8 13h5"/></svg>
    );
    case 'blocked': return (   // blocked drain (pipe with X)
      <svg {...props}><rect x="3" y="9" width="18" height="6" rx="1"/><path d="M9 6l6 12M15 6l-6 12"/></svg>
    );
    case 'cctv': return (
      <svg {...props}><path d="M3 7h14l4 4v3H3z"/><circle cx="9" cy="11" r="2"/><path d="M21 14v3H7M7 17v3"/></svg>
    );
    case 'repair': return (
      <svg {...props}><path d="M14 4l3 3-2 2 4 4-3 3-4-4-2 2-3-3 7-7z"/><path d="M5 19l4-4"/></svg>
    );
    case 'jetting': return (   // water jet
      <svg {...props}><path d="M3 12h6"/><path d="M9 9l4 3-4 3z" fill={s}/><path d="M14 7c2 1 3 3 3 5s-1 4-3 5"/><path d="M17 4c3 2 4 5 4 8s-1 6-4 8"/></svg>
    );
    case 'tanker': return (
      <svg {...props}><rect x="3" y="8" width="14" height="8" rx="1"/><path d="M17 10h2l2 4v2h-4"/><circle cx="7" cy="18" r="2"/><circle cx="18" cy="18" r="2"/></svg>
    );
    case 'sewer': return (   // manhole cover
      <svg {...props}><circle cx="12" cy="12" r="8"/><path d="M12 6v12M6 12h12M8 8l8 8M16 8l-8 8"/></svg>
    );
    case 'septic': return (
      <svg {...props}><path d="M5 9h14l-1 11H6z"/><path d="M5 9c0-3 3-5 7-5s7 2 7 5"/><path d="M9 13v4M15 13v4M12 13v4"/></svg>
    );
    case 'survey': return (
      <svg {...props}><circle cx="10" cy="10" r="6"/><path d="M14.5 14.5L20 20"/></svg>
    );
    case 'soakaway': return (
      <svg {...props}><path d="M4 4h16v6H4zM4 10l3 10h10l3-10"/><path d="M9 14v3M15 14v3M12 14v3"/></svg>
    );
    case 'clock': return (
      <svg {...props}><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>
    );
    case 'shield': return (
      <svg {...props}><path d="M12 3l8 3v5c0 5-3.5 9-8 10-4.5-1-8-5-8-10V6z"/><path d="M9 12l2 2 4-4"/></svg>
    );
    case 'pin': return (
      <svg {...props}><path d="M12 22s7-7 7-13a7 7 0 0 0-14 0c0 6 7 13 7 13z"/><circle cx="12" cy="9" r="2.5"/></svg>
    );
    case 'arrow': return (
      <svg {...props}><path d="M5 12h14M13 6l6 6-6 6"/></svg>
    );
    case 'check': return (
      <svg {...props}><path d="M5 12l4 4 10-10"/></svg>
    );
    case 'star': return (
      <svg {...props} fill={s} stroke="none"><path d="M12 3l2.5 6 6.5.5-5 4.5 1.5 6.5L12 17l-5.5 3.5L8 14 3 9.5 9.5 9z"/></svg>
    );
    case 'menu': return (
      <svg {...props}><path d="M4 7h16M4 12h16M4 17h16"/></svg>
    );
    case 'plus': return (
      <svg {...props}><path d="M12 5v14M5 12h14"/></svg>
    );
    case 'pound': return (
      <svg {...props}><path d="M16 7c-1-2-3-3-5-3-3 0-5 2-5 5 0 2 1 3 2 4-1 1-2 2-2 4h11"/><path d="M5 13h8"/></svg>
    );
    default: return <svg {...props}><circle cx="12" cy="12" r="9"/></svg>;
  }
}

// ─── Accreditation chip ────────────────────────────────────────────────────
function AccreditChip({ name, sub, mark }) {
  return (
    <div style={{
      background: 'var(--bp-white)', border: '1px solid var(--bp-line)',
      borderRadius: 'var(--bp-r-2)', padding: '20px 18px',
      display: 'flex', alignItems: 'center', gap: 14,
      minHeight: 88, cursor: 'pointer', transition: 'border-color .15s, transform .15s',
    }}>
      <div style={{
        width: 48, height: 48, flex: '0 0 auto',
        background: 'var(--bp-stone-100)',
        border: '1px solid var(--bp-line-strong)',
        borderRadius: 'var(--bp-r-1)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        fontFamily: 'var(--bp-font-display)', fontWeight: 800, fontSize: 14,
        letterSpacing: '-0.02em', color: 'var(--bp-ink)',
      }}>{mark}</div>
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{ fontWeight: 600, fontSize: 14, lineHeight: 1.2 }}>{name}</div>
        <div style={{
          fontFamily: 'var(--bp-font-mono)', fontSize: 11, letterSpacing: '0.08em',
          textTransform: 'uppercase', color: 'var(--bp-fg-muted)', marginTop: 4,
        }}>{sub}</div>
      </div>
      <Icon name="plus" size={16} stroke="var(--bp-fg-muted)" />
    </div>
  );
}

// ─── Eyebrow (section index + label) ───────────────────────────────────────
function Eyebrow({ index, label, onDark }) {
  return (
    <div style={{
      display: 'flex', alignItems: 'center', gap: 12,
      fontFamily: 'var(--bp-font-mono)', fontSize: 12, letterSpacing: '0.12em',
      textTransform: 'uppercase',
      color: onDark ? 'rgba(255,255,255,0.65)' : 'var(--bp-fg-muted)',
    }}>
      <span style={{
        fontVariantNumeric: 'tabular-nums',
        color: onDark ? 'rgba(255,255,255,0.4)' : 'var(--bp-fg-faint)',
      }}>{index}</span>
      <span style={{
        width: 28, height: 1,
        background: onDark ? 'rgba(255,255,255,0.3)' : 'var(--bp-line-strong)',
      }} />
      <span>{label}</span>
    </div>
  );
}

// Export to window for cross-script access
Object.assign(window, {
  BP_PHONE, BP_PHONE_TEL, BP_AREAS,
  ImageSlot, Logo, UtilityBar, SiteHeader, SiteFooter, FloatingCTAs,
  Icon, AccreditChip, Eyebrow, FooterCol,
});
