import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'Northbound Systems - Built for Mission'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: 'linear-gradient(135deg, #1a365d 0%, #2d4a7c 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: 'system-ui',
        }}
      >
        {/* Gold accent line at top */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: 8,
            background: '#d4af37',
          }}
        />

        {/* Company name */}
        <div
          style={{
            fontSize: 72,
            fontWeight: 700,
            color: 'white',
            marginBottom: 16,
          }}
        >
          Northbound Systems
        </div>

        {/* Tagline */}
        <div
          style={{
            fontSize: 32,
            color: '#d4af37',
            marginBottom: 40,
          }}
        >
          Built for Mission. Delivered with Precision.
        </div>

        {/* SDVOSB Badge */}
        <div
          style={{
            background: 'rgba(255,255,255,0.1)',
            padding: '12px 24px',
            borderRadius: 8,
            border: '1px solid rgba(212, 175, 55, 0.5)',
            fontSize: 18,
            color: 'white',
          }}
        >
          Service-Disabled Veteran-Owned Small Business
        </div>
      </div>
    ),
    { ...size }
  )
}
