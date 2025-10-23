'use client'

import type { CSSProperties } from 'react'

type SunShineProps = {
  className?: string
}

export function SunShine({ className }: SunShineProps) {
  const rays = Array.from({ length: 6 })
  const containerClass = ['sunshine', className].filter(Boolean).join(' ')

  return (
    <div className={containerClass} aria-hidden="true">
      <div className="sunshine__halo" />
      <div className="sunshine__core" />
      <div className="sunshine__rays">
        {rays.map((_, index) => {
          const baseAngle = (360 / rays.length) * index
          const direction = index % 2 === 0 ? 1 : -1
          const duration = 14 + index * 1.75
          const style = {
            '--sunshine-ray-rotation-from': `${baseAngle}deg`,
            '--sunshine-ray-rotation-to': `${baseAngle + 360 * direction}deg`,
            '--sunshine-ray-duration': `${duration}s`
          } as CSSProperties

          return <span key={index} className="sunshine__ray" style={style} />
        })}
      </div>

      <style jsx>{`
        .sunshine {
          position: relative;
          width: 18rem;
          height: 18rem;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .sunshine__halo {
          position: absolute;
          inset: 0;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(255, 255, 255, 0.95), rgba(255, 255, 255, 0.4) 60%, rgba(255, 255, 255, 0) 75%);
          filter: blur(8px);
          transform: scale(1.5);
        }

        .sunshine__core {
          width: 11rem;
          height: 11rem;
          border-radius: 50%;
          background: #ffffff;
          box-shadow:
            0 0 45px rgba(255, 255, 255, 0.95),
            0 0 120px rgba(255, 255, 255, 0.6),
            0 0 200px rgba(255, 255, 255, 0.4);
          position: relative;
          z-index: 2;
        }

        .sunshine__rays {
          position: absolute;
          inset: 0;
        }

        .sunshine__ray {
          position: absolute;
          width: 200%;
          height: 1px;
          top: 50%;
          left: 50%;
          margin: -0.5px 0 0 0;
          background: linear-gradient(to right, rgba(255, 255, 255, 0.9) 0%, rgba(255, 255, 255, 0) 100%);
          border-radius: 999px;
          box-shadow: 0 0 18px rgba(255, 255, 255, 0.7);
          transform-origin: 0 0;
          animation: sunshineRaySpin var(--sunshine-ray-duration) linear infinite;
          filter: blur(0.2px);
        }

        .sunshine__ray::after {
          content: '';
          position: absolute;
          inset: 0;
          background: inherit;
          opacity: 0.55;
          transform: rotate(180deg);
          border-radius: inherit;
        }

        @keyframes sunshineRaySpin {
          from {
            transform: rotate(var(--sunshine-ray-rotation-from));
          }
          to {
            transform: rotate(var(--sunshine-ray-rotation-to));
          }
        }

        @media (max-width: 640px) {
          .sunshine {
            width: 14rem;
            height: 14rem;
          }

          .sunshine__core {
            width: 8rem;
            height: 8rem;
          }
        }
      `}</style>
    </div>
  )
}
