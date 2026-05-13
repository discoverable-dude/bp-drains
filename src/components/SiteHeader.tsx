'use client';

import { useState } from 'react';
import Link from 'next/link';
import Logo from './Logo';
import Icon from './Icon';
import { BP_PHONE, BP_PHONE_TEL } from '@/lib/constants';

const NAV_ITEMS = [
  { label: 'Services',      href: '/services/blocked-drains' },
  { label: 'Areas',         href: '/areas/margate' },
  { label: 'Gallery',       href: '/gallery' },
  { label: 'Testimonials',  href: '/testimonials' },
  { label: 'Contact',       href: '/contact' },
];

interface SiteHeaderProps {
  active?: string;
}

export default function SiteHeader({ active }: SiteHeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);

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

          <nav className="nav-desktop">
            {NAV_ITEMS.map(item => (
              <Link key={item.label} href={item.href} style={{
                fontSize: 14, fontWeight: 500, color: 'var(--bp-ink)',
                padding: '8px 0',
                borderBottom: active === item.label ? '2px solid var(--bp-ink)' : '2px solid transparent',
              }}>{item.label}</Link>
            ))}
          </nav>

          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <a href={BP_PHONE_TEL} className="nav-phone">
              <Icon name="phone" size={14} />
              {BP_PHONE}
            </a>
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
          {NAV_ITEMS.map(item => (
            <Link key={item.label} href={item.href}
              onClick={() => setMenuOpen(false)}
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
          <Link href="/contact" className="bp-btn bp-btn--ghost bp-btn--lg mobile-full" onClick={() => setMenuOpen(false)}>
            Get a free quote
          </Link>
        </div>
      </div>
    </>
  );
}
