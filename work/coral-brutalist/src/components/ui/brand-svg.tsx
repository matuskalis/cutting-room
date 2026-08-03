interface BrandSvgProps {
  className?: string
  fill?: string
}

export function BrandSvg({
  className = "",
  fill = "currentColor",
}: BrandSvgProps) {
  return (
    <svg
      viewBox="0 0 800 80"
      className={className}
      fill={fill}
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Northbound Systems"
    >
      <text
        x="0"
        y="65"
        fontFamily="var(--font-geist-sans), Inter, system-ui, sans-serif"
        fontWeight="500"
        fontSize="72"
        letterSpacing="-3"
      >
        Northbound Systems
      </text>
    </svg>
  )
}
