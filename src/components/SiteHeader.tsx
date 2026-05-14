'use client';

import { useState } from 'react';
import Link from 'next/link';
import Logo from './Logo';
import Icon from './Icon';
import { BP_PHONE, BP_PHONE_TEL, BP_AREAS } from '@/lib/constants';

const SERVICES = [
  { label: 'Blocked drains',     slug: 'blocked-drains' },
  { label: 'CCTV surveys',       slug: 'cctv-drain-surveys' },
  { label: 'Drain repairs',      slug: 'drain-repairs' },
  { label: 'Drain lining',       slug: 'drain-lining' },
  { label: 'Emergency drainage', slug: 'emergency-drainage' },
  { label: 'Gutter cleaning',    slug: 'gutter-cleaning' },
];

const SIMPLE_NAV = [
  { label: 'Gallery',      href: '/gallery' },
  { label: 'Testimonials', href: '/testimonials' },
  { label: 'Contact',      href: '/contact' },
];

const dropPanelStyle: React.CSSProperties = {
  position: 'absolute',
  top: 'calc(100% + 10px)',
  left: '50%',
  transform: 'translateX(-50%)',
  background: '#fff',
  border: '1px solid var(--bp-line-strong)',
  boxShadow: '0 8px 24px rgba(0,0,0,0.10)',
  borderRadius: 6,
  minWidth: 200,
  zIndex: 200,
  padding: '8px 0',
};

const dropLinkStyle: React.CSSProperties = {
  display: 'block',
  padding: '10px 20px',
  fontSize: 14,
  fontWeight: 500,
  color: 'var(--bp-ink)',
  whiteSpace: 'nowrap',
};

interface SiteHeaderProps {
  active?: string;
}

export default function SiteHeader({ active }: SiteHeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const [desktopOpen, setDesktopOpen] = useState<string | null>(null);

  function closeAll() {
    setMenuOpen(false);
    setMobileExpanded(null);
  }

  function toggleMobile(section: string) {
    setMobileExpanded(prev => (prev === section ? null : section));
  }

  return (
    <>
      <header style={{
        background: 'var(--bp-white)',
        borderBottom: '1px solid var(--bp-line)',
        position: 'sticky', top: 0, zIndex: 100,
      }}>
        <div style={{
          maxWidth: 'var(--bp-container)', margin: '0 auto',
          padding: '18px var(--bp-gutter)',
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        }}>
          <Logo />

          <nav className="nav-desktop" style={{ position: 'relative' }}>
            {/* Services dropdown */}
            <div
              style={{ position: 'relative' }}
              onMouseEnter={() => setDesktopOpen('services')}
              onMouseLeave={() => setDesktopOpen(null)}
            >
              <button style={{
                fontSize: 14, fontWeight: 500, color: 'var(--bp-ink)',
                padding: '8px 0', background: 'none', border: 'none', cursor: 'pointer',
                display: 'flex', alignItems: 'center', gap: 4,
                borderBottom: active === 'Services' ? '2px solid var(--bp-ink)' : '2px solid transparent',
              }}>
                Services <Icon name="chevron-down" size={14} />
              </button>
              {desktopOpen === 'services' && (
                <div style={dropPanelStyle}>
                  {SERVICES.map(s => (
                    <Link key={s.slug} href={`/services/${s.slug}`} style={dropLinkStyle}>
                      {s.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Areas dropdown */}
            <div
              style={{ position: 'relative' }}
              onMouseEnter={() => setDesktopOpen('areas')}
              onMouseLeave={() => setDesktopOpen(null)}
            >
              <button style={{
                fontSize: 14, fontWeight: 500, color: 'var(--bp-ink)',
                padding: '8px 0', background: 'none', border: 'none', cursor: 'pointer',
                display: 'flex', alignItems: 'center', gap: 4,
                borderBottom: active === 'Areas' ? '2px solid var(--bp-ink)' : '2px solid transparent',
              }}>
                Areas <Icon name="chevron-down" size={14} />
              </button>
              {desktopOpen === 'areas' && (
                <div style={{ ...dropPanelStyle, minWidth: 280 }}>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 0 }}>
                    {BP_AREAS.map(a => (
                      <Link
                        key={a}
                        href={`/areas/${a.toLowerCase().replace(/\s+/g, '-')}`}
                        style={dropLinkStyle}
                      >
                        {a}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Simple links */}
            {SIMPLE_NAV.map(item => (
              <Link key={item.label} href={item.href} style={{
                fontSize: 14, fontWeight: 500, color: 'var(--bp-ink)',
                padding: '8px 0',
                borderBottom: active === item.label ? '2px solid var(--bp-ink)' : '2px solid transparent',
              }}>{item.label}</Link>
            ))}
          </nav>

          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <a href={BP_PHONE_TEL} className="bp-btn bp-btn--cta bp-btn--sm">
              <Icon name="phone" size={14} stroke="#fff" />
              Call Now
            </a>
            <button
              className="nav-mobile-btn bp-btn bp-btn--sm"
              style={{ background: 'transparent', border: '1px solid var(--bp-line-strong)' }}
              onClick={() => setMenuOpen(true)}
              aria-label="Open menu"
            >
              <Icon name="menu" size={18} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu overlay */}
      <div className={`mobile-menu${menuOpen ? ' open' : ''}`}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 32 }}>
          <Logo />
          <button
            onClick={() => setMenuOpen(false)}
            style={{ background: 'none', border: 'none', padding: 8, cursor: 'pointer' }}
            aria-label="Close menu"
          >
            <Icon name="close" size={24} />
          </button>
        </div>

        <nav style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
          {/* Services expandable */}
          <div style={{ borderBottom: '1px solid var(--bp-line)' }}>
            <button
              onClick={() => toggleMobile('services')}
              style={{
                width: '100%', fontSize: 22, fontWeight: 700,
                padding: '18px 0', background: 'none', border: 'none', cursor: 'pointer',
                color: 'var(--bp-ink)', display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                textAlign: 'left',
              }}
            >
              Services
              <Icon name="chevron-down" size={20} />
            </button>
            {mobileExpanded === 'services' && (
              <div style={{ paddingBottom: 12, display: 'flex', flexDirection: 'column', gap: 0 }}>
                {SERVICES.map(s => (
                  <Link
                    key={s.slug}
                    href={`/services/${s.slug}`}
                    onClick={closeAll}
                    style={{
                      fontSize: 15, fontWeight: 500, color: 'var(--bp-stone-600)',
                      padding: '10px 0 10px 16px',
                      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                    }}
                  >
                    {s.label} <Icon name="arrow" size={14} />
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Areas expandable */}
          <div style={{ borderBottom: '1px solid var(--bp-line)' }}>
            <button
              onClick={() => toggleMobile('areas')}
              style={{
                width: '100%', fontSize: 22, fontWeight: 700,
                padding: '18px 0', background: 'none', border: 'none', cursor: 'pointer',
                color: 'var(--bp-ink)', display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                textAlign: 'left',
              }}
            >
              Areas
              <Icon name="chevron-down" size={20} />
            </button>
            {mobileExpanded === 'areas' && (
              <div style={{ paddingBottom: 12, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 0 }}>
                {BP_AREAS.map(a => (
                  <Link
                    key={a}
                    href={`/areas/${a.toLowerCase().replace(/\s+/g, '-')}`}
                    onClick={closeAll}
                    style={{
                      fontSize: 15, fontWeight: 500, color: 'var(--bp-stone-600)',
                      padding: '10px 0 10px 16px',
                    }}
                  >
                    {a}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Simple nav links */}
          {SIMPLE_NAV.map(item => (
            <Link key={item.label} href={item.href}
              onClick={closeAll}
              style={{
                fontSize: 22, fontWeight: 700,
                padding: '18px 0',
                borderBottom: '1px solid var(--bp-line)',
                color: 'var(--bp-ink)',
                display: 'flex', alignItems: 'center', justifyContent: 'space-between',
              }}>
              {item.label}
              <Icon name="arrow" size={18} />
            </Link>
          ))}
        </nav>

        <div style={{ marginTop: 32, display: 'flex', flexDirection: 'column', gap: 12 }}>
          <a href={BP_PHONE_TEL} className="bp-btn bp-btn--cta bp-btn--lg mobile-full">
            <Icon name="phone" size={18} stroke="#fff" />
            Call {BP_PHONE}
          </a>
          <Link href="/contact" className="bp-btn bp-btn--ghost bp-btn--lg mobile-full" onClick={closeAll}>
            Get a free quote
          </Link>
        </div>
      </div>
    </>
  );
}
