import Link from 'next/link';
import Image from 'next/image';

interface LogoProps {
  onDark?: boolean;
  size?: 'sm' | 'md' | 'lg';
}

const ASPECT = 421.24 / 159.01;

export default function Logo({ size = 'md' }: LogoProps) {
  const heightMap = { sm: 28, md: 36, lg: 52 };
  const h = heightMap[size];
  const w = Math.round(h * ASPECT);

  return (
    <Link href="/" style={{ display: 'inline-flex', alignItems: 'center' }}>
      <Image
        src="/logos/bp-drains-logo.svg"
        alt="BP Drains South East"
        width={w}
        height={h}
        priority
      />
    </Link>
  );
}
