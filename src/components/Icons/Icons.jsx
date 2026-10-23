const baseProps = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": true,
  focusable: false,
};

export function ArrowUpRight({ size = 16 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" {...baseProps}>
      <path d="M7 17 17 7M8 7h9v9" />
    </svg>
  );
}

export function ArrowRight({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" {...baseProps}>
      <path d="M4 12h16M14 6l6 6-6 6" />
    </svg>
  );
}

export function ArrowLeft({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" {...baseProps}>
      <path d="M20 12H4M10 6l-6 6 6 6" />
    </svg>
  );
}

export function ArrowDown({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" {...baseProps}>
      <path d="M12 4v16M6 14l6 6 6-6" />
    </svg>
  );
}

export function Close({ size = 22 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" {...baseProps}>
      <path d="M5 5l14 14M19 5 5 19" />
    </svg>
  );
}

export function Instagram({ size = 20 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" {...baseProps}>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.2" cy="6.8" r="0.9" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function Linkedin({ size = 20 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" {...baseProps}>
      <path d="M4.5 9.5v10M4.5 5.2v.1" />
      <path d="M10 19.5v-6a3.5 3.5 0 0 1 7 0v6" />
      <path d="M10 19.5v-10" />
    </svg>
  );
}

export function Mail({ size = 20 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" {...baseProps}>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m4 7 8 6 8-6" />
    </svg>
  );
}

export function Whatsapp({ size = 20 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" {...baseProps}>
      <path d="M20.2 11.7a8.2 8.2 0 0 1-12.1 7.2L3.6 20l1.1-4.4A8.2 8.2 0 1 1 20.2 11.7Z" />
      <path d="M8.8 8.6c-.3.1-.8.5-.8 1.3 0 1.9 2.8 4.8 4.9 5.2.8.2 1.3-.1 1.6-.4l.6-.7-1.5-.9-.7.6c-.7-.3-1.8-1.3-2.2-2.1l.5-.6-.8-1.5c-.4-.3-1.1-.1-1.6.1Z" />
    </svg>
  );
}

export function Phone({ size = 20 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" {...baseProps}>
      <path d="M6.6 3.5 9 8l-1.8 1.8a13.5 13.5 0 0 0 7 7L16 15l4.5 2.4v2.1a1.5 1.5 0 0 1-1.6 1.5C10.5 20.4 3.6 13.5 3 5.1a1.5 1.5 0 0 1 1.5-1.6h2.1Z" />
    </svg>
  );
}
