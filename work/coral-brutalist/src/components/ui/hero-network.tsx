"use client"

import { motion, useReducedMotion } from "framer-motion"

const nodes = [
  { x: 80, y: 120, r: 4 },
  { x: 220, y: 80, r: 3 },
  { x: 180, y: 260, r: 5 },
  { x: 350, y: 150, r: 3 },
  { x: 420, y: 320, r: 4 },
  { x: 150, y: 450, r: 3 },
  { x: 300, y: 500, r: 5 },
  { x: 500, y: 200, r: 4 },
  { x: 550, y: 420, r: 3 },
  { x: 650, y: 100, r: 4 },
  { x: 700, y: 300, r: 3 },
  { x: 480, y: 600, r: 4 },
  { x: 250, y: 700, r: 3 },
  { x: 600, y: 700, r: 5 },
  { x: 100, y: 600, r: 4 },
  { x: 800, y: 500, r: 3 },
  { x: 950, y: 200, r: 3 },
  { x: 400, y: 780, r: 4 },
]

const edges: [number, number][] = [
  [0, 1], [0, 2], [1, 3], [2, 4], [2, 5],
  [3, 7], [4, 8], [5, 6], [5, 14], [6, 12],
  [7, 9], [7, 10], [8, 10], [8, 11], [9, 16],
  [10, 15], [11, 13], [12, 17], [13, 17], [14, 12],
]

const accentNodeIndices = [2, 7, 10, 13]
const accentIndices = new Set(accentNodeIndices)

const pulseDelays = [0, 1.2, 2.4, 3.6]

export function HeroNetwork({ className }: { className?: string }) {
  const prefersReducedMotion = useReducedMotion()

  return (
    <svg
      className={className}
      viewBox="0 0 1200 900"
      width="100%"
      height="100%"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
    >
      {edges.map(([a, b]) => (
        <line
          key={`e-${a}-${b}`}
          x1={nodes[a].x}
          y1={nodes[a].y}
          x2={nodes[b].x}
          y2={nodes[b].y}
          stroke="#202020"
          strokeWidth={0.75}
          opacity={0.06}
        />
      ))}

      {nodes.map((node, i) => {
        const isAccent = accentIndices.has(i)

        if (isAccent && !prefersReducedMotion) {
          const delayIndex = accentNodeIndices.indexOf(i)
          return (
            <motion.circle
              key={`n-${i}`}
              cx={node.x}
              cy={node.y}
              r={node.r}
              fill="#202020"
              initial={{ opacity: 0.12, scale: 1 }}
              animate={{ opacity: [0.12, 0.22, 0.12], scale: [1, 1.4, 1] }}
              transition={{
                duration: 3.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: pulseDelays[delayIndex],
              }}
            />
          )
        }

        return (
          <circle
            key={`n-${i}`}
            cx={node.x}
            cy={node.y}
            r={node.r}
            fill="#202020"
            opacity={isAccent ? 0.15 : 0.12}
          />
        )
      })}

      {!prefersReducedMotion && (
        <motion.circle
          r={2}
          fill="#202020"
          initial={{ cx: 350, cy: 150, opacity: 0.18 }}
          animate={{ cx: [350, 500], cy: [150, 200] }}
          transition={{
            duration: 8,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "linear",
          }}
        />
      )}
    </svg>
  )
}
