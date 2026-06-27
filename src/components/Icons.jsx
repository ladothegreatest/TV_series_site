export function LogoIcon() {
  return (
    <svg width="32" height="26" viewBox="0 0 32 26" fill="none" aria-hidden="true">
      <path
        d="M2 0h4.9l2 6H4.7L2 0Zm8.3 0h4.9l2 6h-4.2l-2.7-6Zm8.3 0h4.9l2 6h-4.2L18.6 0ZM0 8h32v15a3 3 0 0 1-3 3H3a3 3 0 0 1-3-3V8Z"
        fill="currentColor"
      />
    </svg>
  );
}

export function GridIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <path d="M0 0h8v8H0V0Zm12 0h8v8h-8V0ZM0 12h8v8H0v-8Zm12 0h8v8h-8v-8Z" fill="currentColor" />
    </svg>
  );
}

export function MovieIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <rect x="2" y="1" width="16" height="18" rx="2" stroke="currentColor" strokeWidth="2" />
      <path d="M6 1v18M14 1v18M2 6h4M14 6h4M2 14h4M14 14h4" stroke="currentColor" strokeWidth="2" />
    </svg>
  );
}

export function TvIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <rect x="2" y="5" width="16" height="12" rx="1.5" stroke="currentColor" strokeWidth="2" />
      <path d="m7 1 3 4 3-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="14.8" cy="11" r="1.2" fill="currentColor" />
    </svg>
  );
}

export function BookmarkNavIcon() {
  return (
    <svg width="17" height="20" viewBox="0 0 17 20" fill="none" aria-hidden="true">
      <path d="M15.4 19 8.5 14.9 1.6 19V2.6A1.6 1.6 0 0 1 3.2 1h10.6a1.6 1.6 0 0 1 1.6 1.6V19Z" fill="currentColor" />
    </svg>
  );
}

export function SearchIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
      <path
        d="M14.5 25C20.299 25 25 20.299 25 14.5S20.299 4 14.5 4 4 8.701 4 14.5 8.701 25 14.5 25ZM22 22l6 6"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function CategoryTvIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <rect x="2" y="6" width="16" height="11" rx="1.5" fill="currentColor" />
      <path d="m7 2 3 4 3-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

export function BookmarkIcon({ filled = false }) {
  return (
    <svg width="12" height="14" viewBox="0 0 12 14" fill="none" aria-hidden="true">
      <path
        d="M10.6 13 6 10.2 1.4 13V2.2c0-.7.5-1.2 1.2-1.2h6.8c.7 0 1.2.5 1.2 1.2V13Z"
        fill={filled ? 'currentColor' : 'none'}
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function AvatarIcon() {
  return (
    <svg
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <circle
        cx="20"
        cy="20"
        r="19.5"
        fill="url(#avatarPattern)"
        stroke="white"
      />

      <defs>
        <pattern
          id="avatarPattern"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <use href="#avatarImage" transform="scale(0.00390625)" />
        </pattern>

        <image
          id="avatarImage"
          width="256"
          height="256"
          preserveAspectRatio="none"
          href="data:image/png;base64,PASTE_THE_BIG_BASE64_HERE"
        />
      </defs>
    </svg>
  );
}
