type VidlyLogoProps = {
  size?: number;
  className?: string;
};

/** Inline SVG mark — dark surface + sky accent (matches extension overlay, no white tile). */
export function VidlyLogo({ size = 40, className }: VidlyLogoProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 32 32"
      width={size}
      height={size}
      className={className}
      aria-hidden
    >
      <rect
        width="32"
        height="32"
        rx="9"
        fill="#0c1220"
        stroke="rgba(125, 211, 252, 0.35)"
        strokeWidth="0.75"
      />
      <path d="M11 9.5 22 16 11 22.5z" fill="#7dd3fc" />
    </svg>
  );
}
