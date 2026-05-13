import ReactMarkdown from 'react-markdown';

const HTML_LINK_MAP: Record<string, string> = {
  'blocked-drains.html':          '/services/blocked-drains',
  'emergency-drainage.html':      '/services/emergency-drainage',
  'drain-lining.html':            '/services/drain-lining',
  'drain-repairs.html':           '/services/drain-repairs',
  'cctv-drain-surveys.html':      '/services/cctv-drain-surveys',
  'gutter-cleaning.html':         '/services/gutter-cleaning',
  'homebuyer-drain-survey.html':  '/services/homebuyer-drain-surveys',
  'margate.html':                 '/areas/margate',
  'faversham.html':               '/areas/faversham',
  'broadstairs.html':             '/areas/broadstairs',
  'whitstable.html':              '/areas/whitstable',
  'canterbury.html':              '/areas/canterbury',
  'herne-bay.html':               '/areas/herne-bay',
  'dover.html':                   '/areas/dover',
  'thanet.html':                  '/areas/thanet',
  'ashford.html':                 '/areas/ashford',
  'folkestone.html':              '/areas/folkestone',
  'ramsgate.html':                '/areas/ramsgate',
  'areas-we-cover.html':          '/',
  'contact-us.html':              '/contact',
  'testimonials.html':            '/testimonials',
  'gallery.html':                 '/gallery',
};

function rewrite(href: string): string {
  return HTML_LINK_MAP[href] ?? href;
}

export default function MarkdownBody({ content }: { content: string }) {
  return (
    <div className="bp-prose">
      <ReactMarkdown
        components={{
          a: ({ href, children }) => (
            <a href={rewrite(href ?? '')}>{children}</a>
          ),
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
}
