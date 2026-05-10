type Props = {
  className?: string
  /** Empty string when the logo sits beside visible text */
  alt?: string
}

/** Official brand lockup — `public/restor logo.svg` */
export function LuxuryLogo({ className = '', alt = 'Samaar Riyadh' }: Props) {
  return (
    <img
      src="/restor%20logo.svg"
      alt={alt}
      width={843}
      height={595}
      decoding="async"
      className={`h-auto max-h-[120px] w-auto max-w-full object-contain object-start ${className}`}
    />
  )
}
