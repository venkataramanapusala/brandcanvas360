import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'BrandCanvas360 digital marketing agency';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          alignItems: 'center',
          background: 'linear-gradient(135deg, #711607 0%, #3B0804 100%)',
          color: '#FFF8F2',
          display: 'flex',
          flexDirection: 'column',
          height: '100%',
          justifyContent: 'center',
          padding: '80px',
          textAlign: 'center',
          width: '100%',
        }}
      >
        <div style={{ color: '#FFD166', fontSize: 34, fontWeight: 700, letterSpacing: 5 }}>
          BRANDCANVAS360
        </div>
        <div style={{ fontSize: 74, fontWeight: 800, lineHeight: 1.1, marginTop: 34 }}>
          Digital Marketing That Drives Growth
        </div>
        <div style={{ color: '#FFE0D2', fontSize: 32, marginTop: 34 }}>
          SEO, paid media, content, and conversion-focused web strategies
        </div>
      </div>
    ),
    size
  );
}