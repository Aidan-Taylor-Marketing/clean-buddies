// Shared "blueprint" design helpers used across dark sections.

export const blueprintGrid: React.CSSProperties = {
  backgroundImage:
    "linear-gradient(rgba(56,182,255,.6) 1px, transparent 1px), linear-gradient(90deg, rgba(56,182,255,.6) 1px, transparent 1px)",
  backgroundSize: "48px 48px",
};

export function BlueprintGrid({ className = "" }: { className?: string }) {
  return (
    <div
      aria-hidden
      className={`pointer-events-none absolute inset-0 opacity-[0.06] ${className}`}
      style={blueprintGrid}
    />
  );
}

export function Anno({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <span
      className={`pointer-events-none absolute font-mono text-[11px] uppercase tracking-widest text-primary/40 ${className}`}
    >
      {children}
    </span>
  );
}
