interface IconProps {
  name: string;
  size?: number;
  stroke?: string;
}

export default function Icon({ name, size = 24, stroke = 'currentColor' }: IconProps) {
  const props = {
    width: size, height: size, viewBox: '0 0 24 24',
    fill: 'none', stroke, strokeWidth: 1.5,
    strokeLinecap: 'round' as const, strokeLinejoin: 'round' as const,
    style: { flex: '0 0 auto' },
    'aria-hidden': true,
  };
  switch (name) {
    case 'phone': return (
      <svg {...props}><path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A15 15 0 0 1 3 6a2 2 0 0 1 2-2z"/></svg>
    );
    case 'message': return (
      <svg {...props}><path d="M4 5h16v11H8l-4 4z"/><path d="M8 10h8M8 13h5"/></svg>
    );
    case 'blocked': return (
      <svg {...props}><rect x="3" y="9" width="18" height="6" rx="1"/><path d="M9 6l6 12M15 6l-6 12"/></svg>
    );
    case 'cctv': return (
      <svg {...props}><path d="M3 7h14l4 4v3H3z"/><circle cx="9" cy="11" r="2"/><path d="M21 14v3H7M7 17v3"/></svg>
    );
    case 'repair': return (
      <svg {...props}><path d="M14 4l3 3-2 2 4 4-3 3-4-4-2 2-3-3 7-7z"/><path d="M5 19l4-4"/></svg>
    );
    case 'jetting': return (
      <svg {...props}><path d="M3 12h6"/><path d="M9 9l4 3-4 3z" fill={stroke}/><path d="M14 7c2 1 3 3 3 5s-1 4-3 5"/><path d="M17 4c3 2 4 5 4 8s-1 6-4 8"/></svg>
    );
    case 'tanker': return (
      <svg {...props}><rect x="3" y="8" width="14" height="8" rx="1"/><path d="M17 10h2l2 4v2h-4"/><circle cx="7" cy="18" r="2"/><circle cx="18" cy="18" r="2"/></svg>
    );
    case 'sewer': return (
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
      <svg {...props} fill={stroke} stroke="none"><path d="M12 3l2.5 6 6.5.5-5 4.5 1.5 6.5L12 17l-5.5 3.5L8 14 3 9.5 9.5 9z"/></svg>
    );
    case 'chevron-down': return (
      <svg {...props}><path d="M6 9l6 6 6-6"/></svg>
    );
    case 'menu': return (
      <svg {...props}><path d="M4 7h16M4 12h16M4 17h16"/></svg>
    );
    case 'close': return (
      <svg {...props}><path d="M6 6l12 12M18 6L6 18"/></svg>
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
