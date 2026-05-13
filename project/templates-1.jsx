// templates.jsx — Contact / Area / Service / Gallery / Testimonials templates
// Plus mobile homepage. All desktop unless suffixed Mobile.

// ════════════════════════════════════════════════════════════════════════
// CONTACT
// ════════════════════════════════════════════════════════════════════════
function ContactDesktop() {
  return (
    <div className="bp-root" data-screen-label="Contact / Desktop">
      <UtilityBar />
      <SiteHeader active="Contact" />

      {/* Hero */}
      <section style={{
        background: 'var(--bp-stone-100)',
        padding: '72px var(--bp-gutter) 0',
        borderBottom: '1px solid var(--bp-line)',
      }}>
        <div style={{ maxWidth: 'var(--bp-container)', margin: '0 auto' }}>
          <Eyebrow index="01 / 04" label="Contact" />
          <h1 style={{ fontSize: 'var(--bp-fs-h1)', marginTop: 20, maxWidth: 760 }}>
            One number. Six vans. Someone always answers.
          </h1>
          <p style={{ fontSize: 19, lineHeight: 1.5, color: 'var(--bp-stone-600)', maxWidth: 640, marginTop: 24 }}>
            Most jobs we book in the same day — often the same hour. Pick the option that suits you.
          </p>

          {/* phone strip — large red */}
          <div style={{
            marginTop: 56, padding: '32px 36px',
            background: 'var(--bp-red)', color: '#fff',
            display: 'flex', alignItems: 'center', justifyContent: 'space-between',
            borderRadius: 'var(--bp-r-2)',
            boxShadow: 'var(--bp-shadow-cta)',
          }}>
            <div>
              <div style={{ fontFamily: 'var(--bp-font-mono)', fontSize: 12, letterSpacing: '0.12em', textTransform: 'uppercase', opacity: 0.85 }}>
                Emergency line · 24 / 7 · 365
              </div>
              <div style={{
                fontFamily: 'var(--bp-font-display)', fontWeight: 900,
                fontSize: 64, marginTop: 8, letterSpacing: '-0.03em', lineHeight: 1,
              }}>{BP_PHONE}</div>
            </div>
            <div style={{ textAlign: 'right' }}>
              <div style={{ fontSize: 14, opacity: 0.85 }}>Avg. answer time</div>
              <div style={{ fontFamily: 'var(--bp-font-display)', fontWeight: 800, fontSize: 32 }}>under 30s</div>
            </div>
          </div>
        </div>
      </section>

      {/* Two-column form + details */}
      <section style={{ padding: 'var(--bp-section-y) var(--bp-gutter)' }}>
        <div style={{ maxWidth: 'var(--bp-container)', margin: '0 auto', display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: 64 }}>
          {/* Form */}
          <div>
            <Eyebrow index="02 / 04" label="Or send us the details" />
            <h2 style={{ marginTop: 16 }}>Tell us what's going on.</h2>
            <p style={{ marginTop: 12, color: 'var(--bp-stone-600)' }}>
              We'll come back within the hour during the working day. Out of hours? Please call.
            </p>

            <form style={{ marginTop: 36, display: 'flex', flexDirection: 'column', gap: 20 }}>
              <Field label="Your name" placeholder="e.g. Sarah Mitchell" />
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
                <Field label="Phone number" placeholder="07__ ___ ____" />
                <Field label="Postcode" placeholder="CT5 1AB" />
              </div>
              <Field label="Email (optional)" placeholder="you@example.co.uk" />
              <Field label="What's the issue?" textarea placeholder="Blocked drain? Bad smell? Survey for a sale? Describe it as you would on the phone." />

              {/* photo upload */}
              <div>
                <span className="bp-label">Photo (optional)</span>
                <div style={{
                  border: '1.5px dashed var(--bp-line-strong)',
                  borderRadius: 'var(--bp-r-2)',
                  padding: 24,
                  display: 'flex', alignItems: 'center', gap: 16,
                  background: 'var(--bp-stone-50)',
                }}>
                  <div style={{
                    width: 48, height: 48,
                    border: '1px solid var(--bp-line-strong)',
                    borderRadius: 'var(--bp-r-1)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    background: '#fff',
                  }}>
                    <Icon name="plus" size={20} />
                  </div>
                  <div>
                    <div style={{ fontWeight: 600 }}>Drag in a photo, or click to upload</div>
                    <div className="bp-mono" style={{ marginTop: 4 }}>Often the fastest way to diagnose — JPG, HEIC, PNG up to 10MB</div>
                  </div>
                </div>
              </div>

              {/* urgency */}
              <div>
                <span className="bp-label">How urgent?</span>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 8 }}>
                  {[
                    { l: 'Right now', s: 'Calling won\'t wait', red: true },
                    { l: 'Today / tomorrow', s: 'Same-day or next' },
                    { l: 'Planned', s: 'Quote first' },
                  ].map(u => (
                    <label key={u.l} style={{
                      border: u.red ? '1.5px solid var(--bp-red)' : '1px solid var(--bp-line-strong)',
                      background: u.red ? 'var(--bp-red-tint)' : '#fff',
                      borderRadius: 'var(--bp-r-2)',
                      padding: 14, cursor: 'pointer',
                    }}>
                      <div style={{ fontWeight: 600, color: u.red ? 'var(--bp-red)' : 'var(--bp-ink)' }}>{u.l}</div>
                      <div className="bp-mono" style={{ marginTop: 4 }}>{u.s}</div>
                    </label>
                  ))}
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginTop: 8 }}>
                <button type="submit" className="bp-btn bp-btn--cta bp-btn--lg">
                  Send to BP Drains <Icon name="arrow" size={16} stroke="#fff" />
                </button>
                <span style={{ fontSize: 13, color: 'var(--bp-fg-muted)' }}>
                  Or call <strong>{BP_PHONE}</strong> · we'd rather you did, honestly
                </span>
              </div>
            </form>
          </div>

          {/* Details column */}
          <aside style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
            <ContactBlock title="Office" icon="pin"
              lines={[
                <strong>BP Drains South East Ltd</strong>,
                'Unit 4, Canterbury Industrial Park',
                'Canterbury, Kent CT1 0XX',
                <a href="#" style={{ textDecoration: 'underline' }}>Open in Maps →</a>,
              ]}
            />
            <ContactBlock title="Hours" icon="clock"
              lines={[
                <span><strong>Mon–Fri</strong> &nbsp;·&nbsp; 07:00 – 18:00</span>,
                <span><strong>Sat–Sun</strong> &nbsp;·&nbsp; 08:00 – 17:00</span>,
                <span style={{ color: 'var(--bp-red)', fontWeight: 600 }}>24/7 emergency line, always</span>,
              ]}
            />
            <ContactBlock title="Direct" icon="message"
              lines={[
                <span><strong style={{ fontFamily: 'var(--bp-font-mono)' }}>{BP_PHONE}</strong> — phone, 24/7</span>,
                <span>WhatsApp: <strong>{BP_PHONE}</strong></span>,
                <span>hello@bpdrainssoutheast.co.uk</span>,
              ]}
            />

            {/* coverage mini-map */}
            <div className="bp-card" style={{ padding: 0, overflow: 'hidden' }}>
              <div style={{ padding: '18px 24px', borderBottom: '1px solid var(--bp-line)' }}>
                <div className="bp-mono">Coverage</div>
                <div style={{ fontWeight: 600, marginTop: 4 }}>Kent &amp; the South East</div>
              </div>
              <ImageSlot
                label="MAP — coverage area: CT, ME, TN postcodes · embed Google Map"
                style={{ height: 220, borderRadius: 0 }}
              />
            </div>
          </aside>
        </div>
      </section>

      <SiteFooter />
      <FloatingCTAs />
    </div>
  );
}

function Field({ label, placeholder, textarea }) {
  const Tag = textarea ? 'textarea' : 'input';
  return (
    <label style={{ display: 'block' }}>
      <span className="bp-label">{label}</span>
      <Tag className={'bp-input' + (textarea ? ' bp-textarea' : '')} placeholder={placeholder} />
    </label>
  );
}

function ContactBlock({ title, icon, lines }) {
  return (
    <div className="bp-card" style={{ padding: 24 }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 12 }}>
        <Icon name={icon} size={18} />
        <span className="bp-mono">{title}</span>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 8, fontSize: 15 }}>
        {lines.map((l, i) => <div key={i}>{l}</div>)}
      </div>
    </div>
  );
}

// ════════════════════════════════════════════════════════════════════════
// AREA PAGE (Template — Margate example)
// ════════════════════════════════════════════════════════════════════════
function AreaPageDesktop() {
  return (
    <div className="bp-root" data-screen-label="Area Template / Margate">
      <UtilityBar />
      <SiteHeader active="Areas" />

      {/* Breadcrumb */}
      <div style={{ background: 'var(--bp-stone-100)', padding: '20px var(--bp-gutter)', borderBottom: '1px solid var(--bp-line)' }}>
        <div style={{ maxWidth: 'var(--bp-container)', margin: '0 auto', fontFamily: 'var(--bp-font-mono)', fontSize: 12, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--bp-fg-muted)' }}>
          BP Drains · Areas covered · <span style={{ color: 'var(--bp-ink)' }}>Margate</span>
        </div>
      </div>

      {/* Hero */}
      <section style={{ background: 'var(--bp-stone-100)', padding: '56px var(--bp-gutter) 96px', borderBottom: '1px solid var(--bp-line)' }}>
        <div style={{ maxWidth: 'var(--bp-container)', margin: '0 auto', display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: 48, alignItems: 'center' }}>
          <div>
            <Eyebrow index="LOCAL · CT9" label="Margate · Thanet · Kent" />
            <h1 style={{ fontSize: 'var(--bp-fs-h1)', marginTop: 20, letterSpacing: '-0.03em' }}>
              Drainage services<br/>in <span style={{ background: 'var(--bp-ink)', color: '#fff', padding: '0 12px' }}>Margate</span>
            </h1>
            <p style={{ marginTop: 24, fontSize: 18, lineHeight: 1.55, color: 'var(--bp-stone-600)', maxWidth: 540 }}>
              Aaron's van — Van 06 — lives in Margate. From Cliftonville to Westgate-on-Sea, we're typically on-site within 40 minutes. CT9 postcodes covered, weekdays and weekends, day and night.
            </p>
            <div style={{ marginTop: 32, display: 'flex', gap: 12 }}>
              <a className="bp-btn bp-btn--cta bp-btn--lg" href={BP_PHONE_TEL}>
                <Icon name="phone" size={18} stroke="#fff" /> Call Margate · {BP_PHONE}
              </a>
              <a className="bp-btn bp-btn--ghost bp-btn--lg" href="#quote">Get a Margate quote</a>
            </div>

            <div style={{
              marginTop: 40, padding: '20px 0',
              borderTop: '1px solid var(--bp-line-strong)',
              display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 24,
            }}>
              {[
                { v: '38 min', l: 'Avg. on-site, CT9' },
                { v: '420+', l: 'Margate jobs / yr' },
                { v: 'CT9', l: 'Postcode covered' },
                { v: 'Van 06', l: 'Your local engineer' },
              ].map(s => (
                <div key={s.l}>
                  <div style={{ fontFamily: 'var(--bp-font-display)', fontWeight: 800, fontSize: 24, letterSpacing: '-0.02em' }}>{s.v}</div>
                  <div className="bp-mono" style={{ marginTop: 4 }}>{s.l}</div>
                </div>
              ))}
            </div>
          </div>

          <div style={{ position: 'relative' }}>
            <ImageSlot label="MARGATE PHOTO — Aaron's van, harbour / local landmark · supply" style={{ height: 460 }} />
            <div style={{
              position: 'absolute', left: 16, bottom: 16, right: 16,
              background: '#fff', padding: 16,
              borderLeft: '4px solid var(--bp-ink)', borderRadius: 2,
              boxShadow: 'var(--bp-shadow-md)',
              display: 'flex', alignItems: 'center', gap: 14,
            }}>
              <div style={{
                width: 48, height: 48, borderRadius: '50%',
                background: 'var(--bp-stone-200)',
                backgroundImage: 'repeating-linear-gradient(45deg, rgba(0,0,0,0.08) 0 1.5px, transparent 1.5px 8px)',
              }} />
              <div style={{ flex: 1 }}>
                <div style={{ fontWeight: 600 }}>Aaron W. · Van 06</div>
                <div className="bp-mono" style={{ marginTop: 2 }}>Lives in Margate · 8 yrs at BP Drains</div>
              </div>
              <Icon name="check" size={20} stroke="#3DBA6E" />
            </div>
          </div>
        </div>
      </section>

      {/* Local intro */}
      <section style={{ padding: 'var(--bp-section-y) var(--bp-gutter)' }}>
        <div style={{ maxWidth: 'var(--bp-container)', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1.4fr', gap: 64 }}>
          <div>
            <Eyebrow index="01" label="The area" />
            <h2 style={{ marginTop: 20 }}>Old town, new pipes,<br />sea air on everything.</h2>
          </div>
          <div style={{ fontSize: 17, lineHeight: 1.7, color: 'var(--bp-stone-600)' }}>
            <p>Margate keeps us busy. The mix of period property in the Old Town and post-war stock around Northdown means we see the full range — Victorian salt-glazed clay that's been in the ground 130 years, mid-century pitch fibre that's gone oval, and modern plastic that's been laid on too steep a fall.</p>
            <p style={{ marginTop: 18 }}>The sea air doesn't help. Cast iron stacks corrode fast, and we replace more of them in Margate than anywhere else in our patch. If you've got a smell from a hopper head or a slow gully near the gutter, that's usually it.</p>
            <p style={{ marginTop: 18 }}>Whatever it is — same-day diagnosis, fixed-price repair, no nonsense. <a href="#" style={{ textDecoration: 'underline', fontWeight: 600 }}>Call us</a> and Aaron will be there before lunch.</p>
          </div>
        </div>
      </section>

      {/* Services in this area */}
      <section style={{ background: 'var(--bp-stone-100)', padding: 'var(--bp-section-y) var(--bp-gutter)' }}>
        <div style={{ maxWidth: 'var(--bp-container)', margin: '0 auto' }}>
          <Eyebrow index="02" label="Services in CT9" />
          <h2 style={{ marginTop: 20, marginBottom: 40 }}>Everything we do, available in Margate.</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 1, background: 'var(--bp-line)', border: '1px solid var(--bp-line)' }}>
            {[
              { icon: 'blocked', name: 'Blocked drains', stat: '32 / mo' },
              { icon: 'cctv',    name: 'CCTV surveys',   stat: '14 / mo' },
              { icon: 'repair',  name: 'Pipe repairs',   stat: '11 / mo' },
              { icon: 'jetting', name: 'Jetting',        stat: '9 / mo'  },
              { icon: 'tanker',  name: 'Tanker services',stat: '4 / mo'  },
              { icon: 'sewer',   name: 'Sewer relining', stat: '3 / mo'  },
              { icon: 'septic',  name: 'Septic tanks',   stat: '2 / mo'  },
              { icon: 'soakaway',name: 'Soakaways',      stat: '1 / mo'  },
            ].map(s => (
              <div key={s.name} style={{ background: '#fff', padding: 24, display: 'flex', flexDirection: 'column', gap: 16 }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <Icon name={s.icon} size={26} />
                  <span className="bp-mono" style={{ color: 'var(--bp-fg-faint)' }}>{s.stat}</span>
                </div>
                <div style={{ fontWeight: 600 }}>{s.name}<div className="bp-mono" style={{ marginTop: 4 }}>In Margate</div></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Local testimonials + map */}
      <section style={{ padding: 'var(--bp-section-y) var(--bp-gutter)' }}>
        <div style={{ maxWidth: 'var(--bp-container)', margin: '0 auto', display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: 64 }}>
          <div>
            <Eyebrow index="03" label="Margate customers" />
            <h2 style={{ marginTop: 20, marginBottom: 32 }}>From CT9 itself.</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              {[
                { src: 'Google', name: 'Helen B.', area: 'Cliftonville', date: '02 Apr', text: '"Aaron showed up with the camera, found the problem in 10 minutes, and had it lined the following morning. Pleasant, tidy, and the price didn\'t move."' },
                { src: 'Trustpilot', name: 'Tom K.', area: 'Westgate-on-Sea', date: '21 Mar', text: '"Took on a job another company refused. Made good of the path afterwards too — you wouldn\'t know they\'d been."' },
                { src: 'Direct', name: 'Mrs Foley', area: 'Margate Old Town', date: '14 Mar', text: '"Quick, polite, explained what was wrong with my drains in language I could understand. I\'ll have them back for the annual service."' },
              ].map(t => (
                <div key={t.name} className="bp-card" style={{ padding: 20, display: 'flex', gap: 20 }}>
                  <div style={{ width: 4, alignSelf: 'stretch', background: 'var(--bp-ink)' }} />
                  <div style={{ flex: 1 }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8 }}>
                      <span className="bp-mono">{t.src} · {t.date}</span>
                      <div className="bp-stars">★ ★ ★ ★ ★</div>
                    </div>
                    <p style={{ fontSize: 15, lineHeight: 1.5 }}>{t.text}</p>
                    <div style={{ marginTop: 12, fontSize: 13 }}>
                      <strong>{t.name}</strong> · <span style={{ color: 'var(--bp-fg-muted)' }}>{t.area}, Margate</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <Eyebrow index="04" label="Coverage" />
            <h2 style={{ marginTop: 20, marginBottom: 24 }}>CT9 and the Thanet loop.</h2>
            <ImageSlot label="MAP — Margate / Thanet coverage outline · CT9 · postcodes shaded" style={{ height: 320 }} />
            <div style={{ marginTop: 16, display: 'flex', flexWrap: 'wrap', gap: 6 }}>
              {['Cliftonville', 'Westgate-on-Sea', 'Birchington', 'Garlinge', 'Northdown', 'Westbrook', 'Palm Bay', 'Margate Old Town'].map(t => (
                <span key={t} style={{
                  fontFamily: 'var(--bp-font-mono)', fontSize: 11, letterSpacing: '0.08em',
                  background: 'var(--bp-stone-100)', padding: '6px 10px', borderRadius: 2,
                }}>{t}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Nearby areas */}
      <section style={{ background: 'var(--bp-stone-100)', padding: '64px var(--bp-gutter)', borderTop: '1px solid var(--bp-line)' }}>
        <div style={{ maxWidth: 'var(--bp-container)', margin: '0 auto' }}>
          <Eyebrow index="05" label="Nearby areas" />
          <h3 style={{ marginTop: 16, marginBottom: 24 }}>We also cover</h3>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
            {BP_AREAS.filter(a => a !== 'Margate').map(a => (
              <a key={a} href="#" style={{
                padding: '12px 18px', background: '#fff',
                border: '1px solid var(--bp-line-strong)',
                borderRadius: 2, fontSize: 14, fontWeight: 500,
                display: 'inline-flex', alignItems: 'center', gap: 8,
              }}>{a} <Icon name="arrow" size={12} /></a>
            ))}
          </div>
        </div>
      </section>

      {/* CTA band */}
      <CTABand area="Margate" />
      <SiteFooter />
      <FloatingCTAs />
    </div>
  );
}

function CTABand({ area }) {
  return (
    <section style={{ background: 'var(--bp-ink)', color: '#fff', padding: '72px var(--bp-gutter)' }}>
      <div style={{ maxWidth: 'var(--bp-container)', margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 48 }}>
        <div>
          <Eyebrow index="→" label={area ? `Drainage in ${area}` : 'Ready when you are'} onDark />
          <div style={{ fontFamily: 'var(--bp-font-display)', fontWeight: 900, fontSize: 48, marginTop: 12, letterSpacing: '-0.025em', lineHeight: 1, color: '#fff' }}>
            {area ? `Need us in ${area}? Call now.` : 'Need a drainage engineer? Call now.'}
          </div>
        </div>
        <div style={{ display: 'flex', gap: 12 }}>
          <a href={BP_PHONE_TEL} className="bp-btn bp-btn--cta bp-btn--lg">
            <Icon name="phone" size={18} stroke="#fff" /> {BP_PHONE}
          </a>
          <a href="#" className="bp-btn bp-btn--lg" style={{ background: '#fff', color: 'var(--bp-ink)' }}>Get a quote</a>
        </div>
      </div>
    </section>
  );
}

// ════════════════════════════════════════════════════════════════════════
// SERVICE PAGE (Template — Blocked drains example)
// ════════════════════════════════════════════════════════════════════════
function ServicePageDesktop() {
  return (
    <div className="bp-root" data-screen-label="Service Template / Blocked Drains">
      <UtilityBar />
      <SiteHeader active="Services" />

      <div style={{ background: 'var(--bp-stone-100)', padding: '20px var(--bp-gutter)', borderBottom: '1px solid var(--bp-line)' }}>
        <div style={{ maxWidth: 'var(--bp-container)', margin: '0 auto', fontFamily: 'var(--bp-font-mono)', fontSize: 12, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--bp-fg-muted)' }}>
          BP Drains · Services · <span style={{ color: 'var(--bp-ink)' }}>Blocked drains</span>
        </div>
      </div>

      {/* Hero */}
      <section style={{ background: 'var(--bp-stone-100)', padding: '64px var(--bp-gutter) 96px', borderBottom: '1px solid var(--bp-line)' }}>
        <div style={{ maxWidth: 'var(--bp-container)', margin: '0 auto', display: 'grid', gridTemplateColumns: '1.1fr 1fr', gap: 64, alignItems: 'center' }}>
          <div>
            <Eyebrow index="SERVICE / 01" label="Blocked drains" />
            <h1 style={{ fontSize: 'var(--bp-fs-h1)', marginTop: 20 }}>
              Blocked drain.<br/>
              <span style={{ color: 'var(--bp-stone-500)' }}>Cleared today.</span>
            </h1>
            <p style={{ marginTop: 24, fontSize: 18, lineHeight: 1.55, color: 'var(--bp-stone-600)', maxWidth: 540 }}>
              Sinks, showers, toilets, gullies, manholes, soakaways — if water isn't going where it should, we'll find out why and put it right.
              Almost always in one visit.
            </p>

            <div style={{ marginTop: 32, display: 'flex', gap: 12 }}>
              <a className="bp-btn bp-btn--cta bp-btn--lg" href={BP_PHONE_TEL}>
                <Icon name="phone" size={18} stroke="#fff" /> {BP_PHONE}
              </a>
              <a className="bp-btn bp-btn--ghost bp-btn--lg" href="#quote">Free quote</a>
            </div>

            {/* price strip */}
            <div style={{ marginTop: 40, display: 'inline-flex', alignItems: 'center', gap: 0, border: '1px solid var(--bp-line-strong)', borderRadius: 2, overflow: 'hidden', background: '#fff' }}>
              <div style={{ padding: '14px 20px', borderRight: '1px solid var(--bp-line)' }}>
                <div className="bp-mono">Typical price</div>
                <div style={{ fontFamily: 'var(--bp-font-display)', fontWeight: 800, fontSize: 28 }}>£95 – £180</div>
              </div>
              <div style={{ padding: '14px 20px', borderRight: '1px solid var(--bp-line)' }}>
                <div className="bp-mono">Out-of-hours</div>
                <div style={{ fontFamily: 'var(--bp-font-display)', fontWeight: 800, fontSize: 28 }}>+£60</div>
              </div>
              <div style={{ padding: '14px 20px' }}>
                <div className="bp-mono">Time on-site</div>
                <div style={{ fontFamily: 'var(--bp-font-display)', fontWeight: 800, fontSize: 28 }}>≈ 45 min</div>
              </div>
            </div>
          </div>

          <ImageSlot label="JOB PHOTO — engineer rodding a manhole · supply" style={{ height: 540 }} dark accent />
        </div>
      </section>

      {/* What it covers + signs */}
      <section style={{ padding: 'var(--bp-section-y) var(--bp-gutter)' }}>
        <div style={{ maxWidth: 'var(--bp-container)', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64 }}>
          <div>
            <Eyebrow index="01" label="What this covers" />
            <h2 style={{ marginTop: 20, marginBottom: 24 }}>Every drain you can think of.</h2>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 14 }}>
              {[
                'Kitchen sinks and food-waste blockages',
                'Bathroom — toilets, baths, showers, basins',
                'Outdoor gullies and yard drains',
                'Manholes, inspection chambers, rodding eyes',
                'Soakaways and rainwater pipes',
                'Commercial floor drains, grease traps',
                'Toilet vent stacks and soil pipes',
                'Section 24 / shared private sewers',
              ].map(l => (
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
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
              {[
                'Water draining slowly',
                'Gurgling sound from the plughole',
                'A bad smell outside, near a gully',
                'Toilet not flushing properly',
                'Sewage at a manhole cover',
                'Multiple drains affected at once',
              ].map(s => (
                <div key={s} className="bp-card" style={{ padding: 16, display: 'flex', alignItems: 'center', gap: 10 }}>
                  <span style={{ width: 4, height: 24, background: 'var(--bp-red)' }} />
                  <span style={{ fontSize: 14, fontWeight: 500 }}>{s}</span>
                </div>
              ))}
            </div>
            <div style={{ marginTop: 24, padding: 20, background: 'var(--bp-ink)', color: '#fff', borderRadius: 2 }}>
              <div className="bp-mono" style={{ color: 'rgba(255,255,255,0.55)' }}>Rule of thumb</div>
              <p style={{ marginTop: 6, fontSize: 16, lineHeight: 1.5 }}>If two or more fixtures are affected at the same time, the blockage is outside the house — and we should look at it before it backs up further. <a href={BP_PHONE_TEL} style={{ color: '#fff', textDecoration: 'underline', fontWeight: 600 }}>Call us</a>.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section style={{ background: 'var(--bp-stone-100)', padding: 'var(--bp-section-y) var(--bp-gutter)' }}>
        <div style={{ maxWidth: 'var(--bp-container)', margin: '0 auto' }}>
          <Eyebrow index="03" label="What to expect" />
          <h2 style={{ marginTop: 20, marginBottom: 56 }}>From phone-call to fixed.</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: 1, background: 'var(--bp-line)', border: '1px solid var(--bp-line)' }}>
            {[
              { t: '00:00', l: 'You call', d: 'We pick up. Give you an arrival window.' },
              { t: '00:45', l: 'Van arrives', d: 'Marked van. We text 10 mins out.' },
              { t: '01:00', l: 'Diagnose', d: 'Rods first, CCTV if it doesn\'t clear.' },
              { t: '01:30', l: 'Fixed price', d: 'Quoted before any work starts.' },
              { t: '02:15', l: 'Cleared & gone', d: 'Site left clean. Card payment.' },
            ].map((p, i) => (
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
        <div style={{ maxWidth: 'var(--bp-container)', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1.4fr', gap: 64 }}>
          <div>
            <Eyebrow index="04" label="Pricing" />
            <h2 style={{ marginTop: 20 }}>Honest. Fixed before we start.</h2>
            <p style={{ marginTop: 16, color: 'var(--bp-stone-600)', fontSize: 16 }}>
              Every job gets a fixed quote before tools come out. If it turns out to be more (we'll show you why), you say yes or no. No "while we're here" creep.
            </p>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            {[
              { l: 'Standard blockage clearance', sub: 'Up to 1 hour on-site', p: '£95' },
              { l: 'Out-of-hours / weekend', sub: 'After 6pm or Sat/Sun', p: '£155' },
              { l: 'With CCTV diagnostic', sub: 'Includes written report', p: '£245' },
              { l: 'Manhole lift / external', sub: 'External blockages, multiple chambers', p: 'From £180' },
              { l: 'Commercial / multi-property', sub: 'Bespoke', p: 'Quoted' },
            ].map(r => (
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
      </section>

      {/* FAQ */}
      <section style={{ background: 'var(--bp-stone-100)', padding: 'var(--bp-section-y) var(--bp-gutter)' }}>
        <div style={{ maxWidth: 'var(--bp-container)', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1.4fr', gap: 64 }}>
          <div>
            <Eyebrow index="05" label="FAQs" />
            <h2 style={{ marginTop: 20 }}>Asked, answered.</h2>
            <p style={{ marginTop: 16, color: 'var(--bp-stone-600)' }}>Can't see your question? <a href={BP_PHONE_TEL} style={{ textDecoration: 'underline', fontWeight: 600 }}>Call {BP_PHONE}</a>.</p>
          </div>
          <div>
            {[
              { q: 'How quickly can you get here?', a: 'Usually 45–90 minutes within Kent. We send 10-minute heads-up by text.' },
              { q: 'Do I have to be there?', a: 'No, as long as we can access the drain. Many landlord jobs we attend with just a phone number.' },
              { q: 'Will you make a mess inside?', a: 'External-only on most blockages — we go in through a manhole or gully, not your kitchen.' },
              { q: 'What payment do you take?', a: 'Card, bank transfer, or invoice for trade. Payment only after the job\'s signed off.' },
              { q: 'Are you insured?', a: 'Yes — £5m public liability and £10m employer\'s liability. Certificate on request.' },
            ].map((f, i) => (
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
      </section>

      {/* Related services */}
      <section style={{ padding: 'var(--bp-section-y) var(--bp-gutter)' }}>
        <div style={{ maxWidth: 'var(--bp-container)', margin: '0 auto' }}>
          <Eyebrow index="06" label="Related services" />
          <h3 style={{ marginTop: 16, marginBottom: 24 }}>Other things we do</h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 12 }}>
            {[
              { icon: 'cctv', name: 'CCTV survey', desc: 'Pinpoint the cause when rodding doesn\'t clear it.' },
              { icon: 'jetting', name: 'High-pressure jetting', desc: 'For commercial grease, scale and roots.' },
              { icon: 'repair', name: 'Drain repair', desc: 'Damaged pipework excavated and replaced.' },
            ].map(r => (
              <a key={r.name} className="bp-card" style={{ padding: 24, display: 'flex', flexDirection: 'column', gap: 12 }}>
                <Icon name={r.icon} size={28} />
                <div style={{ fontWeight: 600 }}>{r.name}</div>
                <p style={{ fontSize: 14, color: 'var(--bp-stone-600)' }}>{r.desc}</p>
                <span style={{ fontSize: 13, fontWeight: 600, display: 'inline-flex', alignItems: 'center', gap: 6 }}>Read more <Icon name="arrow" size={14} /></span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <CTABand />
      <SiteFooter />
      <FloatingCTAs />
    </div>
  );
}

Object.assign(window, { ContactDesktop, AreaPageDesktop, ServicePageDesktop, CTABand });
