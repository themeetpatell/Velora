export function SiteBackdrop() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <div className="absolute inset-0 site-space-grid opacity-60" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(0,229,255,0.06),transparent_34%),radial-gradient(circle_at_80%_35%,rgba(122,236,255,0.05),transparent_24%),radial-gradient(circle_at_12%_62%,rgba(255,255,255,0.03),transparent_22%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(5,5,5,0.18)_0%,rgba(5,5,5,0.34)_42%,rgba(5,5,5,0.52)_100%)]" />
    </div>
  );
}
