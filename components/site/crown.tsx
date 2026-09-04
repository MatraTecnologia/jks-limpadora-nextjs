import { cn } from "@/lib/utils";

export const Crown = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 48 40" fill="currentColor" aria-hidden="true" className={cn("size-6", className)}>
    <path d="M4 12l10 9 10-15 10 15 10-9-4 22H8L4 12z" />
    <rect x="8" y="36" width="32" height="4" rx="1" />
    <circle cx="4" cy="10" r="3" />
    <circle cx="24" cy="4" r="3" />
    <circle cx="44" cy="10" r="3" />
  </svg>
);
